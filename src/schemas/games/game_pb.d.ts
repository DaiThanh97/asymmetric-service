// package: schema
// file: games/game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as games_slotsgames_asymmetric_reels_slots_game_pb from "../games/slotsgames/asymmetric_reels_slots_game_pb";
import * as games_slotsgames_accumulate_multiplier_slots_game_pb from "../games/slotsgames/accumulate_multiplier_slots_game_pb";
import * as games_slotsgames_slots_game_pb from "../games/slotsgames/slots_game_pb";
import * as games_slotsgames_symbol_pb from "../games/slotsgames/symbol_pb";
import * as games_slotsgames_game_progress_pb from "../games/slotsgames/game_progress_pb";
import * as games_slotsgames_game_result_pb from "../games/slotsgames/game_result_pb";
import * as games_slotsgames_payline_pb from "../games/slotsgames/payline_pb";
import * as games_slotsgames_scatter_prize_pb from "../games/slotsgames/scatter_prize_pb";
import * as user_pb from "../user_pb";

export class GameModel extends jspb.Message { 
    getId(): string;
    setId(value: string): GameModel;
    getName(): string;
    setName(value: string): GameModel;

    hasSlotsGame(): boolean;
    clearSlotsGame(): void;
    getSlotsGame(): games_slotsgames_slots_game_pb.SlotsGameModel | undefined;
    setSlotsGame(value?: games_slotsgames_slots_game_pb.SlotsGameModel): GameModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameModel;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameModel;

    getGameCase(): GameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameModel.AsObject;
    static toObject(includeInstance: boolean, msg: GameModel): GameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameModel;
    static deserializeBinaryFromReader(message: GameModel, reader: jspb.BinaryReader): GameModel;
}

export namespace GameModel {
    export type AsObject = {
        id: string,
        name: string,
        slotsGame?: games_slotsgames_slots_game_pb.SlotsGameModel.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        SLOTS_GAME = 3,
    }

}

export class GameProgressModel extends jspb.Message { 
    getId(): string;
    setId(value: string): GameProgressModel;
    getGameId(): string;
    setGameId(value: string): GameProgressModel;
    getPlayerId(): string;
    setPlayerId(value: string): GameProgressModel;
    getCurrency(): user_pb.CurrencyModel;
    setCurrency(value: user_pb.CurrencyModel): GameProgressModel;

    hasSlotsGameProgress(): boolean;
    clearSlotsGameProgress(): void;
    getSlotsGameProgress(): games_slotsgames_game_progress_pb.SlotsGameProgressModel | undefined;
    setSlotsGameProgress(value?: games_slotsgames_game_progress_pb.SlotsGameProgressModel): GameProgressModel;

    getProgressCase(): GameProgressModel.ProgressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameProgressModel.AsObject;
    static toObject(includeInstance: boolean, msg: GameProgressModel): GameProgressModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameProgressModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameProgressModel;
    static deserializeBinaryFromReader(message: GameProgressModel, reader: jspb.BinaryReader): GameProgressModel;
}

export namespace GameProgressModel {
    export type AsObject = {
        id: string,
        gameId: string,
        playerId: string,
        currency: user_pb.CurrencyModel,
        slotsGameProgress?: games_slotsgames_game_progress_pb.SlotsGameProgressModel.AsObject,
    }

    export enum ProgressCase {
        PROGRESS_NOT_SET = 0,
        SLOTS_GAME_PROGRESS = 5,
    }

}

export class GameVersionModel extends jspb.Message { 
    getId(): number;
    setId(value: number): GameVersionModel;
    getVersionName(): string;
    setVersionName(value: string): GameVersionModel;
    getAndroidUrl(): string;
    setAndroidUrl(value: string): GameVersionModel;
    getAndroidBannerUrl(): string;
    setAndroidBannerUrl(value: string): GameVersionModel;
    getIosUrl(): string;
    setIosUrl(value: string): GameVersionModel;
    getIosBannerUrl(): string;
    setIosBannerUrl(value: string): GameVersionModel;
    getWindowsUrl(): string;
    setWindowsUrl(value: string): GameVersionModel;
    getWindowsBannerUrl(): string;
    setWindowsBannerUrl(value: string): GameVersionModel;
    getWebUrl(): string;
    setWebUrl(value: string): GameVersionModel;
    getWebBannerUrl(): string;
    setWebBannerUrl(value: string): GameVersionModel;
    getGameId(): string;
    setGameId(value: string): GameVersionModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameVersionModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameVersionModel;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameVersionModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameVersionModel.AsObject;
    static toObject(includeInstance: boolean, msg: GameVersionModel): GameVersionModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameVersionModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameVersionModel;
    static deserializeBinaryFromReader(message: GameVersionModel, reader: jspb.BinaryReader): GameVersionModel;
}

export namespace GameVersionModel {
    export type AsObject = {
        id: number,
        versionName: string,
        androidUrl: string,
        androidBannerUrl: string,
        iosUrl: string,
        iosBannerUrl: string,
        windowsUrl: string,
        windowsBannerUrl: string,
        webUrl: string,
        webBannerUrl: string,
        gameId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateGameResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): CreateGameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameResponse): CreateGameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameResponse;
    static deserializeBinaryFromReader(message: CreateGameResponse, reader: jspb.BinaryReader): CreateGameResponse;
}

