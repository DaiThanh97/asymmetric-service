import { Context } from 'mali';
import {
  ERROR_NAME_ASYM,
  NOTI_ASYM
} from '../../constants/noti';
import gameRepository from '../../repository/game';
import progressRepository from '../../repository/progress';
import jackpotRepository from '../../repository/jackpot';
import logRepository from '../../repository/log';
import {
  SetBetRequest,
  SetBetResponse,
  SpinRequest,
} from '../../schemas/games/game_pb';
import ResponseUtils from '../../utils/response';
import {
  errorHandler,
  InternalError,
  NotFoundError
} from '@galaxy-fortune/common';
import UserPublisher from '../../publishers/user';
import SettingsPublisher from '../../publishers/settings';
import PoolsPublisher from '../../publishers/pool';
import { ProgressDocument, ProgressPayload } from '../../types/progress';
import { CurrencyModel } from '../../schemas/user_pb';
import {
  Payline,
  SlotGameSymbol,
  RandomSymbolResult,
  ScatterPrize,
  GameDocument,
} from '../../types/game';
import { JP_ROW, RandomState } from '../../constants/common';
import CommonUtils from '../../utils/common';

const setBet = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as SetBetRequest).toObject();
  const bearerToken = ctx.metadata.authorization;
  const { gameId, betValue } = request;

  // Get current user info
  const userResponse = await UserPublisher.getCurrentUser(bearerToken);
  const currentUserRPC = userResponse.getUser();
  if (!currentUserRPC) {
    throw new NotFoundError(
      NOTI_ASYM.INVALID_USER,
      ERROR_NAME_ASYM.INVALID_USER
    );
  }

  const { id, player } = currentUserRPC.toObject();
  const currentCurrency = player!.currentCurrency;

  // Check if game is existed and bet available
  const game = await gameRepository.getGameByIdAndBetAvailable(
    gameId,
    currentCurrency,
    betValue
  );
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME_OR_BET_AVAILABLE,
      ERROR_NAME_ASYM.ERROR_NO_GAME_OR_BET_AVAILABLE
    );
  }

  // Upsert game progress payload
  const payload: ProgressPayload = {
    gameId,
    playerId: id.toString(),
    currency: currentCurrency,
    currentBet: betValue,
    freeSpinsAvailable: 0,
    freeSpinsPrizeMultiplier: 1,
    bettingPaylines: []
  };

  const progress = await progressRepository.upsertProgress(payload);
  if (!progress) {
    throw new InternalError(
      NOTI_ASYM.ERROR_SET_BET,
      ERROR_NAME_ASYM.ERROR_SET_BET
    );
  }

  // Response
  const response = new SetBetResponse();
  response.setGameProgress(ResponseUtils.initializeGameProgressResponse(progress));
  ctx.res = response;
});

const getSymbolByRatio = (
  slotSymbols: SlotGameSymbol[],
  state: RandomState,
  filterWild: boolean
): SlotGameSymbol => {
  switch (state) {
    case RandomState.NoJP: {
      slotSymbols = slotSymbols.filter(slot =>
        !slot.isJackpot && filterWild ? !slot.isWild : true
      );
      break;
    }
    case RandomState.NoScatter: {
      slotSymbols = slotSymbols.filter(slot =>
        !slot.isScatter && filterWild ? !slot.isWild : true
      );
      break;
    }
  }
  const expanded = slotSymbols.flatMap(slot => Array(slot.chanceRatio).fill(slot));
  const random = CommonUtils.cryptoRandom(0, expanded.length - 1);
  return expanded[random];
};

const randomSymbols = (
  columnRowCounts: number[],
  slotSymbols: SlotGameSymbol[]
): SlotGameSymbol[][] => {
  const scatterMap = new Map();
  const symbols: SlotGameSymbol[][] = [];
  columnRowCounts.forEach((col, index) => {
    const column = [];
    for (let i = 0; i < col; i++) {
      const state = i === JP_ROW[index] ? RandomState.Normal : RandomState.NoJP;
      // Check first col for WILD item
      // If not JP row then filter out all jackpot
      const isFirstColumn = index === 0;
      let item = getSymbolByRatio(slotSymbols, state, isFirstColumn);
      if (item.isScatter) {
        // Column doesn't have scatter
        !scatterMap.has(index) ?
          scatterMap.set(index, true)
          : item = getSymbolByRatio(slotSymbols, RandomState.NoScatter, isFirstColumn);
      }
      column.push(item);
    }
    symbols.push(column);
  });
  // Show table in console log - dev
  CommonUtils.showConsoleTableSlot(symbols);
  // return symbols;
  return symbols;
};

