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
    PostSubmitRequestEntry,
    PostSubmitResponse,
    SubmitStrategy,
    TradeSwapResponse,
    TransactionMessage,
    GetTokenAccountsResponse,
    GetTokenAccountsRequest,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetNewRaydiumPoolsRequest,
    GetNewRaydiumPoolsResponse,
    GetTransactionRequest,
    GetTransactionResponse,
    GetRateLimitRequest,
    GetRateLimitResponse,
    GetPriorityFeeRequest,
    GetPriorityFeeResponse,
    PostJupiterSwapInstructionsRequest,
    PostJupiterSwapInstructionsResponse,
    GetRaydiumPoolReserveRequest,
    GetRaydiumPoolReserveResponse,
    GetBundleTipRequest,
    GetBundleTipResponse,
    PostRaydiumSwapInstructionsRequest,
    PostRaydiumSwapInstructionsResponse,
    GetPumpFunNewTokensStreamRequest,
    GetPumpFunNewTokensStreamResponse,
    GetPumpFunSwapsStreamRequest,
    GetPumpFunSwapsStreamResponse,
    PostPumpFunSwapRequest,
    PostPumpFunSwapResponse,
    GetPumpFunQuotesRequest,
    GetPumpFunQuotesResponse,
    GetRecentBlockHashRequestV2,
    GetRecentBlockHashResponseV2,
    GetRaydiumCPMMQuotesRequest,
    GetRaydiumCPMMQuotesResponse,
    GetRaydiumCLMMQuotesResponse,
    GetRaydiumCLMMQuotesRequest,
    PostRaydiumCPMMSwapResponse,
    PostRaydiumCPMMSwapRequest,
    PostPumpFunSwapRequestSol,
    GetNewRaydiumPoolsByTransactionRequest,
    GetPriorityFeeByProgramRequest,
    GetPriorityFeeByProgramResponse,
    GetNewRaydiumPoolsByTransactionResponse,
    GetRaydiumCLMMPoolsResponse,
    PostSubmitSnipeRequest,
    PostSubmitSnipeResponse,
    PostSubmitPaladinRequest,
    GetLeaderScheduleResponse,
    GetLeaderScheduleRequest,
} from "../proto/messages/api/index"
import { Api } from "../proto/services/api/index"
import {
    signTx,
    signTxMessage,
    SubmitTransactionResponse,
    txToBase64,
} from "../utils/transaction"
import { Keypair } from "@solana/web3.js"
import base58 from "bs58"
import { RpcReturnType } from "../proto/runtime/rpc"
import { Type as GetZetaTransactionStreamRequest } from "../proto/messages/api/GetZetaTransactionStreamRequest"

/* eslint-disable */

export abstract class BaseProvider implements Api {
    protected privateKey?: Keypair
    protected authHeader: string

    protected constructor(authHeader: string, privateKey?: string) {
        this.authHeader = authHeader
        if (privateKey) {
            this.privateKey = Keypair.fromSecretKey(base58.decode(privateKey))
        }
    }

