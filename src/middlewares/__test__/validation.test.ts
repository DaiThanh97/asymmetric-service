import { ERROR_NAME_KEY } from "@galaxy-fortune/common";
import { Metadata } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { Context } from "mali";
import { ERROR_NAME_ASYM, NOTI_ASYM } from "../../constants/noti";
import CreateGameValidation from './../validation';

describe('Create Game Validation Middleware', () => {
  describe('Field gameName is invalid', () => {
    const next: Function = () => { };
    const metadata = new Metadata();
    metadata.set(ERROR_NAME_KEY, ERROR_NAME_ASYM.INVALID_GAME_NAME)
    const errorObj = {
      code: Status.INVALID_ARGUMENT,
      details: NOTI_ASYM.INVALID_GAME_NAME,
      metadata
    };

    test('Throw error if gameName is missing', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: undefined,
            availableGoldCoinsBetValuesList: [],
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if gameName is empty', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: '',
            availableGoldCoinsBetValuesList: [],
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if gameName type inappropriate', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 123,
            availableGoldCoinsBetValuesList: [],
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });
  });

  describe('Field availableGoldCoinsBetValues is invalid', () => {
    const next = () => { };
    const metadata = new Metadata();
    metadata.set(ERROR_NAME_KEY, ERROR_NAME_ASYM.INVALID_GOLD_COINS_BET_VALUES)
    const errorObj = {
      code: Status.INVALID_ARGUMENT,
      details: NOTI_ASYM.INVALID_GOLD_COINS_BET_VALUES,
      metadata
    };

    test('Throw error if availableGoldCoinsBetValues is missing', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: undefined,
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if availableGoldCoinsBetValues is empty', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [],
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if availableGoldCoinsBetValues type inappropriate', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: 123,
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });
  });

  describe('Field availableSweepCoinsBetValues is invalid', () => {
    const next = () => { };
    const metadata = new Metadata();
    metadata.set(ERROR_NAME_KEY, ERROR_NAME_ASYM.INVALID_SWEEP_COINS_BET_VALUES)
    const errorObj = {
      code: Status.INVALID_ARGUMENT,
      details: NOTI_ASYM.INVALID_SWEEP_COINS_BET_VALUES,
      metadata
    };

    test('Throw error if availableSweepCoinsBetValues is missing', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: undefined,
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if availableSweepCoinsBetValues is empty', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if availableSweepCoinsBetValues type inappropriate', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: 123,
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });
  });

  describe('Field rowCounts is invalid', () => {
    const next = () => { };
    const metadata = new Metadata();
    metadata.set(ERROR_NAME_KEY, ERROR_NAME_ASYM.INVALID_ROW_COUNTS)
    const errorObj = {
      code: Status.INVALID_ARGUMENT,
      details: NOTI_ASYM.INVALID_ROW_COUNTS,
      metadata
    };

    test('Throw error if rowCounts is missing', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: undefined,
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if rowCounts is empty', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: [],
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if rowCounts type inappropriate', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: 'asd',
            asymmetricchance: 0,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });
  });

  describe('Field asymmetricChance is invalid', () => {
    const next = () => { };
    const metadata = new Metadata();
    metadata.set(ERROR_NAME_KEY, ERROR_NAME_ASYM.INVALID_ASYMMETRIC_CHANGE)
    const errorObj = {
      code: Status.INVALID_ARGUMENT,
      details: NOTI_ASYM.INVALID_ASYMMETRIC_CHANGE,
      metadata
    };

    test('Throw error if asymmetricChance is missing', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: [1],
            asymmetricchance: undefined,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if asymmetricChance is positive', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: [1],
            asymmetricchance: -1,
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });

    test('Throw error if asymmetricChance type inappropriate', async () => {
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: [1],
            asymmetricchance: 'lala',
          })
        }
      }

      const validate = CreateGameValidation.createGame(ctx as Context<any>, next);
      await expect(validate).rejects.toMatchObject(errorObj);
    });
  });

  describe('All fields are valid', () => {
    test('Call next function when success', async () => {
      const next = jest.fn();
      const ctx: Partial<Context<any>> = {
        req: {
          toObject: () => ({
            gameName: 'test',
            availableGoldCoinsBetValuesList: [1],
            availableSweepCoinsBetValuesList: [1],
            rowCountsList: [1],
            asymmetricchance: 1,
          })
        }
      }

      await CreateGameValidation.createGame(ctx as Context<any>, next);
      expect(next).toBeCalled();
      expect(next).toBeCalledTimes(1);
    });
  });
});