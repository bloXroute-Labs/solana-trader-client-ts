// package: api
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as google_api_visibility_pb from "./google/api/visibility_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "./protoc-gen-openapiv2/options/annotations_pb";
import * as common_pb from "./common_pb";

export class GetMarketsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketsRequest): GetMarketsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketsRequest;
    static deserializeBinaryFromReader(message: GetMarketsRequest, reader: jspb.BinaryReader): GetMarketsRequest;
}

export namespace GetMarketsRequest {
    export type AsObject = {
    }
}

export class GetMarketsResponse extends jspb.Message { 

    getMarketsMap(): jspb.Map<string, Market>;
    clearMarketsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketsResponse): GetMarketsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketsResponse;
    static deserializeBinaryFromReader(message: GetMarketsResponse, reader: jspb.BinaryReader): GetMarketsResponse;
}

export namespace GetMarketsResponse {
    export type AsObject = {

        marketsMap: Array<[string, Market.AsObject]>,
    }
}

export class Market extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): Market;
    getStatus(): MarketStatus;
    setStatus(value: MarketStatus): Market;
    getAddress(): string;
    setAddress(value: string): Market;
    getBasemint(): string;
    setBasemint(value: string): Market;
    getQuotedmint(): string;
    setQuotedmint(value: string): Market;
    getBasedecimals(): number;
    setBasedecimals(value: number): Market;
    getQuotedecimals(): number;
    setQuotedecimals(value: number): Market;
    getProject(): Project;
    setProject(value: Project): Market;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        market: string,
        status: MarketStatus,
        address: string,
        basemint: string,
        quotedmint: string,
        basedecimals: number,
        quotedecimals: number,
        project: Project,
    }
}

export class GetTickersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetTickersRequest;
    getProject(): Project;
    setProject(value: Project): GetTickersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersRequest): GetTickersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersRequest;
    static deserializeBinaryFromReader(message: GetTickersRequest, reader: jspb.BinaryReader): GetTickersRequest;
}

export namespace GetTickersRequest {
    export type AsObject = {
        market: string,
        project: Project,
    }
}

export class GetTickersResponse extends jspb.Message { 
    clearTickersList(): void;
    getTickersList(): Array<Ticker>;
    setTickersList(value: Array<Ticker>): GetTickersResponse;
    addTickers(value?: Ticker, index?: number): Ticker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersResponse): GetTickersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersResponse;
    static deserializeBinaryFromReader(message: GetTickersResponse, reader: jspb.BinaryReader): GetTickersResponse;
}

export namespace GetTickersResponse {
    export type AsObject = {
        tickersList: Array<Ticker.AsObject>,
    }
}

export class Ticker extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): Ticker;
    getMarketaddress(): string;
    setMarketaddress(value: string): Ticker;
    getBid(): number;
    setBid(value: number): Ticker;
    getBidsize(): number;
    setBidsize(value: number): Ticker;
    getAsk(): number;
    setAsk(value: number): Ticker;
    getAsksize(): number;
    setAsksize(value: number): Ticker;
    getProject(): Project;
    setProject(value: Project): Ticker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ticker.AsObject;
    static toObject(includeInstance: boolean, msg: Ticker): Ticker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ticker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ticker;
    static deserializeBinaryFromReader(message: Ticker, reader: jspb.BinaryReader): Ticker;
}

export namespace Ticker {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bid: number,
        bidsize: number,
        ask: number,
        asksize: number,
        project: Project,
    }
}

export class GetKlineRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetKlineRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetKlineRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetKlineRequest;
    getResolution(): string;
    setResolution(value: string): GetKlineRequest;
    getLimit(): number;
    setLimit(value: number): GetKlineRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetKlineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetKlineRequest): GetKlineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetKlineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetKlineRequest;
    static deserializeBinaryFromReader(message: GetKlineRequest, reader: jspb.BinaryReader): GetKlineRequest;
}

export namespace GetKlineRequest {
    export type AsObject = {
        market: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        resolution: string,
        limit: number,
    }
}

export class GetKlineResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetKlineResponse;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetKlineResponse;
    clearCandlesList(): void;
    getCandlesList(): Array<Candle>;
    setCandlesList(value: Array<Candle>): GetKlineResponse;
    addCandles(value?: Candle, index?: number): Candle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetKlineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetKlineResponse): GetKlineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetKlineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetKlineResponse;
    static deserializeBinaryFromReader(message: GetKlineResponse, reader: jspb.BinaryReader): GetKlineResponse;
}

export namespace GetKlineResponse {
    export type AsObject = {
        market: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        candlesList: Array<Candle.AsObject>,
    }
}

export class Candle extends jspb.Message { 

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;

    hasUpdatetime(): boolean;
    clearUpdatetime(): void;
    getUpdatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatetime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;
    getOpen(): number;
    setOpen(value: number): Candle;
    getClose(): number;
    setClose(value: number): Candle;
    getLow(): number;
    setLow(value: number): Candle;
    getHigh(): number;
    setHigh(value: number): Candle;
    getAmount(): number;
    setAmount(value: number): Candle;
    getVolume(): number;
    setVolume(value: number): Candle;
    getCount(): number;
    setCount(value: number): Candle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Candle.AsObject;
    static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Candle;
    static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
    export type AsObject = {
        starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        open: number,
        close: number,
        low: number,
        high: number,
        amount: number,
        volume: number,
        count: number,
    }
}

export class GetOrderbookRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderbookRequest;
    getLimit(): number;
    setLimit(value: number): GetOrderbookRequest;
    getProject(): Project;
    setProject(value: Project): GetOrderbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbookRequest): GetOrderbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbookRequest;
    static deserializeBinaryFromReader(message: GetOrderbookRequest, reader: jspb.BinaryReader): GetOrderbookRequest;
}

export namespace GetOrderbookRequest {
    export type AsObject = {
        market: string,
        limit: number,
        project: Project,
    }
}

export class GetOrderbooksRequest extends jspb.Message { 
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetOrderbooksRequest;
    addMarkets(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetOrderbooksRequest;
    getProject(): Project;
    setProject(value: Project): GetOrderbooksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbooksRequest): GetOrderbooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbooksRequest;
    static deserializeBinaryFromReader(message: GetOrderbooksRequest, reader: jspb.BinaryReader): GetOrderbooksRequest;
}

export namespace GetOrderbooksRequest {
    export type AsObject = {
        marketsList: Array<string>,
        limit: number,
        project: Project,
    }
}

export class GetOrderbookResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderbookResponse;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetOrderbookResponse;
    clearBidsList(): void;
    getBidsList(): Array<OrderbookItem>;
    setBidsList(value: Array<OrderbookItem>): GetOrderbookResponse;
    addBids(value?: OrderbookItem, index?: number): OrderbookItem;
    clearAsksList(): void;
    getAsksList(): Array<OrderbookItem>;
    setAsksList(value: Array<OrderbookItem>): GetOrderbookResponse;
    addAsks(value?: OrderbookItem, index?: number): OrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbookResponse): GetOrderbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbookResponse;
    static deserializeBinaryFromReader(message: GetOrderbookResponse, reader: jspb.BinaryReader): GetOrderbookResponse;
}

export namespace GetOrderbookResponse {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<OrderbookItem.AsObject>,
        asksList: Array<OrderbookItem.AsObject>,
    }
}

export class OrderbookItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): OrderbookItem;
    getSize(): number;
    setSize(value: number): OrderbookItem;
    getOrderid(): string;
    setOrderid(value: string): OrderbookItem;
    getClientorderid(): number;
    setClientorderid(value: number): OrderbookItem;
    getOwneraddress(): string;
    setOwneraddress(value: string): OrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderbookItem.AsObject;
    static toObject(includeInstance: boolean, msg: OrderbookItem): OrderbookItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderbookItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderbookItem;
    static deserializeBinaryFromReader(message: OrderbookItem, reader: jspb.BinaryReader): OrderbookItem;
}

