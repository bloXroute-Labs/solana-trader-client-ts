import {
  Type as MarketDepthItem,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./MarketDepthItem";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetMarketDepthResponse {
    market: string;
    marketAddress: string;
    bids: MarketDepthItem[];
    asks: MarketDepthItem[];
  }
}
export type Type = $.api.GetMarketDepthResponse;

export function getDefaultValue(): $.api.GetMarketDepthResponse {
  return {
    market: "",
    marketAddress: "",
    bids: [],
    asks: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetMarketDepthResponse>): $.api.GetMarketDepthResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetMarketDepthResponse): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.marketAddress !== undefined) result.marketAddress = tsValueToJsonValueFns.string(value.marketAddress);
  result.bids = value.bids.map(value => encodeJson_1(value));
  result.asks = value.asks.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetMarketDepthResponse {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.marketAddress !== undefined) result.marketAddress = jsonValueToTsValueFns.string(value.marketAddress);
  result.bids = value.bids?.map((value: any) => decodeJson_1(value)) ?? [];
  result.asks = value.asks?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetMarketDepthResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketAddress !== undefined) {
    const tsValue = value.marketAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.bids) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.asks) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetMarketDepthResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketAddress = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.bids = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.asks = value as any;
  }
  return result;
}
