import { exec } from "child_process";
import { LeanDocument } from "mongoose";
import { JPContributeDAO } from "../models/JackpotContribute";
import { CurrencyModel } from "../schemas/user_pb";
import { JackpotContributeDocument } from "../types/jackpot";

/**
 * This function create jackpot contribute
 *
 * @param gameId game's id
 * @param gameName game name
 * @param goldCoinbetValues list gold coin bet values
 * @param sweepCoinbetValues list sweep coin bet value
 * @return `void`.
 */
const createJackpotContribute = async (
  gameId: string,
  gameName: string,
  goldCoinMinimumJackpot: number,
  sweepCoinMinimumJackpot: number,
  goldCoinbetValues: number[],
  sweepCoinbetValues: number[]
): Promise<void> => {
  const listGold = goldCoinbetValues.map(gold => JPContributeDAO.create({
    gameId,
    gameName,
    currency: CurrencyModel.CURRENCY_GOLD_COINS,
    betValue: gold,
    jackpot: gold * goldCoinMinimumJackpot,
  }));

  const listSweep = sweepCoinbetValues.map(sweep => JPContributeDAO.create({
    gameId,
    gameName,
    currency: CurrencyModel.CURRENCY_SWEEP_COINS,
    betValue: sweep,
    jackpot: sweep * sweepCoinMinimumJackpot,
  }));

  await Promise.all([...listGold, ...listSweep]);
};

/**
 * This function update jackpot contribute
 *
 * @param betValue all bet available in game
 * @param jackpotContribute contribute money jp
 * @return `JackpotContributeDocument`.
 */
const updateJackpotContribute = async (
  gameId: string,
  betValue: number,
  currency: CurrencyModel,
  jackpotContribute: number
): Promise<LeanDocument<JackpotContributeDocument> | null> => {
  return await JPContributeDAO.findOneAndUpdate(
    {
      gameId,
      betValue,
      currency
    },
    {
      $inc: { jackpot: Math.round(jackpotContribute) }
    }
  )
    .lean()
    .exec();
};

/**
 * This function award jackpot
 *
 * @param betValue all bet available in game
 * @param jackpotContribute contribute money jp
 * @return `JackpotContributeDocument`.
 */
const awardJackpotPrize = async (
  gameId: string,
  betValue: number,
  currency: CurrencyModel,
  initJPValue: number
): Promise<number> => {
  const jp = await JPContributeDAO.findOneAndUpdate({
    gameId,
    betValue,
    currency
  }, {
    jackpot: initJPValue
  })
    .lean()
    .exec();

  return jp!.jackpot;
};


export default {
  createJackpotContribute,
  updateJackpotContribute,
  awardJackpotPrize
};