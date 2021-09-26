// package: schema
// file: games/game.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as games_game_pb from "../games/game_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as games_slotsgames_asymmetric_reels_slots_game_pb from "../games/slotsgames/asymmetric_reels_slots_game_pb";
import * as games_slotsgames_accumulate_multiplier_slots_game_pb from "../games/slotsgames/accumulate_multiplier_slots_game_pb";
import * as games_slotsgames_slots_game_pb from "../games/slotsgames/slots_game_pb";
import * as games_slotsgames_symbol_pb from "../games/slotsgames/symbol_pb";
import * as games_slotsgames_game_progress_pb from "../games/slotsgames/game_progress_pb";
import * as games_slotsgames_game_result_pb from "../games/slotsgames/game_result_pb";
import * as games_slotsgames_payline_pb from "../games/slotsgames/payline_pb";
import * as games_slotsgames_scatter_prize_pb from "../games/slotsgames/scatter_prize_pb";
import * as user_pb from "../user_pb";

interface IGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadGameVersion: IGameServiceService_IUploadGameVersion;
    updateSimpleScatterPrize: IGameServiceService_IUpdateSimpleScatterPrize;
    updateAccumulateMultiplierScatterPrize: IGameServiceService_IUpdateAccumulateMultiplierScatterPrize;
    createAccumulateMultiplierSlotsGame: IGameServiceService_ICreateAccumulateMultiplierSlotsGame;
    updateAccumulateMultiplierSlotsGame: IGameServiceService_IUpdateAccumulateMultiplierSlotsGame;
    addAccumulateMultiplierSlotsGameSymbol: IGameServiceService_IAddAccumulateMultiplierSlotsGameSymbol;
    updateAccumulateMultiplierSlotsGameSymbol: IGameServiceService_IUpdateAccumulateMultiplierSlotsGameSymbol;
    createAsymmetricReelsSlotsGame: IGameServiceService_ICreateAsymmetricReelsSlotsGame;
    updateAsymmetricReelsSlotsGame: IGameServiceService_IUpdateAsymmetricReelsSlotsGame;
    addAsymmetricReelsSlotsGameSymbol: IGameServiceService_IAddAsymmetricReelsSlotsGameSymbol;
    updateAsymmetricReelsSlotsGameSymbol: IGameServiceService_IUpdateAsymmetricReelsSlotsGameSymbol;
    getGameProgress: IGameServiceService_IGetGameProgress;
    getGame: IGameServiceService_IGetGame;
    getAllGameIds: IGameServiceService_IGetAllGameIds;
    selectPayline: IGameServiceService_ISelectPayline;
    setBet: IGameServiceService_ISetBet;
    createPayline: IGameServiceService_ICreatePayline;
    removePayline: IGameServiceService_IRemovePayline;
    spin: IGameServiceService_ISpin;
}

