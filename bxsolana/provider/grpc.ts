import { MAINNET_API_GRPC_PORT, MAINNET_API_NY_GRPC } from "../utils/constants"
import * as grpc from "@grpc/grpc-js"
import { Client } from "@grpc/grpc-js"
import {
    createGrpcClientImpl,
    CreateGrpcClientImplConfig,
} from "@pbkit/grpc-client"
import {
    GetBlockStreamRequest,
    GetBlockStreamResponse,
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
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    TradeSwapResponse,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    GetNewRaydiumPoolsRequest,
    GetTransactionRequest,
    GetTransactionResponse,
    GetRateLimitResponse,
    GetRateLimitRequest,
    GetNewRaydiumPoolsResponse,
    GetPriorityFeeRequest,
    GetPriorityFeeResponse,
    PostJupiterSwapInstructionsRequest,
    PostJupiterSwapInstructionsResponse,
    GetRaydiumPoolReserveRequest,
    GetRaydiumPoolReserveResponse,
    GetBundleTipResponse,
    GetBundleTipRequest,
    GetPumpFunNewTokensStreamResponse,
    GetPumpFunNewTokensStreamRequest,
    GetPumpFunSwapsStreamResponse,
    GetPumpFunSwapsStreamRequest,
    PostPumpFunSwapRequest,
    PostPumpFunSwapResponse,
    GetPumpFunQuotesRequest,
    GetPumpFunQuotesResponse,
    GetRecentBlockHashRequestV2,
    GetRecentBlockHashResponseV2,
    PostRaydiumCPMMSwapRequest,
    PostRaydiumCPMMSwapResponse,
    GetRaydiumCPMMQuotesRequest,
    GetRaydiumCPMMQuotesResponse,
    GetRaydiumCLMMPoolsRequest,
    GetRaydiumCLMMPoolsResponse,
    GetRaydiumCLMMQuotesRequest,
    GetRaydiumCLMMQuotesResponse,
    GetNewRaydiumPoolsByTransactionResponse,
    GetNewRaydiumPoolsByTransactionRequest,
    GetPriorityFeeByProgramRequest,
    GetPriorityFeeByProgramResponse,
    PostPumpFunSwapRequestSol,
    PostSubmitSnipeResponse,
    PostSubmitSnipeRequest,
    PostSubmitPaladinRequest,
    GetLeaderScheduleRequest,
    GetLeaderScheduleResponse,
    GetPumpFunNewAmmPoolStreamResponse,
    GetPumpFunNewAmmPoolStreamRequest,
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
        address = `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
        useTls: boolean,
        options: grpc.ClientOptions = {
            "grpc.keepalive_time_ms": 10000,
            // 10s keep alive so connection isn't closed from lack of activity
            "grpc.keepalive_timeout_ms": 5000, // 5s allowance for keepalive to respond
            "grpc.max_receive_message_length": 1024 * 1024 * 16,
        }
    ) {
        super(authHeader, privateKey)

        const metaCallback = (
            options: CallMetadataOptions,
            cb: (err: Error | null, metadata?: grpc.Metadata) => void
        ) => {
            const meta = new grpc.Metadata()
            meta.add("Authorization", authHeader)
            meta.add("x-sdk", process.env.PACKAGE_NAME ?? "")
            meta.add("x-sdk-version", process.env.PACKAGE_VERSION ?? "")
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

    getRateLimit(
        request: GetRateLimitRequest
    ): RpcReturnType<Promise<GetRateLimitResponse>, []> {
        return this.client.getRateLimit(request)
    }

    getTransaction(
        request: GetTransactionRequest
    ): RpcReturnType<Promise<GetTransactionResponse>, []> {
        return this.client.getTransaction(request)
    }

    getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        return this.client.getJupiterPrices(request)
    }

    getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        return this.client.getJupiterQuotes(request)
    }

    postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        return this.client.postJupiterRouteSwap(request)
    }

    postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        return this.client.postJupiterSwap(request)
    }

    postJupiterSwapInstructions(
        request: PostJupiterSwapInstructionsRequest
    ): RpcReturnType<Promise<PostJupiterSwapInstructionsResponse>, []> {
        return this.client.postJupiterSwapInstructions(request)
    }

    postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        return this.client.postRaydiumRouteSwap(request)
    }

    postRaydiumCLMMRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        return this.client.postRaydiumRouteSwap(request)
    }

    postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        return this.client.postRaydiumSwap(request)
    }

    postRaydiumCPMMSwap(
        request: PostRaydiumCPMMSwapRequest
    ): RpcReturnType<Promise<PostRaydiumCPMMSwapResponse>, []> {
        return this.client.postRaydiumCPMMSwap(request)
    }

    postRaydiumCLMMSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        return this.client.postRaydiumCLMMSwap(request)
    }

    getRaydiumPoolReserve(
        request: GetRaydiumPoolReserveRequest
    ): RpcReturnType<Promise<GetRaydiumPoolReserveResponse>, []> {
        return this.client.getRaydiumPoolReserve(request)
    }

    getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        return this.client.getRaydiumPools(request)
    }

    getRaydiumCLMMPools(
        request: GetRaydiumCLMMPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMPoolsResponse>, []> {
        return this.client.getRaydiumCLMMPools(request)
    }

    getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        return this.client.getRaydiumPrices(request)
    }

    getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        return this.client.getRaydiumQuotes(request)
    }

    getRaydiumCPMMQuotes(
        request: GetRaydiumCPMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCPMMQuotesResponse>, []> {
        return this.client.getRaydiumCPMMQuotes(request)
    }

    getRaydiumCLMMQuotes(
        request: GetRaydiumCLMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMQuotesResponse>, []> {
        return this.client.getRaydiumCLMMQuotes(request)
    }

    getPumpFunQuotes(
        request: GetPumpFunQuotesRequest
    ): RpcReturnType<Promise<GetPumpFunQuotesResponse>, []> {
        return this.client.getPumpFunQuotes(request)
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        return this.client.getServerTime(request)
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.client.postSubmit(request)
    }

    postSubmitSnipe(
        request: PostSubmitSnipeRequest
    ): Promise<PostSubmitSnipeResponse> {
        return this.client.postSubmitSnipeV2(request)
    }

    postSubmitPaladinV2(request: PostSubmitPaladinRequest): Promise<PostSubmitResponse> {
        return this.client.postSubmitPaladinV2(request)
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.client.postSubmitBatch(request)
    }

    postSubmitV2(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.client.postSubmitV2(request)
    }

    postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.client.postSubmitBatchV2(request)
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.client.getPrice(request)
    }

    getPricesStream(
        request: GetPricesStreamRequest
    ): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        return this.client.getPricesStream(request)
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        return this.client.getRecentBlockHash(request)
    }

    getRecentBlockHashV2(
        request: GetRecentBlockHashRequestV2
    ): Promise<GetRecentBlockHashResponseV2> {
        return this.client.getRecentBlockHashV2(request)
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.client.getPools(request)
    }

    postPumpFunSwap(
        request: PostPumpFunSwapRequest
    ): Promise<PostPumpFunSwapResponse> {
        return this.client.postPumpFunSwap(request)
    }

    postPumpFunSwapSol(
        request: PostPumpFunSwapRequestSol
    ): Promise<PostPumpFunSwapResponse> {
        return this.client.postPumpFunSwapSol(request)
    }

    getPriorityFee(
        request: GetPriorityFeeRequest
    ): Promise<GetPriorityFeeResponse> {
        return this.client.getPriorityFee(request)
    }

    getPriorityFeeByProgram(
        request: GetPriorityFeeByProgramRequest
    ): Promise<GetPriorityFeeByProgramResponse> {
        return this.client.getPriorityFeeByProgram(request)
    }

    getLeaderSchedule(
        request: GetLeaderScheduleRequest
    ): Promise<GetLeaderScheduleResponse> {
        return this.client.getLeaderSchedule(request)
    }

    // streams
    getPriorityFeeByProgramStream(
        request: GetPriorityFeeByProgramRequest
    ): Promise<AsyncGenerator<GetPriorityFeeByProgramResponse>> {
        return this.client.getPriorityFeeByProgramStream(request)
    }

    getPumpFunNewTokensStream = (
        request: GetPumpFunNewTokensStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunNewTokensStreamResponse>> => {
        return this.client.getPumpFunNewTokensStream(request)
    }

    getPumpFunNewAmmPoolStream = (
        request: GetPumpFunNewAmmPoolStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunNewAmmPoolStreamResponse>> => {
        return this.client.getPumpFunNewAmmPoolStream(request)
    }

    getPumpFunSwapsStream = (
        request: GetPumpFunSwapsStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunSwapsStreamResponse>> => {
        return this.client.getPumpFunSwapsStream(request)
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

    getNewRaydiumPoolsStream(
        request: GetNewRaydiumPoolsRequest
    ): Promise<AsyncGenerator<GetNewRaydiumPoolsResponse>> {
        return this.client.getNewRaydiumPoolsStream(request)
    }

    getNewRaydiumPoolsByTransactionStream(
        request: GetNewRaydiumPoolsByTransactionRequest
    ): Promise<AsyncGenerator<GetNewRaydiumPoolsByTransactionResponse>> {
        return this.client.getNewRaydiumPoolsByTransactionStream(request)
    }

    getPriorityFeeStream(
        request: GetPriorityFeeRequest
    ): Promise<AsyncGenerator<GetPriorityFeeResponse>> {
        return this.client.getPriorityFeeStream(request)
    }

    getBundleTipStream(
        request: GetBundleTipRequest
    ): Promise<AsyncGenerator<GetBundleTipResponse>> {
        return this.client.getBundleTipStream(request)
    }
}
