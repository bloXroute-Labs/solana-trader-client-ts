import { MAINNET_API_GRPC_HOST, MAINNET_API_GRPC_PORT } from "../../utils/constants.js";
import { createGrpcJsClient, CreateGrpcClientImplConfig, createGrpcClientImpl } from "@pbkit/grpc-client"
import { GetAccountBalanceRequest, GetAccountBalanceResponse, GetFilteredOrderbooksRequest, GetMarketsRequest, GetMarketsResponse, GetOpenOrdersRequest, GetOpenOrdersResponse, GetOrderBookRequest, GetOrderbookResponse, GetOrderbooksStreamResponse, GetOrderStatusStreamRequest, GetOrderStatusStreamResponse, GetServerTimeRequest, GetServerTimeResponse, GetTickersRequest, GetTickersResponse, GetTickersStreamResponse, GetTradesRequest, GetTradesResponse, GetTradesStreamResponse, GetUnsettledRequest, GetUnsettledResponse } from "../proto/messages/api/index.js";
import { createServiceClient, Service } from "../proto/services/api/Api.js";
import { BaseProvider } from "./base.js";
import { Client } from "@grpc/grpc-js";

export class GrpcProvider extends BaseProvider {
    private client:Service
    private grpcClient: Client
    constructor(address: string = `${MAINNET_API_GRPC_HOST}:${MAINNET_API_GRPC_PORT}`) {
        super();        
        this.grpcClient = createGrpcJsClient(address)
        const config:CreateGrpcClientImplConfig = { grpcJsClient: this.grpcClient} 
        const impl = createGrpcClientImpl(config)
        this.client = createServiceClient(impl)
    };

    //Unary requests
    getOrderbook = (request: GetOrderBookRequest): Promise<GetOrderbookResponse> => {
        return this.client.getOrderbook(request)
    }

    getMarkets = (request: GetMarketsRequest): Promise<GetMarketsResponse> => {
        return this.client.getMarkets(request)
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse>{
        return this.client.getTickers(request)
    };    
    
    getTrades(request: GetTradesRequest): Promise<GetTradesResponse>{
        return this.client.getTrades(request)
    };

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse>{
        return this.client.getServerTime(request)
    };
    
    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse>{
        return this.client.getOpenOrders(request)
    };    

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse>{
        return this.client.getUnsettled(request)
    };
    
    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse>{
        return this.client.getAccountBalance(request)
    };

    //stream requests
    getOrderbooksStream = (request: GetOrderBookRequest): Promise<AsyncGenerator< GetOrderbooksStreamResponse>> => {
        return this.client.getOrderbooksStream(request)
    }

    getTickersStream(request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>>{
        return this.client.getTickersStream(request)
    };

    getTradesStream(request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>>{
        return this.client.getTradesStream(request)
    };

    getFilteredOrderbooksStream(request: GetFilteredOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>>{
        return this.client.getFilteredOrderbooksStream(request)
    };

    getOrderStatusStream(request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>>{
        return this.client.getOrderStatusStream(request)
    }

    close = () => {
        this.grpcClient.close()
    }
}