interface IGameServiceService_IUploadGameVersion extends grpc.MethodDefinition<games_game_pb.UploadGameVersionRequest, games_game_pb.UploadGameVersionResponse> {
    path: "/schema.GameService/UploadGameVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.UploadGameVersionRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.UploadGameVersionRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UploadGameVersionResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UploadGameVersionResponse>;
}
interface IGameServiceService_IUpdateSimpleScatterPrize extends grpc.MethodDefinition<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse> {
    path: "/schema.GameService/UpdateSimpleScatterPrize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
}
interface IGameServiceService_IUpdateAccumulateMultiplierScatterPrize extends grpc.MethodDefinition<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse> {
    path: "/schema.GameService/UpdateAccumulateMultiplierScatterPrize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
}
interface IGameServiceService_ICreateAccumulateMultiplierSlotsGame extends grpc.MethodDefinition<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, games_game_pb.CreateGameResponse> {
    path: "/schema.GameService/CreateAccumulateMultiplierSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.CreateGameResponse>;
}
interface IGameServiceService_IUpdateAccumulateMultiplierSlotsGame extends grpc.MethodDefinition<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, games_game_pb.UpdateGameResponse> {
    path: "/schema.GameService/UpdateAccumulateMultiplierSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateGameResponse>;
}
interface IGameServiceService_IAddAccumulateMultiplierSlotsGameSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.GameService/AddAccumulateMultiplierSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.AddSlotsGameSymbolResponse>;
}
interface IGameServiceService_IUpdateAccumulateMultiplierSlotsGameSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.GameService/UpdateAccumulateMultiplierSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IGameServiceService_ICreateAsymmetricReelsSlotsGame extends grpc.MethodDefinition<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, games_game_pb.CreateGameResponse> {
    path: "/schema.GameService/CreateAsymmetricReelsSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.CreateGameResponse>;
}
interface IGameServiceService_IUpdateAsymmetricReelsSlotsGame extends grpc.MethodDefinition<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, games_game_pb.UpdateGameResponse> {
    path: "/schema.GameService/UpdateAsymmetricReelsSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateGameResponse>;
}
interface IGameServiceService_IAddAsymmetricReelsSlotsGameSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.GameService/AddAsymmetricReelsSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.AddSlotsGameSymbolResponse>;
}
interface IGameServiceService_IUpdateAsymmetricReelsSlotsGameSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.GameService/UpdateAsymmetricReelsSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IGameServiceService_IGetGameProgress extends grpc.MethodDefinition<games_game_pb.GetGameProgressRequest, games_game_pb.GetGameProgressResponse> {
    path: "/schema.GameService/GetGameProgress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetGameProgressRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetGameProgressRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetGameProgressResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetGameProgressResponse>;
}
interface IGameServiceService_IGetGame extends grpc.MethodDefinition<games_game_pb.GetGameRequest, games_game_pb.GetGameResponse> {
    path: "/schema.GameService/GetGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetGameResponse>;
}
interface IGameServiceService_IGetAllGameIds extends grpc.MethodDefinition<games_game_pb.GetAllGameIdsRequest, games_game_pb.GetAllGameIdsResponse> {
    path: "/schema.GameService/GetAllGameIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetAllGameIdsRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetAllGameIdsRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetAllGameIdsResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetAllGameIdsResponse>;
}
interface IGameServiceService_ISelectPayline extends grpc.MethodDefinition<games_game_pb.SelectPaylineRequest, games_game_pb.SelectPaylineResponse> {
    path: "/schema.GameService/SelectPayline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SelectPaylineRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SelectPaylineRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SelectPaylineResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SelectPaylineResponse>;
}
interface IGameServiceService_ISetBet extends grpc.MethodDefinition<games_game_pb.SetBetRequest, games_game_pb.SetBetResponse> {
    path: "/schema.GameService/SetBet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SetBetRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SetBetRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SetBetResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SetBetResponse>;
}
interface IGameServiceService_ICreatePayline extends grpc.MethodDefinition<games_slotsgames_payline_pb.CreatePaylineRequest, games_slotsgames_payline_pb.CreatePaylineResponse> {
    path: "/schema.GameService/CreatePayline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_payline_pb.CreatePaylineRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_payline_pb.CreatePaylineRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_payline_pb.CreatePaylineResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_payline_pb.CreatePaylineResponse>;
}
interface IGameServiceService_IRemovePayline extends grpc.MethodDefinition<games_slotsgames_payline_pb.RemovePaylineRequest, games_slotsgames_payline_pb.RemovePaylineResponse> {
    path: "/schema.GameService/RemovePayline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_payline_pb.RemovePaylineRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_payline_pb.RemovePaylineRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_payline_pb.RemovePaylineResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_payline_pb.RemovePaylineResponse>;
}
interface IGameServiceService_ISpin extends grpc.MethodDefinition<games_game_pb.SpinRequest, games_game_pb.SpinResponse> {
    path: "/schema.GameService/Spin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SpinRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SpinRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SpinResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SpinResponse>;
}

export const GameServiceService: IGameServiceService;

export interface IGameServiceServer extends grpc.UntypedServiceImplementation {
    uploadGameVersion: grpc.handleUnaryCall<games_game_pb.UploadGameVersionRequest, games_game_pb.UploadGameVersionResponse>;
    updateSimpleScatterPrize: grpc.handleUnaryCall<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    updateAccumulateMultiplierScatterPrize: grpc.handleUnaryCall<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    createAccumulateMultiplierSlotsGame: grpc.handleUnaryCall<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, games_game_pb.CreateGameResponse>;
    updateAccumulateMultiplierSlotsGame: grpc.handleUnaryCall<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, games_game_pb.UpdateGameResponse>;
    addAccumulateMultiplierSlotsGameSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse>;
    updateAccumulateMultiplierSlotsGameSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse>;
    createAsymmetricReelsSlotsGame: grpc.handleUnaryCall<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, games_game_pb.CreateGameResponse>;
    updateAsymmetricReelsSlotsGame: grpc.handleUnaryCall<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, games_game_pb.UpdateGameResponse>;
    addAsymmetricReelsSlotsGameSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse>;
    updateAsymmetricReelsSlotsGameSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse>;
    getGameProgress: grpc.handleUnaryCall<games_game_pb.GetGameProgressRequest, games_game_pb.GetGameProgressResponse>;
    getGame: grpc.handleUnaryCall<games_game_pb.GetGameRequest, games_game_pb.GetGameResponse>;
    getAllGameIds: grpc.handleUnaryCall<games_game_pb.GetAllGameIdsRequest, games_game_pb.GetAllGameIdsResponse>;
    selectPayline: grpc.handleUnaryCall<games_game_pb.SelectPaylineRequest, games_game_pb.SelectPaylineResponse>;
    setBet: grpc.handleUnaryCall<games_game_pb.SetBetRequest, games_game_pb.SetBetResponse>;
    createPayline: grpc.handleUnaryCall<games_slotsgames_payline_pb.CreatePaylineRequest, games_slotsgames_payline_pb.CreatePaylineResponse>;
    removePayline: grpc.handleUnaryCall<games_slotsgames_payline_pb.RemovePaylineRequest, games_slotsgames_payline_pb.RemovePaylineResponse>;
    spin: grpc.handleUnaryCall<games_game_pb.SpinRequest, games_game_pb.SpinResponse>;
}

