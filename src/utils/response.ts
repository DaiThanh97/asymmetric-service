import { LeanDocument } from "mongoose";
import {
  GameModel,
  GameProgressModel,
  SpinResponse
} from "../schemas/games/game_pb";
import {
  AsymmetricReelsSlotsGameModel
} from "../schemas/games/slotsgames/asymmetric_reels_slots_game_pb";
import {
  PaylineSlotsGameProgressModel,
  SlotsGameProgressModel
} from "../schemas/games/slotsgames/game_progress_pb";
import {
  PaylineSlotsGameResultModel,
  SlotsGameResultModel
} from "../schemas/games/slotsgames/game_result_pb";
import { PaylineModel } from "../schemas/games/slotsgames/payline_pb";
import {
  ScatterPrizeModel,
  SimpleScatterPrize,
  UpdateScatterPrizeResponse,
  UpdateSimpleScatterPrizeRequest
} from "../schemas/games/slotsgames/scatter_prize_pb";
import {
  PaylineSlotsGameModel,
  SlotsGameModel
} from "../schemas/games/slotsgames/slots_game_pb";
import { SlotsGameSymbolModel } from "../schemas/games/slotsgames/symbol_pb";
import {
  GameDocument,
  Payline,
  SlotGameSymbol
} from "../types/game";
import { ProgressDocument } from "../types/progress";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

const initializeGameModelResponse = (
  asymmetric: LeanDocument<GameDocument>
): GameModel => {
  const game = new GameModel();
  game.setId(asymmetric._id + '');
  game.setName(asymmetric.gameName);
  game.setCreatedAt(Timestamp.fromDate(asymmetric.createdAt!));
  game.setUpdatedAt(Timestamp.fromDate(asymmetric.updatedAt!));

  const slotGame = new SlotsGameModel();
  const slotSymbols: SlotsGameSymbolModel[] = [];
  asymmetric.slotSymbols?.forEach(slot => {
    const symbolModel = new SlotsGameSymbolModel();
    symbolModel.setId(slot._id.toString());
    symbolModel.setName(slot.name);
    symbolModel.setMinimumPaylineToAppear(slot.minimumPaylineToAppear);
    symbolModel.setChanceRatio(slot.chanceRatio);
    symbolModel.setIsWild(slot.isWild);
    symbolModel.setIsJackpot(slot.isJackpot);
    symbolModel.setIsScatter(slot.isScatter);
    symbolModel.setSymbolValuesList(slot.symbolValues);
    slotSymbols.push(symbolModel);
  });
  slotGame.setSlotsSymbolList(slotSymbols);
  slotGame.setGoldCoinsBetValuesList(asymmetric.availableGoldCoinsBetValues);
  slotGame.setSweepCoinsBetValuesList(asymmetric.availableSweepCoinsBetValues);
  slotGame.setRowCountsList(asymmetric.columnRowCounts);

  const scatterPrizes: ScatterPrizeModel[] = [];
  asymmetric.scatterPrizes.forEach(scatt => {
    const scatterPrize = new ScatterPrizeModel();
    const simple = new SimpleScatterPrize();
    simple.setFreeSpins(scatt.freeSpins);
    simple.setPrize(scatt.prize);
    simple.setFreeSpinsMultiplier(scatt.freeSpinMultiplier);
    simple.setCurrentSpinMultiplier(scatt.currentSpinMultiplier);
    scatterPrize.setId(scatt._id);
    scatterPrize.setSimpleScatterPrize(simple);
    scatterPrizes.push(scatterPrize);
  });
  slotGame.setScatterPrizesList(scatterPrizes);

  const paylineSlot = new PaylineSlotsGameModel();
  const paylines: PaylineModel[] = [];
  asymmetric.paylines.forEach(pline => {
    const payline = new PaylineModel();
    payline.setId(pline._id.toString());
    payline.setRowIndexList(pline.rowIndex);
    paylines.push(payline);
  });
  paylineSlot.setPaylinesList(paylines);

  const asymmetricSlotGame = new AsymmetricReelsSlotsGameModel();
  asymmetricSlotGame.setAsymmetricchance(asymmetric.asymmetricChance);
  paylineSlot.setAsymmetricReelsSlotsGame(asymmetricSlotGame);
  slotGame.setPaylineSlotsGame(paylineSlot);

  game.setSlotsGame(slotGame);
  return game;
};

