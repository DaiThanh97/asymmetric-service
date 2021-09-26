// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var games_game_pb = require('../games/game_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var games_slotsgames_asymmetric_reels_slots_game_pb = require('../games/slotsgames/asymmetric_reels_slots_game_pb.js');
var games_slotsgames_accumulate_multiplier_slots_game_pb = require('../games/slotsgames/accumulate_multiplier_slots_game_pb.js');
var games_slotsgames_slots_game_pb = require('../games/slotsgames/slots_game_pb.js');
var games_slotsgames_symbol_pb = require('../games/slotsgames/symbol_pb.js');
var games_slotsgames_game_progress_pb = require('../games/slotsgames/game_progress_pb.js');
var games_slotsgames_game_result_pb = require('../games/slotsgames/game_result_pb.js');
var games_slotsgames_payline_pb = require('../games/slotsgames/payline_pb.js');
var games_slotsgames_scatter_prize_pb = require('../games/slotsgames/scatter_prize_pb.js');
var user_pb = require('../user_pb.js');

function serialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.AddAccumulateMultiplierSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest(buffer_arg) {
  return games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.AddAsymmetricReelsSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest(buffer_arg) {
  return games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_AddSlotsGameSymbolResponse(arg) {
  if (!(arg instanceof games_game_pb.AddSlotsGameSymbolResponse)) {
    throw new Error('Expected argument of type schema.AddSlotsGameSymbolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddSlotsGameSymbolResponse(buffer_arg) {
  return games_game_pb.AddSlotsGameSymbolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateAccumulateMultiplierSlotsGameRequest(arg) {
  if (!(arg instanceof games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.CreateAccumulateMultiplierSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateAccumulateMultiplierSlotsGameRequest(buffer_arg) {
  return games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateAsymmetricReelsSlotsGameRequest(arg) {
  if (!(arg instanceof games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.CreateAsymmetricReelsSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateAsymmetricReelsSlotsGameRequest(buffer_arg) {
  return games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateGameResponse(arg) {
  if (!(arg instanceof games_game_pb.CreateGameResponse)) {
    throw new Error('Expected argument of type schema.CreateGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateGameResponse(buffer_arg) {
  return games_game_pb.CreateGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreatePaylineRequest(arg) {
  if (!(arg instanceof games_slotsgames_payline_pb.CreatePaylineRequest)) {
    throw new Error('Expected argument of type schema.CreatePaylineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreatePaylineRequest(buffer_arg) {
  return games_slotsgames_payline_pb.CreatePaylineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreatePaylineResponse(arg) {
  if (!(arg instanceof games_slotsgames_payline_pb.CreatePaylineResponse)) {
    throw new Error('Expected argument of type schema.CreatePaylineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreatePaylineResponse(buffer_arg) {
  return games_slotsgames_payline_pb.CreatePaylineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllGameIdsRequest(arg) {
  if (!(arg instanceof games_game_pb.GetAllGameIdsRequest)) {
    throw new Error('Expected argument of type schema.GetAllGameIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllGameIdsRequest(buffer_arg) {
  return games_game_pb.GetAllGameIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllGameIdsResponse(arg) {
  if (!(arg instanceof games_game_pb.GetAllGameIdsResponse)) {
    throw new Error('Expected argument of type schema.GetAllGameIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllGameIdsResponse(buffer_arg) {
  return games_game_pb.GetAllGameIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetGameProgressRequest(arg) {
  if (!(arg instanceof games_game_pb.GetGameProgressRequest)) {
    throw new Error('Expected argument of type schema.GetGameProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetGameProgressRequest(buffer_arg) {
  return games_game_pb.GetGameProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetGameProgressResponse(arg) {
  if (!(arg instanceof games_game_pb.GetGameProgressResponse)) {
    throw new Error('Expected argument of type schema.GetGameProgressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetGameProgressResponse(buffer_arg) {
  return games_game_pb.GetGameProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetGameRequest(arg) {
  if (!(arg instanceof games_game_pb.GetGameRequest)) {
    throw new Error('Expected argument of type schema.GetGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetGameRequest(buffer_arg) {
  return games_game_pb.GetGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetGameResponse(arg) {
  if (!(arg instanceof games_game_pb.GetGameResponse)) {
    throw new Error('Expected argument of type schema.GetGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetGameResponse(buffer_arg) {
  return games_game_pb.GetGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RemovePaylineRequest(arg) {
  if (!(arg instanceof games_slotsgames_payline_pb.RemovePaylineRequest)) {
    throw new Error('Expected argument of type schema.RemovePaylineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RemovePaylineRequest(buffer_arg) {
  return games_slotsgames_payline_pb.RemovePaylineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RemovePaylineResponse(arg) {
  if (!(arg instanceof games_slotsgames_payline_pb.RemovePaylineResponse)) {
    throw new Error('Expected argument of type schema.RemovePaylineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RemovePaylineResponse(buffer_arg) {
  return games_slotsgames_payline_pb.RemovePaylineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SelectPaylineRequest(arg) {
  if (!(arg instanceof games_game_pb.SelectPaylineRequest)) {
    throw new Error('Expected argument of type schema.SelectPaylineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SelectPaylineRequest(buffer_arg) {
  return games_game_pb.SelectPaylineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SelectPaylineResponse(arg) {
  if (!(arg instanceof games_game_pb.SelectPaylineResponse)) {
    throw new Error('Expected argument of type schema.SelectPaylineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SelectPaylineResponse(buffer_arg) {
  return games_game_pb.SelectPaylineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SetBetRequest(arg) {
  if (!(arg instanceof games_game_pb.SetBetRequest)) {
    throw new Error('Expected argument of type schema.SetBetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SetBetRequest(buffer_arg) {
  return games_game_pb.SetBetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SetBetResponse(arg) {
  if (!(arg instanceof games_game_pb.SetBetResponse)) {
    throw new Error('Expected argument of type schema.SetBetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SetBetResponse(buffer_arg) {
  return games_game_pb.SetBetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SpinRequest(arg) {
  if (!(arg instanceof games_game_pb.SpinRequest)) {
    throw new Error('Expected argument of type schema.SpinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SpinRequest(buffer_arg) {
  return games_game_pb.SpinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SpinResponse(arg) {
  if (!(arg instanceof games_game_pb.SpinResponse)) {
    throw new Error('Expected argument of type schema.SpinResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SpinResponse(buffer_arg) {
  return games_game_pb.SpinResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAccumulateMultiplierScatterPrizeRequest(arg) {
  if (!(arg instanceof games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest)) {
    throw new Error('Expected argument of type schema.UpdateAccumulateMultiplierScatterPrizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAccumulateMultiplierScatterPrizeRequest(buffer_arg) {
  return games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAccumulateMultiplierSlotsGameRequest(arg) {
  if (!(arg instanceof games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.UpdateAccumulateMultiplierSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAccumulateMultiplierSlotsGameRequest(buffer_arg) {
  return games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.UpdateAccumulateMultiplierSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest(buffer_arg) {
  return games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAsymmetricReelsSlotsGameRequest(arg) {
  if (!(arg instanceof games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.UpdateAsymmetricReelsSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAsymmetricReelsSlotsGameRequest(buffer_arg) {
  return games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.UpdateAsymmetricReelsSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest(buffer_arg) {
  return games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateGameResponse(arg) {
  if (!(arg instanceof games_game_pb.UpdateGameResponse)) {
    throw new Error('Expected argument of type schema.UpdateGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateGameResponse(buffer_arg) {
  return games_game_pb.UpdateGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateScatterPrizeResponse(arg) {
  if (!(arg instanceof games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse)) {
    throw new Error('Expected argument of type schema.UpdateScatterPrizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateScatterPrizeResponse(buffer_arg) {
  return games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSimpleScatterPrizeRequest(arg) {
  if (!(arg instanceof games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest)) {
    throw new Error('Expected argument of type schema.UpdateSimpleScatterPrizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSimpleScatterPrizeRequest(buffer_arg) {
  return games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSlotsGameSymbolResponse(arg) {
  if (!(arg instanceof games_game_pb.UpdateSlotsGameSymbolResponse)) {
    throw new Error('Expected argument of type schema.UpdateSlotsGameSymbolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSlotsGameSymbolResponse(buffer_arg) {
  return games_game_pb.UpdateSlotsGameSymbolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UploadGameVersionRequest(arg) {
  if (!(arg instanceof games_game_pb.UploadGameVersionRequest)) {
    throw new Error('Expected argument of type schema.UploadGameVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UploadGameVersionRequest(buffer_arg) {
  return games_game_pb.UploadGameVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UploadGameVersionResponse(arg) {
  if (!(arg instanceof games_game_pb.UploadGameVersionResponse)) {
    throw new Error('Expected argument of type schema.UploadGameVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UploadGameVersionResponse(buffer_arg) {
  return games_game_pb.UploadGameVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GameServiceService = exports.GameServiceService = {
  uploadGameVersion: {
    path: '/schema.GameService/UploadGameVersion',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.UploadGameVersionRequest,
    responseType: games_game_pb.UploadGameVersionResponse,
    requestSerialize: serialize_schema_UploadGameVersionRequest,
    requestDeserialize: deserialize_schema_UploadGameVersionRequest,
    responseSerialize: serialize_schema_UploadGameVersionResponse,
    responseDeserialize: deserialize_schema_UploadGameVersionResponse,
  },
  updateSimpleScatterPrize: {
    path: '/schema.GameService/UpdateSimpleScatterPrize',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest,
    responseType: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse,
    requestSerialize: serialize_schema_UpdateSimpleScatterPrizeRequest,
    requestDeserialize: deserialize_schema_UpdateSimpleScatterPrizeRequest,
    responseSerialize: serialize_schema_UpdateScatterPrizeResponse,
    responseDeserialize: deserialize_schema_UpdateScatterPrizeResponse,
  },
  updateAccumulateMultiplierScatterPrize: {
    path: '/schema.GameService/UpdateAccumulateMultiplierScatterPrize',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest,
    responseType: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierScatterPrizeRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierScatterPrizeRequest,
    responseSerialize: serialize_schema_UpdateScatterPrizeResponse,
    responseDeserialize: deserialize_schema_UpdateScatterPrizeResponse,
  },
  createAccumulateMultiplierSlotsGame: {
    path: '/schema.GameService/CreateAccumulateMultiplierSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest,
    responseType: games_game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateAccumulateMultiplierSlotsGame: {
    path: '/schema.GameService/UpdateAccumulateMultiplierSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest,
    responseType: games_game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  addAccumulateMultiplierSlotsGameSymbol: {
    path: '/schema.GameService/AddAccumulateMultiplierSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: games_game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateAccumulateMultiplierSlotsGameSymbol: {
    path: '/schema.GameService/UpdateAccumulateMultiplierSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: games_game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  createAsymmetricReelsSlotsGame: {
    path: '/schema.GameService/CreateAsymmetricReelsSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest,
    responseType: games_game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateAsymmetricReelsSlotsGame: {
    path: '/schema.GameService/UpdateAsymmetricReelsSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest,
    responseType: games_game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  addAsymmetricReelsSlotsGameSymbol: {
    path: '/schema.GameService/AddAsymmetricReelsSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest,
    responseType: games_game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateAsymmetricReelsSlotsGameSymbol: {
    path: '/schema.GameService/UpdateAsymmetricReelsSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseType: games_game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  getGameProgress: {
    path: '/schema.GameService/GetGameProgress',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetGameProgressRequest,
    responseType: games_game_pb.GetGameProgressResponse,
    requestSerialize: serialize_schema_GetGameProgressRequest,
    requestDeserialize: deserialize_schema_GetGameProgressRequest,
    responseSerialize: serialize_schema_GetGameProgressResponse,
    responseDeserialize: deserialize_schema_GetGameProgressResponse,
  },
  getGame: {
    path: '/schema.GameService/GetGame',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetGameRequest,
    responseType: games_game_pb.GetGameResponse,
    requestSerialize: serialize_schema_GetGameRequest,
    requestDeserialize: deserialize_schema_GetGameRequest,
    responseSerialize: serialize_schema_GetGameResponse,
    responseDeserialize: deserialize_schema_GetGameResponse,
  },
  getAllGameIds: {
    path: '/schema.GameService/GetAllGameIds',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetAllGameIdsRequest,
    responseType: games_game_pb.GetAllGameIdsResponse,
    requestSerialize: serialize_schema_GetAllGameIdsRequest,
    requestDeserialize: deserialize_schema_GetAllGameIdsRequest,
    responseSerialize: serialize_schema_GetAllGameIdsResponse,
    responseDeserialize: deserialize_schema_GetAllGameIdsResponse,
  },
  selectPayline: {
    path: '/schema.GameService/SelectPayline',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SelectPaylineRequest,
    responseType: games_game_pb.SelectPaylineResponse,
    requestSerialize: serialize_schema_SelectPaylineRequest,
    requestDeserialize: deserialize_schema_SelectPaylineRequest,
    responseSerialize: serialize_schema_SelectPaylineResponse,
    responseDeserialize: deserialize_schema_SelectPaylineResponse,
  },
  setBet: {
    path: '/schema.GameService/SetBet',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SetBetRequest,
    responseType: games_game_pb.SetBetResponse,
    requestSerialize: serialize_schema_SetBetRequest,
    requestDeserialize: deserialize_schema_SetBetRequest,
    responseSerialize: serialize_schema_SetBetResponse,
    responseDeserialize: deserialize_schema_SetBetResponse,
  },
  createPayline: {
    path: '/schema.GameService/CreatePayline',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_payline_pb.CreatePaylineRequest,
    responseType: games_slotsgames_payline_pb.CreatePaylineResponse,
    requestSerialize: serialize_schema_CreatePaylineRequest,
    requestDeserialize: deserialize_schema_CreatePaylineRequest,
    responseSerialize: serialize_schema_CreatePaylineResponse,
    responseDeserialize: deserialize_schema_CreatePaylineResponse,
  },
  removePayline: {
    path: '/schema.GameService/RemovePayline',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_payline_pb.RemovePaylineRequest,
    responseType: games_slotsgames_payline_pb.RemovePaylineResponse,
    requestSerialize: serialize_schema_RemovePaylineRequest,
    requestDeserialize: deserialize_schema_RemovePaylineRequest,
    responseSerialize: serialize_schema_RemovePaylineResponse,
    responseDeserialize: deserialize_schema_RemovePaylineResponse,
  },
  spin: {
    path: '/schema.GameService/Spin',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SpinRequest,
    responseType: games_game_pb.SpinResponse,
    requestSerialize: serialize_schema_SpinRequest,
    requestDeserialize: deserialize_schema_SpinRequest,
    responseSerialize: serialize_schema_SpinResponse,
    responseDeserialize: deserialize_schema_SpinResponse,
  },
};

exports.GameServiceClient = grpc.makeGenericClientConstructor(GameServiceService);
var AccumulateMultiplierSlotsGameServiceService = exports.AccumulateMultiplierSlotsGameServiceService = {
  createGame: {
    path: '/schema.AccumulateMultiplierSlotsGameService/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest,
    responseType: games_game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateGame: {
    path: '/schema.AccumulateMultiplierSlotsGameService/UpdateGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest,
    responseType: games_game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  updateAccumulateMultiplierScatterPrize: {
    path: '/schema.AccumulateMultiplierSlotsGameService/UpdateAccumulateMultiplierScatterPrize',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest,
    responseType: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierScatterPrizeRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierScatterPrizeRequest,
    responseSerialize: serialize_schema_UpdateScatterPrizeResponse,
    responseDeserialize: deserialize_schema_UpdateScatterPrizeResponse,
  },
  addSymbol: {
    path: '/schema.AccumulateMultiplierSlotsGameService/AddSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: games_game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateSymbol: {
    path: '/schema.AccumulateMultiplierSlotsGameService/UpdateSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: games_game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  getGame: {
    path: '/schema.AccumulateMultiplierSlotsGameService/GetGame',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetGameRequest,
    responseType: games_game_pb.GetGameResponse,
    requestSerialize: serialize_schema_GetGameRequest,
    requestDeserialize: deserialize_schema_GetGameRequest,
    responseSerialize: serialize_schema_GetGameResponse,
    responseDeserialize: deserialize_schema_GetGameResponse,
  },
  getGameProgress: {
    path: '/schema.AccumulateMultiplierSlotsGameService/GetGameProgress',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetGameProgressRequest,
    responseType: games_game_pb.GetGameProgressResponse,
    requestSerialize: serialize_schema_GetGameProgressRequest,
    requestDeserialize: deserialize_schema_GetGameProgressRequest,
    responseSerialize: serialize_schema_GetGameProgressResponse,
    responseDeserialize: deserialize_schema_GetGameProgressResponse,
  },
  setBet: {
    path: '/schema.AccumulateMultiplierSlotsGameService/SetBet',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SetBetRequest,
    responseType: games_game_pb.SetBetResponse,
    requestSerialize: serialize_schema_SetBetRequest,
    requestDeserialize: deserialize_schema_SetBetRequest,
    responseSerialize: serialize_schema_SetBetResponse,
    responseDeserialize: deserialize_schema_SetBetResponse,
  },
  spin: {
    path: '/schema.AccumulateMultiplierSlotsGameService/Spin',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SpinRequest,
    responseType: games_game_pb.SpinResponse,
    requestSerialize: serialize_schema_SpinRequest,
    requestDeserialize: deserialize_schema_SpinRequest,
    responseSerialize: serialize_schema_SpinResponse,
    responseDeserialize: deserialize_schema_SpinResponse,
  },
};

exports.AccumulateMultiplierSlotsGameServiceClient = grpc.makeGenericClientConstructor(AccumulateMultiplierSlotsGameServiceService);
var AsymmetricReelsSlotsGameServiceService = exports.AsymmetricReelsSlotsGameServiceService = {
  createGame: {
    path: '/schema.AsymmetricReelsSlotsGameService/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest,
    responseType: games_game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateGame: {
    path: '/schema.AsymmetricReelsSlotsGameService/UpdateGame',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest,
    responseType: games_game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  updateSimpleScatterPrize: {
    path: '/schema.AsymmetricReelsSlotsGameService/UpdateSimpleScatterPrize',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest,
    responseType: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse,
    requestSerialize: serialize_schema_UpdateSimpleScatterPrizeRequest,
    requestDeserialize: deserialize_schema_UpdateSimpleScatterPrizeRequest,
    responseSerialize: serialize_schema_UpdateScatterPrizeResponse,
    responseDeserialize: deserialize_schema_UpdateScatterPrizeResponse,
  },
  createPayline: {
    path: '/schema.AsymmetricReelsSlotsGameService/CreatePayline',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_payline_pb.CreatePaylineRequest,
    responseType: games_slotsgames_payline_pb.CreatePaylineResponse,
    requestSerialize: serialize_schema_CreatePaylineRequest,
    requestDeserialize: deserialize_schema_CreatePaylineRequest,
    responseSerialize: serialize_schema_CreatePaylineResponse,
    responseDeserialize: deserialize_schema_CreatePaylineResponse,
  },
  removePayline: {
    path: '/schema.AsymmetricReelsSlotsGameService/RemovePayline',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_payline_pb.RemovePaylineRequest,
    responseType: games_slotsgames_payline_pb.RemovePaylineResponse,
    requestSerialize: serialize_schema_RemovePaylineRequest,
    requestDeserialize: deserialize_schema_RemovePaylineRequest,
    responseSerialize: serialize_schema_RemovePaylineResponse,
    responseDeserialize: deserialize_schema_RemovePaylineResponse,
  },
  addSymbol: {
    path: '/schema.AsymmetricReelsSlotsGameService/AddSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest,
    responseType: games_game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateSymbol: {
    path: '/schema.AsymmetricReelsSlotsGameService/UpdateSymbol',
    requestStream: false,
    responseStream: false,
    requestType: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseType: games_game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  getGame: {
    path: '/schema.AsymmetricReelsSlotsGameService/GetGame',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetGameRequest,
    responseType: games_game_pb.GetGameResponse,
    requestSerialize: serialize_schema_GetGameRequest,
    requestDeserialize: deserialize_schema_GetGameRequest,
    responseSerialize: serialize_schema_GetGameResponse,
    responseDeserialize: deserialize_schema_GetGameResponse,
  },
  getGameProgress: {
    path: '/schema.AsymmetricReelsSlotsGameService/GetGameProgress',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.GetGameProgressRequest,
    responseType: games_game_pb.GetGameProgressResponse,
    requestSerialize: serialize_schema_GetGameProgressRequest,
    requestDeserialize: deserialize_schema_GetGameProgressRequest,
    responseSerialize: serialize_schema_GetGameProgressResponse,
    responseDeserialize: deserialize_schema_GetGameProgressResponse,
  },
  selectPayline: {
    path: '/schema.AsymmetricReelsSlotsGameService/SelectPayline',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SelectPaylineRequest,
    responseType: games_game_pb.SelectPaylineResponse,
    requestSerialize: serialize_schema_SelectPaylineRequest,
    requestDeserialize: deserialize_schema_SelectPaylineRequest,
    responseSerialize: serialize_schema_SelectPaylineResponse,
    responseDeserialize: deserialize_schema_SelectPaylineResponse,
  },
  setBet: {
    path: '/schema.AsymmetricReelsSlotsGameService/SetBet',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SetBetRequest,
    responseType: games_game_pb.SetBetResponse,
    requestSerialize: serialize_schema_SetBetRequest,
    requestDeserialize: deserialize_schema_SetBetRequest,
    responseSerialize: serialize_schema_SetBetResponse,
    responseDeserialize: deserialize_schema_SetBetResponse,
  },
  spin: {
    path: '/schema.AsymmetricReelsSlotsGameService/Spin',
    requestStream: false,
    responseStream: false,
    requestType: games_game_pb.SpinRequest,
    responseType: games_game_pb.SpinResponse,
    requestSerialize: serialize_schema_SpinRequest,
    requestDeserialize: deserialize_schema_SpinRequest,
    responseSerialize: serialize_schema_SpinResponse,
    responseDeserialize: deserialize_schema_SpinResponse,
  },
};

exports.AsymmetricReelsSlotsGameServiceClient = grpc.makeGenericClientConstructor(AsymmetricReelsSlotsGameServiceService);