export namespace CreateGameResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class UpdateGameResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): UpdateGameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGameResponse): UpdateGameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGameResponse;
    static deserializeBinaryFromReader(message: UpdateGameResponse, reader: jspb.BinaryReader): UpdateGameResponse;
}

export namespace UpdateGameResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class AddSlotsGameSymbolResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): AddSlotsGameSymbolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSlotsGameSymbolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddSlotsGameSymbolResponse): AddSlotsGameSymbolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSlotsGameSymbolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSlotsGameSymbolResponse;
    static deserializeBinaryFromReader(message: AddSlotsGameSymbolResponse, reader: jspb.BinaryReader): AddSlotsGameSymbolResponse;
}

export namespace AddSlotsGameSymbolResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class UpdateSlotsGameSymbolResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): UpdateSlotsGameSymbolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSlotsGameSymbolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSlotsGameSymbolResponse): UpdateSlotsGameSymbolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSlotsGameSymbolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSlotsGameSymbolResponse;
    static deserializeBinaryFromReader(message: UpdateSlotsGameSymbolResponse, reader: jspb.BinaryReader): UpdateSlotsGameSymbolResponse;
}

export namespace UpdateSlotsGameSymbolResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class UploadGameVersionRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UploadGameVersionRequest;
    getVersionName(): string;
    setVersionName(value: string): UploadGameVersionRequest;
    getAndroidFile(): Uint8Array | string;
    getAndroidFile_asU8(): Uint8Array;
    getAndroidFile_asB64(): string;
    setAndroidFile(value: Uint8Array | string): UploadGameVersionRequest;
    getAndroidBannerFile(): Uint8Array | string;
    getAndroidBannerFile_asU8(): Uint8Array;
    getAndroidBannerFile_asB64(): string;
    setAndroidBannerFile(value: Uint8Array | string): UploadGameVersionRequest;
    getIosFile(): Uint8Array | string;
    getIosFile_asU8(): Uint8Array;
    getIosFile_asB64(): string;
    setIosFile(value: Uint8Array | string): UploadGameVersionRequest;
    getIosBannerFile(): Uint8Array | string;
    getIosBannerFile_asU8(): Uint8Array;
    getIosBannerFile_asB64(): string;
    setIosBannerFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWindowsFile(): Uint8Array | string;
    getWindowsFile_asU8(): Uint8Array;
    getWindowsFile_asB64(): string;
    setWindowsFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWindowsBannerFile(): Uint8Array | string;
    getWindowsBannerFile_asU8(): Uint8Array;
    getWindowsBannerFile_asB64(): string;
    setWindowsBannerFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWebFile(): Uint8Array | string;
    getWebFile_asU8(): Uint8Array;
    getWebFile_asB64(): string;
    setWebFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWebBannerFile(): Uint8Array | string;
    getWebBannerFile_asU8(): Uint8Array;
    getWebBannerFile_asB64(): string;
    setWebBannerFile(value: Uint8Array | string): UploadGameVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGameVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGameVersionRequest): UploadGameVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGameVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGameVersionRequest;
    static deserializeBinaryFromReader(message: UploadGameVersionRequest, reader: jspb.BinaryReader): UploadGameVersionRequest;
}

export namespace UploadGameVersionRequest {
    export type AsObject = {
        gameId: string,
        versionName: string,
        androidFile: Uint8Array | string,
        androidBannerFile: Uint8Array | string,
        iosFile: Uint8Array | string,
        iosBannerFile: Uint8Array | string,
        windowsFile: Uint8Array | string,
        windowsBannerFile: Uint8Array | string,
        webFile: Uint8Array | string,
        webBannerFile: Uint8Array | string,
    }
}

export class UploadGameVersionResponse extends jspb.Message { 

    hasGameVersion(): boolean;
    clearGameVersion(): void;
    getGameVersion(): GameVersionModel | undefined;
    setGameVersion(value?: GameVersionModel): UploadGameVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGameVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGameVersionResponse): UploadGameVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGameVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGameVersionResponse;
    static deserializeBinaryFromReader(message: UploadGameVersionResponse, reader: jspb.BinaryReader): UploadGameVersionResponse;
}

export namespace UploadGameVersionResponse {
    export type AsObject = {
        gameVersion?: GameVersionModel.AsObject,
    }
}

export class GetGameRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): GetGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameRequest): GetGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameRequest;
    static deserializeBinaryFromReader(message: GetGameRequest, reader: jspb.BinaryReader): GetGameRequest;
}

export namespace GetGameRequest {
    export type AsObject = {
        gameId: string,
    }
}

export class GetGameResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): GetGameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameResponse): GetGameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameResponse;
    static deserializeBinaryFromReader(message: GetGameResponse, reader: jspb.BinaryReader): GetGameResponse;
}

