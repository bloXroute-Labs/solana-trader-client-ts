import { MAINNET_API_NY_HTTP } from "../utils/constants"
import {
    GetPoolsRequest,
    GetPoolsResponse,
    GetQuotesRequest,
    GetQuotesResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
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
    PostRaydiumSwapInstructionsRequest,
    PostRaydiumSwapInstructionsResponse,
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
    GetPriorityFeeByProgramRequest,
    GetPriorityFeeByProgramResponse,
    PostPumpFunSwapRequestSol,
    PostSubmitSnipeRequest,
    PostSubmitSnipeResponse,
    PostSubmitPaladinRequest,
    GetLeaderScheduleRequest,
    GetLeaderScheduleResponse,
} from "../proto/messages/api"
import { BaseProvider } from "./base"
import { isRpcError, RpcError } from "../utils/error"
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios"
import { RpcReturnType } from "../proto/runtime/rpc"

export class HttpProvider extends BaseProvider {
    private readonly baseUrl: string
    private readonly baseUrlV2: string
    requestConfig: AxiosRequestConfig

    constructor(
        authHeader: string,
        privateKey = "",
        address: string = MAINNET_API_NY_HTTP,
        requestConfig: AxiosRequestConfig = {}
    ) {
        super(authHeader, privateKey)
        this.baseUrl = address + "/api/v1"
        this.baseUrlV2 = address + "/api/v2"
        this.requestConfig = {
            ...requestConfig,
            headers: {
                Authorization: this.authHeader,
                "x-sdk": process.env.PACKAGE_NAME ?? "",
                "x-sdk-version": process.env.PACKAGE_VERSION ?? "",
            },
        }
    }

    close = () => {
        // no need
    }

    getRateLimit(
        request: GetRateLimitRequest
    ): RpcReturnType<Promise<GetRateLimitResponse>, []> {
        const path = `${this.baseUrlV2}/rate-limit`
        return this.get<GetRateLimitResponse>(path)
    }

    getTransaction(
        request: GetTransactionRequest
    ): RpcReturnType<Promise<GetTransactionResponse>, []> {
        const path = `${this.baseUrlV2}/transaction?signature=${request.signature}`
        return this.get<GetTransactionResponse>(path)
    }

    getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        let path = `${this.baseUrlV2}/jupiter/prices`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetJupiterPricesResponse>(path)
    }

    getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/quotes?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}`
        return this.get<GetJupiterQuotesResponse>(path)
    }

    postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/route-swap`
        return this.post<
            PostJupiterRouteSwapRequest,
            PostJupiterRouteSwapResponse
        >(path, request)
    }

    postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/swap`
        return this.post<PostJupiterSwapRequest, PostJupiterSwapResponse>(
            path,
            request
        )
    }

    postJupiterSwapInstructions(
        request: PostJupiterSwapInstructionsRequest
    ): RpcReturnType<Promise<PostJupiterSwapInstructionsResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/swap-instructions`
        return this.post<
            PostJupiterSwapInstructionsRequest,
            PostJupiterSwapInstructionsResponse
        >(path, request)
    }

    postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/route-swap`
        return this.post<
            PostRaydiumRouteSwapRequest,
            PostRaydiumRouteSwapResponse
        >(path, request)
    }

    postRaydiumCLMMRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/clmm-route-swap`
        return this.post<
            PostRaydiumRouteSwapRequest,
            PostRaydiumRouteSwapResponse
        >(path, request)
    }

    postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/swap`
        return this.post<PostRaydiumSwapRequest, PostRaydiumSwapResponse>(
            path,
            request
        )
    }

    postRaydiumCPMMSwap(
        request: PostRaydiumCPMMSwapRequest
    ): RpcReturnType<Promise<PostRaydiumCPMMSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/cpmm-swap`
        return this.post<
            PostRaydiumCPMMSwapRequest,
            PostRaydiumCPMMSwapResponse
        >(path, request)
    }

    postRaydiumCLMMSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/clmm-swap`
        return this.post<PostRaydiumSwapRequest, PostRaydiumSwapResponse>(
            path,
            request
        )
    }

    getRaydiumPoolReserve(
        request: GetRaydiumPoolReserveRequest
    ): RpcReturnType<Promise<GetRaydiumPoolReserveResponse>, []> {
        let path = `${this.baseUrlV2}/raydium/pool-reserves?`
        for (const pair of request.pairsOrAddresses) {
            path += `&pairsOrAddresses=${pair}`
        }
        return this.get<GetRaydiumPoolReserveResponse>(path)
    }

    getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/pools`
        return this.get<GetRaydiumPoolsResponse>(path)
    }

    getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        let path = `${this.baseUrlV2}/raydium/prices`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetRaydiumPricesResponse>(path)
    }

    getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/quotes?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}`
        return this.get<GetRaydiumQuotesResponse>(path)
    }

    getRaydiumCPMMQuotes(
        request: GetRaydiumCPMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCPMMQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/quotes?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}`
        return this.get<GetRaydiumCPMMQuotesResponse>(path)
    }

    getRaydiumCLMMQuotes(
        request: GetRaydiumCLMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/quotes?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}`
        return this.get<GetRaydiumCLMMQuotesResponse>(path)
    }

    getPumpFunQuotes(
        request: GetPumpFunQuotesRequest
    ): RpcReturnType<Promise<GetPumpFunQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/pumpfun/quotes?mintAddress=${request.mintAddress}&quoteType=${request.quoteType}&amount=${request.amount}&bondingCurveAddress=${request.bondingCurveAddress}`
        return this.get<GetPumpFunQuotesResponse>(path)
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return this.get<GetServerTimeResponse>(path)
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request.projects.map((v) => `projects=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetPoolsResponse>(path)
    }

    getRaydiumCLMMPools(
        request: GetRaydiumCLMMPoolsRequest
    ): Promise<GetRaydiumCLMMPoolsResponse> {
        const path = `${this.baseUrl}/market/clmm-pools/pairOrAddress=${request.pairOrAddress}`
        return this.get<GetRaydiumCLMMPoolsResponse>(path)
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return this.get<GetRecentBlockHashResponse>(path)
    }

    getRecentBlockHashV2(
        request: GetRecentBlockHashRequestV2
    ): Promise<GetRecentBlockHashResponseV2> {
        const path = `${this.baseUrlV2}/system/blockhash?offset=${request.offset}`
        return this.get<GetRecentBlockHashResponseV2>(path)
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        let path = `${this.baseUrl}/market/quote?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}&limit=${request.limit}`
        for (const project of request.projects) {
            path += `&projects=${project}`
        }
        return this.get<GetQuotesResponse>(path)
    }

    getPriorityFee(
        request: GetPriorityFeeRequest
    ): Promise<GetPriorityFeeResponse> {
        let path = `${this.baseUrlV2}/system/priority-fee?project=${request.project}`
        if (request.percentile !== undefined) {
            path += `&percentile=${request.percentile}`
        }
        return this.get<GetPriorityFeeResponse>(path)
    }

    getPriorityFeeByProgram(
        request: GetPriorityFeeByProgramRequest
    ): Promise<GetPriorityFeeByProgramResponse> {
        const path = `${
            this.baseUrlV2
        }/system/priority-fee-by-program?programs=${request.programs.join(
            "&programs="
        )}`
        return this.get<GetPriorityFeeByProgramResponse>(path)
    }

    getLeaderSchedule(
        request: GetLeaderScheduleRequest
    ): Promise<GetLeaderScheduleResponse> {
        const path = `${this.baseUrlV2}/system/leader-schedule?maxSlots=${request.maxSlots}`
        return this.get<GetLeaderScheduleResponse>(path)
    }

    postRaydiumSwapInstructions(
        request: PostRaydiumSwapInstructionsRequest
    ): Promise<PostRaydiumSwapInstructionsResponse> {
        const path = `${this.baseUrlV2}/raydium/swap-instructions`
        return this.post<
            PostRaydiumSwapInstructionsRequest,
            PostRaydiumSwapInstructionsResponse
        >(path, request)
    }

    postPumpFunSwap(
        request: PostPumpFunSwapRequest
    ): Promise<PostPumpFunSwapResponse> {
        const path = `${this.baseUrlV2}/pumpfun/swap`
        return this.post<PostPumpFunSwapRequest, PostPumpFunSwapResponse>(
            path,
            request
        )
    }

    postPumpFunSwapSol(
        request: PostPumpFunSwapRequestSol
    ): Promise<PostPumpFunSwapResponse> {
        const path = `${this.baseUrlV2}/pumpfun/swap-sol`
        return this.post<PostPumpFunSwapRequestSol, PostPumpFunSwapResponse>(
            path,
            request
        )
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrl}/trade/submit`
        return this.post<PostSubmitRequest, PostSubmitResponse>(path, request)
    }

    postSubmitSnipeV2(
        request: PostSubmitSnipeRequest
    ): Promise<PostSubmitSnipeResponse> {
        const path = `${this.baseUrlV2}/submit-snipe`
        return this.post<PostSubmitSnipeRequest, PostSubmitSnipeResponse>(
            path,
            request
        )
    }

    postSubmitPaladinV2(
        request: PostSubmitPaladinRequest
    ): Promise<PostSubmitResponse> {
        const path = `${this.baseUrlV2}/submit-paladin`
        return this.post<PostSubmitPaladinRequest, PostSubmitResponse>(
            path,
            request
        )
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrl}/trade/submit-batch`
        return this.post<PostSubmitBatchRequest, PostSubmitBatchResponse>(
            path,
            request
        )
    }

    postSubmitV2(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrlV2}/submit`
        return this.post<PostSubmitRequest, PostSubmitResponse>(path, request)
    }

    postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrlV2}/submit-batch`
        return this.post<PostSubmitBatchRequest, PostSubmitBatchResponse>(
            path,
            request
        )
    }

    private async get<T>(path: string): Promise<T> {
        try {
            const response = await axios.get(path, this.requestConfig)
            return this.handleResponse<T>(response)
        } catch (e) {
            this.handleError(e)
        }
    }

    private async post<T, R>(path: string, data: T): Promise<R> {
        try {
            const headers: RawAxiosRequestHeaders = {
                ...this.requestConfig.headers,
            }
            headers["Content-Type"] = "application/json"

            const response = await axios({
                ...this.requestConfig,
                url: path,
                method: "POST",
                data,
                headers,
            })
            return this.handleResponse<R>(response)
        } catch (e) {
            this.handleError(e)
        }
    }

    handleError(e: unknown): never {
        if (e instanceof axios.AxiosError) {
            if (e.response) {
                let data = e.response.data
                if (data instanceof Object) {
                    data = JSON.stringify(data)
                }
                throw new Error(
                    `error code [${e.response.status}] received: ${data}`
                )
            } else if (e.request) {
                throw new Error(
                    `could not complete request: [${e.name}/${e.code}]: ${e.message}`
                )
            }
            throw new Error(
                `unknown axios error: [${e.name}/${e.code}]: ${e.message}`
            )
        }
        throw e
    }

    handleResponse<T>(response: AxiosResponse): T {
        if (response.status !== 200) {
            throw new Error(
                `error code [${response.status}] received: ${JSON.stringify(
                    response.data
                )}`
            )
        }

        if (isRpcError(response)) {
            throw new Error((response.data as RpcError).message)
        }

        return response.data as unknown as T
    }
}
