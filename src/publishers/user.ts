import {
  API_KEY,
  METADATA_API_KEY,
  USER_SERVICE_HOST,
  USER_SERVICE_PORT
} from '@galaxy-fortune/common';
import { credentials, Metadata } from '@grpc/grpc-js';
import { UserServiceClient } from '../schemas/user_grpc_pb';
import {
  AddCoinsToPlayerRequest,
  AddCoinsToPlayerResponse,
  CurrencyModel,
  GetCurrentUserRequest,
  GetCurrentUserResponse,
  ReduceCoinsToPlayerRequest,
  ReduceCoinsToPlayerResponse
} from '../schemas/user_pb';

const client = new UserServiceClient(
  `${USER_SERVICE_HOST}:${USER_SERVICE_PORT}`,
  credentials.createInsecure()
);

const getCurrentUser = (token: string) => {
  return new Promise<GetCurrentUserResponse>((resolve, reject) => {
    const request = new GetCurrentUserRequest();

    const metadata = new Metadata();
    metadata.set('authorization', token);

    client.getCurrentUser(request, metadata, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

const addCoinsToPlayer = (
  userId: number,
  currency: CurrencyModel,
  amount: number
) => {
  return new Promise<AddCoinsToPlayerResponse>((resolve, reject) => {
    const request = new AddCoinsToPlayerRequest();
    request.setUserId(userId);
    if (currency === CurrencyModel.CURRENCY_GOLD_COINS) {
      request.setGoldCoins(amount);
      request.setSweepCoins(0);
    }
    else {
      request.setGoldCoins(0);
      request.setSweepCoins(amount);
    }

    const metadata = new Metadata();
    metadata.set(METADATA_API_KEY, API_KEY);

    client.addCoinsToPlayer(request, metadata, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

const reduceCoinsToPlayer = (
  userId: number,
  currency: CurrencyModel,
  amount: number
) => {
  return new Promise<ReduceCoinsToPlayerResponse>((resolve, reject) => {
    const request = new ReduceCoinsToPlayerRequest();
    request.setUserId(userId);
    if (currency === CurrencyModel.CURRENCY_GOLD_COINS) {
      request.setGoldCoins(amount);
      request.setSweepCoins(0);
    }
    else {
      request.setGoldCoins(0);
      request.setSweepCoins(amount);
    }

    const metadata = new Metadata();
    metadata.set(METADATA_API_KEY, API_KEY);

    client.reduceCoinsToPlayer(request, metadata, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

export default {
  getCurrentUser,
  addCoinsToPlayer,
  reduceCoinsToPlayer
};