import { LeanDocument } from 'mongoose';
import { GameDAO } from '../models/Game';
import { CurrencyModel } from '../schemas/user_pb';
import {
  Payline,
  GameDocument,
  UpsertAsymmetricPayload,
  UpsertSlotSymbolPayload,
  ScatterPrizePayload
} from '../types/game';

/**
 * This function create and return the asymmetric.
 *
 * @param payload The Asymmetric's props
 * @return `GameDocument`.
 */
const createGame = async ({
  gameName,
  columnRowCounts,
  asymmetricChance,
  availableGoldCoinsBetValues,
  availableSweepCoinsBetValues,
  authorId,
  authorName
}: UpsertAsymmetricPayload): Promise<LeanDocument<GameDocument> | null> => {
  const totalColumn = columnRowCounts.length;
  const scatterPrizes = Array(totalColumn).fill({
    freeSpins: 0,
    prize: 0,
    freeSpinMultiplier: 1,
    currentSpinMultiplier: 1
  });

  return await GameDAO.create({
    gameName,
    columnRowCounts,
    asymmetricChance,
    availableGoldCoinsBetValues,
    availableSweepCoinsBetValues,
    scatterPrizes,
    createdBy: {
      id: authorId,
      name: authorName
    }
  });
};

/**
 * This function update the asymmetric by Id.
 *
 * @param id The Asymmetric's `_id`
 * @param payload The Asymmetric's props
 * @return `GameDocument`.
 */
const updateGame = async (
  id: string,
  {
    gameName,
    columnRowCounts,
    asymmetricChance,
    availableGoldCoinsBetValues,
    availableSweepCoinsBetValues,
    authorId,
    authorName
  }: UpsertAsymmetricPayload
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findByIdAndUpdate(
    id,
    {
      gameName,
      columnRowCounts,
      asymmetricChance,
      availableGoldCoinsBetValues,
      availableSweepCoinsBetValues,
      updatedBy: {
        id: authorId,
        name: authorName
      }
    },
    { new: true }
  )
    .lean()
    .exec();
}

/**
 * This function return the asymmetric by Id.
 *
 * @param gameId The Asymmetric's `_id`
 * @return `GameDocument`.
 */
const getGameById = async (
  id: string
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findById(id).lean().exec();
};

/**
 * This function return the asymmetric by Id.
 *
 * @param gameId The Asymmetric's `_id`
 * @param currency currency model
 * @param betValue bet
 * @return `GameDocument`.
 */
const getGameByIdAndBetAvailable = async (
  gameId: string,
  currency: CurrencyModel,
  betValue: number
): Promise<LeanDocument<GameDocument> | null> => {
  const currencyCondition = currency === CurrencyModel.CURRENCY_GOLD_COINS ?
    { availableGoldCoinsBetValues: betValue }
    : { availableSweepCoinsBetValues: betValue }

  return await GameDAO.findOne({
    _id: gameId,
    ...currencyCondition
  }).lean().exec();
};

/**
 * This function to check the asymmetric existed by Name.
 *
 * @param name The Asymmetric's `name`
 * @return `gameName`. string
 */
const getGameByName = async (
  name: string
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findOne({
    gameName: name
  })
    .lean()
    .exec();
};

/**
 * This function will add symbol to listSymbol.
 *
 * @param gameId The Asymmetric's `_id`
 * @param payload The SlotSymbol's props
 * @return `GameDocument`.
 */
const createSymbol = async (
  gameId: string,
  slotSymbol: UpsertSlotSymbolPayload
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findByIdAndUpdate(
    gameId,
    {
      $push: { slotSymbols: slotSymbol }
    },
    { new: true }
  )
    .lean()
    .exec();
};

/**
 * This function will add symbol to listSymbol.
 *
 * @param gameId The Asymmetric's `_id`
 * @param symbolId The Asymmetric's slotSymbol `_id`
 * @param payload The SlotSymbol's props
 * @return `GameDocument`.
 */
