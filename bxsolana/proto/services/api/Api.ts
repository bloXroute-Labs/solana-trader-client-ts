import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc";
import {
  Type as GetRateLimitRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/api/GetRateLimitRequest";
import {
  Type as GetRateLimitResponse,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/api/GetRateLimitResponse";
import {
  Type as GetTransactionRequest,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/api/GetTransactionRequest";
import {
  Type as GetTransactionResponse,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/api/GetTransactionResponse";
import {
  Type as PostSubmitRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/api/PostSubmitRequest";
import {
  Type as PostSubmitResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/api/PostSubmitResponse";
import {
  Type as PostSubmitBatchRequest,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
  encodeJson as encodeJson_6,
} from "../../messages/api/PostSubmitBatchRequest";
import {
  Type as PostSubmitBatchResponse,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
  encodeJson as encodeJson_7,
} from "../../messages/api/PostSubmitBatchResponse";
import {
  Type as PostSubmitSnipeRequest,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
  encodeJson as encodeJson_8,
} from "../../messages/api/PostSubmitSnipeRequest";
import {
  Type as PostSubmitSnipeResponse,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
  encodeJson as encodeJson_9,
} from "../../messages/api/PostSubmitSnipeResponse";
import {
  Type as PostSubmitPaladinRequest,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
  encodeJson as encodeJson_10,
} from "../../messages/api/PostSubmitPaladinRequest";
import {
  Type as GetRaydiumPoolsRequest,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
  encodeJson as encodeJson_11,
} from "../../messages/api/GetRaydiumPoolsRequest";
import {
  Type as GetRaydiumPoolsResponse,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
  encodeJson as encodeJson_12,
} from "../../messages/api/GetRaydiumPoolsResponse";
import {
  Type as GetRaydiumPoolReserveRequest,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
  encodeJson as encodeJson_13,
} from "../../messages/api/GetRaydiumPoolReserveRequest";
import {
  Type as GetRaydiumPoolReserveResponse,
  encodeBinary as encodeBinary_14,
  decodeBinary as decodeBinary_14,
  encodeJson as encodeJson_14,
} from "../../messages/api/GetRaydiumPoolReserveResponse";
import {
  Type as GetRaydiumQuotesRequest,
  encodeBinary as encodeBinary_15,
  decodeBinary as decodeBinary_15,
  encodeJson as encodeJson_15,
} from "../../messages/api/GetRaydiumQuotesRequest";
import {
  Type as GetRaydiumQuotesResponse,
  encodeBinary as encodeBinary_16,
  decodeBinary as decodeBinary_16,
  encodeJson as encodeJson_16,
} from "../../messages/api/GetRaydiumQuotesResponse";
import {
  Type as GetRaydiumCPMMQuotesRequest,
  encodeBinary as encodeBinary_17,
  decodeBinary as decodeBinary_17,
  encodeJson as encodeJson_17,
} from "../../messages/api/GetRaydiumCPMMQuotesRequest";
import {
  Type as GetRaydiumCPMMQuotesResponse,
  encodeBinary as encodeBinary_18,
  decodeBinary as decodeBinary_18,
  encodeJson as encodeJson_18,
} from "../../messages/api/GetRaydiumCPMMQuotesResponse";
import {
  Type as GetRaydiumPricesRequest,
  encodeBinary as encodeBinary_19,
  decodeBinary as decodeBinary_19,
  encodeJson as encodeJson_19,
} from "../../messages/api/GetRaydiumPricesRequest";
import {
  Type as GetRaydiumPricesResponse,
  encodeBinary as encodeBinary_20,
  decodeBinary as decodeBinary_20,
  encodeJson as encodeJson_20,
} from "../../messages/api/GetRaydiumPricesResponse";
import {
  Type as GetRaydiumCLMMQuotesRequest,
  encodeBinary as encodeBinary_21,
  decodeBinary as decodeBinary_21,
  encodeJson as encodeJson_21,
} from "../../messages/api/GetRaydiumCLMMQuotesRequest";
import {
  Type as GetRaydiumCLMMQuotesResponse,
  encodeBinary as encodeBinary_22,
  decodeBinary as decodeBinary_22,
  encodeJson as encodeJson_22,
} from "../../messages/api/GetRaydiumCLMMQuotesResponse";
import {
  Type as GetRaydiumCLMMPoolsRequest,
  encodeBinary as encodeBinary_23,
  decodeBinary as decodeBinary_23,
  encodeJson as encodeJson_23,
} from "../../messages/api/GetRaydiumCLMMPoolsRequest";
import {
  Type as GetRaydiumCLMMPoolsResponse,
  encodeBinary as encodeBinary_24,
  decodeBinary as decodeBinary_24,
  encodeJson as encodeJson_24,
} from "../../messages/api/GetRaydiumCLMMPoolsResponse";
import {
  Type as PostRaydiumSwapRequest,
  encodeBinary as encodeBinary_25,
  decodeBinary as decodeBinary_25,
  encodeJson as encodeJson_25,
} from "../../messages/api/PostRaydiumSwapRequest";
import {
  Type as PostRaydiumSwapResponse,
  encodeBinary as encodeBinary_26,
  decodeBinary as decodeBinary_26,
  encodeJson as encodeJson_26,
} from "../../messages/api/PostRaydiumSwapResponse";
import {
  Type as PostRaydiumRouteSwapRequest,
  encodeBinary as encodeBinary_27,
  decodeBinary as decodeBinary_27,
  encodeJson as encodeJson_27,
} from "../../messages/api/PostRaydiumRouteSwapRequest";
import {
  Type as PostRaydiumRouteSwapResponse,
  encodeBinary as encodeBinary_28,
  decodeBinary as decodeBinary_28,
  encodeJson as encodeJson_28,
} from "../../messages/api/PostRaydiumRouteSwapResponse";
import {
  Type as PostRaydiumCPMMSwapRequest,
  encodeBinary as encodeBinary_29,
  decodeBinary as decodeBinary_29,
  encodeJson as encodeJson_29,
} from "../../messages/api/PostRaydiumCPMMSwapRequest";
import {
  Type as PostRaydiumCPMMSwapResponse,
  encodeBinary as encodeBinary_30,
  decodeBinary as decodeBinary_30,
  encodeJson as encodeJson_30,
} from "../../messages/api/PostRaydiumCPMMSwapResponse";
import {
  Type as PostRaydiumSwapInstructionsRequest,
  encodeBinary as encodeBinary_31,
  decodeBinary as decodeBinary_31,
  encodeJson as encodeJson_31,
} from "../../messages/api/PostRaydiumSwapInstructionsRequest";
import {
  Type as PostRaydiumSwapInstructionsResponse,
  encodeBinary as encodeBinary_32,
  decodeBinary as decodeBinary_32,
  encodeJson as encodeJson_32,
} from "../../messages/api/PostRaydiumSwapInstructionsResponse";
import {
  Type as GetJupiterQuotesRequest,
  encodeBinary as encodeBinary_33,
  decodeBinary as decodeBinary_33,
  encodeJson as encodeJson_33,
} from "../../messages/api/GetJupiterQuotesRequest";
import {
  Type as GetJupiterQuotesResponse,
  encodeBinary as encodeBinary_34,
  decodeBinary as decodeBinary_34,
  encodeJson as encodeJson_34,
} from "../../messages/api/GetJupiterQuotesResponse";
import {
  Type as GetJupiterPricesRequest,
  encodeBinary as encodeBinary_35,
  decodeBinary as decodeBinary_35,
  encodeJson as encodeJson_35,
} from "../../messages/api/GetJupiterPricesRequest";
import {
  Type as GetJupiterPricesResponse,
  encodeBinary as encodeBinary_36,
  decodeBinary as decodeBinary_36,
  encodeJson as encodeJson_36,
} from "../../messages/api/GetJupiterPricesResponse";
import {
  Type as PostJupiterSwapRequest,
  encodeBinary as encodeBinary_37,
  decodeBinary as decodeBinary_37,
  encodeJson as encodeJson_37,
} from "../../messages/api/PostJupiterSwapRequest";
import {
  Type as PostJupiterSwapResponse,
  encodeBinary as encodeBinary_38,
  decodeBinary as decodeBinary_38,
  encodeJson as encodeJson_38,
} from "../../messages/api/PostJupiterSwapResponse";
import {
  Type as PostJupiterSwapInstructionsRequest,
  encodeBinary as encodeBinary_39,
  decodeBinary as decodeBinary_39,
  encodeJson as encodeJson_39,
} from "../../messages/api/PostJupiterSwapInstructionsRequest";
import {
  Type as PostJupiterSwapInstructionsResponse,
  encodeBinary as encodeBinary_40,
  decodeBinary as decodeBinary_40,
  encodeJson as encodeJson_40,
} from "../../messages/api/PostJupiterSwapInstructionsResponse";
import {
  Type as PostJupiterRouteSwapRequest,
  encodeBinary as encodeBinary_41,
  decodeBinary as decodeBinary_41,
  encodeJson as encodeJson_41,
} from "../../messages/api/PostJupiterRouteSwapRequest";
import {
  Type as PostJupiterRouteSwapResponse,
  encodeBinary as encodeBinary_42,
  decodeBinary as decodeBinary_42,
  encodeJson as encodeJson_42,
} from "../../messages/api/PostJupiterRouteSwapResponse";
import {
  Type as GetPumpFunQuotesRequest,
  encodeBinary as encodeBinary_43,
  decodeBinary as decodeBinary_43,
  encodeJson as encodeJson_43,
} from "../../messages/api/GetPumpFunQuotesRequest";
import {
  Type as GetPumpFunQuotesResponse,
  encodeBinary as encodeBinary_44,
  decodeBinary as decodeBinary_44,
  encodeJson as encodeJson_44,
} from "../../messages/api/GetPumpFunQuotesResponse";
import {
  Type as PostPumpFunSwapRequest,
  encodeBinary as encodeBinary_45,
  decodeBinary as decodeBinary_45,
  encodeJson as encodeJson_45,
} from "../../messages/api/PostPumpFunSwapRequest";
import {
  Type as PostPumpFunSwapResponse,
  encodeBinary as encodeBinary_46,
  decodeBinary as decodeBinary_46,
  encodeJson as encodeJson_46,
} from "../../messages/api/PostPumpFunSwapResponse";
import {
  Type as PostPumpFunSwapRequestSol,
  encodeBinary as encodeBinary_47,
  decodeBinary as decodeBinary_47,
  encodeJson as encodeJson_47,
} from "../../messages/api/PostPumpFunSwapRequestSol";
import {
  Type as GetPoolsRequest,
  encodeBinary as encodeBinary_48,
  decodeBinary as decodeBinary_48,
  encodeJson as encodeJson_48,
} from "../../messages/api/GetPoolsRequest";
import {
  Type as GetPoolsResponse,
  encodeBinary as encodeBinary_49,
  decodeBinary as decodeBinary_49,
  encodeJson as encodeJson_49,
} from "../../messages/api/GetPoolsResponse";
import {
  Type as GetLeaderScheduleRequest,
  encodeBinary as encodeBinary_50,
  decodeBinary as decodeBinary_50,
  encodeJson as encodeJson_50,
} from "../../messages/api/GetLeaderScheduleRequest";
import {
  Type as GetLeaderScheduleResponse,
  encodeBinary as encodeBinary_51,
  decodeBinary as decodeBinary_51,
  encodeJson as encodeJson_51,
} from "../../messages/api/GetLeaderScheduleResponse";
import {
  Type as GetPriceRequest,
  encodeBinary as encodeBinary_52,
  decodeBinary as decodeBinary_52,
  encodeJson as encodeJson_52,
} from "../../messages/api/GetPriceRequest";
import {
  Type as GetPriceResponse,
  encodeBinary as encodeBinary_53,
  decodeBinary as decodeBinary_53,
  encodeJson as encodeJson_53,
} from "../../messages/api/GetPriceResponse";
import {
  Type as GetServerTimeRequest,
  encodeBinary as encodeBinary_54,
  decodeBinary as decodeBinary_54,
  encodeJson as encodeJson_54,
} from "../../messages/api/GetServerTimeRequest";
import {
  Type as GetServerTimeResponse,
  encodeBinary as encodeBinary_55,
  decodeBinary as decodeBinary_55,
  encodeJson as encodeJson_55,
} from "../../messages/api/GetServerTimeResponse";
import {
  Type as GetRecentBlockHashRequest,
  encodeBinary as encodeBinary_56,
  decodeBinary as decodeBinary_56,
  encodeJson as encodeJson_56,
} from "../../messages/api/GetRecentBlockHashRequest";
import {
  Type as GetRecentBlockHashResponse,
  encodeBinary as encodeBinary_57,
  decodeBinary as decodeBinary_57,
  encodeJson as encodeJson_57,
} from "../../messages/api/GetRecentBlockHashResponse";
import {
  Type as GetRecentBlockHashRequestV2,
  encodeBinary as encodeBinary_58,
  decodeBinary as decodeBinary_58,
  encodeJson as encodeJson_58,
} from "../../messages/api/GetRecentBlockHashRequestV2";
import {
  Type as GetRecentBlockHashResponseV2,
  encodeBinary as encodeBinary_59,
  decodeBinary as decodeBinary_59,
  encodeJson as encodeJson_59,
} from "../../messages/api/GetRecentBlockHashResponseV2";
import {
  Type as GetPriorityFeeRequest,
  encodeBinary as encodeBinary_60,
  decodeBinary as decodeBinary_60,
  encodeJson as encodeJson_60,
} from "../../messages/api/GetPriorityFeeRequest";
import {
  Type as GetPriorityFeeResponse,
  encodeBinary as encodeBinary_61,
  decodeBinary as decodeBinary_61,
  encodeJson as encodeJson_61,
} from "../../messages/api/GetPriorityFeeResponse";
import {
  Type as GetPriorityFeeByProgramRequest,
  encodeBinary as encodeBinary_62,
  decodeBinary as decodeBinary_62,
  encodeJson as encodeJson_62,
} from "../../messages/api/GetPriorityFeeByProgramRequest";
import {
  Type as GetPriorityFeeByProgramResponse,
  encodeBinary as encodeBinary_63,
  decodeBinary as decodeBinary_63,
  encodeJson as encodeJson_63,
} from "../../messages/api/GetPriorityFeeByProgramResponse";
import {
  Type as GetTokenAccountsRequest,
  encodeBinary as encodeBinary_64,
  decodeBinary as decodeBinary_64,
  encodeJson as encodeJson_64,
} from "../../messages/api/GetTokenAccountsRequest";
import {
  Type as GetTokenAccountsResponse,
  encodeBinary as encodeBinary_65,
  decodeBinary as decodeBinary_65,
  encodeJson as encodeJson_65,
} from "../../messages/api/GetTokenAccountsResponse";
import {
  Type as GetBlockStreamRequest,
  encodeBinary as encodeBinary_66,
  decodeBinary as decodeBinary_66,
  encodeJson as encodeJson_66,
} from "../../messages/api/GetBlockStreamRequest";
import {
  Type as GetBlockStreamResponse,
  encodeBinary as encodeBinary_67,
  decodeBinary as decodeBinary_67,
  encodeJson as encodeJson_67,
} from "../../messages/api/GetBlockStreamResponse";
import {
  Type as GetBundleTipRequest,
  encodeBinary as encodeBinary_68,
  decodeBinary as decodeBinary_68,
  encodeJson as encodeJson_68,
} from "../../messages/api/GetBundleTipRequest";
import {
  Type as GetBundleTipResponse,
  encodeBinary as encodeBinary_69,
  decodeBinary as decodeBinary_69,
  encodeJson as encodeJson_69,
} from "../../messages/api/GetBundleTipResponse";
import {
  Type as GetQuotesStreamRequest,
  encodeBinary as encodeBinary_70,
  decodeBinary as decodeBinary_70,
  encodeJson as encodeJson_70,
} from "../../messages/api/GetQuotesStreamRequest";
import {
  Type as GetQuotesStreamResponse,
  encodeBinary as encodeBinary_71,
  decodeBinary as decodeBinary_71,
  encodeJson as encodeJson_71,
} from "../../messages/api/GetQuotesStreamResponse";
import {
  Type as GetPoolReservesStreamRequest,
  encodeBinary as encodeBinary_72,
  decodeBinary as decodeBinary_72,
  encodeJson as encodeJson_72,
} from "../../messages/api/GetPoolReservesStreamRequest";
import {
  Type as GetPoolReservesStreamResponse,
  encodeBinary as encodeBinary_73,
  decodeBinary as decodeBinary_73,
  encodeJson as encodeJson_73,
} from "../../messages/api/GetPoolReservesStreamResponse";
import {
  Type as GetPricesStreamRequest,
  encodeBinary as encodeBinary_74,
  decodeBinary as decodeBinary_74,
  encodeJson as encodeJson_74,
} from "../../messages/api/GetPricesStreamRequest";
import {
  Type as GetPricesStreamResponse,
  encodeBinary as encodeBinary_75,
  decodeBinary as decodeBinary_75,
  encodeJson as encodeJson_75,
} from "../../messages/api/GetPricesStreamResponse";
import {
  Type as GetNewRaydiumPoolsRequest,
  encodeBinary as encodeBinary_76,
  decodeBinary as decodeBinary_76,
  encodeJson as encodeJson_76,
} from "../../messages/api/GetNewRaydiumPoolsRequest";
import {
  Type as GetNewRaydiumPoolsResponse,
  encodeBinary as encodeBinary_77,
  decodeBinary as decodeBinary_77,
  encodeJson as encodeJson_77,
} from "../../messages/api/GetNewRaydiumPoolsResponse";
import {
  Type as GetNewRaydiumPoolsByTransactionRequest,
  encodeBinary as encodeBinary_78,
  decodeBinary as decodeBinary_78,
  encodeJson as encodeJson_78,
} from "../../messages/api/GetNewRaydiumPoolsByTransactionRequest";
import {
  Type as GetNewRaydiumPoolsByTransactionResponse,
  encodeBinary as encodeBinary_79,
  decodeBinary as decodeBinary_79,
  encodeJson as encodeJson_79,
} from "../../messages/api/GetNewRaydiumPoolsByTransactionResponse";
import {
  Type as GetSwapsStreamRequest,
  encodeBinary as encodeBinary_80,
  decodeBinary as decodeBinary_80,
  encodeJson as encodeJson_80,
} from "../../messages/api/GetSwapsStreamRequest";
import {
  Type as GetSwapsStreamResponse,
  encodeBinary as encodeBinary_81,
  decodeBinary as decodeBinary_81,
  encodeJson as encodeJson_81,
} from "../../messages/api/GetSwapsStreamResponse";
import {
  Type as GetPumpFunSwapsStreamRequest,
  encodeBinary as encodeBinary_82,
  decodeBinary as decodeBinary_82,
  encodeJson as encodeJson_82,
} from "../../messages/api/GetPumpFunSwapsStreamRequest";
import {
  Type as GetPumpFunSwapsStreamResponse,
  encodeBinary as encodeBinary_83,
  decodeBinary as decodeBinary_83,
  encodeJson as encodeJson_83,
} from "../../messages/api/GetPumpFunSwapsStreamResponse";
import {
  Type as GetPumpFunNewTokensStreamRequest,
  encodeBinary as encodeBinary_84,
  decodeBinary as decodeBinary_84,
  encodeJson as encodeJson_84,
} from "../../messages/api/GetPumpFunNewTokensStreamRequest";
import {
  Type as GetPumpFunNewTokensStreamResponse,
  encodeBinary as encodeBinary_85,
  decodeBinary as decodeBinary_85,
  encodeJson as encodeJson_85,
} from "../../messages/api/GetPumpFunNewTokensStreamResponse";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  getRateLimit(request: GetRateLimitRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRateLimitResponse>, TResArgs>;
  getTransaction(request: GetTransactionRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTransactionResponse>, TResArgs>;
  postSubmitV2(request: PostSubmitRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  postSubmitBatchV2(request: PostSubmitBatchRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitBatchResponse>, TResArgs>;
  postSubmitSnipeV2(request: PostSubmitSnipeRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitSnipeResponse>, TResArgs>;
  postSubmitPaladinV2(request: PostSubmitPaladinRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  getRaydiumPools(request: GetRaydiumPoolsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumPoolsResponse>, TResArgs>;
  getRaydiumPoolReserve(request: GetRaydiumPoolReserveRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumPoolReserveResponse>, TResArgs>;
  getRaydiumQuotes(request: GetRaydiumQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumQuotesResponse>, TResArgs>;
  getRaydiumCPMMQuotes(request: GetRaydiumCPMMQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumCPMMQuotesResponse>, TResArgs>;
  getRaydiumPrices(request: GetRaydiumPricesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumPricesResponse>, TResArgs>;
  getRaydiumCLMMQuotes(request: GetRaydiumCLMMQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumCLMMQuotesResponse>, TResArgs>;
  getRaydiumCLMMPools(request: GetRaydiumCLMMPoolsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumCLMMPoolsResponse>, TResArgs>;
  postRaydiumCLMMSwap(request: PostRaydiumSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumSwapResponse>, TResArgs>;
  postRaydiumCLMMRouteSwap(request: PostRaydiumRouteSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, TResArgs>;
  postRaydiumSwap(request: PostRaydiumSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumSwapResponse>, TResArgs>;
  postRaydiumRouteSwap(request: PostRaydiumRouteSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, TResArgs>;
  postRaydiumCPMMSwap(request: PostRaydiumCPMMSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumCPMMSwapResponse>, TResArgs>;
  postRaydiumSwapInstructions(request: PostRaydiumSwapInstructionsRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumSwapInstructionsResponse>, TResArgs>;
  getJupiterQuotes(request: GetJupiterQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetJupiterQuotesResponse>, TResArgs>;
  getJupiterPrices(request: GetJupiterPricesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetJupiterPricesResponse>, TResArgs>;
  postJupiterSwap(request: PostJupiterSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostJupiterSwapResponse>, TResArgs>;
  postJupiterSwapInstructions(request: PostJupiterSwapInstructionsRequest, ...args: TReqArgs): RpcReturnType<Promise<PostJupiterSwapInstructionsResponse>, TResArgs>;
  postJupiterRouteSwap(request: PostJupiterRouteSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, TResArgs>;
  getPumpFunQuotes(request: GetPumpFunQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPumpFunQuotesResponse>, TResArgs>;
  postPumpFunSwap(request: PostPumpFunSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostPumpFunSwapResponse>, TResArgs>;
  postPumpFunSwapSol(request: PostPumpFunSwapRequestSol, ...args: TReqArgs): RpcReturnType<Promise<PostPumpFunSwapResponse>, TResArgs>;
  getPools(request: GetPoolsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPoolsResponse>, TResArgs>;
  getLeaderSchedule(request: GetLeaderScheduleRequest, ...args: TReqArgs): RpcReturnType<Promise<GetLeaderScheduleResponse>, TResArgs>;
  getPrice(request: GetPriceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPriceResponse>, TResArgs>;
  getServerTime(request: GetServerTimeRequest, ...args: TReqArgs): RpcReturnType<Promise<GetServerTimeResponse>, TResArgs>;
  getRecentBlockHash(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRecentBlockHashResponse>, TResArgs>;
  getRecentBlockHashV2(request: GetRecentBlockHashRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetRecentBlockHashResponseV2>, TResArgs>;
  getPriorityFee(request: GetPriorityFeeRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPriorityFeeResponse>, TResArgs>;
  getPriorityFeeByProgram(request: GetPriorityFeeByProgramRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPriorityFeeByProgramResponse>, TResArgs>;
  getTokenAccounts(request: GetTokenAccountsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTokenAccountsResponse>, TResArgs>;
  postSubmit(request: PostSubmitRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  postSubmitBatch(request: PostSubmitBatchRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitBatchResponse>, TResArgs>;
  getRecentBlockHashStream(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetRecentBlockHashResponse>, TResArgs>;
  getBlockStream(request: GetBlockStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetBlockStreamResponse>, TResArgs>;
  getPriorityFeeStream(request: GetPriorityFeeRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPriorityFeeResponse>, TResArgs>;
  getPriorityFeeByProgramStream(request: GetPriorityFeeByProgramRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPriorityFeeByProgramResponse>, TResArgs>;
  getBundleTipStream(request: GetBundleTipRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetBundleTipResponse>, TResArgs>;
  getQuotesStream(request: GetQuotesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetQuotesStreamResponse>, TResArgs>;
  getPoolReservesStream(request: GetPoolReservesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPoolReservesStreamResponse>, TResArgs>;
  getPricesStream(request: GetPricesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPricesStreamResponse>, TResArgs>;
  getNewRaydiumPoolsStream(request: GetNewRaydiumPoolsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetNewRaydiumPoolsResponse>, TResArgs>;
  getNewRaydiumPoolsByTransactionStream(request: GetNewRaydiumPoolsByTransactionRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetNewRaydiumPoolsByTransactionResponse>, TResArgs>;
  getSwapsStream(request: GetSwapsStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetSwapsStreamResponse>, TResArgs>;
  getPumpFunSwapsStream(request: GetPumpFunSwapsStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPumpFunSwapsStreamResponse>, TResArgs>;
  getPumpFunNewTokensStream(request: GetPumpFunNewTokensStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPumpFunNewTokensStreamResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  getRateLimit: {
    methodName: "GetRateLimit",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: GetRateLimitRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: GetRateLimitResponse) => JSON.stringify(encodeJson_1(value)),
    },
  },
  getTransaction: {
    methodName: "GetTransaction",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GetTransactionRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: GetTransactionResponse) => JSON.stringify(encodeJson_3(value)),
    },
  },
  postSubmitV2: {
    methodName: "PostSubmitV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: PostSubmitRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  postSubmitBatchV2: {
    methodName: "PostSubmitBatchV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: PostSubmitBatchRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: PostSubmitBatchResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  postSubmitSnipeV2: {
    methodName: "PostSubmitSnipeV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: PostSubmitSnipeRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_9,
      deserializeBinary: decodeBinary_9,
      serializeJson: (value: PostSubmitSnipeResponse) => JSON.stringify(encodeJson_9(value)),
    },
  },
  postSubmitPaladinV2: {
    methodName: "PostSubmitPaladinV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_10,
      deserializeBinary: decodeBinary_10,
      serializeJson: (value: PostSubmitPaladinRequest) => JSON.stringify(encodeJson_10(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  getRaydiumPools: {
    methodName: "GetRaydiumPools",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_11,
      deserializeBinary: decodeBinary_11,
      serializeJson: (value: GetRaydiumPoolsRequest) => JSON.stringify(encodeJson_11(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: GetRaydiumPoolsResponse) => JSON.stringify(encodeJson_12(value)),
    },
  },
  getRaydiumPoolReserve: {
    methodName: "GetRaydiumPoolReserve",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_13,
      deserializeBinary: decodeBinary_13,
      serializeJson: (value: GetRaydiumPoolReserveRequest) => JSON.stringify(encodeJson_13(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_14,
      deserializeBinary: decodeBinary_14,
      serializeJson: (value: GetRaydiumPoolReserveResponse) => JSON.stringify(encodeJson_14(value)),
    },
  },
  getRaydiumQuotes: {
    methodName: "GetRaydiumQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_15,
      deserializeBinary: decodeBinary_15,
      serializeJson: (value: GetRaydiumQuotesRequest) => JSON.stringify(encodeJson_15(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_16,
      deserializeBinary: decodeBinary_16,
      serializeJson: (value: GetRaydiumQuotesResponse) => JSON.stringify(encodeJson_16(value)),
    },
  },
  getRaydiumCPMMQuotes: {
    methodName: "GetRaydiumCPMMQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_17,
      deserializeBinary: decodeBinary_17,
      serializeJson: (value: GetRaydiumCPMMQuotesRequest) => JSON.stringify(encodeJson_17(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_18,
      deserializeBinary: decodeBinary_18,
      serializeJson: (value: GetRaydiumCPMMQuotesResponse) => JSON.stringify(encodeJson_18(value)),
    },
  },
  getRaydiumPrices: {
    methodName: "GetRaydiumPrices",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: GetRaydiumPricesRequest) => JSON.stringify(encodeJson_19(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_20,
      deserializeBinary: decodeBinary_20,
      serializeJson: (value: GetRaydiumPricesResponse) => JSON.stringify(encodeJson_20(value)),
    },
  },
  getRaydiumCLMMQuotes: {
    methodName: "GetRaydiumCLMMQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_21,
      deserializeBinary: decodeBinary_21,
      serializeJson: (value: GetRaydiumCLMMQuotesRequest) => JSON.stringify(encodeJson_21(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_22,
      deserializeBinary: decodeBinary_22,
      serializeJson: (value: GetRaydiumCLMMQuotesResponse) => JSON.stringify(encodeJson_22(value)),
    },
  },
  getRaydiumCLMMPools: {
    methodName: "GetRaydiumCLMMPools",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: GetRaydiumCLMMPoolsRequest) => JSON.stringify(encodeJson_23(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_24,
      deserializeBinary: decodeBinary_24,
      serializeJson: (value: GetRaydiumCLMMPoolsResponse) => JSON.stringify(encodeJson_24(value)),
    },
  },
  postRaydiumCLMMSwap: {
    methodName: "PostRaydiumCLMMSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_25,
      deserializeBinary: decodeBinary_25,
      serializeJson: (value: PostRaydiumSwapRequest) => JSON.stringify(encodeJson_25(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_26,
      deserializeBinary: decodeBinary_26,
      serializeJson: (value: PostRaydiumSwapResponse) => JSON.stringify(encodeJson_26(value)),
    },
  },
  postRaydiumCLMMRouteSwap: {
    methodName: "PostRaydiumCLMMRouteSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_27,
      deserializeBinary: decodeBinary_27,
      serializeJson: (value: PostRaydiumRouteSwapRequest) => JSON.stringify(encodeJson_27(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_28,
      deserializeBinary: decodeBinary_28,
      serializeJson: (value: PostRaydiumRouteSwapResponse) => JSON.stringify(encodeJson_28(value)),
    },
  },
  postRaydiumSwap: {
    methodName: "PostRaydiumSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_25,
      deserializeBinary: decodeBinary_25,
      serializeJson: (value: PostRaydiumSwapRequest) => JSON.stringify(encodeJson_25(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_26,
      deserializeBinary: decodeBinary_26,
      serializeJson: (value: PostRaydiumSwapResponse) => JSON.stringify(encodeJson_26(value)),
    },
  },
  postRaydiumRouteSwap: {
    methodName: "PostRaydiumRouteSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_27,
      deserializeBinary: decodeBinary_27,
      serializeJson: (value: PostRaydiumRouteSwapRequest) => JSON.stringify(encodeJson_27(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_28,
      deserializeBinary: decodeBinary_28,
      serializeJson: (value: PostRaydiumRouteSwapResponse) => JSON.stringify(encodeJson_28(value)),
    },
  },
  postRaydiumCPMMSwap: {
    methodName: "PostRaydiumCPMMSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_29,
      deserializeBinary: decodeBinary_29,
      serializeJson: (value: PostRaydiumCPMMSwapRequest) => JSON.stringify(encodeJson_29(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_30,
      deserializeBinary: decodeBinary_30,
      serializeJson: (value: PostRaydiumCPMMSwapResponse) => JSON.stringify(encodeJson_30(value)),
    },
  },
  postRaydiumSwapInstructions: {
    methodName: "PostRaydiumSwapInstructions",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_31,
      deserializeBinary: decodeBinary_31,
      serializeJson: (value: PostRaydiumSwapInstructionsRequest) => JSON.stringify(encodeJson_31(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_32,
      deserializeBinary: decodeBinary_32,
      serializeJson: (value: PostRaydiumSwapInstructionsResponse) => JSON.stringify(encodeJson_32(value)),
    },
  },
  getJupiterQuotes: {
    methodName: "GetJupiterQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_33,
      deserializeBinary: decodeBinary_33,
      serializeJson: (value: GetJupiterQuotesRequest) => JSON.stringify(encodeJson_33(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_34,
      deserializeBinary: decodeBinary_34,
      serializeJson: (value: GetJupiterQuotesResponse) => JSON.stringify(encodeJson_34(value)),
    },
  },
  getJupiterPrices: {
    methodName: "GetJupiterPrices",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_35,
      deserializeBinary: decodeBinary_35,
      serializeJson: (value: GetJupiterPricesRequest) => JSON.stringify(encodeJson_35(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_36,
      deserializeBinary: decodeBinary_36,
      serializeJson: (value: GetJupiterPricesResponse) => JSON.stringify(encodeJson_36(value)),
    },
  },
  postJupiterSwap: {
    methodName: "PostJupiterSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_37,
      deserializeBinary: decodeBinary_37,
      serializeJson: (value: PostJupiterSwapRequest) => JSON.stringify(encodeJson_37(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_38,
      deserializeBinary: decodeBinary_38,
      serializeJson: (value: PostJupiterSwapResponse) => JSON.stringify(encodeJson_38(value)),
    },
  },
  postJupiterSwapInstructions: {
    methodName: "PostJupiterSwapInstructions",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_39,
      deserializeBinary: decodeBinary_39,
      serializeJson: (value: PostJupiterSwapInstructionsRequest) => JSON.stringify(encodeJson_39(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_40,
      deserializeBinary: decodeBinary_40,
      serializeJson: (value: PostJupiterSwapInstructionsResponse) => JSON.stringify(encodeJson_40(value)),
    },
  },
  postJupiterRouteSwap: {
    methodName: "PostJupiterRouteSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_41,
      deserializeBinary: decodeBinary_41,
      serializeJson: (value: PostJupiterRouteSwapRequest) => JSON.stringify(encodeJson_41(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_42,
      deserializeBinary: decodeBinary_42,
      serializeJson: (value: PostJupiterRouteSwapResponse) => JSON.stringify(encodeJson_42(value)),
    },
  },
  getPumpFunQuotes: {
    methodName: "GetPumpFunQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_43,
      deserializeBinary: decodeBinary_43,
      serializeJson: (value: GetPumpFunQuotesRequest) => JSON.stringify(encodeJson_43(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_44,
      deserializeBinary: decodeBinary_44,
      serializeJson: (value: GetPumpFunQuotesResponse) => JSON.stringify(encodeJson_44(value)),
    },
  },
  postPumpFunSwap: {
    methodName: "PostPumpFunSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_45,
      deserializeBinary: decodeBinary_45,
      serializeJson: (value: PostPumpFunSwapRequest) => JSON.stringify(encodeJson_45(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_46,
      deserializeBinary: decodeBinary_46,
      serializeJson: (value: PostPumpFunSwapResponse) => JSON.stringify(encodeJson_46(value)),
    },
  },
  postPumpFunSwapSol: {
    methodName: "PostPumpFunSwapSol",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_47,
      deserializeBinary: decodeBinary_47,
      serializeJson: (value: PostPumpFunSwapRequestSol) => JSON.stringify(encodeJson_47(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_46,
      deserializeBinary: decodeBinary_46,
      serializeJson: (value: PostPumpFunSwapResponse) => JSON.stringify(encodeJson_46(value)),
    },
  },
  getPools: {
    methodName: "GetPools",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_48,
      deserializeBinary: decodeBinary_48,
      serializeJson: (value: GetPoolsRequest) => JSON.stringify(encodeJson_48(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_49,
      deserializeBinary: decodeBinary_49,
      serializeJson: (value: GetPoolsResponse) => JSON.stringify(encodeJson_49(value)),
    },
  },
  getLeaderSchedule: {
    methodName: "GetLeaderSchedule",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_50,
      deserializeBinary: decodeBinary_50,
      serializeJson: (value: GetLeaderScheduleRequest) => JSON.stringify(encodeJson_50(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_51,
      deserializeBinary: decodeBinary_51,
      serializeJson: (value: GetLeaderScheduleResponse) => JSON.stringify(encodeJson_51(value)),
    },
  },
  getPrice: {
    methodName: "GetPrice",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_52,
      deserializeBinary: decodeBinary_52,
      serializeJson: (value: GetPriceRequest) => JSON.stringify(encodeJson_52(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_53,
      deserializeBinary: decodeBinary_53,
      serializeJson: (value: GetPriceResponse) => JSON.stringify(encodeJson_53(value)),
    },
  },
  getServerTime: {
    methodName: "GetServerTime",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_54,
      deserializeBinary: decodeBinary_54,
      serializeJson: (value: GetServerTimeRequest) => JSON.stringify(encodeJson_54(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_55,
      deserializeBinary: decodeBinary_55,
      serializeJson: (value: GetServerTimeResponse) => JSON.stringify(encodeJson_55(value)),
    },
  },
  getRecentBlockHash: {
    methodName: "GetRecentBlockHash",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_56,
      deserializeBinary: decodeBinary_56,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_56(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_57,
      deserializeBinary: decodeBinary_57,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_57(value)),
    },
  },
  getRecentBlockHashV2: {
    methodName: "GetRecentBlockHashV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_58,
      deserializeBinary: decodeBinary_58,
      serializeJson: (value: GetRecentBlockHashRequestV2) => JSON.stringify(encodeJson_58(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: GetRecentBlockHashResponseV2) => JSON.stringify(encodeJson_59(value)),
    },
  },
  getPriorityFee: {
    methodName: "GetPriorityFee",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_60,
      deserializeBinary: decodeBinary_60,
      serializeJson: (value: GetPriorityFeeRequest) => JSON.stringify(encodeJson_60(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_61,
      deserializeBinary: decodeBinary_61,
      serializeJson: (value: GetPriorityFeeResponse) => JSON.stringify(encodeJson_61(value)),
    },
  },
  getPriorityFeeByProgram: {
    methodName: "GetPriorityFeeByProgram",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_62,
      deserializeBinary: decodeBinary_62,
      serializeJson: (value: GetPriorityFeeByProgramRequest) => JSON.stringify(encodeJson_62(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_63,
      deserializeBinary: decodeBinary_63,
      serializeJson: (value: GetPriorityFeeByProgramResponse) => JSON.stringify(encodeJson_63(value)),
    },
  },
  getTokenAccounts: {
    methodName: "GetTokenAccounts",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_64,
      deserializeBinary: decodeBinary_64,
      serializeJson: (value: GetTokenAccountsRequest) => JSON.stringify(encodeJson_64(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_65,
      deserializeBinary: decodeBinary_65,
      serializeJson: (value: GetTokenAccountsResponse) => JSON.stringify(encodeJson_65(value)),
    },
  },
  postSubmit: {
    methodName: "PostSubmit",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: PostSubmitRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  postSubmitBatch: {
    methodName: "PostSubmitBatch",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: PostSubmitBatchRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: PostSubmitBatchResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  getRecentBlockHashStream: {
    methodName: "GetRecentBlockHashStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_56,
      deserializeBinary: decodeBinary_56,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_56(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_57,
      deserializeBinary: decodeBinary_57,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_57(value)),
    },
  },
  getBlockStream: {
    methodName: "GetBlockStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_66,
      deserializeBinary: decodeBinary_66,
      serializeJson: (value: GetBlockStreamRequest) => JSON.stringify(encodeJson_66(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_67,
      deserializeBinary: decodeBinary_67,
      serializeJson: (value: GetBlockStreamResponse) => JSON.stringify(encodeJson_67(value)),
    },
  },
  getPriorityFeeStream: {
    methodName: "GetPriorityFeeStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_60,
      deserializeBinary: decodeBinary_60,
      serializeJson: (value: GetPriorityFeeRequest) => JSON.stringify(encodeJson_60(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_61,
      deserializeBinary: decodeBinary_61,
      serializeJson: (value: GetPriorityFeeResponse) => JSON.stringify(encodeJson_61(value)),
    },
  },
  getPriorityFeeByProgramStream: {
    methodName: "GetPriorityFeeByProgramStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_62,
      deserializeBinary: decodeBinary_62,
      serializeJson: (value: GetPriorityFeeByProgramRequest) => JSON.stringify(encodeJson_62(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_63,
      deserializeBinary: decodeBinary_63,
      serializeJson: (value: GetPriorityFeeByProgramResponse) => JSON.stringify(encodeJson_63(value)),
    },
  },
  getBundleTipStream: {
    methodName: "GetBundleTipStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_68,
      deserializeBinary: decodeBinary_68,
      serializeJson: (value: GetBundleTipRequest) => JSON.stringify(encodeJson_68(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_69,
      deserializeBinary: decodeBinary_69,
      serializeJson: (value: GetBundleTipResponse) => JSON.stringify(encodeJson_69(value)),
    },
  },
  getQuotesStream: {
    methodName: "GetQuotesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_70,
      deserializeBinary: decodeBinary_70,
      serializeJson: (value: GetQuotesStreamRequest) => JSON.stringify(encodeJson_70(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_71,
      deserializeBinary: decodeBinary_71,
      serializeJson: (value: GetQuotesStreamResponse) => JSON.stringify(encodeJson_71(value)),
    },
  },
  getPoolReservesStream: {
    methodName: "GetPoolReservesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_72,
      deserializeBinary: decodeBinary_72,
      serializeJson: (value: GetPoolReservesStreamRequest) => JSON.stringify(encodeJson_72(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_73,
      deserializeBinary: decodeBinary_73,
      serializeJson: (value: GetPoolReservesStreamResponse) => JSON.stringify(encodeJson_73(value)),
    },
  },
  getPricesStream: {
    methodName: "GetPricesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_74,
      deserializeBinary: decodeBinary_74,
      serializeJson: (value: GetPricesStreamRequest) => JSON.stringify(encodeJson_74(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_75,
      deserializeBinary: decodeBinary_75,
      serializeJson: (value: GetPricesStreamResponse) => JSON.stringify(encodeJson_75(value)),
    },
  },
  getNewRaydiumPoolsStream: {
    methodName: "GetNewRaydiumPoolsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_76,
      deserializeBinary: decodeBinary_76,
      serializeJson: (value: GetNewRaydiumPoolsRequest) => JSON.stringify(encodeJson_76(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_77,
      deserializeBinary: decodeBinary_77,
      serializeJson: (value: GetNewRaydiumPoolsResponse) => JSON.stringify(encodeJson_77(value)),
    },
  },
  getNewRaydiumPoolsByTransactionStream: {
    methodName: "GetNewRaydiumPoolsByTransactionStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_78,
      deserializeBinary: decodeBinary_78,
      serializeJson: (value: GetNewRaydiumPoolsByTransactionRequest) => JSON.stringify(encodeJson_78(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_79,
      deserializeBinary: decodeBinary_79,
      serializeJson: (value: GetNewRaydiumPoolsByTransactionResponse) => JSON.stringify(encodeJson_79(value)),
    },
  },
  getSwapsStream: {
    methodName: "GetSwapsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_80,
      deserializeBinary: decodeBinary_80,
      serializeJson: (value: GetSwapsStreamRequest) => JSON.stringify(encodeJson_80(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_81,
      deserializeBinary: decodeBinary_81,
      serializeJson: (value: GetSwapsStreamResponse) => JSON.stringify(encodeJson_81(value)),
    },
  },
  getPumpFunSwapsStream: {
    methodName: "GetPumpFunSwapsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_82,
      deserializeBinary: decodeBinary_82,
      serializeJson: (value: GetPumpFunSwapsStreamRequest) => JSON.stringify(encodeJson_82(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_83,
      deserializeBinary: decodeBinary_83,
      serializeJson: (value: GetPumpFunSwapsStreamResponse) => JSON.stringify(encodeJson_83(value)),
    },
  },
  getPumpFunNewTokensStream: {
    methodName: "GetPumpFunNewTokensStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_84,
      deserializeBinary: decodeBinary_84,
      serializeJson: (value: GetPumpFunNewTokensStreamRequest) => JSON.stringify(encodeJson_84(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_85,
      deserializeBinary: decodeBinary_85,
      serializeJson: (value: GetPumpFunNewTokensStreamResponse) => JSON.stringify(encodeJson_85(value)),
    },
  },
} as const;

export class RpcError<TTrailer = any> extends Error {
  constructor(public trailer: TTrailer) { super(); }
}
export interface CreateServiceClientConfig {
  responseOnly?: boolean;
  devtools?: true | { tags: string[] };
}
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config?: undefined
): Service<[] | [TMetadata], []>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config: CreateServiceClientConfig & { responseOnly: false }
): Service<[] | [TMetadata], [THeader, Promise<TTrailer>]>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config: CreateServiceClientConfig & { responseOnly?: true }
): Service<[] | [TMetadata], []>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config?: CreateServiceClientConfig
): Service<[] | [TMetadata], [] | [THeader, Promise<TTrailer>]> {
  let _rpcClientImpl = rpcClientImpl;
  const responseOnly = config?.responseOnly ?? true;
  const devtools = config?.devtools ?? false;
  if (devtools) {
    const tags = devtools === true ? [] : devtools.tags;
    const devtoolsConfig = getDevtoolsConfig();
    _rpcClientImpl = wrapRpcClientImpl({ rpcClientImpl, devtoolsConfig, tags });
  }
  return Object.fromEntries(Object.entries(methodDescriptors).map(
    ([camelRpcName, methodDescriptor]) => {
      const { requestStream, responseStream } = methodDescriptor;
      const rpcMethodImpl = _rpcClientImpl(methodDescriptor as MethodDescriptor<any, any>);
      const rpcMethodHandler = async (request: any, metadata?: any) => {
        const reqAsyncGenerator = requestStream ? request : fromSingle(request);
        const rpcMethodResult = rpcMethodImpl(reqAsyncGenerator, metadata);
        const resAsyncGenerator = rpcMethodResult[0];
        const headerPromise = rpcMethodResult[1];
        const trailerPromise = rpcMethodResult[2];
        const [header, response] = await Promise.all([
          getHeaderBeforeTrailer(headerPromise, trailerPromise),
          responseStream ? resAsyncGenerator : first(resAsyncGenerator),
        ]);
        return responseOnly ? response : [response, header, trailerPromise];
      };
      return [camelRpcName, rpcMethodHandler];
    }
  )) as unknown as Service;
}
function getHeaderBeforeTrailer<THeader, TTrailer>(
  headerPromise: Promise<THeader>,
  trailerPromise: Promise<TTrailer>
): Promise<THeader> {
  return Promise.race([
    headerPromise,
    trailerPromise.then(trailer => { throw new RpcError(trailer); }),
  ]);
}
