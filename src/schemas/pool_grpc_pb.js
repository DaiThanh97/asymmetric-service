// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pool_pb = require('./pool_pb.js');
var user_pb = require('./user_pb.js');

function serialize_schema_AddCoinsToPoolRequest(arg) {
  if (!(arg instanceof pool_pb.AddCoinsToPoolRequest)) {
    throw new Error('Expected argument of type schema.AddCoinsToPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddCoinsToPoolRequest(buffer_arg) {
  return pool_pb.AddCoinsToPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_AddCoinsToPoolResponse(arg) {
  if (!(arg instanceof pool_pb.AddCoinsToPoolResponse)) {
    throw new Error('Expected argument of type schema.AddCoinsToPoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddCoinsToPoolResponse(buffer_arg) {
  return pool_pb.AddCoinsToPoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreatePoolRequest(arg) {
  if (!(arg instanceof pool_pb.CreatePoolRequest)) {
    throw new Error('Expected argument of type schema.CreatePoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreatePoolRequest(buffer_arg) {
  return pool_pb.CreatePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreatePoolResponse(arg) {
  if (!(arg instanceof pool_pb.CreatePoolResponse)) {
    throw new Error('Expected argument of type schema.CreatePoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreatePoolResponse(buffer_arg) {
  return pool_pb.CreatePoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DeletePoolRequest(arg) {
  if (!(arg instanceof pool_pb.DeletePoolRequest)) {
    throw new Error('Expected argument of type schema.DeletePoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DeletePoolRequest(buffer_arg) {
  return pool_pb.DeletePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DeletePoolResponse(arg) {
  if (!(arg instanceof pool_pb.DeletePoolResponse)) {
    throw new Error('Expected argument of type schema.DeletePoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DeletePoolResponse(buffer_arg) {
  return pool_pb.DeletePoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllPoolsRequest(arg) {
  if (!(arg instanceof pool_pb.GetAllPoolsRequest)) {
    throw new Error('Expected argument of type schema.GetAllPoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllPoolsRequest(buffer_arg) {
  return pool_pb.GetAllPoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllPoolsResponse(arg) {
  if (!(arg instanceof pool_pb.GetAllPoolsResponse)) {
    throw new Error('Expected argument of type schema.GetAllPoolsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllPoolsResponse(buffer_arg) {
  return pool_pb.GetAllPoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ReduceCoinsToPoolRequest(arg) {
  if (!(arg instanceof pool_pb.ReduceCoinsToPoolRequest)) {
    throw new Error('Expected argument of type schema.ReduceCoinsToPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ReduceCoinsToPoolRequest(buffer_arg) {
  return pool_pb.ReduceCoinsToPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ReduceCoinsToPoolResponse(arg) {
  if (!(arg instanceof pool_pb.ReduceCoinsToPoolResponse)) {
    throw new Error('Expected argument of type schema.ReduceCoinsToPoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ReduceCoinsToPoolResponse(buffer_arg) {
  return pool_pb.ReduceCoinsToPoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdatePoolRequest(arg) {
  if (!(arg instanceof pool_pb.UpdatePoolRequest)) {
    throw new Error('Expected argument of type schema.UpdatePoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdatePoolRequest(buffer_arg) {
  return pool_pb.UpdatePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdatePoolResponse(arg) {
  if (!(arg instanceof pool_pb.UpdatePoolResponse)) {
    throw new Error('Expected argument of type schema.UpdatePoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdatePoolResponse(buffer_arg) {
  return pool_pb.UpdatePoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PoolServiceService = exports.PoolServiceService = {
  createPool: {
    path: '/schema.PoolService/CreatePool',
    requestStream: false,
    responseStream: false,
    requestType: pool_pb.CreatePoolRequest,
    responseType: pool_pb.CreatePoolResponse,
    requestSerialize: serialize_schema_CreatePoolRequest,
    requestDeserialize: deserialize_schema_CreatePoolRequest,
    responseSerialize: serialize_schema_CreatePoolResponse,
    responseDeserialize: deserialize_schema_CreatePoolResponse,
  },
  updatePool: {
    path: '/schema.PoolService/UpdatePool',
    requestStream: false,
    responseStream: false,
    requestType: pool_pb.UpdatePoolRequest,
    responseType: pool_pb.UpdatePoolResponse,
    requestSerialize: serialize_schema_UpdatePoolRequest,
    requestDeserialize: deserialize_schema_UpdatePoolRequest,
    responseSerialize: serialize_schema_UpdatePoolResponse,
    responseDeserialize: deserialize_schema_UpdatePoolResponse,
  },
  deletePool: {
    path: '/schema.PoolService/DeletePool',
    requestStream: false,
    responseStream: false,
    requestType: pool_pb.DeletePoolRequest,
    responseType: pool_pb.DeletePoolResponse,
    requestSerialize: serialize_schema_DeletePoolRequest,
    requestDeserialize: deserialize_schema_DeletePoolRequest,
    responseSerialize: serialize_schema_DeletePoolResponse,
    responseDeserialize: deserialize_schema_DeletePoolResponse,
  },
  getAllPools: {
    path: '/schema.PoolService/GetAllPools',
    requestStream: false,
    responseStream: false,
    requestType: pool_pb.GetAllPoolsRequest,
    responseType: pool_pb.GetAllPoolsResponse,
    requestSerialize: serialize_schema_GetAllPoolsRequest,
    requestDeserialize: deserialize_schema_GetAllPoolsRequest,
    responseSerialize: serialize_schema_GetAllPoolsResponse,
    responseDeserialize: deserialize_schema_GetAllPoolsResponse,
  },
  addCoinsToPool: {
    path: '/schema.PoolService/AddCoinsToPool',
    requestStream: false,
    responseStream: false,
    requestType: pool_pb.AddCoinsToPoolRequest,
    responseType: pool_pb.AddCoinsToPoolResponse,
    requestSerialize: serialize_schema_AddCoinsToPoolRequest,
    requestDeserialize: deserialize_schema_AddCoinsToPoolRequest,
    responseSerialize: serialize_schema_AddCoinsToPoolResponse,
    responseDeserialize: deserialize_schema_AddCoinsToPoolResponse,
  },
  reduceCoinsToPool: {
    path: '/schema.PoolService/ReduceCoinsToPool',
    requestStream: false,
    responseStream: false,
    requestType: pool_pb.ReduceCoinsToPoolRequest,
    responseType: pool_pb.ReduceCoinsToPoolResponse,
    requestSerialize: serialize_schema_ReduceCoinsToPoolRequest,
    requestDeserialize: deserialize_schema_ReduceCoinsToPoolRequest,
    responseSerialize: serialize_schema_ReduceCoinsToPoolResponse,
    responseDeserialize: deserialize_schema_ReduceCoinsToPoolResponse,
  },
};

exports.PoolServiceClient = grpc.makeGenericClientConstructor(PoolServiceService);
