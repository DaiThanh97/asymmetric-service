// package: schema
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPlayer: IUserServiceService_ICreatePlayer;
    changeDisplayName: IUserServiceService_IChangeDisplayName;
    updateEmail: IUserServiceService_IUpdateEmail;
    updatePhoneNumber: IUserServiceService_IUpdatePhoneNumber;
    deletePlayer: IUserServiceService_IDeletePlayer;
    checkUsernamePassword: IUserServiceService_ICheckUsernamePassword;
    findUserById: IUserServiceService_IFindUserById;
    verifyEmail: IUserServiceService_IVerifyEmail;
    verifyPhoneNumber: IUserServiceService_IVerifyPhoneNumber;
    changePassword: IUserServiceService_IChangePassword;
    changeCurrency: IUserServiceService_IChangeCurrency;
    uploadAvatar: IUserServiceService_IUploadAvatar;
    sendOTP: IUserServiceService_ISendOTP;
    getCurrentUser: IUserServiceService_IGetCurrentUser;
    addCoinsToPlayer: IUserServiceService_IAddCoinsToPlayer;
    reduceCoinsToPlayer: IUserServiceService_IReduceCoinsToPlayer;
}

interface IUserServiceService_ICreatePlayer extends grpc.MethodDefinition<user_pb.CreatePlayerRequest, user_pb.CreatePlayerResponse> {
    path: "/schema.UserService/CreatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreatePlayerRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreatePlayerRequest>;
    responseSerialize: grpc.serialize<user_pb.CreatePlayerResponse>;
    responseDeserialize: grpc.deserialize<user_pb.CreatePlayerResponse>;
}
interface IUserServiceService_IChangeDisplayName extends grpc.MethodDefinition<user_pb.ChangeDisplayNameRequest, user_pb.ChangeDisplayNameResponse> {
    path: "/schema.UserService/ChangeDisplayName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ChangeDisplayNameRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ChangeDisplayNameRequest>;
    responseSerialize: grpc.serialize<user_pb.ChangeDisplayNameResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ChangeDisplayNameResponse>;
}
interface IUserServiceService_IUpdateEmail extends grpc.MethodDefinition<user_pb.UpdateEmailRequest, user_pb.UpdateEmailResponse> {
    path: "/schema.UserService/UpdateEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateEmailRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateEmailRequest>;
    responseSerialize: grpc.serialize<user_pb.UpdateEmailResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UpdateEmailResponse>;
}
interface IUserServiceService_IUpdatePhoneNumber extends grpc.MethodDefinition<user_pb.UpdatePhoneNumberRequest, user_pb.UpdatePhoneNumberResponse> {
    path: "/schema.UserService/UpdatePhoneNumber";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdatePhoneNumberRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdatePhoneNumberRequest>;
    responseSerialize: grpc.serialize<user_pb.UpdatePhoneNumberResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UpdatePhoneNumberResponse>;
}
interface IUserServiceService_IDeletePlayer extends grpc.MethodDefinition<user_pb.DeletePlayerRequest, user_pb.DeletePlayerResponse> {
    path: "/schema.UserService/DeletePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeletePlayerRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeletePlayerRequest>;
    responseSerialize: grpc.serialize<user_pb.DeletePlayerResponse>;
    responseDeserialize: grpc.deserialize<user_pb.DeletePlayerResponse>;
}
interface IUserServiceService_ICheckUsernamePassword extends grpc.MethodDefinition<user_pb.CheckUsernamePasswordRequest, user_pb.CheckUsernamePasswordResponse> {
    path: "/schema.UserService/CheckUsernamePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CheckUsernamePasswordRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CheckUsernamePasswordRequest>;
    responseSerialize: grpc.serialize<user_pb.CheckUsernamePasswordResponse>;
    responseDeserialize: grpc.deserialize<user_pb.CheckUsernamePasswordResponse>;
}
interface IUserServiceService_IFindUserById extends grpc.MethodDefinition<user_pb.FindUserByIdRequest, user_pb.FindUserByIdResponse> {
    path: "/schema.UserService/FindUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.FindUserByIdRequest>;
    requestDeserialize: grpc.deserialize<user_pb.FindUserByIdRequest>;
    responseSerialize: grpc.serialize<user_pb.FindUserByIdResponse>;
    responseDeserialize: grpc.deserialize<user_pb.FindUserByIdResponse>;
}
interface IUserServiceService_IVerifyEmail extends grpc.MethodDefinition<user_pb.VerifyEmailRequest, user_pb.VerifyEmailResponse> {
    path: "/schema.UserService/VerifyEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.VerifyEmailRequest>;
    requestDeserialize: grpc.deserialize<user_pb.VerifyEmailRequest>;
    responseSerialize: grpc.serialize<user_pb.VerifyEmailResponse>;
    responseDeserialize: grpc.deserialize<user_pb.VerifyEmailResponse>;
}
interface IUserServiceService_IVerifyPhoneNumber extends grpc.MethodDefinition<user_pb.VerifyPhoneNumberRequest, user_pb.VerifyPhoneNumberResponse> {
    path: "/schema.UserService/VerifyPhoneNumber";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.VerifyPhoneNumberRequest>;
    requestDeserialize: grpc.deserialize<user_pb.VerifyPhoneNumberRequest>;
    responseSerialize: grpc.serialize<user_pb.VerifyPhoneNumberResponse>;
    responseDeserialize: grpc.deserialize<user_pb.VerifyPhoneNumberResponse>;
}
interface IUserServiceService_IChangePassword extends grpc.MethodDefinition<user_pb.ChangePasswordRequest, user_pb.ChangePasswordResponse> {
    path: "/schema.UserService/ChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<user_pb.ChangePasswordResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ChangePasswordResponse>;
}
interface IUserServiceService_IChangeCurrency extends grpc.MethodDefinition<user_pb.ChangeCurrencyRequest, user_pb.ChangeCurrencyResponse> {
    path: "/schema.UserService/ChangeCurrency";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ChangeCurrencyRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ChangeCurrencyRequest>;
    responseSerialize: grpc.serialize<user_pb.ChangeCurrencyResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ChangeCurrencyResponse>;
}
interface IUserServiceService_IUploadAvatar extends grpc.MethodDefinition<user_pb.UploadAvatarRequest, user_pb.UploadAvatarResponse> {
    path: "/schema.UserService/UploadAvatar";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UploadAvatarRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UploadAvatarRequest>;
    responseSerialize: grpc.serialize<user_pb.UploadAvatarResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UploadAvatarResponse>;
}
interface IUserServiceService_ISendOTP extends grpc.MethodDefinition<user_pb.SendOTPRequest, user_pb.SendOTPResponse> {
    path: "/schema.UserService/SendOTP";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.SendOTPRequest>;
    requestDeserialize: grpc.deserialize<user_pb.SendOTPRequest>;
    responseSerialize: grpc.serialize<user_pb.SendOTPResponse>;
    responseDeserialize: grpc.deserialize<user_pb.SendOTPResponse>;
}
interface IUserServiceService_IGetCurrentUser extends grpc.MethodDefinition<user_pb.GetCurrentUserRequest, user_pb.GetCurrentUserResponse> {
    path: "/schema.UserService/GetCurrentUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetCurrentUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetCurrentUserRequest>;
    responseSerialize: grpc.serialize<user_pb.GetCurrentUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetCurrentUserResponse>;
}
interface IUserServiceService_IAddCoinsToPlayer extends grpc.MethodDefinition<user_pb.AddCoinsToPlayerRequest, user_pb.AddCoinsToPlayerResponse> {
    path: "/schema.UserService/AddCoinsToPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.AddCoinsToPlayerRequest>;
    requestDeserialize: grpc.deserialize<user_pb.AddCoinsToPlayerRequest>;
    responseSerialize: grpc.serialize<user_pb.AddCoinsToPlayerResponse>;
    responseDeserialize: grpc.deserialize<user_pb.AddCoinsToPlayerResponse>;
}
interface IUserServiceService_IReduceCoinsToPlayer extends grpc.MethodDefinition<user_pb.ReduceCoinsToPlayerRequest, user_pb.ReduceCoinsToPlayerResponse> {
    path: "/schema.UserService/ReduceCoinsToPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ReduceCoinsToPlayerRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ReduceCoinsToPlayerRequest>;
    responseSerialize: grpc.serialize<user_pb.ReduceCoinsToPlayerResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ReduceCoinsToPlayerResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    createPlayer: grpc.handleUnaryCall<user_pb.CreatePlayerRequest, user_pb.CreatePlayerResponse>;
    changeDisplayName: grpc.handleUnaryCall<user_pb.ChangeDisplayNameRequest, user_pb.ChangeDisplayNameResponse>;
    updateEmail: grpc.handleUnaryCall<user_pb.UpdateEmailRequest, user_pb.UpdateEmailResponse>;
    updatePhoneNumber: grpc.handleUnaryCall<user_pb.UpdatePhoneNumberRequest, user_pb.UpdatePhoneNumberResponse>;
    deletePlayer: grpc.handleUnaryCall<user_pb.DeletePlayerRequest, user_pb.DeletePlayerResponse>;
    checkUsernamePassword: grpc.handleUnaryCall<user_pb.CheckUsernamePasswordRequest, user_pb.CheckUsernamePasswordResponse>;
    findUserById: grpc.handleUnaryCall<user_pb.FindUserByIdRequest, user_pb.FindUserByIdResponse>;
    verifyEmail: grpc.handleUnaryCall<user_pb.VerifyEmailRequest, user_pb.VerifyEmailResponse>;
    verifyPhoneNumber: grpc.handleUnaryCall<user_pb.VerifyPhoneNumberRequest, user_pb.VerifyPhoneNumberResponse>;
    changePassword: grpc.handleUnaryCall<user_pb.ChangePasswordRequest, user_pb.ChangePasswordResponse>;
    changeCurrency: grpc.handleUnaryCall<user_pb.ChangeCurrencyRequest, user_pb.ChangeCurrencyResponse>;
    uploadAvatar: grpc.handleClientStreamingCall<user_pb.UploadAvatarRequest, user_pb.UploadAvatarResponse>;
    sendOTP: grpc.handleUnaryCall<user_pb.SendOTPRequest, user_pb.SendOTPResponse>;
    getCurrentUser: grpc.handleUnaryCall<user_pb.GetCurrentUserRequest, user_pb.GetCurrentUserResponse>;
    addCoinsToPlayer: grpc.handleUnaryCall<user_pb.AddCoinsToPlayerRequest, user_pb.AddCoinsToPlayerResponse>;
    reduceCoinsToPlayer: grpc.handleUnaryCall<user_pb.ReduceCoinsToPlayerRequest, user_pb.ReduceCoinsToPlayerResponse>;
}

