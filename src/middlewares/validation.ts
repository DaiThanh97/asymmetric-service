import Joi from 'joi';
import { Context } from 'mali';
import { NOTI_ASYM, ERROR_NAME_ASYM } from '../constants/noti';
import {
  CreateAsymmetricReelsSlotsGameRequest,
  UpdateAsymmetricReelsSlotsGameRequest
} from '../schemas/games/slotsgames/asymmetric_reels_slots_game_pb';
import { BadRequestError, errorHandler } from '@galaxy-fortune/common';
import {
  GetGameProgressRequest,
  GetGameRequest,
  SelectPaylineRequest,
  SetBetRequest,
  SpinRequest
} from '../schemas/games/game_pb';
import {
  AddAsymmetricReelsSlotsGameSymbolRequest,
  UpdateAsymmetricReelsSlotsGameSymbolRequest
} from '../schemas/games/slotsgames/symbol_pb';
import {
  CreatePaylineRequest,
  RemovePaylineRequest
} from '../schemas/games/slotsgames/payline_pb';
import { CurrencyModel } from '../schemas/user_pb';
import {
  UpdateSimpleScatterPrizeRequest
} from '../schemas/games/slotsgames/scatter_prize_pb';
import { OBJECT_ID_LENGTH } from '../constants/common';

const ValidateError = (
  message: string,
  errorName: string
) => new BadRequestError(message, errorName);

const createGame = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as CreateAsymmetricReelsSlotsGameRequest).toObject();
  const body = {
    gameName: requestBody.gameName,
    availableGoldCoinsBetValues: requestBody.availableGoldCoinsBetValuesList,
    availableSweepCoinsBetValues: requestBody.availableSweepCoinsBetValuesList,
    rowCounts: requestBody.rowCountsList,
    asymmetricChance: requestBody.asymmetricChance
  };

  const createGameSchema = Joi.object({
    gameName: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_NAME,
        ERROR_NAME_ASYM.INVALID_GAME_NAME
      )),
    availableGoldCoinsBetValues: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GOLD_COINS_BET_VALUES,
        ERROR_NAME_ASYM.INVALID_GOLD_COINS_BET_VALUES
      )),
    availableSweepCoinsBetValues: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SWEEP_COINS_BET_VALUES,
        ERROR_NAME_ASYM.INVALID_SWEEP_COINS_BET_VALUES
      )),
    rowCounts: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_ROW_COUNTS,
        ERROR_NAME_ASYM.INVALID_ROW_COUNTS
      )),
    asymmetricChance: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_ASYMMETRIC_CHANGE,
        ERROR_NAME_ASYM.INVALID_ASYMMETRIC_CHANGE
      ))
  });
  await createGameSchema.validateAsync(body);
  await next();
});

const updateGame = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as UpdateAsymmetricReelsSlotsGameRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    gameName: requestBody.gameName,
    availableGoldCoinsBetValues: requestBody.availableGoldCoinsBetValuesList,
    availableSweepCoinsBetValues: requestBody.availableSweepCoinsBetValuesList,
    rowCounts: requestBody.rowCountsList,
    asymmetricChance: requestBody.asymmetricChance
  };

  const updateGameSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    gameName: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_NAME,
        ERROR_NAME_ASYM.INVALID_GAME_NAME
      )),
    availableGoldCoinsBetValues: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GOLD_COINS_BET_VALUES,
        ERROR_NAME_ASYM.INVALID_GOLD_COINS_BET_VALUES
      )),
    availableSweepCoinsBetValues: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SWEEP_COINS_BET_VALUES,
        ERROR_NAME_ASYM.INVALID_SWEEP_COINS_BET_VALUES
      )),
    rowCounts: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_ROW_COUNTS,
        ERROR_NAME_ASYM.INVALID_ROW_COUNTS
      )),
    asymmetricChance: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_ASYMMETRIC_CHANGE,
        ERROR_NAME_ASYM.INVALID_ASYMMETRIC_CHANGE
      ))
  });
  await updateGameSchema.validateAsync(body);
  await next();
});

const updateSimpleScatterPrize = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as UpdateSimpleScatterPrizeRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    prizeId: requestBody.prizeId,
    freeSpins: requestBody.freeSpins,
    freeSpinsMultiplier: requestBody.freeSpinsMultiplier,
    prize: requestBody.prize,
    currentSpinMultiplier: requestBody.currentSpinMultiplier
  };

  const updateGameSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    prizeId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SCATTER_PRIZE_ID,
        ERROR_NAME_ASYM.INVALID_SCATTER_PRIZE_ID
      )),
    freeSpins: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_FREE_SPINS,
        ERROR_NAME_ASYM.INVALID_FREE_SPINS
      )),
    freeSpinsMultiplier: Joi.number()
      .min(1)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_FREE_SPINS_MULTIPLIER,
        ERROR_NAME_ASYM.INVALID_FREE_SPINS_MULTIPLIER
      )),
    prize: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_PRIZE,
        ERROR_NAME_ASYM.INVALID_PRIZE
      )),
    currentSpinMultiplier: Joi.number()
      .min(1)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_CURRENT_SPIN_MULTIPLIER,
        ERROR_NAME_ASYM.INVALID_CURRENT_SPIN_MULTIPLIER
      )),
  });
  await updateGameSchema.validateAsync(body);
  await next();
});

const getGame = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as GetGameRequest).toObject();
  const body = {
    gameId: requestBody.gameId
  };

  const getGameSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      ))
  });
  await getGameSchema.validateAsync(body);
  await next();
});

