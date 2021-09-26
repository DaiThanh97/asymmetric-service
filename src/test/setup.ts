import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const initEnv = () => {
  process.env.JWT_SECRET_KEY = '123';
  process.env.JWT_EXPIRE_TIME = '1h';
}

let mongo: MongoMemoryServer;
beforeAll(async () => {
  initEnv();

  // Init mongo server
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});