export namespace OrderbookItem {
    export type AsObject = {
        price: number,
        size: number,
        orderid: string,
        clientorderid: number,
        owneraddress: string,
    }
}

export class GetMarketDepthRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthRequest;
    getLimit(): number;
    setLimit(value: number): GetMarketDepthRequest;
    getProject(): Project;
    setProject(value: Project): GetMarketDepthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthRequest): GetMarketDepthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthRequest;
    static deserializeBinaryFromReader(message: GetMarketDepthRequest, reader: jspb.BinaryReader): GetMarketDepthRequest;
}

export namespace GetMarketDepthRequest {
    export type AsObject = {
        market: string,
        limit: number,
        project: Project,
    }
}

export class GetMarketDepthsRequest extends jspb.Message { 
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetMarketDepthsRequest;
    addMarkets(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetMarketDepthsRequest;
    getProject(): Project;
    setProject(value: Project): GetMarketDepthsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthsRequest): GetMarketDepthsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthsRequest;
    static deserializeBinaryFromReader(message: GetMarketDepthsRequest, reader: jspb.BinaryReader): GetMarketDepthsRequest;
}

export namespace GetMarketDepthsRequest {
    export type AsObject = {
        marketsList: Array<string>,
        limit: number,
        project: Project,
    }
}

export class GetMarketDepthResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthResponse;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetMarketDepthResponse;
    clearBidsList(): void;
    getBidsList(): Array<MarketDepthItem>;
    setBidsList(value: Array<MarketDepthItem>): GetMarketDepthResponse;
    addBids(value?: MarketDepthItem, index?: number): MarketDepthItem;
    clearAsksList(): void;
    getAsksList(): Array<MarketDepthItem>;
    setAsksList(value: Array<MarketDepthItem>): GetMarketDepthResponse;
    addAsks(value?: MarketDepthItem, index?: number): MarketDepthItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthResponse): GetMarketDepthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthResponse;
    static deserializeBinaryFromReader(message: GetMarketDepthResponse, reader: jspb.BinaryReader): GetMarketDepthResponse;
}

export namespace GetMarketDepthResponse {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<MarketDepthItem.AsObject>,
        asksList: Array<MarketDepthItem.AsObject>,
    }
}

export class MarketDepthItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): MarketDepthItem;
    getSize(): number;
    setSize(value: number): MarketDepthItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthItem.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthItem): MarketDepthItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthItem;
    static deserializeBinaryFromReader(message: MarketDepthItem, reader: jspb.BinaryReader): MarketDepthItem;
}

export namespace MarketDepthItem {
    export type AsObject = {
        price: number,
        size: number,
    }
}

export class GetTradesRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetTradesRequest;
    getLimit(): number;
    setLimit(value: number): GetTradesRequest;
    getProject(): Project;
    setProject(value: Project): GetTradesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesRequest): GetTradesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesRequest;
    static deserializeBinaryFromReader(message: GetTradesRequest, reader: jspb.BinaryReader): GetTradesRequest;
}

export namespace GetTradesRequest {
    export type AsObject = {
        market: string,
        limit: number,
        project: Project,
    }
}

export class GetTradesResponse extends jspb.Message { 
    clearTradesList(): void;
    getTradesList(): Array<Trade>;
    setTradesList(value: Array<Trade>): GetTradesResponse;
    addTrades(value?: Trade, index?: number): Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesResponse): GetTradesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesResponse;
    static deserializeBinaryFromReader(message: GetTradesResponse, reader: jspb.BinaryReader): GetTradesResponse;
}

export namespace GetTradesResponse {
    export type AsObject = {
        tradesList: Array<Trade.AsObject>,
    }
}

export class Trade extends jspb.Message { 
    getSide(): Side;
    setSide(value: Side): Trade;
    getSize(): number;
    setSize(value: number): Trade;
    getFillprice(): number;
    setFillprice(value: number): Trade;
    getOrderid(): string;
    setOrderid(value: string): Trade;
    getIsmaker(): boolean;
    setIsmaker(value: boolean): Trade;
    getAddress(): string;
    setAddress(value: string): Trade;
    getFeeorrebate(): number;
    setFeeorrebate(value: number): Trade;
    getOrderprice(): number;
    setOrderprice(value: number): Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trade.AsObject;
    static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trade;
    static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
    export type AsObject = {
        side: Side,
        size: number,
        fillprice: number,
        orderid: string,
        ismaker: boolean,
        address: string,
        feeorrebate: number,
        orderprice: number,
    }
}

export class GetServerTimeRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerTimeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerTimeRequest): GetServerTimeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerTimeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerTimeRequest;
    static deserializeBinaryFromReader(message: GetServerTimeRequest, reader: jspb.BinaryReader): GetServerTimeRequest;
}

export namespace GetServerTimeRequest {
    export type AsObject = {
    }
}

export class GetServerTimeResponse extends jspb.Message { 
    getTimestamp(): string;
    setTimestamp(value: string): GetServerTimeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerTimeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerTimeResponse): GetServerTimeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerTimeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerTimeResponse;
    static deserializeBinaryFromReader(message: GetServerTimeResponse, reader: jspb.BinaryReader): GetServerTimeResponse;
}

export namespace GetServerTimeResponse {
    export type AsObject = {
        timestamp: string,
    }
}

export class GetAccountBalanceRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetAccountBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountBalanceRequest): GetAccountBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountBalanceRequest;
    static deserializeBinaryFromReader(message: GetAccountBalanceRequest, reader: jspb.BinaryReader): GetAccountBalanceRequest;
}

export namespace GetAccountBalanceRequest {
    export type AsObject = {
        owneraddress: string,
    }
}

export class GetAccountBalanceResponse extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<TokenBalance>;
    setTokensList(value: Array<TokenBalance>): GetAccountBalanceResponse;
    addTokens(value?: TokenBalance, index?: number): TokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountBalanceResponse): GetAccountBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountBalanceResponse;
    static deserializeBinaryFromReader(message: GetAccountBalanceResponse, reader: jspb.BinaryReader): GetAccountBalanceResponse;
}

export namespace GetAccountBalanceResponse {
    export type AsObject = {
        tokensList: Array<TokenBalance.AsObject>,
    }
}

export class TokenBalance extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): TokenBalance;
    getAddress(): string;
    setAddress(value: string): TokenBalance;
    getWalletamount(): number;
    setWalletamount(value: number): TokenBalance;
    getUnsettledamount(): number;
    setUnsettledamount(value: number): TokenBalance;
    getOpenordersamount(): number;
    setOpenordersamount(value: number): TokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenBalance.AsObject;
    static toObject(includeInstance: boolean, msg: TokenBalance): TokenBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenBalance;
    static deserializeBinaryFromReader(message: TokenBalance, reader: jspb.BinaryReader): TokenBalance;
}

export namespace TokenBalance {
    export type AsObject = {
        symbol: string,
        address: string,
        walletamount: number,
        unsettledamount: number,
        openordersamount: number,
    }
}

export class PostOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostOrderRequest;
    getPayeraddress(): string;
    setPayeraddress(value: string): PostOrderRequest;
    getMarket(): string;
    setMarket(value: string): PostOrderRequest;
    getSide(): Side;
    setSide(value: Side): PostOrderRequest;
    clearTypeList(): void;
    getTypeList(): Array<OrderType>;
    setTypeList(value: Array<OrderType>): PostOrderRequest;
    addType(value: OrderType, index?: number): OrderType;
    getAmount(): number;
    setAmount(value: number): PostOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderRequest): PostOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderRequest;
    static deserializeBinaryFromReader(message: PostOrderRequest, reader: jspb.BinaryReader): PostOrderRequest;
}

