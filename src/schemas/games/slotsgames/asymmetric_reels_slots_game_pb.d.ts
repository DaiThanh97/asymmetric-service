// package: schema
// file: games/slotsgames/asymmetric_reels_slots_game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AsymmetricReelsSlotsGameModel extends jspb.Message { 
    getAsymmetricchance(): number;
    setAsymmetricchance(value: number): AsymmetricReelsSlotsGameModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsymmetricReelsSlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: AsymmetricReelsSlotsGameModel): AsymmetricReelsSlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsymmetricReelsSlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsymmetricReelsSlotsGameModel;
    static deserializeBinaryFromReader(message: AsymmetricReelsSlotsGameModel, reader: jspb.BinaryReader): AsymmetricReelsSlotsGameModel;
}

export namespace AsymmetricReelsSlotsGameModel {
    export type AsObject = {
        asymmetricchance: number,
    }
}

export class CreateAsymmetricReelsSlotsGameRequest extends jspb.Message { 
    getGameName(): string;
    setGameName(value: string): CreateAsymmetricReelsSlotsGameRequest;
    clearAvailableGoldCoinsBetValuesList(): void;
    getAvailableGoldCoinsBetValuesList(): Array<number>;
    setAvailableGoldCoinsBetValuesList(value: Array<number>): CreateAsymmetricReelsSlotsGameRequest;
    addAvailableGoldCoinsBetValues(value: number, index?: number): number;
    clearAvailableSweepCoinsBetValuesList(): void;
    getAvailableSweepCoinsBetValuesList(): Array<number>;
    setAvailableSweepCoinsBetValuesList(value: Array<number>): CreateAsymmetricReelsSlotsGameRequest;
    addAvailableSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): CreateAsymmetricReelsSlotsGameRequest;
    addRowCounts(value: number, index?: number): number;
    getAsymmetricChance(): number;
    setAsymmetricChance(value: number): CreateAsymmetricReelsSlotsGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAsymmetricReelsSlotsGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAsymmetricReelsSlotsGameRequest): CreateAsymmetricReelsSlotsGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAsymmetricReelsSlotsGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAsymmetricReelsSlotsGameRequest;
    static deserializeBinaryFromReader(message: CreateAsymmetricReelsSlotsGameRequest, reader: jspb.BinaryReader): CreateAsymmetricReelsSlotsGameRequest;
}

export namespace CreateAsymmetricReelsSlotsGameRequest {
    export type AsObject = {
        gameName: string,
        availableGoldCoinsBetValuesList: Array<number>,
        availableSweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        asymmetricChance: number,
    }
}

export class UpdateAsymmetricReelsSlotsGameRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAsymmetricReelsSlotsGameRequest;
    getGameName(): string;
    setGameName(value: string): UpdateAsymmetricReelsSlotsGameRequest;
    clearAvailableGoldCoinsBetValuesList(): void;
    getAvailableGoldCoinsBetValuesList(): Array<number>;
    setAvailableGoldCoinsBetValuesList(value: Array<number>): UpdateAsymmetricReelsSlotsGameRequest;
    addAvailableGoldCoinsBetValues(value: number, index?: number): number;
    clearAvailableSweepCoinsBetValuesList(): void;
    getAvailableSweepCoinsBetValuesList(): Array<number>;
    setAvailableSweepCoinsBetValuesList(value: Array<number>): UpdateAsymmetricReelsSlotsGameRequest;
    addAvailableSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): UpdateAsymmetricReelsSlotsGameRequest;
    addRowCounts(value: number, index?: number): number;
    getAsymmetricChance(): number;
    setAsymmetricChance(value: number): UpdateAsymmetricReelsSlotsGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAsymmetricReelsSlotsGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAsymmetricReelsSlotsGameRequest): UpdateAsymmetricReelsSlotsGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAsymmetricReelsSlotsGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAsymmetricReelsSlotsGameRequest;
    static deserializeBinaryFromReader(message: UpdateAsymmetricReelsSlotsGameRequest, reader: jspb.BinaryReader): UpdateAsymmetricReelsSlotsGameRequest;
}

export namespace UpdateAsymmetricReelsSlotsGameRequest {
    export type AsObject = {
        gameId: string,
        gameName: string,
        availableGoldCoinsBetValuesList: Array<number>,
        availableSweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        asymmetricChance: number,
    }
}
