// package: schema
// file: payment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TransactionModel extends jspb.Message { 
    getId(): number;
    setId(value: number): TransactionModel;
    getUserId(): string;
    setUserId(value: string): TransactionModel;
    getAmountInUsd(): number;
    setAmountInUsd(value: number): TransactionModel;
    getTransactionSweepCoins(): number;
    setTransactionSweepCoins(value: number): TransactionModel;
    getTransactionGoldCoins(): number;
    setTransactionGoldCoins(value: number): TransactionModel;
    getPaymentType(): PaymentType;
    setPaymentType(value: PaymentType): TransactionModel;
    getPaymentId(): string;
    setPaymentId(value: string): TransactionModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TransactionModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TransactionModel;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): TransactionModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionModel.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionModel): TransactionModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionModel;
    static deserializeBinaryFromReader(message: TransactionModel, reader: jspb.BinaryReader): TransactionModel;
}

export namespace TransactionModel {
    export type AsObject = {
        id: number,
        userId: string,
        amountInUsd: number,
        transactionSweepCoins: number,
        transactionGoldCoins: number,
        paymentType: PaymentType,
        paymentId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RechargeWithSkrillRequest extends jspb.Message { 
    getAmountInUsd(): number;
    setAmountInUsd(value: number): RechargeWithSkrillRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RechargeWithSkrillRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RechargeWithSkrillRequest): RechargeWithSkrillRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RechargeWithSkrillRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RechargeWithSkrillRequest;
    static deserializeBinaryFromReader(message: RechargeWithSkrillRequest, reader: jspb.BinaryReader): RechargeWithSkrillRequest;
}

export namespace RechargeWithSkrillRequest {
    export type AsObject = {
        amountInUsd: number,
    }
}

export class RechargeWithSkrillResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): RechargeWithSkrillResponse;
    getUserId(): string;
    setUserId(value: string): RechargeWithSkrillResponse;
    getAmountInUsd(): number;
    setAmountInUsd(value: number): RechargeWithSkrillResponse;
    getSessionId(): string;
    setSessionId(value: string): RechargeWithSkrillResponse;
    getPaymentLink(): string;
    setPaymentLink(value: string): RechargeWithSkrillResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RechargeWithSkrillResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RechargeWithSkrillResponse): RechargeWithSkrillResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RechargeWithSkrillResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RechargeWithSkrillResponse;
    static deserializeBinaryFromReader(message: RechargeWithSkrillResponse, reader: jspb.BinaryReader): RechargeWithSkrillResponse;
}

export namespace RechargeWithSkrillResponse {
    export type AsObject = {
        id: number,
        userId: string,
        amountInUsd: number,
        sessionId: string,
        paymentLink: string,
    }
}

export class RechargeWithStripeRequest extends jspb.Message { 
    getAmountInUsd(): number;
    setAmountInUsd(value: number): RechargeWithStripeRequest;
    getDescription(): string;
    setDescription(value: string): RechargeWithStripeRequest;
    getStripeToken(): string;
    setStripeToken(value: string): RechargeWithStripeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RechargeWithStripeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RechargeWithStripeRequest): RechargeWithStripeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RechargeWithStripeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RechargeWithStripeRequest;
    static deserializeBinaryFromReader(message: RechargeWithStripeRequest, reader: jspb.BinaryReader): RechargeWithStripeRequest;
}

export namespace RechargeWithStripeRequest {
    export type AsObject = {
        amountInUsd: number,
        description: string,
        stripeToken: string,
    }
}

export class RechargeWithStripeResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionModel | undefined;
    setTransaction(value?: TransactionModel): RechargeWithStripeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RechargeWithStripeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RechargeWithStripeResponse): RechargeWithStripeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RechargeWithStripeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RechargeWithStripeResponse;
    static deserializeBinaryFromReader(message: RechargeWithStripeResponse, reader: jspb.BinaryReader): RechargeWithStripeResponse;
}

export namespace RechargeWithStripeResponse {
    export type AsObject = {
        transaction?: TransactionModel.AsObject,
    }
}

export class GetAllTransactionRequest extends jspb.Message { 

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetAllTransactionRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetAllTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllTransactionRequest): GetAllTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllTransactionRequest;
    static deserializeBinaryFromReader(message: GetAllTransactionRequest, reader: jspb.BinaryReader): GetAllTransactionRequest;
}

export namespace GetAllTransactionRequest {
    export type AsObject = {
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetAllTransactionResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionModel>;
    setTransactionsList(value: Array<TransactionModel>): GetAllTransactionResponse;
    addTransactions(value?: TransactionModel, index?: number): TransactionModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllTransactionResponse): GetAllTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllTransactionResponse;
    static deserializeBinaryFromReader(message: GetAllTransactionResponse, reader: jspb.BinaryReader): GetAllTransactionResponse;
}

export namespace GetAllTransactionResponse {
    export type AsObject = {
        transactionsList: Array<TransactionModel.AsObject>,
    }
}

export class UpdateSkrillTransactionStatusRequest extends jspb.Message { 
    getTransactionId(): number;
    setTransactionId(value: number): UpdateSkrillTransactionStatusRequest;
    getStatus(): SkrillStatusModel;
    setStatus(value: SkrillStatusModel): UpdateSkrillTransactionStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSkrillTransactionStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSkrillTransactionStatusRequest): UpdateSkrillTransactionStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSkrillTransactionStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSkrillTransactionStatusRequest;
    static deserializeBinaryFromReader(message: UpdateSkrillTransactionStatusRequest, reader: jspb.BinaryReader): UpdateSkrillTransactionStatusRequest;
}

export namespace UpdateSkrillTransactionStatusRequest {
    export type AsObject = {
        transactionId: number,
        status: SkrillStatusModel,
    }
}

export class UpdateSkrillTransactionStatusResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): UpdateSkrillTransactionStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSkrillTransactionStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSkrillTransactionStatusResponse): UpdateSkrillTransactionStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSkrillTransactionStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSkrillTransactionStatusResponse;
    static deserializeBinaryFromReader(message: UpdateSkrillTransactionStatusResponse, reader: jspb.BinaryReader): UpdateSkrillTransactionStatusResponse;
}

export namespace UpdateSkrillTransactionStatusResponse {
    export type AsObject = {
        success: boolean,
    }
}

export enum PaymentType {
    PAYMENT_TYPE_UNDEFINED = 0,
    PAYMENT_TYPE_STRIPE = 1,
    PAYMENT_TYPE_SKRILL = 2,
}

export enum SkrillStatusModel {
    STATUS_UNDEFINED = 0,
    STATUS_CREATED = 1,
    STATUS_PENDING = 2,
    STATUS_FAILED = 3,
    STATUS_CANCELLED = 4,
    STATUS_PROCESSED = 5,
}
