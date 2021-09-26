// package: schema
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AdminModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdminModel.AsObject;
    static toObject(includeInstance: boolean, msg: AdminModel): AdminModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdminModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdminModel;
    static deserializeBinaryFromReader(message: AdminModel, reader: jspb.BinaryReader): AdminModel;
}

export namespace AdminModel {
    export type AsObject = {
    }
}

export class PlayerModel extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): PlayerModel;
    getCurrentGoldCoins(): number;
    setCurrentGoldCoins(value: number): PlayerModel;
    getCurrentSweepCoins(): number;
    setCurrentSweepCoins(value: number): PlayerModel;
    getCurrentCurrency(): CurrencyModel;
    setCurrentCurrency(value: CurrencyModel): PlayerModel;
    getCity(): string;
    setCity(value: string): PlayerModel;
    getState(): string;
    setState(value: string): PlayerModel;
    getAvatarUrl(): string;
    setAvatarUrl(value: string): PlayerModel;
    getEmailVerified(): boolean;
    setEmailVerified(value: boolean): PlayerModel;
    getPhoneNumberVerified(): boolean;
    setPhoneNumberVerified(value: boolean): PlayerModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerModel.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerModel): PlayerModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerModel;
    static deserializeBinaryFromReader(message: PlayerModel, reader: jspb.BinaryReader): PlayerModel;
}

export namespace PlayerModel {
    export type AsObject = {
        displayName: string,
        currentGoldCoins: number,
        currentSweepCoins: number,
        currentCurrency: CurrencyModel,
        city: string,
        state: string,
        avatarUrl: string,
        emailVerified: boolean,
        phoneNumberVerified: boolean,
    }
}

export class UserModel extends jspb.Message { 
    getId(): number;
    setId(value: number): UserModel;
    getUsername(): string;
    setUsername(value: string): UserModel;
    getFirstName(): string;
    setFirstName(value: string): UserModel;
    getLastName(): string;
    setLastName(value: string): UserModel;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): UserModel;
    getEmail(): string;
    setEmail(value: string): UserModel;
    getIsLocked(): boolean;
    setIsLocked(value: boolean): UserModel;
    getRole(): RoleModel;
    setRole(value: RoleModel): UserModel;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): PlayerModel | undefined;
    setPlayer(value?: PlayerModel): UserModel;

    hasAdmin(): boolean;
    clearAdmin(): void;
    getAdmin(): AdminModel | undefined;
    setAdmin(value?: AdminModel): UserModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserModel;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserModel;

    getUserDataCase(): UserModel.UserDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserModel.AsObject;
    static toObject(includeInstance: boolean, msg: UserModel): UserModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserModel;
    static deserializeBinaryFromReader(message: UserModel, reader: jspb.BinaryReader): UserModel;
}

export namespace UserModel {
    export type AsObject = {
        id: number,
        username: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        email: string,
        isLocked: boolean,
        role: RoleModel,
        player?: PlayerModel.AsObject,
        admin?: AdminModel.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum UserDataCase {
        USER_DATA_NOT_SET = 0,
        PLAYER = 9,
        ADMIN = 10,
    }

}

export class CreatePlayerRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): CreatePlayerRequest;
    getPassword(): string;
    setPassword(value: string): CreatePlayerRequest;
    getFirstName(): string;
    setFirstName(value: string): CreatePlayerRequest;
    getLastName(): string;
    setLastName(value: string): CreatePlayerRequest;
    getDisplayName(): string;
    setDisplayName(value: string): CreatePlayerRequest;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): CreatePlayerRequest;
    getEmail(): string;
    setEmail(value: string): CreatePlayerRequest;
    getCity(): string;
    setCity(value: string): CreatePlayerRequest;
    getState(): string;
    setState(value: string): CreatePlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlayerRequest): CreatePlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlayerRequest;
    static deserializeBinaryFromReader(message: CreatePlayerRequest, reader: jspb.BinaryReader): CreatePlayerRequest;
}

export namespace CreatePlayerRequest {
    export type AsObject = {
        username: string,
        password: string,
        firstName: string,
        lastName: string,
        displayName: string,
        phoneNumber: string,
        email: string,
        city: string,
        state: string,
    }
}

