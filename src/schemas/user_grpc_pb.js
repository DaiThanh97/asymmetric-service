// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_schema_AddCoinsToPlayerRequest(arg) {
  if (!(arg instanceof user_pb.AddCoinsToPlayerRequest)) {
    throw new Error('Expected argument of type schema.AddCoinsToPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddCoinsToPlayerRequest(buffer_arg) {
  return user_pb.AddCoinsToPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_AddCoinsToPlayerResponse(arg) {
  if (!(arg instanceof user_pb.AddCoinsToPlayerResponse)) {
    throw new Error('Expected argument of type schema.AddCoinsToPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddCoinsToPlayerResponse(buffer_arg) {
  return user_pb.AddCoinsToPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ChangeCurrencyRequest(arg) {
  if (!(arg instanceof user_pb.ChangeCurrencyRequest)) {
    throw new Error('Expected argument of type schema.ChangeCurrencyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ChangeCurrencyRequest(buffer_arg) {
  return user_pb.ChangeCurrencyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ChangeCurrencyResponse(arg) {
  if (!(arg instanceof user_pb.ChangeCurrencyResponse)) {
    throw new Error('Expected argument of type schema.ChangeCurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ChangeCurrencyResponse(buffer_arg) {
  return user_pb.ChangeCurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ChangeDisplayNameRequest(arg) {
  if (!(arg instanceof user_pb.ChangeDisplayNameRequest)) {
    throw new Error('Expected argument of type schema.ChangeDisplayNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ChangeDisplayNameRequest(buffer_arg) {
  return user_pb.ChangeDisplayNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ChangeDisplayNameResponse(arg) {
  if (!(arg instanceof user_pb.ChangeDisplayNameResponse)) {
    throw new Error('Expected argument of type schema.ChangeDisplayNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ChangeDisplayNameResponse(buffer_arg) {
  return user_pb.ChangeDisplayNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ChangePasswordRequest(arg) {
  if (!(arg instanceof user_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type schema.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ChangePasswordRequest(buffer_arg) {
  return user_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ChangePasswordResponse(arg) {
  if (!(arg instanceof user_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type schema.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ChangePasswordResponse(buffer_arg) {
  return user_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CheckUsernamePasswordRequest(arg) {
  if (!(arg instanceof user_pb.CheckUsernamePasswordRequest)) {
    throw new Error('Expected argument of type schema.CheckUsernamePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CheckUsernamePasswordRequest(buffer_arg) {
  return user_pb.CheckUsernamePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CheckUsernamePasswordResponse(arg) {
  if (!(arg instanceof user_pb.CheckUsernamePasswordResponse)) {
    throw new Error('Expected argument of type schema.CheckUsernamePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CheckUsernamePasswordResponse(buffer_arg) {
  return user_pb.CheckUsernamePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreatePlayerRequest(arg) {
  if (!(arg instanceof user_pb.CreatePlayerRequest)) {
    throw new Error('Expected argument of type schema.CreatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreatePlayerRequest(buffer_arg) {
  return user_pb.CreatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreatePlayerResponse(arg) {
  if (!(arg instanceof user_pb.CreatePlayerResponse)) {
    throw new Error('Expected argument of type schema.CreatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreatePlayerResponse(buffer_arg) {
  return user_pb.CreatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DeletePlayerRequest(arg) {
  if (!(arg instanceof user_pb.DeletePlayerRequest)) {
    throw new Error('Expected argument of type schema.DeletePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DeletePlayerRequest(buffer_arg) {
  return user_pb.DeletePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_DeletePlayerResponse(arg) {
  if (!(arg instanceof user_pb.DeletePlayerResponse)) {
    throw new Error('Expected argument of type schema.DeletePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_DeletePlayerResponse(buffer_arg) {
  return user_pb.DeletePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_FindUserByIdRequest(arg) {
  if (!(arg instanceof user_pb.FindUserByIdRequest)) {
    throw new Error('Expected argument of type schema.FindUserByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_FindUserByIdRequest(buffer_arg) {
  return user_pb.FindUserByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_FindUserByIdResponse(arg) {
  if (!(arg instanceof user_pb.FindUserByIdResponse)) {
    throw new Error('Expected argument of type schema.FindUserByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_FindUserByIdResponse(buffer_arg) {
  return user_pb.FindUserByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetCurrentUserRequest(arg) {
  if (!(arg instanceof user_pb.GetCurrentUserRequest)) {
    throw new Error('Expected argument of type schema.GetCurrentUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetCurrentUserRequest(buffer_arg) {
  return user_pb.GetCurrentUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetCurrentUserResponse(arg) {
  if (!(arg instanceof user_pb.GetCurrentUserResponse)) {
    throw new Error('Expected argument of type schema.GetCurrentUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetCurrentUserResponse(buffer_arg) {
  return user_pb.GetCurrentUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ReduceCoinsToPlayerRequest(arg) {
  if (!(arg instanceof user_pb.ReduceCoinsToPlayerRequest)) {
    throw new Error('Expected argument of type schema.ReduceCoinsToPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ReduceCoinsToPlayerRequest(buffer_arg) {
  return user_pb.ReduceCoinsToPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_ReduceCoinsToPlayerResponse(arg) {
  if (!(arg instanceof user_pb.ReduceCoinsToPlayerResponse)) {
    throw new Error('Expected argument of type schema.ReduceCoinsToPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_ReduceCoinsToPlayerResponse(buffer_arg) {
  return user_pb.ReduceCoinsToPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SendOTPRequest(arg) {
  if (!(arg instanceof user_pb.SendOTPRequest)) {
    throw new Error('Expected argument of type schema.SendOTPRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SendOTPRequest(buffer_arg) {
  return user_pb.SendOTPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_SendOTPResponse(arg) {
  if (!(arg instanceof user_pb.SendOTPResponse)) {
    throw new Error('Expected argument of type schema.SendOTPResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_SendOTPResponse(buffer_arg) {
  return user_pb.SendOTPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateEmailRequest(arg) {
  if (!(arg instanceof user_pb.UpdateEmailRequest)) {
    throw new Error('Expected argument of type schema.UpdateEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateEmailRequest(buffer_arg) {
  return user_pb.UpdateEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateEmailResponse(arg) {
  if (!(arg instanceof user_pb.UpdateEmailResponse)) {
    throw new Error('Expected argument of type schema.UpdateEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateEmailResponse(buffer_arg) {
  return user_pb.UpdateEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdatePhoneNumberRequest(arg) {
  if (!(arg instanceof user_pb.UpdatePhoneNumberRequest)) {
    throw new Error('Expected argument of type schema.UpdatePhoneNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdatePhoneNumberRequest(buffer_arg) {
  return user_pb.UpdatePhoneNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdatePhoneNumberResponse(arg) {
  if (!(arg instanceof user_pb.UpdatePhoneNumberResponse)) {
    throw new Error('Expected argument of type schema.UpdatePhoneNumberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdatePhoneNumberResponse(buffer_arg) {
  return user_pb.UpdatePhoneNumberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UploadAvatarRequest(arg) {
  if (!(arg instanceof user_pb.UploadAvatarRequest)) {
    throw new Error('Expected argument of type schema.UploadAvatarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UploadAvatarRequest(buffer_arg) {
  return user_pb.UploadAvatarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UploadAvatarResponse(arg) {
  if (!(arg instanceof user_pb.UploadAvatarResponse)) {
    throw new Error('Expected argument of type schema.UploadAvatarResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UploadAvatarResponse(buffer_arg) {
  return user_pb.UploadAvatarResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_VerifyEmailRequest(arg) {
  if (!(arg instanceof user_pb.VerifyEmailRequest)) {
    throw new Error('Expected argument of type schema.VerifyEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_VerifyEmailRequest(buffer_arg) {
  return user_pb.VerifyEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_VerifyEmailResponse(arg) {
  if (!(arg instanceof user_pb.VerifyEmailResponse)) {
    throw new Error('Expected argument of type schema.VerifyEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_VerifyEmailResponse(buffer_arg) {
  return user_pb.VerifyEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_VerifyPhoneNumberRequest(arg) {
  if (!(arg instanceof user_pb.VerifyPhoneNumberRequest)) {
    throw new Error('Expected argument of type schema.VerifyPhoneNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_VerifyPhoneNumberRequest(buffer_arg) {
  return user_pb.VerifyPhoneNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_VerifyPhoneNumberResponse(arg) {
  if (!(arg instanceof user_pb.VerifyPhoneNumberResponse)) {
    throw new Error('Expected argument of type schema.VerifyPhoneNumberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_VerifyPhoneNumberResponse(buffer_arg) {
  return user_pb.VerifyPhoneNumberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createPlayer: {
    path: '/schema.UserService/CreatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreatePlayerRequest,
    responseType: user_pb.CreatePlayerResponse,
    requestSerialize: serialize_schema_CreatePlayerRequest,
    requestDeserialize: deserialize_schema_CreatePlayerRequest,
    responseSerialize: serialize_schema_CreatePlayerResponse,
    responseDeserialize: deserialize_schema_CreatePlayerResponse,
  },
  // player only
changeDisplayName: {
    path: '/schema.UserService/ChangeDisplayName',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangeDisplayNameRequest,
    responseType: user_pb.ChangeDisplayNameResponse,
    requestSerialize: serialize_schema_ChangeDisplayNameRequest,
    requestDeserialize: deserialize_schema_ChangeDisplayNameRequest,
    responseSerialize: serialize_schema_ChangeDisplayNameResponse,
    responseDeserialize: deserialize_schema_ChangeDisplayNameResponse,
  },
  // only available when email_verified == false
updateEmail: {
    path: '/schema.UserService/UpdateEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateEmailRequest,
    responseType: user_pb.UpdateEmailResponse,
    requestSerialize: serialize_schema_UpdateEmailRequest,
    requestDeserialize: deserialize_schema_UpdateEmailRequest,
    responseSerialize: serialize_schema_UpdateEmailResponse,
    responseDeserialize: deserialize_schema_UpdateEmailResponse,
  },
  // only available when phone_number_verified == false
updatePhoneNumber: {
    path: '/schema.UserService/UpdatePhoneNumber',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdatePhoneNumberRequest,
    responseType: user_pb.UpdatePhoneNumberResponse,
    requestSerialize: serialize_schema_UpdatePhoneNumberRequest,
    requestDeserialize: deserialize_schema_UpdatePhoneNumberRequest,
    responseSerialize: serialize_schema_UpdatePhoneNumberResponse,
    responseDeserialize: deserialize_schema_UpdatePhoneNumberResponse,
  },
  deletePlayer: {
    path: '/schema.UserService/DeletePlayer',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeletePlayerRequest,
    responseType: user_pb.DeletePlayerResponse,
    requestSerialize: serialize_schema_DeletePlayerRequest,
    requestDeserialize: deserialize_schema_DeletePlayerRequest,
    responseSerialize: serialize_schema_DeletePlayerResponse,
    responseDeserialize: deserialize_schema_DeletePlayerResponse,
  },
  checkUsernamePassword: {
    path: '/schema.UserService/CheckUsernamePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CheckUsernamePasswordRequest,
    responseType: user_pb.CheckUsernamePasswordResponse,
    requestSerialize: serialize_schema_CheckUsernamePasswordRequest,
    requestDeserialize: deserialize_schema_CheckUsernamePasswordRequest,
    responseSerialize: serialize_schema_CheckUsernamePasswordResponse,
    responseDeserialize: deserialize_schema_CheckUsernamePasswordResponse,
  },
  findUserById: {
    path: '/schema.UserService/FindUserById',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindUserByIdRequest,
    responseType: user_pb.FindUserByIdResponse,
    requestSerialize: serialize_schema_FindUserByIdRequest,
    requestDeserialize: deserialize_schema_FindUserByIdRequest,
    responseSerialize: serialize_schema_FindUserByIdResponse,
    responseDeserialize: deserialize_schema_FindUserByIdResponse,
  },
  // player only
verifyEmail: {
    path: '/schema.UserService/VerifyEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.VerifyEmailRequest,
    responseType: user_pb.VerifyEmailResponse,
    requestSerialize: serialize_schema_VerifyEmailRequest,
    requestDeserialize: deserialize_schema_VerifyEmailRequest,
    responseSerialize: serialize_schema_VerifyEmailResponse,
    responseDeserialize: deserialize_schema_VerifyEmailResponse,
  },
  // player only
verifyPhoneNumber: {
    path: '/schema.UserService/VerifyPhoneNumber',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.VerifyPhoneNumberRequest,
    responseType: user_pb.VerifyPhoneNumberResponse,
    requestSerialize: serialize_schema_VerifyPhoneNumberRequest,
    requestDeserialize: deserialize_schema_VerifyPhoneNumberRequest,
    responseSerialize: serialize_schema_VerifyPhoneNumberResponse,
    responseDeserialize: deserialize_schema_VerifyPhoneNumberResponse,
  },
  changePassword: {
    path: '/schema.UserService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangePasswordRequest,
    responseType: user_pb.ChangePasswordResponse,
    requestSerialize: serialize_schema_ChangePasswordRequest,
    requestDeserialize: deserialize_schema_ChangePasswordRequest,
    responseSerialize: serialize_schema_ChangePasswordResponse,
    responseDeserialize: deserialize_schema_ChangePasswordResponse,
  },
  // player only
changeCurrency: {
    path: '/schema.UserService/ChangeCurrency',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangeCurrencyRequest,
    responseType: user_pb.ChangeCurrencyResponse,
    requestSerialize: serialize_schema_ChangeCurrencyRequest,
    requestDeserialize: deserialize_schema_ChangeCurrencyRequest,
    responseSerialize: serialize_schema_ChangeCurrencyResponse,
    responseDeserialize: deserialize_schema_ChangeCurrencyResponse,
  },
  // player only
uploadAvatar: {
    path: '/schema.UserService/UploadAvatar',
    requestStream: true,
    responseStream: false,
    requestType: user_pb.UploadAvatarRequest,
    responseType: user_pb.UploadAvatarResponse,
    requestSerialize: serialize_schema_UploadAvatarRequest,
    requestDeserialize: deserialize_schema_UploadAvatarRequest,
    responseSerialize: serialize_schema_UploadAvatarResponse,
    responseDeserialize: deserialize_schema_UploadAvatarResponse,
  },
  // player only
sendOTP: {
    path: '/schema.UserService/SendOTP',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SendOTPRequest,
    responseType: user_pb.SendOTPResponse,
    requestSerialize: serialize_schema_SendOTPRequest,
    requestDeserialize: deserialize_schema_SendOTPRequest,
    responseSerialize: serialize_schema_SendOTPResponse,
    responseDeserialize: deserialize_schema_SendOTPResponse,
  },
  getCurrentUser: {
    path: '/schema.UserService/GetCurrentUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetCurrentUserRequest,
    responseType: user_pb.GetCurrentUserResponse,
    requestSerialize: serialize_schema_GetCurrentUserRequest,
    requestDeserialize: deserialize_schema_GetCurrentUserRequest,
    responseSerialize: serialize_schema_GetCurrentUserResponse,
    responseDeserialize: deserialize_schema_GetCurrentUserResponse,
  },
  // for recharge service
addCoinsToPlayer: {
    path: '/schema.UserService/AddCoinsToPlayer',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.AddCoinsToPlayerRequest,
    responseType: user_pb.AddCoinsToPlayerResponse,
    requestSerialize: serialize_schema_AddCoinsToPlayerRequest,
    requestDeserialize: deserialize_schema_AddCoinsToPlayerRequest,
    responseSerialize: serialize_schema_AddCoinsToPlayerResponse,
    responseDeserialize: deserialize_schema_AddCoinsToPlayerResponse,
  },
  reduceCoinsToPlayer: {
    path: '/schema.UserService/ReduceCoinsToPlayer',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ReduceCoinsToPlayerRequest,
    responseType: user_pb.ReduceCoinsToPlayerResponse,
    requestSerialize: serialize_schema_ReduceCoinsToPlayerRequest,
    requestDeserialize: deserialize_schema_ReduceCoinsToPlayerRequest,
    responseSerialize: serialize_schema_ReduceCoinsToPlayerResponse,
    responseDeserialize: deserialize_schema_ReduceCoinsToPlayerResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
