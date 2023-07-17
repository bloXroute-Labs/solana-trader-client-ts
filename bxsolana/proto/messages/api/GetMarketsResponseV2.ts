import {
  Type as MarketV2,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./MarketV2";
import {
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
  export interface GetMarketsResponseV2 {
    markets: Map<string, MarketV2>;
  }
}
export type Type = $.api.GetMarketsResponseV2;

export function getDefaultValue(): $.api.GetMarketsResponseV2 {
  return {
    markets: new Map(),
  };
}

export function createValue(partialValue: Partial<$.api.GetMarketsResponseV2>): $.api.GetMarketsResponseV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetMarketsResponseV2): unknown {
  const result: any = {};
  if (value.markets !== undefined) result.markets = Object.fromEntries([...value.markets.entries()].map(([key, value]) => [key, encodeJson_1(value)]));
  return result;
}

export function decodeJson(value: any): $.api.GetMarketsResponseV2 {
  const result = getDefaultValue();
  if (value.markets !== undefined) result.markets = Object.fromEntries([...value.markets.entries()].map(([key, value]) => [key, decodeJson_1(value)]));
  return result;
}

export function encodeBinary(value: $.api.GetMarketsResponseV2): Uint8Array {
  const result: WireMessage = [];
  {
    const fields = value.markets.entries();
    for (const [key, value] of fields) {
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetMarketsResponseV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_1(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.markets = new Map(value as any);
  }
  return result;
}