export class CreatePlayerResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): CreatePlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlayerResponse): CreatePlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlayerResponse;
    static deserializeBinaryFromReader(message: CreatePlayerResponse, reader: jspb.BinaryReader): CreatePlayerResponse;
}

export namespace CreatePlayerResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class ChangeDisplayNameRequest extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): ChangeDisplayNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeDisplayNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeDisplayNameRequest): ChangeDisplayNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeDisplayNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeDisplayNameRequest;
    static deserializeBinaryFromReader(message: ChangeDisplayNameRequest, reader: jspb.BinaryReader): ChangeDisplayNameRequest;
}

export namespace ChangeDisplayNameRequest {
    export type AsObject = {
        displayName: string,
    }
}

export class ChangeDisplayNameResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): ChangeDisplayNameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeDisplayNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeDisplayNameResponse): ChangeDisplayNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeDisplayNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeDisplayNameResponse;
    static deserializeBinaryFromReader(message: ChangeDisplayNameResponse, reader: jspb.BinaryReader): ChangeDisplayNameResponse;
}

export namespace ChangeDisplayNameResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class UpdateEmailRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UpdateEmailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEmailRequest): UpdateEmailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEmailRequest;
    static deserializeBinaryFromReader(message: UpdateEmailRequest, reader: jspb.BinaryReader): UpdateEmailRequest;
}

export namespace UpdateEmailRequest {
    export type AsObject = {
        email: string,
    }
}

export class UpdateEmailResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): UpdateEmailResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEmailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEmailResponse): UpdateEmailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEmailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEmailResponse;
    static deserializeBinaryFromReader(message: UpdateEmailResponse, reader: jspb.BinaryReader): UpdateEmailResponse;
}

export namespace UpdateEmailResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class UpdatePhoneNumberRequest extends jspb.Message { 
    getPhoneNumber(): string;
    setPhoneNumber(value: string): UpdatePhoneNumberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePhoneNumberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePhoneNumberRequest): UpdatePhoneNumberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePhoneNumberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePhoneNumberRequest;
    static deserializeBinaryFromReader(message: UpdatePhoneNumberRequest, reader: jspb.BinaryReader): UpdatePhoneNumberRequest;
}

export namespace UpdatePhoneNumberRequest {
    export type AsObject = {
        phoneNumber: string,
    }
}

export class UpdatePhoneNumberResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): UpdatePhoneNumberResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePhoneNumberResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePhoneNumberResponse): UpdatePhoneNumberResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePhoneNumberResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePhoneNumberResponse;
    static deserializeBinaryFromReader(message: UpdatePhoneNumberResponse, reader: jspb.BinaryReader): UpdatePhoneNumberResponse;
}

export namespace UpdatePhoneNumberResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class DeletePlayerRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePlayerRequest): DeletePlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePlayerRequest;
    static deserializeBinaryFromReader(message: DeletePlayerRequest, reader: jspb.BinaryReader): DeletePlayerRequest;
}

export namespace DeletePlayerRequest {
    export type AsObject = {
    }
}

export class DeletePlayerResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeletePlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePlayerResponse): DeletePlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePlayerResponse;
    static deserializeBinaryFromReader(message: DeletePlayerResponse, reader: jspb.BinaryReader): DeletePlayerResponse;
}

export namespace DeletePlayerResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class CheckUsernamePasswordRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): CheckUsernamePasswordRequest;
    getPassword(): string;
    setPassword(value: string): CheckUsernamePasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckUsernamePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckUsernamePasswordRequest): CheckUsernamePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckUsernamePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckUsernamePasswordRequest;
    static deserializeBinaryFromReader(message: CheckUsernamePasswordRequest, reader: jspb.BinaryReader): CheckUsernamePasswordRequest;
}

export namespace CheckUsernamePasswordRequest {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class CheckUsernamePasswordResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): CheckUsernamePasswordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckUsernamePasswordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckUsernamePasswordResponse): CheckUsernamePasswordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckUsernamePasswordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckUsernamePasswordResponse;
    static deserializeBinaryFromReader(message: CheckUsernamePasswordResponse, reader: jspb.BinaryReader): CheckUsernamePasswordResponse;
}

export namespace CheckUsernamePasswordResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class FindUserByIdRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): FindUserByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserByIdRequest): FindUserByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserByIdRequest;
    static deserializeBinaryFromReader(message: FindUserByIdRequest, reader: jspb.BinaryReader): FindUserByIdRequest;
}

