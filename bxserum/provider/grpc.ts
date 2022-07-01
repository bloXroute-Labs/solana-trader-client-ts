import { Constants } from "../../utils/constants.js";
import { createGrpcJsClient, CreateGrpcClientImplConfig, createGrpcClientImpl } from "@pbkit/grpc-client"
import { GetMarketsRequest, GetMarketsResponse, GetOrderBookRequest, GetOrderbookResponse, GetOrderbooksStreamResponse } from "../proto/messages/api/index.js";
import { createServiceClient, Service } from "../proto/services/api/Api.js";
import { BaseProvider } from "./base.js";
import { Client } from "@grpc/grpc-js";

export class GrpcProvider extends BaseProvider {
    private client:Service
    private grpcClient: Client
    constructor(address: string) {
        super();
        if (address ===""){
            address = `${Constants.MAINNET_API_GRPC_HOST}:${Constants.MAINNET_API_GRPC_PORT}`
        }
        this.grpcClient = createGrpcJsClient(address)
        var config:CreateGrpcClientImplConfig = { grpcJsClient: this.grpcClient} 
        var impl = createGrpcClientImpl(config)
        this.client = createServiceClient(impl)
    };

    getOrderbook = (request: GetOrderBookRequest): Promise<GetOrderbookResponse> => {
        return this.client.getOrderbook(request)
    }

    getOrderbookStream = (request: GetOrderBookRequest): Promise<AsyncGenerator< GetOrderbooksStreamResponse>> => {
        return this.client.getOrderbooksStream(request)
    }

    getMarkets = (request: GetMarketsRequest): Promise<GetMarketsResponse> => {
        return this.client.getMarkets(request)
    }

    close = () => {
        this.grpcClient.close()
    }

}