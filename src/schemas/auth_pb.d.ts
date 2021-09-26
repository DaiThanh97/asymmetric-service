// package: schema
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as user_pb from "./user_pb";

export class LoginRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): user_pb.UserModel | undefined;
    setUser(value?: user_pb.UserModel): LoginResponse;
    getToken(): string;
    setToken(value: string): LoginResponse;
    getRefreshtoken(): string;
    setRefreshtoken(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        user?: user_pb.UserModel.AsObject,
        token: string,
        refreshtoken: string,
    }
}

export class RefreshTokenRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
    static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
    export type AsObject = {
    }
}

export class RefreshTokenResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): user_pb.UserModel | undefined;
    setUser(value?: user_pb.UserModel): RefreshTokenResponse;
    getToken(): string;
    setToken(value: string): RefreshTokenResponse;
    getRefreshtoken(): string;
    setRefreshtoken(value: string): RefreshTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenResponse): RefreshTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse;
    static deserializeBinaryFromReader(message: RefreshTokenResponse, reader: jspb.BinaryReader): RefreshTokenResponse;
}

export namespace RefreshTokenResponse {
    export type AsObject = {
        user?: user_pb.UserModel.AsObject,
        token: string,
        refreshtoken: string,
    }
}

export class ValidateTokenRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ValidateTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateTokenRequest): ValidateTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateTokenRequest;
    static deserializeBinaryFromReader(message: ValidateTokenRequest, reader: jspb.BinaryReader): ValidateTokenRequest;
}

export namespace ValidateTokenRequest {
    export type AsObject = {
        token: string,
    }
}

export class ValidateTokenResponse extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): ValidateTokenResponse;
    getRole(): string;
    setRole(value: string): ValidateTokenResponse;
    getUsername(): string;
    setUsername(value: string): ValidateTokenResponse;
    getEmail(): string;
    setEmail(value: string): ValidateTokenResponse;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): ValidateTokenResponse;
    getEmailVerified(): boolean;
    setEmailVerified(value: boolean): ValidateTokenResponse;
    getPhoneNumberVerified(): boolean;
    setPhoneNumberVerified(value: boolean): ValidateTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateTokenResponse): ValidateTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateTokenResponse;
    static deserializeBinaryFromReader(message: ValidateTokenResponse, reader: jspb.BinaryReader): ValidateTokenResponse;
}

export namespace ValidateTokenResponse {
    export type AsObject = {
        userId: number,
        role: string,
        username: string,
        email: string,
        phoneNumber: string,
        emailVerified: boolean,
        phoneNumberVerified: boolean,
    }
}
