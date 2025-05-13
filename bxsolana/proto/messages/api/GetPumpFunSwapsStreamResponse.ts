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
  export interface GetPumpFunSwapsStreamResponse {
    slot: string;
    txnHash: string;
    mintAddress: string;
    userAddress: string;
    userTokenAccountAddress: string;
    bondingCurveAddress: string;
    tokenVaultAddress: string;
    solAmount: string;
    tokenAmount: string;
    isBuy: boolean;
    virtualSolReserves: string;
    virtualTokenReserves: string;
    timestamp?: Timestamp;
    creator: string;
  }
}
export type Type = $.api.GetPumpFunSwapsStreamResponse;

export function getDefaultValue(): $.api.GetPumpFunSwapsStreamResponse {
  return {
    slot: "0",
    txnHash: "",
    mintAddress: "",
    userAddress: "",
    userTokenAccountAddress: "",
    bondingCurveAddress: "",
    tokenVaultAddress: "",
    solAmount: "0",
    tokenAmount: "0",
    isBuy: false,
    virtualSolReserves: "0",
    virtualTokenReserves: "0",
    timestamp: undefined,
    creator: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunSwapsStreamResponse>): $.api.GetPumpFunSwapsStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunSwapsStreamResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.txnHash !== undefined) result.txnHash = tsValueToJsonValueFns.string(value.txnHash);
  if (value.mintAddress !== undefined) result.mintAddress = tsValueToJsonValueFns.string(value.mintAddress);
  if (value.userAddress !== undefined) result.userAddress = tsValueToJsonValueFns.string(value.userAddress);
  if (value.userTokenAccountAddress !== undefined) result.userTokenAccountAddress = tsValueToJsonValueFns.string(value.userTokenAccountAddress);
  if (value.bondingCurveAddress !== undefined) result.bondingCurveAddress = tsValueToJsonValueFns.string(value.bondingCurveAddress);
  if (value.tokenVaultAddress !== undefined) result.tokenVaultAddress = tsValueToJsonValueFns.string(value.tokenVaultAddress);
  if (value.solAmount !== undefined) result.solAmount = tsValueToJsonValueFns.uint64(value.solAmount);
  if (value.tokenAmount !== undefined) result.tokenAmount = tsValueToJsonValueFns.uint64(value.tokenAmount);
  if (value.isBuy !== undefined) result.isBuy = tsValueToJsonValueFns.bool(value.isBuy);
  if (value.virtualSolReserves !== undefined) result.virtualSolReserves = tsValueToJsonValueFns.uint64(value.virtualSolReserves);
  if (value.virtualTokenReserves !== undefined) result.virtualTokenReserves = tsValueToJsonValueFns.uint64(value.virtualTokenReserves);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  if (value.creator !== undefined) result.creator = tsValueToJsonValueFns.string(value.creator);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunSwapsStreamResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.txnHash !== undefined) result.txnHash = jsonValueToTsValueFns.string(value.txnHash);
  if (value.mintAddress !== undefined) result.mintAddress = jsonValueToTsValueFns.string(value.mintAddress);
  if (value.userAddress !== undefined) result.userAddress = jsonValueToTsValueFns.string(value.userAddress);
  if (value.userTokenAccountAddress !== undefined) result.userTokenAccountAddress = jsonValueToTsValueFns.string(value.userTokenAccountAddress);
  if (value.bondingCurveAddress !== undefined) result.bondingCurveAddress = jsonValueToTsValueFns.string(value.bondingCurveAddress);
  if (value.tokenVaultAddress !== undefined) result.tokenVaultAddress = jsonValueToTsValueFns.string(value.tokenVaultAddress);
  if (value.solAmount !== undefined) result.solAmount = jsonValueToTsValueFns.uint64(value.solAmount);
  if (value.tokenAmount !== undefined) result.tokenAmount = jsonValueToTsValueFns.uint64(value.tokenAmount);
  if (value.isBuy !== undefined) result.isBuy = jsonValueToTsValueFns.bool(value.isBuy);
  if (value.virtualSolReserves !== undefined) result.virtualSolReserves = jsonValueToTsValueFns.uint64(value.virtualSolReserves);
  if (value.virtualTokenReserves !== undefined) result.virtualTokenReserves = jsonValueToTsValueFns.uint64(value.virtualTokenReserves);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  if (value.creator !== undefined) result.creator = jsonValueToTsValueFns.string(value.creator);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunSwapsStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.txnHash !== undefined) {
    const tsValue = value.txnHash;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.mintAddress !== undefined) {
    const tsValue = value.mintAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.userAddress !== undefined) {
    const tsValue = value.userAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.userTokenAccountAddress !== undefined) {
    const tsValue = value.userTokenAccountAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.bondingCurveAddress !== undefined) {
    const tsValue = value.bondingCurveAddress;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tokenVaultAddress !== undefined) {
    const tsValue = value.tokenVaultAddress;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.solAmount !== undefined) {
    const tsValue = value.solAmount;
    result.push(
      [8, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.tokenAmount !== undefined) {
    const tsValue = value.tokenAmount;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.isBuy !== undefined) {
    const tsValue = value.isBuy;
    result.push(
      [10, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.virtualSolReserves !== undefined) {
    const tsValue = value.virtualSolReserves;
    result.push(
      [11, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.virtualTokenReserves !== undefined) {
    const tsValue = value.virtualTokenReserves;
    result.push(
      [12, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.creator !== undefined) {
    const tsValue = value.creator;
    result.push(
      [14, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunSwapsStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.txnHash = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mintAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userTokenAccountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bondingCurveAddress = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tokenVaultAddress = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.solAmount = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tokenAmount = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBuy = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.virtualSolReserves = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.virtualTokenReserves = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.creator = value;
  }
  return result;
}
