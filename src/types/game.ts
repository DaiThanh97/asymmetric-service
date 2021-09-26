import { Document } from 'mongoose';

export interface SlotGameSymbol {
  _id: string;  // Subdocument _id
  name: string;
  minimumPaylineToAppear: number;
  chanceRatio: number;
  isWild: boolean;
  isJackpot: boolean;
  isScatter: boolean;
  symbolValues: number[];
};

export interface ScatterPrize {
  _id: string; // Subdocument _id
  freeSpins: number;
  prize: number;
  freeSpinMultiplier: number;
  currentSpinMultiplier: number;
};

export interface Payline {
  _id: string; // Subdocument _id
  rowIndex: number[];
};

export interface Game {
  gameName: string;
  availableGoldCoinsBetValues: number[];
  availableSweepCoinsBetValues: number[];
  columnRowCounts: number[];
  scatterPrizes: ScatterPrize[];
  slotSymbols: SlotGameSymbol[];
  paylines: Payline[];
  asymmetricChance: number;
};

export interface RandomSymbolResult {
  symbols: SlotGameSymbol[];
  wonJackpot: boolean;
  wonMoney: number;
  wonPaylines: Payline[];
  freeSpinInfo: {
    freeSpins: number,
    freeSpinMultiplier: number
  }
};

export interface GameDocument extends Game, Document {
  createdAt?: Date;
  updatedAt?: Date;
};

export type UpsertAsymmetricPayload
  = Omit<Game, 'scatterPrizes' | 'paylines' | 'slotSymbols'> &
  { authorId: number, authorName: string };

export type UpsertSlotSymbolPayload
  = Omit<SlotGameSymbol, '_id'>;

export type ScatterPrizePayload
  = Omit<ScatterPrize, '_id'> & { gameId: string, prizeId: string };