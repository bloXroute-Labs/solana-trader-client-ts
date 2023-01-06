// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');
var google_api_visibility_pb = require('./google/api/visibility_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js');
var common_pb = require('./common_pb.js');

function serialize_api_GetAccountBalanceRequest(arg) {
  if (!(arg instanceof api_pb.GetAccountBalanceRequest)) {
    throw new Error('Expected argument of type api.GetAccountBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAccountBalanceRequest(buffer_arg) {
  return api_pb.GetAccountBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAccountBalanceResponse(arg) {
  if (!(arg instanceof api_pb.GetAccountBalanceResponse)) {
    throw new Error('Expected argument of type api.GetAccountBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAccountBalanceResponse(buffer_arg) {
  return api_pb.GetAccountBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetBlockStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetBlockStreamRequest)) {
    throw new Error('Expected argument of type api.GetBlockStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetBlockStreamRequest(buffer_arg) {
  return api_pb.GetBlockStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetBlockStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetBlockStreamResponse)) {
    throw new Error('Expected argument of type api.GetBlockStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetBlockStreamResponse(buffer_arg) {
  return api_pb.GetBlockStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetKlineRequest(arg) {
  if (!(arg instanceof api_pb.GetKlineRequest)) {
    throw new Error('Expected argument of type api.GetKlineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetKlineRequest(buffer_arg) {
  return api_pb.GetKlineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetKlineResponse(arg) {
  if (!(arg instanceof api_pb.GetKlineResponse)) {
    throw new Error('Expected argument of type api.GetKlineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetKlineResponse(buffer_arg) {
  return api_pb.GetKlineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthRequest(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthRequest)) {
    throw new Error('Expected argument of type api.GetMarketDepthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthRequest(buffer_arg) {
  return api_pb.GetMarketDepthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthResponse(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthResponse)) {
    throw new Error('Expected argument of type api.GetMarketDepthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthResponse(buffer_arg) {
  return api_pb.GetMarketDepthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthsRequest(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthsRequest)) {
    throw new Error('Expected argument of type api.GetMarketDepthsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthsRequest(buffer_arg) {
  return api_pb.GetMarketDepthsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthsStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthsStreamResponse)) {
    throw new Error('Expected argument of type api.GetMarketDepthsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthsStreamResponse(buffer_arg) {
  return api_pb.GetMarketDepthsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketsRequest(arg) {
  if (!(arg instanceof api_pb.GetMarketsRequest)) {
    throw new Error('Expected argument of type api.GetMarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketsRequest(buffer_arg) {
  return api_pb.GetMarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketsResponse(arg) {
  if (!(arg instanceof api_pb.GetMarketsResponse)) {
    throw new Error('Expected argument of type api.GetMarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketsResponse(buffer_arg) {
  return api_pb.GetMarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenOrdersRequest(arg) {
  if (!(arg instanceof api_pb.GetOpenOrdersRequest)) {
    throw new Error('Expected argument of type api.GetOpenOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenOrdersRequest(buffer_arg) {
  return api_pb.GetOpenOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenOrdersResponse(arg) {
  if (!(arg instanceof api_pb.GetOpenOrdersResponse)) {
    throw new Error('Expected argument of type api.GetOpenOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenOrdersResponse(buffer_arg) {
  return api_pb.GetOpenOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderByIDRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderByIDRequest)) {
    throw new Error('Expected argument of type api.GetOrderByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderByIDRequest(buffer_arg) {
  return api_pb.GetOrderByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderByIDResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderByIDResponse)) {
    throw new Error('Expected argument of type api.GetOrderByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderByIDResponse(buffer_arg) {
  return api_pb.GetOrderByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderStatusStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderStatusStreamRequest)) {
    throw new Error('Expected argument of type api.GetOrderStatusStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderStatusStreamRequest(buffer_arg) {
  return api_pb.GetOrderStatusStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderStatusStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderStatusStreamResponse)) {
    throw new Error('Expected argument of type api.GetOrderStatusStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderStatusStreamResponse(buffer_arg) {
  return api_pb.GetOrderStatusStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbookRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderbookRequest)) {
    throw new Error('Expected argument of type api.GetOrderbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbookRequest(buffer_arg) {
  return api_pb.GetOrderbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbookResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderbookResponse)) {
    throw new Error('Expected argument of type api.GetOrderbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbookResponse(buffer_arg) {
  return api_pb.GetOrderbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbooksRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderbooksRequest)) {
    throw new Error('Expected argument of type api.GetOrderbooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbooksRequest(buffer_arg) {
  return api_pb.GetOrderbooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbooksStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderbooksStreamResponse)) {
    throw new Error('Expected argument of type api.GetOrderbooksStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbooksStreamResponse(buffer_arg) {
  return api_pb.GetOrderbooksStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrdersRequest(arg) {
  if (!(arg instanceof api_pb.GetOrdersRequest)) {
    throw new Error('Expected argument of type api.GetOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrdersRequest(buffer_arg) {
  return api_pb.GetOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrdersResponse(arg) {
  if (!(arg instanceof api_pb.GetOrdersResponse)) {
    throw new Error('Expected argument of type api.GetOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrdersResponse(buffer_arg) {
  return api_pb.GetOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolReservesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetPoolReservesStreamRequest)) {
    throw new Error('Expected argument of type api.GetPoolReservesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolReservesStreamRequest(buffer_arg) {
  return api_pb.GetPoolReservesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolReservesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetPoolReservesStreamResponse)) {
    throw new Error('Expected argument of type api.GetPoolReservesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolReservesStreamResponse(buffer_arg) {
  return api_pb.GetPoolReservesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolsRequest(arg) {
  if (!(arg instanceof api_pb.GetPoolsRequest)) {
    throw new Error('Expected argument of type api.GetPoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolsRequest(buffer_arg) {
  return api_pb.GetPoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolsResponse(arg) {
  if (!(arg instanceof api_pb.GetPoolsResponse)) {
    throw new Error('Expected argument of type api.GetPoolsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolsResponse(buffer_arg) {
  return api_pb.GetPoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPriceRequest(arg) {
  if (!(arg instanceof api_pb.GetPriceRequest)) {
    throw new Error('Expected argument of type api.GetPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPriceRequest(buffer_arg) {
  return api_pb.GetPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPriceResponse(arg) {
  if (!(arg instanceof api_pb.GetPriceResponse)) {
    throw new Error('Expected argument of type api.GetPriceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPriceResponse(buffer_arg) {
  return api_pb.GetPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPricesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetPricesStreamRequest)) {
    throw new Error('Expected argument of type api.GetPricesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPricesStreamRequest(buffer_arg) {
  return api_pb.GetPricesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPricesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetPricesStreamResponse)) {
    throw new Error('Expected argument of type api.GetPricesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPricesStreamResponse(buffer_arg) {
  return api_pb.GetPricesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesRequest(arg) {
  if (!(arg instanceof api_pb.GetQuotesRequest)) {
    throw new Error('Expected argument of type api.GetQuotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesRequest(buffer_arg) {
  return api_pb.GetQuotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesResponse(arg) {
  if (!(arg instanceof api_pb.GetQuotesResponse)) {
    throw new Error('Expected argument of type api.GetQuotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesResponse(buffer_arg) {
  return api_pb.GetQuotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetQuotesStreamRequest)) {
    throw new Error('Expected argument of type api.GetQuotesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesStreamRequest(buffer_arg) {
  return api_pb.GetQuotesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetQuotesStreamResponse)) {
    throw new Error('Expected argument of type api.GetQuotesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesStreamResponse(buffer_arg) {
  return api_pb.GetQuotesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetRecentBlockHashRequest(arg) {
  if (!(arg instanceof api_pb.GetRecentBlockHashRequest)) {
    throw new Error('Expected argument of type api.GetRecentBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetRecentBlockHashRequest(buffer_arg) {
  return api_pb.GetRecentBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetRecentBlockHashResponse(arg) {
  if (!(arg instanceof api_pb.GetRecentBlockHashResponse)) {
    throw new Error('Expected argument of type api.GetRecentBlockHashResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetRecentBlockHashResponse(buffer_arg) {
  return api_pb.GetRecentBlockHashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetServerTimeRequest(arg) {
  if (!(arg instanceof api_pb.GetServerTimeRequest)) {
    throw new Error('Expected argument of type api.GetServerTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetServerTimeRequest(buffer_arg) {
  return api_pb.GetServerTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetServerTimeResponse(arg) {
  if (!(arg instanceof api_pb.GetServerTimeResponse)) {
    throw new Error('Expected argument of type api.GetServerTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetServerTimeResponse(buffer_arg) {
  return api_pb.GetServerTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetSwapsStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetSwapsStreamRequest)) {
    throw new Error('Expected argument of type api.GetSwapsStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetSwapsStreamRequest(buffer_arg) {
  return api_pb.GetSwapsStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetSwapsStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetSwapsStreamResponse)) {
    throw new Error('Expected argument of type api.GetSwapsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetSwapsStreamResponse(buffer_arg) {
  return api_pb.GetSwapsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTickersRequest(arg) {
  if (!(arg instanceof api_pb.GetTickersRequest)) {
    throw new Error('Expected argument of type api.GetTickersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTickersRequest(buffer_arg) {
  return api_pb.GetTickersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTickersResponse(arg) {
  if (!(arg instanceof api_pb.GetTickersResponse)) {
    throw new Error('Expected argument of type api.GetTickersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTickersResponse(buffer_arg) {
  return api_pb.GetTickersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTickersStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetTickersStreamResponse)) {
    throw new Error('Expected argument of type api.GetTickersStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTickersStreamResponse(buffer_arg) {
  return api_pb.GetTickersStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTradesRequest(arg) {
  if (!(arg instanceof api_pb.GetTradesRequest)) {
    throw new Error('Expected argument of type api.GetTradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTradesRequest(buffer_arg) {
  return api_pb.GetTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTradesResponse(arg) {
  if (!(arg instanceof api_pb.GetTradesResponse)) {
    throw new Error('Expected argument of type api.GetTradesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTradesResponse(buffer_arg) {
  return api_pb.GetTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTradesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetTradesStreamResponse)) {
    throw new Error('Expected argument of type api.GetTradesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTradesStreamResponse(buffer_arg) {
  return api_pb.GetTradesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUnsettledRequest(arg) {
  if (!(arg instanceof api_pb.GetUnsettledRequest)) {
    throw new Error('Expected argument of type api.GetUnsettledRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUnsettledRequest(buffer_arg) {
  return api_pb.GetUnsettledRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUnsettledResponse(arg) {
  if (!(arg instanceof api_pb.GetUnsettledResponse)) {
    throw new Error('Expected argument of type api.GetUnsettledResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUnsettledResponse(buffer_arg) {
  return api_pb.GetUnsettledResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelAllRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelAllRequest)) {
    throw new Error('Expected argument of type api.PostCancelAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelAllRequest(buffer_arg) {
  return api_pb.PostCancelAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelAllResponse(arg) {
  if (!(arg instanceof api_pb.PostCancelAllResponse)) {
    throw new Error('Expected argument of type api.PostCancelAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelAllResponse(buffer_arg) {
  return api_pb.PostCancelAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelByClientOrderIDRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelByClientOrderIDRequest)) {
    throw new Error('Expected argument of type api.PostCancelByClientOrderIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelByClientOrderIDRequest(buffer_arg) {
  return api_pb.PostCancelByClientOrderIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelOrderRequest)) {
    throw new Error('Expected argument of type api.PostCancelOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelOrderRequest(buffer_arg) {
  return api_pb.PostCancelOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostCancelOrderResponse)) {
    throw new Error('Expected argument of type api.PostCancelOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelOrderResponse(buffer_arg) {
  return api_pb.PostCancelOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostOrderRequest)) {
    throw new Error('Expected argument of type api.PostOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostOrderRequest(buffer_arg) {
  return api_pb.PostOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostOrderResponse)) {
    throw new Error('Expected argument of type api.PostOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostOrderResponse(buffer_arg) {
  return api_pb.PostOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostReplaceOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostReplaceOrderRequest)) {
    throw new Error('Expected argument of type api.PostReplaceOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostReplaceOrderRequest(buffer_arg) {
  return api_pb.PostReplaceOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettleRequest(arg) {
  if (!(arg instanceof api_pb.PostSettleRequest)) {
    throw new Error('Expected argument of type api.PostSettleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettleRequest(buffer_arg) {
  return api_pb.PostSettleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettleResponse(arg) {
  if (!(arg instanceof api_pb.PostSettleResponse)) {
    throw new Error('Expected argument of type api.PostSettleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettleResponse(buffer_arg) {
  return api_pb.PostSettleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitBatchRequest(arg) {
  if (!(arg instanceof api_pb.PostSubmitBatchRequest)) {
    throw new Error('Expected argument of type api.PostSubmitBatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitBatchRequest(buffer_arg) {
  return api_pb.PostSubmitBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitBatchResponse(arg) {
  if (!(arg instanceof api_pb.PostSubmitBatchResponse)) {
    throw new Error('Expected argument of type api.PostSubmitBatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitBatchResponse(buffer_arg) {
  return api_pb.PostSubmitBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitRequest(arg) {
  if (!(arg instanceof api_pb.PostSubmitRequest)) {
    throw new Error('Expected argument of type api.PostSubmitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitRequest(buffer_arg) {
  return api_pb.PostSubmitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitResponse(arg) {
  if (!(arg instanceof api_pb.PostSubmitResponse)) {
    throw new Error('Expected argument of type api.PostSubmitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitResponse(buffer_arg) {
  return api_pb.PostSubmitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_RouteTradeSwapRequest(arg) {
  if (!(arg instanceof api_pb.RouteTradeSwapRequest)) {
    throw new Error('Expected argument of type api.RouteTradeSwapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_RouteTradeSwapRequest(buffer_arg) {
  return api_pb.RouteTradeSwapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_TradeSwapRequest(arg) {
  if (!(arg instanceof api_pb.TradeSwapRequest)) {
    throw new Error('Expected argument of type api.TradeSwapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_TradeSwapRequest(buffer_arg) {
  return api_pb.TradeSwapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_TradeSwapResponse(arg) {
  if (!(arg instanceof api_pb.TradeSwapResponse)) {
    throw new Error('Expected argument of type api.TradeSwapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_TradeSwapResponse(buffer_arg) {
  return api_pb.TradeSwapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiService = exports.ApiService = {
  getPrice: {
    path: '/api.Api/GetPrice',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPriceRequest,
    responseType: api_pb.GetPriceResponse,
    requestSerialize: serialize_api_GetPriceRequest,
    requestDeserialize: deserialize_api_GetPriceRequest,
    responseSerialize: serialize_api_GetPriceResponse,
    responseDeserialize: deserialize_api_GetPriceResponse,
  },
  getMarkets: {
    path: '/api.Api/GetMarkets',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetMarketsRequest,
    responseType: api_pb.GetMarketsResponse,
    requestSerialize: serialize_api_GetMarketsRequest,
    requestDeserialize: deserialize_api_GetMarketsRequest,
    responseSerialize: serialize_api_GetMarketsResponse,
    responseDeserialize: deserialize_api_GetMarketsResponse,
  },
  getPools: {
    path: '/api.Api/GetPools',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPoolsRequest,
    responseType: api_pb.GetPoolsResponse,
    requestSerialize: serialize_api_GetPoolsRequest,
    requestDeserialize: deserialize_api_GetPoolsRequest,
    responseSerialize: serialize_api_GetPoolsResponse,
    responseDeserialize: deserialize_api_GetPoolsResponse,
  },
  getTickers: {
    path: '/api.Api/GetTickers',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTickersRequest,
    responseType: api_pb.GetTickersResponse,
    requestSerialize: serialize_api_GetTickersRequest,
    requestDeserialize: deserialize_api_GetTickersRequest,
    responseSerialize: serialize_api_GetTickersResponse,
    responseDeserialize: deserialize_api_GetTickersResponse,
  },
  getKline: {
    path: '/api.Api/GetKline',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetKlineRequest,
    responseType: api_pb.GetKlineResponse,
    requestSerialize: serialize_api_GetKlineRequest,
    requestDeserialize: deserialize_api_GetKlineRequest,
    responseSerialize: serialize_api_GetKlineResponse,
    responseDeserialize: deserialize_api_GetKlineResponse,
  },
  getOrderbook: {
    path: '/api.Api/GetOrderbook',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOrderbookRequest,
    responseType: api_pb.GetOrderbookResponse,
    requestSerialize: serialize_api_GetOrderbookRequest,
    requestDeserialize: deserialize_api_GetOrderbookRequest,
    responseSerialize: serialize_api_GetOrderbookResponse,
    responseDeserialize: deserialize_api_GetOrderbookResponse,
  },
  getMarketDepth: {
    path: '/api.Api/GetMarketDepth',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetMarketDepthRequest,
    responseType: api_pb.GetMarketDepthResponse,
    requestSerialize: serialize_api_GetMarketDepthRequest,
    requestDeserialize: deserialize_api_GetMarketDepthRequest,
    responseSerialize: serialize_api_GetMarketDepthResponse,
    responseDeserialize: deserialize_api_GetMarketDepthResponse,
  },
  getTrades: {
    path: '/api.Api/GetTrades',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTradesRequest,
    responseType: api_pb.GetTradesResponse,
    requestSerialize: serialize_api_GetTradesRequest,
    requestDeserialize: deserialize_api_GetTradesRequest,
    responseSerialize: serialize_api_GetTradesResponse,
    responseDeserialize: deserialize_api_GetTradesResponse,
  },
  getQuotes: {
    path: '/api.Api/GetQuotes',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetQuotesRequest,
    responseType: api_pb.GetQuotesResponse,
    requestSerialize: serialize_api_GetQuotesRequest,
    requestDeserialize: deserialize_api_GetQuotesRequest,
    responseSerialize: serialize_api_GetQuotesResponse,
    responseDeserialize: deserialize_api_GetQuotesResponse,
  },
  // system API
getServerTime: {
    path: '/api.Api/GetServerTime',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetServerTimeRequest,
    responseType: api_pb.GetServerTimeResponse,
    requestSerialize: serialize_api_GetServerTimeRequest,
    requestDeserialize: deserialize_api_GetServerTimeRequest,
    responseSerialize: serialize_api_GetServerTimeResponse,
    responseDeserialize: deserialize_api_GetServerTimeResponse,
  },
  getRecentBlockHash: {
    path: '/api.Api/GetRecentBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetRecentBlockHashRequest,
    responseType: api_pb.GetRecentBlockHashResponse,
    requestSerialize: serialize_api_GetRecentBlockHashRequest,
    requestDeserialize: deserialize_api_GetRecentBlockHashRequest,
    responseSerialize: serialize_api_GetRecentBlockHashResponse,
    responseDeserialize: deserialize_api_GetRecentBlockHashResponse,
  },
  // account endpoints
getAccountBalance: {
    path: '/api.Api/GetAccountBalance',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetAccountBalanceRequest,
    responseType: api_pb.GetAccountBalanceResponse,
    requestSerialize: serialize_api_GetAccountBalanceRequest,
    requestDeserialize: deserialize_api_GetAccountBalanceRequest,
    responseSerialize: serialize_api_GetAccountBalanceResponse,
    responseDeserialize: deserialize_api_GetAccountBalanceResponse,
  },
  // trade endpoints
postOrder: {
    path: '/api.Api/PostOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostOrderRequest,
    responseType: api_pb.PostOrderResponse,
    requestSerialize: serialize_api_PostOrderRequest,
    requestDeserialize: deserialize_api_PostOrderRequest,
    responseSerialize: serialize_api_PostOrderResponse,
    responseDeserialize: deserialize_api_PostOrderResponse,
  },
  postSubmit: {
    path: '/api.Api/PostSubmit',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSubmitRequest,
    responseType: api_pb.PostSubmitResponse,
    requestSerialize: serialize_api_PostSubmitRequest,
    requestDeserialize: deserialize_api_PostSubmitRequest,
    responseSerialize: serialize_api_PostSubmitResponse,
    responseDeserialize: deserialize_api_PostSubmitResponse,
  },
  postSubmitBatch: {
    path: '/api.Api/PostSubmitBatch',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSubmitBatchRequest,
    responseType: api_pb.PostSubmitBatchResponse,
    requestSerialize: serialize_api_PostSubmitBatchRequest,
    requestDeserialize: deserialize_api_PostSubmitBatchRequest,
    responseSerialize: serialize_api_PostSubmitBatchResponse,
    responseDeserialize: deserialize_api_PostSubmitBatchResponse,
  },
  postCancelOrder: {
    path: '/api.Api/PostCancelOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelOrderRequest,
    responseType: api_pb.PostCancelOrderResponse,
    requestSerialize: serialize_api_PostCancelOrderRequest,
    requestDeserialize: deserialize_api_PostCancelOrderRequest,
    responseSerialize: serialize_api_PostCancelOrderResponse,
    responseDeserialize: deserialize_api_PostCancelOrderResponse,
  },
  postCancelByClientOrderID: {
    path: '/api.Api/PostCancelByClientOrderID',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelByClientOrderIDRequest,
    responseType: api_pb.PostCancelOrderResponse,
    requestSerialize: serialize_api_PostCancelByClientOrderIDRequest,
    requestDeserialize: deserialize_api_PostCancelByClientOrderIDRequest,
    responseSerialize: serialize_api_PostCancelOrderResponse,
    responseDeserialize: deserialize_api_PostCancelOrderResponse,
  },
  postCancelAll: {
    path: '/api.Api/PostCancelAll',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelAllRequest,
    responseType: api_pb.PostCancelAllResponse,
    requestSerialize: serialize_api_PostCancelAllRequest,
    requestDeserialize: deserialize_api_PostCancelAllRequest,
    responseSerialize: serialize_api_PostCancelAllResponse,
    responseDeserialize: deserialize_api_PostCancelAllResponse,
  },
  postReplaceByClientOrderID: {
    path: '/api.Api/PostReplaceByClientOrderID',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostOrderRequest,
    responseType: api_pb.PostOrderResponse,
    requestSerialize: serialize_api_PostOrderRequest,
    requestDeserialize: deserialize_api_PostOrderRequest,
    responseSerialize: serialize_api_PostOrderResponse,
    responseDeserialize: deserialize_api_PostOrderResponse,
  },
  postReplaceOrder: {
    path: '/api.Api/PostReplaceOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostReplaceOrderRequest,
    responseType: api_pb.PostOrderResponse,
    requestSerialize: serialize_api_PostReplaceOrderRequest,
    requestDeserialize: deserialize_api_PostReplaceOrderRequest,
    responseSerialize: serialize_api_PostOrderResponse,
    responseDeserialize: deserialize_api_PostOrderResponse,
  },
  postSettle: {
    path: '/api.Api/PostSettle',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSettleRequest,
    responseType: api_pb.PostSettleResponse,
    requestSerialize: serialize_api_PostSettleRequest,
    requestDeserialize: deserialize_api_PostSettleRequest,
    responseSerialize: serialize_api_PostSettleResponse,
    responseDeserialize: deserialize_api_PostSettleResponse,
  },
  postTradeSwap: {
    path: '/api.Api/PostTradeSwap',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TradeSwapRequest,
    responseType: api_pb.TradeSwapResponse,
    requestSerialize: serialize_api_TradeSwapRequest,
    requestDeserialize: deserialize_api_TradeSwapRequest,
    responseSerialize: serialize_api_TradeSwapResponse,
    responseDeserialize: deserialize_api_TradeSwapResponse,
  },
  getOrders: {
    path: '/api.Api/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOrdersRequest,
    responseType: api_pb.GetOrdersResponse,
    requestSerialize: serialize_api_GetOrdersRequest,
    requestDeserialize: deserialize_api_GetOrdersRequest,
    responseSerialize: serialize_api_GetOrdersResponse,
    responseDeserialize: deserialize_api_GetOrdersResponse,
  },
  getOpenOrders: {
    path: '/api.Api/GetOpenOrders',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOpenOrdersRequest,
    responseType: api_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_api_GetOpenOrdersRequest,
    requestDeserialize: deserialize_api_GetOpenOrdersRequest,
    responseSerialize: serialize_api_GetOpenOrdersResponse,
    responseDeserialize: deserialize_api_GetOpenOrdersResponse,
  },
  getOrderByID: {
    path: '/api.Api/GetOrderByID',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOrderByIDRequest,
    responseType: api_pb.GetOrderByIDResponse,
    requestSerialize: serialize_api_GetOrderByIDRequest,
    requestDeserialize: deserialize_api_GetOrderByIDRequest,
    responseSerialize: serialize_api_GetOrderByIDResponse,
    responseDeserialize: deserialize_api_GetOrderByIDResponse,
  },
  getUnsettled: {
    path: '/api.Api/GetUnsettled',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetUnsettledRequest,
    responseType: api_pb.GetUnsettledResponse,
    requestSerialize: serialize_api_GetUnsettledRequest,
    requestDeserialize: deserialize_api_GetUnsettledRequest,
    responseSerialize: serialize_api_GetUnsettledResponse,
    responseDeserialize: deserialize_api_GetUnsettledResponse,
  },
  postRouteTradeSwap: {
    path: '/api.Api/PostRouteTradeSwap',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.RouteTradeSwapRequest,
    responseType: api_pb.TradeSwapResponse,
    requestSerialize: serialize_api_RouteTradeSwapRequest,
    requestDeserialize: deserialize_api_RouteTradeSwapRequest,
    responseSerialize: serialize_api_TradeSwapResponse,
    responseDeserialize: deserialize_api_TradeSwapResponse,
  },
  // streaming endpoints
getOrderbooksStream: {
    path: '/api.Api/GetOrderbooksStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetOrderbooksRequest,
    responseType: api_pb.GetOrderbooksStreamResponse,
    requestSerialize: serialize_api_GetOrderbooksRequest,
    requestDeserialize: deserialize_api_GetOrderbooksRequest,
    responseSerialize: serialize_api_GetOrderbooksStreamResponse,
    responseDeserialize: deserialize_api_GetOrderbooksStreamResponse,
  },
  getMarketDepthsStream: {
    path: '/api.Api/GetMarketDepthsStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetMarketDepthsRequest,
    responseType: api_pb.GetMarketDepthsStreamResponse,
    requestSerialize: serialize_api_GetMarketDepthsRequest,
    requestDeserialize: deserialize_api_GetMarketDepthsRequest,
    responseSerialize: serialize_api_GetMarketDepthsStreamResponse,
    responseDeserialize: deserialize_api_GetMarketDepthsStreamResponse,
  },
  getTickersStream: {
    path: '/api.Api/GetTickersStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetTickersRequest,
    responseType: api_pb.GetTickersStreamResponse,
    requestSerialize: serialize_api_GetTickersRequest,
    requestDeserialize: deserialize_api_GetTickersRequest,
    responseSerialize: serialize_api_GetTickersStreamResponse,
    responseDeserialize: deserialize_api_GetTickersStreamResponse,
  },
  getTradesStream: {
    path: '/api.Api/GetTradesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetTradesRequest,
    responseType: api_pb.GetTradesStreamResponse,
    requestSerialize: serialize_api_GetTradesRequest,
    requestDeserialize: deserialize_api_GetTradesRequest,
    responseSerialize: serialize_api_GetTradesStreamResponse,
    responseDeserialize: deserialize_api_GetTradesStreamResponse,
  },
  getOrderStatusStream: {
    path: '/api.Api/GetOrderStatusStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetOrderStatusStreamRequest,
    responseType: api_pb.GetOrderStatusStreamResponse,
    requestSerialize: serialize_api_GetOrderStatusStreamRequest,
    requestDeserialize: deserialize_api_GetOrderStatusStreamRequest,
    responseSerialize: serialize_api_GetOrderStatusStreamResponse,
    responseDeserialize: deserialize_api_GetOrderStatusStreamResponse,
  },
  getRecentBlockHashStream: {
    path: '/api.Api/GetRecentBlockHashStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetRecentBlockHashRequest,
    responseType: api_pb.GetRecentBlockHashResponse,
    requestSerialize: serialize_api_GetRecentBlockHashRequest,
    requestDeserialize: deserialize_api_GetRecentBlockHashRequest,
    responseSerialize: serialize_api_GetRecentBlockHashResponse,
    responseDeserialize: deserialize_api_GetRecentBlockHashResponse,
  },
  getBlockStream: {
    path: '/api.Api/GetBlockStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetBlockStreamRequest,
    responseType: api_pb.GetBlockStreamResponse,
    requestSerialize: serialize_api_GetBlockStreamRequest,
    requestDeserialize: deserialize_api_GetBlockStreamRequest,
    responseSerialize: serialize_api_GetBlockStreamResponse,
    responseDeserialize: deserialize_api_GetBlockStreamResponse,
  },
  getQuotesStream: {
    path: '/api.Api/GetQuotesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetQuotesStreamRequest,
    responseType: api_pb.GetQuotesStreamResponse,
    requestSerialize: serialize_api_GetQuotesStreamRequest,
    requestDeserialize: deserialize_api_GetQuotesStreamRequest,
    responseSerialize: serialize_api_GetQuotesStreamResponse,
    responseDeserialize: deserialize_api_GetQuotesStreamResponse,
  },
  getPoolReservesStream: {
    path: '/api.Api/GetPoolReservesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetPoolReservesStreamRequest,
    responseType: api_pb.GetPoolReservesStreamResponse,
    requestSerialize: serialize_api_GetPoolReservesStreamRequest,
    requestDeserialize: deserialize_api_GetPoolReservesStreamRequest,
    responseSerialize: serialize_api_GetPoolReservesStreamResponse,
    responseDeserialize: deserialize_api_GetPoolReservesStreamResponse,
  },
  getPricesStream: {
    path: '/api.Api/GetPricesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetPricesStreamRequest,
    responseType: api_pb.GetPricesStreamResponse,
    requestSerialize: serialize_api_GetPricesStreamRequest,
    requestDeserialize: deserialize_api_GetPricesStreamRequest,
    responseSerialize: serialize_api_GetPricesStreamResponse,
    responseDeserialize: deserialize_api_GetPricesStreamResponse,
  },
  getSwapsStream: {
    path: '/api.Api/GetSwapsStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetSwapsStreamRequest,
    responseType: api_pb.GetSwapsStreamResponse,
    requestSerialize: serialize_api_GetSwapsStreamRequest,
    requestDeserialize: deserialize_api_GetSwapsStreamRequest,
    responseSerialize: serialize_api_GetSwapsStreamResponse,
    responseDeserialize: deserialize_api_GetSwapsStreamResponse,
  },
};

exports.ApiClient = grpc.makeGenericClientConstructor(ApiService);
