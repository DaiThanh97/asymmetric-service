// package: schema
// file: settings.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SettingsModel extends jspb.Message { 
    getUsdtogoldcoins(): number;
    setUsdtogoldcoins(value: number): SettingsModel;
    getUsdtosweepcoins(): number;
    setUsdtosweepcoins(value: number): SettingsModel;
    getDailyrewardexpiredays(): number;
    setDailyrewardexpiredays(value: number): SettingsModel;
    getDailyrewardvalueinusd(): number;
    setDailyrewardvalueinusd(value: number): SettingsModel;
    getSignuprewardvalueinusd(): number;
    setSignuprewardvalueinusd(value: number): SettingsModel;
    getGoldcoinholdrate(): number;
    setGoldcoinholdrate(value: number): SettingsModel;
    getSweepcoinholdrate(): number;
    setSweepcoinholdrate(value: number): SettingsModel;
    getGoldcoinjackpotcontribution(): number;
    setGoldcoinjackpotcontribution(value: number): SettingsModel;
    getSweepcoinjackpotcontribution(): number;
    setSweepcoinjackpotcontribution(value: number): SettingsModel;
    getGoldcoinminimumjackpot(): number;
    setGoldcoinminimumjackpot(value: number): SettingsModel;
    getSweepcoinminimumjackpot(): number;
    setSweepcoinminimumjackpot(value: number): SettingsModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettingsModel.AsObject;
    static toObject(includeInstance: boolean, msg: SettingsModel): SettingsModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SettingsModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettingsModel;
    static deserializeBinaryFromReader(message: SettingsModel, reader: jspb.BinaryReader): SettingsModel;
}

export namespace SettingsModel {
    export type AsObject = {
        usdtogoldcoins: number,
        usdtosweepcoins: number,
        dailyrewardexpiredays: number,
        dailyrewardvalueinusd: number,
        signuprewardvalueinusd: number,
        goldcoinholdrate: number,
        sweepcoinholdrate: number,
        goldcoinjackpotcontribution: number,
        sweepcoinjackpotcontribution: number,
        goldcoinminimumjackpot: number,
        sweepcoinminimumjackpot: number,
    }
}

export class GetSettingsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSettingsRequest): GetSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSettingsRequest;
    static deserializeBinaryFromReader(message: GetSettingsRequest, reader: jspb.BinaryReader): GetSettingsRequest;
}

export namespace GetSettingsRequest {
    export type AsObject = {
    }
}

export class GetSettingsResponse extends jspb.Message { 

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): SettingsModel | undefined;
    setSettings(value?: SettingsModel): GetSettingsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSettingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSettingsResponse): GetSettingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSettingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSettingsResponse;
    static deserializeBinaryFromReader(message: GetSettingsResponse, reader: jspb.BinaryReader): GetSettingsResponse;
}

export namespace GetSettingsResponse {
    export type AsObject = {
        settings?: SettingsModel.AsObject,
    }
}

export class UpdateSettingsRequest extends jspb.Message { 

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): SettingsModel | undefined;
    setSettings(value?: SettingsModel): UpdateSettingsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSettingsRequest): UpdateSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSettingsRequest;
    static deserializeBinaryFromReader(message: UpdateSettingsRequest, reader: jspb.BinaryReader): UpdateSettingsRequest;
}

export namespace UpdateSettingsRequest {
    export type AsObject = {
        settings?: SettingsModel.AsObject,
    }
}

export class UpdateSettingsResponse extends jspb.Message { 

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): SettingsModel | undefined;
    setSettings(value?: SettingsModel): UpdateSettingsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSettingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSettingsResponse): UpdateSettingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSettingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSettingsResponse;
    static deserializeBinaryFromReader(message: UpdateSettingsResponse, reader: jspb.BinaryReader): UpdateSettingsResponse;
}

export namespace UpdateSettingsResponse {
    export type AsObject = {
        settings?: SettingsModel.AsObject,
    }
}