const initializeGameProgressResponse = (
  gameProgress: LeanDocument<ProgressDocument>
): GameProgressModel => {
  const { bettingPaylines } = gameProgress;
  const gameProgressModel = new GameProgressModel();
  gameProgressModel.setId(gameProgress.id);
  gameProgressModel.setGameId(gameProgress.gameId);
  gameProgressModel.setPlayerId(gameProgress.playerId);
  gameProgressModel.setCurrency(gameProgress.currency);

  const slotGameProgress = new SlotsGameProgressModel();
  slotGameProgress.setCurrentBet(gameProgress.currentBet);
  slotGameProgress.setFreeSpinsAvailable(gameProgress.freeSpinsAvailable);
  slotGameProgress.setFreeSpinsPrizeMultiplier(gameProgress.freeSpinsPrizeMultiplier);

  const paylineSlotGameProgress = new PaylineSlotsGameProgressModel();
  const paylineIds: PaylineModel[] = [];
  bettingPaylines.forEach(pay => {
    const paylineModel = new PaylineModel();
    paylineModel.setId(pay._id);
    paylineModel.setRowIndexList(pay.rowIndex);
    paylineIds.push(paylineModel);
  });
  paylineSlotGameProgress.setBettingPaylinesList(paylineIds);
  slotGameProgress.setPaylineSlotsGameProgress(paylineSlotGameProgress);
  gameProgressModel.setSlotsGameProgress(slotGameProgress);
  return gameProgressModel;
};

const initializeSpinResponse = (
  symbols: SlotGameSymbol[],
  wonMoney: number,
  wonJackpot: boolean,
  wonPaylines: Payline[]
): SpinResponse => {
  const response = new SpinResponse();
  const slotResult = new SlotsGameResultModel();
  const slotMatrix: SlotsGameSymbolModel[] = [];
  symbols.forEach(res => {
    const slotGameSymbol = new SlotsGameSymbolModel();
    slotGameSymbol.setId((<any>res).id);
    slotGameSymbol.setName(res.name);
    slotGameSymbol.setMinimumPaylineToAppear(res.minimumPaylineToAppear);
    slotGameSymbol.setChanceRatio(res.chanceRatio);
    slotGameSymbol.setIsWild(res.isWild);
    slotGameSymbol.setIsJackpot(res.isJackpot);
    slotGameSymbol.setIsScatter(res.isScatter);
    slotGameSymbol.setSymbolValuesList(res.symbolValues);
    slotMatrix.push(slotGameSymbol);
  });
  slotResult.setSlotsMatrixList(slotMatrix);
  slotResult.setWonMoney(wonMoney);
  slotResult.setJackpotWon(wonJackpot);

  const wonPaylineList: PaylineModel[] = [];
  wonPaylines.forEach(line => {
    const payLine = new PaylineModel();
    payLine.setId(line._id);
    payLine.setRowIndexList(line.rowIndex);
    wonPaylineList.push(payLine);
  });

  const paylineSlotGameResult = new PaylineSlotsGameResultModel();
  paylineSlotGameResult.setWonPaylinesList(wonPaylineList);
  slotResult.setPaylineSlotsGameResult(paylineSlotGameResult);
  response.setResult(slotResult);
  return response;
};

const initializeScatterPrizeResponse = (
  scatter: UpdateSimpleScatterPrizeRequest.AsObject
) => {
  const scatterPrizeResponse = new UpdateScatterPrizeResponse();
  const scatterPrizeModel = new ScatterPrizeModel();
  scatterPrizeModel.setId(scatter.prizeId);
  const simpleScatter = new SimpleScatterPrize();
  simpleScatter.setFreeSpins(scatter.freeSpins);
  simpleScatter.setPrize(scatter.prize);
  simpleScatter.setFreeSpinsMultiplier(scatter.freeSpinsMultiplier);
  simpleScatter.setCurrentSpinMultiplier(scatter.currentSpinMultiplier);
  scatterPrizeModel.setSimpleScatterPrize(simpleScatter);
  scatterPrizeResponse.setScatterPrize(scatterPrizeModel);
  return scatterPrizeResponse;
};

export default {
  initializeGameModelResponse,
  initializeGameProgressResponse,
  initializeSpinResponse,
  initializeScatterPrizeResponse
}