const processScatter = (
  isScatter: boolean,
  countSame: number,
  scatterPrizes: ScatterPrize[]
) => {
  if (!isScatter)
    return {
      prize: 0,
      freeSpins: 0,
      freeSpinMultiplier: 1,
      currentSpinMultiplier: 1,
      wonFreeSpin: false,
    };

  const {
    prize,
    freeSpins,
    freeSpinMultiplier,
    currentSpinMultiplier
  } = scatterPrizes[countSame - 1];

  return {
    prize,
    freeSpins,
    freeSpinMultiplier,
    currentSpinMultiplier,
    wonFreeSpin: freeSpins || prize,
  };
};

const calculatePrize = (
  rowLength: number,
  currentBet: number,
  symbols: SlotGameSymbol[][],
  bettingPaylines: Payline[],
  scatterPrizes: ScatterPrize[],
  highestSymbolValue: number,
  freeSpinsPrizeMultiplier: number
): RandomSymbolResult => {
  // Initialize
  let wonMoney = 0;
  let wonJackpot = false;
  let freeSpins = 0;
  let freeSpinMultiplier = 1;
  let currentSpinMultiplier = 1;
  const wonPaylines: Payline[] = [];

  for (const line of bettingPaylines) {
    const { rowIndex } = line; // [1,2,3,2]
    // Calculate same symbol
    // TODO: Check JP
    let countSame = 1;
    const firstSymbol = symbols[0][rowIndex[0]]; // 1
    const {
      symbolValues,
      isJackpot,
      isWild,
      isScatter
    } = firstSymbol;
    const isSpecialItem = isJackpot || isScatter;
    for (let i = 1; i < rowLength; i++) {
      const nextSymbol = symbols[i][rowIndex[i]];
      // Check wild cannot replace Scatter + JP
      if (
        (isSpecialItem && firstSymbol._id !== nextSymbol._id) ||
        (!isSpecialItem && firstSymbol._id !== nextSymbol._id && !nextSymbol.isWild)
      )
        break;
      countSame++;
    }

    // Check JP
    if (countSame === rowLength && isJackpot) {
      wonJackpot = true;
    }

    // Check SCATTER      
    const scatter = processScatter(isScatter, countSame, scatterPrizes);
    if (scatter.prize) {
      currentSpinMultiplier = scatter.currentSpinMultiplier;
    }
    if (scatter.freeSpins) {
      freeSpins = scatter.freeSpins;
      freeSpinMultiplier = scatter.freeSpinMultiplier;
    }

    // Check WILD
    const wonWild = countSame === rowLength && isWild;

    // Calculate money
    // If won WILD then get the highest symbol value
    const symbolValue = wonWild ? highestSymbolValue : symbolValues[countSame - 1];
    const wonLineMoney = (symbolValue + scatter.prize) * currentBet;
    wonMoney += wonLineMoney;
    if (wonLineMoney || scatter.wonFreeSpin) {
      wonPaylines.push({ ...line }); // Add won payline
    };
  }
  /**
   * Multiply if won SCATTER
   * if prize > 0 => wonMoney *= currentSpinMultiplier;
   *  else        => wonMoney *= freeSpinsPrizeMultiplier;
   */
  wonMoney *= freeSpinsPrizeMultiplier * currentSpinMultiplier;

  return {
    symbols: symbols.flat(),
    wonJackpot,
    wonMoney,
    wonPaylines,
    freeSpinInfo: {
      freeSpins,
      freeSpinMultiplier
    }
  };
};

const proccessWinPool = async (game: GameDocument, progress: ProgressDocument) => {
  const { slotSymbols, scatterPrizes, columnRowCounts } = game;
  const { bettingPaylines, currentBet, currency, freeSpinsPrizeMultiplier } = progress;
  const totalBettingPayline = bettingPaylines.length;
  const rowLength = columnRowCounts.length;

  // Filter out all symbol has minimum payline greater than betting lines
  const symbolsWillAppear = slotSymbols.filter(slot =>
    totalBettingPayline >= slot.minimumPaylineToAppear
  );

  // Wild item purpose
  const highestSymbolValue = Math.max(...symbolsWillAppear.map(slot =>
    slot.symbolValues[rowLength - 1]
  ));

  // Random a list symbol
  const listSymbol = randomSymbols(columnRowCounts, symbolsWillAppear);
  // Calculate win result
  const result = await calculatePrize(
    rowLength,
    currentBet,
    listSymbol,
    bettingPaylines,
    scatterPrizes,
    highestSymbolValue,
    freeSpinsPrizeMultiplier
  );

  // If prize is 0 then break loop
  if (!result.wonMoney)
    return { result, enoughPool: true };

  // Reduce coin pool
  const reduceCoinResult = await PoolsPublisher.reduceCoinsToPool(
    result.wonMoney,
    currency
  );

  return {
    result,
    enoughPool: reduceCoinResult.enoughPool
  };
};

