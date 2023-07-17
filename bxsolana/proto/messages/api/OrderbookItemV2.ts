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
  export interface OrderbookItemV2 {
    price: number;
    size: number;
    orderID: string;
    clientOrderID: string;
    ownerAddress: string;
  }
}
export type Type = $.api.OrderbookItemV2;

export function getDefaultValue(): $.api.OrderbookItemV2 {
  return {
    price: 0,
    size: 0,
    orderID: "",
    clientOrderID: "0",
    ownerAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.OrderbookItemV2>): $.api.OrderbookItemV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.OrderbookItemV2): unknown {
  const result: any = {};
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.double(value.size);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.uint64(value.clientOrderID);
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  return result;
}

export function decodeJson(value: any): $.api.OrderbookItemV2 {
  const result = getDefaultValue();
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.double(value.size);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.uint64(value.clientOrderID);
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  return result;
}

export function encodeBinary(value: $.api.OrderbookItemV2): Uint8Array {
  const result: WireMessage = [];
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.OrderbookItemV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
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
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  return result;
}
