// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var user_pb = require('./user_pb.js');

function serialize_schema_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type schema.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_LoginResponse(arg) {
  if (!(arg instanceof auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type schema.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_LoginResponse(buffer_arg) {
  return auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RefreshTokenRequest(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type schema.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RefreshTokenRequest(buffer_arg) {
  return auth_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RefreshTokenResponse(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenResponse)) {
    throw new Error('Expected argument of type schema.RefreshTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RefreshTokenResponse(buffer_arg) {
  return auth_pb.RefreshTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ValidateTokenRequest(arg) {
  if (!(arg instanceof auth_pb.ValidateTokenRequest)) {
    throw new Error('Expected argument of type schema.ValidateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ValidateTokenRequest(buffer_arg) {
  return auth_pb.ValidateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ValidateTokenResponse(arg) {
  if (!(arg instanceof auth_pb.ValidateTokenResponse)) {
    throw new Error('Expected argument of type schema.ValidateTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ValidateTokenResponse(buffer_arg) {
  return auth_pb.ValidateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/schema.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginResponse,
    requestSerialize: serialize_schema_LoginRequest,
    requestDeserialize: deserialize_schema_LoginRequest,
    responseSerialize: serialize_schema_LoginResponse,
    responseDeserialize: deserialize_schema_LoginResponse,
  },
  refreshToken: {
    path: '/schema.AuthService/RefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefreshTokenRequest,
    responseType: auth_pb.RefreshTokenResponse,
    requestSerialize: serialize_schema_RefreshTokenRequest,
    requestDeserialize: deserialize_schema_RefreshTokenRequest,
    responseSerialize: serialize_schema_RefreshTokenResponse,
    responseDeserialize: deserialize_schema_RefreshTokenResponse,
  },
  validateToken: {
    path: '/schema.AuthService/ValidateToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ValidateTokenRequest,
    responseType: auth_pb.ValidateTokenResponse,
    requestSerialize: serialize_schema_ValidateTokenRequest,
    requestDeserialize: deserialize_schema_ValidateTokenRequest,
    responseSerialize: serialize_schema_ValidateTokenResponse,
    responseDeserialize: deserialize_schema_ValidateTokenResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