const updateSymbol = async (
  gameId: string,
  symbolId: string,
  slotSymbol: UpsertSlotSymbolPayload
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findOneAndUpdate({
    _id: gameId,
    slotSymbols: { $elemMatch: { _id: symbolId } }
  }, {
    $set: {
      'slotSymbols.$.name': slotSymbol.name,
      'slotSymbols.$.minimumPaylineToAppear': slotSymbol.minimumPaylineToAppear,
      'slotSymbols.$.chanceRatio': slotSymbol.chanceRatio,
      'slotSymbols.$.isWild': slotSymbol.isWild,
      'slotSymbols.$.isJackpot': slotSymbol.isJackpot,
      'slotSymbols.$.isScatter': slotSymbol.isScatter,
      'slotSymbols.$.symbolValues': slotSymbol.symbolValues,
    }
  }, {
    new: true
  })
    .lean()
    .exec();
};

/**
 * This function will return GameDocument if found symbol.
 *
 * @param gameId The Asymmetric's `_id`
 * @param symbolId The Asymmetric's slotSymbol `_id`
 * @return `GameDocument`.
 */
const getSymbol = async (
  gameId: string,
  symbolId: string
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findOne({
    _id: gameId,
    slotSymbols: { $elemMatch: { _id: symbolId } }
  })
    .lean()
    .exec();
};

/**
 * This function will create a payline.
 *
 * @param gameId The Asymmetric's `_id`
 * @param rowIndexList The row index list
 * @return `GameDocument`.
 */
const createPayline = async (
  gameId: string,
  rowIndexList: number[]
): Promise<LeanDocument<Payline> | undefined> => {
  const asymm = await GameDAO.findByIdAndUpdate(
    gameId,
    {
      $push: { paylines: { rowIndex: rowIndexList } }
    },
    { new: true }
  )
    .select('')
    .lean()
    .exec();

  return asymm?.paylines.pop();
};

/**
 * This function will get a payline.
 *
 * @param gameId The Asymmetric's `_id`
 * @param rowIndexList The row index list
 * @return `GameDocument`.
 */
const getPayline = async (
  gameId: string,
  rowIndexList: number[]
): Promise<LeanDocument<Payline> | undefined> => {
  const asymm = await GameDAO.findOne({
    _id: gameId,
    'paylines.rowIndex': rowIndexList
  })
    .lean()
    .exec();
  return asymm?.paylines.pop();
};

/**
 * This function will remove a payline.
 *
 * @param gameId The Asymmetric's `_id`
 * @param paylineId The payline _id
 * @return `GameDocument`.
 */
const deletePayline = async (
  gameId: string,
  paylineId: string
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findByIdAndUpdate(
    gameId,
    {
      $pull: { paylines: { _id: paylineId } }
    },
    { new: true }
  )
    .lean()
    .exec();
};

/**
 * This function will remove a payline.
 *
 * @param gameId The Asymmetric's `_id`
 * @param paylineId The payline _id
 * @return `GameDocument`.
 */
const updateScatterPrize = async (
  payload: ScatterPrizePayload
): Promise<LeanDocument<GameDocument> | null> => {
  return await GameDAO.findOneAndUpdate(
    {
      _id: payload.gameId,
      scatterPrizes: { $elemMatch: { _id: payload.prizeId } }
    },
    {
      $set: {
        'scatterPrizes.$.freeSpins': payload.freeSpins,
        'scatterPrizes.$.prize': payload.prize,
        'scatterPrizes.$.freeSpinMultiplier': payload.freeSpinMultiplier,
        'scatterPrizes.$.currentSpinMultiplier': payload.currentSpinMultiplier
      }
    },
    { new: true }
  )
    .lean()
    .exec();
};

export default {
  createGame,
  updateGame,
  getGameById,
  getGameByIdAndBetAvailable,
  getGameByName,
  createSymbol,
  getSymbol,
  updateSymbol,
  createPayline,
  deletePayline,
  getPayline,
  updateScatterPrize
};