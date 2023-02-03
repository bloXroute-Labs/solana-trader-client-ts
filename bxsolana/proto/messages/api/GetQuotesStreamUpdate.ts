import {
  Type as Project,
  name2num,
  num2name,
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
  export interface GetQuotesStreamUpdate {
    inToken: string;
    inTokenAddress: string;
    outToken: string;
    outTokenAddress: string;
    inAmount: number;
    outAmount: number;
    project: Project;
  }
}
export type Type = $.api.GetQuotesStreamUpdate;

export function getDefaultValue(): $.api.GetQuotesStreamUpdate {
  return {
    inToken: "",
    inTokenAddress: "",
    outToken: "",
    outTokenAddress: "",
    inAmount: 0,
    outAmount: 0,
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.GetQuotesStreamUpdate>): $.api.GetQuotesStreamUpdate {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetQuotesStreamUpdate): unknown {
  const result: any = {};
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = tsValueToJsonValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = tsValueToJsonValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.GetQuotesStreamUpdate {
  const result = getDefaultValue();
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = jsonValueToTsValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = jsonValueToTsValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.GetQuotesStreamUpdate): Uint8Array {
  const result: WireMessage = [];
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inTokenAddress !== undefined) {
    const tsValue = value.inTokenAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outTokenAddress !== undefined) {
    const tsValue = value.outTokenAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [7, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetQuotesStreamUpdate {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outToken = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
