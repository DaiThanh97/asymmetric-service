import { Context } from 'mali';
import {
  ERROR_NAME_ASYM,
  NOTI_ASYM
} from '../../constants/noti';
import {
  AddSlotsGameSymbolResponse,
  UpdateSlotsGameSymbolResponse,
} from '../../schemas/games/game_pb';
import {
  BadRequestError,
  errorHandler,
  InternalError,
  NotFoundError
} from '@galaxy-fortune/common';
import {
  AddAsymmetricReelsSlotsGameSymbolRequest,
  UpdateAsymmetricReelsSlotsGameSymbolRequest
} from '../../schemas/games/slotsgames/symbol_pb';
import gameRepository from '../../repository/game';
import ResponseUtils from '../../utils/response';

const addSymbol = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as AddAsymmetricReelsSlotsGameSymbolRequest).toObject();
  const {
    gameId,
    name,
    minimumPaylineToAppear,
    chanceRatio,
    isWild,
    isJackpot,
    isScatter,
    symbolValuesList: symbolValues
  } = request;

  // Check if game is existed
  let game = await gameRepository.getGameById(gameId);
  if (!game) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_GAME,
      ERROR_NAME_ASYM.ERROR_NO_GAME
    );
  }

  // Check if symbol name is existed
  const symbolName = game.slotSymbols?.find(slot => slot.name === name);
  if (symbolName) {
    throw new BadRequestError(
      NOTI_ASYM.ERROR_EXISTED_SYMBOL_NAME,
      ERROR_NAME_ASYM.ERROR_EXISTED_SYMBOL_NAME
    );
  }

  // Add symbol
  game = await gameRepository.createSymbol(
    gameId,
    {
      name,
      minimumPaylineToAppear,
      chanceRatio,
      isWild,
      isJackpot,
      isScatter,
      symbolValues
    }
  );

  if (!game) {
    throw new InternalError(
      NOTI_ASYM.ERROR_ADD_SYMBOL,
      ERROR_NAME_ASYM.ERROR_ADD_SYMBOL
    );
  }

  // Response
  const response = new AddSlotsGameSymbolResponse();
  response.setGame(ResponseUtils.initializeGameModelResponse(game));
  ctx.res = response;
});

const updateSymbol = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as UpdateAsymmetricReelsSlotsGameSymbolRequest).toObject();
  const {
    gameId,
    symbolId,
    name,
    minimumPaylineToAppear,
    chanceRatio,
    isWild,
    isJackpot,
    isScatter,
    symbolValuesList: symbolValues
  } = request;

  // Check if symbol is existed
  const symbol = await gameRepository.getSymbol(gameId, symbolId);
  if (!symbol) {
    throw new NotFoundError(
      NOTI_ASYM.ERROR_NO_SYMBOL,
      ERROR_NAME_ASYM.ERROR_NO_SYMBOL
    );
  }

  // Update symbol
  const game = await gameRepository.updateSymbol(
    gameId,
    symbolId,
    {
      name,
      minimumPaylineToAppear,
      chanceRatio,
      isWild,
      isJackpot,
      isScatter,
      symbolValues
    });

  if (!game) {
    throw new InternalError(
      NOTI_ASYM.ERROR_UPDATE_SYMBOL,
      ERROR_NAME_ASYM.ERROR_UPDATE_SYMBOL
    );
  }

  // Response
  const response = new UpdateSlotsGameSymbolResponse();
  response.setGame(ResponseUtils.initializeGameModelResponse(game));
  ctx.res = response;
});

export default {
  addSymbol,
  updateSymbol,
};