import {
  Type as MarketStatus,
  name2num,
  num2name,
} from "./MarketStatus.js";
import {
  Type as MarketProgram,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./MarketProgram.js";
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
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type Market = {
    market: string;
    status: MarketStatus;
    address: string;
    baseMint: string;
    quotedMint: string;
    baseDecimals: string;
    quoteDecimals: string;
    program: MarketProgram;
  }
}
export type Type = $.api.Market;

export function getDefaultValue(): $.api.Market {
  return {
    market: "",
    status: "MS_UNKNOWN",
    address: "",
    baseMint: "",
    quotedMint: "",
    baseDecimals: "0",
    quoteDecimals: "0",
    program: "MP_SERUM",
  };
}

export function createValue(partialValue: Partial<$.api.Market>): $.api.Market {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Market): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.baseMint !== undefined) result.baseMint = tsValueToJsonValueFns.string(value.baseMint);
  if (value.quotedMint !== undefined) result.quotedMint = tsValueToJsonValueFns.string(value.quotedMint);
  if (value.baseDecimals !== undefined) result.baseDecimals = tsValueToJsonValueFns.int64(value.baseDecimals);
  if (value.quoteDecimals !== undefined) result.quoteDecimals = tsValueToJsonValueFns.int64(value.quoteDecimals);
  if (value.program !== undefined) result.program = tsValueToJsonValueFns.enum(value.program);
  return result;
}

export function decodeJson(value: any): $.api.Market {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as MarketStatus;
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.baseMint !== undefined) result.baseMint = jsonValueToTsValueFns.string(value.baseMint);
  if (value.quotedMint !== undefined) result.quotedMint = jsonValueToTsValueFns.string(value.quotedMint);
  if (value.baseDecimals !== undefined) result.baseDecimals = jsonValueToTsValueFns.int64(value.baseDecimals);
  if (value.quoteDecimals !== undefined) result.quoteDecimals = jsonValueToTsValueFns.int64(value.quoteDecimals);
  if (value.program !== undefined) result.program = jsonValueToTsValueFns.enum(value.program) as MarketProgram;
  return result;
}

export function encodeBinary(value: $.api.Market): Uint8Array {
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
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
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
  if (value.program !== undefined) {
    const tsValue = value.program;
    result.push(
      [8, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Market {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
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
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.program = value;
  }
  return result;
}