export interface IGameServiceClient {
    uploadGameVersion(request: games_game_pb.UploadGameVersionRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    uploadGameVersion(request: games_game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    uploadGameVersion(request: games_game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    createAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    addAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    createAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    addAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getAllGameIds(request: games_game_pb.GetAllGameIdsRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetAllGameIdsResponse) => void): grpc.ClientUnaryCall;
    getAllGameIds(request: games_game_pb.GetAllGameIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetAllGameIdsResponse) => void): grpc.ClientUnaryCall;
    getAllGameIds(request: games_game_pb.GetAllGameIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetAllGameIdsResponse) => void): grpc.ClientUnaryCall;
    selectPayline(request: games_game_pb.SelectPaylineRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
}

export class GameServiceClient extends grpc.Client implements IGameServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public uploadGameVersion(request: games_game_pb.UploadGameVersionRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    public uploadGameVersion(request: games_game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    public uploadGameVersion(request: games_game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    public updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public createAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public addAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public createAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public addAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGameSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getAllGameIds(request: games_game_pb.GetAllGameIdsRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetAllGameIdsResponse) => void): grpc.ClientUnaryCall;
    public getAllGameIds(request: games_game_pb.GetAllGameIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetAllGameIdsResponse) => void): grpc.ClientUnaryCall;
    public getAllGameIds(request: games_game_pb.GetAllGameIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetAllGameIdsResponse) => void): grpc.ClientUnaryCall;
    public selectPayline(request: games_game_pb.SelectPaylineRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    public selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    public selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    public createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    public createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    public removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    public removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    public removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
}

interface IAccumulateMultiplierSlotsGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGame: IAccumulateMultiplierSlotsGameServiceService_ICreateGame;
    updateGame: IAccumulateMultiplierSlotsGameServiceService_IUpdateGame;
    updateAccumulateMultiplierScatterPrize: IAccumulateMultiplierSlotsGameServiceService_IUpdateAccumulateMultiplierScatterPrize;
    addSymbol: IAccumulateMultiplierSlotsGameServiceService_IAddSymbol;
    updateSymbol: IAccumulateMultiplierSlotsGameServiceService_IUpdateSymbol;
    getGame: IAccumulateMultiplierSlotsGameServiceService_IGetGame;
    getGameProgress: IAccumulateMultiplierSlotsGameServiceService_IGetGameProgress;
    setBet: IAccumulateMultiplierSlotsGameServiceService_ISetBet;
    spin: IAccumulateMultiplierSlotsGameServiceService_ISpin;
}

interface IAccumulateMultiplierSlotsGameServiceService_ICreateGame extends grpc.MethodDefinition<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, games_game_pb.CreateGameResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/CreateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.CreateGameResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IUpdateGame extends grpc.MethodDefinition<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, games_game_pb.UpdateGameResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/UpdateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateGameResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IUpdateAccumulateMultiplierScatterPrize extends grpc.MethodDefinition<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/UpdateAccumulateMultiplierScatterPrize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IAddSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/AddSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.AddSlotsGameSymbolResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IUpdateSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/UpdateSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IGetGame extends grpc.MethodDefinition<games_game_pb.GetGameRequest, games_game_pb.GetGameResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/GetGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetGameResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IGetGameProgress extends grpc.MethodDefinition<games_game_pb.GetGameProgressRequest, games_game_pb.GetGameProgressResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/GetGameProgress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetGameProgressRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetGameProgressRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetGameProgressResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetGameProgressResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_ISetBet extends grpc.MethodDefinition<games_game_pb.SetBetRequest, games_game_pb.SetBetResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/SetBet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SetBetRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SetBetRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SetBetResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SetBetResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_ISpin extends grpc.MethodDefinition<games_game_pb.SpinRequest, games_game_pb.SpinResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/Spin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SpinRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SpinRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SpinResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SpinResponse>;
}