export namespace FindUserByIdRequest {
    export type AsObject = {
        userId: number,
    }
}

export class FindUserByIdResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): FindUserByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserByIdResponse): FindUserByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserByIdResponse;
    static deserializeBinaryFromReader(message: FindUserByIdResponse, reader: jspb.BinaryReader): FindUserByIdResponse;
}

export namespace FindUserByIdResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class VerifyEmailRequest extends jspb.Message { 
    getOtp(): string;
    setOtp(value: string): VerifyEmailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
    static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
    export type AsObject = {
        otp: string,
    }
}

export class VerifyEmailResponse extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): VerifyEmailResponse;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): VerifyEmailResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
    static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
    export type AsObject = {
        result: boolean,
        user?: UserModel.AsObject,
    }
}

export class VerifyPhoneNumberRequest extends jspb.Message { 
    getOtp(): string;
    setOtp(value: string): VerifyPhoneNumberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyPhoneNumberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyPhoneNumberRequest): VerifyPhoneNumberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyPhoneNumberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyPhoneNumberRequest;
    static deserializeBinaryFromReader(message: VerifyPhoneNumberRequest, reader: jspb.BinaryReader): VerifyPhoneNumberRequest;
}

export namespace VerifyPhoneNumberRequest {
    export type AsObject = {
        otp: string,
    }
}

export class VerifyPhoneNumberResponse extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): VerifyPhoneNumberResponse;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): VerifyPhoneNumberResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyPhoneNumberResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyPhoneNumberResponse): VerifyPhoneNumberResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyPhoneNumberResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyPhoneNumberResponse;
    static deserializeBinaryFromReader(message: VerifyPhoneNumberResponse, reader: jspb.BinaryReader): VerifyPhoneNumberResponse;
}

export namespace VerifyPhoneNumberResponse {
    export type AsObject = {
        result: boolean,
        user?: UserModel.AsObject,
    }
}

export class ChangePasswordRequest extends jspb.Message { 
    getOldPassword(): string;
    setOldPassword(value: string): ChangePasswordRequest;
    getNewPassword(): string;
    setNewPassword(value: string): ChangePasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
    static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
    export type AsObject = {
        oldPassword: string,
        newPassword: string,
    }
}

export class ChangePasswordResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): ChangePasswordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
    static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class ChangeCurrencyRequest extends jspb.Message { 
    getNewCurrency(): CurrencyModel;
    setNewCurrency(value: CurrencyModel): ChangeCurrencyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeCurrencyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeCurrencyRequest): ChangeCurrencyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeCurrencyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeCurrencyRequest;
    static deserializeBinaryFromReader(message: ChangeCurrencyRequest, reader: jspb.BinaryReader): ChangeCurrencyRequest;
}

export namespace ChangeCurrencyRequest {
    export type AsObject = {
        newCurrency: CurrencyModel,
    }
}

export class ChangeCurrencyResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): ChangeCurrencyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeCurrencyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeCurrencyResponse): ChangeCurrencyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeCurrencyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeCurrencyResponse;
    static deserializeBinaryFromReader(message: ChangeCurrencyResponse, reader: jspb.BinaryReader): ChangeCurrencyResponse;
}

export namespace ChangeCurrencyResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class UploadAvatarRequest extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): UploadAvatarRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadAvatarRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadAvatarRequest): UploadAvatarRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadAvatarRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadAvatarRequest;
    static deserializeBinaryFromReader(message: UploadAvatarRequest, reader: jspb.BinaryReader): UploadAvatarRequest;
}

export namespace UploadAvatarRequest {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class UploadAvatarResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): UploadAvatarResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadAvatarResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadAvatarResponse): UploadAvatarResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadAvatarResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadAvatarResponse;
    static deserializeBinaryFromReader(message: UploadAvatarResponse, reader: jspb.BinaryReader): UploadAvatarResponse;
}

export namespace UploadAvatarResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class SendOTPRequest extends jspb.Message { 
    getType(): OTPType;
    setType(value: OTPType): SendOTPRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendOTPRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendOTPRequest): SendOTPRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendOTPRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendOTPRequest;
    static deserializeBinaryFromReader(message: SendOTPRequest, reader: jspb.BinaryReader): SendOTPRequest;
}