const getGameProgress = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as GetGameProgressRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    currency: requestBody.currency
  };

  const getGameProgressSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    currency: Joi.string()
      .valid(...Object.values(CurrencyModel))
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_CURRENCY,
        ERROR_NAME_ASYM.INVALID_CURRENCY
      ))
  });
  await getGameProgressSchema.validateAsync(body);
  await next();
});

const addSymbol = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as AddAsymmetricReelsSlotsGameSymbolRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    name: requestBody.name,
    minimumPaylineToAppear: requestBody.minimumPaylineToAppear,
    chanceRatio: requestBody.chanceRatio,
    isWild: requestBody.isWild,
    isJackpot: requestBody.isJackpot,
    isScatter: requestBody.isScatter,
    symbolValuesList: requestBody.symbolValuesList
  };

  const addSymbolSchema = Joi.object({
    gameId: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    name: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SYMBOL_NAME,
        ERROR_NAME_ASYM.INVALID_SYMBOL_NAME
      )),
    minimumPaylineToAppear: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_MINIMUM_PAYLINE,
        ERROR_NAME_ASYM.INVALID_MINIMUM_PAYLINE
      )),
    chanceRatio: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_CHANCE_RATIO,
        ERROR_NAME_ASYM.INVALID_CHANCE_RATIO
      )),
    isWild: Joi.boolean()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_IS_WILD,
        ERROR_NAME_ASYM.INVALID_IS_WILD
      )),
    isJackpot: Joi.boolean()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_IS_JACKPOT,
        ERROR_NAME_ASYM.INVALID_IS_JACKPOT
      )),
    isScatter: Joi.boolean()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_IS_SCATTER,
        ERROR_NAME_ASYM.INVALID_IS_SCATTER
      )),
    symbolValuesList: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SYMBOL_VALUES,
        ERROR_NAME_ASYM.INVALID_SYMBOL_VALUES
      ))
  });
  await addSymbolSchema.validateAsync(body);
  await next();
});

const updateSymbol = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as UpdateAsymmetricReelsSlotsGameSymbolRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    symbolId: requestBody.symbolId,
    name: requestBody.name,
    minimumPaylineToAppear: requestBody.minimumPaylineToAppear,
    chanceRatio: requestBody.chanceRatio,
    isWild: requestBody.isWild,
    isJackpot: requestBody.isJackpot,
    isScatter: requestBody.isScatter,
    symbolValuesList: requestBody.symbolValuesList
  };

  const updateSymbolSchema = Joi.object({
    gameId: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    symbolId: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    name: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SYMBOL_NAME,
        ERROR_NAME_ASYM.INVALID_SYMBOL_NAME
      )),
    minimumPaylineToAppear: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_MINIMUM_PAYLINE,
        ERROR_NAME_ASYM.INVALID_MINIMUM_PAYLINE
      )),
    chanceRatio: Joi.number()
      .min(0)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_CHANCE_RATIO,
        ERROR_NAME_ASYM.INVALID_CHANCE_RATIO
      )),
    isWild: Joi.boolean()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_IS_WILD,
        ERROR_NAME_ASYM.INVALID_IS_WILD
      )),
    isJackpot: Joi.boolean()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_IS_JACKPOT,
        ERROR_NAME_ASYM.INVALID_IS_JACKPOT
      )),
    isScatter: Joi.boolean()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_IS_SCATTER,
        ERROR_NAME_ASYM.INVALID_IS_SCATTER
      )),
    symbolValuesList: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_SYMBOL_VALUES,
        ERROR_NAME_ASYM.INVALID_SYMBOL_VALUES
      ))
  });
  await updateSymbolSchema.validateAsync(body);
  await next();
});

const createPayline = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as CreatePaylineRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    rowIndexList: requestBody.rowIndexList,
  };

  const paylineSchema = Joi.object({
    gameId: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    rowIndexList: Joi.array()
      .items(Joi.number().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_ROW_INDEX,
        ERROR_NAME_ASYM.INVALID_ROW_INDEX
      ))
  });
  await paylineSchema.validateAsync(body);
  await next();
});

const removePayline = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as RemovePaylineRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    paylineId: requestBody.paylineId,
  };

  const paylineSchema = Joi.object({
    gameId: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    paylineId: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_PAYLINE_ID,
        ERROR_NAME_ASYM.INVALID_PAYLINE_ID
      )),
  });
  await paylineSchema.validateAsync(body);
  await next();
});

const setBet = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as SetBetRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    betValue: requestBody.betValue,
  };

  const betSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    betValue: Joi.number()
      .positive()
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_BET_VALUE,
        ERROR_NAME_ASYM.INVALID_BET_VALUE
      )),
  });
  await betSchema.validateAsync(body);
  await next();
});

const selectPayline = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as SelectPaylineRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
    paylineIdsList: requestBody.paylineIdsList,
  };

  const paylineSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      )),
    paylineIdsList: Joi.array()
      .items(Joi.string().required())
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_PAYLINE_ID_LIST,
        ERROR_NAME_ASYM.INVALID_PAYLINE_ID_LIST
      ))
  });
  await paylineSchema.validateAsync(body);
  await next();
});

const spin = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as SpinRequest).toObject();
  const body = {
    gameId: requestBody.gameId,
  };

  const spinSchema = Joi.object({
    gameId: Joi.string()
      .min(OBJECT_ID_LENGTH)
      .required()
      .error(ValidateError(
        NOTI_ASYM.INVALID_GAME_ID,
        ERROR_NAME_ASYM.INVALID_GAME_ID
      ))
  });
  await spinSchema.validateAsync(body);
  await next();
});

export default {
  createGame,
  updateGame,
  updateSimpleScatterPrize,
  getGame,
  getGameProgress,
  addSymbol,
  updateSymbol,
  createPayline,
  removePayline,
  setBet,
  selectPayline,
  spin
};