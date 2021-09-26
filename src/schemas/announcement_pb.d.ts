// package: schema
// file: announcement.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AnnouncementModel extends jspb.Message { 
    getId(): number;
    setId(value: number): AnnouncementModel;
    getTitle(): string;
    setTitle(value: string): AnnouncementModel;
    getBody(): string;
    setBody(value: string): AnnouncementModel;
    getImageUrl(): string;
    setImageUrl(value: string): AnnouncementModel;
    getLink(): string;
    setLink(value: string): AnnouncementModel;
    getEnabled(): boolean;
    setEnabled(value: boolean): AnnouncementModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnouncementModel.AsObject;
    static toObject(includeInstance: boolean, msg: AnnouncementModel): AnnouncementModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnouncementModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnouncementModel;
    static deserializeBinaryFromReader(message: AnnouncementModel, reader: jspb.BinaryReader): AnnouncementModel;
}

export namespace AnnouncementModel {
    export type AsObject = {
        id: number,
        title: string,
        body: string,
        imageUrl: string,
        link: string,
        enabled: boolean,
    }
}

export class CreateAnnouncementRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateAnnouncementRequest;
    getBody(): string;
    setBody(value: string): CreateAnnouncementRequest;
    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): CreateAnnouncementRequest;
    getLink(): string;
    setLink(value: string): CreateAnnouncementRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAnnouncementRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAnnouncementRequest): CreateAnnouncementRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAnnouncementRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAnnouncementRequest;
    static deserializeBinaryFromReader(message: CreateAnnouncementRequest, reader: jspb.BinaryReader): CreateAnnouncementRequest;
}

export namespace CreateAnnouncementRequest {
    export type AsObject = {
        title: string,
        body: string,
        image: Uint8Array | string,
        link: string,
    }
}

export class CreateAnnouncementResponse extends jspb.Message { 

    hasAnnouncement(): boolean;
    clearAnnouncement(): void;
    getAnnouncement(): AnnouncementModel | undefined;
    setAnnouncement(value?: AnnouncementModel): CreateAnnouncementResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAnnouncementResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAnnouncementResponse): CreateAnnouncementResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAnnouncementResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAnnouncementResponse;
    static deserializeBinaryFromReader(message: CreateAnnouncementResponse, reader: jspb.BinaryReader): CreateAnnouncementResponse;
}

export namespace CreateAnnouncementResponse {
    export type AsObject = {
        announcement?: AnnouncementModel.AsObject,
    }
}

export class DisableAnnouncementRequest extends jspb.Message { 
    getAnnouncementId(): string;
    setAnnouncementId(value: string): DisableAnnouncementRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisableAnnouncementRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DisableAnnouncementRequest): DisableAnnouncementRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisableAnnouncementRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisableAnnouncementRequest;
    static deserializeBinaryFromReader(message: DisableAnnouncementRequest, reader: jspb.BinaryReader): DisableAnnouncementRequest;
}

export namespace DisableAnnouncementRequest {
    export type AsObject = {
        announcementId: string,
    }
}

export class DisableAnnouncementResponse extends jspb.Message { 

    hasAnnouncement(): boolean;
    clearAnnouncement(): void;
    getAnnouncement(): AnnouncementModel | undefined;
    setAnnouncement(value?: AnnouncementModel): DisableAnnouncementResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisableAnnouncementResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DisableAnnouncementResponse): DisableAnnouncementResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisableAnnouncementResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisableAnnouncementResponse;
    static deserializeBinaryFromReader(message: DisableAnnouncementResponse, reader: jspb.BinaryReader): DisableAnnouncementResponse;
}

export namespace DisableAnnouncementResponse {
    export type AsObject = {
        announcement?: AnnouncementModel.AsObject,
    }
}

export class EnableAnnouncementRequest extends jspb.Message { 
    getAnnouncementId(): string;
    setAnnouncementId(value: string): EnableAnnouncementRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableAnnouncementRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EnableAnnouncementRequest): EnableAnnouncementRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableAnnouncementRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableAnnouncementRequest;
    static deserializeBinaryFromReader(message: EnableAnnouncementRequest, reader: jspb.BinaryReader): EnableAnnouncementRequest;
}

export namespace EnableAnnouncementRequest {
    export type AsObject = {
        announcementId: string,
    }
}

export class EnableAnnouncementResponse extends jspb.Message { 

    hasAnnouncement(): boolean;
    clearAnnouncement(): void;
    getAnnouncement(): AnnouncementModel | undefined;
    setAnnouncement(value?: AnnouncementModel): EnableAnnouncementResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableAnnouncementResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EnableAnnouncementResponse): EnableAnnouncementResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableAnnouncementResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableAnnouncementResponse;
    static deserializeBinaryFromReader(message: EnableAnnouncementResponse, reader: jspb.BinaryReader): EnableAnnouncementResponse;
}

export namespace EnableAnnouncementResponse {
    export type AsObject = {
        announcement?: AnnouncementModel.AsObject,
    }
}

export class GetAllAnnouncementsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllAnnouncementsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllAnnouncementsRequest): GetAllAnnouncementsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllAnnouncementsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllAnnouncementsRequest;
    static deserializeBinaryFromReader(message: GetAllAnnouncementsRequest, reader: jspb.BinaryReader): GetAllAnnouncementsRequest;
}

export namespace GetAllAnnouncementsRequest {
    export type AsObject = {
    }
}

export class GetAllAnnouncementsResponse extends jspb.Message { 
    clearAnnouncementsList(): void;
    getAnnouncementsList(): Array<AnnouncementModel>;
    setAnnouncementsList(value: Array<AnnouncementModel>): GetAllAnnouncementsResponse;
    addAnnouncements(value?: AnnouncementModel, index?: number): AnnouncementModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllAnnouncementsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllAnnouncementsResponse): GetAllAnnouncementsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllAnnouncementsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllAnnouncementsResponse;
    static deserializeBinaryFromReader(message: GetAllAnnouncementsResponse, reader: jspb.BinaryReader): GetAllAnnouncementsResponse;
}

export namespace GetAllAnnouncementsResponse {
    export type AsObject = {
        announcementsList: Array<AnnouncementModel.AsObject>,
    }
}
