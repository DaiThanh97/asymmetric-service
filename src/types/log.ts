import { Document } from 'mongoose';
import { Payline, SlotGameSymbol } from './game';

export interface LogGame {
  playerId: string;
  gameName: string;
  gameProgress: string;
  currency: string;
  moneyBefore: number;
  moneyAfter: number;
  moneyChange: number;
  bet: number;
  win: number;
  isJackpot: boolean;
  jackpotPrize: number;
  freeSpin: number;
  bettingPaylines: Payline[];
  result: Partial<SlotGameSymbol>[];
};

export interface LogAction {
  adminId: string;
  adminName: string;
  action: string;
  data: string;
};

export interface LogGameDocument extends LogGame, Document {
  createdAt?: Date;
  updatedAt?: Date;
};

export interface LogActionDocument extends LogAction, Document {
  createdAt?: Date;
  updatedAt?: Date;
};