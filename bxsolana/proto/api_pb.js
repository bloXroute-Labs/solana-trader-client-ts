// source: api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_visibility_pb = require('./google/api/visibility_pb.js');
goog.object.extend(proto, google_api_visibility_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.api.Block', null, global);
goog.exportSymbol('proto.api.Candle', null, global);
goog.exportSymbol('proto.api.Direction', null, global);
goog.exportSymbol('proto.api.GetAccountBalanceRequest', null, global);
goog.exportSymbol('proto.api.GetAccountBalanceResponse', null, global);
goog.exportSymbol('proto.api.GetBlockStreamRequest', null, global);
goog.exportSymbol('proto.api.GetBlockStreamResponse', null, global);
goog.exportSymbol('proto.api.GetKlineRequest', null, global);
goog.exportSymbol('proto.api.GetKlineResponse', null, global);
goog.exportSymbol('proto.api.GetMarketDepthRequest', null, global);
goog.exportSymbol('proto.api.GetMarketDepthResponse', null, global);
goog.exportSymbol('proto.api.GetMarketDepthsRequest', null, global);
goog.exportSymbol('proto.api.GetMarketDepthsStreamResponse', null, global);
goog.exportSymbol('proto.api.GetMarketsRequest', null, global);
goog.exportSymbol('proto.api.GetMarketsResponse', null, global);
goog.exportSymbol('proto.api.GetOpenOrdersRequest', null, global);
goog.exportSymbol('proto.api.GetOpenOrdersResponse', null, global);
goog.exportSymbol('proto.api.GetOrderByIDRequest', null, global);
goog.exportSymbol('proto.api.GetOrderByIDResponse', null, global);
goog.exportSymbol('proto.api.GetOrderStatusResponse', null, global);
goog.exportSymbol('proto.api.GetOrderStatusStreamRequest', null, global);
goog.exportSymbol('proto.api.GetOrderStatusStreamResponse', null, global);
goog.exportSymbol('proto.api.GetOrderbookRequest', null, global);
goog.exportSymbol('proto.api.GetOrderbookResponse', null, global);
goog.exportSymbol('proto.api.GetOrderbooksRequest', null, global);
goog.exportSymbol('proto.api.GetOrderbooksStreamResponse', null, global);
goog.exportSymbol('proto.api.GetOrdersRequest', null, global);
goog.exportSymbol('proto.api.GetOrdersResponse', null, global);
goog.exportSymbol('proto.api.GetPoolReservesStreamRequest', null, global);
goog.exportSymbol('proto.api.GetPoolReservesStreamResponse', null, global);
goog.exportSymbol('proto.api.GetPoolsRequest', null, global);
goog.exportSymbol('proto.api.GetPoolsResponse', null, global);
goog.exportSymbol('proto.api.GetPriceRequest', null, global);
goog.exportSymbol('proto.api.GetPriceResponse', null, global);
goog.exportSymbol('proto.api.GetPricesStreamRequest', null, global);
goog.exportSymbol('proto.api.GetPricesStreamResponse', null, global);
goog.exportSymbol('proto.api.GetQuotesRequest', null, global);
goog.exportSymbol('proto.api.GetQuotesResponse', null, global);
goog.exportSymbol('proto.api.GetQuotesStreamRequest', null, global);
goog.exportSymbol('proto.api.GetQuotesStreamResponse', null, global);
goog.exportSymbol('proto.api.GetQuotesStreamUpdate', null, global);
goog.exportSymbol('proto.api.GetRecentBlockHashRequest', null, global);
goog.exportSymbol('proto.api.GetRecentBlockHashResponse', null, global);
goog.exportSymbol('proto.api.GetServerTimeRequest', null, global);
goog.exportSymbol('proto.api.GetServerTimeResponse', null, global);
goog.exportSymbol('proto.api.GetSwapsStreamRequest', null, global);
goog.exportSymbol('proto.api.GetSwapsStreamResponse', null, global);
goog.exportSymbol('proto.api.GetSwapsStreamUpdate', null, global);
goog.exportSymbol('proto.api.GetTickersRequest', null, global);
goog.exportSymbol('proto.api.GetTickersResponse', null, global);
goog.exportSymbol('proto.api.GetTickersStreamResponse', null, global);
goog.exportSymbol('proto.api.GetTradesRequest', null, global);
goog.exportSymbol('proto.api.GetTradesResponse', null, global);
goog.exportSymbol('proto.api.GetTradesStreamResponse', null, global);
goog.exportSymbol('proto.api.GetUnsettledRequest', null, global);
goog.exportSymbol('proto.api.GetUnsettledResponse', null, global);
goog.exportSymbol('proto.api.Market', null, global);
goog.exportSymbol('proto.api.MarketDepthItem', null, global);
goog.exportSymbol('proto.api.MarketStatus', null, global);
goog.exportSymbol('proto.api.Order', null, global);
goog.exportSymbol('proto.api.OrderStatus', null, global);
goog.exportSymbol('proto.api.OrderType', null, global);
goog.exportSymbol('proto.api.OrderbookItem', null, global);
goog.exportSymbol('proto.api.PoolReserves', null, global);
goog.exportSymbol('proto.api.PostCancelAllRequest', null, global);
goog.exportSymbol('proto.api.PostCancelAllResponse', null, global);
goog.exportSymbol('proto.api.PostCancelByClientOrderIDRequest', null, global);
goog.exportSymbol('proto.api.PostCancelOrderRequest', null, global);
goog.exportSymbol('proto.api.PostCancelOrderResponse', null, global);
goog.exportSymbol('proto.api.PostOrderRequest', null, global);
goog.exportSymbol('proto.api.PostOrderResponse', null, global);
goog.exportSymbol('proto.api.PostReplaceOrderRequest', null, global);
goog.exportSymbol('proto.api.PostSettleRequest', null, global);
goog.exportSymbol('proto.api.PostSettleResponse', null, global);
goog.exportSymbol('proto.api.PostSubmitBatchRequest', null, global);
goog.exportSymbol('proto.api.PostSubmitBatchResponse', null, global);
goog.exportSymbol('proto.api.PostSubmitBatchResponseEntry', null, global);
goog.exportSymbol('proto.api.PostSubmitRequest', null, global);
goog.exportSymbol('proto.api.PostSubmitRequestEntry', null, global);
goog.exportSymbol('proto.api.PostSubmitResponse', null, global);
goog.exportSymbol('proto.api.Project', null, global);
goog.exportSymbol('proto.api.ProjectPool', null, global);
goog.exportSymbol('proto.api.ProjectPools', null, global);
goog.exportSymbol('proto.api.ProjectQuote', null, global);
goog.exportSymbol('proto.api.QuoteRoute', null, global);
goog.exportSymbol('proto.api.QuoteStep', null, global);
goog.exportSymbol('proto.api.RouteStep', null, global);
goog.exportSymbol('proto.api.RouteTradeSwapRequest', null, global);
goog.exportSymbol('proto.api.Settlement', null, global);
goog.exportSymbol('proto.api.Side', null, global);
goog.exportSymbol('proto.api.Step', null, global);
goog.exportSymbol('proto.api.StepProject', null, global);
goog.exportSymbol('proto.api.SubmitStrategy', null, global);
goog.exportSymbol('proto.api.Ticker', null, global);
goog.exportSymbol('proto.api.TokenBalance', null, global);
goog.exportSymbol('proto.api.TokenPair', null, global);
goog.exportSymbol('proto.api.TokenPrice', null, global);
goog.exportSymbol('proto.api.Trade', null, global);
goog.exportSymbol('proto.api.TradeSwapRequest', null, global);
goog.exportSymbol('proto.api.TradeSwapResponse', null, global);
goog.exportSymbol('proto.api.TransactionMessage', null, global);
goog.exportSymbol('proto.api.UnsettledAccount', null, global);
goog.exportSymbol('proto.api.UnsettledAccountToken', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMarketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetMarketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetMarketsRequest.displayName = 'proto.api.GetMarketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMarketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetMarketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetMarketsResponse.displayName = 'proto.api.GetMarketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Market = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Market, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Market.displayName = 'proto.api.Market';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetTickersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetTickersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetTickersRequest.displayName = 'proto.api.GetTickersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetTickersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetTickersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetTickersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetTickersResponse.displayName = 'proto.api.GetTickersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Ticker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Ticker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Ticker.displayName = 'proto.api.Ticker';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetKlineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetKlineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetKlineRequest.displayName = 'proto.api.GetKlineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetKlineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetKlineResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetKlineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetKlineResponse.displayName = 'proto.api.GetKlineResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Candle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Candle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Candle.displayName = 'proto.api.Candle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderbookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderbookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderbookRequest.displayName = 'proto.api.GetOrderbookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderbooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetOrderbooksRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetOrderbooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderbooksRequest.displayName = 'proto.api.GetOrderbooksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderbookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetOrderbookResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetOrderbookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderbookResponse.displayName = 'proto.api.GetOrderbookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.OrderbookItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderbookItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderbookItem.displayName = 'proto.api.OrderbookItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMarketDepthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetMarketDepthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetMarketDepthRequest.displayName = 'proto.api.GetMarketDepthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMarketDepthsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetMarketDepthsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetMarketDepthsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetMarketDepthsRequest.displayName = 'proto.api.GetMarketDepthsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMarketDepthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetMarketDepthResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetMarketDepthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetMarketDepthResponse.displayName = 'proto.api.GetMarketDepthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.MarketDepthItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketDepthItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketDepthItem.displayName = 'proto.api.MarketDepthItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetTradesRequest.displayName = 'proto.api.GetTradesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetTradesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetTradesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetTradesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetTradesResponse.displayName = 'proto.api.GetTradesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Trade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Trade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Trade.displayName = 'proto.api.Trade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetServerTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetServerTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetServerTimeRequest.displayName = 'proto.api.GetServerTimeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetServerTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetServerTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetServerTimeResponse.displayName = 'proto.api.GetServerTimeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetAccountBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetAccountBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetAccountBalanceRequest.displayName = 'proto.api.GetAccountBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetAccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetAccountBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetAccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetAccountBalanceResponse.displayName = 'proto.api.GetAccountBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.TokenBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TokenBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TokenBalance.displayName = 'proto.api.TokenBalance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PostOrderRequest.repeatedFields_, null);
};
goog.inherits(proto.api.PostOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostOrderRequest.displayName = 'proto.api.PostOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostReplaceOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PostReplaceOrderRequest.repeatedFields_, null);
};
goog.inherits(proto.api.PostReplaceOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostReplaceOrderRequest.displayName = 'proto.api.PostReplaceOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostOrderResponse.displayName = 'proto.api.PostOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostCancelOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostCancelOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostCancelOrderRequest.displayName = 'proto.api.PostCancelOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostCancelByClientOrderIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostCancelByClientOrderIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostCancelByClientOrderIDRequest.displayName = 'proto.api.PostCancelByClientOrderIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostCancelOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostCancelOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostCancelOrderResponse.displayName = 'proto.api.PostCancelOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostCancelAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PostCancelAllRequest.repeatedFields_, null);
};
goog.inherits(proto.api.PostCancelAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostCancelAllRequest.displayName = 'proto.api.PostCancelAllRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.TransactionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TransactionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TransactionMessage.displayName = 'proto.api.TransactionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostCancelAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PostCancelAllResponse.repeatedFields_, null);
};
goog.inherits(proto.api.PostCancelAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostCancelAllResponse.displayName = 'proto.api.PostCancelAllResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSettleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostSettleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSettleRequest.displayName = 'proto.api.PostSettleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSettleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostSettleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSettleResponse.displayName = 'proto.api.PostSettleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Settlement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Settlement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Settlement.displayName = 'proto.api.Settlement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetOrdersRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrdersRequest.displayName = 'proto.api.GetOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrdersResponse.displayName = 'proto.api.GetOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.Order.repeatedFields_, null);
};
goog.inherits(proto.api.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Order.displayName = 'proto.api.Order';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderStatusStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderStatusStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderStatusStreamRequest.displayName = 'proto.api.GetOrderStatusStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderStatusStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderStatusStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderStatusStreamResponse.displayName = 'proto.api.GetOrderStatusStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderStatusResponse.displayName = 'proto.api.GetOrderStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSubmitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostSubmitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSubmitRequest.displayName = 'proto.api.PostSubmitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSubmitRequestEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostSubmitRequestEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSubmitRequestEntry.displayName = 'proto.api.PostSubmitRequestEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSubmitBatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PostSubmitBatchRequest.repeatedFields_, null);
};
goog.inherits(proto.api.PostSubmitBatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSubmitBatchRequest.displayName = 'proto.api.PostSubmitBatchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSubmitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostSubmitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSubmitResponse.displayName = 'proto.api.PostSubmitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSubmitBatchResponseEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PostSubmitBatchResponseEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSubmitBatchResponseEntry.displayName = 'proto.api.PostSubmitBatchResponseEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PostSubmitBatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PostSubmitBatchResponse.repeatedFields_, null);
};
goog.inherits(proto.api.PostSubmitBatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PostSubmitBatchResponse.displayName = 'proto.api.PostSubmitBatchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOpenOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOpenOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOpenOrdersRequest.displayName = 'proto.api.GetOpenOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOpenOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetOpenOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetOpenOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOpenOrdersResponse.displayName = 'proto.api.GetOpenOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderByIDRequest.displayName = 'proto.api.GetOrderByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderByIDResponse.displayName = 'proto.api.GetOrderByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetUnsettledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetUnsettledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetUnsettledRequest.displayName = 'proto.api.GetUnsettledRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UnsettledAccountToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UnsettledAccountToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.UnsettledAccountToken.displayName = 'proto.api.UnsettledAccountToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UnsettledAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UnsettledAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.UnsettledAccount.displayName = 'proto.api.UnsettledAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetUnsettledResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetUnsettledResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetUnsettledResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetUnsettledResponse.displayName = 'proto.api.GetUnsettledResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetOrderbooksStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderbooksStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderbooksStreamResponse.displayName = 'proto.api.GetOrderbooksStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMarketDepthsStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetMarketDepthsStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetMarketDepthsStreamResponse.displayName = 'proto.api.GetMarketDepthsStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetTickersStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetTickersStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetTickersStreamResponse.displayName = 'proto.api.GetTickersStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetTradesStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetTradesStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetTradesStreamResponse.displayName = 'proto.api.GetTradesStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetQuotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetQuotesRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetQuotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesRequest.displayName = 'proto.api.GetQuotesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetQuotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetQuotesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetQuotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesResponse.displayName = 'proto.api.GetQuotesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ProjectQuote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.ProjectQuote.repeatedFields_, null);
};
goog.inherits(proto.api.ProjectQuote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.ProjectQuote.displayName = 'proto.api.ProjectQuote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.TradeSwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TradeSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradeSwapRequest.displayName = 'proto.api.TradeSwapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.RouteTradeSwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.RouteTradeSwapRequest.repeatedFields_, null);
};
goog.inherits(proto.api.RouteTradeSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.RouteTradeSwapRequest.displayName = 'proto.api.RouteTradeSwapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.RouteStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.RouteStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.RouteStep.displayName = 'proto.api.RouteStep';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.TradeSwapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.TradeSwapResponse.repeatedFields_, null);
};
goog.inherits(proto.api.TradeSwapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradeSwapResponse.displayName = 'proto.api.TradeSwapResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.QuoteRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.QuoteRoute.repeatedFields_, null);
};
goog.inherits(proto.api.QuoteRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.QuoteRoute.displayName = 'proto.api.QuoteRoute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.QuoteStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.QuoteStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.QuoteStep.displayName = 'proto.api.QuoteStep';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.StepProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.StepProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.StepProject.displayName = 'proto.api.StepProject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetRecentBlockHashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetRecentBlockHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetRecentBlockHashRequest.displayName = 'proto.api.GetRecentBlockHashRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetRecentBlockHashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetRecentBlockHashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetRecentBlockHashResponse.displayName = 'proto.api.GetRecentBlockHashResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Block.displayName = 'proto.api.Block';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetBlockStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetBlockStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetBlockStreamRequest.displayName = 'proto.api.GetBlockStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetBlockStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetBlockStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetBlockStreamResponse.displayName = 'proto.api.GetBlockStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPoolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetPoolsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetPoolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPoolsRequest.displayName = 'proto.api.GetPoolsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPoolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetPoolsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetPoolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPoolsResponse.displayName = 'proto.api.GetPoolsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ProjectPools = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.ProjectPools.repeatedFields_, null);
};
goog.inherits(proto.api.ProjectPools, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.ProjectPools.displayName = 'proto.api.ProjectPools';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ProjectPool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ProjectPool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.ProjectPool.displayName = 'proto.api.ProjectPool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetQuotesStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetQuotesStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetQuotesStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesStreamRequest.displayName = 'proto.api.GetQuotesStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetQuotesStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetQuotesStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesStreamResponse.displayName = 'proto.api.GetQuotesStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetQuotesStreamUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetQuotesStreamUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesStreamUpdate.displayName = 'proto.api.GetQuotesStreamUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetSwapsStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetSwapsStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetSwapsStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetSwapsStreamRequest.displayName = 'proto.api.GetSwapsStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetSwapsStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetSwapsStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetSwapsStreamResponse.displayName = 'proto.api.GetSwapsStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetSwapsStreamUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetSwapsStreamUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetSwapsStreamUpdate.displayName = 'proto.api.GetSwapsStreamUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.TokenPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TokenPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TokenPair.displayName = 'proto.api.TokenPair';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetPriceRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPriceRequest.displayName = 'proto.api.GetPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetPriceResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPriceResponse.displayName = 'proto.api.GetPriceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.TokenPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TokenPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TokenPrice.displayName = 'proto.api.TokenPrice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPoolReservesStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetPoolReservesStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPoolReservesStreamResponse.displayName = 'proto.api.GetPoolReservesStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PoolReserves = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PoolReserves, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PoolReserves.displayName = 'proto.api.PoolReserves';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPoolReservesStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetPoolReservesStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetPoolReservesStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPoolReservesStreamRequest.displayName = 'proto.api.GetPoolReservesStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPricesStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetPricesStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetPricesStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPricesStreamRequest.displayName = 'proto.api.GetPricesStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetPricesStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetPricesStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetPricesStreamResponse.displayName = 'proto.api.GetPricesStreamResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMarketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMarketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMarketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMarketsRequest}
 */
