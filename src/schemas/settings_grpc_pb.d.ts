// package: schema
// file: settings.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as settings_pb from "./settings_pb";

interface ISettingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSettings: ISettingServiceService_IGetSettings;
    updateSettings: ISettingServiceService_IUpdateSettings;
}

interface ISettingServiceService_IGetSettings extends grpc.MethodDefinition<settings_pb.GetSettingsRequest, settings_pb.GetSettingsResponse> {
    path: "/schema.SettingService/GetSettings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<settings_pb.GetSettingsRequest>;
    requestDeserialize: grpc.deserialize<settings_pb.GetSettingsRequest>;
    responseSerialize: grpc.serialize<settings_pb.GetSettingsResponse>;
    responseDeserialize: grpc.deserialize<settings_pb.GetSettingsResponse>;
}
interface ISettingServiceService_IUpdateSettings extends grpc.MethodDefinition<settings_pb.UpdateSettingsRequest, settings_pb.UpdateSettingsResponse> {
    path: "/schema.SettingService/UpdateSettings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<settings_pb.UpdateSettingsRequest>;
    requestDeserialize: grpc.deserialize<settings_pb.UpdateSettingsRequest>;
    responseSerialize: grpc.serialize<settings_pb.UpdateSettingsResponse>;
    responseDeserialize: grpc.deserialize<settings_pb.UpdateSettingsResponse>;
}

export const SettingServiceService: ISettingServiceService;

export interface ISettingServiceServer extends grpc.UntypedServiceImplementation {
    getSettings: grpc.handleUnaryCall<settings_pb.GetSettingsRequest, settings_pb.GetSettingsResponse>;
    updateSettings: grpc.handleUnaryCall<settings_pb.UpdateSettingsRequest, settings_pb.UpdateSettingsResponse>;
}

export interface ISettingServiceClient {
    getSettings(request: settings_pb.GetSettingsRequest, callback: (error: grpc.ServiceError | null, response: settings_pb.GetSettingsResponse) => void): grpc.ClientUnaryCall;
    getSettings(request: settings_pb.GetSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: settings_pb.GetSettingsResponse) => void): grpc.ClientUnaryCall;
    getSettings(request: settings_pb.GetSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: settings_pb.GetSettingsResponse) => void): grpc.ClientUnaryCall;
    updateSettings(request: settings_pb.UpdateSettingsRequest, callback: (error: grpc.ServiceError | null, response: settings_pb.UpdateSettingsResponse) => void): grpc.ClientUnaryCall;
    updateSettings(request: settings_pb.UpdateSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: settings_pb.UpdateSettingsResponse) => void): grpc.ClientUnaryCall;
    updateSettings(request: settings_pb.UpdateSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: settings_pb.UpdateSettingsResponse) => void): grpc.ClientUnaryCall;
}

export class SettingServiceClient extends grpc.Client implements ISettingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSettings(request: settings_pb.GetSettingsRequest, callback: (error: grpc.ServiceError | null, response: settings_pb.GetSettingsResponse) => void): grpc.ClientUnaryCall;
    public getSettings(request: settings_pb.GetSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: settings_pb.GetSettingsResponse) => void): grpc.ClientUnaryCall;
    public getSettings(request: settings_pb.GetSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: settings_pb.GetSettingsResponse) => void): grpc.ClientUnaryCall;
    public updateSettings(request: settings_pb.UpdateSettingsRequest, callback: (error: grpc.ServiceError | null, response: settings_pb.UpdateSettingsResponse) => void): grpc.ClientUnaryCall;
    public updateSettings(request: settings_pb.UpdateSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: settings_pb.UpdateSettingsResponse) => void): grpc.ClientUnaryCall;
    public updateSettings(request: settings_pb.UpdateSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: settings_pb.UpdateSettingsResponse) => void): grpc.ClientUnaryCall;
}