    getRateLimit(
        request: GetRateLimitRequest
    ): RpcReturnType<Promise<GetRateLimitResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getTransaction(
        request: GetTransactionRequest
    ): RpcReturnType<Promise<GetTransactionResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumPoolReserve(
        request: GetRaydiumPoolReserveRequest
    ): RpcReturnType<Promise<GetRaydiumPoolReserveResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumCLMMPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMPoolsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumCPMMQuotes(
        request: GetRaydiumCPMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCPMMQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumCLMMQuotes(
        request: GetRaydiumCLMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getPumpFunQuotes(
        request: GetPumpFunQuotesRequest
    ): RpcReturnType<Promise<GetPumpFunQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postJupiterSwapInstructions(
        request: PostJupiterSwapInstructionsRequest
    ): RpcReturnType<Promise<PostJupiterSwapInstructionsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumCLMMRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumCPMMSwap(
        request: PostRaydiumCPMMSwapRequest
    ): RpcReturnType<Promise<PostRaydiumCPMMSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumCLMMSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postPumpFunSwap(
        request: PostPumpFunSwapRequest
    ): RpcReturnType<Promise<PostPumpFunSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postPumpFunSwapSol(
        request: PostPumpFunSwapRequestSol
    ): RpcReturnType<Promise<PostPumpFunSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumSwapInstructions(
        request: PostRaydiumSwapInstructionsRequest
    ): RpcReturnType<Promise<PostRaydiumSwapInstructionsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getTokenAccounts(
        request: GetTokenAccountsRequest
    ): RpcReturnType<Promise<GetTokenAccountsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    abstract close(): void

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        throw new Error("Not implemented")
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        throw new Error("Not implemented")
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    postSubmitSnipeV2(
        request: PostSubmitSnipeRequest
    ): Promise<PostSubmitSnipeResponse> {
        throw new Error("Not implemented")
    }

    postSubmitPaladinV2(
        request: PostSubmitPaladinRequest
    ): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        throw new Error("Not implemented")
    }

    postSubmitV2(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        throw new Error("Not implemented")
    }

    getPriorityFee(
        request: GetPriorityFeeRequest
    ): Promise<GetPriorityFeeResponse> {
        throw new Error("Not implemented")
    }

    getPriorityFeeByProgram(
        request: GetPriorityFeeByProgramRequest
    ): RpcReturnType<Promise<GetPriorityFeeByProgramResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHashV2(
        request: GetRecentBlockHashRequestV2
    ): Promise<GetRecentBlockHashResponseV2> {
        throw new Error("Not implemented")
    }

    getLeaderSchedule(
        request: GetLeaderScheduleRequest
    ): Promise<GetLeaderScheduleResponse> {
        throw new Error("Not implemented")
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        throw new Error("Not implemented")
    }

    private requirePrivateKey() {
        if (!this.privateKey) {
            throw new Error("private key not provided")
        }
    }

    public signAndSubmitTx(
        transactionMessage: TransactionMessage | undefined,
        skipPreFlight: boolean,
        isCleanup = false,
        frontRunningProtection: boolean
    ): Promise<PostSubmitResponse> {
        this.requirePrivateKey()

        if (transactionMessage == undefined) {
            throw Error("transaction message was undefined")
        }

        const signedTx = signTx(transactionMessage.content, this.privateKey!)

        return this.postSubmit({
            transaction: {
                content: txToBase64(signedTx),
                isCleanup: isCleanup,
            },
            skipPreFlight,
            frontRunningProtection: frontRunningProtection,
        })
    }

    public async signAndSubmitSnipeTx(
        entries: TransactionMessage[],
        useStakedRPCs: boolean = false
    ): Promise<PostSubmitSnipeResponse> {
        this.requirePrivateKey()

        if (!entries || entries.length === 0) {
            throw Error("entries array was empty or undefined")
        }

        const signedEntries = entries.map((entry) => {
            if (!entry) {
                throw Error("entry was undefined")
            }
            return {
                transaction: {
                    content: txToBase64(
                        signTx(entry.content, this.privateKey!)
                    ),
                    isCleanup: false,
                },
                skipPreFlight: true,
            }
        })

        const request: PostSubmitSnipeRequest = {
            entries: signedEntries,
            useStakedRPCs: useStakedRPCs,
        }

        return this.postSubmitSnipeV2(request)
    }

    public async signAndSubmitPaladinTx(
        transactionMessage: TransactionMessage | undefined,
        skipPreFlight: boolean = false,
        isCleanup: boolean = false,
        frontRunningProtection: boolean = false
    ): Promise<PostSubmitResponse> {
        this.requirePrivateKey()

        if (transactionMessage === undefined) {
            throw Error("transaction message was undefined")
        }

        const signedTx = signTx(transactionMessage.content, this.privateKey!)

        const request: PostSubmitPaladinRequest = {
            transaction: {
                content: txToBase64(signedTx),
            },
        }

        return this.postSubmitPaladinV2(request)
    }

    private signAndSubmitTxs(
        transactionMessages: TransactionMessage[],
        submitStrategy: SubmitStrategy,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        this.requirePrivateKey()

        if (transactionMessages == undefined) {
            throw Error("transaction was undefined")
        }

        const entries = new Array<PostSubmitRequestEntry>()
        for (const transactionMessage of transactionMessages) {
            entries.push({
                transaction: signTxMessage(
                    transactionMessage,
                    this.privateKey!
                ),
                skipPreFlight: skipPreFlight,
            })
        }

        return this.postSubmitBatch({
            entries: entries,
            submitStrategy: submitStrategy,
        })
    }

    getPumpFunNewTokensStream = (
        request: GetPumpFunNewTokensStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunNewTokensStreamResponse>> => {
        throw new Error("Not implemented")
    }

    getPumpFunSwapsStream = (
        request: GetPumpFunSwapsStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunSwapsStreamResponse>> => {
        throw new Error("Not implemented")
    }

    getSwapsStream(
        request: GetSwapsStreamRequest
    ): Promise<AsyncGenerator<GetSwapsStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPricesStream(
        request: GetPricesStreamRequest
    ): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPriorityFeeStream(
        request: GetPriorityFeeRequest
    ): Promise<AsyncGenerator<GetPriorityFeeResponse>> {
        throw new Error("Not implemented")
    }

    getQuotesStream(
        request: GetQuotesStreamRequest
    ): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getRecentBlockHashStream(
        request: GetRecentBlockHashRequest
    ): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        throw new Error("Not implemented")
    }

    getBlockStream(
        request: GetBlockStreamRequest
    ): Promise<AsyncGenerator<GetBlockStreamResponse>> {
        throw new Error("Method not implemented.")
    }

    getNewRaydiumPoolsStream(
        request: GetNewRaydiumPoolsRequest
    ): Promise<AsyncGenerator<GetNewRaydiumPoolsResponse>> {
        throw new Error("Not implemented")
    }

    getNewRaydiumPoolsByTransactionStream(
        request: GetNewRaydiumPoolsByTransactionRequest
    ): RpcReturnType<
        AsyncGenerator<GetNewRaydiumPoolsByTransactionResponse, any, unknown>,
        []
    > {
        throw new Error("Method not implemented.")
    }

    getPoolReservesStream(
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getBundleTipStream(
        request: GetBundleTipRequest
    ): Promise<AsyncGenerator<GetBundleTipResponse>> {
        throw new Error("Not implemented")
    }

    getPriorityFeeByProgramStream(
        request: GetPriorityFeeByProgramRequest
    ): Promise<AsyncGenerator<GetPriorityFeeByProgramResponse>> {
        throw new Error("Not implemented")
    }

    // these following cancel functions are only used by the websocket provider. Streams are supported by websockets or
    // by GRPC calls, but the cancellation for GRPC streams is handled on the server side.

    cancelAllGetOrderbooksStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelAllGetSwapsStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetOrderbooksStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelGetSwapsStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetTradesStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetTradesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetTickersStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetTickersStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetOrderStatusStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetOrderStatusStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetRecentBlockhashStream = async (): Promise<
        Awaited<boolean>[]
    > => {
        throw new Error("Not implemented")
    }

    cancelGetRecentBlockhashStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetPriorityFeeStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetPriorityFeeStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetQuotesStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetQuotesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetPoolReservesStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetPoolReservesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetNewRaydiumPoolsStream = async (): Promise<
        Awaited<boolean>[]
    > => {
        throw new Error("Not implemented")
    }

    cancelGetNewRaydiumPoolsStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetBundleTipStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetBundleTipStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    postSubmitMineOre(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }
}