proto.api.GetMarketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMarketsRequest;
  return proto.api.GetMarketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMarketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMarketsRequest}
 */
proto.api.GetMarketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMarketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetMarketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMarketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMarketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMarketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMarketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsMap: (f = msg.getMarketsMap()) ? f.toObject(includeInstance, proto.api.Market.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMarketsResponse}
 */
proto.api.GetMarketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMarketsResponse;
  return proto.api.GetMarketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMarketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMarketsResponse}
 */
proto.api.GetMarketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMarketsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.Market.deserializeBinaryFromReader, "", new proto.api.Market());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMarketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetMarketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMarketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.Market.serializeBinaryToWriter);
  }
};


/**
 * map<string, Market> markets = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.Market>}
 */
proto.api.GetMarketsResponse.prototype.getMarketsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.Market>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.Market));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.GetMarketsResponse} returns this
 */
proto.api.GetMarketsResponse.prototype.clearMarketsMap = function() {
  this.getMarketsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Market.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Market.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Market} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Market.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    basemint: jspb.Message.getFieldWithDefault(msg, 4, ""),
    quotedmint: jspb.Message.getFieldWithDefault(msg, 5, ""),
    basedecimals: jspb.Message.getFieldWithDefault(msg, 6, 0),
    quotedecimals: jspb.Message.getFieldWithDefault(msg, 7, 0),
    project: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Market}
 */
proto.api.Market.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Market;
  return proto.api.Market.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Market} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Market}
 */
proto.api.Market.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {!proto.api.MarketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasemint(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuotedmint(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBasedecimals(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuotedecimals(value);
      break;
    case 8:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Market.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Market.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Market} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Market.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBasemint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuotedmint();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBasedecimals();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getQuotedecimals();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.Market.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MarketStatus status = 2;
 * @return {!proto.api.MarketStatus}
 */
proto.api.Market.prototype.getStatus = function() {
  return /** @type {!proto.api.MarketStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.MarketStatus} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.api.Market.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string baseMint = 4;
 * @return {string}
 */
proto.api.Market.prototype.getBasemint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setBasemint = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string quotedMint = 5;
 * @return {string}
 */
proto.api.Market.prototype.getQuotedmint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setQuotedmint = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 baseDecimals = 6;
 * @return {number}
 */
proto.api.Market.prototype.getBasedecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setBasedecimals = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 quoteDecimals = 7;
 * @return {number}
 */
proto.api.Market.prototype.getQuotedecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setQuotedecimals = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Project project = 8;
 * @return {!proto.api.Project}
 */
proto.api.Market.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.Market} returns this
 */
proto.api.Market.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetTickersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetTickersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetTickersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTickersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetTickersRequest}
 */
proto.api.GetTickersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetTickersRequest;
  return proto.api.GetTickersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetTickersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetTickersRequest}
 */
proto.api.GetTickersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetTickersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetTickersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetTickersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTickersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetTickersRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetTickersRequest} returns this
 */
proto.api.GetTickersRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Project project = 2;
 * @return {!proto.api.Project}
 */
proto.api.GetTickersRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetTickersRequest} returns this
 */
proto.api.GetTickersRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetTickersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetTickersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetTickersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetTickersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTickersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickersList: jspb.Message.toObjectList(msg.getTickersList(),
    proto.api.Ticker.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetTickersResponse}
 */
proto.api.GetTickersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetTickersResponse;
  return proto.api.GetTickersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetTickersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetTickersResponse}
 */
proto.api.GetTickersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Ticker;
      reader.readMessage(value,proto.api.Ticker.deserializeBinaryFromReader);
      msg.addTickers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetTickersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetTickersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetTickersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTickersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.Ticker.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Ticker tickers = 1;
 * @return {!Array<!proto.api.Ticker>}
 */
proto.api.GetTickersResponse.prototype.getTickersList = function() {
  return /** @type{!Array<!proto.api.Ticker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.Ticker, 1));
};


/**
 * @param {!Array<!proto.api.Ticker>} value
 * @return {!proto.api.GetTickersResponse} returns this
*/
proto.api.GetTickersResponse.prototype.setTickersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.Ticker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.Ticker}
 */
proto.api.GetTickersResponse.prototype.addTickers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.Ticker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetTickersResponse} returns this
 */
proto.api.GetTickersResponse.prototype.clearTickersList = function() {
  return this.setTickersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Ticker.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Ticker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Ticker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Ticker.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bid: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bidsize: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    ask: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    asksize: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    project: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Ticker}
 */
proto.api.Ticker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Ticker;
  return proto.api.Ticker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Ticker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Ticker}
 */
proto.api.Ticker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketaddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidsize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAsk(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAsksize(value);
      break;
    case 7:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Ticker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Ticker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Ticker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Ticker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBid();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getBidsize();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAsk();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAsksize();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.Ticker.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketAddress = 2;
 * @return {string}
 */
proto.api.Ticker.prototype.getMarketaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setMarketaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double bid = 3;
 * @return {number}
 */
proto.api.Ticker.prototype.getBid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setBid = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double bidSize = 4;
 * @return {number}
 */
proto.api.Ticker.prototype.getBidsize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setBidsize = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double ask = 5;
 * @return {number}
 */
proto.api.Ticker.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setAsk = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double askSize = 6;
 * @return {number}
 */
proto.api.Ticker.prototype.getAsksize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setAsksize = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional Project project = 7;
 * @return {!proto.api.Project}
 */
proto.api.Ticker.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.Ticker} returns this
 */
proto.api.Ticker.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetKlineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetKlineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetKlineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetKlineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    resolution: jspb.Message.getFieldWithDefault(msg, 4, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetKlineRequest}
 */
proto.api.GetKlineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetKlineRequest;
  return proto.api.GetKlineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetKlineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetKlineRequest}
 */
proto.api.GetKlineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolution(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetKlineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetKlineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetKlineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetKlineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResolution();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetKlineRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetKlineRequest} returns this
 */
proto.api.GetKlineRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.GetKlineRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.GetKlineRequest} returns this
*/
proto.api.GetKlineRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetKlineRequest} returns this
 */
proto.api.GetKlineRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetKlineRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.GetKlineRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.GetKlineRequest} returns this
*/
proto.api.GetKlineRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetKlineRequest} returns this
 */
proto.api.GetKlineRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetKlineRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string resolution = 4;
 * @return {string}
 */
proto.api.GetKlineRequest.prototype.getResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetKlineRequest} returns this
 */
proto.api.GetKlineRequest.prototype.setResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 limit = 5;
 * @return {number}
 */
proto.api.GetKlineRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetKlineRequest} returns this
 */
proto.api.GetKlineRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetKlineResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetKlineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetKlineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetKlineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetKlineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    candlesList: jspb.Message.toObjectList(msg.getCandlesList(),
    proto.api.Candle.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetKlineResponse}
 */
proto.api.GetKlineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetKlineResponse;
  return proto.api.GetKlineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetKlineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetKlineResponse}
 */
proto.api.GetKlineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new proto.api.Candle;
      reader.readMessage(value,proto.api.Candle.deserializeBinaryFromReader);
      msg.addCandles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetKlineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetKlineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetKlineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetKlineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCandlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.Candle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetKlineResponse.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetKlineResponse} returns this
 */
proto.api.GetKlineResponse.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.GetKlineResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.GetKlineResponse} returns this
*/
proto.api.GetKlineResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetKlineResponse} returns this
 */
proto.api.GetKlineResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetKlineResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Candle candles = 3;
 * @return {!Array<!proto.api.Candle>}
 */
proto.api.GetKlineResponse.prototype.getCandlesList = function() {
  return /** @type{!Array<!proto.api.Candle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.Candle, 3));
};


/**
 * @param {!Array<!proto.api.Candle>} value
 * @return {!proto.api.GetKlineResponse} returns this
*/
proto.api.GetKlineResponse.prototype.setCandlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.Candle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.Candle}
 */
proto.api.GetKlineResponse.prototype.addCandles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.Candle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetKlineResponse} returns this
 */
proto.api.GetKlineResponse.prototype.clearCandlesList = function() {
  return this.setCandlesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Candle.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Candle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Candle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Candle.toObject = function(includeInstance, msg) {
  var f, obj = {
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatetime: (f = msg.getUpdatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    open: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    close: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    low: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    high: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    count: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Candle}
 */
proto.api.Candle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Candle;
  return proto.api.Candle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Candle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Candle}
 */
proto.api.Candle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClose(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLow(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHigh(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Candle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Candle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Candle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Candle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getClose();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getLow();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getCount();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp startTime = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.Candle.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.Candle} returns this
*/
proto.api.Candle.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.Candle.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp updateTime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.Candle.prototype.getUpdatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.Candle} returns this
*/
proto.api.Candle.prototype.setUpdatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.clearUpdatetime = function() {
  return this.setUpdatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.Candle.prototype.hasUpdatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double open = 3;
 * @return {number}
 */
proto.api.Candle.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double close = 4;
 * @return {number}
 */
proto.api.Candle.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setClose = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double low = 5;
 * @return {number}
 */
proto.api.Candle.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double high = 6;
 * @return {number}
 */
proto.api.Candle.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double amount = 7;
 * @return {number}
 */
proto.api.Candle.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double volume = 8;
 * @return {number}
 */
proto.api.Candle.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double count = 9;
 * @return {number}
 */
proto.api.Candle.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Candle} returns this
 */
proto.api.Candle.prototype.setCount = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderbookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderbookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderbookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderbookRequest}
 */
proto.api.GetOrderbookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderbookRequest;
  return proto.api.GetOrderbookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderbookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderbookRequest}
 */
proto.api.GetOrderbookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderbookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderbookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderbookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOrderbookRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderbookRequest} returns this
 */
proto.api.GetOrderbookRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.api.GetOrderbookRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderbookRequest} returns this
 */
proto.api.GetOrderbookRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetOrderbookRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetOrderbookRequest} returns this
 */
proto.api.GetOrderbookRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetOrderbooksRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderbooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderbooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderbooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbooksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderbooksRequest}
 */
proto.api.GetOrderbooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderbooksRequest;
  return proto.api.GetOrderbooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderbooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderbooksRequest}
 */
proto.api.GetOrderbooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMarkets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderbooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderbooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderbooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbooksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated string markets = 1;
 * @return {!Array<string>}
 */
proto.api.GetOrderbooksRequest.prototype.getMarketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.GetOrderbooksRequest} returns this
 */
proto.api.GetOrderbooksRequest.prototype.setMarketsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.GetOrderbooksRequest} returns this
 */
proto.api.GetOrderbooksRequest.prototype.addMarkets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetOrderbooksRequest} returns this
 */
proto.api.GetOrderbooksRequest.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.api.GetOrderbooksRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderbooksRequest} returns this
 */
proto.api.GetOrderbooksRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetOrderbooksRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetOrderbooksRequest} returns this
 */
proto.api.GetOrderbooksRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetOrderbookResponse.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderbookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderbookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderbookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bidsList: jspb.Message.toObjectList(msg.getBidsList(),
    proto.api.OrderbookItem.toObject, includeInstance),
    asksList: jspb.Message.toObjectList(msg.getAsksList(),
    proto.api.OrderbookItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderbookResponse}
 */
proto.api.GetOrderbookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderbookResponse;
  return proto.api.GetOrderbookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderbookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderbookResponse}
 */
proto.api.GetOrderbookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketaddress(value);
      break;
    case 3:
      var value = new proto.api.OrderbookItem;
      reader.readMessage(value,proto.api.OrderbookItem.deserializeBinaryFromReader);
      msg.addBids(value);
      break;
    case 4:
      var value = new proto.api.OrderbookItem;
      reader.readMessage(value,proto.api.OrderbookItem.deserializeBinaryFromReader);
      msg.addAsks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderbookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderbookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderbookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.OrderbookItem.serializeBinaryToWriter
    );
  }
  f = message.getAsksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.OrderbookItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOrderbookResponse.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderbookResponse} returns this
 */
proto.api.GetOrderbookResponse.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketAddress = 2;
 * @return {string}
 */
proto.api.GetOrderbookResponse.prototype.getMarketaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderbookResponse} returns this
 */
proto.api.GetOrderbookResponse.prototype.setMarketaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated OrderbookItem bids = 3;
 * @return {!Array<!proto.api.OrderbookItem>}
 */
proto.api.GetOrderbookResponse.prototype.getBidsList = function() {
  return /** @type{!Array<!proto.api.OrderbookItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.OrderbookItem, 3));
};


/**
 * @param {!Array<!proto.api.OrderbookItem>} value
 * @return {!proto.api.GetOrderbookResponse} returns this
*/
proto.api.GetOrderbookResponse.prototype.setBidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.OrderbookItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.OrderbookItem}
 */
proto.api.GetOrderbookResponse.prototype.addBids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.OrderbookItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetOrderbookResponse} returns this
 */
proto.api.GetOrderbookResponse.prototype.clearBidsList = function() {
  return this.setBidsList([]);
};


/**
 * repeated OrderbookItem asks = 4;
 * @return {!Array<!proto.api.OrderbookItem>}
 */
proto.api.GetOrderbookResponse.prototype.getAsksList = function() {
  return /** @type{!Array<!proto.api.OrderbookItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.OrderbookItem, 4));
};


/**
 * @param {!Array<!proto.api.OrderbookItem>} value
 * @return {!proto.api.GetOrderbookResponse} returns this
*/
proto.api.GetOrderbookResponse.prototype.setAsksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.OrderbookItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.OrderbookItem}
 */
proto.api.GetOrderbookResponse.prototype.addAsks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.OrderbookItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetOrderbookResponse} returns this
 */
proto.api.GetOrderbookResponse.prototype.clearAsksList = function() {
  return this.setAsksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderbookItem.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderbookItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderbookItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderbookItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    size: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    orderid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientorderid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.OrderbookItem}
 */
proto.api.OrderbookItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderbookItem;
  return proto.api.OrderbookItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderbookItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderbookItem}
 */
proto.api.OrderbookItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClientorderid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.OrderbookItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderbookItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderbookItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderbookItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientorderid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.api.OrderbookItem.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.OrderbookItem} returns this
 */
proto.api.OrderbookItem.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double size = 2;
 * @return {number}
 */
proto.api.OrderbookItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.OrderbookItem} returns this
 */
proto.api.OrderbookItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string orderID = 3;
 * @return {string}
 */
proto.api.OrderbookItem.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.OrderbookItem} returns this
 */
proto.api.OrderbookItem.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 clientOrderID = 4;
 * @return {number}
 */
proto.api.OrderbookItem.prototype.getClientorderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.OrderbookItem} returns this
 */
proto.api.OrderbookItem.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string ownerAddress = 5;
 * @return {string}
 */
proto.api.OrderbookItem.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.OrderbookItem} returns this
 */
proto.api.OrderbookItem.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMarketDepthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMarketDepthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMarketDepthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMarketDepthRequest}
 */
proto.api.GetMarketDepthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMarketDepthRequest;
  return proto.api.GetMarketDepthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMarketDepthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMarketDepthRequest}
 */
proto.api.GetMarketDepthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMarketDepthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetMarketDepthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMarketDepthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetMarketDepthRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetMarketDepthRequest} returns this
 */
proto.api.GetMarketDepthRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.api.GetMarketDepthRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetMarketDepthRequest} returns this
 */
proto.api.GetMarketDepthRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetMarketDepthRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetMarketDepthRequest} returns this
 */
proto.api.GetMarketDepthRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetMarketDepthsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMarketDepthsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMarketDepthsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMarketDepthsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMarketDepthsRequest}
 */
proto.api.GetMarketDepthsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMarketDepthsRequest;
  return proto.api.GetMarketDepthsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMarketDepthsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMarketDepthsRequest}
 */
proto.api.GetMarketDepthsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMarkets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMarketDepthsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetMarketDepthsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMarketDepthsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated string markets = 1;
 * @return {!Array<string>}
 */
proto.api.GetMarketDepthsRequest.prototype.getMarketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.GetMarketDepthsRequest} returns this
 */
