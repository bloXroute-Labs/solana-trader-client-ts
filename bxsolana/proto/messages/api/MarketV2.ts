import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
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
  export interface MarketV2 {
    market: string;
    address: string;
    baseMint: string;
    quotedMint: string;
    baseDecimals: string;
    quoteDecimals: string;
  }
}
export type Type = $.api.MarketV2;

export function getDefaultValue(): $.api.MarketV2 {
  return {
    market: "",
    address: "",
    baseMint: "",
    quotedMint: "",
    baseDecimals: "0",
    quoteDecimals: "0",
  };
}

export function createValue(partialValue: Partial<$.api.MarketV2>): $.api.MarketV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.MarketV2): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.baseMint !== undefined) result.baseMint = tsValueToJsonValueFns.string(value.baseMint);
  if (value.quotedMint !== undefined) result.quotedMint = tsValueToJsonValueFns.string(value.quotedMint);
  if (value.baseDecimals !== undefined) result.baseDecimals = tsValueToJsonValueFns.int64(value.baseDecimals);
  if (value.quoteDecimals !== undefined) result.quoteDecimals = tsValueToJsonValueFns.int64(value.quoteDecimals);
  return result;
}

export function decodeJson(value: any): $.api.MarketV2 {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.baseMint !== undefined) result.baseMint = jsonValueToTsValueFns.string(value.baseMint);
  if (value.quotedMint !== undefined) result.quotedMint = jsonValueToTsValueFns.string(value.quotedMint);
  if (value.baseDecimals !== undefined) result.baseDecimals = jsonValueToTsValueFns.int64(value.baseDecimals);
  if (value.quoteDecimals !== undefined) result.quoteDecimals = jsonValueToTsValueFns.int64(value.quoteDecimals);
  return result;
}

export function encodeBinary(value: $.api.MarketV2): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
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
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.MarketV2 {
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
  return result;
}
