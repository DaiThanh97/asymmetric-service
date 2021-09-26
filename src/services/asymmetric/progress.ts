import { Context } from 'mali';
import {
  ERROR_NAME_ASYM,
  NOTI_ASYM
} from '../../constants/noti';
import {
  GetGameProgressRequest
} from '../../schemas/games/game_pb';
import {
  errorHandler,
  NotFoundError
} from '@galaxy-fortune/common';
import progressRepository from '../../repository/progress';
import ResponseUtils from '../../utils/response';

const getGameProgress = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as GetGameProgressRequest).toObject();
  const { gameId, currency } = request;

  // Check if symbol is existed
  const progress = await progressRepository.getProgressByIdAndCurrency(gameId, currency);
  if (!progress) {
    throw new NotFoundError(
      NOTI_ASYM.NOT_FOUND_GAME_PROGRESS,
      ERROR_NAME_ASYM.NOT_FOUND_GAME_PROGRESS
    );
  }

  // Response
  ctx.res = ResponseUtils.initializeGameProgressResponse(progress);
});

export default {
  getGameProgress
};