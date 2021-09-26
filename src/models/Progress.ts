import { Schema } from "mongoose";
import { asymConnection } from '../configs/mongo';
import { CurrencyModel } from "../schemas/user_pb";
import { Progress } from "../types/progress";
import { paylineSchema } from "./Game";

const progressSchema = new Schema<Progress>({
  gameId: {
    type: String,
    required: true
  },
  playerId: {
    type: String,
    required: true
  },
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
  currentBet: {
    type: Number,
    required: true,
  },
  freeSpinsAvailable: {
    type: Number,
    default: 0,
    required: true,
  },
  freeSpinsPrizeMultiplier: {
    type: Number,
    default: 1,
    required: true,
  },
  bettingPaylines: {
    type: [paylineSchema],
    required: true
  }
}, {
  timestamps: true,
  collection: 'progresses'
});

// Index
progressSchema.index({
  gameId: 1,
  playerId: 1,
  currency: 1
});

export const ProgressDAO = asymConnection.model<Progress>(
  'progress',
  progressSchema
);