proto.api.GetMarketDepthsRequest.prototype.setMarketsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.GetMarketDepthsRequest} returns this
 */
proto.api.GetMarketDepthsRequest.prototype.addMarkets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetMarketDepthsRequest} returns this
 */
proto.api.GetMarketDepthsRequest.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.api.GetMarketDepthsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetMarketDepthsRequest} returns this
 */
proto.api.GetMarketDepthsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetMarketDepthsRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetMarketDepthsRequest} returns this
 */
proto.api.GetMarketDepthsRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetMarketDepthResponse.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMarketDepthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMarketDepthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMarketDepthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bidsList: jspb.Message.toObjectList(msg.getBidsList(),
    proto.api.MarketDepthItem.toObject, includeInstance),
    asksList: jspb.Message.toObjectList(msg.getAsksList(),
    proto.api.MarketDepthItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMarketDepthResponse}
 */
proto.api.GetMarketDepthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMarketDepthResponse;
  return proto.api.GetMarketDepthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMarketDepthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMarketDepthResponse}
 */
proto.api.GetMarketDepthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketaddress(value);
      break;
    case 3:
      var value = new proto.api.MarketDepthItem;
      reader.readMessage(value,proto.api.MarketDepthItem.deserializeBinaryFromReader);
      msg.addBids(value);
      break;
    case 4:
      var value = new proto.api.MarketDepthItem;
      reader.readMessage(value,proto.api.MarketDepthItem.deserializeBinaryFromReader);
      msg.addAsks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMarketDepthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetMarketDepthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMarketDepthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.MarketDepthItem.serializeBinaryToWriter
    );
  }
  f = message.getAsksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.MarketDepthItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetMarketDepthResponse.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetMarketDepthResponse} returns this
 */
proto.api.GetMarketDepthResponse.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketAddress = 2;
 * @return {string}
 */
proto.api.GetMarketDepthResponse.prototype.getMarketaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetMarketDepthResponse} returns this
 */
proto.api.GetMarketDepthResponse.prototype.setMarketaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated MarketDepthItem bids = 3;
 * @return {!Array<!proto.api.MarketDepthItem>}
 */
proto.api.GetMarketDepthResponse.prototype.getBidsList = function() {
  return /** @type{!Array<!proto.api.MarketDepthItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.MarketDepthItem, 3));
};


/**
 * @param {!Array<!proto.api.MarketDepthItem>} value
 * @return {!proto.api.GetMarketDepthResponse} returns this
*/
proto.api.GetMarketDepthResponse.prototype.setBidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.MarketDepthItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.MarketDepthItem}
 */
proto.api.GetMarketDepthResponse.prototype.addBids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.MarketDepthItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetMarketDepthResponse} returns this
 */
proto.api.GetMarketDepthResponse.prototype.clearBidsList = function() {
  return this.setBidsList([]);
};


/**
 * repeated MarketDepthItem asks = 4;
 * @return {!Array<!proto.api.MarketDepthItem>}
 */
proto.api.GetMarketDepthResponse.prototype.getAsksList = function() {
  return /** @type{!Array<!proto.api.MarketDepthItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.MarketDepthItem, 4));
};


/**
 * @param {!Array<!proto.api.MarketDepthItem>} value
 * @return {!proto.api.GetMarketDepthResponse} returns this
*/
proto.api.GetMarketDepthResponse.prototype.setAsksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.MarketDepthItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.MarketDepthItem}
 */
proto.api.GetMarketDepthResponse.prototype.addAsks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.MarketDepthItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetMarketDepthResponse} returns this
 */
proto.api.GetMarketDepthResponse.prototype.clearAsksList = function() {
  return this.setAsksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketDepthItem.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketDepthItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketDepthItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    size: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.MarketDepthItem}
 */
proto.api.MarketDepthItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketDepthItem;
  return proto.api.MarketDepthItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketDepthItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketDepthItem}
 */
proto.api.MarketDepthItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.MarketDepthItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketDepthItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketDepthItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.api.MarketDepthItem.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.MarketDepthItem} returns this
 */
proto.api.MarketDepthItem.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double size = 2;
 * @return {number}
 */
proto.api.MarketDepthItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.MarketDepthItem} returns this
 */
proto.api.MarketDepthItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetTradesRequest}
 */
proto.api.GetTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetTradesRequest;
  return proto.api.GetTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetTradesRequest}
 */
proto.api.GetTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetTradesRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetTradesRequest} returns this
 */
proto.api.GetTradesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.api.GetTradesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetTradesRequest} returns this
 */
proto.api.GetTradesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetTradesRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetTradesRequest} returns this
 */
proto.api.GetTradesRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetTradesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetTradesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetTradesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetTradesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTradesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.api.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetTradesResponse}
 */
proto.api.GetTradesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetTradesResponse;
  return proto.api.GetTradesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetTradesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetTradesResponse}
 */
proto.api.GetTradesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Trade;
      reader.readMessage(value,proto.api.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetTradesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetTradesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetTradesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTradesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Trade trades = 1;
 * @return {!Array<!proto.api.Trade>}
 */
proto.api.GetTradesResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.api.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.Trade, 1));
};


/**
 * @param {!Array<!proto.api.Trade>} value
 * @return {!proto.api.GetTradesResponse} returns this
*/
proto.api.GetTradesResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.Trade}
 */
proto.api.GetTradesResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetTradesResponse} returns this
 */
proto.api.GetTradesResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Trade.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Trade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Trade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Trade.toObject = function(includeInstance, msg) {
  var f, obj = {
    side: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    fillprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    orderid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ismaker: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    address: jspb.Message.getFieldWithDefault(msg, 6, ""),
    feeorrebate: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    orderprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Trade}
 */
proto.api.Trade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Trade;
  return proto.api.Trade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Trade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Trade}
 */
proto.api.Trade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFillprice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsmaker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFeeorrebate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOrderprice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Trade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Trade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Trade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Trade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getFillprice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsmaker();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFeeorrebate();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getOrderprice();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional Side side = 1;
 * @return {!proto.api.Side}
 */
proto.api.Trade.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double size = 2;
 * @return {number}
 */
proto.api.Trade.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double fillPrice = 3;
 * @return {number}
 */
proto.api.Trade.prototype.getFillprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setFillprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string orderID = 4;
 * @return {string}
 */
proto.api.Trade.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool isMaker = 5;
 * @return {boolean}
 */
proto.api.Trade.prototype.getIsmaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setIsmaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string address = 6;
 * @return {string}
 */
proto.api.Trade.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional double feeOrRebate = 7;
 * @return {number}
 */
proto.api.Trade.prototype.getFeeorrebate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setFeeorrebate = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double orderPrice = 8;
 * @return {number}
 */
proto.api.Trade.prototype.getOrderprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Trade} returns this
 */
proto.api.Trade.prototype.setOrderprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetServerTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetServerTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetServerTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetServerTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetServerTimeRequest}
 */
proto.api.GetServerTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetServerTimeRequest;
  return proto.api.GetServerTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetServerTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetServerTimeRequest}
 */
proto.api.GetServerTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetServerTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetServerTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetServerTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetServerTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetServerTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetServerTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetServerTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetServerTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetServerTimeResponse}
 */
proto.api.GetServerTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetServerTimeResponse;
  return proto.api.GetServerTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetServerTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetServerTimeResponse}
 */
proto.api.GetServerTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetServerTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetServerTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetServerTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetServerTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string timestamp = 1;
 * @return {string}
 */
proto.api.GetServerTimeResponse.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetServerTimeResponse} returns this
 */
proto.api.GetServerTimeResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetAccountBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetAccountBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetAccountBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetAccountBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owneraddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetAccountBalanceRequest}
 */
proto.api.GetAccountBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetAccountBalanceRequest;
  return proto.api.GetAccountBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetAccountBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetAccountBalanceRequest}
 */
proto.api.GetAccountBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetAccountBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetAccountBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetAccountBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetAccountBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ownerAddress = 1;
 * @return {string}
 */
proto.api.GetAccountBalanceRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetAccountBalanceRequest} returns this
 */
proto.api.GetAccountBalanceRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetAccountBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetAccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetAccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetAccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetAccountBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: jspb.Message.toObjectList(msg.getTokensList(),
    proto.api.TokenBalance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetAccountBalanceResponse}
 */
proto.api.GetAccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetAccountBalanceResponse;
  return proto.api.GetAccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetAccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetAccountBalanceResponse}
 */
proto.api.GetAccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TokenBalance;
      reader.readMessage(value,proto.api.TokenBalance.deserializeBinaryFromReader);
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetAccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetAccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetAccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetAccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.TokenBalance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenBalance tokens = 1;
 * @return {!Array<!proto.api.TokenBalance>}
 */
proto.api.GetAccountBalanceResponse.prototype.getTokensList = function() {
  return /** @type{!Array<!proto.api.TokenBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.TokenBalance, 1));
};


/**
 * @param {!Array<!proto.api.TokenBalance>} value
 * @return {!proto.api.GetAccountBalanceResponse} returns this
*/
proto.api.GetAccountBalanceResponse.prototype.setTokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.TokenBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.TokenBalance}
 */
proto.api.GetAccountBalanceResponse.prototype.addTokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.TokenBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetAccountBalanceResponse} returns this
 */
proto.api.GetAccountBalanceResponse.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TokenBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TokenBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TokenBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    walletamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    unsettledamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    openordersamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.TokenBalance}
 */
proto.api.TokenBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TokenBalance;
  return proto.api.TokenBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TokenBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TokenBalance}
 */
proto.api.TokenBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWalletamount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUnsettledamount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenordersamount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.TokenBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TokenBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TokenBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWalletamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getUnsettledamount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOpenordersamount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.api.TokenBalance.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenBalance} returns this
 */
proto.api.TokenBalance.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.api.TokenBalance.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenBalance} returns this
 */
proto.api.TokenBalance.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double walletAmount = 3;
 * @return {number}
 */
proto.api.TokenBalance.prototype.getWalletamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenBalance} returns this
 */
proto.api.TokenBalance.prototype.setWalletamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double unsettledAmount = 4;
 * @return {number}
 */
proto.api.TokenBalance.prototype.getUnsettledamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenBalance} returns this
 */
proto.api.TokenBalance.prototype.setUnsettledamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double openOrdersAmount = 5;
 * @return {number}
 */
proto.api.TokenBalance.prototype.getOpenordersamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenBalance} returns this
 */
proto.api.TokenBalance.prototype.setOpenordersamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PostOrderRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owneraddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payeraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    market: jspb.Message.getFieldWithDefault(msg, 3, ""),
    side: jspb.Message.getFieldWithDefault(msg, 4, 0),
    typeList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clientorderid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    project: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostOrderRequest}
 */
proto.api.PostOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostOrderRequest;
  return proto.api.PostOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostOrderRequest}
 */
proto.api.PostOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeraddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 4:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.api.OrderType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addType(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClientorderid(value);
      break;
    case 10:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayeraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClientorderid();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string ownerAddress = 1;
 * @return {string}
 */
proto.api.PostOrderRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payerAddress = 2;
 * @return {string}
 */
proto.api.PostOrderRequest.prototype.getPayeraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setPayeraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market = 3;
 * @return {string}
 */
proto.api.PostOrderRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Side side = 4;
 * @return {!proto.api.Side}
 */
proto.api.PostOrderRequest.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated OrderType type = 5;
 * @return {!Array<!proto.api.OrderType>}
 */
proto.api.PostOrderRequest.prototype.getTypeList = function() {
  return /** @type {!Array<!proto.api.OrderType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.api.OrderType>} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setTypeList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.api.OrderType} value
 * @param {number=} opt_index
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.addType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional double amount = 6;
 * @return {number}
 */
proto.api.PostOrderRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.api.PostOrderRequest.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string openOrdersAddress = 8;
 * @return {string}
 */
proto.api.PostOrderRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 clientOrderID = 9;
 * @return {number}
 */
proto.api.PostOrderRequest.prototype.getClientorderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional Project project = 10;
 * @return {!proto.api.Project}
 */
proto.api.PostOrderRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PostOrderRequest} returns this
 */
proto.api.PostOrderRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PostReplaceOrderRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostReplaceOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostReplaceOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostReplaceOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostReplaceOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owneraddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payeraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    market: jspb.Message.getFieldWithDefault(msg, 3, ""),
    side: jspb.Message.getFieldWithDefault(msg, 4, 0),
    typeList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clientorderid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    orderid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    project: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostReplaceOrderRequest}
 */
proto.api.PostReplaceOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostReplaceOrderRequest;
  return proto.api.PostReplaceOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostReplaceOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostReplaceOrderRequest}
 */
proto.api.PostReplaceOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeraddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 4:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.api.OrderType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addType(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClientorderid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 11:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostReplaceOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostReplaceOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostReplaceOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostReplaceOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayeraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClientorderid();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional string ownerAddress = 1;
 * @return {string}
 */
proto.api.PostReplaceOrderRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payerAddress = 2;
 * @return {string}
 */
proto.api.PostReplaceOrderRequest.prototype.getPayeraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setPayeraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market = 3;
 * @return {string}
 */
proto.api.PostReplaceOrderRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Side side = 4;
 * @return {!proto.api.Side}
 */
proto.api.PostReplaceOrderRequest.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated OrderType type = 5;
 * @return {!Array<!proto.api.OrderType>}
 */
proto.api.PostReplaceOrderRequest.prototype.getTypeList = function() {
  return /** @type {!Array<!proto.api.OrderType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.api.OrderType>} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setTypeList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.api.OrderType} value
 * @param {number=} opt_index
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.addType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional double amount = 6;
 * @return {number}
 */
proto.api.PostReplaceOrderRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.api.PostReplaceOrderRequest.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string openOrdersAddress = 8;
 * @return {string}
 */
proto.api.PostReplaceOrderRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 clientOrderID = 9;
 * @return {number}
 */
proto.api.PostReplaceOrderRequest.prototype.getClientorderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string orderID = 10;
 * @return {string}
 */
proto.api.PostReplaceOrderRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Project project = 11;
 * @return {!proto.api.Project}
 */
proto.api.PostReplaceOrderRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PostReplaceOrderRequest} returns this
 */
proto.api.PostReplaceOrderRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.api.TransactionMessage.toObject(includeInstance, f),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostOrderResponse}
 */
proto.api.PostOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostOrderResponse;
  return proto.api.PostOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostOrderResponse}
 */
proto.api.PostOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.api.TransactionMessage}
 */
proto.api.PostOrderResponse.prototype.getTransaction = function() {
  return /** @type{?proto.api.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.TransactionMessage, 1));
};


/**
 * @param {?proto.api.TransactionMessage|undefined} value
 * @return {!proto.api.PostOrderResponse} returns this
*/
proto.api.PostOrderResponse.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PostOrderResponse} returns this
 */
proto.api.PostOrderResponse.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PostOrderResponse.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string openOrdersAddress = 2;
 * @return {string}
 */
proto.api.PostOrderResponse.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostOrderResponse} returns this
 */
proto.api.PostOrderResponse.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostCancelOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostCancelOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostCancelOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    side: jspb.Message.getFieldWithDefault(msg, 2, 0),
    marketaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    project: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostCancelOrderRequest}
 */
proto.api.PostCancelOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostCancelOrderRequest;
  return proto.api.PostCancelOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostCancelOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostCancelOrderRequest}
 */
proto.api.PostCancelOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketaddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 6:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostCancelOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostCancelOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostCancelOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMarketaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.api.PostCancelOrderRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelOrderRequest} returns this
 */
proto.api.PostCancelOrderRequest.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Side side = 2;
 * @return {!proto.api.Side}
 */
proto.api.PostCancelOrderRequest.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.PostCancelOrderRequest} returns this
 */
proto.api.PostCancelOrderRequest.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string marketAddress = 3;
 * @return {string}
 */
proto.api.PostCancelOrderRequest.prototype.getMarketaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelOrderRequest} returns this
 */
proto.api.PostCancelOrderRequest.prototype.setMarketaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ownerAddress = 4;
 * @return {string}
 */
proto.api.PostCancelOrderRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelOrderRequest} returns this
 */
proto.api.PostCancelOrderRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string openOrdersAddress = 5;
 * @return {string}
 */
proto.api.PostCancelOrderRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelOrderRequest} returns this
 */
proto.api.PostCancelOrderRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Project project = 6;
 * @return {!proto.api.Project}
 */
proto.api.PostCancelOrderRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PostCancelOrderRequest} returns this
 */
proto.api.PostCancelOrderRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostCancelByClientOrderIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostCancelByClientOrderIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelByClientOrderIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientorderid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    marketaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    project: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostCancelByClientOrderIDRequest}
 */
proto.api.PostCancelByClientOrderIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostCancelByClientOrderIDRequest;
  return proto.api.PostCancelByClientOrderIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostCancelByClientOrderIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostCancelByClientOrderIDRequest}
 */
