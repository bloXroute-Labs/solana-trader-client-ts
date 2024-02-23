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
  export interface DriftMarket {
    market: string;
    status: string;
    address: string;
    baseMint: string;
    quotedMint: string;
    baseDecimals: string;
    quoteDecimals: string;
    metadata: Map<string, string>;
  }
}
export type Type = $.api.DriftMarket;

export function getDefaultValue(): $.api.DriftMarket {
  return {
    market: "",
    status: "",
    address: "",
    baseMint: "",
    quotedMint: "",
    baseDecimals: "0",
    quoteDecimals: "0",
    metadata: new Map(),
  };
}

export function createValue(partialValue: Partial<$.api.DriftMarket>): $.api.DriftMarket {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.DriftMarket): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.string(value.status);
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.baseMint !== undefined) result.baseMint = tsValueToJsonValueFns.string(value.baseMint);
  if (value.quotedMint !== undefined) result.quotedMint = tsValueToJsonValueFns.string(value.quotedMint);
  if (value.baseDecimals !== undefined) result.baseDecimals = tsValueToJsonValueFns.int64(value.baseDecimals);
  if (value.quoteDecimals !== undefined) result.quoteDecimals = tsValueToJsonValueFns.int64(value.quoteDecimals);
  if (value.metadata !== undefined) result.metadata = Object.fromEntries([...value.metadata.entries()].map(([key, value]) => [key, tsValueToJsonValueFns.string(value)]));
  return result;
}

export function decodeJson(value: any): $.api.DriftMarket {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.string(value.status);
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.baseMint !== undefined) result.baseMint = jsonValueToTsValueFns.string(value.baseMint);
  if (value.quotedMint !== undefined) result.quotedMint = jsonValueToTsValueFns.string(value.quotedMint);
  if (value.baseDecimals !== undefined) result.baseDecimals = jsonValueToTsValueFns.int64(value.baseDecimals);
  if (value.quoteDecimals !== undefined) result.quoteDecimals = jsonValueToTsValueFns.int64(value.quoteDecimals);
  if (value.metadata !== undefined) result.metadata = Object.fromEntries([...value.metadata.entries()].map(([key, value]) => [key, jsonValueToTsValueFns.string(value)]));
  return result;
}

export function encodeBinary(value: $.api.DriftMarket): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.address !== undefined) {
    const tsValue = value.address;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseMint !== undefined) {
    const tsValue = value.baseMint;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quotedMint !== undefined) {
    const tsValue = value.quotedMint;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseDecimals !== undefined) {
    const tsValue = value.baseDecimals;
    result.push(
      [6, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.quoteDecimals !== undefined) {
    const tsValue = value.quoteDecimals;
    result.push(
      [7, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  {
    const fields = value.metadata.entries();
    for (const [key, value] of fields) {
      result.push(
        [8, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, tsValueToWireValueFns.string(value)]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.DriftMarket {
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
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.address = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseMint = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quotedMint = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.baseDecimals = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.quoteDecimals = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), wireValueToTsValueFns.string(value)] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.metadata = new Map(value as any);
  }
  return result;
}