export const AccumulateMultiplierSlotsGameServiceService: IAccumulateMultiplierSlotsGameServiceService;

export interface IAccumulateMultiplierSlotsGameServiceServer extends grpc.UntypedServiceImplementation {
    createGame: grpc.handleUnaryCall<games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, games_game_pb.CreateGameResponse>;
    updateGame: grpc.handleUnaryCall<games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, games_game_pb.UpdateGameResponse>;
    updateAccumulateMultiplierScatterPrize: grpc.handleUnaryCall<games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    addSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse>;
    updateSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse>;
    getGame: grpc.handleUnaryCall<games_game_pb.GetGameRequest, games_game_pb.GetGameResponse>;
    getGameProgress: grpc.handleUnaryCall<games_game_pb.GetGameProgressRequest, games_game_pb.GetGameProgressResponse>;
    setBet: grpc.handleUnaryCall<games_game_pb.SetBetRequest, games_game_pb.SetBetResponse>;
    spin: grpc.handleUnaryCall<games_game_pb.SpinRequest, games_game_pb.SpinResponse>;
}

export interface IAccumulateMultiplierSlotsGameServiceClient {
    createGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
}

export class AccumulateMultiplierSlotsGameServiceClient extends grpc.Client implements IAccumulateMultiplierSlotsGameServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: games_slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateAccumulateMultiplierScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: games_slotsgames_symbol_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: games_slotsgames_symbol_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
}

interface IAsymmetricReelsSlotsGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGame: IAsymmetricReelsSlotsGameServiceService_ICreateGame;
    updateGame: IAsymmetricReelsSlotsGameServiceService_IUpdateGame;
    updateSimpleScatterPrize: IAsymmetricReelsSlotsGameServiceService_IUpdateSimpleScatterPrize;
    createPayline: IAsymmetricReelsSlotsGameServiceService_ICreatePayline;
    removePayline: IAsymmetricReelsSlotsGameServiceService_IRemovePayline;
    addSymbol: IAsymmetricReelsSlotsGameServiceService_IAddSymbol;
    updateSymbol: IAsymmetricReelsSlotsGameServiceService_IUpdateSymbol;
    getGame: IAsymmetricReelsSlotsGameServiceService_IGetGame;
    getGameProgress: IAsymmetricReelsSlotsGameServiceService_IGetGameProgress;
    selectPayline: IAsymmetricReelsSlotsGameServiceService_ISelectPayline;
    setBet: IAsymmetricReelsSlotsGameServiceService_ISetBet;
    spin: IAsymmetricReelsSlotsGameServiceService_ISpin;
}

interface IAsymmetricReelsSlotsGameServiceService_ICreateGame extends grpc.MethodDefinition<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, games_game_pb.CreateGameResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/CreateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.CreateGameResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IUpdateGame extends grpc.MethodDefinition<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, games_game_pb.UpdateGameResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/UpdateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateGameResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IUpdateSimpleScatterPrize extends grpc.MethodDefinition<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/UpdateSimpleScatterPrize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_ICreatePayline extends grpc.MethodDefinition<games_slotsgames_payline_pb.CreatePaylineRequest, games_slotsgames_payline_pb.CreatePaylineResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/CreatePayline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_payline_pb.CreatePaylineRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_payline_pb.CreatePaylineRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_payline_pb.CreatePaylineResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_payline_pb.CreatePaylineResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IRemovePayline extends grpc.MethodDefinition<games_slotsgames_payline_pb.RemovePaylineRequest, games_slotsgames_payline_pb.RemovePaylineResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/RemovePayline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_payline_pb.RemovePaylineRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_payline_pb.RemovePaylineRequest>;
    responseSerialize: grpc.serialize<games_slotsgames_payline_pb.RemovePaylineResponse>;
    responseDeserialize: grpc.deserialize<games_slotsgames_payline_pb.RemovePaylineResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IAddSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/AddSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.AddSlotsGameSymbolResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IUpdateSymbol extends grpc.MethodDefinition<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/UpdateSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IGetGame extends grpc.MethodDefinition<games_game_pb.GetGameRequest, games_game_pb.GetGameResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/GetGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetGameResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetGameResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IGetGameProgress extends grpc.MethodDefinition<games_game_pb.GetGameProgressRequest, games_game_pb.GetGameProgressResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/GetGameProgress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.GetGameProgressRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.GetGameProgressRequest>;
    responseSerialize: grpc.serialize<games_game_pb.GetGameProgressResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.GetGameProgressResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_ISelectPayline extends grpc.MethodDefinition<games_game_pb.SelectPaylineRequest, games_game_pb.SelectPaylineResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/SelectPayline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SelectPaylineRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SelectPaylineRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SelectPaylineResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SelectPaylineResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_ISetBet extends grpc.MethodDefinition<games_game_pb.SetBetRequest, games_game_pb.SetBetResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/SetBet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SetBetRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SetBetRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SetBetResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SetBetResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_ISpin extends grpc.MethodDefinition<games_game_pb.SpinRequest, games_game_pb.SpinResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/Spin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<games_game_pb.SpinRequest>;
    requestDeserialize: grpc.deserialize<games_game_pb.SpinRequest>;
    responseSerialize: grpc.serialize<games_game_pb.SpinResponse>;
    responseDeserialize: grpc.deserialize<games_game_pb.SpinResponse>;
}

