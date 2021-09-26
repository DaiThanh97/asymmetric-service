// package: schema
// file: games/slotsgames/game_progress.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as games_slotsgames_symbol_pb from "../../games/slotsgames/symbol_pb";
import * as games_slotsgames_payline_pb from "../../games/slotsgames/payline_pb";

export class SlotsGameProgressModel extends jspb.Message { 
    getCurrentBet(): number;
    setCurrentBet(value: number): SlotsGameProgressModel;
    getFreeSpinsAvailable(): number;
    setFreeSpinsAvailable(value: number): SlotsGameProgressModel;
    getFreeSpinsPrizeMultiplier(): number;
    setFreeSpinsPrizeMultiplier(value: number): SlotsGameProgressModel;

    hasPaylineSlotsGameProgress(): boolean;
    clearPaylineSlotsGameProgress(): void;
    getPaylineSlotsGameProgress(): PaylineSlotsGameProgressModel | undefined;
    setPaylineSlotsGameProgress(value?: PaylineSlotsGameProgressModel): SlotsGameProgressModel;

    hasWaySlotsGameProgress(): boolean;
    clearWaySlotsGameProgress(): void;
    getWaySlotsGameProgress(): WaySlotsGameProgressModel | undefined;
    setWaySlotsGameProgress(value?: WaySlotsGameProgressModel): SlotsGameProgressModel;

    getProgressCase(): SlotsGameProgressModel.ProgressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotsGameProgressModel.AsObject;
    static toObject(includeInstance: boolean, msg: SlotsGameProgressModel): SlotsGameProgressModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotsGameProgressModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotsGameProgressModel;
    static deserializeBinaryFromReader(message: SlotsGameProgressModel, reader: jspb.BinaryReader): SlotsGameProgressModel;
}

export namespace SlotsGameProgressModel {
    export type AsObject = {
        currentBet: number,
        freeSpinsAvailable: number,
        freeSpinsPrizeMultiplier: number,
        paylineSlotsGameProgress?: PaylineSlotsGameProgressModel.AsObject,
        waySlotsGameProgress?: WaySlotsGameProgressModel.AsObject,
    }

    export enum ProgressCase {
        PROGRESS_NOT_SET = 0,
        PAYLINE_SLOTS_GAME_PROGRESS = 4,
        WAY_SLOTS_GAME_PROGRESS = 5,
    }

}

export class PaylineSlotsGameProgressModel extends jspb.Message { 
    clearBettingPaylinesList(): void;
    getBettingPaylinesList(): Array<games_slotsgames_payline_pb.PaylineModel>;
    setBettingPaylinesList(value: Array<games_slotsgames_payline_pb.PaylineModel>): PaylineSlotsGameProgressModel;
    addBettingPaylines(value?: games_slotsgames_payline_pb.PaylineModel, index?: number): games_slotsgames_payline_pb.PaylineModel;

    hasAsymmetricReelsSlotsGameProgress(): boolean;
    clearAsymmetricReelsSlotsGameProgress(): void;
    getAsymmetricReelsSlotsGameProgress(): AsymmetricReelsSlotsGameProgressModel | undefined;
    setAsymmetricReelsSlotsGameProgress(value?: AsymmetricReelsSlotsGameProgressModel): PaylineSlotsGameProgressModel;

    getProgressCase(): PaylineSlotsGameProgressModel.ProgressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaylineSlotsGameProgressModel.AsObject;
    static toObject(includeInstance: boolean, msg: PaylineSlotsGameProgressModel): PaylineSlotsGameProgressModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaylineSlotsGameProgressModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaylineSlotsGameProgressModel;
    static deserializeBinaryFromReader(message: PaylineSlotsGameProgressModel, reader: jspb.BinaryReader): PaylineSlotsGameProgressModel;
}

export namespace PaylineSlotsGameProgressModel {
    export type AsObject = {
        bettingPaylinesList: Array<games_slotsgames_payline_pb.PaylineModel.AsObject>,
        asymmetricReelsSlotsGameProgress?: AsymmetricReelsSlotsGameProgressModel.AsObject,
    }

