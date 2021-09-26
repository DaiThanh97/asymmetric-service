import { loggerInfo } from '@galaxy-fortune/common';
import mongoose from 'mongoose';
import { DEVELOPMENT } from '../constants/common';
import {
  ASYMMETRIC_DB_NAME,
  ASYMMETRIC_LOG_DB_NAME,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME
} from '../constants/env';

const username = MONGO_USERNAME;
const password = MONGO_PASSWORD;
const URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

// Game connection
export const asymConnection = mongoose.createConnection(URI, {
  user: username,
  pass: password,
  dbName: ASYMMETRIC_DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: false,
  poolSize: 10
});

// Log connection
export const logConnection = mongoose.createConnection(URI, {
  user: username,
  pass: password,
  dbName: ASYMMETRIC_LOG_DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: false,
  poolSize: 10
});

export default async (): Promise<void> => {
  try {
    loggerInfo('Connecting to MongoDB', __filename);
    await Promise.all([asymConnection, logConnection]);
    loggerInfo('Connect to MongoDB successfully', __filename);
  }
  catch (err) {
    throw err;
  }
};