export namespace PostOrderRequest {
    export type AsObject = {
        owneraddress: string,
        payeraddress: string,
        market: string,
        side: Side,
        typeList: Array<OrderType>,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        project: Project,
    }
}

export class PostReplaceOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostReplaceOrderRequest;
    getPayeraddress(): string;
    setPayeraddress(value: string): PostReplaceOrderRequest;
    getMarket(): string;
    setMarket(value: string): PostReplaceOrderRequest;
    getSide(): Side;
    setSide(value: Side): PostReplaceOrderRequest;
    clearTypeList(): void;
    getTypeList(): Array<OrderType>;
    setTypeList(value: Array<OrderType>): PostReplaceOrderRequest;
    addType(value: OrderType, index?: number): OrderType;
    getAmount(): number;
    setAmount(value: number): PostReplaceOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostReplaceOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostReplaceOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostReplaceOrderRequest;
    getOrderid(): string;
    setOrderid(value: string): PostReplaceOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostReplaceOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostReplaceOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostReplaceOrderRequest): PostReplaceOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostReplaceOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostReplaceOrderRequest;
    static deserializeBinaryFromReader(message: PostReplaceOrderRequest, reader: jspb.BinaryReader): PostReplaceOrderRequest;
}

export namespace PostReplaceOrderRequest {
    export type AsObject = {
        owneraddress: string,
        payeraddress: string,
        market: string,
        side: Side,
        typeList: Array<OrderType>,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        orderid: string,
        project: Project,
    }
}

export class PostOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostOrderResponse;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderResponse): PostOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderResponse;
    static deserializeBinaryFromReader(message: PostOrderResponse, reader: jspb.BinaryReader): PostOrderResponse;
}

export namespace PostOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
        openordersaddress: string,
    }
}

export class PostCancelOrderRequest extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): PostCancelOrderRequest;
    getSide(): Side;
    setSide(value: Side): PostCancelOrderRequest;
    getMarketaddress(): string;
    setMarketaddress(value: string): PostCancelOrderRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostCancelOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelOrderRequest): PostCancelOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelOrderRequest;
    static deserializeBinaryFromReader(message: PostCancelOrderRequest, reader: jspb.BinaryReader): PostCancelOrderRequest;
}

export namespace PostCancelOrderRequest {
    export type AsObject = {
        orderid: string,
        side: Side,
        marketaddress: string,
        owneraddress: string,
        openordersaddress: string,
        project: Project,
    }
}

export class PostCancelByClientOrderIDRequest extends jspb.Message { 
    getClientorderid(): number;
    setClientorderid(value: number): PostCancelByClientOrderIDRequest;
    getMarketaddress(): string;
    setMarketaddress(value: string): PostCancelByClientOrderIDRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelByClientOrderIDRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostCancelByClientOrderIDRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelByClientOrderIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelByClientOrderIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelByClientOrderIDRequest): PostCancelByClientOrderIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelByClientOrderIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelByClientOrderIDRequest;
    static deserializeBinaryFromReader(message: PostCancelByClientOrderIDRequest, reader: jspb.BinaryReader): PostCancelByClientOrderIDRequest;
}

export namespace PostCancelByClientOrderIDRequest {
    export type AsObject = {
        clientorderid: number,
        marketaddress: string,
        owneraddress: string,
        openordersaddress: string,
        project: Project,
    }
}

export class PostCancelOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostCancelOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelOrderResponse): PostCancelOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelOrderResponse;
    static deserializeBinaryFromReader(message: PostCancelOrderResponse, reader: jspb.BinaryReader): PostCancelOrderResponse;
}

export namespace PostCancelOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostCancelAllRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): PostCancelAllRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelAllRequest;
    clearOpenordersaddressesList(): void;
    getOpenordersaddressesList(): Array<string>;
    setOpenordersaddressesList(value: Array<string>): PostCancelAllRequest;
    addOpenordersaddresses(value: string, index?: number): string;
    getProject(): Project;
    setProject(value: Project): PostCancelAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelAllRequest): PostCancelAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelAllRequest;
    static deserializeBinaryFromReader(message: PostCancelAllRequest, reader: jspb.BinaryReader): PostCancelAllRequest;
}

export namespace PostCancelAllRequest {
    export type AsObject = {
        market: string,
        owneraddress: string,
        openordersaddressesList: Array<string>,
        project: Project,
    }
}

export class TransactionMessage extends jspb.Message { 
    getContent(): string;
    setContent(value: string): TransactionMessage;
    getIscleanup(): boolean;
    setIscleanup(value: boolean): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMessage): TransactionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMessage;
    static deserializeBinaryFromReader(message: TransactionMessage, reader: jspb.BinaryReader): TransactionMessage;
}

export namespace TransactionMessage {
    export type AsObject = {
        content: string,
        iscleanup: boolean,
    }
}

export class PostCancelAllResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostCancelAllResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelAllResponse): PostCancelAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelAllResponse;
    static deserializeBinaryFromReader(message: PostCancelAllResponse, reader: jspb.BinaryReader): PostCancelAllResponse;
}

export namespace PostCancelAllResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostSettleRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostSettleRequest;
    getMarket(): string;
    setMarket(value: string): PostSettleRequest;
    getBasetokenwallet(): string;
    setBasetokenwallet(value: string): PostSettleRequest;
    getQuotetokenwallet(): string;
    setQuotetokenwallet(value: string): PostSettleRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostSettleRequest;
    getProject(): Project;
    setProject(value: Project): PostSettleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettleRequest): PostSettleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettleRequest;
    static deserializeBinaryFromReader(message: PostSettleRequest, reader: jspb.BinaryReader): PostSettleRequest;
}

export namespace PostSettleRequest {
    export type AsObject = {
        owneraddress: string,
        market: string,
        basetokenwallet: string,
        quotetokenwallet: string,
        openordersaddress: string,
        project: Project,
    }
}

export class PostSettleResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSettleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettleResponse): PostSettleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettleResponse;
    static deserializeBinaryFromReader(message: PostSettleResponse, reader: jspb.BinaryReader): PostSettleResponse;
}

export namespace PostSettleResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class Settlement extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): Settlement;
    getUnsettled(): number;
    setUnsettled(value: number): Settlement;
    getAmount(): number;
    setAmount(value: number): Settlement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Settlement.AsObject;
    static toObject(includeInstance: boolean, msg: Settlement): Settlement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Settlement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Settlement;
    static deserializeBinaryFromReader(message: Settlement, reader: jspb.BinaryReader): Settlement;
}

export namespace Settlement {
    export type AsObject = {
        symbol: string,
        unsettled: number,
        amount: number,
    }
}

export class GetOrdersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrdersRequest;
    getStatus(): OrderStatus;
    setStatus(value: OrderStatus): GetOrdersRequest;
    getSide(): Side;
    setSide(value: Side): GetOrdersRequest;
    clearTypesList(): void;
    getTypesList(): Array<OrderType>;
    setTypesList(value: Array<OrderType>): GetOrdersRequest;
    addTypes(value: OrderType, index?: number): OrderType;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetOrdersRequest;
    getLimit(): number;
    setLimit(value: number): GetOrdersRequest;
    getDirection(): Direction;
    setDirection(value: Direction): GetOrdersRequest;
    getAddress(): string;
    setAddress(value: string): GetOrdersRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): GetOrdersRequest;
    getProject(): Project;
    setProject(value: Project): GetOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
    static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
    export type AsObject = {
        market: string,
        status: OrderStatus,
        side: Side,
        typesList: Array<OrderType>,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        limit: number,
        direction: Direction,
        address: string,
        openordersaddress: string,
        project: Project,
    }
}

export class GetOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): GetOrdersResponse;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
    static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}

