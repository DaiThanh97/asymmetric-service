import { LeanDocument } from 'mongoose';
import { CurrencyModel } from '../schemas/user_pb';
import { Payline } from '../types/game';
import {
  ProgressDocument,
  ProgressPayload,
} from '../types/progress';
import { ProgressDAO } from '../models/Progress';

/**
 * This function upsert and return the game progress.
 *
 * @param payload The Game Progress's props
 * @return `ProgressDocument`.
 */
const upsertProgress = async (
  payload: ProgressPayload
): Promise<LeanDocument<ProgressDocument> | null> => {
  const progress = await getProgress(
    payload.gameId,
    payload.playerId,
    payload.currency
  );

  if (progress) {
    // Cannot change bet while in free spin
    if (progress.freeSpinsAvailable > 0)
      return null;

    return await ProgressDAO.findByIdAndUpdate(
      progress._id,
      { currentBet: payload.currentBet },
      { new: true }
    ).lean().exec();
  }
  else {
    return await ProgressDAO.create(payload);
  }
};

/**
 * This function set payline by playerId.
 *
 * @param playerId player's id.
 * @param gameId game ID
 * @param paylineIds array of payline Id
 * @return `ProgressDocument`.
 */
const selectPayline = async (
  playerId: string,
  gameId: string,
  currency: CurrencyModel,
  bettingPaylines: Payline[]
): Promise<LeanDocument<ProgressDocument> | null> => {
  return await ProgressDAO.findOneAndUpdate(
    { gameId, playerId, currency },
    { bettingPaylines },
    { new: true, }
  )
    .lean()
    .exec();
};

/**
 * This function return the game progress.
 *
 * @param playerId player's id.
 * @param gameId game ID
 * @param currency CurrencyModel
 * @return `ProgressDocument`.
 */
const getProgress = async (
  gameId: string,
  playerId: string,
  currency: CurrencyModel
): Promise<LeanDocument<ProgressDocument> | null> => {
  return await ProgressDAO.findOne({
    gameId,
    playerId,
    currency
  })
    .lean()
    .exec();
};

/**
 * This function return the game progress.
 *
 * @param gameId game ID
 * @param currency CurrencyModel
 * @return `ProgressDocument`.
 */
const getProgressByIdAndCurrency = async (
  gameId: string,
  currency: CurrencyModel
): Promise<LeanDocument<ProgressDocument> | null> => {
  return await ProgressDAO.findOne({
    gameId,
    currency
  })
    .lean()
    .exec();
};

/**
 * This function increase free spin available.
 *
 * @param progressId progress's _id.
 * @param freeSpinsAvailable free spins
 * @param freeSpinsPrizeMultiplier free spin multiplier
 * @return `ProgressDocument`.
 */
const updateFreeSpinAvailable = async (
  progressId: string,
  freeSpinsAvailable: number,
  freeSpinsPrizeMultiplier: number
): Promise<void> => {
  const progress = await ProgressDAO.findById(progressId).lean().exec()!;
  const multiplier = progress!.freeSpinsPrizeMultiplier > freeSpinsPrizeMultiplier ?
    progress!.freeSpinsPrizeMultiplier
    : freeSpinsPrizeMultiplier;

  await ProgressDAO.findByIdAndUpdate(progressId, {
    $inc: { freeSpinsAvailable },
    freeSpinsPrizeMultiplier: multiplier
  })
    .lean()
    .exec();
};

/**
 * This function reduce free spin available.
 *
 * @param progressId progress's _id.
 * @return `ProgressDocument`.
 */
const reduceFreeSpinAvailable = async (
  progressId: string
): Promise<void> => {
  const progress = await ProgressDAO.findById(progressId).lean().exec()!;
  const decrease = progress!.freeSpinsAvailable - 1;
  const freeSpinsPrizeMultiplier = decrease ? progress!.freeSpinsPrizeMultiplier : 1;

  await ProgressDAO.findByIdAndUpdate(progressId, {
    $inc: { freeSpinsAvailable: -1 },
    freeSpinsPrizeMultiplier
  })
    .lean()
    .exec();
};

export default {
  upsertProgress,
  selectPayline,
  getProgress,
  getProgressByIdAndCurrency,
  updateFreeSpinAvailable,
  reduceFreeSpinAvailable
};