import { Document } from 'mongoose';
import { CurrencyModel } from '../schemas/user_pb';

export interface JackpotContribute {
  gameId: string;
  gameName: string;
  currency: CurrencyModel;
  currencyStr: string;
  betValue: number;
  jackpot: number;
};

export interface JackpotContributeDocument extends JackpotContribute, Document { };