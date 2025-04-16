import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Timestamp";
import {
  Type as SubmitProtection,
  name2num,
  num2name,
} from "./SubmitProtection";
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
  export interface PostSubmitRequest {
    transaction?: TransactionMessage;
    skipPreFlight: boolean;
    frontRunningProtection?: boolean;
    tip?: string;
    useStakedRPCs?: boolean;
    fastBestEffort?: boolean;
    allowBackRun?: boolean;
    revenueAddress?: string;
    sniping?: boolean;
    timestamp?: Timestamp;
    submitProtection?: SubmitProtection;
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
    allowBackRun: false,
    revenueAddress: "",
    sniping: false,
    timestamp: undefined,
    submitProtection: "SP_LOW",
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
  if (value.allowBackRun !== undefined) result.allowBackRun = tsValueToJsonValueFns.bool(value.allowBackRun);
  if (value.revenueAddress !== undefined) result.revenueAddress = tsValueToJsonValueFns.string(value.revenueAddress);
  if (value.sniping !== undefined) result.sniping = tsValueToJsonValueFns.bool(value.sniping);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_2(value.timestamp);
  if (value.submitProtection !== undefined) result.submitProtection = tsValueToJsonValueFns.enum(value.submitProtection);
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
  if (value.allowBackRun !== undefined) result.allowBackRun = jsonValueToTsValueFns.bool(value.allowBackRun);
  if (value.revenueAddress !== undefined) result.revenueAddress = jsonValueToTsValueFns.string(value.revenueAddress);
  if (value.sniping !== undefined) result.sniping = jsonValueToTsValueFns.bool(value.sniping);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_2(value.timestamp);
  if (value.submitProtection !== undefined) result.submitProtection = jsonValueToTsValueFns.enum(value.submitProtection) as SubmitProtection;
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
  if (value.allowBackRun !== undefined) {
    const tsValue = value.allowBackRun;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.revenueAddress !== undefined) {
    const tsValue = value.revenueAddress;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.sniping !== undefined) {
    const tsValue = value.sniping;
    result.push(
      [10, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.submitProtection !== undefined) {
    const tsValue = value.submitProtection;
    result.push(
      [12, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
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
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.allowBackRun = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.revenueAddress = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.sniping = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.submitProtection = value;
  }
  return result;
}
