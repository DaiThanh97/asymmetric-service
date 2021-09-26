// package: schema
// file: pool.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as pool_pb from "./pool_pb";
import * as user_pb from "./user_pb";

interface IPoolServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPool: IPoolServiceService_ICreatePool;
    updatePool: IPoolServiceService_IUpdatePool;
    deletePool: IPoolServiceService_IDeletePool;
    getAllPools: IPoolServiceService_IGetAllPools;
    addCoinsToPool: IPoolServiceService_IAddCoinsToPool;
    reduceCoinsToPool: IPoolServiceService_IReduceCoinsToPool;
}

interface IPoolServiceService_ICreatePool extends grpc.MethodDefinition<pool_pb.CreatePoolRequest, pool_pb.CreatePoolResponse> {
    path: "/schema.PoolService/CreatePool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pool_pb.CreatePoolRequest>;
    requestDeserialize: grpc.deserialize<pool_pb.CreatePoolRequest>;
    responseSerialize: grpc.serialize<pool_pb.CreatePoolResponse>;
    responseDeserialize: grpc.deserialize<pool_pb.CreatePoolResponse>;
}
interface IPoolServiceService_IUpdatePool extends grpc.MethodDefinition<pool_pb.UpdatePoolRequest, pool_pb.UpdatePoolResponse> {
    path: "/schema.PoolService/UpdatePool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pool_pb.UpdatePoolRequest>;
    requestDeserialize: grpc.deserialize<pool_pb.UpdatePoolRequest>;
    responseSerialize: grpc.serialize<pool_pb.UpdatePoolResponse>;
    responseDeserialize: grpc.deserialize<pool_pb.UpdatePoolResponse>;
}
interface IPoolServiceService_IDeletePool extends grpc.MethodDefinition<pool_pb.DeletePoolRequest, pool_pb.DeletePoolResponse> {
    path: "/schema.PoolService/DeletePool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pool_pb.DeletePoolRequest>;
    requestDeserialize: grpc.deserialize<pool_pb.DeletePoolRequest>;
    responseSerialize: grpc.serialize<pool_pb.DeletePoolResponse>;
    responseDeserialize: grpc.deserialize<pool_pb.DeletePoolResponse>;
}
interface IPoolServiceService_IGetAllPools extends grpc.MethodDefinition<pool_pb.GetAllPoolsRequest, pool_pb.GetAllPoolsResponse> {
    path: "/schema.PoolService/GetAllPools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pool_pb.GetAllPoolsRequest>;
    requestDeserialize: grpc.deserialize<pool_pb.GetAllPoolsRequest>;
    responseSerialize: grpc.serialize<pool_pb.GetAllPoolsResponse>;
    responseDeserialize: grpc.deserialize<pool_pb.GetAllPoolsResponse>;
}
interface IPoolServiceService_IAddCoinsToPool extends grpc.MethodDefinition<pool_pb.AddCoinsToPoolRequest, pool_pb.AddCoinsToPoolResponse> {
    path: "/schema.PoolService/AddCoinsToPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pool_pb.AddCoinsToPoolRequest>;
    requestDeserialize: grpc.deserialize<pool_pb.AddCoinsToPoolRequest>;
    responseSerialize: grpc.serialize<pool_pb.AddCoinsToPoolResponse>;
    responseDeserialize: grpc.deserialize<pool_pb.AddCoinsToPoolResponse>;
}
interface IPoolServiceService_IReduceCoinsToPool extends grpc.MethodDefinition<pool_pb.ReduceCoinsToPoolRequest, pool_pb.ReduceCoinsToPoolResponse> {
    path: "/schema.PoolService/ReduceCoinsToPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pool_pb.ReduceCoinsToPoolRequest>;
    requestDeserialize: grpc.deserialize<pool_pb.ReduceCoinsToPoolRequest>;
    responseSerialize: grpc.serialize<pool_pb.ReduceCoinsToPoolResponse>;
    responseDeserialize: grpc.deserialize<pool_pb.ReduceCoinsToPoolResponse>;
}

export const PoolServiceService: IPoolServiceService;

export interface IPoolServiceServer extends grpc.UntypedServiceImplementation {
    createPool: grpc.handleUnaryCall<pool_pb.CreatePoolRequest, pool_pb.CreatePoolResponse>;
    updatePool: grpc.handleUnaryCall<pool_pb.UpdatePoolRequest, pool_pb.UpdatePoolResponse>;
    deletePool: grpc.handleUnaryCall<pool_pb.DeletePoolRequest, pool_pb.DeletePoolResponse>;
    getAllPools: grpc.handleUnaryCall<pool_pb.GetAllPoolsRequest, pool_pb.GetAllPoolsResponse>;
    addCoinsToPool: grpc.handleUnaryCall<pool_pb.AddCoinsToPoolRequest, pool_pb.AddCoinsToPoolResponse>;
    reduceCoinsToPool: grpc.handleUnaryCall<pool_pb.ReduceCoinsToPoolRequest, pool_pb.ReduceCoinsToPoolResponse>;
}