proto.api.PostCancelByClientOrderIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClientorderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 5:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostCancelByClientOrderIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostCancelByClientOrderIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelByClientOrderIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientorderid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMarketaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional uint64 clientOrderID = 1;
 * @return {number}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.getClientorderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PostCancelByClientOrderIDRequest} returns this
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string marketAddress = 2;
 * @return {string}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.getMarketaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelByClientOrderIDRequest} returns this
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.setMarketaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ownerAddress = 3;
 * @return {string}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelByClientOrderIDRequest} returns this
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string openOrdersAddress = 4;
 * @return {string}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelByClientOrderIDRequest} returns this
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Project project = 5;
 * @return {!proto.api.Project}
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PostCancelByClientOrderIDRequest} returns this
 */
proto.api.PostCancelByClientOrderIDRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostCancelOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostCancelOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostCancelOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.api.TransactionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostCancelOrderResponse}
 */
proto.api.PostCancelOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostCancelOrderResponse;
  return proto.api.PostCancelOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostCancelOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostCancelOrderResponse}
 */
proto.api.PostCancelOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostCancelOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostCancelOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostCancelOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.api.TransactionMessage}
 */
proto.api.PostCancelOrderResponse.prototype.getTransaction = function() {
  return /** @type{?proto.api.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.TransactionMessage, 1));
};


/**
 * @param {?proto.api.TransactionMessage|undefined} value
 * @return {!proto.api.PostCancelOrderResponse} returns this
*/
proto.api.PostCancelOrderResponse.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PostCancelOrderResponse} returns this
 */
proto.api.PostCancelOrderResponse.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PostCancelOrderResponse.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PostCancelAllRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostCancelAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostCancelAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostCancelAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    openordersaddressesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    project: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostCancelAllRequest}
 */
proto.api.PostCancelAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostCancelAllRequest;
  return proto.api.PostCancelAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostCancelAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostCancelAllRequest}
 */
proto.api.PostCancelAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addOpenordersaddresses(value);
      break;
    case 4:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostCancelAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostCancelAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostCancelAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOpenordersaddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.PostCancelAllRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelAllRequest} returns this
 */
proto.api.PostCancelAllRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ownerAddress = 2;
 * @return {string}
 */
proto.api.PostCancelAllRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostCancelAllRequest} returns this
 */
proto.api.PostCancelAllRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string openOrdersAddresses = 3;
 * @return {!Array<string>}
 */
proto.api.PostCancelAllRequest.prototype.getOpenordersaddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.PostCancelAllRequest} returns this
 */
proto.api.PostCancelAllRequest.prototype.setOpenordersaddressesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.PostCancelAllRequest} returns this
 */
proto.api.PostCancelAllRequest.prototype.addOpenordersaddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PostCancelAllRequest} returns this
 */
proto.api.PostCancelAllRequest.prototype.clearOpenordersaddressesList = function() {
  return this.setOpenordersaddressesList([]);
};


/**
 * optional Project project = 4;
 * @return {!proto.api.Project}
 */
proto.api.PostCancelAllRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PostCancelAllRequest} returns this
 */
proto.api.PostCancelAllRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TransactionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TransactionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TransactionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TransactionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, ""),
    iscleanup: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.TransactionMessage}
 */
proto.api.TransactionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TransactionMessage;
  return proto.api.TransactionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TransactionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TransactionMessage}
 */
proto.api.TransactionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscleanup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.TransactionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TransactionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TransactionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TransactionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIscleanup();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.api.TransactionMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TransactionMessage} returns this
 */
proto.api.TransactionMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isCleanup = 2;
 * @return {boolean}
 */
proto.api.TransactionMessage.prototype.getIscleanup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.TransactionMessage} returns this
 */
proto.api.TransactionMessage.prototype.setIscleanup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PostCancelAllResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostCancelAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostCancelAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostCancelAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.api.TransactionMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostCancelAllResponse}
 */
proto.api.PostCancelAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostCancelAllResponse;
  return proto.api.PostCancelAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostCancelAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostCancelAllResponse}
 */
proto.api.PostCancelAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostCancelAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostCancelAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostCancelAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostCancelAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransactionMessage transactions = 1;
 * @return {!Array<!proto.api.TransactionMessage>}
 */
proto.api.PostCancelAllResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.api.TransactionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.TransactionMessage, 1));
};


/**
 * @param {!Array<!proto.api.TransactionMessage>} value
 * @return {!proto.api.PostCancelAllResponse} returns this
*/
proto.api.PostCancelAllResponse.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.TransactionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.TransactionMessage}
 */
proto.api.PostCancelAllResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.TransactionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PostCancelAllResponse} returns this
 */
proto.api.PostCancelAllResponse.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSettleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSettleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSettleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSettleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owneraddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, ""),
    basetokenwallet: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quotetokenwallet: jspb.Message.getFieldWithDefault(msg, 4, ""),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    project: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSettleRequest}
 */
proto.api.PostSettleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSettleRequest;
  return proto.api.PostSettleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSettleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSettleRequest}
 */
proto.api.PostSettleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasetokenwallet(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuotetokenwallet(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 6:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSettleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSettleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSettleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSettleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBasetokenwallet();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuotetokenwallet();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string ownerAddress = 1;
 * @return {string}
 */
proto.api.PostSettleRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSettleRequest} returns this
 */
proto.api.PostSettleRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market = 2;
 * @return {string}
 */
proto.api.PostSettleRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSettleRequest} returns this
 */
proto.api.PostSettleRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string baseTokenWallet = 3;
 * @return {string}
 */
proto.api.PostSettleRequest.prototype.getBasetokenwallet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSettleRequest} returns this
 */
proto.api.PostSettleRequest.prototype.setBasetokenwallet = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quoteTokenWallet = 4;
 * @return {string}
 */
proto.api.PostSettleRequest.prototype.getQuotetokenwallet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSettleRequest} returns this
 */
proto.api.PostSettleRequest.prototype.setQuotetokenwallet = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string openOrdersAddress = 5;
 * @return {string}
 */
proto.api.PostSettleRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSettleRequest} returns this
 */
proto.api.PostSettleRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Project project = 6;
 * @return {!proto.api.Project}
 */
proto.api.PostSettleRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PostSettleRequest} returns this
 */
proto.api.PostSettleRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSettleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSettleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSettleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSettleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.api.TransactionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSettleResponse}
 */
proto.api.PostSettleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSettleResponse;
  return proto.api.PostSettleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSettleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSettleResponse}
 */
proto.api.PostSettleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSettleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSettleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSettleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSettleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.api.TransactionMessage}
 */
proto.api.PostSettleResponse.prototype.getTransaction = function() {
  return /** @type{?proto.api.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.TransactionMessage, 1));
};


/**
 * @param {?proto.api.TransactionMessage|undefined} value
 * @return {!proto.api.PostSettleResponse} returns this
*/
proto.api.PostSettleResponse.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PostSettleResponse} returns this
 */
proto.api.PostSettleResponse.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PostSettleResponse.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Settlement.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Settlement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Settlement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Settlement.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unsettled: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Settlement}
 */
proto.api.Settlement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Settlement;
  return proto.api.Settlement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Settlement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Settlement}
 */
proto.api.Settlement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUnsettled(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Settlement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Settlement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Settlement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Settlement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnsettled();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.api.Settlement.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Settlement} returns this
 */
proto.api.Settlement.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double unsettled = 2;
 * @return {number}
 */
proto.api.Settlement.prototype.getUnsettled = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Settlement} returns this
 */
proto.api.Settlement.prototype.setUnsettled = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double amount = 3;
 * @return {number}
 */
proto.api.Settlement.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Settlement} returns this
 */
proto.api.Settlement.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetOrdersRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    side: jspb.Message.getFieldWithDefault(msg, 3, 0),
    typesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    direction: jspb.Message.getFieldWithDefault(msg, 7, 0),
    address: jspb.Message.getFieldWithDefault(msg, 8, ""),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 9, ""),
    project: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrdersRequest}
 */
proto.api.GetOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrdersRequest;
  return proto.api.GetOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrdersRequest}
 */
proto.api.GetOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {!proto.api.OrderStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.api.OrderType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTypes(values[i]);
      }
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 7:
      var value = /** @type {!proto.api.Direction} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 10:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOrdersRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderStatus status = 2;
 * @return {!proto.api.OrderStatus}
 */
proto.api.GetOrdersRequest.prototype.getStatus = function() {
  return /** @type {!proto.api.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.OrderStatus} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Side side = 3;
 * @return {!proto.api.Side}
 */
proto.api.GetOrdersRequest.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated OrderType types = 4;
 * @return {!Array<!proto.api.OrderType>}
 */
proto.api.GetOrdersRequest.prototype.getTypesList = function() {
  return /** @type {!Array<!proto.api.OrderType>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.api.OrderType>} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.api.OrderType} value
 * @param {number=} opt_index
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional google.protobuf.Timestamp from = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.GetOrdersRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.GetOrdersRequest} returns this
*/
proto.api.GetOrdersRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetOrdersRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 limit = 6;
 * @return {number}
 */
proto.api.GetOrdersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Direction direction = 7;
 * @return {!proto.api.Direction}
 */
proto.api.GetOrdersRequest.prototype.getDirection = function() {
  return /** @type {!proto.api.Direction} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.Direction} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string address = 8;
 * @return {string}
 */
proto.api.GetOrdersRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string openOrdersAddress = 9;
 * @return {string}
 */
proto.api.GetOrdersRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional Project project = 10;
 * @return {!proto.api.Project}
 */
proto.api.GetOrdersRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetOrdersRequest} returns this
 */
proto.api.GetOrdersRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto.api.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrdersResponse}
 */
proto.api.GetOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrdersResponse;
  return proto.api.GetOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrdersResponse}
 */
proto.api.GetOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Order;
      reader.readMessage(value,proto.api.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Order orders = 1;
 * @return {!Array<!proto.api.Order>}
 */
proto.api.GetOrdersResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.api.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.Order, 1));
};


/**
 * @param {!Array<!proto.api.Order>} value
 * @return {!proto.api.GetOrdersResponse} returns this
*/
proto.api.GetOrdersResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.Order}
 */
proto.api.GetOrdersResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetOrdersResponse} returns this
 */
proto.api.GetOrdersResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.Order.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, ""),
    side: jspb.Message.getFieldWithDefault(msg, 3, 0),
    typesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    remainingsize: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    createdat: (f = msg.getCreatedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    clientorderid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    openorderaccount: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Order}
 */
proto.api.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Order;
  return proto.api.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Order}
 */
proto.api.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.api.OrderType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTypes(values[i]);
      }
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRemainingsize(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenorderaccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getRemainingsize();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getCreatedat();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClientorderid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOpenorderaccount();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.api.Order.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market = 2;
 * @return {string}
 */
proto.api.Order.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Side side = 3;
 * @return {!proto.api.Side}
 */
proto.api.Order.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated OrderType types = 4;
 * @return {!Array<!proto.api.OrderType>}
 */
proto.api.Order.prototype.getTypesList = function() {
  return /** @type {!Array<!proto.api.OrderType>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.api.OrderType>} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.api.OrderType} value
 * @param {number=} opt_index
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.api.Order.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double remainingSize = 6;
 * @return {number}
 */
proto.api.Order.prototype.getRemainingsize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setRemainingsize = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp createdAt = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.Order.prototype.getCreatedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.Order} returns this
*/
proto.api.Order.prototype.setCreatedat = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.clearCreatedat = function() {
  return this.setCreatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.Order.prototype.hasCreatedat = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string clientOrderID = 8;
 * @return {string}
 */
proto.api.Order.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string openOrderAccount = 9;
 * @return {string}
 */
proto.api.Order.prototype.getOpenorderaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Order} returns this
 */
proto.api.Order.prototype.setOpenorderaccount = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderStatusStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderStatusStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderStatusStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderStatusStreamRequest}
 */
proto.api.GetOrderStatusStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderStatusStreamRequest;
  return proto.api.GetOrderStatusStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderStatusStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderStatusStreamRequest}
 */
proto.api.GetOrderStatusStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderStatusStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderStatusStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderStatusStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOrderStatusStreamRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusStreamRequest} returns this
 */
proto.api.GetOrderStatusStreamRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ownerAddress = 2;
 * @return {string}
 */
proto.api.GetOrderStatusStreamRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusStreamRequest} returns this
 */
proto.api.GetOrderStatusStreamRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetOrderStatusStreamRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetOrderStatusStreamRequest} returns this
 */
proto.api.GetOrderStatusStreamRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderStatusStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderStatusStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderStatusStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    orderinfo: (f = msg.getOrderinfo()) && proto.api.GetOrderStatusResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderStatusStreamResponse}
 */
proto.api.GetOrderStatusStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderStatusStreamResponse;
  return proto.api.GetOrderStatusStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderStatusStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderStatusStreamResponse}
 */
proto.api.GetOrderStatusStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetOrderStatusResponse;
      reader.readMessage(value,proto.api.GetOrderStatusResponse.deserializeBinaryFromReader);
      msg.setOrderinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderStatusStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderStatusStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderStatusStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrderinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetOrderStatusResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetOrderStatusStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusStreamResponse} returns this
 */
proto.api.GetOrderStatusStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetOrderStatusResponse orderInfo = 2;
 * @return {?proto.api.GetOrderStatusResponse}
 */
proto.api.GetOrderStatusStreamResponse.prototype.getOrderinfo = function() {
  return /** @type{?proto.api.GetOrderStatusResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.GetOrderStatusResponse, 2));
};


/**
 * @param {?proto.api.GetOrderStatusResponse|undefined} value
 * @return {!proto.api.GetOrderStatusStreamResponse} returns this
*/
proto.api.GetOrderStatusStreamResponse.prototype.setOrderinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetOrderStatusStreamResponse} returns this
 */
proto.api.GetOrderStatusStreamResponse.prototype.clearOrderinfo = function() {
  return this.setOrderinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetOrderStatusStreamResponse.prototype.hasOrderinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openorderaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientorderid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    quantityreleased: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    quantityremaining: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    fillprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    side: jspb.Message.getFieldWithDefault(msg, 8, 0),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 9, 0),
    orderprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderStatusResponse}
 */
proto.api.GetOrderStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderStatusResponse;
  return proto.api.GetOrderStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderStatusResponse}
 */
proto.api.GetOrderStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenorderaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClientorderid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantityreleased(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantityremaining(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFillprice(value);
      break;
    case 8:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 9:
      var value = /** @type {!proto.api.OrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOrderprice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenorderaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientorderid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getQuantityreleased();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getQuantityremaining();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getFillprice();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getOrderprice();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOrderStatusResponse.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string openOrderAddress = 2;
 * @return {string}
 */
proto.api.GetOrderStatusResponse.prototype.getOpenorderaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOpenorderaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string orderID = 3;
 * @return {string}
 */
proto.api.GetOrderStatusResponse.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 clientOrderID = 4;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getClientorderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional float quantityReleased = 5;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getQuantityreleased = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setQuantityreleased = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float quantityRemaining = 6;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getQuantityremaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setQuantityremaining = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float fillPrice = 7;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getFillprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setFillprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional Side side = 8;
 * @return {!proto.api.Side}
 */
proto.api.GetOrderStatusResponse.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional OrderStatus orderStatus = 9;
 * @return {!proto.api.OrderStatus}
 */
proto.api.GetOrderStatusResponse.prototype.getOrderstatus = function() {
  return /** @type {!proto.api.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.OrderStatus} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional float orderPrice = 10;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getOrderprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOrderprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSubmitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSubmitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSubmitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.api.TransactionMessage.toObject(includeInstance, f),
    skippreflight: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSubmitRequest}
 */
proto.api.PostSubmitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSubmitRequest;
  return proto.api.PostSubmitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSubmitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSubmitRequest}
 */
proto.api.PostSubmitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkippreflight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSubmitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSubmitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSubmitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
  f = message.getSkippreflight();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.api.TransactionMessage}
 */
proto.api.PostSubmitRequest.prototype.getTransaction = function() {
  return /** @type{?proto.api.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.TransactionMessage, 1));
};


/**
 * @param {?proto.api.TransactionMessage|undefined} value
 * @return {!proto.api.PostSubmitRequest} returns this
*/
proto.api.PostSubmitRequest.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PostSubmitRequest} returns this
 */
proto.api.PostSubmitRequest.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PostSubmitRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool skipPreFlight = 2;
 * @return {boolean}
 */
proto.api.PostSubmitRequest.prototype.getSkippreflight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PostSubmitRequest} returns this
 */
proto.api.PostSubmitRequest.prototype.setSkippreflight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSubmitRequestEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSubmitRequestEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSubmitRequestEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitRequestEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.api.TransactionMessage.toObject(includeInstance, f),
    skippreflight: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSubmitRequestEntry}
 */
proto.api.PostSubmitRequestEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSubmitRequestEntry;
  return proto.api.PostSubmitRequestEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSubmitRequestEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSubmitRequestEntry}
 */
proto.api.PostSubmitRequestEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkippreflight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSubmitRequestEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSubmitRequestEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSubmitRequestEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitRequestEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
  f = message.getSkippreflight();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.api.TransactionMessage}
 */
