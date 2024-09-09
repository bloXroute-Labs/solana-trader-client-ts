import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage";
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
  export interface PostSubmitRequest {
    transaction?: TransactionMessage;
    skipPreFlight: boolean;
    frontRunningProtection?: boolean;
    tip?: string;
    useStakedRPCs?: boolean;
    fastBestEffort?: boolean;
  }
}
export type Type = $.api.PostSubmitRequest;

export function getDefaultValue(): $.api.PostSubmitRequest {
  return {
    transaction: undefined,
    skipPreFlight: false,
    frontRunningProtection: false,
    tip: "0",
    useStakedRPCs: false,
    fastBestEffort: false,
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitRequest>): $.api.PostSubmitRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitRequest): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = encodeJson_1(value.transaction);
  if (value.skipPreFlight !== undefined) result.skipPreFlight = tsValueToJsonValueFns.bool(value.skipPreFlight);
  if (value.frontRunningProtection !== undefined) result.frontRunningProtection = tsValueToJsonValueFns.bool(value.frontRunningProtection);
  if (value.tip !== undefined) result.tip = tsValueToJsonValueFns.uint64(value.tip);
  if (value.useStakedRPCs !== undefined) result.useStakedRPCs = tsValueToJsonValueFns.bool(value.useStakedRPCs);
  if (value.fastBestEffort !== undefined) result.fastBestEffort = tsValueToJsonValueFns.bool(value.fastBestEffort);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitRequest {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = decodeJson_1(value.transaction);
  if (value.skipPreFlight !== undefined) result.skipPreFlight = jsonValueToTsValueFns.bool(value.skipPreFlight);
  if (value.frontRunningProtection !== undefined) result.frontRunningProtection = jsonValueToTsValueFns.bool(value.frontRunningProtection);
  if (value.tip !== undefined) result.tip = jsonValueToTsValueFns.uint64(value.tip);
  if (value.useStakedRPCs !== undefined) result.useStakedRPCs = jsonValueToTsValueFns.bool(value.useStakedRPCs);
  if (value.fastBestEffort !== undefined) result.fastBestEffort = jsonValueToTsValueFns.bool(value.fastBestEffort);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.skipPreFlight !== undefined) {
    const tsValue = value.skipPreFlight;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.frontRunningProtection !== undefined) {
    const tsValue = value.frontRunningProtection;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.tip !== undefined) {
    const tsValue = value.tip;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.useStakedRPCs !== undefined) {
    const tsValue = value.useStakedRPCs;
    result.push(
      [6, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.fastBestEffort !== undefined) {
    const tsValue = value.fastBestEffort;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.transaction = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.skipPreFlight = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.frontRunningProtection = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tip = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.useStakedRPCs = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.fastBestEffort = value;
  }
  return result;
}
