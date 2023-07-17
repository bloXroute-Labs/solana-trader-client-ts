import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc";
import {
  Type as PostCloseDriftPerpPositionsRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/api/PostCloseDriftPerpPositionsRequest";
import {
  Type as PostCloseDriftPerpPositionsResponse,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/api/PostCloseDriftPerpPositionsResponse";
import {
  Type as GetDriftPerpOrderbookRequest,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/api/GetDriftPerpOrderbookRequest";
import {
  Type as GetDriftPerpOrderbookResponse,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/api/GetDriftPerpOrderbookResponse";
import {
  Type as PostCreateDriftUserRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/api/PostCreateDriftUserRequest";
import {
  Type as PostCreateDriftUserResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/api/PostCreateDriftUserResponse";
import {
  Type as GetDriftUserRequest,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
  encodeJson as encodeJson_6,
} from "../../messages/api/GetDriftUserRequest";
import {
  Type as GetDriftUserResponse,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
  encodeJson as encodeJson_7,
} from "../../messages/api/GetDriftUserResponse";
import {
  Type as PostDriftManageCollateralRequest,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
  encodeJson as encodeJson_8,
} from "../../messages/api/PostDriftManageCollateralRequest";
import {
  Type as PostDriftManageCollateralResponse,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
  encodeJson as encodeJson_9,
} from "../../messages/api/PostDriftManageCollateralResponse";
import {
  Type as PostDriftSettlePNLRequest,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
  encodeJson as encodeJson_10,
} from "../../messages/api/PostDriftSettlePNLRequest";
import {
  Type as PostDriftSettlePNLResponse,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
  encodeJson as encodeJson_11,
} from "../../messages/api/PostDriftSettlePNLResponse";
import {
  Type as PostDriftSettlePNLsRequest,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
  encodeJson as encodeJson_12,
} from "../../messages/api/PostDriftSettlePNLsRequest";
import {
  Type as PostDriftSettlePNLsResponse,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
  encodeJson as encodeJson_13,
} from "../../messages/api/PostDriftSettlePNLsResponse";
import {
  Type as GetDriftAssetsRequest,
  encodeBinary as encodeBinary_14,
  decodeBinary as decodeBinary_14,
  encodeJson as encodeJson_14,
} from "../../messages/api/GetDriftAssetsRequest";
import {
  Type as GetDriftAssetsResponse,
  encodeBinary as encodeBinary_15,
  decodeBinary as decodeBinary_15,
  encodeJson as encodeJson_15,
} from "../../messages/api/GetDriftAssetsResponse";
import {
  Type as GetDriftPerpContractsRequest,
  encodeBinary as encodeBinary_16,
  decodeBinary as decodeBinary_16,
  encodeJson as encodeJson_16,
} from "../../messages/api/GetDriftPerpContractsRequest";
import {
  Type as GetDriftPerpContractsResponse,
  encodeBinary as encodeBinary_17,
  decodeBinary as decodeBinary_17,
  encodeJson as encodeJson_17,
} from "../../messages/api/GetDriftPerpContractsResponse";
import {
  Type as PostLiquidateDriftPerpRequest,
  encodeBinary as encodeBinary_18,
  decodeBinary as decodeBinary_18,
  encodeJson as encodeJson_18,
} from "../../messages/api/PostLiquidateDriftPerpRequest";
import {
  Type as PostLiquidateDriftPerpResponse,
  encodeBinary as encodeBinary_19,
  decodeBinary as decodeBinary_19,
  encodeJson as encodeJson_19,
} from "../../messages/api/PostLiquidateDriftPerpResponse";
import {
  Type as GetDriftOpenPerpOrderRequest,
  encodeBinary as encodeBinary_20,
  decodeBinary as decodeBinary_20,
  encodeJson as encodeJson_20,
} from "../../messages/api/GetDriftOpenPerpOrderRequest";
import {
  Type as GetDriftOpenPerpOrderResponse,
  encodeBinary as encodeBinary_21,
  decodeBinary as decodeBinary_21,
  encodeJson as encodeJson_21,
} from "../../messages/api/GetDriftOpenPerpOrderResponse";
import {
  Type as GetDriftOpenMarginOrderRequest,
  encodeBinary as encodeBinary_22,
  decodeBinary as decodeBinary_22,
  encodeJson as encodeJson_22,
} from "../../messages/api/GetDriftOpenMarginOrderRequest";
import {
  Type as GetDriftOpenMarginOrderResponse,
  encodeBinary as encodeBinary_23,
  decodeBinary as decodeBinary_23,
  encodeJson as encodeJson_23,
} from "../../messages/api/GetDriftOpenMarginOrderResponse";
import {
  Type as GetDriftPerpPositionsRequest,
  encodeBinary as encodeBinary_24,
  decodeBinary as decodeBinary_24,
  encodeJson as encodeJson_24,
} from "../../messages/api/GetDriftPerpPositionsRequest";
import {
  Type as GetDriftPerpPositionsResponse,
  encodeBinary as encodeBinary_25,
  decodeBinary as decodeBinary_25,
  encodeJson as encodeJson_25,
} from "../../messages/api/GetDriftPerpPositionsResponse";
import {
  Type as GetDriftOpenPerpOrdersRequest,
  encodeBinary as encodeBinary_26,
  decodeBinary as decodeBinary_26,
  encodeJson as encodeJson_26,
} from "../../messages/api/GetDriftOpenPerpOrdersRequest";
import {
  Type as GetDriftOpenPerpOrdersResponse,
  encodeBinary as encodeBinary_27,
  decodeBinary as decodeBinary_27,
  encodeJson as encodeJson_27,
} from "../../messages/api/GetDriftOpenPerpOrdersResponse";
import {
  Type as PostDriftCancelPerpOrderRequest,
  encodeBinary as encodeBinary_28,
  decodeBinary as decodeBinary_28,
  encodeJson as encodeJson_28,
} from "../../messages/api/PostDriftCancelPerpOrderRequest";
import {
  Type as PostDriftCancelPerpOrderResponse,
  encodeBinary as encodeBinary_29,
  decodeBinary as decodeBinary_29,
  encodeJson as encodeJson_29,
} from "../../messages/api/PostDriftCancelPerpOrderResponse";
import {
  Type as PostModifyDriftOrderRequest,
  encodeBinary as encodeBinary_30,
  decodeBinary as decodeBinary_30,
  encodeJson as encodeJson_30,
} from "../../messages/api/PostModifyDriftOrderRequest";
import {
  Type as PostModifyDriftOrderResponse,
  encodeBinary as encodeBinary_31,
  decodeBinary as decodeBinary_31,
  encodeJson as encodeJson_31,
} from "../../messages/api/PostModifyDriftOrderResponse";
import {
  Type as PostCancelDriftMarginOrderRequest,
  encodeBinary as encodeBinary_32,
  decodeBinary as decodeBinary_32,
  encodeJson as encodeJson_32,
} from "../../messages/api/PostCancelDriftMarginOrderRequest";
import {
  Type as PostCancelDriftMarginOrderResponse,
  encodeBinary as encodeBinary_33,
  decodeBinary as decodeBinary_33,
  encodeJson as encodeJson_33,
} from "../../messages/api/PostCancelDriftMarginOrderResponse";
import {
  Type as GetDriftOpenMarginOrdersRequest,
  encodeBinary as encodeBinary_34,
  decodeBinary as decodeBinary_34,
  encodeJson as encodeJson_34,
} from "../../messages/api/GetDriftOpenMarginOrdersRequest";
import {
  Type as GetDriftOpenMarginOrdersResponse,
  encodeBinary as encodeBinary_35,
  decodeBinary as decodeBinary_35,
  encodeJson as encodeJson_35,
} from "../../messages/api/GetDriftOpenMarginOrdersResponse";
import {
  Type as GetDriftMarketsRequest,
  encodeBinary as encodeBinary_36,
  decodeBinary as decodeBinary_36,
  encodeJson as encodeJson_36,
} from "../../messages/api/GetDriftMarketsRequest";
import {
  Type as GetDriftMarketsResponse,
  encodeBinary as encodeBinary_37,
  decodeBinary as decodeBinary_37,
  encodeJson as encodeJson_37,
} from "../../messages/api/GetDriftMarketsResponse";
import {
  Type as PostDriftMarginOrderRequest,
  encodeBinary as encodeBinary_38,
  decodeBinary as decodeBinary_38,
  encodeJson as encodeJson_38,
} from "../../messages/api/PostDriftMarginOrderRequest";
import {
  Type as PostDriftMarginOrderResponse,
  encodeBinary as encodeBinary_39,
  decodeBinary as decodeBinary_39,
  encodeJson as encodeJson_39,
} from "../../messages/api/PostDriftMarginOrderResponse";
import {
  Type as PostDriftEnableMarginTradingRequest,
  encodeBinary as encodeBinary_40,
  decodeBinary as decodeBinary_40,
  encodeJson as encodeJson_40,
} from "../../messages/api/PostDriftEnableMarginTradingRequest";
import {
  Type as PostDriftEnableMarginTradingResponse,
  encodeBinary as encodeBinary_41,
  decodeBinary as decodeBinary_41,
  encodeJson as encodeJson_41,
} from "../../messages/api/PostDriftEnableMarginTradingResponse";
import {
  Type as GetDriftMarginOrderbookRequest,
  encodeBinary as encodeBinary_42,
  decodeBinary as decodeBinary_42,
  encodeJson as encodeJson_42,
} from "../../messages/api/GetDriftMarginOrderbookRequest";
import {
  Type as GetDriftMarginOrderbookResponse,
  encodeBinary as encodeBinary_43,
  decodeBinary as decodeBinary_43,
  encodeJson as encodeJson_43,
} from "../../messages/api/GetDriftMarginOrderbookResponse";
import {
  Type as GetDriftMarketDepthRequest,
  encodeBinary as encodeBinary_44,
  decodeBinary as decodeBinary_44,
  encodeJson as encodeJson_44,
} from "../../messages/api/GetDriftMarketDepthRequest";
import {
  Type as GetDriftMarketDepthResponse,
  encodeBinary as encodeBinary_45,
  decodeBinary as decodeBinary_45,
  encodeJson as encodeJson_45,
} from "../../messages/api/GetDriftMarketDepthResponse";
import {
  Type as GetDriftMarginOrderbooksRequest,
  encodeBinary as encodeBinary_46,
  decodeBinary as decodeBinary_46,
  encodeJson as encodeJson_46,
} from "../../messages/api/GetDriftMarginOrderbooksRequest";
import {
  Type as GetDriftMarginOrderbooksStreamResponse,
  encodeBinary as encodeBinary_47,
  decodeBinary as decodeBinary_47,
  encodeJson as encodeJson_47,
} from "../../messages/api/GetDriftMarginOrderbooksStreamResponse";
import {
  Type as GetDriftMarketDepthsStreamRequest,
  encodeBinary as encodeBinary_48,
  decodeBinary as decodeBinary_48,
  encodeJson as encodeJson_48,
} from "../../messages/api/GetDriftMarketDepthsStreamRequest";
import {
  Type as GetDriftMarketDepthStreamResponse,
  encodeBinary as encodeBinary_49,
  decodeBinary as decodeBinary_49,
  encodeJson as encodeJson_49,
} from "../../messages/api/GetDriftMarketDepthStreamResponse";
import {
  Type as GetMarketsRequestV2,
  encodeBinary as encodeBinary_50,
  decodeBinary as decodeBinary_50,
  encodeJson as encodeJson_50,
} from "../../messages/api/GetMarketsRequestV2";
import {
  Type as GetMarketsResponseV2,
  encodeBinary as encodeBinary_51,
  decodeBinary as decodeBinary_51,
  encodeJson as encodeJson_51,
} from "../../messages/api/GetMarketsResponseV2";
import {
  Type as GetTickersRequestV2,
  encodeBinary as encodeBinary_52,
  decodeBinary as decodeBinary_52,
  encodeJson as encodeJson_52,
} from "../../messages/api/GetTickersRequestV2";
import {
  Type as GetTickersResponseV2,
  encodeBinary as encodeBinary_53,
  decodeBinary as decodeBinary_53,
  encodeJson as encodeJson_53,
} from "../../messages/api/GetTickersResponseV2";
import {
  Type as GetOrderbookRequestV2,
  encodeBinary as encodeBinary_54,
  decodeBinary as decodeBinary_54,
  encodeJson as encodeJson_54,
} from "../../messages/api/GetOrderbookRequestV2";
import {
  Type as GetOrderbookResponseV2,
  encodeBinary as encodeBinary_55,
  decodeBinary as decodeBinary_55,
  encodeJson as encodeJson_55,
} from "../../messages/api/GetOrderbookResponseV2";
import {
  Type as GetMarketDepthRequestV2,
  encodeBinary as encodeBinary_56,
  decodeBinary as decodeBinary_56,
  encodeJson as encodeJson_56,
} from "../../messages/api/GetMarketDepthRequestV2";
import {
  Type as GetMarketDepthResponseV2,
  encodeBinary as encodeBinary_57,
  decodeBinary as decodeBinary_57,
  encodeJson as encodeJson_57,
} from "../../messages/api/GetMarketDepthResponseV2";
import {
  Type as PostOrderRequestV2,
  encodeBinary as encodeBinary_58,
  decodeBinary as decodeBinary_58,
  encodeJson as encodeJson_58,
} from "../../messages/api/PostOrderRequestV2";
import {
  Type as PostOrderResponse,
  encodeBinary as encodeBinary_59,
  decodeBinary as decodeBinary_59,
  encodeJson as encodeJson_59,
} from "../../messages/api/PostOrderResponse";
import {
  Type as PostCancelOrderRequestV2,
  encodeBinary as encodeBinary_60,
  decodeBinary as decodeBinary_60,
  encodeJson as encodeJson_60,
} from "../../messages/api/PostCancelOrderRequestV2";
import {
  Type as PostCancelOrderResponseV2,
  encodeBinary as encodeBinary_61,
  decodeBinary as decodeBinary_61,
  encodeJson as encodeJson_61,
} from "../../messages/api/PostCancelOrderResponseV2";
import {
  Type as PostReplaceOrderRequestV2,
  encodeBinary as encodeBinary_62,
  decodeBinary as decodeBinary_62,
  encodeJson as encodeJson_62,
} from "../../messages/api/PostReplaceOrderRequestV2";
import {
  Type as PostSettleRequestV2,
  encodeBinary as encodeBinary_63,
  decodeBinary as decodeBinary_63,
  encodeJson as encodeJson_63,
} from "../../messages/api/PostSettleRequestV2";
import {
  Type as PostSettleResponse,
  encodeBinary as encodeBinary_64,
  decodeBinary as decodeBinary_64,
  encodeJson as encodeJson_64,
} from "../../messages/api/PostSettleResponse";
import {
  Type as GetOpenOrdersRequestV2,
  encodeBinary as encodeBinary_65,
  decodeBinary as decodeBinary_65,
  encodeJson as encodeJson_65,
} from "../../messages/api/GetOpenOrdersRequestV2";
import {
  Type as GetOpenOrdersResponse,
  encodeBinary as encodeBinary_66,
  decodeBinary as decodeBinary_66,
  encodeJson as encodeJson_66,
} from "../../messages/api/GetOpenOrdersResponse";
import {
  Type as GetUnsettledRequestV2,
  encodeBinary as encodeBinary_67,
  decodeBinary as decodeBinary_67,
  encodeJson as encodeJson_67,
} from "../../messages/api/GetUnsettledRequestV2";
import {
  Type as GetUnsettledResponse,
  encodeBinary as encodeBinary_68,
  decodeBinary as decodeBinary_68,
  encodeJson as encodeJson_68,
} from "../../messages/api/GetUnsettledResponse";
import {
  Type as GetPriceRequest,
  encodeBinary as encodeBinary_69,
  decodeBinary as decodeBinary_69,
  encodeJson as encodeJson_69,
} from "../../messages/api/GetPriceRequest";
import {
  Type as GetPriceResponse,
  encodeBinary as encodeBinary_70,
  decodeBinary as decodeBinary_70,
  encodeJson as encodeJson_70,
} from "../../messages/api/GetPriceResponse";
import {
  Type as GetMarketsRequest,
  encodeBinary as encodeBinary_71,
  decodeBinary as decodeBinary_71,
  encodeJson as encodeJson_71,
} from "../../messages/api/GetMarketsRequest";
import {
  Type as GetMarketsResponse,
  encodeBinary as encodeBinary_72,
  decodeBinary as decodeBinary_72,
  encodeJson as encodeJson_72,
} from "../../messages/api/GetMarketsResponse";
import {
  Type as GetPoolsRequest,
  encodeBinary as encodeBinary_73,
  decodeBinary as decodeBinary_73,
  encodeJson as encodeJson_73,
} from "../../messages/api/GetPoolsRequest";
import {
  Type as GetPoolsResponse,
  encodeBinary as encodeBinary_74,
  decodeBinary as decodeBinary_74,
  encodeJson as encodeJson_74,
} from "../../messages/api/GetPoolsResponse";
import {
  Type as GetTickersRequest,
  encodeBinary as encodeBinary_75,
  decodeBinary as decodeBinary_75,
  encodeJson as encodeJson_75,
} from "../../messages/api/GetTickersRequest";
import {
  Type as GetTickersResponse,
  encodeBinary as encodeBinary_76,
  decodeBinary as decodeBinary_76,
  encodeJson as encodeJson_76,
} from "../../messages/api/GetTickersResponse";
import {
  Type as GetKlineRequest,
  encodeBinary as encodeBinary_77,
  decodeBinary as decodeBinary_77,
  encodeJson as encodeJson_77,
} from "../../messages/api/GetKlineRequest";
import {
  Type as GetKlineResponse,
  encodeBinary as encodeBinary_78,
  decodeBinary as decodeBinary_78,
  encodeJson as encodeJson_78,
} from "../../messages/api/GetKlineResponse";
import {
  Type as GetOrderbookRequest,
  encodeBinary as encodeBinary_79,
  decodeBinary as decodeBinary_79,
  encodeJson as encodeJson_79,
} from "../../messages/api/GetOrderbookRequest";
import {
  Type as GetOrderbookResponse,
  encodeBinary as encodeBinary_80,
  decodeBinary as decodeBinary_80,
  encodeJson as encodeJson_80,
} from "../../messages/api/GetOrderbookResponse";
import {
  Type as GetMarketDepthRequest,
  encodeBinary as encodeBinary_81,
  decodeBinary as decodeBinary_81,
  encodeJson as encodeJson_81,
} from "../../messages/api/GetMarketDepthRequest";
import {
  Type as GetMarketDepthResponse,
  encodeBinary as encodeBinary_82,
  decodeBinary as decodeBinary_82,
  encodeJson as encodeJson_82,
} from "../../messages/api/GetMarketDepthResponse";
import {
  Type as GetTradesRequest,
  encodeBinary as encodeBinary_83,
  decodeBinary as decodeBinary_83,
  encodeJson as encodeJson_83,
} from "../../messages/api/GetTradesRequest";
import {
  Type as GetTradesResponse,
  encodeBinary as encodeBinary_84,
  decodeBinary as decodeBinary_84,
  encodeJson as encodeJson_84,
} from "../../messages/api/GetTradesResponse";
import {
  Type as GetQuotesRequest,
  encodeBinary as encodeBinary_85,
  decodeBinary as decodeBinary_85,
  encodeJson as encodeJson_85,
} from "../../messages/api/GetQuotesRequest";
import {
  Type as GetQuotesResponse,
  encodeBinary as encodeBinary_86,
  decodeBinary as decodeBinary_86,
  encodeJson as encodeJson_86,
} from "../../messages/api/GetQuotesResponse";
import {
  Type as GetServerTimeRequest,
  encodeBinary as encodeBinary_87,
  decodeBinary as decodeBinary_87,
  encodeJson as encodeJson_87,
} from "../../messages/api/GetServerTimeRequest";
import {
  Type as GetServerTimeResponse,
  encodeBinary as encodeBinary_88,
  decodeBinary as decodeBinary_88,
  encodeJson as encodeJson_88,
} from "../../messages/api/GetServerTimeResponse";
import {
  Type as GetRecentBlockHashRequest,
  encodeBinary as encodeBinary_89,
  decodeBinary as decodeBinary_89,
  encodeJson as encodeJson_89,
} from "../../messages/api/GetRecentBlockHashRequest";
import {
  Type as GetRecentBlockHashResponse,
  encodeBinary as encodeBinary_90,
  decodeBinary as decodeBinary_90,
  encodeJson as encodeJson_90,
} from "../../messages/api/GetRecentBlockHashResponse";
import {
  Type as GetAccountBalanceRequest,
  encodeBinary as encodeBinary_91,
  decodeBinary as decodeBinary_91,
  encodeJson as encodeJson_91,
} from "../../messages/api/GetAccountBalanceRequest";
import {
  Type as GetAccountBalanceResponse,
  encodeBinary as encodeBinary_92,
  decodeBinary as decodeBinary_92,
  encodeJson as encodeJson_92,
} from "../../messages/api/GetAccountBalanceResponse";
import {
  Type as GetTokenAccountsRequest,
  encodeBinary as encodeBinary_93,
  decodeBinary as decodeBinary_93,
  encodeJson as encodeJson_93,
} from "../../messages/api/GetTokenAccountsRequest";
import {
  Type as GetTokenAccountsResponse,
  encodeBinary as encodeBinary_94,
  decodeBinary as decodeBinary_94,
  encodeJson as encodeJson_94,
} from "../../messages/api/GetTokenAccountsResponse";
import {
  Type as PostOrderRequest,
  encodeBinary as encodeBinary_95,
  decodeBinary as decodeBinary_95,
  encodeJson as encodeJson_95,
} from "../../messages/api/PostOrderRequest";
import {
  Type as PostSubmitRequest,
  encodeBinary as encodeBinary_96,
  decodeBinary as decodeBinary_96,
  encodeJson as encodeJson_96,
} from "../../messages/api/PostSubmitRequest";
import {
  Type as PostSubmitResponse,
  encodeBinary as encodeBinary_97,
  decodeBinary as decodeBinary_97,
  encodeJson as encodeJson_97,
} from "../../messages/api/PostSubmitResponse";
import {
  Type as PostSubmitBatchRequest,
  encodeBinary as encodeBinary_98,
  decodeBinary as decodeBinary_98,
  encodeJson as encodeJson_98,
} from "../../messages/api/PostSubmitBatchRequest";
import {
  Type as PostSubmitBatchResponse,
  encodeBinary as encodeBinary_99,
  decodeBinary as decodeBinary_99,
  encodeJson as encodeJson_99,
} from "../../messages/api/PostSubmitBatchResponse";
import {
  Type as PostCancelOrderRequest,
  encodeBinary as encodeBinary_100,
  decodeBinary as decodeBinary_100,
  encodeJson as encodeJson_100,
} from "../../messages/api/PostCancelOrderRequest";
import {
  Type as PostCancelOrderResponse,
  encodeBinary as encodeBinary_101,
  decodeBinary as decodeBinary_101,
  encodeJson as encodeJson_101,
} from "../../messages/api/PostCancelOrderResponse";
import {
  Type as PostCancelByClientOrderIDRequest,
  encodeBinary as encodeBinary_102,
  decodeBinary as decodeBinary_102,
  encodeJson as encodeJson_102,
} from "../../messages/api/PostCancelByClientOrderIDRequest";
import {
  Type as PostCancelAllRequest,
  encodeBinary as encodeBinary_103,
  decodeBinary as decodeBinary_103,
  encodeJson as encodeJson_103,
} from "../../messages/api/PostCancelAllRequest";
import {
  Type as PostCancelAllResponse,
  encodeBinary as encodeBinary_104,
  decodeBinary as decodeBinary_104,
  encodeJson as encodeJson_104,
} from "../../messages/api/PostCancelAllResponse";
import {
  Type as PostReplaceOrderRequest,
  encodeBinary as encodeBinary_105,
  decodeBinary as decodeBinary_105,
  encodeJson as encodeJson_105,
} from "../../messages/api/PostReplaceOrderRequest";
import {
  Type as PostSettleRequest,
  encodeBinary as encodeBinary_106,
  decodeBinary as decodeBinary_106,
  encodeJson as encodeJson_106,
} from "../../messages/api/PostSettleRequest";
import {
  Type as TradeSwapRequest,
  encodeBinary as encodeBinary_107,
  decodeBinary as decodeBinary_107,
  encodeJson as encodeJson_107,
} from "../../messages/api/TradeSwapRequest";
import {
  Type as TradeSwapResponse,
  encodeBinary as encodeBinary_108,
  decodeBinary as decodeBinary_108,
  encodeJson as encodeJson_108,
} from "../../messages/api/TradeSwapResponse";
import {
  Type as GetOrdersRequest,
  encodeBinary as encodeBinary_109,
  decodeBinary as decodeBinary_109,
  encodeJson as encodeJson_109,
} from "../../messages/api/GetOrdersRequest";
import {
  Type as GetOrdersResponse,
  encodeBinary as encodeBinary_110,
  decodeBinary as decodeBinary_110,
  encodeJson as encodeJson_110,
} from "../../messages/api/GetOrdersResponse";
import {
  Type as GetOpenOrdersRequest,
  encodeBinary as encodeBinary_111,
  decodeBinary as decodeBinary_111,
  encodeJson as encodeJson_111,
} from "../../messages/api/GetOpenOrdersRequest";
import {
  Type as GetOrderByIDRequest,
  encodeBinary as encodeBinary_112,
  decodeBinary as decodeBinary_112,
  encodeJson as encodeJson_112,
} from "../../messages/api/GetOrderByIDRequest";
import {
  Type as GetOrderByIDResponse,
  encodeBinary as encodeBinary_113,
  decodeBinary as decodeBinary_113,
  encodeJson as encodeJson_113,
} from "../../messages/api/GetOrderByIDResponse";
import {
  Type as GetUnsettledRequest,
  encodeBinary as encodeBinary_114,
  decodeBinary as decodeBinary_114,
  encodeJson as encodeJson_114,
} from "../../messages/api/GetUnsettledRequest";
import {
  Type as RouteTradeSwapRequest,
  encodeBinary as encodeBinary_115,
  decodeBinary as decodeBinary_115,
  encodeJson as encodeJson_115,
} from "../../messages/api/RouteTradeSwapRequest";
import {
  Type as PostPerpOrderRequest,
  encodeBinary as encodeBinary_116,
  decodeBinary as decodeBinary_116,
  encodeJson as encodeJson_116,
} from "../../messages/api/PostPerpOrderRequest";
import {
  Type as PostPerpOrderResponse,
  encodeBinary as encodeBinary_117,
  decodeBinary as decodeBinary_117,
  encodeJson as encodeJson_117,
} from "../../messages/api/PostPerpOrderResponse";
import {
  Type as GetPerpPositionsRequest,
  encodeBinary as encodeBinary_118,
  decodeBinary as decodeBinary_118,
  encodeJson as encodeJson_118,
} from "../../messages/api/GetPerpPositionsRequest";
import {
  Type as GetPerpPositionsResponse,
  encodeBinary as encodeBinary_119,
  decodeBinary as decodeBinary_119,
  encodeJson as encodeJson_119,
} from "../../messages/api/GetPerpPositionsResponse";
import {
  Type as GetOpenPerpOrdersRequest,
  encodeBinary as encodeBinary_120,
  decodeBinary as decodeBinary_120,
  encodeJson as encodeJson_120,
} from "../../messages/api/GetOpenPerpOrdersRequest";
import {
  Type as GetOpenPerpOrdersResponse,
  encodeBinary as encodeBinary_121,
  decodeBinary as decodeBinary_121,
  encodeJson as encodeJson_121,
} from "../../messages/api/GetOpenPerpOrdersResponse";
import {
  Type as PostCancelPerpOrdersRequest,
  encodeBinary as encodeBinary_122,
  decodeBinary as decodeBinary_122,
  encodeJson as encodeJson_122,
} from "../../messages/api/PostCancelPerpOrdersRequest";
import {
  Type as PostCancelPerpOrdersResponse,
  encodeBinary as encodeBinary_123,
  decodeBinary as decodeBinary_123,
  encodeJson as encodeJson_123,
} from "../../messages/api/PostCancelPerpOrdersResponse";
import {
  Type as PostCancelPerpOrderRequest,
  encodeBinary as encodeBinary_124,
  decodeBinary as decodeBinary_124,
  encodeJson as encodeJson_124,
} from "../../messages/api/PostCancelPerpOrderRequest";
import {
  Type as PostCancelPerpOrderResponse,
  encodeBinary as encodeBinary_125,
  decodeBinary as decodeBinary_125,
  encodeJson as encodeJson_125,
} from "../../messages/api/PostCancelPerpOrderResponse";
import {
  Type as PostClosePerpPositionsRequest,
  encodeBinary as encodeBinary_126,
  decodeBinary as decodeBinary_126,
  encodeJson as encodeJson_126,
} from "../../messages/api/PostClosePerpPositionsRequest";
import {
  Type as PostClosePerpPositionsResponse,
  encodeBinary as encodeBinary_127,
  decodeBinary as decodeBinary_127,
  encodeJson as encodeJson_127,
} from "../../messages/api/PostClosePerpPositionsResponse";
import {
  Type as GetPerpOrderbookRequest,
  encodeBinary as encodeBinary_128,
  decodeBinary as decodeBinary_128,
  encodeJson as encodeJson_128,
} from "../../messages/api/GetPerpOrderbookRequest";
import {
  Type as GetPerpOrderbookResponse,
  encodeBinary as encodeBinary_129,
  decodeBinary as decodeBinary_129,
  encodeJson as encodeJson_129,
} from "../../messages/api/GetPerpOrderbookResponse";
import {
  Type as PostCreateUserRequest,
  encodeBinary as encodeBinary_130,
  decodeBinary as decodeBinary_130,
  encodeJson as encodeJson_130,
} from "../../messages/api/PostCreateUserRequest";
import {
  Type as PostCreateUserResponse,
  encodeBinary as encodeBinary_131,
  decodeBinary as decodeBinary_131,
  encodeJson as encodeJson_131,
} from "../../messages/api/PostCreateUserResponse";
import {
  Type as GetUserRequest,
  encodeBinary as encodeBinary_132,
  decodeBinary as decodeBinary_132,
  encodeJson as encodeJson_132,
} from "../../messages/api/GetUserRequest";
import {
  Type as GetUserResponse,
  encodeBinary as encodeBinary_133,
  decodeBinary as decodeBinary_133,
  encodeJson as encodeJson_133,
} from "../../messages/api/GetUserResponse";
import {
  Type as PostManageCollateralRequest,
  encodeBinary as encodeBinary_134,
  decodeBinary as decodeBinary_134,
  encodeJson as encodeJson_134,
} from "../../messages/api/PostManageCollateralRequest";
import {
  Type as PostManageCollateralResponse,
  encodeBinary as encodeBinary_135,
  decodeBinary as decodeBinary_135,
  encodeJson as encodeJson_135,
} from "../../messages/api/PostManageCollateralResponse";
import {
  Type as PostSettlePNLRequest,
  encodeBinary as encodeBinary_136,
  decodeBinary as decodeBinary_136,
  encodeJson as encodeJson_136,
} from "../../messages/api/PostSettlePNLRequest";
import {
  Type as PostSettlePNLResponse,
  encodeBinary as encodeBinary_137,
  decodeBinary as decodeBinary_137,
  encodeJson as encodeJson_137,
} from "../../messages/api/PostSettlePNLResponse";
import {
  Type as PostSettlePNLsRequest,
  encodeBinary as encodeBinary_138,
  decodeBinary as decodeBinary_138,
  encodeJson as encodeJson_138,
} from "../../messages/api/PostSettlePNLsRequest";
import {
  Type as PostSettlePNLsResponse,
  encodeBinary as encodeBinary_139,
  decodeBinary as decodeBinary_139,
  encodeJson as encodeJson_139,
} from "../../messages/api/PostSettlePNLsResponse";
import {
  Type as GetAssetsRequest,
  encodeBinary as encodeBinary_140,
  decodeBinary as decodeBinary_140,
  encodeJson as encodeJson_140,
} from "../../messages/api/GetAssetsRequest";
import {
  Type as GetAssetsResponse,
  encodeBinary as encodeBinary_141,
  decodeBinary as decodeBinary_141,
  encodeJson as encodeJson_141,
} from "../../messages/api/GetAssetsResponse";
import {
  Type as GetPerpContractsRequest,
  encodeBinary as encodeBinary_142,
  decodeBinary as decodeBinary_142,
  encodeJson as encodeJson_142,
} from "../../messages/api/GetPerpContractsRequest";
import {
  Type as GetPerpContractsResponse,
  encodeBinary as encodeBinary_143,
  decodeBinary as decodeBinary_143,
  encodeJson as encodeJson_143,
} from "../../messages/api/GetPerpContractsResponse";
import {
  Type as PostLiquidatePerpRequest,
  encodeBinary as encodeBinary_144,
  decodeBinary as decodeBinary_144,
  encodeJson as encodeJson_144,
} from "../../messages/api/PostLiquidatePerpRequest";
import {
  Type as PostLiquidatePerpResponse,
  encodeBinary as encodeBinary_145,
  decodeBinary as decodeBinary_145,
  encodeJson as encodeJson_145,
} from "../../messages/api/PostLiquidatePerpResponse";
import {
  Type as GetOpenPerpOrderRequest,
  encodeBinary as encodeBinary_146,
  decodeBinary as decodeBinary_146,
  encodeJson as encodeJson_146,
} from "../../messages/api/GetOpenPerpOrderRequest";
import {
  Type as GetOpenPerpOrderResponse,
  encodeBinary as encodeBinary_147,
  decodeBinary as decodeBinary_147,
  encodeJson as encodeJson_147,
} from "../../messages/api/GetOpenPerpOrderResponse";
import {
  Type as GetOrderbooksRequest,
  encodeBinary as encodeBinary_148,
  decodeBinary as decodeBinary_148,
  encodeJson as encodeJson_148,
} from "../../messages/api/GetOrderbooksRequest";
import {
  Type as GetOrderbooksStreamResponse,
  encodeBinary as encodeBinary_149,
  decodeBinary as decodeBinary_149,
  encodeJson as encodeJson_149,
} from "../../messages/api/GetOrderbooksStreamResponse";
import {
  Type as GetMarketDepthsRequest,
  encodeBinary as encodeBinary_150,
  decodeBinary as decodeBinary_150,
  encodeJson as encodeJson_150,
} from "../../messages/api/GetMarketDepthsRequest";
import {
  Type as GetMarketDepthsStreamResponse,
  encodeBinary as encodeBinary_151,
  decodeBinary as decodeBinary_151,
  encodeJson as encodeJson_151,
} from "../../messages/api/GetMarketDepthsStreamResponse";
import {
  Type as GetTickersStreamResponse,
  encodeBinary as encodeBinary_152,
  decodeBinary as decodeBinary_152,
  encodeJson as encodeJson_152,
} from "../../messages/api/GetTickersStreamResponse";
import {
  Type as GetTradesStreamResponse,
  encodeBinary as encodeBinary_153,
  decodeBinary as decodeBinary_153,
  encodeJson as encodeJson_153,
} from "../../messages/api/GetTradesStreamResponse";
import {
  Type as GetOrderStatusStreamRequest,
  encodeBinary as encodeBinary_154,
  decodeBinary as decodeBinary_154,
  encodeJson as encodeJson_154,
} from "../../messages/api/GetOrderStatusStreamRequest";
import {
  Type as GetOrderStatusStreamResponse,
  encodeBinary as encodeBinary_155,
  decodeBinary as decodeBinary_155,
  encodeJson as encodeJson_155,
} from "../../messages/api/GetOrderStatusStreamResponse";
import {
  Type as GetBlockStreamRequest,
  encodeBinary as encodeBinary_156,
  decodeBinary as decodeBinary_156,
  encodeJson as encodeJson_156,
} from "../../messages/api/GetBlockStreamRequest";
import {
  Type as GetBlockStreamResponse,
  encodeBinary as encodeBinary_157,
  decodeBinary as decodeBinary_157,
  encodeJson as encodeJson_157,
} from "../../messages/api/GetBlockStreamResponse";
import {
  Type as GetQuotesStreamRequest,
  encodeBinary as encodeBinary_158,
  decodeBinary as decodeBinary_158,
  encodeJson as encodeJson_158,
} from "../../messages/api/GetQuotesStreamRequest";
import {
  Type as GetQuotesStreamResponse,
  encodeBinary as encodeBinary_159,
  decodeBinary as decodeBinary_159,
  encodeJson as encodeJson_159,
} from "../../messages/api/GetQuotesStreamResponse";
import {
  Type as GetPoolReservesStreamRequest,
  encodeBinary as encodeBinary_160,
  decodeBinary as decodeBinary_160,
  encodeJson as encodeJson_160,
} from "../../messages/api/GetPoolReservesStreamRequest";
import {
  Type as GetPoolReservesStreamResponse,
  encodeBinary as encodeBinary_161,
  decodeBinary as decodeBinary_161,
  encodeJson as encodeJson_161,
} from "../../messages/api/GetPoolReservesStreamResponse";
import {
  Type as GetPricesStreamRequest,
  encodeBinary as encodeBinary_162,
  decodeBinary as decodeBinary_162,
  encodeJson as encodeJson_162,
} from "../../messages/api/GetPricesStreamRequest";
import {
  Type as GetPricesStreamResponse,
  encodeBinary as encodeBinary_163,
  decodeBinary as decodeBinary_163,
  encodeJson as encodeJson_163,
} from "../../messages/api/GetPricesStreamResponse";
import {
  Type as GetSwapsStreamRequest,
  encodeBinary as encodeBinary_164,
  decodeBinary as decodeBinary_164,
  encodeJson as encodeJson_164,
} from "../../messages/api/GetSwapsStreamRequest";
import {
  Type as GetSwapsStreamResponse,
  encodeBinary as encodeBinary_165,
  decodeBinary as decodeBinary_165,
  encodeJson as encodeJson_165,
} from "../../messages/api/GetSwapsStreamResponse";
import {
  Type as GetPerpOrderbooksRequest,
  encodeBinary as encodeBinary_166,
  decodeBinary as decodeBinary_166,
  encodeJson as encodeJson_166,
} from "../../messages/api/GetPerpOrderbooksRequest";
import {
  Type as GetPerpOrderbooksStreamResponse,
  encodeBinary as encodeBinary_167,
  decodeBinary as decodeBinary_167,
  encodeJson as encodeJson_167,
} from "../../messages/api/GetPerpOrderbooksStreamResponse";
import {
  Type as GetPerpTradesStreamRequest,
  encodeBinary as encodeBinary_168,
  decodeBinary as decodeBinary_168,
  encodeJson as encodeJson_168,
} from "../../messages/api/GetPerpTradesStreamRequest";
import {
  Type as GetPerpTradesStreamResponse,
  encodeBinary as encodeBinary_169,
  decodeBinary as decodeBinary_169,
  encodeJson as encodeJson_169,
} from "../../messages/api/GetPerpTradesStreamResponse";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  postCloseDriftPerpPositions(request: PostCloseDriftPerpPositionsRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCloseDriftPerpPositionsResponse>, TResArgs>;
  getDriftPerpOrderbook(request: GetDriftPerpOrderbookRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftPerpOrderbookResponse>, TResArgs>;
  postCreateDriftUser(request: PostCreateDriftUserRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCreateDriftUserResponse>, TResArgs>;
  getDriftUser(request: GetDriftUserRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftUserResponse>, TResArgs>;
  postDriftManageCollateral(request: PostDriftManageCollateralRequest, ...args: TReqArgs): RpcReturnType<Promise<PostDriftManageCollateralResponse>, TResArgs>;
  postDriftSettlePNL(request: PostDriftSettlePNLRequest, ...args: TReqArgs): RpcReturnType<Promise<PostDriftSettlePNLResponse>, TResArgs>;
  postDriftSettlePNLs(request: PostDriftSettlePNLsRequest, ...args: TReqArgs): RpcReturnType<Promise<PostDriftSettlePNLsResponse>, TResArgs>;
  getDriftAssets(request: GetDriftAssetsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftAssetsResponse>, TResArgs>;
  getDriftPerpContracts(request: GetDriftPerpContractsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftPerpContractsResponse>, TResArgs>;
  postLiquidateDriftPerp(request: PostLiquidateDriftPerpRequest, ...args: TReqArgs): RpcReturnType<Promise<PostLiquidateDriftPerpResponse>, TResArgs>;
  getDriftOpenPerpOrder(request: GetDriftOpenPerpOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftOpenPerpOrderResponse>, TResArgs>;
  getDriftOpenMarginOrder(request: GetDriftOpenMarginOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftOpenMarginOrderResponse>, TResArgs>;
  getDriftPerpPositions(request: GetDriftPerpPositionsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftPerpPositionsResponse>, TResArgs>;
  getDriftOpenPerpOrders(request: GetDriftOpenPerpOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftOpenPerpOrdersResponse>, TResArgs>;
  postDriftCancelPerpOrder(request: PostDriftCancelPerpOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostDriftCancelPerpOrderResponse>, TResArgs>;
  postModifyDriftOrder(request: PostModifyDriftOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostModifyDriftOrderResponse>, TResArgs>;
  postCancelDriftMarginOrder(request: PostCancelDriftMarginOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelDriftMarginOrderResponse>, TResArgs>;
  getDriftOpenMarginOrders(request: GetDriftOpenMarginOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftOpenMarginOrdersResponse>, TResArgs>;
  getDriftMarkets(request: GetDriftMarketsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftMarketsResponse>, TResArgs>;
  postDriftMarginOrder(request: PostDriftMarginOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostDriftMarginOrderResponse>, TResArgs>;
  postDriftEnableMarginTrading(request: PostDriftEnableMarginTradingRequest, ...args: TReqArgs): RpcReturnType<Promise<PostDriftEnableMarginTradingResponse>, TResArgs>;
  getDriftMarginOrderbook(request: GetDriftMarginOrderbookRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftMarginOrderbookResponse>, TResArgs>;
  getDriftMarketDepth(request: GetDriftMarketDepthRequest, ...args: TReqArgs): RpcReturnType<Promise<GetDriftMarketDepthResponse>, TResArgs>;
  getDriftMarginOrderbooksStream(request: GetDriftMarginOrderbooksRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetDriftMarginOrderbooksStreamResponse>, TResArgs>;
  getDriftMarketDepthsStream(request: GetDriftMarketDepthsStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetDriftMarketDepthStreamResponse>, TResArgs>;
  getMarketsV2(request: GetMarketsRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetMarketsResponseV2>, TResArgs>;
  getTickersV2(request: GetTickersRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetTickersResponseV2>, TResArgs>;
  getOrderbookV2(request: GetOrderbookRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetOrderbookResponseV2>, TResArgs>;
  getMarketDepthV2(request: GetMarketDepthRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetMarketDepthResponseV2>, TResArgs>;
  postOrderV2(request: PostOrderRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postCancelOrderV2(request: PostCancelOrderRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponseV2>, TResArgs>;
  postReplaceOrderV2(request: PostReplaceOrderRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSettleV2(request: PostSettleRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostSettleResponse>, TResArgs>;
  getOpenOrdersV2(request: GetOpenOrdersRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetOpenOrdersResponse>, TResArgs>;
  getUnsettledV2(request: GetUnsettledRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetUnsettledResponse>, TResArgs>;
  getPrice(request: GetPriceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPriceResponse>, TResArgs>;
  getMarkets(request: GetMarketsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetMarketsResponse>, TResArgs>;
  getPools(request: GetPoolsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPoolsResponse>, TResArgs>;
  getTickers(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTickersResponse>, TResArgs>;
  getKline(request: GetKlineRequest, ...args: TReqArgs): RpcReturnType<Promise<GetKlineResponse>, TResArgs>;
  getOrderbook(request: GetOrderbookRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderbookResponse>, TResArgs>;
  getMarketDepth(request: GetMarketDepthRequest, ...args: TReqArgs): RpcReturnType<Promise<GetMarketDepthResponse>, TResArgs>;
  getTrades(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTradesResponse>, TResArgs>;
  getQuotes(request: GetQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetQuotesResponse>, TResArgs>;
  getServerTime(request: GetServerTimeRequest, ...args: TReqArgs): RpcReturnType<Promise<GetServerTimeResponse>, TResArgs>;
  getRecentBlockHash(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRecentBlockHashResponse>, TResArgs>;
  getAccountBalance(request: GetAccountBalanceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetAccountBalanceResponse>, TResArgs>;
  getTokenAccounts(request: GetTokenAccountsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTokenAccountsResponse>, TResArgs>;
  postOrder(request: PostOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSubmit(request: PostSubmitRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  postSubmitBatch(request: PostSubmitBatchRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitBatchResponse>, TResArgs>;
  postCancelOrder(request: PostCancelOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponse>, TResArgs>;
  postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponse>, TResArgs>;
  postCancelAll(request: PostCancelAllRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelAllResponse>, TResArgs>;
  postReplaceByClientOrderID(request: PostOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postReplaceOrder(request: PostReplaceOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSettle(request: PostSettleRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSettleResponse>, TResArgs>;
  postTradeSwap(request: TradeSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<TradeSwapResponse>, TResArgs>;
  getOrders(request: GetOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrdersResponse>, TResArgs>;
  getOpenOrders(request: GetOpenOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOpenOrdersResponse>, TResArgs>;
  getOrderByID(request: GetOrderByIDRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderByIDResponse>, TResArgs>;
  getUnsettled(request: GetUnsettledRequest, ...args: TReqArgs): RpcReturnType<Promise<GetUnsettledResponse>, TResArgs>;
  postRouteTradeSwap(request: RouteTradeSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<TradeSwapResponse>, TResArgs>;
  postPerpOrder(request: PostPerpOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostPerpOrderResponse>, TResArgs>;
  getPerpPositions(request: GetPerpPositionsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPerpPositionsResponse>, TResArgs>;
  getOpenPerpOrders(request: GetOpenPerpOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOpenPerpOrdersResponse>, TResArgs>;
  postCancelPerpOrders(request: PostCancelPerpOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelPerpOrdersResponse>, TResArgs>;
  postCancelPerpOrder(request: PostCancelPerpOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelPerpOrderResponse>, TResArgs>;
  postClosePerpPositions(request: PostClosePerpPositionsRequest, ...args: TReqArgs): RpcReturnType<Promise<PostClosePerpPositionsResponse>, TResArgs>;
  getPerpOrderbook(request: GetPerpOrderbookRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPerpOrderbookResponse>, TResArgs>;
  postCreateUser(request: PostCreateUserRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCreateUserResponse>, TResArgs>;
  getUser(request: GetUserRequest, ...args: TReqArgs): RpcReturnType<Promise<GetUserResponse>, TResArgs>;
  postManageCollateral(request: PostManageCollateralRequest, ...args: TReqArgs): RpcReturnType<Promise<PostManageCollateralResponse>, TResArgs>;
  postSettlePNL(request: PostSettlePNLRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSettlePNLResponse>, TResArgs>;
  postSettlePNLs(request: PostSettlePNLsRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSettlePNLsResponse>, TResArgs>;
  getAssets(request: GetAssetsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetAssetsResponse>, TResArgs>;
  getPerpContracts(request: GetPerpContractsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPerpContractsResponse>, TResArgs>;
  postLiquidatePerp(request: PostLiquidatePerpRequest, ...args: TReqArgs): RpcReturnType<Promise<PostLiquidatePerpResponse>, TResArgs>;
  getOpenPerpOrder(request: GetOpenPerpOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOpenPerpOrderResponse>, TResArgs>;
  getOrderbooksStream(request: GetOrderbooksRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderbooksStreamResponse>, TResArgs>;
  getMarketDepthsStream(request: GetMarketDepthsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetMarketDepthsStreamResponse>, TResArgs>;
  getTickersStream(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTickersStreamResponse>, TResArgs>;
  getTradesStream(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTradesStreamResponse>, TResArgs>;
  getOrderStatusStream(request: GetOrderStatusStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderStatusStreamResponse>, TResArgs>;
  getRecentBlockHashStream(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetRecentBlockHashResponse>, TResArgs>;
  getBlockStream(request: GetBlockStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetBlockStreamResponse>, TResArgs>;
  getQuotesStream(request: GetQuotesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetQuotesStreamResponse>, TResArgs>;
  getPoolReservesStream(request: GetPoolReservesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPoolReservesStreamResponse>, TResArgs>;
  getPricesStream(request: GetPricesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPricesStreamResponse>, TResArgs>;
  getSwapsStream(request: GetSwapsStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetSwapsStreamResponse>, TResArgs>;
  getPerpOrderbooksStream(request: GetPerpOrderbooksRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPerpOrderbooksStreamResponse>, TResArgs>;
  getPerpTradesStream(request: GetPerpTradesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPerpTradesStreamResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  postCloseDriftPerpPositions: {
    methodName: "PostCloseDriftPerpPositions",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: PostCloseDriftPerpPositionsRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: PostCloseDriftPerpPositionsResponse) => JSON.stringify(encodeJson_1(value)),
    },
  },
  getDriftPerpOrderbook: {
    methodName: "GetDriftPerpOrderbook",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GetDriftPerpOrderbookRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: GetDriftPerpOrderbookResponse) => JSON.stringify(encodeJson_3(value)),
    },
  },
  postCreateDriftUser: {
    methodName: "PostCreateDriftUser",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: PostCreateDriftUserRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: PostCreateDriftUserResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  getDriftUser: {
    methodName: "GetDriftUser",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: GetDriftUserRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: GetDriftUserResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  postDriftManageCollateral: {
    methodName: "PostDriftManageCollateral",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: PostDriftManageCollateralRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_9,
      deserializeBinary: decodeBinary_9,
      serializeJson: (value: PostDriftManageCollateralResponse) => JSON.stringify(encodeJson_9(value)),
    },
  },
  postDriftSettlePNL: {
    methodName: "PostDriftSettlePNL",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_10,
      deserializeBinary: decodeBinary_10,
      serializeJson: (value: PostDriftSettlePNLRequest) => JSON.stringify(encodeJson_10(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_11,
      deserializeBinary: decodeBinary_11,
      serializeJson: (value: PostDriftSettlePNLResponse) => JSON.stringify(encodeJson_11(value)),
    },
  },
  postDriftSettlePNLs: {
    methodName: "PostDriftSettlePNLs",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: PostDriftSettlePNLsRequest) => JSON.stringify(encodeJson_12(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_13,
      deserializeBinary: decodeBinary_13,
      serializeJson: (value: PostDriftSettlePNLsResponse) => JSON.stringify(encodeJson_13(value)),
    },
  },
  getDriftAssets: {
    methodName: "GetDriftAssets",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_14,
      deserializeBinary: decodeBinary_14,
      serializeJson: (value: GetDriftAssetsRequest) => JSON.stringify(encodeJson_14(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_15,
      deserializeBinary: decodeBinary_15,
      serializeJson: (value: GetDriftAssetsResponse) => JSON.stringify(encodeJson_15(value)),
    },
  },
  getDriftPerpContracts: {
    methodName: "GetDriftPerpContracts",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_16,
      deserializeBinary: decodeBinary_16,
      serializeJson: (value: GetDriftPerpContractsRequest) => JSON.stringify(encodeJson_16(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_17,
      deserializeBinary: decodeBinary_17,
      serializeJson: (value: GetDriftPerpContractsResponse) => JSON.stringify(encodeJson_17(value)),
    },
  },
  postLiquidateDriftPerp: {
    methodName: "PostLiquidateDriftPerp",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_18,
      deserializeBinary: decodeBinary_18,
      serializeJson: (value: PostLiquidateDriftPerpRequest) => JSON.stringify(encodeJson_18(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: PostLiquidateDriftPerpResponse) => JSON.stringify(encodeJson_19(value)),
    },
  },
  getDriftOpenPerpOrder: {
    methodName: "GetDriftOpenPerpOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_20,
      deserializeBinary: decodeBinary_20,
      serializeJson: (value: GetDriftOpenPerpOrderRequest) => JSON.stringify(encodeJson_20(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_21,
      deserializeBinary: decodeBinary_21,
      serializeJson: (value: GetDriftOpenPerpOrderResponse) => JSON.stringify(encodeJson_21(value)),
    },
  },
  getDriftOpenMarginOrder: {
    methodName: "GetDriftOpenMarginOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_22,
      deserializeBinary: decodeBinary_22,
      serializeJson: (value: GetDriftOpenMarginOrderRequest) => JSON.stringify(encodeJson_22(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: GetDriftOpenMarginOrderResponse) => JSON.stringify(encodeJson_23(value)),
    },
  },
  getDriftPerpPositions: {
    methodName: "GetDriftPerpPositions",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_24,
      deserializeBinary: decodeBinary_24,
      serializeJson: (value: GetDriftPerpPositionsRequest) => JSON.stringify(encodeJson_24(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_25,
      deserializeBinary: decodeBinary_25,
      serializeJson: (value: GetDriftPerpPositionsResponse) => JSON.stringify(encodeJson_25(value)),
    },
  },
  getDriftOpenPerpOrders: {
    methodName: "GetDriftOpenPerpOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_26,
      deserializeBinary: decodeBinary_26,
      serializeJson: (value: GetDriftOpenPerpOrdersRequest) => JSON.stringify(encodeJson_26(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_27,
      deserializeBinary: decodeBinary_27,
      serializeJson: (value: GetDriftOpenPerpOrdersResponse) => JSON.stringify(encodeJson_27(value)),
    },
  },
  postDriftCancelPerpOrder: {
    methodName: "PostDriftCancelPerpOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_28,
      deserializeBinary: decodeBinary_28,
      serializeJson: (value: PostDriftCancelPerpOrderRequest) => JSON.stringify(encodeJson_28(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_29,
      deserializeBinary: decodeBinary_29,
      serializeJson: (value: PostDriftCancelPerpOrderResponse) => JSON.stringify(encodeJson_29(value)),
    },
  },
  postModifyDriftOrder: {
    methodName: "PostModifyDriftOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_30,
      deserializeBinary: decodeBinary_30,
      serializeJson: (value: PostModifyDriftOrderRequest) => JSON.stringify(encodeJson_30(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_31,
      deserializeBinary: decodeBinary_31,
      serializeJson: (value: PostModifyDriftOrderResponse) => JSON.stringify(encodeJson_31(value)),
    },
  },
  postCancelDriftMarginOrder: {
    methodName: "PostCancelDriftMarginOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_32,
      deserializeBinary: decodeBinary_32,
      serializeJson: (value: PostCancelDriftMarginOrderRequest) => JSON.stringify(encodeJson_32(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_33,
      deserializeBinary: decodeBinary_33,
      serializeJson: (value: PostCancelDriftMarginOrderResponse) => JSON.stringify(encodeJson_33(value)),
    },
  },
  getDriftOpenMarginOrders: {
    methodName: "GetDriftOpenMarginOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_34,
      deserializeBinary: decodeBinary_34,
      serializeJson: (value: GetDriftOpenMarginOrdersRequest) => JSON.stringify(encodeJson_34(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_35,
      deserializeBinary: decodeBinary_35,
      serializeJson: (value: GetDriftOpenMarginOrdersResponse) => JSON.stringify(encodeJson_35(value)),
    },
  },
  getDriftMarkets: {
    methodName: "GetDriftMarkets",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_36,
      deserializeBinary: decodeBinary_36,
      serializeJson: (value: GetDriftMarketsRequest) => JSON.stringify(encodeJson_36(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_37,
      deserializeBinary: decodeBinary_37,
      serializeJson: (value: GetDriftMarketsResponse) => JSON.stringify(encodeJson_37(value)),
    },
  },
  postDriftMarginOrder: {
    methodName: "PostDriftMarginOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_38,
      deserializeBinary: decodeBinary_38,
      serializeJson: (value: PostDriftMarginOrderRequest) => JSON.stringify(encodeJson_38(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_39,
      deserializeBinary: decodeBinary_39,
      serializeJson: (value: PostDriftMarginOrderResponse) => JSON.stringify(encodeJson_39(value)),
    },
  },
  postDriftEnableMarginTrading: {
    methodName: "PostDriftEnableMarginTrading",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_40,
      deserializeBinary: decodeBinary_40,
      serializeJson: (value: PostDriftEnableMarginTradingRequest) => JSON.stringify(encodeJson_40(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_41,
      deserializeBinary: decodeBinary_41,
      serializeJson: (value: PostDriftEnableMarginTradingResponse) => JSON.stringify(encodeJson_41(value)),
    },
  },
  getDriftMarginOrderbook: {
    methodName: "GetDriftMarginOrderbook",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_42,
      deserializeBinary: decodeBinary_42,
      serializeJson: (value: GetDriftMarginOrderbookRequest) => JSON.stringify(encodeJson_42(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_43,
      deserializeBinary: decodeBinary_43,
      serializeJson: (value: GetDriftMarginOrderbookResponse) => JSON.stringify(encodeJson_43(value)),
    },
  },
  getDriftMarketDepth: {
    methodName: "GetDriftMarketDepth",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_44,
      deserializeBinary: decodeBinary_44,
      serializeJson: (value: GetDriftMarketDepthRequest) => JSON.stringify(encodeJson_44(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_45,
      deserializeBinary: decodeBinary_45,
      serializeJson: (value: GetDriftMarketDepthResponse) => JSON.stringify(encodeJson_45(value)),
    },
  },
  getDriftMarginOrderbooksStream: {
    methodName: "GetDriftMarginOrderbooksStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_46,
      deserializeBinary: decodeBinary_46,
      serializeJson: (value: GetDriftMarginOrderbooksRequest) => JSON.stringify(encodeJson_46(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_47,
      deserializeBinary: decodeBinary_47,
      serializeJson: (value: GetDriftMarginOrderbooksStreamResponse) => JSON.stringify(encodeJson_47(value)),
    },
  },
  getDriftMarketDepthsStream: {
    methodName: "GetDriftMarketDepthsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_48,
      deserializeBinary: decodeBinary_48,
      serializeJson: (value: GetDriftMarketDepthsStreamRequest) => JSON.stringify(encodeJson_48(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_49,
      deserializeBinary: decodeBinary_49,
      serializeJson: (value: GetDriftMarketDepthStreamResponse) => JSON.stringify(encodeJson_49(value)),
    },
  },
  getMarketsV2: {
    methodName: "GetMarketsV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_50,
      deserializeBinary: decodeBinary_50,
      serializeJson: (value: GetMarketsRequestV2) => JSON.stringify(encodeJson_50(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_51,
      deserializeBinary: decodeBinary_51,
      serializeJson: (value: GetMarketsResponseV2) => JSON.stringify(encodeJson_51(value)),
    },
  },
  getTickersV2: {
    methodName: "GetTickersV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_52,
      deserializeBinary: decodeBinary_52,
      serializeJson: (value: GetTickersRequestV2) => JSON.stringify(encodeJson_52(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_53,
      deserializeBinary: decodeBinary_53,
      serializeJson: (value: GetTickersResponseV2) => JSON.stringify(encodeJson_53(value)),
    },
  },
  getOrderbookV2: {
    methodName: "GetOrderbookV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_54,
      deserializeBinary: decodeBinary_54,
      serializeJson: (value: GetOrderbookRequestV2) => JSON.stringify(encodeJson_54(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_55,
      deserializeBinary: decodeBinary_55,
      serializeJson: (value: GetOrderbookResponseV2) => JSON.stringify(encodeJson_55(value)),
    },
  },
  getMarketDepthV2: {
    methodName: "GetMarketDepthV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_56,
      deserializeBinary: decodeBinary_56,
      serializeJson: (value: GetMarketDepthRequestV2) => JSON.stringify(encodeJson_56(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_57,
      deserializeBinary: decodeBinary_57,
      serializeJson: (value: GetMarketDepthResponseV2) => JSON.stringify(encodeJson_57(value)),
    },
  },
  postOrderV2: {
    methodName: "PostOrderV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_58,
      deserializeBinary: decodeBinary_58,
      serializeJson: (value: PostOrderRequestV2) => JSON.stringify(encodeJson_58(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_59(value)),
    },
  },
  postCancelOrderV2: {
    methodName: "PostCancelOrderV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_60,
      deserializeBinary: decodeBinary_60,
      serializeJson: (value: PostCancelOrderRequestV2) => JSON.stringify(encodeJson_60(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_61,
      deserializeBinary: decodeBinary_61,
      serializeJson: (value: PostCancelOrderResponseV2) => JSON.stringify(encodeJson_61(value)),
    },
  },
  postReplaceOrderV2: {
    methodName: "PostReplaceOrderV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_62,
      deserializeBinary: decodeBinary_62,
      serializeJson: (value: PostReplaceOrderRequestV2) => JSON.stringify(encodeJson_62(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_59(value)),
    },
  },
  postSettleV2: {
    methodName: "PostSettleV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_63,
      deserializeBinary: decodeBinary_63,
      serializeJson: (value: PostSettleRequestV2) => JSON.stringify(encodeJson_63(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_64,
      deserializeBinary: decodeBinary_64,
      serializeJson: (value: PostSettleResponse) => JSON.stringify(encodeJson_64(value)),
    },
  },
  getOpenOrdersV2: {
    methodName: "GetOpenOrdersV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_65,
      deserializeBinary: decodeBinary_65,
      serializeJson: (value: GetOpenOrdersRequestV2) => JSON.stringify(encodeJson_65(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_66,
      deserializeBinary: decodeBinary_66,
      serializeJson: (value: GetOpenOrdersResponse) => JSON.stringify(encodeJson_66(value)),
    },
  },
  getUnsettledV2: {
    methodName: "GetUnsettledV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_67,
      deserializeBinary: decodeBinary_67,
      serializeJson: (value: GetUnsettledRequestV2) => JSON.stringify(encodeJson_67(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_68,
      deserializeBinary: decodeBinary_68,
      serializeJson: (value: GetUnsettledResponse) => JSON.stringify(encodeJson_68(value)),
    },
  },
  getPrice: {
    methodName: "GetPrice",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_69,
      deserializeBinary: decodeBinary_69,
      serializeJson: (value: GetPriceRequest) => JSON.stringify(encodeJson_69(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_70,
      deserializeBinary: decodeBinary_70,
      serializeJson: (value: GetPriceResponse) => JSON.stringify(encodeJson_70(value)),
    },
  },
  getMarkets: {
    methodName: "GetMarkets",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_71,
      deserializeBinary: decodeBinary_71,
      serializeJson: (value: GetMarketsRequest) => JSON.stringify(encodeJson_71(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_72,
      deserializeBinary: decodeBinary_72,
      serializeJson: (value: GetMarketsResponse) => JSON.stringify(encodeJson_72(value)),
    },
  },
  getPools: {
    methodName: "GetPools",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_73,
      deserializeBinary: decodeBinary_73,
      serializeJson: (value: GetPoolsRequest) => JSON.stringify(encodeJson_73(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_74,
      deserializeBinary: decodeBinary_74,
      serializeJson: (value: GetPoolsResponse) => JSON.stringify(encodeJson_74(value)),
    },
  },
  getTickers: {
    methodName: "GetTickers",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_75,
      deserializeBinary: decodeBinary_75,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_75(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_76,
      deserializeBinary: decodeBinary_76,
      serializeJson: (value: GetTickersResponse) => JSON.stringify(encodeJson_76(value)),
    },
  },
  getKline: {
    methodName: "GetKline",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_77,
      deserializeBinary: decodeBinary_77,
      serializeJson: (value: GetKlineRequest) => JSON.stringify(encodeJson_77(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_78,
      deserializeBinary: decodeBinary_78,
      serializeJson: (value: GetKlineResponse) => JSON.stringify(encodeJson_78(value)),
    },
  },
  getOrderbook: {
    methodName: "GetOrderbook",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_79,
      deserializeBinary: decodeBinary_79,
      serializeJson: (value: GetOrderbookRequest) => JSON.stringify(encodeJson_79(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_80,
      deserializeBinary: decodeBinary_80,
      serializeJson: (value: GetOrderbookResponse) => JSON.stringify(encodeJson_80(value)),
    },
  },
  getMarketDepth: {
    methodName: "GetMarketDepth",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_81,
      deserializeBinary: decodeBinary_81,
      serializeJson: (value: GetMarketDepthRequest) => JSON.stringify(encodeJson_81(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_82,
      deserializeBinary: decodeBinary_82,
      serializeJson: (value: GetMarketDepthResponse) => JSON.stringify(encodeJson_82(value)),
    },
  },
  getTrades: {
    methodName: "GetTrades",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_83,
      deserializeBinary: decodeBinary_83,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_83(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_84,
      deserializeBinary: decodeBinary_84,
      serializeJson: (value: GetTradesResponse) => JSON.stringify(encodeJson_84(value)),
    },
  },
  getQuotes: {
    methodName: "GetQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_85,
      deserializeBinary: decodeBinary_85,
      serializeJson: (value: GetQuotesRequest) => JSON.stringify(encodeJson_85(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_86,
      deserializeBinary: decodeBinary_86,
      serializeJson: (value: GetQuotesResponse) => JSON.stringify(encodeJson_86(value)),
    },
  },
  getServerTime: {
    methodName: "GetServerTime",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_87,
      deserializeBinary: decodeBinary_87,
      serializeJson: (value: GetServerTimeRequest) => JSON.stringify(encodeJson_87(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_88,
      deserializeBinary: decodeBinary_88,
      serializeJson: (value: GetServerTimeResponse) => JSON.stringify(encodeJson_88(value)),
    },
  },
  getRecentBlockHash: {
    methodName: "GetRecentBlockHash",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_89,
      deserializeBinary: decodeBinary_89,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_89(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_90,
      deserializeBinary: decodeBinary_90,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_90(value)),
    },
  },
  getAccountBalance: {
    methodName: "GetAccountBalance",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_91,
      deserializeBinary: decodeBinary_91,
      serializeJson: (value: GetAccountBalanceRequest) => JSON.stringify(encodeJson_91(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_92,
      deserializeBinary: decodeBinary_92,
      serializeJson: (value: GetAccountBalanceResponse) => JSON.stringify(encodeJson_92(value)),
    },
  },
  getTokenAccounts: {
    methodName: "GetTokenAccounts",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_93,
      deserializeBinary: decodeBinary_93,
      serializeJson: (value: GetTokenAccountsRequest) => JSON.stringify(encodeJson_93(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_94,
      deserializeBinary: decodeBinary_94,
      serializeJson: (value: GetTokenAccountsResponse) => JSON.stringify(encodeJson_94(value)),
    },
  },
  postOrder: {
    methodName: "PostOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_95,
      deserializeBinary: decodeBinary_95,
      serializeJson: (value: PostOrderRequest) => JSON.stringify(encodeJson_95(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_59(value)),
    },
  },
  postSubmit: {
    methodName: "PostSubmit",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_96,
      deserializeBinary: decodeBinary_96,
      serializeJson: (value: PostSubmitRequest) => JSON.stringify(encodeJson_96(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_97,
      deserializeBinary: decodeBinary_97,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_97(value)),
    },
  },
  postSubmitBatch: {
    methodName: "PostSubmitBatch",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_98,
      deserializeBinary: decodeBinary_98,
      serializeJson: (value: PostSubmitBatchRequest) => JSON.stringify(encodeJson_98(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_99,
      deserializeBinary: decodeBinary_99,
      serializeJson: (value: PostSubmitBatchResponse) => JSON.stringify(encodeJson_99(value)),
    },
  },
  postCancelOrder: {
    methodName: "PostCancelOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_100,
      deserializeBinary: decodeBinary_100,
      serializeJson: (value: PostCancelOrderRequest) => JSON.stringify(encodeJson_100(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_101,
      deserializeBinary: decodeBinary_101,
      serializeJson: (value: PostCancelOrderResponse) => JSON.stringify(encodeJson_101(value)),
    },
  },
  postCancelByClientOrderID: {
    methodName: "PostCancelByClientOrderID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_102,
      deserializeBinary: decodeBinary_102,
      serializeJson: (value: PostCancelByClientOrderIDRequest) => JSON.stringify(encodeJson_102(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_101,
      deserializeBinary: decodeBinary_101,
      serializeJson: (value: PostCancelOrderResponse) => JSON.stringify(encodeJson_101(value)),
    },
  },
  postCancelAll: {
    methodName: "PostCancelAll",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_103,
      deserializeBinary: decodeBinary_103,
      serializeJson: (value: PostCancelAllRequest) => JSON.stringify(encodeJson_103(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_104,
      deserializeBinary: decodeBinary_104,
      serializeJson: (value: PostCancelAllResponse) => JSON.stringify(encodeJson_104(value)),
    },
  },
  postReplaceByClientOrderID: {
    methodName: "PostReplaceByClientOrderID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_95,
      deserializeBinary: decodeBinary_95,
      serializeJson: (value: PostOrderRequest) => JSON.stringify(encodeJson_95(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_59(value)),
    },
  },
  postReplaceOrder: {
    methodName: "PostReplaceOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_105,
      deserializeBinary: decodeBinary_105,
      serializeJson: (value: PostReplaceOrderRequest) => JSON.stringify(encodeJson_105(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_59(value)),
    },
  },
  postSettle: {
    methodName: "PostSettle",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_106,
      deserializeBinary: decodeBinary_106,
      serializeJson: (value: PostSettleRequest) => JSON.stringify(encodeJson_106(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_64,
      deserializeBinary: decodeBinary_64,
      serializeJson: (value: PostSettleResponse) => JSON.stringify(encodeJson_64(value)),
    },
  },
  postTradeSwap: {
    methodName: "PostTradeSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_107,
      deserializeBinary: decodeBinary_107,
      serializeJson: (value: TradeSwapRequest) => JSON.stringify(encodeJson_107(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_108,
      deserializeBinary: decodeBinary_108,
      serializeJson: (value: TradeSwapResponse) => JSON.stringify(encodeJson_108(value)),
    },
  },
  getOrders: {
    methodName: "GetOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_109,
      deserializeBinary: decodeBinary_109,
      serializeJson: (value: GetOrdersRequest) => JSON.stringify(encodeJson_109(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_110,
      deserializeBinary: decodeBinary_110,
      serializeJson: (value: GetOrdersResponse) => JSON.stringify(encodeJson_110(value)),
    },
  },
  getOpenOrders: {
    methodName: "GetOpenOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_111,
      deserializeBinary: decodeBinary_111,
      serializeJson: (value: GetOpenOrdersRequest) => JSON.stringify(encodeJson_111(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_66,
      deserializeBinary: decodeBinary_66,
      serializeJson: (value: GetOpenOrdersResponse) => JSON.stringify(encodeJson_66(value)),
    },
  },
  getOrderByID: {
    methodName: "GetOrderByID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_112,
      deserializeBinary: decodeBinary_112,
      serializeJson: (value: GetOrderByIDRequest) => JSON.stringify(encodeJson_112(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_113,
      deserializeBinary: decodeBinary_113,
      serializeJson: (value: GetOrderByIDResponse) => JSON.stringify(encodeJson_113(value)),
    },
  },
  getUnsettled: {
    methodName: "GetUnsettled",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_114,
      deserializeBinary: decodeBinary_114,
      serializeJson: (value: GetUnsettledRequest) => JSON.stringify(encodeJson_114(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_68,
      deserializeBinary: decodeBinary_68,
      serializeJson: (value: GetUnsettledResponse) => JSON.stringify(encodeJson_68(value)),
    },
  },
  postRouteTradeSwap: {
    methodName: "PostRouteTradeSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_115,
      deserializeBinary: decodeBinary_115,
      serializeJson: (value: RouteTradeSwapRequest) => JSON.stringify(encodeJson_115(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_108,
      deserializeBinary: decodeBinary_108,
      serializeJson: (value: TradeSwapResponse) => JSON.stringify(encodeJson_108(value)),
    },
  },
  postPerpOrder: {
    methodName: "PostPerpOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_116,
      deserializeBinary: decodeBinary_116,
      serializeJson: (value: PostPerpOrderRequest) => JSON.stringify(encodeJson_116(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_117,
      deserializeBinary: decodeBinary_117,
      serializeJson: (value: PostPerpOrderResponse) => JSON.stringify(encodeJson_117(value)),
    },
  },
  getPerpPositions: {
    methodName: "GetPerpPositions",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_118,
      deserializeBinary: decodeBinary_118,
      serializeJson: (value: GetPerpPositionsRequest) => JSON.stringify(encodeJson_118(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_119,
      deserializeBinary: decodeBinary_119,
      serializeJson: (value: GetPerpPositionsResponse) => JSON.stringify(encodeJson_119(value)),
    },
  },
  getOpenPerpOrders: {
    methodName: "GetOpenPerpOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_120,
      deserializeBinary: decodeBinary_120,
      serializeJson: (value: GetOpenPerpOrdersRequest) => JSON.stringify(encodeJson_120(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_121,
      deserializeBinary: decodeBinary_121,
      serializeJson: (value: GetOpenPerpOrdersResponse) => JSON.stringify(encodeJson_121(value)),
    },
  },
  postCancelPerpOrders: {
    methodName: "PostCancelPerpOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_122,
      deserializeBinary: decodeBinary_122,
      serializeJson: (value: PostCancelPerpOrdersRequest) => JSON.stringify(encodeJson_122(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_123,
      deserializeBinary: decodeBinary_123,
      serializeJson: (value: PostCancelPerpOrdersResponse) => JSON.stringify(encodeJson_123(value)),
    },
  },
  postCancelPerpOrder: {
    methodName: "PostCancelPerpOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_124,
      deserializeBinary: decodeBinary_124,
      serializeJson: (value: PostCancelPerpOrderRequest) => JSON.stringify(encodeJson_124(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_125,
      deserializeBinary: decodeBinary_125,
      serializeJson: (value: PostCancelPerpOrderResponse) => JSON.stringify(encodeJson_125(value)),
    },
  },
  postClosePerpPositions: {
    methodName: "PostClosePerpPositions",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_126,
      deserializeBinary: decodeBinary_126,
      serializeJson: (value: PostClosePerpPositionsRequest) => JSON.stringify(encodeJson_126(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_127,
      deserializeBinary: decodeBinary_127,
      serializeJson: (value: PostClosePerpPositionsResponse) => JSON.stringify(encodeJson_127(value)),
    },
  },
  getPerpOrderbook: {
    methodName: "GetPerpOrderbook",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_128,
      deserializeBinary: decodeBinary_128,
      serializeJson: (value: GetPerpOrderbookRequest) => JSON.stringify(encodeJson_128(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_129,
      deserializeBinary: decodeBinary_129,
      serializeJson: (value: GetPerpOrderbookResponse) => JSON.stringify(encodeJson_129(value)),
    },
  },
  postCreateUser: {
    methodName: "PostCreateUser",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_130,
      deserializeBinary: decodeBinary_130,
      serializeJson: (value: PostCreateUserRequest) => JSON.stringify(encodeJson_130(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_131,
      deserializeBinary: decodeBinary_131,
      serializeJson: (value: PostCreateUserResponse) => JSON.stringify(encodeJson_131(value)),
    },
  },
  getUser: {
    methodName: "GetUser",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_132,
      deserializeBinary: decodeBinary_132,
      serializeJson: (value: GetUserRequest) => JSON.stringify(encodeJson_132(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_133,
      deserializeBinary: decodeBinary_133,
      serializeJson: (value: GetUserResponse) => JSON.stringify(encodeJson_133(value)),
    },
  },
  postManageCollateral: {
    methodName: "PostManageCollateral",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_134,
      deserializeBinary: decodeBinary_134,
      serializeJson: (value: PostManageCollateralRequest) => JSON.stringify(encodeJson_134(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_135,
      deserializeBinary: decodeBinary_135,
      serializeJson: (value: PostManageCollateralResponse) => JSON.stringify(encodeJson_135(value)),
    },
  },
  postSettlePNL: {
    methodName: "PostSettlePNL",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_136,
      deserializeBinary: decodeBinary_136,
      serializeJson: (value: PostSettlePNLRequest) => JSON.stringify(encodeJson_136(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_137,
      deserializeBinary: decodeBinary_137,
      serializeJson: (value: PostSettlePNLResponse) => JSON.stringify(encodeJson_137(value)),
    },
  },
  postSettlePNLs: {
    methodName: "PostSettlePNLs",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_138,
      deserializeBinary: decodeBinary_138,
      serializeJson: (value: PostSettlePNLsRequest) => JSON.stringify(encodeJson_138(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_139,
      deserializeBinary: decodeBinary_139,
      serializeJson: (value: PostSettlePNLsResponse) => JSON.stringify(encodeJson_139(value)),
    },
  },
  getAssets: {
    methodName: "GetAssets",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_140,
      deserializeBinary: decodeBinary_140,
      serializeJson: (value: GetAssetsRequest) => JSON.stringify(encodeJson_140(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_141,
      deserializeBinary: decodeBinary_141,
      serializeJson: (value: GetAssetsResponse) => JSON.stringify(encodeJson_141(value)),
    },
  },
  getPerpContracts: {
    methodName: "GetPerpContracts",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_142,
      deserializeBinary: decodeBinary_142,
      serializeJson: (value: GetPerpContractsRequest) => JSON.stringify(encodeJson_142(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_143,
      deserializeBinary: decodeBinary_143,
      serializeJson: (value: GetPerpContractsResponse) => JSON.stringify(encodeJson_143(value)),
    },
  },
  postLiquidatePerp: {
    methodName: "PostLiquidatePerp",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_144,
      deserializeBinary: decodeBinary_144,
      serializeJson: (value: PostLiquidatePerpRequest) => JSON.stringify(encodeJson_144(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_145,
      deserializeBinary: decodeBinary_145,
      serializeJson: (value: PostLiquidatePerpResponse) => JSON.stringify(encodeJson_145(value)),
    },
  },
  getOpenPerpOrder: {
    methodName: "GetOpenPerpOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_146,
      deserializeBinary: decodeBinary_146,
      serializeJson: (value: GetOpenPerpOrderRequest) => JSON.stringify(encodeJson_146(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_147,
      deserializeBinary: decodeBinary_147,
      serializeJson: (value: GetOpenPerpOrderResponse) => JSON.stringify(encodeJson_147(value)),
    },
  },
  getOrderbooksStream: {
    methodName: "GetOrderbooksStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_148,
      deserializeBinary: decodeBinary_148,
      serializeJson: (value: GetOrderbooksRequest) => JSON.stringify(encodeJson_148(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_149,
      deserializeBinary: decodeBinary_149,
      serializeJson: (value: GetOrderbooksStreamResponse) => JSON.stringify(encodeJson_149(value)),
    },
  },
  getMarketDepthsStream: {
    methodName: "GetMarketDepthsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_150,
      deserializeBinary: decodeBinary_150,
      serializeJson: (value: GetMarketDepthsRequest) => JSON.stringify(encodeJson_150(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_151,
      deserializeBinary: decodeBinary_151,
      serializeJson: (value: GetMarketDepthsStreamResponse) => JSON.stringify(encodeJson_151(value)),
    },
  },
  getTickersStream: {
    methodName: "GetTickersStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_75,
      deserializeBinary: decodeBinary_75,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_75(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_152,
      deserializeBinary: decodeBinary_152,
      serializeJson: (value: GetTickersStreamResponse) => JSON.stringify(encodeJson_152(value)),
    },
  },
  getTradesStream: {
    methodName: "GetTradesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_83,
      deserializeBinary: decodeBinary_83,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_83(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_153,
      deserializeBinary: decodeBinary_153,
      serializeJson: (value: GetTradesStreamResponse) => JSON.stringify(encodeJson_153(value)),
    },
  },
  getOrderStatusStream: {
    methodName: "GetOrderStatusStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_154,
      deserializeBinary: decodeBinary_154,
      serializeJson: (value: GetOrderStatusStreamRequest) => JSON.stringify(encodeJson_154(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_155,
      deserializeBinary: decodeBinary_155,
      serializeJson: (value: GetOrderStatusStreamResponse) => JSON.stringify(encodeJson_155(value)),
    },
  },
  getRecentBlockHashStream: {
    methodName: "GetRecentBlockHashStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_89,
      deserializeBinary: decodeBinary_89,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_89(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_90,
      deserializeBinary: decodeBinary_90,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_90(value)),
    },
  },
  getBlockStream: {
    methodName: "GetBlockStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_156,
      deserializeBinary: decodeBinary_156,
      serializeJson: (value: GetBlockStreamRequest) => JSON.stringify(encodeJson_156(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_157,
      deserializeBinary: decodeBinary_157,
      serializeJson: (value: GetBlockStreamResponse) => JSON.stringify(encodeJson_157(value)),
    },
  },
  getQuotesStream: {
    methodName: "GetQuotesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_158,
      deserializeBinary: decodeBinary_158,
      serializeJson: (value: GetQuotesStreamRequest) => JSON.stringify(encodeJson_158(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_159,
      deserializeBinary: decodeBinary_159,
      serializeJson: (value: GetQuotesStreamResponse) => JSON.stringify(encodeJson_159(value)),
    },
  },
  getPoolReservesStream: {
    methodName: "GetPoolReservesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_160,
      deserializeBinary: decodeBinary_160,
      serializeJson: (value: GetPoolReservesStreamRequest) => JSON.stringify(encodeJson_160(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_161,
      deserializeBinary: decodeBinary_161,
      serializeJson: (value: GetPoolReservesStreamResponse) => JSON.stringify(encodeJson_161(value)),
    },
  },
  getPricesStream: {
    methodName: "GetPricesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_162,
      deserializeBinary: decodeBinary_162,
      serializeJson: (value: GetPricesStreamRequest) => JSON.stringify(encodeJson_162(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_163,
      deserializeBinary: decodeBinary_163,
      serializeJson: (value: GetPricesStreamResponse) => JSON.stringify(encodeJson_163(value)),
    },
  },
  getSwapsStream: {
    methodName: "GetSwapsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_164,
      deserializeBinary: decodeBinary_164,
      serializeJson: (value: GetSwapsStreamRequest) => JSON.stringify(encodeJson_164(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_165,
      deserializeBinary: decodeBinary_165,
      serializeJson: (value: GetSwapsStreamResponse) => JSON.stringify(encodeJson_165(value)),
    },
  },
  getPerpOrderbooksStream: {
    methodName: "GetPerpOrderbooksStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_166,
      deserializeBinary: decodeBinary_166,
      serializeJson: (value: GetPerpOrderbooksRequest) => JSON.stringify(encodeJson_166(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_167,
      deserializeBinary: decodeBinary_167,
      serializeJson: (value: GetPerpOrderbooksStreamResponse) => JSON.stringify(encodeJson_167(value)),
    },
  },
  getPerpTradesStream: {
    methodName: "GetPerpTradesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_168,
      deserializeBinary: decodeBinary_168,
      serializeJson: (value: GetPerpTradesStreamRequest) => JSON.stringify(encodeJson_168(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_169,
      deserializeBinary: decodeBinary_169,
      serializeJson: (value: GetPerpTradesStreamResponse) => JSON.stringify(encodeJson_169(value)),
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
