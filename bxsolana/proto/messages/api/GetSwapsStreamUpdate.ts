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
  export type GetSwapsStreamUpdate = {
    success: boolean;
    project: Project;
    poolAddress: string;
    inToken: string;
    inTokenAddress: string;
    inAmount: string;
    outAmount: string;
    outToken: string;
    outTokenAddress: string;
    signature: string;
  }
}
export type Type = $.api.GetSwapsStreamUpdate;

export function getDefaultValue(): $.api.GetSwapsStreamUpdate {
  return {
    success: false,
    project: "P_UNKNOWN",
    poolAddress: "",
    inToken: "",
    inTokenAddress: "",
    inAmount: "0",
    outAmount: "0",
    outToken: "",
    outTokenAddress: "",
    signature: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetSwapsStreamUpdate>): $.api.GetSwapsStreamUpdate {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetSwapsStreamUpdate): unknown {
  const result: any = {};
  if (value.success !== undefined) result.success = tsValueToJsonValueFns.bool(value.success);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.poolAddress !== undefined) result.poolAddress = tsValueToJsonValueFns.string(value.poolAddress);
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = tsValueToJsonValueFns.string(value.inTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.uint64(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.uint64(value.outAmount);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = tsValueToJsonValueFns.string(value.outTokenAddress);
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.string(value.signature);
  return result;
}

export function decodeJson(value: any): $.api.GetSwapsStreamUpdate {
  const result = getDefaultValue();
  if (value.success !== undefined) result.success = jsonValueToTsValueFns.bool(value.success);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.poolAddress !== undefined) result.poolAddress = jsonValueToTsValueFns.string(value.poolAddress);
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = jsonValueToTsValueFns.string(value.inTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.uint64(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.uint64(value.outAmount);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = jsonValueToTsValueFns.string(value.outTokenAddress);
  if (value.signature !== undefined) result.signature = jsonValueToTsValueFns.string(value.signature);
  return result;
}

export function encodeBinary(value: $.api.GetSwapsStreamUpdate): Uint8Array {
  const result: WireMessage = [];
  if (value.success !== undefined) {
    const tsValue = value.success;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.poolAddress !== undefined) {
    const tsValue = value.poolAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inTokenAddress !== undefined) {
    const tsValue = value.inTokenAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [6, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [7, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outTokenAddress !== undefined) {
    const tsValue = value.outTokenAddress;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetSwapsStreamUpdate {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.success = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.poolAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outToken = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.signature = value;
  }
  return result;
}
