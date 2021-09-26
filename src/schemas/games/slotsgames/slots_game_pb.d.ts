// package: schema
// file: games/slotsgames/slots_game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as games_slotsgames_asymmetric_reels_slots_game_pb from "../../games/slotsgames/asymmetric_reels_slots_game_pb";
import * as games_slotsgames_accumulate_multiplier_slots_game_pb from "../../games/slotsgames/accumulate_multiplier_slots_game_pb";
import * as games_slotsgames_scatter_prize_pb from "../../games/slotsgames/scatter_prize_pb";
import * as games_slotsgames_symbol_pb from "../../games/slotsgames/symbol_pb";
import * as games_slotsgames_payline_pb from "../../games/slotsgames/payline_pb";

export class SlotsGameModel extends jspb.Message { 
    clearSlotsSymbolList(): void;
    getSlotsSymbolList(): Array<games_slotsgames_symbol_pb.SlotsGameSymbolModel>;
    setSlotsSymbolList(value: Array<games_slotsgames_symbol_pb.SlotsGameSymbolModel>): SlotsGameModel;
    addSlotsSymbol(value?: games_slotsgames_symbol_pb.SlotsGameSymbolModel, index?: number): games_slotsgames_symbol_pb.SlotsGameSymbolModel;
    clearGoldCoinsBetValuesList(): void;
    getGoldCoinsBetValuesList(): Array<number>;
    setGoldCoinsBetValuesList(value: Array<number>): SlotsGameModel;
    addGoldCoinsBetValues(value: number, index?: number): number;
    clearSweepCoinsBetValuesList(): void;
    getSweepCoinsBetValuesList(): Array<number>;
    setSweepCoinsBetValuesList(value: Array<number>): SlotsGameModel;
    addSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): SlotsGameModel;
    addRowCounts(value: number, index?: number): number;
    clearScatterPrizesList(): void;
    getScatterPrizesList(): Array<games_slotsgames_scatter_prize_pb.ScatterPrizeModel>;
    setScatterPrizesList(value: Array<games_slotsgames_scatter_prize_pb.ScatterPrizeModel>): SlotsGameModel;
    addScatterPrizes(value?: games_slotsgames_scatter_prize_pb.ScatterPrizeModel, index?: number): games_slotsgames_scatter_prize_pb.ScatterPrizeModel;

    hasPaylineSlotsGame(): boolean;
    clearPaylineSlotsGame(): void;
    getPaylineSlotsGame(): PaylineSlotsGameModel | undefined;
    setPaylineSlotsGame(value?: PaylineSlotsGameModel): SlotsGameModel;

    hasWaySlotsGame(): boolean;
    clearWaySlotsGame(): void;
    getWaySlotsGame(): WaySlotsGameModel | undefined;
    setWaySlotsGame(value?: WaySlotsGameModel): SlotsGameModel;
    getGoldCoinJackpotPool(): number;
    setGoldCoinJackpotPool(value: number): SlotsGameModel;
    getSweepCoinJackpotPool(): number;
    setSweepCoinJackpotPool(value: number): SlotsGameModel;

    getGameCase(): SlotsGameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: SlotsGameModel): SlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotsGameModel;
    static deserializeBinaryFromReader(message: SlotsGameModel, reader: jspb.BinaryReader): SlotsGameModel;
}

export namespace SlotsGameModel {
    export type AsObject = {
        slotsSymbolList: Array<games_slotsgames_symbol_pb.SlotsGameSymbolModel.AsObject>,
        goldCoinsBetValuesList: Array<number>,
        sweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        scatterPrizesList: Array<games_slotsgames_scatter_prize_pb.ScatterPrizeModel.AsObject>,
        paylineSlotsGame?: PaylineSlotsGameModel.AsObject,
        waySlotsGame?: WaySlotsGameModel.AsObject,
        goldCoinJackpotPool: number,
        sweepCoinJackpotPool: number,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        PAYLINE_SLOTS_GAME = 6,
        WAY_SLOTS_GAME = 7,
    }

}

export class PaylineSlotsGameModel extends jspb.Message { 
    clearPaylinesList(): void;
    getPaylinesList(): Array<games_slotsgames_payline_pb.PaylineModel>;
    setPaylinesList(value: Array<games_slotsgames_payline_pb.PaylineModel>): PaylineSlotsGameModel;
    addPaylines(value?: games_slotsgames_payline_pb.PaylineModel, index?: number): games_slotsgames_payline_pb.PaylineModel;

    hasAsymmetricReelsSlotsGame(): boolean;
    clearAsymmetricReelsSlotsGame(): void;
    getAsymmetricReelsSlotsGame(): games_slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameModel | undefined;
    setAsymmetricReelsSlotsGame(value?: games_slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameModel): PaylineSlotsGameModel;

    getGameCase(): PaylineSlotsGameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaylineSlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: PaylineSlotsGameModel): PaylineSlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaylineSlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaylineSlotsGameModel;
    static deserializeBinaryFromReader(message: PaylineSlotsGameModel, reader: jspb.BinaryReader): PaylineSlotsGameModel;
}

export namespace PaylineSlotsGameModel {
    export type AsObject = {
        paylinesList: Array<games_slotsgames_payline_pb.PaylineModel.AsObject>,
        asymmetricReelsSlotsGame?: games_slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameModel.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        ASYMMETRIC_REELS_SLOTS_GAME = 2,
    }

}

export class WaySlotsGameModel extends jspb.Message { 

    hasAccumulateMultiplierSlotsGame(): boolean;
    clearAccumulateMultiplierSlotsGame(): void;
    getAccumulateMultiplierSlotsGame(): games_slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameModel | undefined;
    setAccumulateMultiplierSlotsGame(value?: games_slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameModel): WaySlotsGameModel;

    getGameCase(): WaySlotsGameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaySlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: WaySlotsGameModel): WaySlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaySlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaySlotsGameModel;
    static deserializeBinaryFromReader(message: WaySlotsGameModel, reader: jspb.BinaryReader): WaySlotsGameModel;
}

export namespace WaySlotsGameModel {
    export type AsObject = {
        accumulateMultiplierSlotsGame?: games_slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameModel.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        ACCUMULATE_MULTIPLIER_SLOTS_GAME = 1,
    }

}
