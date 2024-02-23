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
  export interface GetRateLimitResponse {
    accountID: string;
    tier: string;
    interval: string;
    intervalNum: string;
    limit: string;
    count: string;
    reset: string;
  }
}
export type Type = $.api.GetRateLimitResponse;

export function getDefaultValue(): $.api.GetRateLimitResponse {
  return {
    accountID: "",
    tier: "",
    interval: "",
    intervalNum: "0",
    limit: "0",
    count: "0",
    reset: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetRateLimitResponse>): $.api.GetRateLimitResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRateLimitResponse): unknown {
  const result: any = {};
  if (value.accountID !== undefined) result.accountID = tsValueToJsonValueFns.string(value.accountID);
  if (value.tier !== undefined) result.tier = tsValueToJsonValueFns.string(value.tier);
  if (value.interval !== undefined) result.interval = tsValueToJsonValueFns.string(value.interval);
  if (value.intervalNum !== undefined) result.intervalNum = tsValueToJsonValueFns.uint64(value.intervalNum);
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint64(value.limit);
  if (value.count !== undefined) result.count = tsValueToJsonValueFns.uint64(value.count);
  if (value.reset !== undefined) result.reset = tsValueToJsonValueFns.uint64(value.reset);
  return result;
}

export function decodeJson(value: any): $.api.GetRateLimitResponse {
  const result = getDefaultValue();
  if (value.accountID !== undefined) result.accountID = jsonValueToTsValueFns.string(value.accountID);
  if (value.tier !== undefined) result.tier = jsonValueToTsValueFns.string(value.tier);
  if (value.interval !== undefined) result.interval = jsonValueToTsValueFns.string(value.interval);
  if (value.intervalNum !== undefined) result.intervalNum = jsonValueToTsValueFns.uint64(value.intervalNum);
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint64(value.limit);
  if (value.count !== undefined) result.count = jsonValueToTsValueFns.uint64(value.count);
  if (value.reset !== undefined) result.reset = jsonValueToTsValueFns.uint64(value.reset);
  return result;
}

export function encodeBinary(value: $.api.GetRateLimitResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.accountID !== undefined) {
    const tsValue = value.accountID;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tier !== undefined) {
    const tsValue = value.tier;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.interval !== undefined) {
    const tsValue = value.interval;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.intervalNum !== undefined) {
    const tsValue = value.intervalNum;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [5, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.count !== undefined) {
    const tsValue = value.count;
    result.push(
      [6, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.reset !== undefined) {
    const tsValue = value.reset;
    result.push(
      [7, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRateLimitResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountID = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tier = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.interval = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.intervalNum = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.limit = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.count = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.reset = value;
  }
  return result;
}
