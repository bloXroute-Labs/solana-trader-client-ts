import {
  Type as OrderbookItem,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./OrderbookItem.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type MarketDepthTick = {
    prevSlot: string;
    asks: OrderbookItem[];
    bids: OrderbookItem[];
  }
}
export type Type = $.api.MarketDepthTick;

export function getDefaultValue(): $.api.MarketDepthTick {
  return {
    prevSlot: "0",
    asks: [],
    bids: [],
  };
}

export function createValue(partialValue: Partial<$.api.MarketDepthTick>): $.api.MarketDepthTick {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.MarketDepthTick): unknown {
  const result: any = {};
  if (value.prevSlot !== undefined) result.prevSlot = tsValueToJsonValueFns.int64(value.prevSlot);
  result.asks = value.asks.map(value => encodeJson_1(value));
  result.bids = value.bids.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.MarketDepthTick {
  const result = getDefaultValue();
  if (value.prevSlot !== undefined) result.prevSlot = jsonValueToTsValueFns.int64(value.prevSlot);
  result.asks = value.asks?.map((value: any) => decodeJson_1(value)) ?? [];
  result.bids = value.bids?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.MarketDepthTick): Uint8Array {
  const result: WireMessage = [];
  if (value.prevSlot !== undefined) {
    const tsValue = value.prevSlot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  for (const tsValue of value.asks) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.bids) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.MarketDepthTick {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.prevSlot = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.asks = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.bids = value as any;
  }
  return result;
}
