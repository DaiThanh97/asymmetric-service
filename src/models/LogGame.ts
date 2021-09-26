import { Schema } from "mongoose";
import { logConnection } from './../configs/mongo';
import { LogGame } from "../types/log";
import { paylineSchema } from "./Game";

export const symbolSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const logGameSchema = new Schema<LogGame>({
  playerId: {
    type: String,
    required: true
  },
  gameName: {
    type: String,
    required: true
  },
  gameProgress: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  bet: {
    type: Number,
    required: true
  },
  win: {
    type: Number,
    required: true
  },
  moneyBefore: {
    type: Number,
    required: true
  },
  moneyAfter: {
    type: Number,
    required: true
  },
  moneyChange: {
    type: Number,
    required: true
  },
  isJackpot: {
    type: Boolean,
    default: false,
    required: true
  },
  jackpotPrize: {
    type: Number,
    required: true,
    default: 0
  },
  freeSpin: {
    type: Number,
    required: true
  },
  bettingPaylines: {
    type: [paylineSchema],
    required: true
  },
  result: {
    type: [symbolSchema],
    required: true
  }
}, {
  timestamps: true,
  collection: 'logGames'
});

export const LogGameDAO = logConnection.model<LogGame>(
  'logGames',
  logGameSchema
);