proto.api.PostSubmitRequestEntry.prototype.getTransaction = function() {
  return /** @type{?proto.api.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.TransactionMessage, 1));
};


/**
 * @param {?proto.api.TransactionMessage|undefined} value
 * @return {!proto.api.PostSubmitRequestEntry} returns this
*/
proto.api.PostSubmitRequestEntry.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PostSubmitRequestEntry} returns this
 */
proto.api.PostSubmitRequestEntry.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PostSubmitRequestEntry.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool skipPreFlight = 2;
 * @return {boolean}
 */
proto.api.PostSubmitRequestEntry.prototype.getSkippreflight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PostSubmitRequestEntry} returns this
 */
proto.api.PostSubmitRequestEntry.prototype.setSkippreflight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PostSubmitBatchRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSubmitBatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSubmitBatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSubmitBatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitBatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.api.PostSubmitRequestEntry.toObject, includeInstance),
    submitstrategy: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSubmitBatchRequest}
 */
proto.api.PostSubmitBatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSubmitBatchRequest;
  return proto.api.PostSubmitBatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSubmitBatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSubmitBatchRequest}
 */
proto.api.PostSubmitBatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PostSubmitRequestEntry;
      reader.readMessage(value,proto.api.PostSubmitRequestEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 2:
      var value = /** @type {!proto.api.SubmitStrategy} */ (reader.readEnum());
      msg.setSubmitstrategy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSubmitBatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSubmitBatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSubmitBatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitBatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PostSubmitRequestEntry.serializeBinaryToWriter
    );
  }
  f = message.getSubmitstrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * repeated PostSubmitRequestEntry entries = 1;
 * @return {!Array<!proto.api.PostSubmitRequestEntry>}
 */
proto.api.PostSubmitBatchRequest.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.api.PostSubmitRequestEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PostSubmitRequestEntry, 1));
};


/**
 * @param {!Array<!proto.api.PostSubmitRequestEntry>} value
 * @return {!proto.api.PostSubmitBatchRequest} returns this
*/
proto.api.PostSubmitBatchRequest.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PostSubmitRequestEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PostSubmitRequestEntry}
 */
proto.api.PostSubmitBatchRequest.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PostSubmitRequestEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PostSubmitBatchRequest} returns this
 */
proto.api.PostSubmitBatchRequest.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * optional SubmitStrategy SubmitStrategy = 2;
 * @return {!proto.api.SubmitStrategy}
 */
proto.api.PostSubmitBatchRequest.prototype.getSubmitstrategy = function() {
  return /** @type {!proto.api.SubmitStrategy} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.SubmitStrategy} value
 * @return {!proto.api.PostSubmitBatchRequest} returns this
 */
proto.api.PostSubmitBatchRequest.prototype.setSubmitstrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSubmitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSubmitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSubmitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSubmitResponse}
 */
proto.api.PostSubmitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSubmitResponse;
  return proto.api.PostSubmitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSubmitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSubmitResponse}
 */
proto.api.PostSubmitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSubmitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSubmitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSubmitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string signature = 1;
 * @return {string}
 */
proto.api.PostSubmitResponse.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSubmitResponse} returns this
 */
proto.api.PostSubmitResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSubmitBatchResponseEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSubmitBatchResponseEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSubmitBatchResponseEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitBatchResponseEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    submitted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSubmitBatchResponseEntry}
 */
proto.api.PostSubmitBatchResponseEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSubmitBatchResponseEntry;
  return proto.api.PostSubmitBatchResponseEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSubmitBatchResponseEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSubmitBatchResponseEntry}
 */
proto.api.PostSubmitBatchResponseEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubmitted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSubmitBatchResponseEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSubmitBatchResponseEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSubmitBatchResponseEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitBatchResponseEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubmitted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string signature = 1;
 * @return {string}
 */
proto.api.PostSubmitBatchResponseEntry.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSubmitBatchResponseEntry} returns this
 */
proto.api.PostSubmitBatchResponseEntry.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.api.PostSubmitBatchResponseEntry.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PostSubmitBatchResponseEntry} returns this
 */
proto.api.PostSubmitBatchResponseEntry.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool submitted = 3;
 * @return {boolean}
 */
proto.api.PostSubmitBatchResponseEntry.prototype.getSubmitted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PostSubmitBatchResponseEntry} returns this
 */
proto.api.PostSubmitBatchResponseEntry.prototype.setSubmitted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PostSubmitBatchResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PostSubmitBatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PostSubmitBatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PostSubmitBatchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitBatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.api.PostSubmitBatchResponseEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PostSubmitBatchResponse}
 */
proto.api.PostSubmitBatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PostSubmitBatchResponse;
  return proto.api.PostSubmitBatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PostSubmitBatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PostSubmitBatchResponse}
 */
proto.api.PostSubmitBatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PostSubmitBatchResponseEntry;
      reader.readMessage(value,proto.api.PostSubmitBatchResponseEntry.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PostSubmitBatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PostSubmitBatchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PostSubmitBatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PostSubmitBatchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PostSubmitBatchResponseEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PostSubmitBatchResponseEntry transactions = 1;
 * @return {!Array<!proto.api.PostSubmitBatchResponseEntry>}
 */
proto.api.PostSubmitBatchResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.api.PostSubmitBatchResponseEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PostSubmitBatchResponseEntry, 1));
};


/**
 * @param {!Array<!proto.api.PostSubmitBatchResponseEntry>} value
 * @return {!proto.api.PostSubmitBatchResponse} returns this
*/
proto.api.PostSubmitBatchResponse.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PostSubmitBatchResponseEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PostSubmitBatchResponseEntry}
 */
proto.api.PostSubmitBatchResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PostSubmitBatchResponseEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PostSubmitBatchResponse} returns this
 */
proto.api.PostSubmitBatchResponse.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOpenOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOpenOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOpenOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOpenOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    openordersaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    project: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOpenOrdersRequest}
 */
proto.api.GetOpenOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOpenOrdersRequest;
  return proto.api.GetOpenOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOpenOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOpenOrdersRequest}
 */
proto.api.GetOpenOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenordersaddress(value);
      break;
    case 5:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOpenOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOpenOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOpenOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOpenOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOpenordersaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOpenOrdersRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOpenOrdersRequest} returns this
 */
proto.api.GetOpenOrdersRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.api.GetOpenOrdersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOpenOrdersRequest} returns this
 */
proto.api.GetOpenOrdersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.api.GetOpenOrdersRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOpenOrdersRequest} returns this
 */
proto.api.GetOpenOrdersRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string openOrdersAddress = 4;
 * @return {string}
 */
proto.api.GetOpenOrdersRequest.prototype.getOpenordersaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOpenOrdersRequest} returns this
 */
proto.api.GetOpenOrdersRequest.prototype.setOpenordersaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Project project = 5;
 * @return {!proto.api.Project}
 */
proto.api.GetOpenOrdersRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetOpenOrdersRequest} returns this
 */
proto.api.GetOpenOrdersRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetOpenOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOpenOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOpenOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOpenOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOpenOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto.api.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOpenOrdersResponse}
 */
proto.api.GetOpenOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOpenOrdersResponse;
  return proto.api.GetOpenOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOpenOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOpenOrdersResponse}
 */
proto.api.GetOpenOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Order;
      reader.readMessage(value,proto.api.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOpenOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOpenOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOpenOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOpenOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Order orders = 1;
 * @return {!Array<!proto.api.Order>}
 */
proto.api.GetOpenOrdersResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.api.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.Order, 1));
};


/**
 * @param {!Array<!proto.api.Order>} value
 * @return {!proto.api.GetOpenOrdersResponse} returns this
*/
proto.api.GetOpenOrdersResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.Order}
 */
proto.api.GetOpenOrdersResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetOpenOrdersResponse} returns this
 */
proto.api.GetOpenOrdersResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderByIDRequest}
 */
proto.api.GetOrderByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderByIDRequest;
  return proto.api.GetOrderByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderByIDRequest}
 */
proto.api.GetOrderByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.api.GetOrderByIDRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderByIDRequest} returns this
 */
proto.api.GetOrderByIDRequest.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market = 2;
 * @return {string}
 */
proto.api.GetOrderByIDRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderByIDRequest} returns this
 */
proto.api.GetOrderByIDRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetOrderByIDRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetOrderByIDRequest} returns this
 */
proto.api.GetOrderByIDRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.api.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderByIDResponse}
 */
proto.api.GetOrderByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderByIDResponse;
  return proto.api.GetOrderByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderByIDResponse}
 */
proto.api.GetOrderByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Order;
      reader.readMessage(value,proto.api.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.api.Order}
 */
proto.api.GetOrderByIDResponse.prototype.getOrder = function() {
  return /** @type{?proto.api.Order} */ (
    jspb.Message.getWrapperField(this, proto.api.Order, 1));
};


/**
 * @param {?proto.api.Order|undefined} value
 * @return {!proto.api.GetOrderByIDResponse} returns this
*/
proto.api.GetOrderByIDResponse.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetOrderByIDResponse} returns this
 */
proto.api.GetOrderByIDResponse.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetOrderByIDResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetUnsettledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetUnsettledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetUnsettledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUnsettledRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetUnsettledRequest}
 */
proto.api.GetUnsettledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetUnsettledRequest;
  return proto.api.GetUnsettledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetUnsettledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetUnsettledRequest}
 */
proto.api.GetUnsettledRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetUnsettledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetUnsettledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetUnsettledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUnsettledRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetUnsettledRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetUnsettledRequest} returns this
 */
proto.api.GetUnsettledRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ownerAddress = 2;
 * @return {string}
 */
proto.api.GetUnsettledRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetUnsettledRequest} returns this
 */
proto.api.GetUnsettledRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.GetUnsettledRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetUnsettledRequest} returns this
 */
proto.api.GetUnsettledRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UnsettledAccountToken.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UnsettledAccountToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UnsettledAccountToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.UnsettledAccountToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UnsettledAccountToken}
 */
proto.api.UnsettledAccountToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UnsettledAccountToken;
  return proto.api.UnsettledAccountToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UnsettledAccountToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UnsettledAccountToken}
 */
proto.api.UnsettledAccountToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UnsettledAccountToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.UnsettledAccountToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.UnsettledAccountToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.UnsettledAccountToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.api.UnsettledAccountToken.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.UnsettledAccountToken} returns this
 */
proto.api.UnsettledAccountToken.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double amount = 2;
 * @return {number}
 */
proto.api.UnsettledAccountToken.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.UnsettledAccountToken} returns this
 */
proto.api.UnsettledAccountToken.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UnsettledAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UnsettledAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UnsettledAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.UnsettledAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basetoken: (f = msg.getBasetoken()) && proto.api.UnsettledAccountToken.toObject(includeInstance, f),
    quotetoken: (f = msg.getQuotetoken()) && proto.api.UnsettledAccountToken.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UnsettledAccount}
 */
proto.api.UnsettledAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UnsettledAccount;
  return proto.api.UnsettledAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UnsettledAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UnsettledAccount}
 */
proto.api.UnsettledAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.api.UnsettledAccountToken;
      reader.readMessage(value,proto.api.UnsettledAccountToken.deserializeBinaryFromReader);
      msg.setBasetoken(value);
      break;
    case 3:
      var value = new proto.api.UnsettledAccountToken;
      reader.readMessage(value,proto.api.UnsettledAccountToken.deserializeBinaryFromReader);
      msg.setQuotetoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UnsettledAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.UnsettledAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.UnsettledAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.UnsettledAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasetoken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.UnsettledAccountToken.serializeBinaryToWriter
    );
  }
  f = message.getQuotetoken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.UnsettledAccountToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.api.UnsettledAccount.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.UnsettledAccount} returns this
 */
proto.api.UnsettledAccount.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UnsettledAccountToken baseToken = 2;
 * @return {?proto.api.UnsettledAccountToken}
 */
proto.api.UnsettledAccount.prototype.getBasetoken = function() {
  return /** @type{?proto.api.UnsettledAccountToken} */ (
    jspb.Message.getWrapperField(this, proto.api.UnsettledAccountToken, 2));
};


/**
 * @param {?proto.api.UnsettledAccountToken|undefined} value
 * @return {!proto.api.UnsettledAccount} returns this
*/
proto.api.UnsettledAccount.prototype.setBasetoken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.UnsettledAccount} returns this
 */
proto.api.UnsettledAccount.prototype.clearBasetoken = function() {
  return this.setBasetoken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.UnsettledAccount.prototype.hasBasetoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UnsettledAccountToken quoteToken = 3;
 * @return {?proto.api.UnsettledAccountToken}
 */
proto.api.UnsettledAccount.prototype.getQuotetoken = function() {
  return /** @type{?proto.api.UnsettledAccountToken} */ (
    jspb.Message.getWrapperField(this, proto.api.UnsettledAccountToken, 3));
};


/**
 * @param {?proto.api.UnsettledAccountToken|undefined} value
 * @return {!proto.api.UnsettledAccount} returns this
*/
proto.api.UnsettledAccount.prototype.setQuotetoken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.UnsettledAccount} returns this
 */
proto.api.UnsettledAccount.prototype.clearQuotetoken = function() {
  return this.setQuotetoken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.UnsettledAccount.prototype.hasQuotetoken = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetUnsettledResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetUnsettledResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetUnsettledResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetUnsettledResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUnsettledResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unsettledList: jspb.Message.toObjectList(msg.getUnsettledList(),
    proto.api.UnsettledAccount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetUnsettledResponse}
 */
proto.api.GetUnsettledResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetUnsettledResponse;
  return proto.api.GetUnsettledResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetUnsettledResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetUnsettledResponse}
 */
proto.api.GetUnsettledResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.api.UnsettledAccount;
      reader.readMessage(value,proto.api.UnsettledAccount.deserializeBinaryFromReader);
      msg.addUnsettled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetUnsettledResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetUnsettledResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetUnsettledResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUnsettledResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnsettledList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.UnsettledAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetUnsettledResponse.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetUnsettledResponse} returns this
 */
proto.api.GetUnsettledResponse.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated UnsettledAccount unsettled = 2;
 * @return {!Array<!proto.api.UnsettledAccount>}
 */
proto.api.GetUnsettledResponse.prototype.getUnsettledList = function() {
  return /** @type{!Array<!proto.api.UnsettledAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.UnsettledAccount, 2));
};


/**
 * @param {!Array<!proto.api.UnsettledAccount>} value
 * @return {!proto.api.GetUnsettledResponse} returns this
*/
proto.api.GetUnsettledResponse.prototype.setUnsettledList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.UnsettledAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.UnsettledAccount}
 */
proto.api.GetUnsettledResponse.prototype.addUnsettled = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.UnsettledAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetUnsettledResponse} returns this
 */
proto.api.GetUnsettledResponse.prototype.clearUnsettledList = function() {
  return this.setUnsettledList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetOrderbooksStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderbooksStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderbooksStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbooksStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    orderbook: (f = msg.getOrderbook()) && proto.api.GetOrderbookResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetOrderbooksStreamResponse}
 */
proto.api.GetOrderbooksStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderbooksStreamResponse;
  return proto.api.GetOrderbooksStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderbooksStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderbooksStreamResponse}
 */
proto.api.GetOrderbooksStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetOrderbookResponse;
      reader.readMessage(value,proto.api.GetOrderbookResponse.deserializeBinaryFromReader);
      msg.setOrderbook(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetOrderbooksStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderbooksStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderbooksStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderbooksStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrderbook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetOrderbookResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetOrderbooksStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderbooksStreamResponse} returns this
 */
proto.api.GetOrderbooksStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetOrderbookResponse orderbook = 2;
 * @return {?proto.api.GetOrderbookResponse}
 */
proto.api.GetOrderbooksStreamResponse.prototype.getOrderbook = function() {
  return /** @type{?proto.api.GetOrderbookResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.GetOrderbookResponse, 2));
};


/**
 * @param {?proto.api.GetOrderbookResponse|undefined} value
 * @return {!proto.api.GetOrderbooksStreamResponse} returns this
*/
proto.api.GetOrderbooksStreamResponse.prototype.setOrderbook = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetOrderbooksStreamResponse} returns this
 */
proto.api.GetOrderbooksStreamResponse.prototype.clearOrderbook = function() {
  return this.setOrderbook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetOrderbooksStreamResponse.prototype.hasOrderbook = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMarketDepthsStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMarketDepthsStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMarketDepthsStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthsStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.api.GetMarketDepthResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMarketDepthsStreamResponse}
 */
proto.api.GetMarketDepthsStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMarketDepthsStreamResponse;
  return proto.api.GetMarketDepthsStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMarketDepthsStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMarketDepthsStreamResponse}
 */
proto.api.GetMarketDepthsStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetMarketDepthResponse;
      reader.readMessage(value,proto.api.GetMarketDepthResponse.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMarketDepthsStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetMarketDepthsStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMarketDepthsStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetMarketDepthsStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetMarketDepthResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetMarketDepthsStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetMarketDepthsStreamResponse} returns this
 */
proto.api.GetMarketDepthsStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetMarketDepthResponse Data = 2;
 * @return {?proto.api.GetMarketDepthResponse}
 */
