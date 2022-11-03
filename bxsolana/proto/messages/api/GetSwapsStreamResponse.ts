import {
  Type as Project,
  name2num,
  num2name,
} from "./Project.js";
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
  default as Long,
} from "../../runtime/Long.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type GetSwapsStreamResponse = {
    project: Project;
    slot: string;
    market: string;
    inAmount: string;
    outAmount: string;
  }
}
export type Type = $.api.GetSwapsStreamResponse;

export function getDefaultValue(): $.api.GetSwapsStreamResponse {
  return {
    project: "P_UNKNOWN",
    slot: "0",
    market: "",
    inAmount: "0",
    outAmount: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetSwapsStreamResponse>): $.api.GetSwapsStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetSwapsStreamResponse): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.uint64(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.uint64(value.outAmount);
  return result;
}

export function decodeJson(value: any): $.api.GetSwapsStreamResponse {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.uint64(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.uint64(value.outAmount);
  return result;
}

export function encodeBinary(value: $.api.GetSwapsStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [5, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetSwapsStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  return result;
}