export interface IPoolServiceClient {
    createPool(request: pool_pb.CreatePoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.CreatePoolResponse) => void): grpc.ClientUnaryCall;
    createPool(request: pool_pb.CreatePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.CreatePoolResponse) => void): grpc.ClientUnaryCall;
    createPool(request: pool_pb.CreatePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.CreatePoolResponse) => void): grpc.ClientUnaryCall;
    updatePool(request: pool_pb.UpdatePoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.UpdatePoolResponse) => void): grpc.ClientUnaryCall;
    updatePool(request: pool_pb.UpdatePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.UpdatePoolResponse) => void): grpc.ClientUnaryCall;
    updatePool(request: pool_pb.UpdatePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.UpdatePoolResponse) => void): grpc.ClientUnaryCall;
    deletePool(request: pool_pb.DeletePoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.DeletePoolResponse) => void): grpc.ClientUnaryCall;
    deletePool(request: pool_pb.DeletePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.DeletePoolResponse) => void): grpc.ClientUnaryCall;
    deletePool(request: pool_pb.DeletePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.DeletePoolResponse) => void): grpc.ClientUnaryCall;
    getAllPools(request: pool_pb.GetAllPoolsRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.GetAllPoolsResponse) => void): grpc.ClientUnaryCall;
    getAllPools(request: pool_pb.GetAllPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.GetAllPoolsResponse) => void): grpc.ClientUnaryCall;
    getAllPools(request: pool_pb.GetAllPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.GetAllPoolsResponse) => void): grpc.ClientUnaryCall;
    addCoinsToPool(request: pool_pb.AddCoinsToPoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.AddCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    addCoinsToPool(request: pool_pb.AddCoinsToPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.AddCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    addCoinsToPool(request: pool_pb.AddCoinsToPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.AddCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    reduceCoinsToPool(request: pool_pb.ReduceCoinsToPoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.ReduceCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    reduceCoinsToPool(request: pool_pb.ReduceCoinsToPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.ReduceCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    reduceCoinsToPool(request: pool_pb.ReduceCoinsToPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.ReduceCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
}

export class PoolServiceClient extends grpc.Client implements IPoolServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPool(request: pool_pb.CreatePoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.CreatePoolResponse) => void): grpc.ClientUnaryCall;
    public createPool(request: pool_pb.CreatePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.CreatePoolResponse) => void): grpc.ClientUnaryCall;
    public createPool(request: pool_pb.CreatePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.CreatePoolResponse) => void): grpc.ClientUnaryCall;
    public updatePool(request: pool_pb.UpdatePoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.UpdatePoolResponse) => void): grpc.ClientUnaryCall;
    public updatePool(request: pool_pb.UpdatePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.UpdatePoolResponse) => void): grpc.ClientUnaryCall;
    public updatePool(request: pool_pb.UpdatePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.UpdatePoolResponse) => void): grpc.ClientUnaryCall;
    public deletePool(request: pool_pb.DeletePoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.DeletePoolResponse) => void): grpc.ClientUnaryCall;
    public deletePool(request: pool_pb.DeletePoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.DeletePoolResponse) => void): grpc.ClientUnaryCall;
    public deletePool(request: pool_pb.DeletePoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.DeletePoolResponse) => void): grpc.ClientUnaryCall;
    public getAllPools(request: pool_pb.GetAllPoolsRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.GetAllPoolsResponse) => void): grpc.ClientUnaryCall;
    public getAllPools(request: pool_pb.GetAllPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.GetAllPoolsResponse) => void): grpc.ClientUnaryCall;
    public getAllPools(request: pool_pb.GetAllPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.GetAllPoolsResponse) => void): grpc.ClientUnaryCall;
    public addCoinsToPool(request: pool_pb.AddCoinsToPoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.AddCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    public addCoinsToPool(request: pool_pb.AddCoinsToPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.AddCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    public addCoinsToPool(request: pool_pb.AddCoinsToPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.AddCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    public reduceCoinsToPool(request: pool_pb.ReduceCoinsToPoolRequest, callback: (error: grpc.ServiceError | null, response: pool_pb.ReduceCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    public reduceCoinsToPool(request: pool_pb.ReduceCoinsToPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pool_pb.ReduceCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
    public reduceCoinsToPool(request: pool_pb.ReduceCoinsToPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pool_pb.ReduceCoinsToPoolResponse) => void): grpc.ClientUnaryCall;
}
