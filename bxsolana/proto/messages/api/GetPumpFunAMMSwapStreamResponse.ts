import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
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
  export interface GetPumpFunAMMSwapStreamResponse {
    pool: string;
    user: string;
    isBuy: boolean;
    quoteMint: string;
    baseMint: string;
    inAmount: number;
    outAmount: number;
    txHash: string;
    timestamp?: Timestamp;
    slot: string;
  }
}
export type Type = $.api.GetPumpFunAMMSwapStreamResponse;

export function getDefaultValue(): $.api.GetPumpFunAMMSwapStreamResponse {
  return {
    pool: "",
    user: "",
    isBuy: false,
    quoteMint: "",
    baseMint: "",
    inAmount: 0,
    outAmount: 0,
    txHash: "",
    timestamp: undefined,
    slot: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunAMMSwapStreamResponse>): $.api.GetPumpFunAMMSwapStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunAMMSwapStreamResponse): unknown {
  const result: any = {};
  if (value.pool !== undefined) result.pool = tsValueToJsonValueFns.string(value.pool);
  if (value.user !== undefined) result.user = tsValueToJsonValueFns.string(value.user);
  if (value.isBuy !== undefined) result.isBuy = tsValueToJsonValueFns.bool(value.isBuy);
  if (value.quoteMint !== undefined) result.quoteMint = tsValueToJsonValueFns.string(value.quoteMint);
  if (value.baseMint !== undefined) result.baseMint = tsValueToJsonValueFns.string(value.baseMint);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.txHash !== undefined) result.txHash = tsValueToJsonValueFns.string(value.txHash);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunAMMSwapStreamResponse {
  const result = getDefaultValue();
  if (value.pool !== undefined) result.pool = jsonValueToTsValueFns.string(value.pool);
  if (value.user !== undefined) result.user = jsonValueToTsValueFns.string(value.user);
  if (value.isBuy !== undefined) result.isBuy = jsonValueToTsValueFns.bool(value.isBuy);
  if (value.quoteMint !== undefined) result.quoteMint = jsonValueToTsValueFns.string(value.quoteMint);
  if (value.baseMint !== undefined) result.baseMint = jsonValueToTsValueFns.string(value.baseMint);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.txHash !== undefined) result.txHash = jsonValueToTsValueFns.string(value.txHash);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunAMMSwapStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.pool !== undefined) {
    const tsValue = value.pool;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.user !== undefined) {
    const tsValue = value.user;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isBuy !== undefined) {
    const tsValue = value.isBuy;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.quoteMint !== undefined) {
    const tsValue = value.quoteMint;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseMint !== undefined) {
    const tsValue = value.baseMint;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.txHash !== undefined) {
    const tsValue = value.txHash;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [10, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunAMMSwapStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pool = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.user = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBuy = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteMint = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseMint = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.txHash = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  return result;
}
