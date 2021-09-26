import Mali from 'mali';
import {
  checkAuth,
  checkPermission,
  LISTEN_ADDRESS,
  LISTEN_PORT,
  loggerError,
  loggerInfo,
  logRequest,
  massageError
} from '@galaxy-fortune/common';
import GameSchema from './schemas/games/game_grpc_pb';
import GameService from './services/asymmetric/index';
import { ServerCredentials } from '@grpc/grpc-js';
import { RoleModel } from './schemas/user_pb';
import ConnectMongoDB from './configs/mongo';
import Validation from './middlewares/validation';
import { logActionAdmin } from './middlewares/logActionAdmin';

const host = `${LISTEN_ADDRESS}:${LISTEN_PORT}`;
const roleAdmin = Object.keys(RoleModel)[RoleModel.ROLE_ADMIN];
const AsymmetricReelsSlotsGameService = 'AsymmetricReelsSlotsGameService';

(async () => {
  try {
    await ConnectMongoDB();
    const app = new Mali(GameSchema, AsymmetricReelsSlotsGameService);
    app.use(logRequest(__filename)); // Logger middleware
    app.use({ getGame: GameService.getGame });
    app.use(checkAuth); // Auth middleware
    app.use({
      setBet: [Validation.setBet, GameService.setBet],
      selectPayline: [Validation.selectPayline, GameService.selectPayline],
      spin: [Validation.spin, GameService.spin]
    });
    app.use(checkPermission([roleAdmin])); // Permission middleware
    app.use(logActionAdmin); // Log action admin
    app.use({
      createGame: [Validation.createGame, GameService.createGame],
      updateGame: [Validation.updateGame, GameService.updateGame],
      addSymbol: [Validation.addSymbol, GameService.addSymbol],
      updateSymbol: [Validation.updateSymbol, GameService.updateSymbol],
      createPayline: [Validation.createPayline, GameService.createPayline],
      removePayline: [Validation.removePayline, GameService.removePayline],
      updateSimpleScatterPrize: [Validation.updateSimpleScatterPrize, GameService.updateSimpleScatterPrize],
      getGameProgress: [Validation.getGameProgress, GameService.getGameProgress]
    });
    app.on('error', (error) => massageError(error));
    await app.start(host, ServerCredentials.createInsecure());
    loggerInfo(`Asymmetric Reels is listening on ${host}`, __filename);
  }
  catch (err) {
    if (err instanceof Error) {
      loggerError(`Asymmetric Reels is error: ${err.message}`, __filename, err);
    }
  }
})();