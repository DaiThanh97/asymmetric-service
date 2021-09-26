// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var payment_pb = require('./payment_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_schema_GetAllTransactionRequest(arg) {
  if (!(arg instanceof payment_pb.GetAllTransactionRequest)) {
    throw new Error('Expected argument of type schema.GetAllTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllTransactionRequest(buffer_arg) {
  return payment_pb.GetAllTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetAllTransactionResponse(arg) {
  if (!(arg instanceof payment_pb.GetAllTransactionResponse)) {
    throw new Error('Expected argument of type schema.GetAllTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetAllTransactionResponse(buffer_arg) {
  return payment_pb.GetAllTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RechargeWithSkrillRequest(arg) {
  if (!(arg instanceof payment_pb.RechargeWithSkrillRequest)) {
    throw new Error('Expected argument of type schema.RechargeWithSkrillRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RechargeWithSkrillRequest(buffer_arg) {
  return payment_pb.RechargeWithSkrillRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RechargeWithSkrillResponse(arg) {
  if (!(arg instanceof payment_pb.RechargeWithSkrillResponse)) {
    throw new Error('Expected argument of type schema.RechargeWithSkrillResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RechargeWithSkrillResponse(buffer_arg) {
  return payment_pb.RechargeWithSkrillResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RechargeWithStripeRequest(arg) {
  if (!(arg instanceof payment_pb.RechargeWithStripeRequest)) {
    throw new Error('Expected argument of type schema.RechargeWithStripeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RechargeWithStripeRequest(buffer_arg) {
  return payment_pb.RechargeWithStripeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_RechargeWithStripeResponse(arg) {
  if (!(arg instanceof payment_pb.RechargeWithStripeResponse)) {
    throw new Error('Expected argument of type schema.RechargeWithStripeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_RechargeWithStripeResponse(buffer_arg) {
  return payment_pb.RechargeWithStripeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSkrillTransactionStatusRequest(arg) {
  if (!(arg instanceof payment_pb.UpdateSkrillTransactionStatusRequest)) {
    throw new Error('Expected argument of type schema.UpdateSkrillTransactionStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSkrillTransactionStatusRequest(buffer_arg) {
  return payment_pb.UpdateSkrillTransactionStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSkrillTransactionStatusResponse(arg) {
  if (!(arg instanceof payment_pb.UpdateSkrillTransactionStatusResponse)) {
    throw new Error('Expected argument of type schema.UpdateSkrillTransactionStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSkrillTransactionStatusResponse(buffer_arg) {
  return payment_pb.UpdateSkrillTransactionStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PaymentServiceService = exports.PaymentServiceService = {
  rechargeWithStripe: {
    path: '/schema.PaymentService/RechargeWithStripe',
    requestStream: false,
    responseStream: false,
    requestType: payment_pb.RechargeWithStripeRequest,
    responseType: payment_pb.RechargeWithStripeResponse,
    requestSerialize: serialize_schema_RechargeWithStripeRequest,
    requestDeserialize: deserialize_schema_RechargeWithStripeRequest,
    responseSerialize: serialize_schema_RechargeWithStripeResponse,
    responseDeserialize: deserialize_schema_RechargeWithStripeResponse,
  },
  rechargeWithSkrill: {
    path: '/schema.PaymentService/RechargeWithSkrill',
    requestStream: false,
    responseStream: false,
    requestType: payment_pb.RechargeWithSkrillRequest,
    responseType: payment_pb.RechargeWithSkrillResponse,
    requestSerialize: serialize_schema_RechargeWithSkrillRequest,
    requestDeserialize: deserialize_schema_RechargeWithSkrillRequest,
    responseSerialize: serialize_schema_RechargeWithSkrillResponse,
    responseDeserialize: deserialize_schema_RechargeWithSkrillResponse,
  },
  getAllTransaction: {
    path: '/schema.PaymentService/GetAllTransaction',
    requestStream: false,
    responseStream: false,
    requestType: payment_pb.GetAllTransactionRequest,
    responseType: payment_pb.GetAllTransactionResponse,
    requestSerialize: serialize_schema_GetAllTransactionRequest,
    requestDeserialize: deserialize_schema_GetAllTransactionRequest,
    responseSerialize: serialize_schema_GetAllTransactionResponse,
    responseDeserialize: deserialize_schema_GetAllTransactionResponse,
  },
  updateSkrillTransactionStatus: {
    path: '/schema.PaymentService/UpdateSkrillTransactionStatus',
    requestStream: false,
    responseStream: false,
    requestType: payment_pb.UpdateSkrillTransactionStatusRequest,
    responseType: payment_pb.UpdateSkrillTransactionStatusResponse,
    requestSerialize: serialize_schema_UpdateSkrillTransactionStatusRequest,
    requestDeserialize: deserialize_schema_UpdateSkrillTransactionStatusRequest,
    responseSerialize: serialize_schema_UpdateSkrillTransactionStatusResponse,
    responseDeserialize: deserialize_schema_UpdateSkrillTransactionStatusResponse,
  },
};

exports.PaymentServiceClient = grpc.makeGenericClientConstructor(PaymentServiceService);
