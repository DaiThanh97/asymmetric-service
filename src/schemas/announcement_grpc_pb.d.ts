// package: schema
// file: announcement.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as announcement_pb from "./announcement_pb";

interface IAnnouncementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAnnouncement: IAnnouncementServiceService_ICreateAnnouncement;
    disableAnnouncement: IAnnouncementServiceService_IDisableAnnouncement;
    enableAnnouncement: IAnnouncementServiceService_IEnableAnnouncement;
    getAllAnnouncements: IAnnouncementServiceService_IGetAllAnnouncements;
}

interface IAnnouncementServiceService_ICreateAnnouncement extends grpc.MethodDefinition<announcement_pb.CreateAnnouncementRequest, announcement_pb.CreateAnnouncementResponse> {
    path: "/schema.AnnouncementService/CreateAnnouncement";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<announcement_pb.CreateAnnouncementRequest>;
    requestDeserialize: grpc.deserialize<announcement_pb.CreateAnnouncementRequest>;
    responseSerialize: grpc.serialize<announcement_pb.CreateAnnouncementResponse>;
    responseDeserialize: grpc.deserialize<announcement_pb.CreateAnnouncementResponse>;
}
interface IAnnouncementServiceService_IDisableAnnouncement extends grpc.MethodDefinition<announcement_pb.DisableAnnouncementRequest, announcement_pb.DisableAnnouncementResponse> {
    path: "/schema.AnnouncementService/DisableAnnouncement";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<announcement_pb.DisableAnnouncementRequest>;
    requestDeserialize: grpc.deserialize<announcement_pb.DisableAnnouncementRequest>;
    responseSerialize: grpc.serialize<announcement_pb.DisableAnnouncementResponse>;
    responseDeserialize: grpc.deserialize<announcement_pb.DisableAnnouncementResponse>;
}
interface IAnnouncementServiceService_IEnableAnnouncement extends grpc.MethodDefinition<announcement_pb.EnableAnnouncementRequest, announcement_pb.EnableAnnouncementResponse> {
    path: "/schema.AnnouncementService/EnableAnnouncement";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<announcement_pb.EnableAnnouncementRequest>;
    requestDeserialize: grpc.deserialize<announcement_pb.EnableAnnouncementRequest>;
    responseSerialize: grpc.serialize<announcement_pb.EnableAnnouncementResponse>;
    responseDeserialize: grpc.deserialize<announcement_pb.EnableAnnouncementResponse>;
}
interface IAnnouncementServiceService_IGetAllAnnouncements extends grpc.MethodDefinition<announcement_pb.GetAllAnnouncementsRequest, announcement_pb.GetAllAnnouncementsResponse> {
    path: "/schema.AnnouncementService/GetAllAnnouncements";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<announcement_pb.GetAllAnnouncementsRequest>;
    requestDeserialize: grpc.deserialize<announcement_pb.GetAllAnnouncementsRequest>;
    responseSerialize: grpc.serialize<announcement_pb.GetAllAnnouncementsResponse>;
    responseDeserialize: grpc.deserialize<announcement_pb.GetAllAnnouncementsResponse>;
}

export const AnnouncementServiceService: IAnnouncementServiceService;

export interface IAnnouncementServiceServer extends grpc.UntypedServiceImplementation {
    createAnnouncement: grpc.handleUnaryCall<announcement_pb.CreateAnnouncementRequest, announcement_pb.CreateAnnouncementResponse>;
    disableAnnouncement: grpc.handleUnaryCall<announcement_pb.DisableAnnouncementRequest, announcement_pb.DisableAnnouncementResponse>;
    enableAnnouncement: grpc.handleUnaryCall<announcement_pb.EnableAnnouncementRequest, announcement_pb.EnableAnnouncementResponse>;
    getAllAnnouncements: grpc.handleUnaryCall<announcement_pb.GetAllAnnouncementsRequest, announcement_pb.GetAllAnnouncementsResponse>;
}

export interface IAnnouncementServiceClient {
    createAnnouncement(request: announcement_pb.CreateAnnouncementRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.CreateAnnouncementResponse) => void): grpc.ClientUnaryCall;
    createAnnouncement(request: announcement_pb.CreateAnnouncementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.CreateAnnouncementResponse) => void): grpc.ClientUnaryCall;
    createAnnouncement(request: announcement_pb.CreateAnnouncementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.CreateAnnouncementResponse) => void): grpc.ClientUnaryCall;
    disableAnnouncement(request: announcement_pb.DisableAnnouncementRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.DisableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    disableAnnouncement(request: announcement_pb.DisableAnnouncementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.DisableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    disableAnnouncement(request: announcement_pb.DisableAnnouncementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.DisableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    enableAnnouncement(request: announcement_pb.EnableAnnouncementRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.EnableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    enableAnnouncement(request: announcement_pb.EnableAnnouncementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.EnableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    enableAnnouncement(request: announcement_pb.EnableAnnouncementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.EnableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    getAllAnnouncements(request: announcement_pb.GetAllAnnouncementsRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.GetAllAnnouncementsResponse) => void): grpc.ClientUnaryCall;
    getAllAnnouncements(request: announcement_pb.GetAllAnnouncementsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.GetAllAnnouncementsResponse) => void): grpc.ClientUnaryCall;
    getAllAnnouncements(request: announcement_pb.GetAllAnnouncementsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.GetAllAnnouncementsResponse) => void): grpc.ClientUnaryCall;
}

export class AnnouncementServiceClient extends grpc.Client implements IAnnouncementServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createAnnouncement(request: announcement_pb.CreateAnnouncementRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.CreateAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public createAnnouncement(request: announcement_pb.CreateAnnouncementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.CreateAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public createAnnouncement(request: announcement_pb.CreateAnnouncementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.CreateAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public disableAnnouncement(request: announcement_pb.DisableAnnouncementRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.DisableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public disableAnnouncement(request: announcement_pb.DisableAnnouncementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.DisableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public disableAnnouncement(request: announcement_pb.DisableAnnouncementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.DisableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public enableAnnouncement(request: announcement_pb.EnableAnnouncementRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.EnableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public enableAnnouncement(request: announcement_pb.EnableAnnouncementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.EnableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public enableAnnouncement(request: announcement_pb.EnableAnnouncementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.EnableAnnouncementResponse) => void): grpc.ClientUnaryCall;
    public getAllAnnouncements(request: announcement_pb.GetAllAnnouncementsRequest, callback: (error: grpc.ServiceError | null, response: announcement_pb.GetAllAnnouncementsResponse) => void): grpc.ClientUnaryCall;
    public getAllAnnouncements(request: announcement_pb.GetAllAnnouncementsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: announcement_pb.GetAllAnnouncementsResponse) => void): grpc.ClientUnaryCall;
    public getAllAnnouncements(request: announcement_pb.GetAllAnnouncementsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: announcement_pb.GetAllAnnouncementsResponse) => void): grpc.ClientUnaryCall;
}