    export enum ProgressCase {
        PROGRESS_NOT_SET = 0,
        ASYMMETRIC_REELS_SLOTS_GAME_PROGRESS = 2,
    }

}

export class WaySlotsGameProgressModel extends jspb.Message { 

    hasAccumulateMultiplierSlotsGameProgress(): boolean;
    clearAccumulateMultiplierSlotsGameProgress(): void;
    getAccumulateMultiplierSlotsGameProgress(): AccumulateMultiplierSlotsGameProgressModel | undefined;
    setAccumulateMultiplierSlotsGameProgress(value?: AccumulateMultiplierSlotsGameProgressModel): WaySlotsGameProgressModel;

    getProgressCase(): WaySlotsGameProgressModel.ProgressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaySlotsGameProgressModel.AsObject;
    static toObject(includeInstance: boolean, msg: WaySlotsGameProgressModel): WaySlotsGameProgressModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaySlotsGameProgressModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaySlotsGameProgressModel;
    static deserializeBinaryFromReader(message: WaySlotsGameProgressModel, reader: jspb.BinaryReader): WaySlotsGameProgressModel;
}

export namespace WaySlotsGameProgressModel {
    export type AsObject = {
        accumulateMultiplierSlotsGameProgress?: AccumulateMultiplierSlotsGameProgressModel.AsObject,
    }

    export enum ProgressCase {
        PROGRESS_NOT_SET = 0,
        ACCUMULATE_MULTIPLIER_SLOTS_GAME_PROGRESS = 1,
    }

}

export class AsymmetricReelsSlotsGameProgressModel extends jspb.Message { 

    hasFirstColumnSymbolId(): boolean;
    clearFirstColumnSymbolId(): void;
    getFirstColumnSymbolId(): games_slotsgames_symbol_pb.SlotsGameSymbolModel | undefined;
    setFirstColumnSymbolId(value?: games_slotsgames_symbol_pb.SlotsGameSymbolModel): AsymmetricReelsSlotsGameProgressModel;

    hasLastColumnSymbolId(): boolean;
    clearLastColumnSymbolId(): void;
    getLastColumnSymbolId(): games_slotsgames_symbol_pb.SlotsGameSymbolModel | undefined;
    setLastColumnSymbolId(value?: games_slotsgames_symbol_pb.SlotsGameSymbolModel): AsymmetricReelsSlotsGameProgressModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsymmetricReelsSlotsGameProgressModel.AsObject;
    static toObject(includeInstance: boolean, msg: AsymmetricReelsSlotsGameProgressModel): AsymmetricReelsSlotsGameProgressModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsymmetricReelsSlotsGameProgressModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsymmetricReelsSlotsGameProgressModel;
    static deserializeBinaryFromReader(message: AsymmetricReelsSlotsGameProgressModel, reader: jspb.BinaryReader): AsymmetricReelsSlotsGameProgressModel;
}

export namespace AsymmetricReelsSlotsGameProgressModel {
    export type AsObject = {
        firstColumnSymbolId?: games_slotsgames_symbol_pb.SlotsGameSymbolModel.AsObject,
        lastColumnSymbolId?: games_slotsgames_symbol_pb.SlotsGameSymbolModel.AsObject,
    }
}

export class AccumulateMultiplierSlotsGameProgressModel extends jspb.Message { 
    getAccumulateMultiplier(): number;
    setAccumulateMultiplier(value: number): AccumulateMultiplierSlotsGameProgressModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccumulateMultiplierSlotsGameProgressModel.AsObject;
    static toObject(includeInstance: boolean, msg: AccumulateMultiplierSlotsGameProgressModel): AccumulateMultiplierSlotsGameProgressModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccumulateMultiplierSlotsGameProgressModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccumulateMultiplierSlotsGameProgressModel;
    static deserializeBinaryFromReader(message: AccumulateMultiplierSlotsGameProgressModel, reader: jspb.BinaryReader): AccumulateMultiplierSlotsGameProgressModel;
}

export namespace AccumulateMultiplierSlotsGameProgressModel {
    export type AsObject = {
        accumulateMultiplier: number,
    }
}
