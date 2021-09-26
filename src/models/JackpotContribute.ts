import { Schema } from "mongoose";
import { asymConnection } from '../configs/mongo';
import { CurrencyModel } from "../schemas/user_pb";
import { JackpotContribute } from "../types/jackpot";

const JPContributeSchema = new Schema<JackpotContribute>({
  gameId: {
    type: String,
    required: true
  },
  gameName: String,
  currency: {
    type: String,
    enum: [...Object.values(CurrencyModel)],
    required: true
  },
  currencyStr: {
    type: String,
    default: function (): string {
      // Unable to infer `this`.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return Object.keys(CurrencyModel)[this.currency];
    }
  },
  betValue: {
    type: Number,
    required: true
  },
  jackpot: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  collection: 'jackpotContribute'
});

export const JPContributeDAO = asymConnection.model<JackpotContribute>(
  'jackpotContribute',
  JPContributeSchema
);