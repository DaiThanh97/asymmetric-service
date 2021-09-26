import {
  POOLS_SERVICE_HOST,
  POOLS_SERVICE_PORT
} from '@galaxy-fortune/common';
import { credentials } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { PoolServiceClient } from '../schemas/pool_grpc_pb';
import {
  AddCoinsToPoolRequest,
  AddCoinsToPoolResponse,
  ReduceCoinsToPoolRequest
} from '../schemas/pool_pb';
import { CurrencyModel } from '../schemas/user_pb';

const client = new PoolServiceClient(
  `${POOLS_SERVICE_HOST}:${POOLS_SERVICE_PORT}`,
  credentials.createInsecure()
);

const addCoinsToPool = (
  coin: number,
  currency: CurrencyModel
) => {
  return new Promise<AddCoinsToPoolResponse>((resolve, reject) => {
    const request = new AddCoinsToPoolRequest();
    request.setCoins(coin);
    request.setCurrency(currency);

    client.addCoinsToPool(request, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

const reduceCoinsToPool = (
  coin: number,
  currency: CurrencyModel
) => {
  return new Promise<any>((resolve, reject) => {
    const request = new ReduceCoinsToPoolRequest();
    request.setCoins(coin);
    request.setCurrency(currency);

    client.reduceCoinsToPool(request, (err) => {
      if (err) {
        if (err.code === Status.ABORTED) {
          resolve({ enoughPool: false });
        }
        reject(err);
      }
      else resolve({ enoughPool: true });
    });
  });
};

export default {
  addCoinsToPool,
  reduceCoinsToPool
};