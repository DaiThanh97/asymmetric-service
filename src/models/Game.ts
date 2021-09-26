import { Schema } from "mongoose";
import { asymConnection } from '../configs/mongo';
import {
  Game,
  Payline,
  ScatterPrize,
  SlotGameSymbol
} from "../types/game";

export const symbolSchema = new Schema<SlotGameSymbol>({
  name: {
    type: String,
    required: true
  },
  minimumPaylineToAppear: {
    type: Number,
    required: true
  },
  chanceRatio: {
    type: Number,
    required: true
  },
  isWild: {
    type: Boolean,
    required: true
  },
  isJackpot: {
    type: Boolean,
    required: true
  },
  isScatter: {
    type: Boolean,
    required: true
  },
  symbolValues: {
    type: [Number],
    required: true
  },
});

const scatterSchema = new Schema<ScatterPrize>({
  freeSpins: {
    type: Number,
    required: true
  },
  prize: {
    type: Number,
    required: true
  },
  freeSpinMultiplier: {
    type: Number,
    required: true
  },
  currentSpinMultiplier: {
    type: Number,
    required: true
  }
});

export const paylineSchema = new Schema<Payline>({
  rowIndex: {
    type: [Number],
    default: [],
    required: true
  }
});

const gameSchema = new Schema<Game>({
  gameName: {
    type: String,
    unique: true,
    required: true
  },
  availableGoldCoinsBetValues: {
    type: [Number],
    default: [],
    required: true
  },
  availableSweepCoinsBetValues: {
    type: [Number],
    default: [],
    required: true
  },
  columnRowCounts: {
    type: [Number],
    default: [],
    required: true
  },
  scatterPrizes: {
    type: [scatterSchema],
    default: [],
  },
  slotSymbols: {
    type: [symbolSchema],
    default: []
  },
  paylines: {
    type: [paylineSchema],
    default: []
  },
  asymmetricChance: {
    type: Number,
    required: true
  },
  createdBy: {
    type: {
      id: Number,
      name: String
    },
    required: true
  },
  updatedBy: {
    type: {
      id: Number,
      name: String
    }
  },
}, {
  timestamps: true,
  collection: 'games'
});

export const GameDAO = asymConnection.model<Game>(
  'Games',
  gameSchema
);