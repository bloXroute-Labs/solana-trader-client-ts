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
  export interface OrderV2 {
    orderID: string;
    market: string;
    side: string;
    type: string;
    price: number;
    remainingSize: number;
    createdAt?: Timestamp;
    clientOrderID: string;
    openOrderAccount: string;
  }
}
export type Type = $.api.OrderV2;

export function getDefaultValue(): $.api.OrderV2 {
  return {
    orderID: "",
    market: "",
    side: "",
    type: "",
    price: 0,
    remainingSize: 0,
    createdAt: undefined,
    clientOrderID: "",
    openOrderAccount: "",
  };
}

export function createValue(partialValue: Partial<$.api.OrderV2>): $.api.OrderV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.OrderV2): unknown {
  const result: any = {};
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.string(value.side);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.remainingSize !== undefined) result.remainingSize = tsValueToJsonValueFns.double(value.remainingSize);
  if (value.createdAt !== undefined) result.createdAt = encodeJson_1(value.createdAt);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.string(value.clientOrderID);
  if (value.openOrderAccount !== undefined) result.openOrderAccount = tsValueToJsonValueFns.string(value.openOrderAccount);
  return result;
}

export function decodeJson(value: any): $.api.OrderV2 {
  const result = getDefaultValue();
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.string(value.side);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.remainingSize !== undefined) result.remainingSize = jsonValueToTsValueFns.double(value.remainingSize);
  if (value.createdAt !== undefined) result.createdAt = decodeJson_1(value.createdAt);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.string(value.clientOrderID);
  if (value.openOrderAccount !== undefined) result.openOrderAccount = jsonValueToTsValueFns.string(value.openOrderAccount);
  return result;
}

export function encodeBinary(value: $.api.OrderV2): Uint8Array {
  const result: WireMessage = [];
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.remainingSize !== undefined) {
    const tsValue = value.remainingSize;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.createdAt !== undefined) {
    const tsValue = value.createdAt;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.openOrderAccount !== undefined) {
    const tsValue = value.openOrderAccount;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.OrderV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.orderID = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.remainingSize = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createdAt = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.openOrderAccount = value;
  }
  return result;
}
