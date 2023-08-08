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
  export interface PostDriftPerpOrderRequest {
    ownerAddress: string;
    contract: string;
    accountAddress: string;
    positionSide: string;
    slippage: number;
    type: string;
    amount: number;
    price: number;
    clientOrderID: string;
    postOnly: string;
  }
}
export type Type = $.api.PostDriftPerpOrderRequest;

export function getDefaultValue(): $.api.PostDriftPerpOrderRequest {
  return {
    ownerAddress: "",
    contract: "",
    accountAddress: "",
    positionSide: "",
    slippage: 0,
    type: "",
    amount: 0,
    price: 0,
    clientOrderID: "0",
    postOnly: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostDriftPerpOrderRequest>): $.api.PostDriftPerpOrderRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostDriftPerpOrderRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.positionSide !== undefined) result.positionSide = tsValueToJsonValueFns.string(value.positionSide);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.uint64(value.clientOrderID);
  if (value.postOnly !== undefined) result.postOnly = tsValueToJsonValueFns.string(value.postOnly);
  return result;
}

export function decodeJson(value: any): $.api.PostDriftPerpOrderRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.positionSide !== undefined) result.positionSide = jsonValueToTsValueFns.string(value.positionSide);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.uint64(value.clientOrderID);
  if (value.postOnly !== undefined) result.postOnly = jsonValueToTsValueFns.string(value.postOnly);
  return result;
}

export function encodeBinary(value: $.api.PostDriftPerpOrderRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.positionSide !== undefined) {
    const tsValue = value.positionSide;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.postOnly !== undefined) {
    const tsValue = value.postOnly;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostDriftPerpOrderRequest {
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
    result.contract = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.positionSide = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.clientOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.postOnly = value;
  }
  return result;
}