export class Order extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): Order;
    getMarket(): string;
    setMarket(value: string): Order;
    getSide(): Side;
    setSide(value: Side): Order;
    clearTypesList(): void;
    getTypesList(): Array<OrderType>;
    setTypesList(value: Array<OrderType>): Order;
    addTypes(value: OrderType, index?: number): OrderType;
    getPrice(): number;
    setPrice(value: number): Order;
    getRemainingsize(): number;
    setRemainingsize(value: number): Order;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Order;
    getClientorderid(): string;
    setClientorderid(value: string): Order;
    getOpenorderaccount(): string;
    setOpenorderaccount(value: string): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        orderid: string,
        market: string,
        side: Side,
        typesList: Array<OrderType>,
        price: number,
        remainingsize: number,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clientorderid: string,
        openorderaccount: string,
    }
}

export class GetOrderStatusStreamRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderStatusStreamRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetOrderStatusStreamRequest;
    getProject(): Project;
    setProject(value: Project): GetOrderStatusStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStatusStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStatusStreamRequest): GetOrderStatusStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStatusStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStatusStreamRequest;
    static deserializeBinaryFromReader(message: GetOrderStatusStreamRequest, reader: jspb.BinaryReader): GetOrderStatusStreamRequest;
}

export namespace GetOrderStatusStreamRequest {
    export type AsObject = {
        market: string,
        owneraddress: string,
        project: Project,
    }
}

export class GetOrderStatusStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetOrderStatusStreamResponse;

    hasOrderinfo(): boolean;
    clearOrderinfo(): void;
    getOrderinfo(): GetOrderStatusResponse | undefined;
    setOrderinfo(value?: GetOrderStatusResponse): GetOrderStatusStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStatusStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStatusStreamResponse): GetOrderStatusStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStatusStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStatusStreamResponse;
    static deserializeBinaryFromReader(message: GetOrderStatusStreamResponse, reader: jspb.BinaryReader): GetOrderStatusStreamResponse;
}

export namespace GetOrderStatusStreamResponse {
    export type AsObject = {
        slot: number,
        orderinfo?: GetOrderStatusResponse.AsObject,
    }
}

export class GetOrderStatusResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderStatusResponse;
    getOpenorderaddress(): string;
    setOpenorderaddress(value: string): GetOrderStatusResponse;
    getOrderid(): string;
    setOrderid(value: string): GetOrderStatusResponse;
    getClientorderid(): number;
    setClientorderid(value: number): GetOrderStatusResponse;
    getQuantityreleased(): number;
    setQuantityreleased(value: number): GetOrderStatusResponse;
    getQuantityremaining(): number;
    setQuantityremaining(value: number): GetOrderStatusResponse;
    getFillprice(): number;
    setFillprice(value: number): GetOrderStatusResponse;
    getSide(): Side;
    setSide(value: Side): GetOrderStatusResponse;
    getOrderstatus(): OrderStatus;
    setOrderstatus(value: OrderStatus): GetOrderStatusResponse;
    getOrderprice(): number;
    setOrderprice(value: number): GetOrderStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStatusResponse): GetOrderStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStatusResponse;
    static deserializeBinaryFromReader(message: GetOrderStatusResponse, reader: jspb.BinaryReader): GetOrderStatusResponse;
}

export namespace GetOrderStatusResponse {
    export type AsObject = {
        market: string,
        openorderaddress: string,
        orderid: string,
        clientorderid: number,
        quantityreleased: number,
        quantityremaining: number,
        fillprice: number,
        side: Side,
        orderstatus: OrderStatus,
        orderprice: number,
    }
}

export class PostSubmitRequest extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSubmitRequest;
    getSkippreflight(): boolean;
    setSkippreflight(value: boolean): PostSubmitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitRequest): PostSubmitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitRequest;
    static deserializeBinaryFromReader(message: PostSubmitRequest, reader: jspb.BinaryReader): PostSubmitRequest;
}

export namespace PostSubmitRequest {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
        skippreflight: boolean,
    }
}

export class PostSubmitRequestEntry extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSubmitRequestEntry;
    getSkippreflight(): boolean;
    setSkippreflight(value: boolean): PostSubmitRequestEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitRequestEntry.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitRequestEntry): PostSubmitRequestEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitRequestEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitRequestEntry;
    static deserializeBinaryFromReader(message: PostSubmitRequestEntry, reader: jspb.BinaryReader): PostSubmitRequestEntry;
}

export namespace PostSubmitRequestEntry {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
        skippreflight: boolean,
    }
}

export class PostSubmitBatchRequest extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<PostSubmitRequestEntry>;
    setEntriesList(value: Array<PostSubmitRequestEntry>): PostSubmitBatchRequest;
    addEntries(value?: PostSubmitRequestEntry, index?: number): PostSubmitRequestEntry;
    getSubmitstrategy(): SubmitStrategy;
    setSubmitstrategy(value: SubmitStrategy): PostSubmitBatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitBatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitBatchRequest): PostSubmitBatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitBatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitBatchRequest;
    static deserializeBinaryFromReader(message: PostSubmitBatchRequest, reader: jspb.BinaryReader): PostSubmitBatchRequest;
}

export namespace PostSubmitBatchRequest {
    export type AsObject = {
        entriesList: Array<PostSubmitRequestEntry.AsObject>,
        submitstrategy: SubmitStrategy,
    }
}

export class PostSubmitResponse extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): PostSubmitResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitResponse): PostSubmitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitResponse;
    static deserializeBinaryFromReader(message: PostSubmitResponse, reader: jspb.BinaryReader): PostSubmitResponse;
}

export namespace PostSubmitResponse {
    export type AsObject = {
        signature: string,
    }
}

export class PostSubmitBatchResponseEntry extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): PostSubmitBatchResponseEntry;
    getError(): string;
    setError(value: string): PostSubmitBatchResponseEntry;
    getSubmitted(): boolean;
    setSubmitted(value: boolean): PostSubmitBatchResponseEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitBatchResponseEntry.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitBatchResponseEntry): PostSubmitBatchResponseEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitBatchResponseEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitBatchResponseEntry;
    static deserializeBinaryFromReader(message: PostSubmitBatchResponseEntry, reader: jspb.BinaryReader): PostSubmitBatchResponseEntry;
}

export namespace PostSubmitBatchResponseEntry {
    export type AsObject = {
        signature: string,
        error: string,
        submitted: boolean,
    }
}

export class PostSubmitBatchResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<PostSubmitBatchResponseEntry>;
    setTransactionsList(value: Array<PostSubmitBatchResponseEntry>): PostSubmitBatchResponse;
    addTransactions(value?: PostSubmitBatchResponseEntry, index?: number): PostSubmitBatchResponseEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitBatchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitBatchResponse): PostSubmitBatchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitBatchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitBatchResponse;
    static deserializeBinaryFromReader(message: PostSubmitBatchResponse, reader: jspb.BinaryReader): PostSubmitBatchResponse;
}

export namespace PostSubmitBatchResponse {
    export type AsObject = {
        transactionsList: Array<PostSubmitBatchResponseEntry.AsObject>,
    }
}

export class GetOpenOrdersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOpenOrdersRequest;
    getLimit(): number;
    setLimit(value: number): GetOpenOrdersRequest;
    getAddress(): string;
    setAddress(value: string): GetOpenOrdersRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): GetOpenOrdersRequest;
    getProject(): Project;
    setProject(value: Project): GetOpenOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenOrdersRequest): GetOpenOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenOrdersRequest;
    static deserializeBinaryFromReader(message: GetOpenOrdersRequest, reader: jspb.BinaryReader): GetOpenOrdersRequest;
}

export namespace GetOpenOrdersRequest {
    export type AsObject = {
        market: string,
        limit: number,
        address: string,
        openordersaddress: string,
        project: Project,
    }
}

