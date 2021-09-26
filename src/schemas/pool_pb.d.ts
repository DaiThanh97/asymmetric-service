// package: schema
// file: pool.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as user_pb from "./user_pb";

export class PoolModel extends jspb.Message { 
    getId(): number;
    setId(value: number): PoolModel;
    getMinimumPayout(): number;
    setMinimumPayout(value: number): PoolModel;
    getCurrentValue(): number;
    setCurrentValue(value: number): PoolModel;
    getPoolAcquireRatio(): number;
    setPoolAcquireRatio(value: number): PoolModel;
    getCurrency(): user_pb.CurrencyModel;
    setCurrency(value: user_pb.CurrencyModel): PoolModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PoolModel.AsObject;
    static toObject(includeInstance: boolean, msg: PoolModel): PoolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PoolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PoolModel;
    static deserializeBinaryFromReader(message: PoolModel, reader: jspb.BinaryReader): PoolModel;
}

export namespace PoolModel {
    export type AsObject = {
        id: number,
        minimumPayout: number,
        currentValue: number,
        poolAcquireRatio: number,
        currency: user_pb.CurrencyModel,
    }
}

export class CreatePoolRequest extends jspb.Message { 
    getMinimumPayout(): number;
    setMinimumPayout(value: number): CreatePoolRequest;
    getCurrentValue(): number;
    setCurrentValue(value: number): CreatePoolRequest;
    getPoolAcquireRatio(): number;
    setPoolAcquireRatio(value: number): CreatePoolRequest;
    getCurrency(): user_pb.CurrencyModel;
    setCurrency(value: user_pb.CurrencyModel): CreatePoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePoolRequest): CreatePoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePoolRequest;
    static deserializeBinaryFromReader(message: CreatePoolRequest, reader: jspb.BinaryReader): CreatePoolRequest;
}

export namespace CreatePoolRequest {
    export type AsObject = {
        minimumPayout: number,
        currentValue: number,
        poolAcquireRatio: number,
        currency: user_pb.CurrencyModel,
    }
}

export class CreatePoolResponse extends jspb.Message { 

    hasPool(): boolean;
    clearPool(): void;
    getPool(): PoolModel | undefined;
    setPool(value?: PoolModel): CreatePoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePoolResponse): CreatePoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePoolResponse;
    static deserializeBinaryFromReader(message: CreatePoolResponse, reader: jspb.BinaryReader): CreatePoolResponse;
}

export namespace CreatePoolResponse {
    export type AsObject = {
        pool?: PoolModel.AsObject,
    }
}

export class UpdatePoolRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdatePoolRequest;
    getMinimumPayout(): number;
    setMinimumPayout(value: number): UpdatePoolRequest;
    getCurrentValue(): number;
    setCurrentValue(value: number): UpdatePoolRequest;
    getPoolAcquireRatio(): number;
    setPoolAcquireRatio(value: number): UpdatePoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePoolRequest): UpdatePoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePoolRequest;
    static deserializeBinaryFromReader(message: UpdatePoolRequest, reader: jspb.BinaryReader): UpdatePoolRequest;
}

export namespace UpdatePoolRequest {
    export type AsObject = {
        id: number,
        minimumPayout: number,
        currentValue: number,
        poolAcquireRatio: number,
    }
}

export class UpdatePoolResponse extends jspb.Message { 

    hasPool(): boolean;
    clearPool(): void;
    getPool(): PoolModel | undefined;
    setPool(value?: PoolModel): UpdatePoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePoolResponse): UpdatePoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePoolResponse;
    static deserializeBinaryFromReader(message: UpdatePoolResponse, reader: jspb.BinaryReader): UpdatePoolResponse;
}

export namespace UpdatePoolResponse {
    export type AsObject = {
        pool?: PoolModel.AsObject,
    }
}

export class DeletePoolRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeletePoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePoolRequest): DeletePoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePoolRequest;
    static deserializeBinaryFromReader(message: DeletePoolRequest, reader: jspb.BinaryReader): DeletePoolRequest;
}

export namespace DeletePoolRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeletePoolResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeletePoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePoolResponse): DeletePoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePoolResponse;
    static deserializeBinaryFromReader(message: DeletePoolResponse, reader: jspb.BinaryReader): DeletePoolResponse;
}

export namespace DeletePoolResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class AddCoinsToPoolRequest extends jspb.Message { 
    getCoins(): number;
    setCoins(value: number): AddCoinsToPoolRequest;
    getCurrency(): user_pb.CurrencyModel;
    setCurrency(value: user_pb.CurrencyModel): AddCoinsToPoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCoinsToPoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddCoinsToPoolRequest): AddCoinsToPoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCoinsToPoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCoinsToPoolRequest;
    static deserializeBinaryFromReader(message: AddCoinsToPoolRequest, reader: jspb.BinaryReader): AddCoinsToPoolRequest;
}

export namespace AddCoinsToPoolRequest {
    export type AsObject = {
        coins: number,
        currency: user_pb.CurrencyModel,
    }
}

export class ReduceCoinsToPoolRequest extends jspb.Message { 
    getCoins(): number;
    setCoins(value: number): ReduceCoinsToPoolRequest;
    getCurrency(): user_pb.CurrencyModel;
    setCurrency(value: user_pb.CurrencyModel): ReduceCoinsToPoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReduceCoinsToPoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReduceCoinsToPoolRequest): ReduceCoinsToPoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReduceCoinsToPoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReduceCoinsToPoolRequest;
    static deserializeBinaryFromReader(message: ReduceCoinsToPoolRequest, reader: jspb.BinaryReader): ReduceCoinsToPoolRequest;
}

export namespace ReduceCoinsToPoolRequest {
    export type AsObject = {
        coins: number,
        currency: user_pb.CurrencyModel,
    }
}

export class AddCoinsToPoolResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCoinsToPoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddCoinsToPoolResponse): AddCoinsToPoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCoinsToPoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCoinsToPoolResponse;
    static deserializeBinaryFromReader(message: AddCoinsToPoolResponse, reader: jspb.BinaryReader): AddCoinsToPoolResponse;
}

export namespace AddCoinsToPoolResponse {
    export type AsObject = {
    }
}

export class ReduceCoinsToPoolResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReduceCoinsToPoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReduceCoinsToPoolResponse): ReduceCoinsToPoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReduceCoinsToPoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReduceCoinsToPoolResponse;
    static deserializeBinaryFromReader(message: ReduceCoinsToPoolResponse, reader: jspb.BinaryReader): ReduceCoinsToPoolResponse;
}

export namespace ReduceCoinsToPoolResponse {
    export type AsObject = {
    }
}

export class GetAllPoolsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPoolsRequest): GetAllPoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPoolsRequest;
    static deserializeBinaryFromReader(message: GetAllPoolsRequest, reader: jspb.BinaryReader): GetAllPoolsRequest;
}

export namespace GetAllPoolsRequest {
    export type AsObject = {
    }
}

export class GetAllPoolsResponse extends jspb.Message { 
    clearPoolsList(): void;
    getPoolsList(): Array<PoolModel>;
    setPoolsList(value: Array<PoolModel>): GetAllPoolsResponse;
    addPools(value?: PoolModel, index?: number): PoolModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPoolsResponse): GetAllPoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPoolsResponse;
    static deserializeBinaryFromReader(message: GetAllPoolsResponse, reader: jspb.BinaryReader): GetAllPoolsResponse;
}

export namespace GetAllPoolsResponse {
    export type AsObject = {
        poolsList: Array<PoolModel.AsObject>,
    }
}
