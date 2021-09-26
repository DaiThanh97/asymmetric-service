// package: schema
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as user_pb from "./user_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
    refreshToken: IAuthServiceService_IRefreshToken;
    validateToken: IAuthServiceService_IValidateToken;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<auth_pb.LoginRequest, auth_pb.LoginResponse> {
    path: "/schema.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.LoginResponse>;
}
interface IAuthServiceService_IRefreshToken extends grpc.MethodDefinition<auth_pb.RefreshTokenRequest, auth_pb.RefreshTokenResponse> {
    path: "/schema.AuthService/RefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<auth_pb.RefreshTokenResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.RefreshTokenResponse>;
}
interface IAuthServiceService_IValidateToken extends grpc.MethodDefinition<auth_pb.ValidateTokenRequest, auth_pb.ValidateTokenResponse> {
    path: "/schema.AuthService/ValidateToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.ValidateTokenRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.ValidateTokenRequest>;
    responseSerialize: grpc.serialize<auth_pb.ValidateTokenResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.ValidateTokenResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<auth_pb.LoginRequest, auth_pb.LoginResponse>;
    refreshToken: grpc.handleUnaryCall<auth_pb.RefreshTokenRequest, auth_pb.RefreshTokenResponse>;
    validateToken: grpc.handleUnaryCall<auth_pb.ValidateTokenRequest, auth_pb.ValidateTokenResponse>;
}

export interface IAuthServiceClient {
    login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: auth_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    validateToken(request: auth_pb.ValidateTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateTokenResponse) => void): grpc.ClientUnaryCall;
    validateToken(request: auth_pb.ValidateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateTokenResponse) => void): grpc.ClientUnaryCall;
    validateToken(request: auth_pb.ValidateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: auth_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public validateToken(request: auth_pb.ValidateTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateTokenResponse) => void): grpc.ClientUnaryCall;
    public validateToken(request: auth_pb.ValidateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateTokenResponse) => void): grpc.ClientUnaryCall;
    public validateToken(request: auth_pb.ValidateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateTokenResponse) => void): grpc.ClientUnaryCall;
}