export namespace SendOTPRequest {
    export type AsObject = {
        type: OTPType,
    }
}

export class SendOTPResponse extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): SendOTPResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendOTPResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendOTPResponse): SendOTPResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendOTPResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendOTPResponse;
    static deserializeBinaryFromReader(message: SendOTPResponse, reader: jspb.BinaryReader): SendOTPResponse;
}

export namespace SendOTPResponse {
    export type AsObject = {
        result: boolean,
    }
}

export class GetCurrentUserRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCurrentUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCurrentUserRequest): GetCurrentUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCurrentUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCurrentUserRequest;
    static deserializeBinaryFromReader(message: GetCurrentUserRequest, reader: jspb.BinaryReader): GetCurrentUserRequest;
}

export namespace GetCurrentUserRequest {
    export type AsObject = {
    }
}

export class GetCurrentUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): GetCurrentUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCurrentUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCurrentUserResponse): GetCurrentUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCurrentUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCurrentUserResponse;
    static deserializeBinaryFromReader(message: GetCurrentUserResponse, reader: jspb.BinaryReader): GetCurrentUserResponse;
}

export namespace GetCurrentUserResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class AddCoinsToPlayerRequest extends jspb.Message { 
    getGoldCoins(): number;
    setGoldCoins(value: number): AddCoinsToPlayerRequest;
    getSweepCoins(): number;
    setSweepCoins(value: number): AddCoinsToPlayerRequest;
    getUserId(): number;
    setUserId(value: number): AddCoinsToPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCoinsToPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddCoinsToPlayerRequest): AddCoinsToPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCoinsToPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCoinsToPlayerRequest;
    static deserializeBinaryFromReader(message: AddCoinsToPlayerRequest, reader: jspb.BinaryReader): AddCoinsToPlayerRequest;
}

export namespace AddCoinsToPlayerRequest {
    export type AsObject = {
        goldCoins: number,
        sweepCoins: number,
        userId: number,
    }
}

export class AddCoinsToPlayerResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): AddCoinsToPlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCoinsToPlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddCoinsToPlayerResponse): AddCoinsToPlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCoinsToPlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCoinsToPlayerResponse;
    static deserializeBinaryFromReader(message: AddCoinsToPlayerResponse, reader: jspb.BinaryReader): AddCoinsToPlayerResponse;
}

export namespace AddCoinsToPlayerResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class ReduceCoinsToPlayerRequest extends jspb.Message { 
    getGoldCoins(): number;
    setGoldCoins(value: number): ReduceCoinsToPlayerRequest;
    getSweepCoins(): number;
    setSweepCoins(value: number): ReduceCoinsToPlayerRequest;
    getUserId(): number;
    setUserId(value: number): ReduceCoinsToPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReduceCoinsToPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReduceCoinsToPlayerRequest): ReduceCoinsToPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReduceCoinsToPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReduceCoinsToPlayerRequest;
    static deserializeBinaryFromReader(message: ReduceCoinsToPlayerRequest, reader: jspb.BinaryReader): ReduceCoinsToPlayerRequest;
}

export namespace ReduceCoinsToPlayerRequest {
    export type AsObject = {
        goldCoins: number,
        sweepCoins: number,
        userId: number,
    }
}

export class ReduceCoinsToPlayerResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): ReduceCoinsToPlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReduceCoinsToPlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReduceCoinsToPlayerResponse): ReduceCoinsToPlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReduceCoinsToPlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReduceCoinsToPlayerResponse;
    static deserializeBinaryFromReader(message: ReduceCoinsToPlayerResponse, reader: jspb.BinaryReader): ReduceCoinsToPlayerResponse;
}

export namespace ReduceCoinsToPlayerResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export enum RoleModel {
    ROLE_UNDEFINED = 0,
    ROLE_PLAYER = 1,
    ROLE_ADMIN = 2,
}

export enum CurrencyModel {
    CURRENCY_UNDEFINED = 0,
    CURRENCY_GOLD_COINS = 1,
    CURRENCY_SWEEP_COINS = 2,
}

export enum OTPType {
    OTP_TYPE_UNDEFINED = 0,
    OTP_TYPE_EMAIL = 1,
    OTP_TYPE_PHONE_NUMBER = 2,
}