proto.api.GetMarketDepthsStreamResponse.prototype.getData = function() {
  return /** @type{?proto.api.GetMarketDepthResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.GetMarketDepthResponse, 2));
};


/**
 * @param {?proto.api.GetMarketDepthResponse|undefined} value
 * @return {!proto.api.GetMarketDepthsStreamResponse} returns this
*/
proto.api.GetMarketDepthsStreamResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetMarketDepthsStreamResponse} returns this
 */
proto.api.GetMarketDepthsStreamResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetMarketDepthsStreamResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetTickersStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetTickersStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetTickersStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTickersStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticker: (f = msg.getTicker()) && proto.api.GetTickersResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetTickersStreamResponse}
 */
proto.api.GetTickersStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetTickersStreamResponse;
  return proto.api.GetTickersStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetTickersStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetTickersStreamResponse}
 */
proto.api.GetTickersStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetTickersResponse;
      reader.readMessage(value,proto.api.GetTickersResponse.deserializeBinaryFromReader);
      msg.setTicker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetTickersStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetTickersStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetTickersStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTickersStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTicker();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetTickersResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetTickersStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetTickersStreamResponse} returns this
 */
proto.api.GetTickersStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetTickersResponse ticker = 2;
 * @return {?proto.api.GetTickersResponse}
 */
proto.api.GetTickersStreamResponse.prototype.getTicker = function() {
  return /** @type{?proto.api.GetTickersResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.GetTickersResponse, 2));
};


/**
 * @param {?proto.api.GetTickersResponse|undefined} value
 * @return {!proto.api.GetTickersStreamResponse} returns this
*/
proto.api.GetTickersStreamResponse.prototype.setTicker = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetTickersStreamResponse} returns this
 */
proto.api.GetTickersStreamResponse.prototype.clearTicker = function() {
  return this.setTicker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetTickersStreamResponse.prototype.hasTicker = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetTradesStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetTradesStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetTradesStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTradesStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    trades: (f = msg.getTrades()) && proto.api.GetTradesResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetTradesStreamResponse}
 */
proto.api.GetTradesStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetTradesStreamResponse;
  return proto.api.GetTradesStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetTradesStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetTradesStreamResponse}
 */
proto.api.GetTradesStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetTradesResponse;
      reader.readMessage(value,proto.api.GetTradesResponse.deserializeBinaryFromReader);
      msg.setTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetTradesStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetTradesStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetTradesStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetTradesStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTrades();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetTradesResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetTradesStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetTradesStreamResponse} returns this
 */
proto.api.GetTradesStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetTradesResponse trades = 2;
 * @return {?proto.api.GetTradesResponse}
 */
proto.api.GetTradesStreamResponse.prototype.getTrades = function() {
  return /** @type{?proto.api.GetTradesResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.GetTradesResponse, 2));
};


/**
 * @param {?proto.api.GetTradesResponse|undefined} value
 * @return {!proto.api.GetTradesStreamResponse} returns this
*/
proto.api.GetTradesStreamResponse.prototype.setTrades = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetTradesStreamResponse} returns this
 */
proto.api.GetTradesStreamResponse.prototype.clearTrades = function() {
  return this.setTrades(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetTradesStreamResponse.prototype.hasTrades = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetQuotesRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetQuotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    intoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    slippage: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    projectsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetQuotesRequest}
 */
proto.api.GetQuotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesRequest;
  return proto.api.GetQuotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesRequest}
 */
proto.api.GetQuotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSlippage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetQuotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSlippage();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
};


/**
 * optional string inToken = 1;
 * @return {string}
 */
proto.api.GetQuotesRequest.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string outToken = 2;
 * @return {string}
 */
proto.api.GetQuotesRequest.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double inAmount = 3;
 * @return {number}
 */
proto.api.GetQuotesRequest.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double slippage = 4;
 * @return {number}
 */
proto.api.GetQuotesRequest.prototype.getSlippage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setSlippage = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.api.GetQuotesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated Project projects = 6;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetQuotesRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetQuotesResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetQuotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    intoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intokenaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outtokenaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    quotesList: jspb.Message.toObjectList(msg.getQuotesList(),
    proto.api.ProjectQuote.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetQuotesResponse}
 */
proto.api.GetQuotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesResponse;
  return proto.api.GetQuotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesResponse}
 */
proto.api.GetQuotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntokenaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttokenaddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 6:
      var value = new proto.api.ProjectQuote;
      reader.readMessage(value,proto.api.ProjectQuote.deserializeBinaryFromReader);
      msg.addQuotes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetQuotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntokenaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOuttokenaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getQuotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.ProjectQuote.serializeBinaryToWriter
    );
  }
};


/**
 * optional string inToken = 1;
 * @return {string}
 */
proto.api.GetQuotesResponse.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesResponse} returns this
 */
proto.api.GetQuotesResponse.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string inTokenAddress = 2;
 * @return {string}
 */
proto.api.GetQuotesResponse.prototype.getIntokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesResponse} returns this
 */
proto.api.GetQuotesResponse.prototype.setIntokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string outToken = 3;
 * @return {string}
 */
proto.api.GetQuotesResponse.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesResponse} returns this
 */
proto.api.GetQuotesResponse.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string outTokenAddress = 4;
 * @return {string}
 */
proto.api.GetQuotesResponse.prototype.getOuttokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesResponse} returns this
 */
proto.api.GetQuotesResponse.prototype.setOuttokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double inAmount = 5;
 * @return {number}
 */
proto.api.GetQuotesResponse.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesResponse} returns this
 */
proto.api.GetQuotesResponse.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * repeated ProjectQuote quotes = 6;
 * @return {!Array<!proto.api.ProjectQuote>}
 */
proto.api.GetQuotesResponse.prototype.getQuotesList = function() {
  return /** @type{!Array<!proto.api.ProjectQuote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.ProjectQuote, 6));
};


/**
 * @param {!Array<!proto.api.ProjectQuote>} value
 * @return {!proto.api.GetQuotesResponse} returns this
*/
proto.api.GetQuotesResponse.prototype.setQuotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.ProjectQuote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.ProjectQuote}
 */
proto.api.GetQuotesResponse.prototype.addQuotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.ProjectQuote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesResponse} returns this
 */
proto.api.GetQuotesResponse.prototype.clearQuotesList = function() {
  return this.setQuotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.ProjectQuote.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ProjectQuote.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ProjectQuote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ProjectQuote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ProjectQuote.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, 0),
    routesList: jspb.Message.toObjectList(msg.getRoutesList(),
    proto.api.QuoteRoute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ProjectQuote}
 */
proto.api.ProjectQuote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ProjectQuote;
  return proto.api.ProjectQuote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ProjectQuote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ProjectQuote}
 */
proto.api.ProjectQuote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 2:
      var value = new proto.api.QuoteRoute;
      reader.readMessage(value,proto.api.QuoteRoute.deserializeBinaryFromReader);
      msg.addRoutes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ProjectQuote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.ProjectQuote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.ProjectQuote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ProjectQuote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.QuoteRoute.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {!proto.api.Project}
 */
proto.api.ProjectQuote.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.ProjectQuote} returns this
 */
proto.api.ProjectQuote.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated QuoteRoute routes = 2;
 * @return {!Array<!proto.api.QuoteRoute>}
 */
proto.api.ProjectQuote.prototype.getRoutesList = function() {
  return /** @type{!Array<!proto.api.QuoteRoute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.QuoteRoute, 2));
};


/**
 * @param {!Array<!proto.api.QuoteRoute>} value
 * @return {!proto.api.ProjectQuote} returns this
*/
proto.api.ProjectQuote.prototype.setRoutesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.QuoteRoute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.QuoteRoute}
 */
proto.api.ProjectQuote.prototype.addRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.QuoteRoute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.ProjectQuote} returns this
 */
proto.api.ProjectQuote.prototype.clearRoutesList = function() {
  return this.setRoutesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradeSwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradeSwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradeSwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradeSwapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    slippage: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.TradeSwapRequest}
 */
proto.api.TradeSwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradeSwapRequest;
  return proto.api.TradeSwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradeSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradeSwapRequest}
 */
proto.api.TradeSwapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSlippage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.TradeSwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradeSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradeSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradeSwapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getSlippage();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {!proto.api.Project}
 */
proto.api.TradeSwapRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.TradeSwapRequest} returns this
 */
proto.api.TradeSwapRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string ownerAddress = 2;
 * @return {string}
 */
proto.api.TradeSwapRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TradeSwapRequest} returns this
 */
proto.api.TradeSwapRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string inToken = 3;
 * @return {string}
 */
proto.api.TradeSwapRequest.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TradeSwapRequest} returns this
 */
proto.api.TradeSwapRequest.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string outToken = 4;
 * @return {string}
 */
proto.api.TradeSwapRequest.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TradeSwapRequest} returns this
 */
proto.api.TradeSwapRequest.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double inAmount = 5;
 * @return {number}
 */
proto.api.TradeSwapRequest.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TradeSwapRequest} returns this
 */
proto.api.TradeSwapRequest.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double slippage = 6;
 * @return {number}
 */
proto.api.TradeSwapRequest.prototype.getSlippage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TradeSwapRequest} returns this
 */
proto.api.TradeSwapRequest.prototype.setSlippage = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.RouteTradeSwapRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.RouteTradeSwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.RouteTradeSwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.RouteTradeSwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.RouteTradeSwapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owneraddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.api.RouteStep.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.RouteTradeSwapRequest}
 */
proto.api.RouteTradeSwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.RouteTradeSwapRequest;
  return proto.api.RouteTradeSwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.RouteTradeSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.RouteTradeSwapRequest}
 */
proto.api.RouteTradeSwapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraddress(value);
      break;
    case 3:
      var value = new proto.api.RouteStep;
      reader.readMessage(value,proto.api.RouteStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.RouteTradeSwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.RouteTradeSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.RouteTradeSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.RouteTradeSwapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOwneraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.RouteStep.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {!proto.api.Project}
 */
proto.api.RouteTradeSwapRequest.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.RouteTradeSwapRequest} returns this
 */
proto.api.RouteTradeSwapRequest.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string ownerAddress = 2;
 * @return {string}
 */
proto.api.RouteTradeSwapRequest.prototype.getOwneraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.RouteTradeSwapRequest} returns this
 */
proto.api.RouteTradeSwapRequest.prototype.setOwneraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RouteStep steps = 3;
 * @return {!Array<!proto.api.RouteStep>}
 */
proto.api.RouteTradeSwapRequest.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.api.RouteStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.RouteStep, 3));
};


/**
 * @param {!Array<!proto.api.RouteStep>} value
 * @return {!proto.api.RouteTradeSwapRequest} returns this
*/
proto.api.RouteTradeSwapRequest.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.RouteStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.RouteStep}
 */
proto.api.RouteTradeSwapRequest.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.RouteStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.RouteTradeSwapRequest} returns this
 */
proto.api.RouteTradeSwapRequest.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.RouteStep.prototype.toObject = function(opt_includeInstance) {
  return proto.api.RouteStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.RouteStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.RouteStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    intoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    outtoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    outamountmin: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    project: (f = msg.getProject()) && proto.api.StepProject.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.RouteStep}
 */
proto.api.RouteStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.RouteStep;
  return proto.api.RouteStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.RouteStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.RouteStep}
 */
proto.api.RouteStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamountmin(value);
      break;
    case 6:
      var value = new proto.api.StepProject;
      reader.readMessage(value,proto.api.StepProject.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.RouteStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.RouteStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.RouteStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.RouteStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOutamount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOutamountmin();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.StepProject.serializeBinaryToWriter
    );
  }
};


/**
 * optional string inToken = 1;
 * @return {string}
 */
proto.api.RouteStep.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.RouteStep} returns this
 */
proto.api.RouteStep.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double inAmount = 2;
 * @return {number}
 */
proto.api.RouteStep.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.RouteStep} returns this
 */
proto.api.RouteStep.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string outToken = 3;
 * @return {string}
 */
proto.api.RouteStep.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.RouteStep} returns this
 */
proto.api.RouteStep.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double outAmount = 4;
 * @return {number}
 */
proto.api.RouteStep.prototype.getOutamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.RouteStep} returns this
 */
proto.api.RouteStep.prototype.setOutamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double outAmountMin = 5;
 * @return {number}
 */
proto.api.RouteStep.prototype.getOutamountmin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.RouteStep} returns this
 */
proto.api.RouteStep.prototype.setOutamountmin = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional StepProject project = 6;
 * @return {?proto.api.StepProject}
 */
proto.api.RouteStep.prototype.getProject = function() {
  return /** @type{?proto.api.StepProject} */ (
    jspb.Message.getWrapperField(this, proto.api.StepProject, 6));
};


/**
 * @param {?proto.api.StepProject|undefined} value
 * @return {!proto.api.RouteStep} returns this
*/
proto.api.RouteStep.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.RouteStep} returns this
 */
proto.api.RouteStep.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.RouteStep.prototype.hasProject = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.TradeSwapResponse.repeatedFields_ = [2,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradeSwapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradeSwapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradeSwapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradeSwapResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.api.TransactionMessage.toObject, includeInstance),
    outamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    outamountmin: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    priceimpact: (f = msg.getPriceimpact()) && common_pb.PriceImpactPercent.toObject(includeInstance, f),
    feesList: jspb.Message.toObjectList(msg.getFeesList(),
    common_pb.Fee.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.TradeSwapResponse}
 */
proto.api.TradeSwapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradeSwapResponse;
  return proto.api.TradeSwapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradeSwapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradeSwapResponse}
 */
proto.api.TradeSwapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 2:
      var value = new proto.api.TransactionMessage;
      reader.readMessage(value,proto.api.TransactionMessage.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamountmin(value);
      break;
    case 5:
      var value = new common_pb.PriceImpactPercent;
      reader.readMessage(value,common_pb.PriceImpactPercent.deserializeBinaryFromReader);
      msg.setPriceimpact(value);
      break;
    case 6:
      var value = new common_pb.Fee;
      reader.readMessage(value,common_pb.Fee.deserializeBinaryFromReader);
      msg.addFees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.TradeSwapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradeSwapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradeSwapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradeSwapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.TransactionMessage.serializeBinaryToWriter
    );
  }
  f = message.getOutamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getOutamountmin();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPriceimpact();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.PriceImpactPercent.serializeBinaryToWriter
    );
  }
  f = message.getFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      common_pb.Fee.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {!proto.api.Project}
 */
proto.api.TradeSwapResponse.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.TradeSwapResponse} returns this
 */
proto.api.TradeSwapResponse.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated TransactionMessage transactions = 2;
 * @return {!Array<!proto.api.TransactionMessage>}
 */
proto.api.TradeSwapResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.api.TransactionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.TransactionMessage, 2));
};


/**
 * @param {!Array<!proto.api.TransactionMessage>} value
 * @return {!proto.api.TradeSwapResponse} returns this
*/
proto.api.TradeSwapResponse.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.TransactionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.TransactionMessage}
 */
proto.api.TradeSwapResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.TransactionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.TradeSwapResponse} returns this
 */
proto.api.TradeSwapResponse.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional double outAmount = 3;
 * @return {number}
 */
proto.api.TradeSwapResponse.prototype.getOutamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TradeSwapResponse} returns this
 */
proto.api.TradeSwapResponse.prototype.setOutamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double outAmountMin = 4;
 * @return {number}
 */
proto.api.TradeSwapResponse.prototype.getOutamountmin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TradeSwapResponse} returns this
 */
proto.api.TradeSwapResponse.prototype.setOutamountmin = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional common.PriceImpactPercent priceImpact = 5;
 * @return {?proto.common.PriceImpactPercent}
 */
proto.api.TradeSwapResponse.prototype.getPriceimpact = function() {
  return /** @type{?proto.common.PriceImpactPercent} */ (
    jspb.Message.getWrapperField(this, common_pb.PriceImpactPercent, 5));
};


/**
 * @param {?proto.common.PriceImpactPercent|undefined} value
 * @return {!proto.api.TradeSwapResponse} returns this
*/
proto.api.TradeSwapResponse.prototype.setPriceimpact = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.TradeSwapResponse} returns this
 */
proto.api.TradeSwapResponse.prototype.clearPriceimpact = function() {
  return this.setPriceimpact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.TradeSwapResponse.prototype.hasPriceimpact = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated common.Fee fees = 6;
 * @return {!Array<!proto.common.Fee>}
 */
proto.api.TradeSwapResponse.prototype.getFeesList = function() {
  return /** @type{!Array<!proto.common.Fee>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Fee, 6));
};


/**
 * @param {!Array<!proto.common.Fee>} value
 * @return {!proto.api.TradeSwapResponse} returns this
*/
proto.api.TradeSwapResponse.prototype.setFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.common.Fee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.Fee}
 */
proto.api.TradeSwapResponse.prototype.addFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.common.Fee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.TradeSwapResponse} returns this
 */
proto.api.TradeSwapResponse.prototype.clearFeesList = function() {
  return this.setFeesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.QuoteRoute.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.QuoteRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.api.QuoteRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.QuoteRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.QuoteRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    outamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    outamountmin: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.api.QuoteStep.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.QuoteRoute}
 */
