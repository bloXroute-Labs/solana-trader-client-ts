import {
  Type as MarketStatus,
  name2num,
  num2name,
} from "./MarketStatus";
import {
  Type as Project,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Project";
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
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface Market {
    market: string;
    status: MarketStatus;
    address: string;
    baseMint: string;
    quotedMint: string;
    baseDecimals: string;
    quoteDecimals: string;
    project: Project;
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
    project: "P_UNKNOWN",
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
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
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
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
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
  if (value.project !== undefined) {
    const tsValue = value.project;
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
    result.project = value;
  }
  return result;
}
