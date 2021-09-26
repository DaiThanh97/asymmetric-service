// package: schema
// file: games/slotsgames/game_result.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as games_slotsgames_symbol_pb from "../../games/slotsgames/symbol_pb";
import * as games_slotsgames_payline_pb from "../../games/slotsgames/payline_pb";

export class SlotsGameResultModel extends jspb.Message { 
    clearSlotsMatrixList(): void;
    getSlotsMatrixList(): Array<games_slotsgames_symbol_pb.SlotsGameSymbolModel>;
    setSlotsMatrixList(value: Array<games_slotsgames_symbol_pb.SlotsGameSymbolModel>): SlotsGameResultModel;
    addSlotsMatrix(value?: games_slotsgames_symbol_pb.SlotsGameSymbolModel, index?: number): games_slotsgames_symbol_pb.SlotsGameSymbolModel;
    getWonMoney(): number;
    setWonMoney(value: number): SlotsGameResultModel;
    getJackpotWon(): boolean;
    setJackpotWon(value: boolean): SlotsGameResultModel;

    hasPaylineSlotsGameResult(): boolean;
    clearPaylineSlotsGameResult(): void;
    getPaylineSlotsGameResult(): PaylineSlotsGameResultModel | undefined;
    setPaylineSlotsGameResult(value?: PaylineSlotsGameResultModel): SlotsGameResultModel;

    hasWaySlotsGameResult(): boolean;
    clearWaySlotsGameResult(): void;
    getWaySlotsGameResult(): WaySlotsGameResultModel | undefined;
    setWaySlotsGameResult(value?: WaySlotsGameResultModel): SlotsGameResultModel;

    getResultCase(): SlotsGameResultModel.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotsGameResultModel.AsObject;
    static toObject(includeInstance: boolean, msg: SlotsGameResultModel): SlotsGameResultModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotsGameResultModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotsGameResultModel;
    static deserializeBinaryFromReader(message: SlotsGameResultModel, reader: jspb.BinaryReader): SlotsGameResultModel;
}

export namespace SlotsGameResultModel {
    export type AsObject = {
        slotsMatrixList: Array<games_slotsgames_symbol_pb.SlotsGameSymbolModel.AsObject>,
        wonMoney: number,
        jackpotWon: boolean,
        paylineSlotsGameResult?: PaylineSlotsGameResultModel.AsObject,
        waySlotsGameResult?: WaySlotsGameResultModel.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        PAYLINE_SLOTS_GAME_RESULT = 4,
        WAY_SLOTS_GAME_RESULT = 5,
    }

}

export class PaylineSlotsGameResultModel extends jspb.Message { 
    clearWonPaylinesList(): void;
    getWonPaylinesList(): Array<games_slotsgames_payline_pb.PaylineModel>;
    setWonPaylinesList(value: Array<games_slotsgames_payline_pb.PaylineModel>): PaylineSlotsGameResultModel;
    addWonPaylines(value?: games_slotsgames_payline_pb.PaylineModel, index?: number): games_slotsgames_payline_pb.PaylineModel;

    hasAsymmetricReelsSlotsGameResult(): boolean;
    clearAsymmetricReelsSlotsGameResult(): void;
    getAsymmetricReelsSlotsGameResult(): AsymmetricReelsSlotsGameResultModel | undefined;
    setAsymmetricReelsSlotsGameResult(value?: AsymmetricReelsSlotsGameResultModel): PaylineSlotsGameResultModel;

    getResultCase(): PaylineSlotsGameResultModel.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaylineSlotsGameResultModel.AsObject;
    static toObject(includeInstance: boolean, msg: PaylineSlotsGameResultModel): PaylineSlotsGameResultModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaylineSlotsGameResultModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaylineSlotsGameResultModel;
    static deserializeBinaryFromReader(message: PaylineSlotsGameResultModel, reader: jspb.BinaryReader): PaylineSlotsGameResultModel;
}

export namespace PaylineSlotsGameResultModel {
    export type AsObject = {
        wonPaylinesList: Array<games_slotsgames_payline_pb.PaylineModel.AsObject>,
        asymmetricReelsSlotsGameResult?: AsymmetricReelsSlotsGameResultModel.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ASYMMETRIC_REELS_SLOTS_GAME_RESULT = 2,
    }

}

export class WaySlotsGameResultModel extends jspb.Message { 

    hasAccumulateMultiplierSlotsGameResult(): boolean;
    clearAccumulateMultiplierSlotsGameResult(): void;
    getAccumulateMultiplierSlotsGameResult(): AccumulateMultiplierSlotsGameResultModel | undefined;
    setAccumulateMultiplierSlotsGameResult(value?: AccumulateMultiplierSlotsGameResultModel): WaySlotsGameResultModel;

    getResultCase(): WaySlotsGameResultModel.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaySlotsGameResultModel.AsObject;
    static toObject(includeInstance: boolean, msg: WaySlotsGameResultModel): WaySlotsGameResultModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaySlotsGameResultModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaySlotsGameResultModel;
    static deserializeBinaryFromReader(message: WaySlotsGameResultModel, reader: jspb.BinaryReader): WaySlotsGameResultModel;
}

export namespace WaySlotsGameResultModel {
    export type AsObject = {
        accumulateMultiplierSlotsGameResult?: AccumulateMultiplierSlotsGameResultModel.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ACCUMULATE_MULTIPLIER_SLOTS_GAME_RESULT = 1,
    }

}

export class AsymmetricReelsSlotsGameResultModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsymmetricReelsSlotsGameResultModel.AsObject;
    static toObject(includeInstance: boolean, msg: AsymmetricReelsSlotsGameResultModel): AsymmetricReelsSlotsGameResultModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsymmetricReelsSlotsGameResultModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsymmetricReelsSlotsGameResultModel;
    static deserializeBinaryFromReader(message: AsymmetricReelsSlotsGameResultModel, reader: jspb.BinaryReader): AsymmetricReelsSlotsGameResultModel;
}

export namespace AsymmetricReelsSlotsGameResultModel {
    export type AsObject = {
    }
}

export class AccumulateMultiplierSlotsGameResultModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccumulateMultiplierSlotsGameResultModel.AsObject;
    static toObject(includeInstance: boolean, msg: AccumulateMultiplierSlotsGameResultModel): AccumulateMultiplierSlotsGameResultModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccumulateMultiplierSlotsGameResultModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccumulateMultiplierSlotsGameResultModel;
    static deserializeBinaryFromReader(message: AccumulateMultiplierSlotsGameResultModel, reader: jspb.BinaryReader): AccumulateMultiplierSlotsGameResultModel;
}

export namespace AccumulateMultiplierSlotsGameResultModel {
    export type AsObject = {
    }
}
