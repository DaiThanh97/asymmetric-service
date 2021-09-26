import { Context } from "mali";
import GameService from './../../services/asymmetric/game';
import { GameDAO } from './../../models/Game';
import { ERROR_NAME_ASYM, NOTI_ASYM } from "../../constants/noti";
import { Status } from "@grpc/grpc-js/build/src/constants";
import gameRepository from './../../repository/game';
import { GetGameResponse } from "../../schemas/games/game_pb";

const next = jest.fn();
const perfectInput = {
  gameName: 'Yasuo',
  availableGoldCoinsBetValuesList: [5, 10],
  availableSweepCoinsBetValuesList: [1, 2],
  rowCountsList: [1, 2, 3],
  asymmetricchance: 5,
};

describe('CreateGame - AsymmetricReelsSlotsGameService', () => {
  test('Return error if game name is already existed', async () => {
    const ctx: Partial<Context<any>> = {
      req: { toObject: () => perfectInput }
    };

    await GameService.createGame(ctx as Context<any>, next);

    // 2nd request with the same input
    const result = GameService.createGame(ctx as Context<any>, next);

    await expect(result).rejects.toMatchObject({
      code: Status.INVALID_ARGUMENT,
      details: NOTI_ASYM.ERROR_EXISTED_GAME_NAME,
      errorName: ERROR_NAME_ASYM.ERROR_EXISTED_GAME_NAME
    });
  });

  test('Return error if create failed', async () => {
    const ctx: Partial<Context<any>> = {
      req: { toObject: () => perfectInput }
    };

    // Mock repo
    const spyAsymm = jest.spyOn(gameRepository, 'createGame');
    spyAsymm.mockResolvedValue(null);
    const result = GameService.createGame(ctx as Context<any>, next);

    await expect(result).rejects.toMatchObject({
      code: Status.INTERNAL,
      details: NOTI_ASYM.ERROR_CREATE_GAME,
      errorName: ERROR_NAME_ASYM.ERROR_CREATE_GAME
    });
  });

  test('Return 1 game model when insert DB success', async () => {
    const ctx: Partial<Context<any>> = {
      req: { toObject: () => perfectInput }
    };

    await GameService.createGame(ctx as Context<any>, next);
    const result = await GameDAO.find({});

    expect(result).toBeDefined();
    expect(result.length).toBe(1);
    expect(result[0].gameName).toEqual('Yasuo');
    expect(Array.from(result[0].availableGoldCoinsBetValues)).toEqual([5, 10]);
    expect(Array.from(result[0].availableSweepCoinsBetValues)).toEqual([1, 2]);
    expect(Array.from(result[0].columnRowCounts)).toEqual([1, 2, 3]);
    expect(result[0].asymmetricChance).toEqual(5);
  });
});

describe('UpdateGame - AsymmetricReelsSlotsGameService', () => {
  const perfectInput = {
    gameName: 'Yasuo',
    availableGoldCoinsBetValuesList: [5, 10],
    availableSweepCoinsBetValuesList: [1, 2],
    rowCountsList: [1, 2, 3],
    asymmetricchance: 5,
  };

  test('Return error if game Id is not existed', async () => {
    const ctx: Partial<Context<any>> = {
      req: { toObject: () => perfectInput }
    };

    // Mock repo
    const spyAsymm = jest.spyOn(gameRepository, 'getGameById');
    spyAsymm.mockResolvedValue(null);
    const result = GameService.updateGame(ctx as Context<any>, next);

    await expect(result).rejects.toMatchObject({
      code: Status.NOT_FOUND,
      details: NOTI_ASYM.ERROR_NO_GAME,
      errorName: ERROR_NAME_ASYM.ERROR_NO_GAME
    });
  });

  test('Return 1 game model when update DB success', async () => {
    const resultCreate = await GameDAO.create(perfectInput);
    const ctx: Partial<Context<any>> = {
      req: {
        toObject: () => ({
          ...perfectInput,
          gameName: 'Naruto',
          gameId: resultCreate._id
        })
      },
      res: {}
    };

    await GameService.updateGame(ctx as Context<any>, next);
    const result = await GameDAO.find({});

    expect(ctx.res).toBeDefined();
    expect(result[0].gameName).toEqual('Naruto');
    expect(Array.from(result[0].availableGoldCoinsBetValues)).toEqual([5, 10]);
    expect(Array.from(result[0].availableSweepCoinsBetValues)).toEqual([1, 2]);
    expect(Array.from(result[0].columnRowCounts)).toEqual([1, 2, 3]);
    expect(result[0].asymmetricChance).toEqual(5);
  });
});

describe('GetGame - AsymmetricReelsSlotsGameService', () => {
  test('Return error if game Id is not existed', async () => {
    const ctx: Partial<Context<any>> = {
      req: { toObject: () => ({ gameId: 1 }) }
    };

    // Mock repo
    const spyAsymm = jest.spyOn(gameRepository, 'getGameById');
    spyAsymm.mockResolvedValue(null);
    const result = GameService.updateGame(ctx as Context<any>, next);

    await expect(result).rejects.toMatchObject({
      code: Status.NOT_FOUND,
      details: NOTI_ASYM.ERROR_NO_GAME,
      errorName: ERROR_NAME_ASYM.ERROR_NO_GAME
    });
  });

  test('Return list game when get DB success', async () => {
    const resultCreate = await GameDAO.create({
      gameName: 'Yasuo',
      availableGoldCoinsBetValues: [5, 10],
      availableSweepCoinsBetValues: [1, 2],
      rowCounts: [1, 2, 3],
      asymmetricChance: 5,
    });

    const ctx: Partial<Context<any>> = {
      req: { toObject: () => ({ gameId: resultCreate._id }) },
      res: {}
    };

    await GameService.getGame(ctx as Context<any>, next);

    const response = ctx.res as GetGameResponse;
    expect(response).toBeDefined();
    expect(response.getGame()).toBeDefined;
    expect(response.getGame()?.getName()).toEqual('Yasuo');
  });
});