proto.api.QuoteRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.QuoteRoute;
  return proto.api.QuoteRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.QuoteRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.QuoteRoute}
 */
proto.api.QuoteRoute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamountmin(value);
      break;
    case 4:
      var value = new proto.api.QuoteStep;
      reader.readMessage(value,proto.api.QuoteStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.QuoteRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.QuoteRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.QuoteRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.QuoteRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getOutamount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOutamountmin();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.QuoteStep.serializeBinaryToWriter
    );
  }
};


/**
 * optional double inAmount = 1;
 * @return {number}
 */
proto.api.QuoteRoute.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteRoute} returns this
 */
proto.api.QuoteRoute.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double outAmount = 2;
 * @return {number}
 */
proto.api.QuoteRoute.prototype.getOutamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteRoute} returns this
 */
proto.api.QuoteRoute.prototype.setOutamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double outAmountMin = 3;
 * @return {number}
 */
proto.api.QuoteRoute.prototype.getOutamountmin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteRoute} returns this
 */
proto.api.QuoteRoute.prototype.setOutamountmin = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated QuoteStep steps = 4;
 * @return {!Array<!proto.api.QuoteStep>}
 */
proto.api.QuoteRoute.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.api.QuoteStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.QuoteStep, 4));
};


/**
 * @param {!Array<!proto.api.QuoteStep>} value
 * @return {!proto.api.QuoteRoute} returns this
*/
proto.api.QuoteRoute.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.QuoteStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.QuoteStep}
 */
proto.api.QuoteRoute.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.QuoteStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.QuoteRoute} returns this
 */
proto.api.QuoteRoute.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.QuoteStep.prototype.toObject = function(opt_includeInstance) {
  return proto.api.QuoteStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.QuoteStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.QuoteStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.api.StepProject.toObject(includeInstance, f),
    intoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intokenaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    outtokenaddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    outamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    slippage: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    priceimpactpercent: (f = msg.getPriceimpactpercent()) && common_pb.PriceImpactPercent.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && common_pb.Fee.toObject(includeInstance, f),
    outamountmin: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    pooladdress: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.QuoteStep}
 */
proto.api.QuoteStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.QuoteStep;
  return proto.api.QuoteStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.QuoteStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.QuoteStep}
 */
proto.api.QuoteStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.StepProject;
      reader.readMessage(value,proto.api.StepProject.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntokenaddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttokenaddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSlippage(value);
      break;
    case 9:
      var value = new common_pb.PriceImpactPercent;
      reader.readMessage(value,common_pb.PriceImpactPercent.deserializeBinaryFromReader);
      msg.setPriceimpactpercent(value);
      break;
    case 10:
      var value = new common_pb.Fee;
      reader.readMessage(value,common_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamountmin(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPooladdress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.QuoteStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.QuoteStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.QuoteStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.QuoteStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.StepProject.serializeBinaryToWriter
    );
  }
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntokenaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOuttokenaddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getOutamount();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getSlippage();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getPriceimpactpercent();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      common_pb.PriceImpactPercent.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      common_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getOutamountmin();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getPooladdress();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional StepProject project = 1;
 * @return {?proto.api.StepProject}
 */
proto.api.QuoteStep.prototype.getProject = function() {
  return /** @type{?proto.api.StepProject} */ (
    jspb.Message.getWrapperField(this, proto.api.StepProject, 1));
};


/**
 * @param {?proto.api.StepProject|undefined} value
 * @return {!proto.api.QuoteStep} returns this
*/
proto.api.QuoteStep.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.QuoteStep.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inToken = 2;
 * @return {string}
 */
proto.api.QuoteStep.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string inTokenAddress = 3;
 * @return {string}
 */
proto.api.QuoteStep.prototype.getIntokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setIntokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string outToken = 4;
 * @return {string}
 */
proto.api.QuoteStep.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string outTokenAddress = 5;
 * @return {string}
 */
proto.api.QuoteStep.prototype.getOuttokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setOuttokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double inAmount = 6;
 * @return {number}
 */
proto.api.QuoteStep.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double outAmount = 7;
 * @return {number}
 */
proto.api.QuoteStep.prototype.getOutamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setOutamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double slippage = 8;
 * @return {number}
 */
proto.api.QuoteStep.prototype.getSlippage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setSlippage = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional common.PriceImpactPercent priceImpactPercent = 9;
 * @return {?proto.common.PriceImpactPercent}
 */
proto.api.QuoteStep.prototype.getPriceimpactpercent = function() {
  return /** @type{?proto.common.PriceImpactPercent} */ (
    jspb.Message.getWrapperField(this, common_pb.PriceImpactPercent, 9));
};


/**
 * @param {?proto.common.PriceImpactPercent|undefined} value
 * @return {!proto.api.QuoteStep} returns this
*/
proto.api.QuoteStep.prototype.setPriceimpactpercent = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.clearPriceimpactpercent = function() {
  return this.setPriceimpactpercent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.QuoteStep.prototype.hasPriceimpactpercent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional common.Fee fee = 10;
 * @return {?proto.common.Fee}
 */
proto.api.QuoteStep.prototype.getFee = function() {
  return /** @type{?proto.common.Fee} */ (
    jspb.Message.getWrapperField(this, common_pb.Fee, 10));
};


/**
 * @param {?proto.common.Fee|undefined} value
 * @return {!proto.api.QuoteStep} returns this
*/
proto.api.QuoteStep.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.QuoteStep.prototype.hasFee = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double outAmountMin = 11;
 * @return {number}
 */
proto.api.QuoteStep.prototype.getOutamountmin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setOutamountmin = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string poolAddress = 12;
 * @return {string}
 */
proto.api.QuoteStep.prototype.getPooladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.QuoteStep} returns this
 */
proto.api.QuoteStep.prototype.setPooladdress = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.StepProject.prototype.toObject = function(opt_includeInstance) {
  return proto.api.StepProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.StepProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.StepProject.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.StepProject}
 */
proto.api.StepProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.StepProject;
  return proto.api.StepProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.StepProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.StepProject}
 */
proto.api.StepProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.StepProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.StepProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.StepProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.StepProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.api.StepProject.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.StepProject} returns this
 */
proto.api.StepProject.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.api.StepProject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.StepProject} returns this
 */
proto.api.StepProject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetRecentBlockHashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetRecentBlockHashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetRecentBlockHashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetRecentBlockHashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetRecentBlockHashRequest}
 */
proto.api.GetRecentBlockHashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetRecentBlockHashRequest;
  return proto.api.GetRecentBlockHashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetRecentBlockHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetRecentBlockHashRequest}
 */
proto.api.GetRecentBlockHashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetRecentBlockHashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetRecentBlockHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetRecentBlockHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetRecentBlockHashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetRecentBlockHashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetRecentBlockHashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetRecentBlockHashResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetRecentBlockHashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetRecentBlockHashResponse}
 */
proto.api.GetRecentBlockHashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetRecentBlockHashResponse;
  return proto.api.GetRecentBlockHashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetRecentBlockHashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetRecentBlockHashResponse}
 */
proto.api.GetRecentBlockHashResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetRecentBlockHashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetRecentBlockHashResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetRecentBlockHashResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetRecentBlockHashResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string blockHash = 1;
 * @return {string}
 */
proto.api.GetRecentBlockHashResponse.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetRecentBlockHashResponse} returns this
 */
proto.api.GetRecentBlockHashResponse.prototype.setBlockhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Block}
 */
proto.api.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Block;
  return proto.api.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Block}
 */
proto.api.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlot(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 slot = 1;
 * @return {number}
 */
proto.api.Block.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.Block} returns this
 */
proto.api.Block.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hash = 2;
 * @return {string}
 */
proto.api.Block.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.Block} returns this
 */
proto.api.Block.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 time = 3;
 * @return {number}
 */
proto.api.Block.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.Block} returns this
 */
proto.api.Block.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 height = 4;
 * @return {number}
 */
proto.api.Block.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.Block} returns this
 */
proto.api.Block.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetBlockStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetBlockStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetBlockStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetBlockStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetBlockStreamRequest}
 */
proto.api.GetBlockStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetBlockStreamRequest;
  return proto.api.GetBlockStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetBlockStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetBlockStreamRequest}
 */
proto.api.GetBlockStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetBlockStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetBlockStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetBlockStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetBlockStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetBlockStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetBlockStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetBlockStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetBlockStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto.api.Block.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetBlockStreamResponse}
 */
proto.api.GetBlockStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetBlockStreamResponse;
  return proto.api.GetBlockStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetBlockStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetBlockStreamResponse}
 */
proto.api.GetBlockStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Block;
      reader.readMessage(value,proto.api.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetBlockStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetBlockStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetBlockStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetBlockStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.Block.serializeBinaryToWriter
    );
  }
};


/**
 * optional Block block = 1;
 * @return {?proto.api.Block}
 */
proto.api.GetBlockStreamResponse.prototype.getBlock = function() {
  return /** @type{?proto.api.Block} */ (
    jspb.Message.getWrapperField(this, proto.api.Block, 1));
};


/**
 * @param {?proto.api.Block|undefined} value
 * @return {!proto.api.GetBlockStreamResponse} returns this
*/
proto.api.GetBlockStreamResponse.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetBlockStreamResponse} returns this
 */
proto.api.GetBlockStreamResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetBlockStreamResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetPoolsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPoolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPoolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPoolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPoolsRequest}
 */
proto.api.GetPoolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPoolsRequest;
  return proto.api.GetPoolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPoolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPoolsRequest}
 */
proto.api.GetPoolsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPoolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPoolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPoolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetPoolsRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetPoolsRequest} returns this
 */
proto.api.GetPoolsRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetPoolsRequest} returns this
 */
proto.api.GetPoolsRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPoolsRequest} returns this
 */
proto.api.GetPoolsRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetPoolsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPoolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPoolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPoolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.api.ProjectPools.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPoolsResponse}
 */
proto.api.GetPoolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPoolsResponse;
  return proto.api.GetPoolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPoolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPoolsResponse}
 */
proto.api.GetPoolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.ProjectPools;
      reader.readMessage(value,proto.api.ProjectPools.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPoolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPoolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPoolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.ProjectPools.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProjectPools projects = 1;
 * @return {!Array<!proto.api.ProjectPools>}
 */
proto.api.GetPoolsResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.api.ProjectPools>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.ProjectPools, 1));
};


/**
 * @param {!Array<!proto.api.ProjectPools>} value
 * @return {!proto.api.GetPoolsResponse} returns this
*/
proto.api.GetPoolsResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.ProjectPools=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.ProjectPools}
 */
proto.api.GetPoolsResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.ProjectPools, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPoolsResponse} returns this
 */
proto.api.GetPoolsResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.ProjectPools.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ProjectPools.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ProjectPools.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ProjectPools} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ProjectPools.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, 0),
    poolsList: jspb.Message.toObjectList(msg.getPoolsList(),
    proto.api.ProjectPool.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ProjectPools}
 */
proto.api.ProjectPools.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ProjectPools;
  return proto.api.ProjectPools.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ProjectPools} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ProjectPools}
 */
proto.api.ProjectPools.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 2:
      var value = new proto.api.ProjectPool;
      reader.readMessage(value,proto.api.ProjectPool.deserializeBinaryFromReader);
      msg.addPools(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ProjectPools.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.ProjectPools.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.ProjectPools} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ProjectPools.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.ProjectPool.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {!proto.api.Project}
 */
proto.api.ProjectPools.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.ProjectPools} returns this
 */
proto.api.ProjectPools.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated ProjectPool pools = 2;
 * @return {!Array<!proto.api.ProjectPool>}
 */
proto.api.ProjectPools.prototype.getPoolsList = function() {
  return /** @type{!Array<!proto.api.ProjectPool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.ProjectPool, 2));
};


/**
 * @param {!Array<!proto.api.ProjectPool>} value
 * @return {!proto.api.ProjectPools} returns this
*/
proto.api.ProjectPools.prototype.setPoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.ProjectPool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.ProjectPool}
 */
proto.api.ProjectPools.prototype.addPools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.ProjectPool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.ProjectPools} returns this
 */
proto.api.ProjectPools.prototype.clearPoolsList = function() {
  return this.setPoolsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ProjectPool.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ProjectPool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ProjectPool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ProjectPool.toObject = function(includeInstance, msg) {
  var f, obj = {
    pool: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pooladdress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token1reserves: jspb.Message.getFieldWithDefault(msg, 3, 0),
    token1mintaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    token1mintsymbol: jspb.Message.getFieldWithDefault(msg, 5, ""),
    token2reserves: jspb.Message.getFieldWithDefault(msg, 6, 0),
    token2mintaddress: jspb.Message.getFieldWithDefault(msg, 7, ""),
    token2mintsymbol: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ProjectPool}
 */
proto.api.ProjectPool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ProjectPool;
  return proto.api.ProjectPool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ProjectPool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ProjectPool}
 */
proto.api.ProjectPool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPool(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPooladdress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToken1reserves(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken1mintaddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken1mintsymbol(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToken2reserves(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken2mintaddress(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken2mintsymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ProjectPool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.ProjectPool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.ProjectPool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ProjectPool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPool();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPooladdress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken1reserves();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getToken1mintaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToken1mintsymbol();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getToken2reserves();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getToken2mintaddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getToken2mintsymbol();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string pool = 1;
 * @return {string}
 */
proto.api.ProjectPool.prototype.getPool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setPool = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string poolAddress = 2;
 * @return {string}
 */
proto.api.ProjectPool.prototype.getPooladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setPooladdress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 token1Reserves = 3;
 * @return {number}
 */
proto.api.ProjectPool.prototype.getToken1reserves = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setToken1reserves = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string token1MintAddress = 4;
 * @return {string}
 */
proto.api.ProjectPool.prototype.getToken1mintaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setToken1mintaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token1MintSymbol = 5;
 * @return {string}
 */
proto.api.ProjectPool.prototype.getToken1mintsymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setToken1mintsymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 token2Reserves = 6;
 * @return {number}
 */
proto.api.ProjectPool.prototype.getToken2reserves = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setToken2reserves = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string token2MintAddress = 7;
 * @return {string}
 */
proto.api.ProjectPool.prototype.getToken2mintaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setToken2mintaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string token2MintSymbol = 8;
 * @return {string}
 */
proto.api.ProjectPool.prototype.getToken2mintsymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.ProjectPool} returns this
 */
proto.api.ProjectPool.prototype.setToken2mintsymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetQuotesStreamRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetQuotesStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    tokenpairsList: jspb.Message.toObjectList(msg.getTokenpairsList(),
    proto.api.TokenPair.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetQuotesStreamRequest}
 */
proto.api.GetQuotesStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesStreamRequest;
  return proto.api.GetQuotesStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesStreamRequest}
 */
proto.api.GetQuotesStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    case 2:
      var value = new proto.api.TokenPair;
      reader.readMessage(value,proto.api.TokenPair.deserializeBinaryFromReader);
      msg.addTokenpairs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetQuotesStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getTokenpairsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.TokenPair.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetQuotesStreamRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * repeated TokenPair tokenPairs = 2;
 * @return {!Array<!proto.api.TokenPair>}
 */
proto.api.GetQuotesStreamRequest.prototype.getTokenpairsList = function() {
  return /** @type{!Array<!proto.api.TokenPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.TokenPair, 2));
};


/**
 * @param {!Array<!proto.api.TokenPair>} value
 * @return {!proto.api.GetQuotesStreamRequest} returns this
*/
proto.api.GetQuotesStreamRequest.prototype.setTokenpairsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.TokenPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.TokenPair}
 */
proto.api.GetQuotesStreamRequest.prototype.addTokenpairs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.TokenPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.clearTokenpairsList = function() {
  return this.setTokenpairsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetQuotesStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quote: (f = msg.getQuote()) && proto.api.GetQuotesStreamUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetQuotesStreamResponse}
 */
proto.api.GetQuotesStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesStreamResponse;
  return proto.api.GetQuotesStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesStreamResponse}
 */
proto.api.GetQuotesStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetQuotesStreamUpdate;
      reader.readMessage(value,proto.api.GetQuotesStreamUpdate.deserializeBinaryFromReader);
      msg.setQuote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetQuotesStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getQuote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetQuotesStreamUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetQuotesStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesStreamResponse} returns this
 */
proto.api.GetQuotesStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetQuotesStreamUpdate quote = 2;
 * @return {?proto.api.GetQuotesStreamUpdate}
 */
proto.api.GetQuotesStreamResponse.prototype.getQuote = function() {
  return /** @type{?proto.api.GetQuotesStreamUpdate} */ (
    jspb.Message.getWrapperField(this, proto.api.GetQuotesStreamUpdate, 2));
};


/**
 * @param {?proto.api.GetQuotesStreamUpdate|undefined} value
 * @return {!proto.api.GetQuotesStreamResponse} returns this
*/
proto.api.GetQuotesStreamResponse.prototype.setQuote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetQuotesStreamResponse} returns this
 */
proto.api.GetQuotesStreamResponse.prototype.clearQuote = function() {
  return this.setQuote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetQuotesStreamResponse.prototype.hasQuote = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetQuotesStreamUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesStreamUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesStreamUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    intoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intokenaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outtokenaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    outamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    project: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetQuotesStreamUpdate}
 */
proto.api.GetQuotesStreamUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesStreamUpdate;
  return proto.api.GetQuotesStreamUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesStreamUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesStreamUpdate}
 */