export class GetOpenOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): GetOpenOrdersResponse;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenOrdersResponse): GetOpenOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenOrdersResponse;
    static deserializeBinaryFromReader(message: GetOpenOrdersResponse, reader: jspb.BinaryReader): GetOpenOrdersResponse;
}

export namespace GetOpenOrdersResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}

export class GetOrderByIDRequest extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): GetOrderByIDRequest;
    getMarket(): string;
    setMarket(value: string): GetOrderByIDRequest;
    getProject(): Project;
    setProject(value: Project): GetOrderByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderByIDRequest): GetOrderByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderByIDRequest;
    static deserializeBinaryFromReader(message: GetOrderByIDRequest, reader: jspb.BinaryReader): GetOrderByIDRequest;
}

export namespace GetOrderByIDRequest {
    export type AsObject = {
        orderid: string,
        market: string,
        project: Project,
    }
}

export class GetOrderByIDResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): GetOrderByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderByIDResponse): GetOrderByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderByIDResponse;
    static deserializeBinaryFromReader(message: GetOrderByIDResponse, reader: jspb.BinaryReader): GetOrderByIDResponse;
}

export namespace GetOrderByIDResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class GetUnsettledRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetUnsettledRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetUnsettledRequest;
    getProject(): Project;
    setProject(value: Project): GetUnsettledRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnsettledRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnsettledRequest): GetUnsettledRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnsettledRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnsettledRequest;
    static deserializeBinaryFromReader(message: GetUnsettledRequest, reader: jspb.BinaryReader): GetUnsettledRequest;
}

export namespace GetUnsettledRequest {
    export type AsObject = {
        market: string,
        owneraddress: string,
        project: Project,
    }
}

export class UnsettledAccountToken extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): UnsettledAccountToken;
    getAmount(): number;
    setAmount(value: number): UnsettledAccountToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsettledAccountToken.AsObject;
    static toObject(includeInstance: boolean, msg: UnsettledAccountToken): UnsettledAccountToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsettledAccountToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsettledAccountToken;
    static deserializeBinaryFromReader(message: UnsettledAccountToken, reader: jspb.BinaryReader): UnsettledAccountToken;
}

export namespace UnsettledAccountToken {
    export type AsObject = {
        address: string,
        amount: number,
    }
}

export class UnsettledAccount extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): UnsettledAccount;

    hasBasetoken(): boolean;
    clearBasetoken(): void;
    getBasetoken(): UnsettledAccountToken | undefined;
    setBasetoken(value?: UnsettledAccountToken): UnsettledAccount;

    hasQuotetoken(): boolean;
    clearQuotetoken(): void;
    getQuotetoken(): UnsettledAccountToken | undefined;
    setQuotetoken(value?: UnsettledAccountToken): UnsettledAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsettledAccount.AsObject;
    static toObject(includeInstance: boolean, msg: UnsettledAccount): UnsettledAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsettledAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsettledAccount;
    static deserializeBinaryFromReader(message: UnsettledAccount, reader: jspb.BinaryReader): UnsettledAccount;
}

export namespace UnsettledAccount {
    export type AsObject = {
        account: string,
        basetoken?: UnsettledAccountToken.AsObject,
        quotetoken?: UnsettledAccountToken.AsObject,
    }
}

export class GetUnsettledResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetUnsettledResponse;
    clearUnsettledList(): void;
    getUnsettledList(): Array<UnsettledAccount>;
    setUnsettledList(value: Array<UnsettledAccount>): GetUnsettledResponse;
    addUnsettled(value?: UnsettledAccount, index?: number): UnsettledAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnsettledResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnsettledResponse): GetUnsettledResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnsettledResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnsettledResponse;
    static deserializeBinaryFromReader(message: GetUnsettledResponse, reader: jspb.BinaryReader): GetUnsettledResponse;
}

export namespace GetUnsettledResponse {
    export type AsObject = {
        market: string,
        unsettledList: Array<UnsettledAccount.AsObject>,
    }
}

export class GetOrderbooksStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetOrderbooksStreamResponse;

    hasOrderbook(): boolean;
    clearOrderbook(): void;
    getOrderbook(): GetOrderbookResponse | undefined;
    setOrderbook(value?: GetOrderbookResponse): GetOrderbooksStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbooksStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbooksStreamResponse): GetOrderbooksStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbooksStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbooksStreamResponse;
    static deserializeBinaryFromReader(message: GetOrderbooksStreamResponse, reader: jspb.BinaryReader): GetOrderbooksStreamResponse;
}

export namespace GetOrderbooksStreamResponse {
    export type AsObject = {
        slot: number,
        orderbook?: GetOrderbookResponse.AsObject,
    }
}

export class GetMarketDepthsStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetMarketDepthsStreamResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetMarketDepthResponse | undefined;
    setData(value?: GetMarketDepthResponse): GetMarketDepthsStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthsStreamResponse): GetMarketDepthsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthsStreamResponse;
    static deserializeBinaryFromReader(message: GetMarketDepthsStreamResponse, reader: jspb.BinaryReader): GetMarketDepthsStreamResponse;
}

export namespace GetMarketDepthsStreamResponse {
    export type AsObject = {
        slot: number,
        data?: GetMarketDepthResponse.AsObject,
    }
}

export class GetTickersStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetTickersStreamResponse;

    hasTicker(): boolean;
    clearTicker(): void;
    getTicker(): GetTickersResponse | undefined;
    setTicker(value?: GetTickersResponse): GetTickersStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersStreamResponse): GetTickersStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersStreamResponse;
    static deserializeBinaryFromReader(message: GetTickersStreamResponse, reader: jspb.BinaryReader): GetTickersStreamResponse;
}

export namespace GetTickersStreamResponse {
    export type AsObject = {
        slot: number,
        ticker?: GetTickersResponse.AsObject,
    }
}

export class GetTradesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetTradesStreamResponse;

    hasTrades(): boolean;
    clearTrades(): void;
    getTrades(): GetTradesResponse | undefined;
    setTrades(value?: GetTradesResponse): GetTradesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesStreamResponse): GetTradesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesStreamResponse;
    static deserializeBinaryFromReader(message: GetTradesStreamResponse, reader: jspb.BinaryReader): GetTradesStreamResponse;
}

export namespace GetTradesStreamResponse {
    export type AsObject = {
        slot: number,
        trades?: GetTradesResponse.AsObject,
    }
}

export class GetQuotesRequest extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetQuotesRequest;
    getOuttoken(): string;
    setOuttoken(value: string): GetQuotesRequest;
    getInamount(): number;
    setInamount(value: number): GetQuotesRequest;
    getSlippage(): number;
    setSlippage(value: number): GetQuotesRequest;
    getLimit(): number;
    setLimit(value: number): GetQuotesRequest;
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetQuotesRequest;
    addProjects(value: Project, index?: number): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesRequest): GetQuotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesRequest;
    static deserializeBinaryFromReader(message: GetQuotesRequest, reader: jspb.BinaryReader): GetQuotesRequest;
}

export namespace GetQuotesRequest {
    export type AsObject = {
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
        limit: number,
        projectsList: Array<Project>,
    }
}

export class GetQuotesResponse extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetQuotesResponse;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetQuotesResponse;
    getOuttoken(): string;
    setOuttoken(value: string): GetQuotesResponse;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetQuotesResponse;
    getInamount(): number;
    setInamount(value: number): GetQuotesResponse;
    clearQuotesList(): void;
    getQuotesList(): Array<ProjectQuote>;
    setQuotesList(value: Array<ProjectQuote>): GetQuotesResponse;
    addQuotes(value?: ProjectQuote, index?: number): ProjectQuote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesResponse): GetQuotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesResponse;
    static deserializeBinaryFromReader(message: GetQuotesResponse, reader: jspb.BinaryReader): GetQuotesResponse;
}

