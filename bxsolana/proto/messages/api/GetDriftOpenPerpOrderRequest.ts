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
  export interface GetDriftOpenPerpOrderRequest {
    ownerAddress: string;
    accountAddress: string;
    orderID: string;
    clientOrderID: string;
  }
}
export type Type = $.api.GetDriftOpenPerpOrderRequest;

export function getDefaultValue(): $.api.GetDriftOpenPerpOrderRequest {
  return {
    ownerAddress: "",
    accountAddress: "",
    orderID: "0",
    clientOrderID: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftOpenPerpOrderRequest>): $.api.GetDriftOpenPerpOrderRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftOpenPerpOrderRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.uint64(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.uint64(value.clientOrderID);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftOpenPerpOrderRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.uint64(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.uint64(value.clientOrderID);
  return result;
}

export function encodeBinary(value: $.api.GetDriftOpenPerpOrderRequest): Uint8Array {
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
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftOpenPerpOrderRequest {
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
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.clientOrderID = value;
  }
  return result;
}
