// package: schema
// file: games/slotsgames/payline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PaylineModel extends jspb.Message { 
    getId(): string;
    setId(value: string): PaylineModel;
    clearRowIndexList(): void;
    getRowIndexList(): Array<number>;
    setRowIndexList(value: Array<number>): PaylineModel;
    addRowIndex(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaylineModel.AsObject;
    static toObject(includeInstance: boolean, msg: PaylineModel): PaylineModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaylineModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaylineModel;
    static deserializeBinaryFromReader(message: PaylineModel, reader: jspb.BinaryReader): PaylineModel;
}

export namespace PaylineModel {
    export type AsObject = {
        id: string,
        rowIndexList: Array<number>,
    }
}

export class CreatePaylineRequest extends jspb.Message { 
    clearRowIndexList(): void;
    getRowIndexList(): Array<number>;
    setRowIndexList(value: Array<number>): CreatePaylineRequest;
    addRowIndex(value: number, index?: number): number;
    getGameId(): string;
    setGameId(value: string): CreatePaylineRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePaylineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePaylineRequest): CreatePaylineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePaylineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePaylineRequest;
    static deserializeBinaryFromReader(message: CreatePaylineRequest, reader: jspb.BinaryReader): CreatePaylineRequest;
}

export namespace CreatePaylineRequest {
    export type AsObject = {
        rowIndexList: Array<number>,
        gameId: string,
    }
}

export class CreatePaylineResponse extends jspb.Message { 

    hasPayline(): boolean;
    clearPayline(): void;
    getPayline(): PaylineModel | undefined;
    setPayline(value?: PaylineModel): CreatePaylineResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePaylineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePaylineResponse): CreatePaylineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePaylineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePaylineResponse;
    static deserializeBinaryFromReader(message: CreatePaylineResponse, reader: jspb.BinaryReader): CreatePaylineResponse;
}

export namespace CreatePaylineResponse {
    export type AsObject = {
        payline?: PaylineModel.AsObject,
    }
}

export class RemovePaylineRequest extends jspb.Message { 
    getPaylineId(): string;
    setPaylineId(value: string): RemovePaylineRequest;
    getGameId(): string;
    setGameId(value: string): RemovePaylineRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePaylineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePaylineRequest): RemovePaylineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePaylineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePaylineRequest;
    static deserializeBinaryFromReader(message: RemovePaylineRequest, reader: jspb.BinaryReader): RemovePaylineRequest;
}

export namespace RemovePaylineRequest {
    export type AsObject = {
        paylineId: string,
        gameId: string,
    }
}

export class RemovePaylineResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePaylineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePaylineResponse): RemovePaylineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePaylineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePaylineResponse;
    static deserializeBinaryFromReader(message: RemovePaylineResponse, reader: jspb.BinaryReader): RemovePaylineResponse;
}

export namespace RemovePaylineResponse {
    export type AsObject = {
    }
}