export namespace GetQuotesResponse {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        quotesList: Array<ProjectQuote.AsObject>,
    }
}

export class ProjectQuote extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): ProjectQuote;
    clearRoutesList(): void;
    getRoutesList(): Array<QuoteRoute>;
    setRoutesList(value: Array<QuoteRoute>): ProjectQuote;
    addRoutes(value?: QuoteRoute, index?: number): QuoteRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectQuote.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectQuote): ProjectQuote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectQuote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectQuote;
    static deserializeBinaryFromReader(message: ProjectQuote, reader: jspb.BinaryReader): ProjectQuote;
}

export namespace ProjectQuote {
    export type AsObject = {
        project: Project,
        routesList: Array<QuoteRoute.AsObject>,
    }
}

export class TradeSwapRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): TradeSwapRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): TradeSwapRequest;
    getIntoken(): string;
    setIntoken(value: string): TradeSwapRequest;
    getOuttoken(): string;
    setOuttoken(value: string): TradeSwapRequest;
    getInamount(): number;
    setInamount(value: number): TradeSwapRequest;
    getSlippage(): number;
    setSlippage(value: number): TradeSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradeSwapRequest): TradeSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeSwapRequest;
    static deserializeBinaryFromReader(message: TradeSwapRequest, reader: jspb.BinaryReader): TradeSwapRequest;
}

export namespace TradeSwapRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
    }
}

export class RouteTradeSwapRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): RouteTradeSwapRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): RouteTradeSwapRequest;
    clearStepsList(): void;
    getStepsList(): Array<RouteStep>;
    setStepsList(value: Array<RouteStep>): RouteTradeSwapRequest;
    addSteps(value?: RouteStep, index?: number): RouteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteTradeSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RouteTradeSwapRequest): RouteTradeSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteTradeSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteTradeSwapRequest;
    static deserializeBinaryFromReader(message: RouteTradeSwapRequest, reader: jspb.BinaryReader): RouteTradeSwapRequest;
}

export namespace RouteTradeSwapRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        stepsList: Array<RouteStep.AsObject>,
    }
}

export class RouteStep extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): RouteStep;
    getInamount(): number;
    setInamount(value: number): RouteStep;
    getOuttoken(): string;
    setOuttoken(value: string): RouteStep;
    getOutamount(): number;
    setOutamount(value: number): RouteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): RouteStep;

    hasProject(): boolean;
    clearProject(): void;
    getProject(): StepProject | undefined;
    setProject(value?: StepProject): RouteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteStep.AsObject;
    static toObject(includeInstance: boolean, msg: RouteStep): RouteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteStep;
    static deserializeBinaryFromReader(message: RouteStep, reader: jspb.BinaryReader): RouteStep;
}

export namespace RouteStep {
    export type AsObject = {
        intoken: string,
        inamount: number,
        outtoken: string,
        outamount: number,
        outamountmin: number,
        project?: StepProject.AsObject,
    }
}

export class TradeSwapResponse extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): TradeSwapResponse;
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): TradeSwapResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;
    getOutamount(): number;
    setOutamount(value: number): TradeSwapResponse;
    getOutamountmin(): number;
    setOutamountmin(value: number): TradeSwapResponse;

    hasPriceimpact(): boolean;
    clearPriceimpact(): void;
    getPriceimpact(): common_pb.PriceImpactPercent | undefined;
    setPriceimpact(value?: common_pb.PriceImpactPercent): TradeSwapResponse;
    clearFeesList(): void;
    getFeesList(): Array<common_pb.Fee>;
    setFeesList(value: Array<common_pb.Fee>): TradeSwapResponse;
    addFees(value?: common_pb.Fee, index?: number): common_pb.Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeSwapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradeSwapResponse): TradeSwapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeSwapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeSwapResponse;
    static deserializeBinaryFromReader(message: TradeSwapResponse, reader: jspb.BinaryReader): TradeSwapResponse;
}

export namespace TradeSwapResponse {
    export type AsObject = {
        project: Project,
        transactionsList: Array<TransactionMessage.AsObject>,
        outamount: number,
        outamountmin: number,
        priceimpact?: common_pb.PriceImpactPercent.AsObject,
        feesList: Array<common_pb.Fee.AsObject>,
    }
}

export class QuoteRoute extends jspb.Message { 
    getInamount(): number;
    setInamount(value: number): QuoteRoute;
    getOutamount(): number;
    setOutamount(value: number): QuoteRoute;
    getOutamountmin(): number;
    setOutamountmin(value: number): QuoteRoute;
    clearStepsList(): void;
    getStepsList(): Array<QuoteStep>;
    setStepsList(value: Array<QuoteStep>): QuoteRoute;
    addSteps(value?: QuoteStep, index?: number): QuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteRoute.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteRoute): QuoteRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteRoute;
    static deserializeBinaryFromReader(message: QuoteRoute, reader: jspb.BinaryReader): QuoteRoute;
}

export namespace QuoteRoute {
    export type AsObject = {
        inamount: number,
        outamount: number,
        outamountmin: number,
        stepsList: Array<QuoteStep.AsObject>,
    }
}

export class QuoteStep extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): StepProject | undefined;
    setProject(value?: StepProject): QuoteStep;
    getIntoken(): string;
    setIntoken(value: string): QuoteStep;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): QuoteStep;
    getOuttoken(): string;
    setOuttoken(value: string): QuoteStep;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): QuoteStep;
    getInamount(): number;
    setInamount(value: number): QuoteStep;
    getOutamount(): number;
    setOutamount(value: number): QuoteStep;
    getSlippage(): number;
    setSlippage(value: number): QuoteStep;

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): common_pb.PriceImpactPercent | undefined;
    setPriceimpactpercent(value?: common_pb.PriceImpactPercent): QuoteStep;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): common_pb.Fee | undefined;
    setFee(value?: common_pb.Fee): QuoteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): QuoteStep;
    getPooladdress(): string;
    setPooladdress(value: string): QuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteStep.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteStep): QuoteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteStep;
    static deserializeBinaryFromReader(message: QuoteStep, reader: jspb.BinaryReader): QuoteStep;
}

export namespace QuoteStep {
    export type AsObject = {
        project?: StepProject.AsObject,
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        slippage: number,
        priceimpactpercent?: common_pb.PriceImpactPercent.AsObject,
        fee?: common_pb.Fee.AsObject,
        outamountmin: number,
        pooladdress: string,
    }
}

export class StepProject extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): StepProject;
    getId(): string;
    setId(value: string): StepProject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepProject.AsObject;
    static toObject(includeInstance: boolean, msg: StepProject): StepProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepProject;
    static deserializeBinaryFromReader(message: StepProject, reader: jspb.BinaryReader): StepProject;
}

export namespace StepProject {
    export type AsObject = {
        label: string,
        id: string,
    }
}

export class GetRecentBlockHashRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecentBlockHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecentBlockHashRequest): GetRecentBlockHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecentBlockHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecentBlockHashRequest;
    static deserializeBinaryFromReader(message: GetRecentBlockHashRequest, reader: jspb.BinaryReader): GetRecentBlockHashRequest;
}

export namespace GetRecentBlockHashRequest {
    export type AsObject = {
    }
}

export class GetRecentBlockHashResponse extends jspb.Message { 
    getBlockhash(): string;
    setBlockhash(value: string): GetRecentBlockHashResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecentBlockHashResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecentBlockHashResponse): GetRecentBlockHashResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecentBlockHashResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecentBlockHashResponse;
    static deserializeBinaryFromReader(message: GetRecentBlockHashResponse, reader: jspb.BinaryReader): GetRecentBlockHashResponse;
}

export namespace GetRecentBlockHashResponse {
    export type AsObject = {
        blockhash: string,
    }
}