const spin = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as SpinRequest).toObject();
  const { gameId } = request;
  const bearerToken = ctx.metadata.authorization;

  // Check if gameId is existed
  const game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  // Get current user info
  const userResponse = await UserPublisher.getCurrentUser(bearerToken);
  const currentUserRPC = userResponse.getUser();
  if (!currentUserRPC) {
    throw new NotFoundError(
      NOTI_ASYM.INVALID_USER,
      ERROR_NAME_ASYM.INVALID_USER
    );
  }

  const { id: playerId, player } = currentUserRPC.toObject();
  const { currentCurrency, currentGoldCoins, currentSweepCoins } = player!;

  // Check if game progress is existed
  const progress = await progressRepository.getProgress(
    gameId,
    playerId.toString(),
    currentCurrency
  );
  if (!progress) {
    throw new NotFoundError(
      NOTI_ASYM.NOT_FOUND_GAME_PROGRESS,
      ERROR_NAME_ASYM.NOT_FOUND_GAME_PROGRESS
    );
  }

  // Progress info
  const {
    bettingPaylines,
    currentBet,
    freeSpinsAvailable
  } = progress;

  // Check if 0 freespin => reduce coin user
  const totalBet = currentBet * bettingPaylines.length;
  if (!freeSpinsAvailable) {
    await UserPublisher.reduceCoinsToPlayer(playerId, currentCurrency, totalBet);
  }
  else {
    // Reduce free spin available
    await progressRepository.reduceFreeSpinAvailable(progress._id);
  }

  // Get settings
  const settingsRPC = await SettingsPublisher.getSettings();
  const { settings } = settingsRPC.toObject();
  if (!settings) {
    throw new InternalError(
      NOTI_ASYM.ERROR_GET_SETTINGS,
      ERROR_NAME_ASYM.ERROR_GET_SETTINGS
    );
  }

  // Add coin to pool
  const {
    goldcoinholdrate,
    sweepcoinholdrate,
    goldcoinjackpotcontribution,
    sweepcoinjackpotcontribution,
    goldcoinminimumjackpot,
    sweepcoinminimumjackpot
  } = settings;
  const IS_GOLD_COIN = currentCurrency === CurrencyModel.CURRENCY_GOLD_COINS;
  const holdRate = IS_GOLD_COIN ? goldcoinholdrate : sweepcoinholdrate;

  // If no free spin available
  if (!freeSpinsAvailable) {
    // Increase jackpot value
    const contribution = IS_GOLD_COIN ?
      goldcoinjackpotcontribution
      : sweepcoinjackpotcontribution;

    const jpContribute = totalBet * contribution;
    jackpotRepository.updateJackpotContribute(
      game._id,
      currentBet,
      currentCurrency,
      jpContribute
    );

    const coin = totalBet * (1 - holdRate);
    await PoolsPublisher.addCoinsToPool(coin, currentCurrency);
  }

  const {
    gameName,
    slotSymbols
  } = game;
  let isEnoughPool = false;
  let result: RandomSymbolResult;

  // Keep random until pool has enough money to pay or prize 0
  while (!isEnoughPool) {
    const processResult = await proccessWinPool(
      game as GameDocument,
      progress as ProgressDocument
    );
    result = processResult.result;
    isEnoughPool = processResult.enoughPool;
  }

  let {
    wonJackpot,
    wonMoney,
    wonPaylines,
    symbols,
    freeSpinInfo
  } = result!;

  // Win SCATTER => Update free spin
  if (freeSpinInfo.freeSpins) {
    // Update progress increase free spin available
    await progressRepository.updateFreeSpinAvailable(
      progress._id,
      freeSpinInfo.freeSpins,
      freeSpinInfo.freeSpinMultiplier
    );
  }

  // Process Jackpot
  let jpPrize = 0;
  if (wonJackpot) {
    const initJP = IS_GOLD_COIN ? goldcoinminimumjackpot : sweepcoinminimumjackpot;
    const initJPValue = initJP * currentBet;
    jpPrize = await jackpotRepository.awardJackpotPrize(
      game._id,
      currentBet,
      currentCurrency,
      initJPValue
    );
    wonMoney += jpPrize;
  }

  // Add won money to User
  if (wonMoney > 0) {
    await UserPublisher.addCoinsToPlayer(playerId, currentCurrency, wonMoney);
  }

  // Log game
  const moneyChange = wonMoney - totalBet;
  const currentMoney = IS_GOLD_COIN ? currentGoldCoins : currentSweepCoins;
  logRepository.createLogGame({
    playerId: playerId.toString(),
    gameName,
    gameProgress: progress._id,
    currency: progress.currencyStr,
    bet: totalBet,
    win: wonMoney,
    moneyBefore: currentMoney,
    moneyAfter: currentMoney + moneyChange,
    moneyChange,
    isJackpot: wonJackpot,
    jackpotPrize: jpPrize,
    freeSpin: freeSpinsAvailable,
    bettingPaylines,
    result: symbols.map(symbol => ({
      id: symbol._id,
      name: symbol.name
    }))
  });

  // Response 
  ctx.res = ResponseUtils.initializeSpinResponse(
    slotSymbols,
    wonMoney,
    wonJackpot,
    wonPaylines
  );
});

export default {
  setBet,
  spin
};