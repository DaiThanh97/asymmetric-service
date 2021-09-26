import { Context } from 'mali';
import {
  ERROR_NAME_ASYM,
  NOTI_ASYM
} from '../../constants/noti';

import {
  SelectPaylineRequest,
  SelectPaylineResponse
} from '../../schemas/games/game_pb';
import {
  BadRequestError,
  errorHandler,
  InternalError,
  NotFoundError
} from '@galaxy-fortune/common';
import UserPublisher from '../../publishers/user';
import {
  CreatePaylineRequest,
  CreatePaylineResponse,
  PaylineModel,
  RemovePaylineRequest,
  RemovePaylineResponse
} from '../../schemas/games/slotsgames/payline_pb';
import gameRepository from '../../repository/game';
import progressRepository from '../../repository/progress';
import ResponseUtils from '../../utils/response';

const selectPayline = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as SelectPaylineRequest).toObject();
  const { gameId, paylineIdsList } = request;
  const bearerToken = ctx.metadata.authorization;

  // Check if game is existed
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

  const { id, player } = currentUserRPC.toObject();
  const currentCurrency = player!.currentCurrency;

  // Check if game progress is existed
  const progress = await progressRepository.getProgress(
    gameId,
    id.toString(),
    currentCurrency
  );
  if (!progress) {
    throw new NotFoundError(
      NOTI_ASYM.NOT_FOUND_GAME_PROGRESS,
      ERROR_NAME_ASYM.NOT_FOUND_GAME_PROGRESS
    );
  }

  // Get rowIndex by Ids list
  const { paylines } = game;
  const bettingPaylines = paylines.filter(line => paylineIdsList.indexOf(line._id) !== -1);

  // Set payline
  const selectPayline = await progressRepository.selectPayline(
    id.toString(),
    gameId,
    currentCurrency,
    bettingPaylines
  );
  if (!selectPayline) {
    throw new InternalError(
      NOTI_ASYM.ERROR_SELECT_PAYLINE,
      ERROR_NAME_ASYM.ERROR_SELECT_PAYLINE
    );
  }

  // Response
  const response = new SelectPaylineResponse();
  response.setGameProgress(ResponseUtils.initializeGameProgressResponse(selectPayline));
  ctx.res = response;
});

const createPayline = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as CreatePaylineRequest).toObject();
  const { gameId, rowIndexList } = request;

  // Check if gameId is existed
  let game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  // Check if rowIndex is existed
  let payline = await gameRepository.getPayline(gameId, rowIndexList);
  if (payline) {
    throw new BadRequestError(
      NOTI_ASYM.ERROR_CREATE_PAYLINE_EXISTED,
      ERROR_NAME_ASYM.ERROR_CREATE_PAYLINE_EXISTED
    );
  }

  payline = await gameRepository.createPayline(gameId, rowIndexList);
  if (!payline) {
    throw new InternalError(
      NOTI_ASYM.ERROR_CREATE_PAYLINE,
      ERROR_NAME_ASYM.ERROR_CREATE_PAYLINE
    );
  }

  // Response
  const response = new CreatePaylineResponse();
  const paylineModel = new PaylineModel();
  paylineModel.setId(payline._id.toString());
  paylineModel.setRowIndexList(rowIndexList);
  response.setPayline(paylineModel);
  ctx.res = response;
});

const removePayline = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as RemovePaylineRequest).toObject();
  const { gameId, paylineId } = request;

  // Check if gameId is existed
  let game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  const payline = await gameRepository.deletePayline(gameId, paylineId);
  if (!payline) {
    throw new InternalError(
      NOTI_ASYM.ERROR_REMOVE_PAYLINE,
      ERROR_NAME_ASYM.ERROR_REMOVE_PAYLINE
    );
  }

  // Response
  ctx.res = new RemovePaylineResponse();
});

export default {
  selectPayline,
  createPayline,
  removePayline
};