export const AsymmetricReelsSlotsGameServiceService: IAsymmetricReelsSlotsGameServiceService;

export interface IAsymmetricReelsSlotsGameServiceServer extends grpc.UntypedServiceImplementation {
    createGame: grpc.handleUnaryCall<games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, games_game_pb.CreateGameResponse>;
    updateGame: grpc.handleUnaryCall<games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, games_game_pb.UpdateGameResponse>;
    updateSimpleScatterPrize: grpc.handleUnaryCall<games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse>;
    createPayline: grpc.handleUnaryCall<games_slotsgames_payline_pb.CreatePaylineRequest, games_slotsgames_payline_pb.CreatePaylineResponse>;
    removePayline: grpc.handleUnaryCall<games_slotsgames_payline_pb.RemovePaylineRequest, games_slotsgames_payline_pb.RemovePaylineResponse>;
    addSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.AddSlotsGameSymbolResponse>;
    updateSymbol: grpc.handleUnaryCall<games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, games_game_pb.UpdateSlotsGameSymbolResponse>;
    getGame: grpc.handleUnaryCall<games_game_pb.GetGameRequest, games_game_pb.GetGameResponse>;
    getGameProgress: grpc.handleUnaryCall<games_game_pb.GetGameProgressRequest, games_game_pb.GetGameProgressResponse>;
    selectPayline: grpc.handleUnaryCall<games_game_pb.SelectPaylineRequest, games_game_pb.SelectPaylineResponse>;
    setBet: grpc.handleUnaryCall<games_game_pb.SetBetRequest, games_game_pb.SetBetResponse>;
    spin: grpc.handleUnaryCall<games_game_pb.SpinRequest, games_game_pb.SpinResponse>;
}

export interface IAsymmetricReelsSlotsGameServiceClient {
    createGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    selectPayline(request: games_game_pb.SelectPaylineRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
}

export class AsymmetricReelsSlotsGameServiceClient extends grpc.Client implements IAsymmetricReelsSlotsGameServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: games_slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public updateSimpleScatterPrize(request: games_slotsgames_scatter_prize_pb.UpdateSimpleScatterPrizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_scatter_prize_pb.UpdateScatterPrizeResponse) => void): grpc.ClientUnaryCall;
    public createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    public createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    public createPayline(request: games_slotsgames_payline_pb.CreatePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.CreatePaylineResponse) => void): grpc.ClientUnaryCall;
    public removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    public removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    public removePayline(request: games_slotsgames_payline_pb.RemovePaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_slotsgames_payline_pb.RemovePaylineResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: games_slotsgames_symbol_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: games_slotsgames_symbol_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: games_game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public getGameProgress(request: games_game_pb.GetGameProgressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.GetGameProgressResponse) => void): grpc.ClientUnaryCall;
    public selectPayline(request: games_game_pb.SelectPaylineRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    public selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    public selectPayline(request: games_game_pb.SelectPaylineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SelectPaylineResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public setBet(request: games_game_pb.SetBetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SetBetResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
    public spin(request: games_game_pb.SpinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: games_game_pb.SpinResponse) => void): grpc.ClientUnaryCall;
}
