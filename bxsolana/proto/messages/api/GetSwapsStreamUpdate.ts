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
    baseToken: string;
    baseTokenAddress: string;
    quoteToken: string;
    quoteTokenAddress: string;
    inAmount: string;
    outAmountMin: string;
    sourceAccount: string;
    destinationAccount: string;
    signature: string;
  }
}
export type Type = $.api.GetSwapsStreamUpdate;

export function getDefaultValue(): $.api.GetSwapsStreamUpdate {
  return {
    success: false,
    project: "P_UNKNOWN",
    poolAddress: "",
    baseToken: "",
    baseTokenAddress: "",
    quoteToken: "",
    quoteTokenAddress: "",
    inAmount: "0",
    outAmountMin: "0",
    sourceAccount: "",
    destinationAccount: "",
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
  if (value.baseToken !== undefined) result.baseToken = tsValueToJsonValueFns.string(value.baseToken);
  if (value.baseTokenAddress !== undefined) result.baseTokenAddress = tsValueToJsonValueFns.string(value.baseTokenAddress);
  if (value.quoteToken !== undefined) result.quoteToken = tsValueToJsonValueFns.string(value.quoteToken);
  if (value.quoteTokenAddress !== undefined) result.quoteTokenAddress = tsValueToJsonValueFns.string(value.quoteTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.uint64(value.inAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = tsValueToJsonValueFns.uint64(value.outAmountMin);
  if (value.sourceAccount !== undefined) result.sourceAccount = tsValueToJsonValueFns.string(value.sourceAccount);
  if (value.destinationAccount !== undefined) result.destinationAccount = tsValueToJsonValueFns.string(value.destinationAccount);
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.string(value.signature);
  return result;
}

export function decodeJson(value: any): $.api.GetSwapsStreamUpdate {
  const result = getDefaultValue();
  if (value.success !== undefined) result.success = jsonValueToTsValueFns.bool(value.success);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.poolAddress !== undefined) result.poolAddress = jsonValueToTsValueFns.string(value.poolAddress);
  if (value.baseToken !== undefined) result.baseToken = jsonValueToTsValueFns.string(value.baseToken);
  if (value.baseTokenAddress !== undefined) result.baseTokenAddress = jsonValueToTsValueFns.string(value.baseTokenAddress);
  if (value.quoteToken !== undefined) result.quoteToken = jsonValueToTsValueFns.string(value.quoteToken);
  if (value.quoteTokenAddress !== undefined) result.quoteTokenAddress = jsonValueToTsValueFns.string(value.quoteTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.uint64(value.inAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = jsonValueToTsValueFns.uint64(value.outAmountMin);
  if (value.sourceAccount !== undefined) result.sourceAccount = jsonValueToTsValueFns.string(value.sourceAccount);
  if (value.destinationAccount !== undefined) result.destinationAccount = jsonValueToTsValueFns.string(value.destinationAccount);
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
  if (value.baseToken !== undefined) {
    const tsValue = value.baseToken;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseTokenAddress !== undefined) {
    const tsValue = value.baseTokenAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quoteToken !== undefined) {
    const tsValue = value.quoteToken;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quoteTokenAddress !== undefined) {
    const tsValue = value.quoteTokenAddress;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [8, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.outAmountMin !== undefined) {
    const tsValue = value.outAmountMin;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.sourceAccount !== undefined) {
    const tsValue = value.sourceAccount;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.destinationAccount !== undefined) {
    const tsValue = value.destinationAccount;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
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
    result.baseToken = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteToken = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.outAmountMin = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.sourceAccount = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.destinationAccount = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.signature = value;
  }
  return result;
}
