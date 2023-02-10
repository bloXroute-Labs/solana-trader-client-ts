import {
    MAINNET_API_GRPC_HOST,
    MAINNET_API_GRPC_PORT,
} from "../utils/constants"
import * as grpc from "@grpc/grpc-js"
import { Client } from "@grpc/grpc-js"
import {
    createGrpcClientImpl,
    CreateGrpcClientImplConfig,
} from "@pbkit/grpc-client"
import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetBlockStreamRequest,
    GetBlockStreamResponse,
    GetMarketDepthRequest,
    GetMarketDepthResponse,
    GetMarketDepthsRequest,
    GetMarketDepthsStreamResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookRequest,
    GetOrderbookResponse,
    GetOrderbooksRequest,
    GetOrderbooksStreamResponse,
    GetOrderStatusStreamRequest,
    GetOrderStatusStreamResponse,
    GetPerpOrderbookRequest,
    GetPerpOrderbookResponse,
    GetPerpOrderbooksRequest,
    GetPerpOrderbooksStreamResponse,
    GetPoolReservesStreamRequest,
    GetPoolReservesStreamResponse,
    GetPoolsRequest,
    GetPoolsResponse,
    GetPriceRequest,
    GetPriceResponse,
    GetPricesStreamRequest,
    GetPricesStreamResponse,
    GetQuotesRequest,
    GetQuotesResponse,
    GetQuotesStreamRequest,
    GetQuotesStreamResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
    GetSwapsStreamRequest,
    GetSwapsStreamResponse,
    GetTickersRequest,
    GetTickersResponse,
    GetTickersStreamResponse,
    GetTradesRequest,
    GetTradesResponse,
    GetTradesStreamResponse,
    GetUnsettledRequest,
    GetUnsettledResponse,
    PostCancelAllRequest,
    PostCancelAllResponse,
    PostCancelByClientOrderIDRequest,
    PostCancelOrderRequest,
    PostCancelOrderResponse,
    PostOrderRequest,
    PostOrderResponse,
    PostReplaceOrderRequest,
    PostSettleRequest,
    PostSettleResponse,
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    RouteTradeSwapRequest,
    TradeSwapRequest,
    TradeSwapResponse,
} from "../proto/messages/api"
import { createServiceClient, Service } from "../proto/services/api/Api"
import { BaseProvider } from "./base"
import { CallMetadataOptions } from "@grpc/grpc-js/build/src/call-credentials"
import { ConnectionOptions } from "tls"
import { RpcReturnType } from "../proto/runtime/rpc"

// built-in grpc.credentials.createInsecure() doesn't allow composition
class insecureChannel extends grpc.ChannelCredentials {
    constructor(callCredentials?: grpc.CallCredentials) {
        super(callCredentials)
    }

    compose(callCredentials: grpc.CallCredentials) {
        const combinedCallCredentials =
            this.callCredentials.compose(callCredentials)
        return new insecureChannel(combinedCallCredentials)
    }

    _getConnectionOptions(): ConnectionOptions | null {
        return null
    }
    _isSecure(): boolean {
        return false
    }
    _equals(other: grpc.ChannelCredentials): boolean {
        return other instanceof insecureChannel
    }
}

export class GrpcProvider extends BaseProvider {
    private client: Service
    private grpcClient: Client

    constructor(
        authHeader: string,
        privateKey = "",
        address = `${MAINNET_API_GRPC_HOST}:${MAINNET_API_GRPC_PORT}`,
        useTls: boolean,
        options: grpc.ClientOptions = {
            "grpc.keepalive_time_ms": 10000, // 10s keep alive so connection isn't closed from lack of activity
            "grpc.keepalive_timeout_ms": 5000, // 5s allowance for keepalive to respond
        }
    ) {
        super(authHeader, privateKey)
        const metaCallback = (
            options: CallMetadataOptions,
            cb: (err: Error | null, metadata?: grpc.Metadata) => void
        ) => {
            const meta = new grpc.Metadata()
            meta.add("Authorization", authHeader)
            cb(null, meta)
        }

        let credentials: grpc.ChannelCredentials

        if (!useTls) {
            // testnet or local
            credentials = grpc.credentials.combineChannelCredentials(
                new insecureChannel(),
                grpc.credentials.createFromMetadataGenerator(metaCallback)
            )
        } else {
            // mainnet
            credentials = grpc.credentials.combineChannelCredentials(
                grpc.credentials.createSsl(),
                grpc.credentials.createFromMetadataGenerator(metaCallback)
            )
        }

        this.grpcClient = new Client(address, credentials, options)

        const configGrpc: CreateGrpcClientImplConfig = {
            grpcJsClient: this.grpcClient,
        }
        const impl = createGrpcClientImpl(configGrpc)
        this.client = createServiceClient(impl)
    }