export namespace GetGameResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class GetGameProgressRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): GetGameProgressRequest;
    getCurrency(): user_pb.CurrencyModel;
    setCurrency(value: user_pb.CurrencyModel): GetGameProgressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameProgressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameProgressRequest): GetGameProgressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameProgressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameProgressRequest;
    static deserializeBinaryFromReader(message: GetGameProgressRequest, reader: jspb.BinaryReader): GetGameProgressRequest;
}

export namespace GetGameProgressRequest {
    export type AsObject = {
        gameId: string,
        currency: user_pb.CurrencyModel,
    }
}

export class GetGameProgressResponse extends jspb.Message { 

    hasGameProgress(): boolean;
    clearGameProgress(): void;
    getGameProgress(): GameProgressModel | undefined;
    setGameProgress(value?: GameProgressModel): GetGameProgressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameProgressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameProgressResponse): GetGameProgressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameProgressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameProgressResponse;
    static deserializeBinaryFromReader(message: GetGameProgressResponse, reader: jspb.BinaryReader): GetGameProgressResponse;
}

export namespace GetGameProgressResponse {
    export type AsObject = {
        gameProgress?: GameProgressModel.AsObject,
    }
}

export class GetAllGameIdsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllGameIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllGameIdsRequest): GetAllGameIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllGameIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllGameIdsRequest;
    static deserializeBinaryFromReader(message: GetAllGameIdsRequest, reader: jspb.BinaryReader): GetAllGameIdsRequest;
}

export namespace GetAllGameIdsRequest {
    export type AsObject = {
    }
}

export class GetAllGameIdsResponse extends jspb.Message { 
    clearGameIdList(): void;
    getGameIdList(): Array<string>;
    setGameIdList(value: Array<string>): GetAllGameIdsResponse;
    addGameId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllGameIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllGameIdsResponse): GetAllGameIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllGameIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllGameIdsResponse;
    static deserializeBinaryFromReader(message: GetAllGameIdsResponse, reader: jspb.BinaryReader): GetAllGameIdsResponse;
}

export namespace GetAllGameIdsResponse {
    export type AsObject = {
        gameIdList: Array<string>,
    }
}

export class SpinRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): SpinRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpinRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpinRequest): SpinRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpinRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpinRequest;
    static deserializeBinaryFromReader(message: SpinRequest, reader: jspb.BinaryReader): SpinRequest;
}

export namespace SpinRequest {
    export type AsObject = {
        gameId: string,
    }
}

export class SpinResponse extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): games_slotsgames_game_result_pb.SlotsGameResultModel | undefined;
    setResult(value?: games_slotsgames_game_result_pb.SlotsGameResultModel): SpinResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpinResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpinResponse): SpinResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpinResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpinResponse;
    static deserializeBinaryFromReader(message: SpinResponse, reader: jspb.BinaryReader): SpinResponse;
}

export namespace SpinResponse {
    export type AsObject = {
        result?: games_slotsgames_game_result_pb.SlotsGameResultModel.AsObject,
    }
}

export class SetBetRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): SetBetRequest;
    getBetValue(): number;
    setBetValue(value: number): SetBetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetBetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetBetRequest): SetBetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetBetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetBetRequest;
    static deserializeBinaryFromReader(message: SetBetRequest, reader: jspb.BinaryReader): SetBetRequest;
}

export namespace SetBetRequest {
    export type AsObject = {
        gameId: string,
        betValue: number,
    }
}

export class SetBetResponse extends jspb.Message { 

    hasGameProgress(): boolean;
    clearGameProgress(): void;
    getGameProgress(): GameProgressModel | undefined;
    setGameProgress(value?: GameProgressModel): SetBetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetBetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetBetResponse): SetBetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetBetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetBetResponse;
    static deserializeBinaryFromReader(message: SetBetResponse, reader: jspb.BinaryReader): SetBetResponse;
}

export namespace SetBetResponse {
    export type AsObject = {
        gameProgress?: GameProgressModel.AsObject,
    }
}

export class SelectPaylineRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): SelectPaylineRequest;
    clearPaylineIdsList(): void;
    getPaylineIdsList(): Array<string>;
    setPaylineIdsList(value: Array<string>): SelectPaylineRequest;
    addPaylineIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectPaylineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SelectPaylineRequest): SelectPaylineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectPaylineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectPaylineRequest;
    static deserializeBinaryFromReader(message: SelectPaylineRequest, reader: jspb.BinaryReader): SelectPaylineRequest;
}

export namespace SelectPaylineRequest {
    export type AsObject = {
        gameId: string,
        paylineIdsList: Array<string>,
    }
}

export class SelectPaylineResponse extends jspb.Message { 

    hasGameProgress(): boolean;
    clearGameProgress(): void;
    getGameProgress(): GameProgressModel | undefined;
    setGameProgress(value?: GameProgressModel): SelectPaylineResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectPaylineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SelectPaylineResponse): SelectPaylineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectPaylineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectPaylineResponse;
    static deserializeBinaryFromReader(message: SelectPaylineResponse, reader: jspb.BinaryReader): SelectPaylineResponse;
}

export namespace SelectPaylineResponse {
    export type AsObject = {
        gameProgress?: GameProgressModel.AsObject,
    }
}
