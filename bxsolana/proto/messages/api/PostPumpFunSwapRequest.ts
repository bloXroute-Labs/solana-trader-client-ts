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
  export interface PostPumpFunSwapRequest {
    userAddress: string;
    bondingCurveAddress: string;
    tokenAddress: string;
    tokenAmount: number;
    solThreshold: number;
    isBuy: boolean;
    slippage: number;
    computeLimit: number;
    computePrice: string;
    tip?: string;
    creator: string;
  }
}
export type Type = $.api.PostPumpFunSwapRequest;

export function getDefaultValue(): $.api.PostPumpFunSwapRequest {
  return {
    userAddress: "",
    bondingCurveAddress: "",
    tokenAddress: "",
    tokenAmount: 0,
    solThreshold: 0,
    isBuy: false,
    slippage: 0,
    computeLimit: 0,
    computePrice: "0",
    tip: "0",
    creator: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostPumpFunSwapRequest>): $.api.PostPumpFunSwapRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostPumpFunSwapRequest): unknown {
  const result: any = {};
  if (value.userAddress !== undefined) result.userAddress = tsValueToJsonValueFns.string(value.userAddress);
  if (value.bondingCurveAddress !== undefined) result.bondingCurveAddress = tsValueToJsonValueFns.string(value.bondingCurveAddress);
  if (value.tokenAddress !== undefined) result.tokenAddress = tsValueToJsonValueFns.string(value.tokenAddress);
  if (value.tokenAmount !== undefined) result.tokenAmount = tsValueToJsonValueFns.double(value.tokenAmount);
  if (value.solThreshold !== undefined) result.solThreshold = tsValueToJsonValueFns.double(value.solThreshold);
  if (value.isBuy !== undefined) result.isBuy = tsValueToJsonValueFns.bool(value.isBuy);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  if (value.computeLimit !== undefined) result.computeLimit = tsValueToJsonValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = tsValueToJsonValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = tsValueToJsonValueFns.uint64(value.tip);
  if (value.creator !== undefined) result.creator = tsValueToJsonValueFns.string(value.creator);
  return result;
}

export function decodeJson(value: any): $.api.PostPumpFunSwapRequest {
  const result = getDefaultValue();
  if (value.userAddress !== undefined) result.userAddress = jsonValueToTsValueFns.string(value.userAddress);
  if (value.bondingCurveAddress !== undefined) result.bondingCurveAddress = jsonValueToTsValueFns.string(value.bondingCurveAddress);
  if (value.tokenAddress !== undefined) result.tokenAddress = jsonValueToTsValueFns.string(value.tokenAddress);
  if (value.tokenAmount !== undefined) result.tokenAmount = jsonValueToTsValueFns.double(value.tokenAmount);
  if (value.solThreshold !== undefined) result.solThreshold = jsonValueToTsValueFns.double(value.solThreshold);
  if (value.isBuy !== undefined) result.isBuy = jsonValueToTsValueFns.bool(value.isBuy);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  if (value.computeLimit !== undefined) result.computeLimit = jsonValueToTsValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = jsonValueToTsValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = jsonValueToTsValueFns.uint64(value.tip);
  if (value.creator !== undefined) result.creator = jsonValueToTsValueFns.string(value.creator);
  return result;
}

export function encodeBinary(value: $.api.PostPumpFunSwapRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.userAddress !== undefined) {
    const tsValue = value.userAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.bondingCurveAddress !== undefined) {
    const tsValue = value.bondingCurveAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tokenAddress !== undefined) {
    const tsValue = value.tokenAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tokenAmount !== undefined) {
    const tsValue = value.tokenAmount;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.solThreshold !== undefined) {
    const tsValue = value.solThreshold;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.isBuy !== undefined) {
    const tsValue = value.isBuy;
    result.push(
      [6, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.computeLimit !== undefined) {
    const tsValue = value.computeLimit;
    result.push(
      [8, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.computePrice !== undefined) {
    const tsValue = value.computePrice;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.tip !== undefined) {
    const tsValue = value.tip;
    result.push(
      [10, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.creator !== undefined) {
    const tsValue = value.creator;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostPumpFunSwapRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userAddress = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bondingCurveAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.tokenAmount = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.solThreshold = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBuy = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.computeLimit = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.computePrice = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tip = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.creator = value;
  }
  return result;
}
