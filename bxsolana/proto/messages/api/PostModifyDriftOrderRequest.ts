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
  export interface PostModifyDriftOrderRequest {
    ownerAddress: string;
    accountAddress: string;
    orderID: string;
    newPositionSide: string;
    postOnly: string;
    newBaseAmount: number;
    newLimitPrice: number;
  }
}
export type Type = $.api.PostModifyDriftOrderRequest;

export function getDefaultValue(): $.api.PostModifyDriftOrderRequest {
  return {
    ownerAddress: "",
    accountAddress: "",
    orderID: "0",
    newPositionSide: "",
    postOnly: "",
    newBaseAmount: 0,
    newLimitPrice: 0,
  };
}

export function createValue(partialValue: Partial<$.api.PostModifyDriftOrderRequest>): $.api.PostModifyDriftOrderRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostModifyDriftOrderRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.uint64(value.orderID);
  if (value.newPositionSide !== undefined) result.newPositionSide = tsValueToJsonValueFns.string(value.newPositionSide);
  if (value.postOnly !== undefined) result.postOnly = tsValueToJsonValueFns.string(value.postOnly);
  if (value.newBaseAmount !== undefined) result.newBaseAmount = tsValueToJsonValueFns.double(value.newBaseAmount);
  if (value.newLimitPrice !== undefined) result.newLimitPrice = tsValueToJsonValueFns.double(value.newLimitPrice);
  return result;
}

export function decodeJson(value: any): $.api.PostModifyDriftOrderRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.uint64(value.orderID);
  if (value.newPositionSide !== undefined) result.newPositionSide = jsonValueToTsValueFns.string(value.newPositionSide);
  if (value.postOnly !== undefined) result.postOnly = jsonValueToTsValueFns.string(value.postOnly);
  if (value.newBaseAmount !== undefined) result.newBaseAmount = jsonValueToTsValueFns.double(value.newBaseAmount);
  if (value.newLimitPrice !== undefined) result.newLimitPrice = jsonValueToTsValueFns.double(value.newLimitPrice);
  return result;
}

export function encodeBinary(value: $.api.PostModifyDriftOrderRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.newPositionSide !== undefined) {
    const tsValue = value.newPositionSide;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.postOnly !== undefined) {
    const tsValue = value.postOnly;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.newBaseAmount !== undefined) {
    const tsValue = value.newBaseAmount;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.newLimitPrice !== undefined) {
    const tsValue = value.newLimitPrice;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostModifyDriftOrderRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.orderID = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.newPositionSide = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.postOnly = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.newBaseAmount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.newLimitPrice = value;
  }
  return result;
}
