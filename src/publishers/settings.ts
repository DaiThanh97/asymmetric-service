import {
  SETTINGS_SERVICE_HOST,
  SETTINGS_SERVICE_PORT
} from '@galaxy-fortune/common';
import { credentials } from '@grpc/grpc-js';
import { SettingServiceClient } from '../schemas/settings_grpc_pb';
import {
  GetSettingsRequest,
  GetSettingsResponse
} from '../schemas/settings_pb';

const client = new SettingServiceClient(
  `${SETTINGS_SERVICE_HOST}:${SETTINGS_SERVICE_PORT}`,
  credentials.createInsecure()
);

const getSettings = () => {
  return new Promise<GetSettingsResponse>((resolve, reject) => {
    const request = new GetSettingsRequest();

    client.getSettings(request, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

export default {
  getSettings,
};