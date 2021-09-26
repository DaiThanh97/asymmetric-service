// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var settings_pb = require('./settings_pb.js');

function serialize_schema_GetSettingsRequest(arg) {
  if (!(arg instanceof settings_pb.GetSettingsRequest)) {
    throw new Error('Expected argument of type schema.GetSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetSettingsRequest(buffer_arg) {
  return settings_pb.GetSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetSettingsResponse(arg) {
  if (!(arg instanceof settings_pb.GetSettingsResponse)) {
    throw new Error('Expected argument of type schema.GetSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetSettingsResponse(buffer_arg) {
  return settings_pb.GetSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSettingsRequest(arg) {
  if (!(arg instanceof settings_pb.UpdateSettingsRequest)) {
    throw new Error('Expected argument of type schema.UpdateSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSettingsRequest(buffer_arg) {
  return settings_pb.UpdateSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSettingsResponse(arg) {
  if (!(arg instanceof settings_pb.UpdateSettingsResponse)) {
    throw new Error('Expected argument of type schema.UpdateSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSettingsResponse(buffer_arg) {
  return settings_pb.UpdateSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SettingServiceService = exports.SettingServiceService = {
  getSettings: {
    path: '/schema.SettingService/GetSettings',
    requestStream: false,
    responseStream: false,
    requestType: settings_pb.GetSettingsRequest,
    responseType: settings_pb.GetSettingsResponse,
    requestSerialize: serialize_schema_GetSettingsRequest,
    requestDeserialize: deserialize_schema_GetSettingsRequest,
    responseSerialize: serialize_schema_GetSettingsResponse,
    responseDeserialize: deserialize_schema_GetSettingsResponse,
  },
  updateSettings: {
    path: '/schema.SettingService/UpdateSettings',
    requestStream: false,
    responseStream: false,
    requestType: settings_pb.UpdateSettingsRequest,
    responseType: settings_pb.UpdateSettingsResponse,
    requestSerialize: serialize_schema_UpdateSettingsRequest,
    requestDeserialize: deserialize_schema_UpdateSettingsRequest,
    responseSerialize: serialize_schema_UpdateSettingsResponse,
    responseDeserialize: deserialize_schema_UpdateSettingsResponse,
  },
};

exports.SettingServiceClient = grpc.makeGenericClientConstructor(SettingServiceService);
