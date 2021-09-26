// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var announcement_pb = require('./announcement_pb.js');

function serialize_schema_CreateAnnouncementRequest(arg) {
  if (!(arg instanceof announcement_pb.CreateAnnouncementRequest)) {
    throw new Error('Expected argument of type schema.CreateAnnouncementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateAnnouncementRequest(buffer_arg) {
  return announcement_pb.CreateAnnouncementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateAnnouncementResponse(arg) {
  if (!(arg instanceof announcement_pb.CreateAnnouncementResponse)) {
    throw new Error('Expected argument of type schema.CreateAnnouncementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateAnnouncementResponse(buffer_arg) {
  return announcement_pb.CreateAnnouncementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DisableAnnouncementRequest(arg) {
  if (!(arg instanceof announcement_pb.DisableAnnouncementRequest)) {
    throw new Error('Expected argument of type schema.DisableAnnouncementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DisableAnnouncementRequest(buffer_arg) {
  return announcement_pb.DisableAnnouncementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DisableAnnouncementResponse(arg) {
  if (!(arg instanceof announcement_pb.DisableAnnouncementResponse)) {
    throw new Error('Expected argument of type schema.DisableAnnouncementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DisableAnnouncementResponse(buffer_arg) {
  return announcement_pb.DisableAnnouncementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_EnableAnnouncementRequest(arg) {
  if (!(arg instanceof announcement_pb.EnableAnnouncementRequest)) {
    throw new Error('Expected argument of type schema.EnableAnnouncementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_EnableAnnouncementRequest(buffer_arg) {
  return announcement_pb.EnableAnnouncementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_EnableAnnouncementResponse(arg) {
  if (!(arg instanceof announcement_pb.EnableAnnouncementResponse)) {
    throw new Error('Expected argument of type schema.EnableAnnouncementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_EnableAnnouncementResponse(buffer_arg) {
  return announcement_pb.EnableAnnouncementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllAnnouncementsRequest(arg) {
  if (!(arg instanceof announcement_pb.GetAllAnnouncementsRequest)) {
    throw new Error('Expected argument of type schema.GetAllAnnouncementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllAnnouncementsRequest(buffer_arg) {
  return announcement_pb.GetAllAnnouncementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllAnnouncementsResponse(arg) {
  if (!(arg instanceof announcement_pb.GetAllAnnouncementsResponse)) {
    throw new Error('Expected argument of type schema.GetAllAnnouncementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllAnnouncementsResponse(buffer_arg) {
  return announcement_pb.GetAllAnnouncementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnnouncementServiceService = exports.AnnouncementServiceService = {
  createAnnouncement: {
    path: '/schema.AnnouncementService/CreateAnnouncement',
    requestStream: false,
    responseStream: false,
    requestType: announcement_pb.CreateAnnouncementRequest,
    responseType: announcement_pb.CreateAnnouncementResponse,
    requestSerialize: serialize_schema_CreateAnnouncementRequest,
    requestDeserialize: deserialize_schema_CreateAnnouncementRequest,
    responseSerialize: serialize_schema_CreateAnnouncementResponse,
    responseDeserialize: deserialize_schema_CreateAnnouncementResponse,
  },
  disableAnnouncement: {
    path: '/schema.AnnouncementService/DisableAnnouncement',
    requestStream: false,
    responseStream: false,
    requestType: announcement_pb.DisableAnnouncementRequest,
    responseType: announcement_pb.DisableAnnouncementResponse,
    requestSerialize: serialize_schema_DisableAnnouncementRequest,
    requestDeserialize: deserialize_schema_DisableAnnouncementRequest,
    responseSerialize: serialize_schema_DisableAnnouncementResponse,
    responseDeserialize: deserialize_schema_DisableAnnouncementResponse,
  },
  enableAnnouncement: {
    path: '/schema.AnnouncementService/EnableAnnouncement',
    requestStream: false,
    responseStream: false,
    requestType: announcement_pb.EnableAnnouncementRequest,
    responseType: announcement_pb.EnableAnnouncementResponse,
    requestSerialize: serialize_schema_EnableAnnouncementRequest,
    requestDeserialize: deserialize_schema_EnableAnnouncementRequest,
    responseSerialize: serialize_schema_EnableAnnouncementResponse,
    responseDeserialize: deserialize_schema_EnableAnnouncementResponse,
  },
  getAllAnnouncements: {
    path: '/schema.AnnouncementService/GetAllAnnouncements',
    requestStream: false,
    responseStream: false,
    requestType: announcement_pb.GetAllAnnouncementsRequest,
    responseType: announcement_pb.GetAllAnnouncementsResponse,
    requestSerialize: serialize_schema_GetAllAnnouncementsRequest,
    requestDeserialize: deserialize_schema_GetAllAnnouncementsRequest,
    responseSerialize: serialize_schema_GetAllAnnouncementsResponse,
    responseDeserialize: deserialize_schema_GetAllAnnouncementsResponse,
  },
};

exports.AnnouncementServiceClient = grpc.makeGenericClientConstructor(AnnouncementServiceService);
