import { Context } from 'mali';
import {
  ERROR_NAME_ASYM,
  NOTI_ASYM
} from '../../constants/noti';
import {
  CreateGameResponse,
  GetGameRequest,
  GetGameResponse,
  UpdateGameResponse,
} from '../../schemas/games/game_pb';
import {
  CreateAsymmetricReelsSlotsGameRequest,
  UpdateAsymmetricReelsSlotsGameRequest
} from '../../schemas/games/slotsgames/asymmetric_reels_slots_game_pb';
import {
  UpdateSimpleScatterPrizeRequest
} from '../../schemas/games/slotsgames/scatter_prize_pb';
import ResponseUtils from '../../utils/response';
import {
  BadRequestError,
  errorHandler,
  InternalError,
  JwtPayload,
  NotFoundError
} from '@galaxy-fortune/common';
import gameRepository from '../../repository/game';
import jackpotRepository from '../../repository/jackpot';
import SettingsPublisher from './../../publishers/settings';

const createGame = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as CreateAsymmetricReelsSlotsGameRequest).toObject();
  const payload = (ctx as any).payload as JwtPayload;
  const {
    gameName,
    availableGoldCoinsBetValuesList: availableGoldCoinsBetValues,
    availableSweepCoinsBetValuesList: availableSweepCoinsBetValues,
    rowCountsList: columnRowCounts,
    asymmetricChance
  } = request;

  // Get settings
  const settingsRPC = await SettingsPublisher.getSettings();
  const { settings } = settingsRPC.toObject();
  if (!settings) {
    throw new InternalError(
      NOTI_ASYM.ERROR_GET_SETTINGS,
      ERROR_NAME_ASYM.ERROR_GET_SETTINGS
    );
  }

  // Check name
  let game = await gameRepository.getGameByName(gameName);
  if (game) {
    throw new BadRequestError(
      NOTI_ASYM.ERROR_EXISTED_GAME_NAME,
      ERROR_NAME_ASYM.ERROR_EXISTED_GAME_NAME
    );
  }

  // Create new record
  game = await gameRepository.createGame({
    gameName,
    availableGoldCoinsBetValues,
    availableSweepCoinsBetValues,
    columnRowCounts,
    asymmetricChance,
    authorId: payload.id,
    authorName: payload.username
  });

  if (!game) {
    throw new InternalError(
      NOTI_ASYM.ERROR_CREATE_GAME,
      ERROR_NAME_ASYM.ERROR_CREATE_GAME
    );
  }

  // Create jackpot contribute
  const { goldcoinminimumjackpot, sweepcoinminimumjackpot } = settings;
  await jackpotRepository.createJackpotContribute(
    game._id,
    gameName,
    goldcoinminimumjackpot,
    sweepcoinminimumjackpot,
    availableGoldCoinsBetValues,
    availableSweepCoinsBetValues
  );

  // Response
  const response = new CreateGameResponse();
  response.setGame(ResponseUtils.initializeGameModelResponse(game));
  ctx.res = response;
});

const updateGame = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as UpdateAsymmetricReelsSlotsGameRequest).toObject();
  const payload = (ctx as any).payload as JwtPayload;
  const {
    gameId,
    gameName,
    availableGoldCoinsBetValuesList: availableGoldCoinsBetValues,
    availableSweepCoinsBetValuesList: availableSweepCoinsBetValues,
    rowCountsList: columnRowCounts,
    asymmetricChance
  } = request;

  // Check if gameId is existed
  let game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  // Update record
  game = await gameRepository.updateGame(
    gameId,
    {
      gameName,
      availableGoldCoinsBetValues,
      availableSweepCoinsBetValues,
      columnRowCounts,
      asymmetricChance,
      authorId: payload.id,
      authorName: payload.username
    }
  );

  if (!game) {
    throw new InternalError(
      NOTI_ASYM.ERROR_UPDATE_GAME,
      ERROR_NAME_ASYM.ERROR_UPDATE_GAME
    );
  }

  // Response
  const response = new UpdateGameResponse();
  response.setGame(ResponseUtils.initializeGameModelResponse(game));
  ctx.res = response;
});

const getGame = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as GetGameRequest).toObject();
  const { gameId } = request;

  // Get game
  const game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  // Response
  const response = new GetGameResponse();
  response.setGame(ResponseUtils.initializeGameModelResponse(game));
  ctx.res = response;
});

const updateSimpleScatterPrize = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as UpdateSimpleScatterPrizeRequest).toObject();
  const {
    gameId,
    prizeId,
    freeSpins,
    prize,
    freeSpinsMultiplier,
    currentSpinMultiplier
  } = request;

  // Get game
  let game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  // Update scatter
  game = await gameRepository.updateScatterPrize({
    gameId,
    prizeId,
    freeSpins,
    prize,
    freeSpinMultiplier: freeSpinsMultiplier,
    currentSpinMultiplier
  });

  // Response
  ctx.res = ResponseUtils.initializeScatterPrizeResponse(request);
});

export default {
  createGame,
  updateGame,
  getGame,
  updateSimpleScatterPrize
};