export interface IUserServiceClient {
    createPlayer(request: user_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: user_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: user_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    changeDisplayName(request: user_pb.ChangeDisplayNameRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeDisplayNameResponse) => void): grpc.ClientUnaryCall;
    changeDisplayName(request: user_pb.ChangeDisplayNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeDisplayNameResponse) => void): grpc.ClientUnaryCall;
    changeDisplayName(request: user_pb.ChangeDisplayNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeDisplayNameResponse) => void): grpc.ClientUnaryCall;
    updateEmail(request: user_pb.UpdateEmailRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateEmailResponse) => void): grpc.ClientUnaryCall;
    updateEmail(request: user_pb.UpdateEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateEmailResponse) => void): grpc.ClientUnaryCall;
    updateEmail(request: user_pb.UpdateEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateEmailResponse) => void): grpc.ClientUnaryCall;
    updatePhoneNumber(request: user_pb.UpdatePhoneNumberRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdatePhoneNumberResponse) => void): grpc.ClientUnaryCall;
    updatePhoneNumber(request: user_pb.UpdatePhoneNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdatePhoneNumberResponse) => void): grpc.ClientUnaryCall;
    updatePhoneNumber(request: user_pb.UpdatePhoneNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdatePhoneNumberResponse) => void): grpc.ClientUnaryCall;
    deletePlayer(request: user_pb.DeletePlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeletePlayerResponse) => void): grpc.ClientUnaryCall;
    deletePlayer(request: user_pb.DeletePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeletePlayerResponse) => void): grpc.ClientUnaryCall;
    deletePlayer(request: user_pb.DeletePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeletePlayerResponse) => void): grpc.ClientUnaryCall;
    checkUsernamePassword(request: user_pb.CheckUsernamePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CheckUsernamePasswordResponse) => void): grpc.ClientUnaryCall;
    checkUsernamePassword(request: user_pb.CheckUsernamePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CheckUsernamePasswordResponse) => void): grpc.ClientUnaryCall;
    checkUsernamePassword(request: user_pb.CheckUsernamePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CheckUsernamePasswordResponse) => void): grpc.ClientUnaryCall;
    findUserById(request: user_pb.FindUserByIdRequest, callback: (error: grpc.ServiceError | null, response: user_pb.FindUserByIdResponse) => void): grpc.ClientUnaryCall;
    findUserById(request: user_pb.FindUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.FindUserByIdResponse) => void): grpc.ClientUnaryCall;
    findUserById(request: user_pb.FindUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.FindUserByIdResponse) => void): grpc.ClientUnaryCall;
    verifyEmail(request: user_pb.VerifyEmailRequest, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyEmailResponse) => void): grpc.ClientUnaryCall;
    verifyEmail(request: user_pb.VerifyEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyEmailResponse) => void): grpc.ClientUnaryCall;
    verifyEmail(request: user_pb.VerifyEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyEmailResponse) => void): grpc.ClientUnaryCall;
    verifyPhoneNumber(request: user_pb.VerifyPhoneNumberRequest, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyPhoneNumberResponse) => void): grpc.ClientUnaryCall;
    verifyPhoneNumber(request: user_pb.VerifyPhoneNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyPhoneNumberResponse) => void): grpc.ClientUnaryCall;
    verifyPhoneNumber(request: user_pb.VerifyPhoneNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyPhoneNumberResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: user_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: user_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: user_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changeCurrency(request: user_pb.ChangeCurrencyRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeCurrencyResponse) => void): grpc.ClientUnaryCall;
    changeCurrency(request: user_pb.ChangeCurrencyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeCurrencyResponse) => void): grpc.ClientUnaryCall;
    changeCurrency(request: user_pb.ChangeCurrencyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeCurrencyResponse) => void): grpc.ClientUnaryCall;
    uploadAvatar(callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    uploadAvatar(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    uploadAvatar(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    uploadAvatar(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    sendOTP(request: user_pb.SendOTPRequest, callback: (error: grpc.ServiceError | null, response: user_pb.SendOTPResponse) => void): grpc.ClientUnaryCall;
    sendOTP(request: user_pb.SendOTPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.SendOTPResponse) => void): grpc.ClientUnaryCall;
    sendOTP(request: user_pb.SendOTPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.SendOTPResponse) => void): grpc.ClientUnaryCall;
    getCurrentUser(request: user_pb.GetCurrentUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetCurrentUserResponse) => void): grpc.ClientUnaryCall;
    getCurrentUser(request: user_pb.GetCurrentUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetCurrentUserResponse) => void): grpc.ClientUnaryCall;
    getCurrentUser(request: user_pb.GetCurrentUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetCurrentUserResponse) => void): grpc.ClientUnaryCall;
    addCoinsToPlayer(request: user_pb.AddCoinsToPlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.AddCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    addCoinsToPlayer(request: user_pb.AddCoinsToPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.AddCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    addCoinsToPlayer(request: user_pb.AddCoinsToPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.AddCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    reduceCoinsToPlayer(request: user_pb.ReduceCoinsToPlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ReduceCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    reduceCoinsToPlayer(request: user_pb.ReduceCoinsToPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ReduceCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    reduceCoinsToPlayer(request: user_pb.ReduceCoinsToPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ReduceCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPlayer(request: user_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: user_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: user_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public changeDisplayName(request: user_pb.ChangeDisplayNameRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeDisplayNameResponse) => void): grpc.ClientUnaryCall;
    public changeDisplayName(request: user_pb.ChangeDisplayNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeDisplayNameResponse) => void): grpc.ClientUnaryCall;
    public changeDisplayName(request: user_pb.ChangeDisplayNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeDisplayNameResponse) => void): grpc.ClientUnaryCall;
    public updateEmail(request: user_pb.UpdateEmailRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateEmailResponse) => void): grpc.ClientUnaryCall;
    public updateEmail(request: user_pb.UpdateEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateEmailResponse) => void): grpc.ClientUnaryCall;
    public updateEmail(request: user_pb.UpdateEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateEmailResponse) => void): grpc.ClientUnaryCall;
    public updatePhoneNumber(request: user_pb.UpdatePhoneNumberRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdatePhoneNumberResponse) => void): grpc.ClientUnaryCall;
    public updatePhoneNumber(request: user_pb.UpdatePhoneNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdatePhoneNumberResponse) => void): grpc.ClientUnaryCall;
    public updatePhoneNumber(request: user_pb.UpdatePhoneNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdatePhoneNumberResponse) => void): grpc.ClientUnaryCall;
    public deletePlayer(request: user_pb.DeletePlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeletePlayerResponse) => void): grpc.ClientUnaryCall;
    public deletePlayer(request: user_pb.DeletePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeletePlayerResponse) => void): grpc.ClientUnaryCall;
    public deletePlayer(request: user_pb.DeletePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeletePlayerResponse) => void): grpc.ClientUnaryCall;
    public checkUsernamePassword(request: user_pb.CheckUsernamePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CheckUsernamePasswordResponse) => void): grpc.ClientUnaryCall;
    public checkUsernamePassword(request: user_pb.CheckUsernamePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CheckUsernamePasswordResponse) => void): grpc.ClientUnaryCall;
    public checkUsernamePassword(request: user_pb.CheckUsernamePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CheckUsernamePasswordResponse) => void): grpc.ClientUnaryCall;
    public findUserById(request: user_pb.FindUserByIdRequest, callback: (error: grpc.ServiceError | null, response: user_pb.FindUserByIdResponse) => void): grpc.ClientUnaryCall;
    public findUserById(request: user_pb.FindUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.FindUserByIdResponse) => void): grpc.ClientUnaryCall;
    public findUserById(request: user_pb.FindUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.FindUserByIdResponse) => void): grpc.ClientUnaryCall;
    public verifyEmail(request: user_pb.VerifyEmailRequest, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyEmailResponse) => void): grpc.ClientUnaryCall;
    public verifyEmail(request: user_pb.VerifyEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyEmailResponse) => void): grpc.ClientUnaryCall;
    public verifyEmail(request: user_pb.VerifyEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyEmailResponse) => void): grpc.ClientUnaryCall;
    public verifyPhoneNumber(request: user_pb.VerifyPhoneNumberRequest, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyPhoneNumberResponse) => void): grpc.ClientUnaryCall;
    public verifyPhoneNumber(request: user_pb.VerifyPhoneNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyPhoneNumberResponse) => void): grpc.ClientUnaryCall;
    public verifyPhoneNumber(request: user_pb.VerifyPhoneNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.VerifyPhoneNumberResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: user_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: user_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: user_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changeCurrency(request: user_pb.ChangeCurrencyRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeCurrencyResponse) => void): grpc.ClientUnaryCall;
    public changeCurrency(request: user_pb.ChangeCurrencyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeCurrencyResponse) => void): grpc.ClientUnaryCall;
    public changeCurrency(request: user_pb.ChangeCurrencyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ChangeCurrencyResponse) => void): grpc.ClientUnaryCall;
    public uploadAvatar(callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    public uploadAvatar(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    public uploadAvatar(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    public uploadAvatar(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UploadAvatarResponse) => void): grpc.ClientWritableStream<user_pb.UploadAvatarRequest>;
    public sendOTP(request: user_pb.SendOTPRequest, callback: (error: grpc.ServiceError | null, response: user_pb.SendOTPResponse) => void): grpc.ClientUnaryCall;
    public sendOTP(request: user_pb.SendOTPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.SendOTPResponse) => void): grpc.ClientUnaryCall;
    public sendOTP(request: user_pb.SendOTPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.SendOTPResponse) => void): grpc.ClientUnaryCall;
    public getCurrentUser(request: user_pb.GetCurrentUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetCurrentUserResponse) => void): grpc.ClientUnaryCall;
    public getCurrentUser(request: user_pb.GetCurrentUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetCurrentUserResponse) => void): grpc.ClientUnaryCall;
    public getCurrentUser(request: user_pb.GetCurrentUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetCurrentUserResponse) => void): grpc.ClientUnaryCall;
    public addCoinsToPlayer(request: user_pb.AddCoinsToPlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.AddCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    public addCoinsToPlayer(request: user_pb.AddCoinsToPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.AddCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    public addCoinsToPlayer(request: user_pb.AddCoinsToPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.AddCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    public reduceCoinsToPlayer(request: user_pb.ReduceCoinsToPlayerRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ReduceCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    public reduceCoinsToPlayer(request: user_pb.ReduceCoinsToPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ReduceCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
    public reduceCoinsToPlayer(request: user_pb.ReduceCoinsToPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ReduceCoinsToPlayerResponse) => void): grpc.ClientUnaryCall;
}
