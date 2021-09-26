import { Document } from 'mongoose';
import { CurrencyModel } from '../schemas/user_pb';
import { Payline, SlotGameSymbol } from './game';

export interface AsymmetricReelsSlotsGameProgress {
  firstColumnSymbolId: SlotGameSymbol;
  lastColumnSymbolId: SlotGameSymbol;
};

export interface Progress {
  gameId: string;
  playerId: string;
  currency: CurrencyModel;
  currencyStr: string;
  currentBet: number;
  freeSpinsAvailable: number;
  freeSpinsPrizeMultiplier: number;
  bettingPaylines: Payline[];
  asymmetricReelsSlotsGameProgress?: AsymmetricReelsSlotsGameProgress;
};

export interface ProgressDocument extends Progress, Document {
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProgressPayload = Omit<Progress, 'currencyStr'>;