proto.api.GetQuotesStreamUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntokenaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttokenaddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamount(value);
      break;
    case 7:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetQuotesStreamUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesStreamUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesStreamUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntokenaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOuttokenaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getOutamount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string inToken = 1;
 * @return {string}
 */
proto.api.GetQuotesStreamUpdate.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string inTokenAddress = 2;
 * @return {string}
 */
proto.api.GetQuotesStreamUpdate.prototype.getIntokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setIntokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string outToken = 3;
 * @return {string}
 */
proto.api.GetQuotesStreamUpdate.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string outTokenAddress = 4;
 * @return {string}
 */
proto.api.GetQuotesStreamUpdate.prototype.getOuttokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setOuttokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double inAmount = 5;
 * @return {number}
 */
proto.api.GetQuotesStreamUpdate.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double outAmount = 6;
 * @return {number}
 */
proto.api.GetQuotesStreamUpdate.prototype.getOutamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setOutamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional Project project = 7;
 * @return {!proto.api.Project}
 */
proto.api.GetQuotesStreamUpdate.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetQuotesStreamUpdate} returns this
 */
proto.api.GetQuotesStreamUpdate.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetSwapsStreamRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetSwapsStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetSwapsStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetSwapsStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    poolsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    includefailed: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetSwapsStreamRequest}
 */
proto.api.GetSwapsStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetSwapsStreamRequest;
  return proto.api.GetSwapsStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetSwapsStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetSwapsStreamRequest}
 */
proto.api.GetSwapsStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPools(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludefailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetSwapsStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetSwapsStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetSwapsStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getPoolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getIncludefailed();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetSwapsStreamRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * repeated string pools = 2;
 * @return {!Array<string>}
 */
proto.api.GetSwapsStreamRequest.prototype.getPoolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.setPoolsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.addPools = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.clearPoolsList = function() {
  return this.setPoolsList([]);
};


/**
 * optional bool includeFailed = 3;
 * @return {boolean}
 */
proto.api.GetSwapsStreamRequest.prototype.getIncludefailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.GetSwapsStreamRequest} returns this
 */
proto.api.GetSwapsStreamRequest.prototype.setIncludefailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetSwapsStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetSwapsStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetSwapsStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swap: (f = msg.getSwap()) && proto.api.GetSwapsStreamUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetSwapsStreamResponse}
 */
proto.api.GetSwapsStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetSwapsStreamResponse;
  return proto.api.GetSwapsStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetSwapsStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetSwapsStreamResponse}
 */
proto.api.GetSwapsStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetSwapsStreamUpdate;
      reader.readMessage(value,proto.api.GetSwapsStreamUpdate.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetSwapsStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetSwapsStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetSwapsStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetSwapsStreamUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetSwapsStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetSwapsStreamResponse} returns this
 */
proto.api.GetSwapsStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetSwapsStreamUpdate swap = 2;
 * @return {?proto.api.GetSwapsStreamUpdate}
 */
proto.api.GetSwapsStreamResponse.prototype.getSwap = function() {
  return /** @type{?proto.api.GetSwapsStreamUpdate} */ (
    jspb.Message.getWrapperField(this, proto.api.GetSwapsStreamUpdate, 2));
};


/**
 * @param {?proto.api.GetSwapsStreamUpdate|undefined} value
 * @return {!proto.api.GetSwapsStreamResponse} returns this
*/
proto.api.GetSwapsStreamResponse.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetSwapsStreamResponse} returns this
 */
proto.api.GetSwapsStreamResponse.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetSwapsStreamResponse.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetSwapsStreamUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetSwapsStreamUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetSwapsStreamUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    project: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pooladdress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intoken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    intokenaddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    outtokenaddress: jspb.Message.getFieldWithDefault(msg, 7, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    outamountmin: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    sourceaccount: jspb.Message.getFieldWithDefault(msg, 10, ""),
    destinationaccount: jspb.Message.getFieldWithDefault(msg, 11, ""),
    owneraccount: jspb.Message.getFieldWithDefault(msg, 12, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetSwapsStreamUpdate}
 */
proto.api.GetSwapsStreamUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetSwapsStreamUpdate;
  return proto.api.GetSwapsStreamUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetSwapsStreamUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetSwapsStreamUpdate}
 */
proto.api.GetSwapsStreamUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPooladdress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntokenaddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttokenaddress(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutamountmin(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceaccount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationaccount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraccount(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetSwapsStreamUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetSwapsStreamUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetSwapsStreamUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPooladdress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIntokenaddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOuttokenaddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getOutamountmin();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getSourceaccount();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDestinationaccount();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOwneraccount();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.api.GetSwapsStreamUpdate.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Project project = 2;
 * @return {!proto.api.Project}
 */
proto.api.GetSwapsStreamUpdate.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string poolAddress = 3;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getPooladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setPooladdress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string inToken = 4;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string inTokenAddress = 5;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getIntokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setIntokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string outToken = 6;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string outTokenAddress = 7;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getOuttokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setOuttokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double inAmount = 8;
 * @return {number}
 */
proto.api.GetSwapsStreamUpdate.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double outAmountMin = 9;
 * @return {number}
 */
proto.api.GetSwapsStreamUpdate.prototype.getOutamountmin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setOutamountmin = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string sourceAccount = 10;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getSourceaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setSourceaccount = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string destinationAccount = 11;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getDestinationaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setDestinationaccount = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string ownerAccount = 12;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getOwneraccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setOwneraccount = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string signature = 13;
 * @return {string}
 */
proto.api.GetSwapsStreamUpdate.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetSwapsStreamUpdate} returns this
 */
proto.api.GetSwapsStreamUpdate.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TokenPair.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TokenPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TokenPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    intoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.TokenPair}
 */
proto.api.TokenPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TokenPair;
  return proto.api.TokenPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TokenPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TokenPair}
 */
proto.api.TokenPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.TokenPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TokenPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TokenPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string inToken = 1;
 * @return {string}
 */
proto.api.TokenPair.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenPair} returns this
 */
proto.api.TokenPair.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string outToken = 2;
 * @return {string}
 */
proto.api.TokenPair.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenPair} returns this
 */
proto.api.TokenPair.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double inAmount = 3;
 * @return {number}
 */
proto.api.TokenPair.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPair} returns this
 */
proto.api.TokenPair.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetPriceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPriceRequest}
 */
proto.api.GetPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPriceRequest;
  return proto.api.GetPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPriceRequest}
 */
proto.api.GetPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tokens = 1;
 * @return {!Array<string>}
 */
proto.api.GetPriceRequest.prototype.getTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.GetPriceRequest} returns this
 */
proto.api.GetPriceRequest.prototype.setTokensList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.GetPriceRequest} returns this
 */
proto.api.GetPriceRequest.prototype.addTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPriceRequest} returns this
 */
proto.api.GetPriceRequest.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetPriceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenpricesList: jspb.Message.toObjectList(msg.getTokenpricesList(),
    proto.api.TokenPrice.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPriceResponse}
 */
proto.api.GetPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPriceResponse;
  return proto.api.GetPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPriceResponse}
 */
proto.api.GetPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.TokenPrice;
      reader.readMessage(value,proto.api.TokenPrice.deserializeBinaryFromReader);
      msg.addTokenprices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenpricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.TokenPrice.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenPrice tokenPrices = 1;
 * @return {!Array<!proto.api.TokenPrice>}
 */
proto.api.GetPriceResponse.prototype.getTokenpricesList = function() {
  return /** @type{!Array<!proto.api.TokenPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.TokenPrice, 1));
};


/**
 * @param {!Array<!proto.api.TokenPrice>} value
 * @return {!proto.api.GetPriceResponse} returns this
*/
proto.api.GetPriceResponse.prototype.setTokenpricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.TokenPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.TokenPrice}
 */
proto.api.GetPriceResponse.prototype.addTokenprices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.TokenPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPriceResponse} returns this
 */
proto.api.GetPriceResponse.prototype.clearTokenpricesList = function() {
  return this.setTokenpricesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TokenPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TokenPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TokenPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tokenaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0),
    buy: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    buysize: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    sell: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    sellsize: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.TokenPrice}
 */
proto.api.TokenPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TokenPrice;
  return proto.api.TokenPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TokenPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TokenPrice}
 */
proto.api.TokenPrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenaddress(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuy(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuysize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSell(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSellsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.TokenPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TokenPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TokenPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBuy();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getBuysize();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getSell();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSellsize();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.api.TokenPrice.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tokenAddress = 2;
 * @return {string}
 */
proto.api.TokenPrice.prototype.getTokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setTokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.TokenPrice.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double buy = 4;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getBuy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setBuy = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double buySize = 5;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getBuysize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setBuysize = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double sell = 6;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getSell = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setSell = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double sellSize = 7;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getSellsize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setSellsize = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPoolReservesStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPoolReservesStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPoolReservesStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolReservesStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reserves: (f = msg.getReserves()) && proto.api.PoolReserves.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPoolReservesStreamResponse}
 */
proto.api.GetPoolReservesStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPoolReservesStreamResponse;
  return proto.api.GetPoolReservesStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPoolReservesStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPoolReservesStreamResponse}
 */
proto.api.GetPoolReservesStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.PoolReserves;
      reader.readMessage(value,proto.api.PoolReserves.deserializeBinaryFromReader);
      msg.setReserves(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPoolReservesStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPoolReservesStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPoolReservesStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolReservesStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReserves();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.PoolReserves.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetPoolReservesStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetPoolReservesStreamResponse} returns this
 */
proto.api.GetPoolReservesStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PoolReserves reserves = 2;
 * @return {?proto.api.PoolReserves}
 */
proto.api.GetPoolReservesStreamResponse.prototype.getReserves = function() {
  return /** @type{?proto.api.PoolReserves} */ (
    jspb.Message.getWrapperField(this, proto.api.PoolReserves, 2));
};


/**
 * @param {?proto.api.PoolReserves|undefined} value
 * @return {!proto.api.GetPoolReservesStreamResponse} returns this
*/
proto.api.GetPoolReservesStreamResponse.prototype.setReserves = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetPoolReservesStreamResponse} returns this
 */
proto.api.GetPoolReservesStreamResponse.prototype.clearReserves = function() {
  return this.setReserves(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetPoolReservesStreamResponse.prototype.hasReserves = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PoolReserves.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PoolReserves.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PoolReserves} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PoolReserves.toObject = function(includeInstance, msg) {
  var f, obj = {
    token1reserves: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token1address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token2reserves: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token2address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pooladdress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    project: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PoolReserves}
 */
proto.api.PoolReserves.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PoolReserves;
  return proto.api.PoolReserves.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PoolReserves} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PoolReserves}
 */
proto.api.PoolReserves.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken1reserves(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken1address(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken2reserves(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken2address(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPooladdress(value);
      break;
    case 6:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PoolReserves.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PoolReserves.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PoolReserves} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PoolReserves.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken1reserves();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken1address();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken2reserves();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken2address();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPooladdress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string token1Reserves = 1;
 * @return {string}
 */
proto.api.PoolReserves.prototype.getToken1reserves = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PoolReserves} returns this
 */
proto.api.PoolReserves.prototype.setToken1reserves = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token1Address = 2;
 * @return {string}
 */
proto.api.PoolReserves.prototype.getToken1address = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PoolReserves} returns this
 */
proto.api.PoolReserves.prototype.setToken1address = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token2Reserves = 3;
 * @return {string}
 */
proto.api.PoolReserves.prototype.getToken2reserves = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PoolReserves} returns this
 */
proto.api.PoolReserves.prototype.setToken2reserves = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token2Address = 4;
 * @return {string}
 */
proto.api.PoolReserves.prototype.getToken2address = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PoolReserves} returns this
 */
proto.api.PoolReserves.prototype.setToken2address = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string poolAddress = 5;
 * @return {string}
 */
proto.api.PoolReserves.prototype.getPooladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PoolReserves} returns this
 */
proto.api.PoolReserves.prototype.setPooladdress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Project project = 6;
 * @return {!proto.api.Project}
 */
proto.api.PoolReserves.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.PoolReserves} returns this
 */
proto.api.PoolReserves.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetPoolReservesStreamRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPoolReservesStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPoolReservesStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPoolReservesStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolReservesStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPoolReservesStreamRequest}
 */
proto.api.GetPoolReservesStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPoolReservesStreamRequest;
  return proto.api.GetPoolReservesStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPoolReservesStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPoolReservesStreamRequest}
 */
proto.api.GetPoolReservesStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPoolReservesStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPoolReservesStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPoolReservesStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPoolReservesStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetPoolReservesStreamRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetPoolReservesStreamRequest} returns this
 */
proto.api.GetPoolReservesStreamRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetPoolReservesStreamRequest} returns this
 */
proto.api.GetPoolReservesStreamRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPoolReservesStreamRequest} returns this
 */
proto.api.GetPoolReservesStreamRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetPricesStreamRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPricesStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPricesStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPricesStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPricesStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    tokensList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPricesStreamRequest}
 */
proto.api.GetPricesStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPricesStreamRequest;
  return proto.api.GetPricesStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPricesStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPricesStreamRequest}
 */
proto.api.GetPricesStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPricesStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPricesStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPricesStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPricesStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetPricesStreamRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetPricesStreamRequest} returns this
 */
proto.api.GetPricesStreamRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetPricesStreamRequest} returns this
 */
proto.api.GetPricesStreamRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPricesStreamRequest} returns this
 */
proto.api.GetPricesStreamRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * repeated string tokens = 2;
 * @return {!Array<string>}
 */
proto.api.GetPricesStreamRequest.prototype.getTokensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.GetPricesStreamRequest} returns this
 */
proto.api.GetPricesStreamRequest.prototype.setTokensList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.GetPricesStreamRequest} returns this
 */
proto.api.GetPricesStreamRequest.prototype.addTokens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetPricesStreamRequest} returns this
 */
proto.api.GetPricesStreamRequest.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetPricesStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetPricesStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetPricesStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPricesStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: (f = msg.getPrice()) && proto.api.TokenPrice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetPricesStreamResponse}
 */
proto.api.GetPricesStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetPricesStreamResponse;
  return proto.api.GetPricesStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetPricesStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetPricesStreamResponse}
 */
proto.api.GetPricesStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.TokenPrice;
      reader.readMessage(value,proto.api.TokenPrice.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetPricesStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetPricesStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetPricesStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetPricesStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.TokenPrice.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetPricesStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetPricesStreamResponse} returns this
 */
proto.api.GetPricesStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TokenPrice price = 2;
 * @return {?proto.api.TokenPrice}
 */
proto.api.GetPricesStreamResponse.prototype.getPrice = function() {
  return /** @type{?proto.api.TokenPrice} */ (
    jspb.Message.getWrapperField(this, proto.api.TokenPrice, 2));
};


/**
 * @param {?proto.api.TokenPrice|undefined} value
 * @return {!proto.api.GetPricesStreamResponse} returns this
*/
proto.api.GetPricesStreamResponse.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetPricesStreamResponse} returns this
 */
proto.api.GetPricesStreamResponse.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetPricesStreamResponse.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.api.MarketStatus = {
  MS_UNKNOWN: 0,
  MS_ONLINE: 1
};

/**
 * @enum {number}
 */
proto.api.Side = {
  S_UNKNOWN: 0,
  S_BID: 1,
  S_ASK: 2
};

/**
 * @enum {number}
 */
proto.api.OrderType = {
  OT_MARKET: 0,
  OT_LIMIT: 1,
  OT_IOC: 2,
  OT_POST: 3
};

/**
 * @enum {number}
 */
proto.api.OrderStatus = {
  OS_UNKNOWN: 0,
  OS_OPEN: 1,
  OS_PARTIAL_FILL: 2,
  OS_CANCELLED: 3,
  OS_FILLED: 4
};

/**
 * @enum {number}
 */
proto.api.Direction = {
  D_ASCENDING: 0,
  D_DESCENDING: 1
};

/**
 * @enum {number}
 */
proto.api.SubmitStrategy = {
  P_UKNOWN: 0,
  P_SUBMIT_ALL: 1,
  P_ABORT_ON_FIRST_ERROR: 2,
  P_WAIT_FOR_CONFIRMATION: 3
};

/**
 * @enum {number}
 */
proto.api.Step = {
  STEP0: 0,
  STEP1: 1,
  STEP2: 2,
  STEP3: 3
};

/**
 * @enum {number}
 */
proto.api.Project = {
  P_UNKNOWN: 0,
  P_ALL: 1,
  P_JUPITER: 2,
  P_RAYDIUM: 3,
  P_SERUM: 4,
  P_OPENBOOK: 5
};

goog.object.extend(exports, proto.api);