    close = () => {
        this.grpcClient.close()
    }

    getOrderbook = (
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> => {
        return this.client.getOrderbook(request)
    }

    getMarketDepth(
        request: GetMarketDepthRequest
    ): Promise<GetMarketDepthResponse> {
        return this.client.getMarketDepth(request)
    }

    getMarkets = (request: GetMarketsRequest): Promise<GetMarketsResponse> => {
        return this.client.getMarkets(request)
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        return this.client.getTickers(request)
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        return this.client.getTrades(request)
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        return this.client.getServerTime(request)
    }

    getOpenOrders(
        request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        return this.client.getOpenOrders(request)
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        return this.client.getUnsettled(request)
    }

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        return this.client.getAccountBalance(request)
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.client.postOrder(request)
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.client.postSubmit(request)
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.client.postSubmitBatch(request)
    }

    postCancelOrder(
        request: PostCancelOrderRequest
    ): Promise<PostCancelOrderResponse> {
        return this.client.postCancelOrder(request)
    }

    postCancelByClientOrderID(
        request: PostCancelByClientOrderIDRequest
    ): Promise<PostCancelOrderResponse> {
        return this.client.postCancelByClientOrderID(request)
    }

    postCancelAll(
        request: PostCancelAllRequest
    ): Promise<PostCancelAllResponse> {
        return this.client.postCancelAll(request)
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        return this.client.postSettle(request)
    }

    postReplaceByClientOrderID(
        request: PostOrderRequest
    ): Promise<PostOrderResponse> {
        return this.client.postReplaceByClientOrderID(request)
    }

    postReplaceOrder(
        request: PostReplaceOrderRequest
    ): Promise<PostOrderResponse> {
        return this.client.postReplaceOrder(request)
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.client.getPrice(request)
    }

    getPricesStream(
        request: GetPricesStreamRequest
    ): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        return this.client.getPricesStream(request)
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.client.getPools(request)
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.client.getQuotes(request)
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        return this.client.postTradeSwap(request)
    }

    postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        return this.client.postRouteTradeSwap(request)
    }

    getPerpOrderbook(
        request: GetPerpOrderbookRequest
    ): RpcReturnType<Promise<GetPerpOrderbookResponse>, []> {
        return this.client.getPerpOrderbook(request)
    }

    // streams
    getOrderbooksStream = (
        request: GetOrderbooksRequest
    ): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        return this.client.getOrderbooksStream(request)
    }

    getMarketDepthsStream = (
        request: GetMarketDepthsRequest
    ): Promise<AsyncGenerator<GetMarketDepthsStreamResponse>> => {
        return this.client.getMarketDepthsStream(request)
    }

    getTickersStream(
        request: GetTickersRequest
    ): Promise<AsyncGenerator<GetTickersStreamResponse>> {
        return this.client.getTickersStream(request)
    }

    getTradesStream(
        request: GetTradesRequest
    ): Promise<AsyncGenerator<GetTradesStreamResponse>> {
        return this.client.getTradesStream(request)
    }

    getOrderStatusStream(
        request: GetOrderStatusStreamRequest
    ): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> {
        return this.client.getOrderStatusStream(request)
    }
    getPoolReservesStream(
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        return this.client.getPoolReservesStream(request)
    }

    getQuotesStream(
        request: GetQuotesStreamRequest
    ): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        return this.client.getQuotesStream(request)
    }

    getRecentBlockHashStream(
        request: GetRecentBlockHashRequest
    ): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        return this.client.getRecentBlockHashStream(request)
    }

    getSwapsStream(
        request: GetSwapsStreamRequest
    ): Promise<AsyncGenerator<GetSwapsStreamResponse>> {
        return this.client.getSwapsStream(request)
    }

    getBlockStream(
        request: GetBlockStreamRequest
    ): Promise<AsyncGenerator<GetBlockStreamResponse>> {
        return this.client.getBlockStream(request)
    }

    getPerpOrderbooksStream = (
        request: GetPerpOrderbooksRequest
    ): Promise<AsyncGenerator<GetPerpOrderbooksStreamResponse>> => {
        return this.client.getPerpOrderbooksStream(request)
    }
}
