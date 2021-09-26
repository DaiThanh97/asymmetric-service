// package: schema
// file: games/slotsgames/symbol.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SlotsGameSymbolModel extends jspb.Message { 
    getId(): string;
    setId(value: string): SlotsGameSymbolModel;
    getName(): string;
    setName(value: string): SlotsGameSymbolModel;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): SlotsGameSymbolModel;
    getChanceRatio(): number;
    setChanceRatio(value: number): SlotsGameSymbolModel;
    getIsWild(): boolean;
    setIsWild(value: boolean): SlotsGameSymbolModel;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): SlotsGameSymbolModel;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): SlotsGameSymbolModel;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): SlotsGameSymbolModel;
    addSymbolValues(value: number, index?: number): number;

    hasAccumulateMultiplierSlotsGameSymbol(): boolean;
    clearAccumulateMultiplierSlotsGameSymbol(): void;
    getAccumulateMultiplierSlotsGameSymbol(): AccumulateMultiplierSlotsGameSymbolModel | undefined;
    setAccumulateMultiplierSlotsGameSymbol(value?: AccumulateMultiplierSlotsGameSymbolModel): SlotsGameSymbolModel;

    hasAsymmetricReelsSlotsGameSymbol(): boolean;
    clearAsymmetricReelsSlotsGameSymbol(): void;
    getAsymmetricReelsSlotsGameSymbol(): AsymmetricReelsSlotsGameSymbolModel | undefined;
    setAsymmetricReelsSlotsGameSymbol(value?: AsymmetricReelsSlotsGameSymbolModel): SlotsGameSymbolModel;

    getSymbolCase(): SlotsGameSymbolModel.SymbolCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotsGameSymbolModel.AsObject;
    static toObject(includeInstance: boolean, msg: SlotsGameSymbolModel): SlotsGameSymbolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotsGameSymbolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotsGameSymbolModel;
    static deserializeBinaryFromReader(message: SlotsGameSymbolModel, reader: jspb.BinaryReader): SlotsGameSymbolModel;
}

export namespace SlotsGameSymbolModel {
    export type AsObject = {
        id: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
        accumulateMultiplierSlotsGameSymbol?: AccumulateMultiplierSlotsGameSymbolModel.AsObject,
        asymmetricReelsSlotsGameSymbol?: AsymmetricReelsSlotsGameSymbolModel.AsObject,
    }

    export enum SymbolCase {
        SYMBOL_NOT_SET = 0,
        ACCUMULATE_MULTIPLIER_SLOTS_GAME_SYMBOL = 9,
        ASYMMETRIC_REELS_SLOTS_GAME_SYMBOL = 10,
    }

}

export class AddAccumulateMultiplierSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): AddAccumulateMultiplierSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAccumulateMultiplierSlotsGameSymbolRequest): AddAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAccumulateMultiplierSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAccumulateMultiplierSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: AddAccumulateMultiplierSlotsGameSymbolRequest, reader: jspb.BinaryReader): AddAccumulateMultiplierSlotsGameSymbolRequest;
}

export namespace AddAccumulateMultiplierSlotsGameSymbolRequest {
    export type AsObject = {
        gameId: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
    }
}

export class UpdateAccumulateMultiplierSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getSymbolId(): string;
    setSymbolId(value: string): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccumulateMultiplierSlotsGameSymbolRequest): UpdateAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccumulateMultiplierSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: UpdateAccumulateMultiplierSlotsGameSymbolRequest, reader: jspb.BinaryReader): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
}

export namespace UpdateAccumulateMultiplierSlotsGameSymbolRequest {
    export type AsObject = {
        gameId: string,
        symbolId: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
    }
}

export class AccumulateMultiplierSlotsGameSymbolModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccumulateMultiplierSlotsGameSymbolModel.AsObject;
    static toObject(includeInstance: boolean, msg: AccumulateMultiplierSlotsGameSymbolModel): AccumulateMultiplierSlotsGameSymbolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccumulateMultiplierSlotsGameSymbolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccumulateMultiplierSlotsGameSymbolModel;
    static deserializeBinaryFromReader(message: AccumulateMultiplierSlotsGameSymbolModel, reader: jspb.BinaryReader): AccumulateMultiplierSlotsGameSymbolModel;
}

export namespace AccumulateMultiplierSlotsGameSymbolModel {
    export type AsObject = {
    }
}

export class AddAsymmetricReelsSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): AddAsymmetricReelsSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): AddAsymmetricReelsSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): AddAsymmetricReelsSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): AddAsymmetricReelsSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): AddAsymmetricReelsSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): AddAsymmetricReelsSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): AddAsymmetricReelsSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): AddAsymmetricReelsSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAsymmetricReelsSlotsGameSymbolRequest): AddAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAsymmetricReelsSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAsymmetricReelsSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: AddAsymmetricReelsSlotsGameSymbolRequest, reader: jspb.BinaryReader): AddAsymmetricReelsSlotsGameSymbolRequest;
}

export namespace AddAsymmetricReelsSlotsGameSymbolRequest {
    export type AsObject = {
        gameId: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
    }
}

export class UpdateAsymmetricReelsSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getSymbolId(): string;
    setSymbolId(value: string): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAsymmetricReelsSlotsGameSymbolRequest): UpdateAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAsymmetricReelsSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: UpdateAsymmetricReelsSlotsGameSymbolRequest, reader: jspb.BinaryReader): UpdateAsymmetricReelsSlotsGameSymbolRequest;
}

export namespace UpdateAsymmetricReelsSlotsGameSymbolRequest {
    export type AsObject = {
        gameId: string,
        symbolId: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
    }
}

export class AsymmetricReelsSlotsGameSymbolModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsymmetricReelsSlotsGameSymbolModel.AsObject;
    static toObject(includeInstance: boolean, msg: AsymmetricReelsSlotsGameSymbolModel): AsymmetricReelsSlotsGameSymbolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsymmetricReelsSlotsGameSymbolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsymmetricReelsSlotsGameSymbolModel;
    static deserializeBinaryFromReader(message: AsymmetricReelsSlotsGameSymbolModel, reader: jspb.BinaryReader): AsymmetricReelsSlotsGameSymbolModel;
}

export namespace AsymmetricReelsSlotsGameSymbolModel {
    export type AsObject = {
    }
}
