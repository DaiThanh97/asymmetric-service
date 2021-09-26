// package: schema
// file: payment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as payment_pb from "./payment_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPaymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    rechargeWithStripe: IPaymentServiceService_IRechargeWithStripe;
    rechargeWithSkrill: IPaymentServiceService_IRechargeWithSkrill;
    getAllTransaction: IPaymentServiceService_IGetAllTransaction;
    updateSkrillTransactionStatus: IPaymentServiceService_IUpdateSkrillTransactionStatus;
}

interface IPaymentServiceService_IRechargeWithStripe extends grpc.MethodDefinition<payment_pb.RechargeWithStripeRequest, payment_pb.RechargeWithStripeResponse> {
    path: "/schema.PaymentService/RechargeWithStripe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<payment_pb.RechargeWithStripeRequest>;
    requestDeserialize: grpc.deserialize<payment_pb.RechargeWithStripeRequest>;
    responseSerialize: grpc.serialize<payment_pb.RechargeWithStripeResponse>;
    responseDeserialize: grpc.deserialize<payment_pb.RechargeWithStripeResponse>;
}
interface IPaymentServiceService_IRechargeWithSkrill extends grpc.MethodDefinition<payment_pb.RechargeWithSkrillRequest, payment_pb.RechargeWithSkrillResponse> {
    path: "/schema.PaymentService/RechargeWithSkrill";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<payment_pb.RechargeWithSkrillRequest>;
    requestDeserialize: grpc.deserialize<payment_pb.RechargeWithSkrillRequest>;
    responseSerialize: grpc.serialize<payment_pb.RechargeWithSkrillResponse>;
    responseDeserialize: grpc.deserialize<payment_pb.RechargeWithSkrillResponse>;
}
interface IPaymentServiceService_IGetAllTransaction extends grpc.MethodDefinition<payment_pb.GetAllTransactionRequest, payment_pb.GetAllTransactionResponse> {
    path: "/schema.PaymentService/GetAllTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<payment_pb.GetAllTransactionRequest>;
    requestDeserialize: grpc.deserialize<payment_pb.GetAllTransactionRequest>;
    responseSerialize: grpc.serialize<payment_pb.GetAllTransactionResponse>;
    responseDeserialize: grpc.deserialize<payment_pb.GetAllTransactionResponse>;
}
interface IPaymentServiceService_IUpdateSkrillTransactionStatus extends grpc.MethodDefinition<payment_pb.UpdateSkrillTransactionStatusRequest, payment_pb.UpdateSkrillTransactionStatusResponse> {
    path: "/schema.PaymentService/UpdateSkrillTransactionStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<payment_pb.UpdateSkrillTransactionStatusRequest>;
    requestDeserialize: grpc.deserialize<payment_pb.UpdateSkrillTransactionStatusRequest>;
    responseSerialize: grpc.serialize<payment_pb.UpdateSkrillTransactionStatusResponse>;
    responseDeserialize: grpc.deserialize<payment_pb.UpdateSkrillTransactionStatusResponse>;
}

export const PaymentServiceService: IPaymentServiceService;

export interface IPaymentServiceServer extends grpc.UntypedServiceImplementation {
    rechargeWithStripe: grpc.handleUnaryCall<payment_pb.RechargeWithStripeRequest, payment_pb.RechargeWithStripeResponse>;
    rechargeWithSkrill: grpc.handleUnaryCall<payment_pb.RechargeWithSkrillRequest, payment_pb.RechargeWithSkrillResponse>;
    getAllTransaction: grpc.handleUnaryCall<payment_pb.GetAllTransactionRequest, payment_pb.GetAllTransactionResponse>;
    updateSkrillTransactionStatus: grpc.handleUnaryCall<payment_pb.UpdateSkrillTransactionStatusRequest, payment_pb.UpdateSkrillTransactionStatusResponse>;
}

export interface IPaymentServiceClient {
    rechargeWithStripe(request: payment_pb.RechargeWithStripeRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithStripeResponse) => void): grpc.ClientUnaryCall;
    rechargeWithStripe(request: payment_pb.RechargeWithStripeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithStripeResponse) => void): grpc.ClientUnaryCall;
    rechargeWithStripe(request: payment_pb.RechargeWithStripeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithStripeResponse) => void): grpc.ClientUnaryCall;
    rechargeWithSkrill(request: payment_pb.RechargeWithSkrillRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithSkrillResponse) => void): grpc.ClientUnaryCall;
    rechargeWithSkrill(request: payment_pb.RechargeWithSkrillRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithSkrillResponse) => void): grpc.ClientUnaryCall;
    rechargeWithSkrill(request: payment_pb.RechargeWithSkrillRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithSkrillResponse) => void): grpc.ClientUnaryCall;
    getAllTransaction(request: payment_pb.GetAllTransactionRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.GetAllTransactionResponse) => void): grpc.ClientUnaryCall;
    getAllTransaction(request: payment_pb.GetAllTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.GetAllTransactionResponse) => void): grpc.ClientUnaryCall;
    getAllTransaction(request: payment_pb.GetAllTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.GetAllTransactionResponse) => void): grpc.ClientUnaryCall;
    updateSkrillTransactionStatus(request: payment_pb.UpdateSkrillTransactionStatusRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.UpdateSkrillTransactionStatusResponse) => void): grpc.ClientUnaryCall;
    updateSkrillTransactionStatus(request: payment_pb.UpdateSkrillTransactionStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.UpdateSkrillTransactionStatusResponse) => void): grpc.ClientUnaryCall;
    updateSkrillTransactionStatus(request: payment_pb.UpdateSkrillTransactionStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.UpdateSkrillTransactionStatusResponse) => void): grpc.ClientUnaryCall;
}

export class PaymentServiceClient extends grpc.Client implements IPaymentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public rechargeWithStripe(request: payment_pb.RechargeWithStripeRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithStripeResponse) => void): grpc.ClientUnaryCall;
    public rechargeWithStripe(request: payment_pb.RechargeWithStripeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithStripeResponse) => void): grpc.ClientUnaryCall;
    public rechargeWithStripe(request: payment_pb.RechargeWithStripeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithStripeResponse) => void): grpc.ClientUnaryCall;
    public rechargeWithSkrill(request: payment_pb.RechargeWithSkrillRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithSkrillResponse) => void): grpc.ClientUnaryCall;
    public rechargeWithSkrill(request: payment_pb.RechargeWithSkrillRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithSkrillResponse) => void): grpc.ClientUnaryCall;
    public rechargeWithSkrill(request: payment_pb.RechargeWithSkrillRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.RechargeWithSkrillResponse) => void): grpc.ClientUnaryCall;
    public getAllTransaction(request: payment_pb.GetAllTransactionRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.GetAllTransactionResponse) => void): grpc.ClientUnaryCall;
    public getAllTransaction(request: payment_pb.GetAllTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.GetAllTransactionResponse) => void): grpc.ClientUnaryCall;
    public getAllTransaction(request: payment_pb.GetAllTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.GetAllTransactionResponse) => void): grpc.ClientUnaryCall;
    public updateSkrillTransactionStatus(request: payment_pb.UpdateSkrillTransactionStatusRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.UpdateSkrillTransactionStatusResponse) => void): grpc.ClientUnaryCall;
    public updateSkrillTransactionStatus(request: payment_pb.UpdateSkrillTransactionStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.UpdateSkrillTransactionStatusResponse) => void): grpc.ClientUnaryCall;
    public updateSkrillTransactionStatus(request: payment_pb.UpdateSkrillTransactionStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.UpdateSkrillTransactionStatusResponse) => void): grpc.ClientUnaryCall;
}