export class Block extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): Block;
    getHash(): string;
    setHash(value: string): Block;
    getTime(): number;
    setTime(value: number): Block;
    getHeight(): number;
    setHeight(value: number): Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        slot: number,
        hash: string,
        time: number,
        height: number,
    }
}

export class GetBlockStreamRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockStreamRequest): GetBlockStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockStreamRequest;
    static deserializeBinaryFromReader(message: GetBlockStreamRequest, reader: jspb.BinaryReader): GetBlockStreamRequest;
}

export namespace GetBlockStreamRequest {
    export type AsObject = {
    }
}

export class GetBlockStreamResponse extends jspb.Message { 

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): Block | undefined;
    setBlock(value?: Block): GetBlockStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockStreamResponse): GetBlockStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockStreamResponse;
    static deserializeBinaryFromReader(message: GetBlockStreamResponse, reader: jspb.BinaryReader): GetBlockStreamResponse;
}

export namespace GetBlockStreamResponse {
    export type AsObject = {
        block?: Block.AsObject,
    }
}

export class GetPoolsRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetPoolsRequest;
    addProjects(value: Project, index?: number): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolsRequest): GetPoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolsRequest;
    static deserializeBinaryFromReader(message: GetPoolsRequest, reader: jspb.BinaryReader): GetPoolsRequest;
}

export namespace GetPoolsRequest {
    export type AsObject = {
        projectsList: Array<Project>,
    }
}

export class GetPoolsResponse extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<ProjectPools>;
    setProjectsList(value: Array<ProjectPools>): GetPoolsResponse;
    addProjects(value?: ProjectPools, index?: number): ProjectPools;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolsResponse): GetPoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolsResponse;
    static deserializeBinaryFromReader(message: GetPoolsResponse, reader: jspb.BinaryReader): GetPoolsResponse;
}

export namespace GetPoolsResponse {
    export type AsObject = {
        projectsList: Array<ProjectPools.AsObject>,
    }
}

export class ProjectPools extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): ProjectPools;
    clearPoolsList(): void;
    getPoolsList(): Array<ProjectPool>;
    setPoolsList(value: Array<ProjectPool>): ProjectPools;
    addPools(value?: ProjectPool, index?: number): ProjectPool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectPools.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectPools): ProjectPools.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectPools, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectPools;
    static deserializeBinaryFromReader(message: ProjectPools, reader: jspb.BinaryReader): ProjectPools;
}

export namespace ProjectPools {
    export type AsObject = {
        project: Project,
        poolsList: Array<ProjectPool.AsObject>,
    }
}

export class ProjectPool extends jspb.Message { 
    getPool(): string;
    setPool(value: string): ProjectPool;
    getPooladdress(): string;
    setPooladdress(value: string): ProjectPool;
    getToken1reserves(): number;
    setToken1reserves(value: number): ProjectPool;
    getToken1mintaddress(): string;
    setToken1mintaddress(value: string): ProjectPool;
    getToken1mintsymbol(): string;
    setToken1mintsymbol(value: string): ProjectPool;
    getToken2reserves(): number;
    setToken2reserves(value: number): ProjectPool;
    getToken2mintaddress(): string;
    setToken2mintaddress(value: string): ProjectPool;
    getToken2mintsymbol(): string;
    setToken2mintsymbol(value: string): ProjectPool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectPool.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectPool): ProjectPool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectPool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectPool;
    static deserializeBinaryFromReader(message: ProjectPool, reader: jspb.BinaryReader): ProjectPool;
}

export namespace ProjectPool {
    export type AsObject = {
        pool: string,
        pooladdress: string,
        token1reserves: number,
        token1mintaddress: string,
        token1mintsymbol: string,
        token2reserves: number,
        token2mintaddress: string,
        token2mintsymbol: string,
    }
}

export class GetQuotesStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetQuotesStreamRequest;
    addProjects(value: Project, index?: number): Project;
    clearTokenpairsList(): void;
    getTokenpairsList(): Array<TokenPair>;
    setTokenpairsList(value: Array<TokenPair>): GetQuotesStreamRequest;
    addTokenpairs(value?: TokenPair, index?: number): TokenPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesStreamRequest): GetQuotesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesStreamRequest;
    static deserializeBinaryFromReader(message: GetQuotesStreamRequest, reader: jspb.BinaryReader): GetQuotesStreamRequest;
}

export namespace GetQuotesStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        tokenpairsList: Array<TokenPair.AsObject>,
    }
}

export class GetQuotesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetQuotesStreamResponse;

    hasQuote(): boolean;
    clearQuote(): void;
    getQuote(): GetQuotesStreamUpdate | undefined;
    setQuote(value?: GetQuotesStreamUpdate): GetQuotesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesStreamResponse): GetQuotesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesStreamResponse;
    static deserializeBinaryFromReader(message: GetQuotesStreamResponse, reader: jspb.BinaryReader): GetQuotesStreamResponse;
}

export namespace GetQuotesStreamResponse {
    export type AsObject = {
        slot: number,
        quote?: GetQuotesStreamUpdate.AsObject,
    }
}

export class GetQuotesStreamUpdate extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetQuotesStreamUpdate;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetQuotesStreamUpdate;
    getOuttoken(): string;
    setOuttoken(value: string): GetQuotesStreamUpdate;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetQuotesStreamUpdate;
    getInamount(): number;
    setInamount(value: number): GetQuotesStreamUpdate;
    getOutamount(): number;
    setOutamount(value: number): GetQuotesStreamUpdate;
    getProject(): Project;
    setProject(value: Project): GetQuotesStreamUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesStreamUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesStreamUpdate): GetQuotesStreamUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesStreamUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesStreamUpdate;
    static deserializeBinaryFromReader(message: GetQuotesStreamUpdate, reader: jspb.BinaryReader): GetQuotesStreamUpdate;
}

export namespace GetQuotesStreamUpdate {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        project: Project,
    }
}

export class GetSwapsStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetSwapsStreamRequest;
    addProjects(value: Project, index?: number): Project;
    clearPoolsList(): void;
    getPoolsList(): Array<string>;
    setPoolsList(value: Array<string>): GetSwapsStreamRequest;
    addPools(value: string, index?: number): string;
    getIncludefailed(): boolean;
    setIncludefailed(value: boolean): GetSwapsStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSwapsStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSwapsStreamRequest): GetSwapsStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSwapsStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSwapsStreamRequest;
    static deserializeBinaryFromReader(message: GetSwapsStreamRequest, reader: jspb.BinaryReader): GetSwapsStreamRequest;
}

export namespace GetSwapsStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        poolsList: Array<string>,
        includefailed: boolean,
    }
}

export class GetSwapsStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetSwapsStreamResponse;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): GetSwapsStreamUpdate | undefined;
    setSwap(value?: GetSwapsStreamUpdate): GetSwapsStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSwapsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSwapsStreamResponse): GetSwapsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSwapsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSwapsStreamResponse;
    static deserializeBinaryFromReader(message: GetSwapsStreamResponse, reader: jspb.BinaryReader): GetSwapsStreamResponse;
}

export namespace GetSwapsStreamResponse {
    export type AsObject = {
        slot: number,
        swap?: GetSwapsStreamUpdate.AsObject,
    }
}

export class GetSwapsStreamUpdate extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): GetSwapsStreamUpdate;
    getProject(): Project;
    setProject(value: Project): GetSwapsStreamUpdate;
    getPooladdress(): string;
    setPooladdress(value: string): GetSwapsStreamUpdate;
    getIntoken(): string;
    setIntoken(value: string): GetSwapsStreamUpdate;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetSwapsStreamUpdate;
    getOuttoken(): string;
    setOuttoken(value: string): GetSwapsStreamUpdate;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetSwapsStreamUpdate;
    getInamount(): number;
    setInamount(value: number): GetSwapsStreamUpdate;
    getOutamountmin(): number;
    setOutamountmin(value: number): GetSwapsStreamUpdate;
    getSourceaccount(): string;
    setSourceaccount(value: string): GetSwapsStreamUpdate;
    getDestinationaccount(): string;
    setDestinationaccount(value: string): GetSwapsStreamUpdate;
    getOwneraccount(): string;
    setOwneraccount(value: string): GetSwapsStreamUpdate;
    getSignature(): string;
    setSignature(value: string): GetSwapsStreamUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSwapsStreamUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: GetSwapsStreamUpdate): GetSwapsStreamUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSwapsStreamUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSwapsStreamUpdate;
    static deserializeBinaryFromReader(message: GetSwapsStreamUpdate, reader: jspb.BinaryReader): GetSwapsStreamUpdate;
}

export namespace GetSwapsStreamUpdate {
    export type AsObject = {
        success: boolean,
        project: Project,
        pooladdress: string,
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamountmin: number,
        sourceaccount: string,
        destinationaccount: string,
        owneraccount: string,
        signature: string,
    }
}

export class TokenPair extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): TokenPair;
    getOuttoken(): string;
    setOuttoken(value: string): TokenPair;
    getInamount(): number;
    setInamount(value: number): TokenPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenPair.AsObject;
    static toObject(includeInstance: boolean, msg: TokenPair): TokenPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenPair;
    static deserializeBinaryFromReader(message: TokenPair, reader: jspb.BinaryReader): TokenPair;
}

export namespace TokenPair {
    export type AsObject = {
        intoken: string,
        outtoken: string,
        inamount: number,
    }
}

export class GetPriceRequest extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): GetPriceRequest;
    addTokens(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPriceRequest): GetPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPriceRequest;
    static deserializeBinaryFromReader(message: GetPriceRequest, reader: jspb.BinaryReader): GetPriceRequest;
}

export namespace GetPriceRequest {
    export type AsObject = {
        tokensList: Array<string>,
    }
}

export class GetPriceResponse extends jspb.Message { 
    clearTokenpricesList(): void;
    getTokenpricesList(): Array<TokenPrice>;
    setTokenpricesList(value: Array<TokenPrice>): GetPriceResponse;
    addTokenprices(value?: TokenPrice, index?: number): TokenPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPriceResponse): GetPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPriceResponse;
    static deserializeBinaryFromReader(message: GetPriceResponse, reader: jspb.BinaryReader): GetPriceResponse;
}

export namespace GetPriceResponse {
    export type AsObject = {
        tokenpricesList: Array<TokenPrice.AsObject>,
    }
}

export class TokenPrice extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenPrice;
    getTokenaddress(): string;
    setTokenaddress(value: string): TokenPrice;
    getProject(): Project;
    setProject(value: Project): TokenPrice;
    getBuy(): number;
    setBuy(value: number): TokenPrice;
    getBuysize(): number;
    setBuysize(value: number): TokenPrice;
    getSell(): number;
    setSell(value: number): TokenPrice;
    getSellsize(): number;
    setSellsize(value: number): TokenPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenPrice.AsObject;
    static toObject(includeInstance: boolean, msg: TokenPrice): TokenPrice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenPrice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenPrice;
    static deserializeBinaryFromReader(message: TokenPrice, reader: jspb.BinaryReader): TokenPrice;
}

export namespace TokenPrice {
    export type AsObject = {
        token: string,
        tokenaddress: string,
        project: Project,
        buy: number,
        buysize: number,
        sell: number,
        sellsize: number,
    }
}

export class GetPoolReservesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetPoolReservesStreamResponse;

    hasReserves(): boolean;
    clearReserves(): void;
    getReserves(): PoolReserves | undefined;
    setReserves(value?: PoolReserves): GetPoolReservesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolReservesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolReservesStreamResponse): GetPoolReservesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolReservesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolReservesStreamResponse;
    static deserializeBinaryFromReader(message: GetPoolReservesStreamResponse, reader: jspb.BinaryReader): GetPoolReservesStreamResponse;
}

export namespace GetPoolReservesStreamResponse {
    export type AsObject = {
        slot: number,
        reserves?: PoolReserves.AsObject,
    }
}

export class PoolReserves extends jspb.Message { 
    getToken1reserves(): string;
    setToken1reserves(value: string): PoolReserves;
    getToken1address(): string;
    setToken1address(value: string): PoolReserves;
    getToken2reserves(): string;
    setToken2reserves(value: string): PoolReserves;
    getToken2address(): string;
    setToken2address(value: string): PoolReserves;
    getPooladdress(): string;
    setPooladdress(value: string): PoolReserves;
    getProject(): Project;
    setProject(value: Project): PoolReserves;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PoolReserves.AsObject;
    static toObject(includeInstance: boolean, msg: PoolReserves): PoolReserves.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PoolReserves, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PoolReserves;
    static deserializeBinaryFromReader(message: PoolReserves, reader: jspb.BinaryReader): PoolReserves;
}

export namespace PoolReserves {
    export type AsObject = {
        token1reserves: string,
        token1address: string,
        token2reserves: string,
        token2address: string,
        pooladdress: string,
        project: Project,
    }
}

export class GetPoolReservesStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetPoolReservesStreamRequest;
    addProjects(value: Project, index?: number): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolReservesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolReservesStreamRequest): GetPoolReservesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolReservesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolReservesStreamRequest;
    static deserializeBinaryFromReader(message: GetPoolReservesStreamRequest, reader: jspb.BinaryReader): GetPoolReservesStreamRequest;
}

export namespace GetPoolReservesStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
    }
}

export class GetPricesStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetPricesStreamRequest;
    addProjects(value: Project, index?: number): Project;
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): GetPricesStreamRequest;
    addTokens(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricesStreamRequest): GetPricesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricesStreamRequest;
    static deserializeBinaryFromReader(message: GetPricesStreamRequest, reader: jspb.BinaryReader): GetPricesStreamRequest;
}

export namespace GetPricesStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        tokensList: Array<string>,
    }
}

export class GetPricesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetPricesStreamResponse;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): TokenPrice | undefined;
    setPrice(value?: TokenPrice): GetPricesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricesStreamResponse): GetPricesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricesStreamResponse;
    static deserializeBinaryFromReader(message: GetPricesStreamResponse, reader: jspb.BinaryReader): GetPricesStreamResponse;
}

export namespace GetPricesStreamResponse {
    export type AsObject = {
        slot: number,
        price?: TokenPrice.AsObject,
    }
}

export enum MarketStatus {
    MS_UNKNOWN = 0,
    MS_ONLINE = 1,
}

export enum Side {
    S_UNKNOWN = 0,
    S_BID = 1,
    S_ASK = 2,
}

export enum OrderType {
    OT_MARKET = 0,
    OT_LIMIT = 1,
    OT_IOC = 2,
    OT_POST = 3,
}

export enum OrderStatus {
    OS_UNKNOWN = 0,
    OS_OPEN = 1,
    OS_PARTIAL_FILL = 2,
    OS_CANCELLED = 3,
    OS_FILLED = 4,
}

export enum Direction {
    D_ASCENDING = 0,
    D_DESCENDING = 1,
}

export enum SubmitStrategy {
    P_UKNOWN = 0,
    P_SUBMIT_ALL = 1,
    P_ABORT_ON_FIRST_ERROR = 2,
    P_WAIT_FOR_CONFIRMATION = 3,
}

export enum Step {
    STEP0 = 0,
    STEP1 = 1,
    STEP2 = 2,
    STEP3 = 3,
}

export enum Project {
    P_UNKNOWN = 0,
    P_ALL = 1,
    P_JUPITER = 2,
    P_RAYDIUM = 3,
    P_SERUM = 4,
    P_OPENBOOK = 5,
}
