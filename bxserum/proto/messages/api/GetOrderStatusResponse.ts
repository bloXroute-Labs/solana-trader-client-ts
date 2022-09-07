import {
  Type as Side,
  name2num,
  num2name,
} from "./Side.js";
import {
  Type as OrderStatus,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./OrderStatus.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export interface GetOrderStatusResponse {
    market: string;
    openOrderAddress: string;
    orderID: string;
    clientOrderID: string;
    quantityReleased: number;
    quantityRemaining: number;
    price: number;
    side: Side;
    orderStatus: OrderStatus;
  }
}
export type Type = $.api.GetOrderStatusResponse;

export function getDefaultValue(): $.api.GetOrderStatusResponse {
  return {
    market: "",
    openOrderAddress: "",
    orderID: "",
    clientOrderID: "0",
    quantityReleased: 0,
    quantityRemaining: 0,
    price: 0,
    side: "S_UNKNOWN",
    orderStatus: "OS_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.GetOrderStatusResponse>): $.api.GetOrderStatusResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrderStatusResponse): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.openOrderAddress !== undefined) result.openOrderAddress = tsValueToJsonValueFns.string(value.openOrderAddress);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.uint64(value.clientOrderID);
  if (value.quantityReleased !== undefined) result.quantityReleased = tsValueToJsonValueFns.float(value.quantityReleased);
  if (value.quantityRemaining !== undefined) result.quantityRemaining = tsValueToJsonValueFns.float(value.quantityRemaining);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.float(value.price);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  if (value.orderStatus !== undefined) result.orderStatus = tsValueToJsonValueFns.enum(value.orderStatus);
  return result;
}

export function decodeJson(value: any): $.api.GetOrderStatusResponse {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.openOrderAddress !== undefined) result.openOrderAddress = jsonValueToTsValueFns.string(value.openOrderAddress);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.uint64(value.clientOrderID);
  if (value.quantityReleased !== undefined) result.quantityReleased = jsonValueToTsValueFns.float(value.quantityReleased);
  if (value.quantityRemaining !== undefined) result.quantityRemaining = jsonValueToTsValueFns.float(value.quantityRemaining);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.float(value.price);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  if (value.orderStatus !== undefined) result.orderStatus = jsonValueToTsValueFns.enum(value.orderStatus) as OrderStatus;
  return result;
}

export function encodeBinary(value: $.api.GetOrderStatusResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.openOrderAddress !== undefined) {
    const tsValue = value.openOrderAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
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
  if (value.quantityReleased !== undefined) {
    const tsValue = value.quantityReleased;
    result.push(
      [5, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.quantityRemaining !== undefined) {
    const tsValue = value.quantityRemaining;
    result.push(
      [6, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [7, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [8, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.orderStatus !== undefined) {
    const tsValue = value.orderStatus;
    result.push(
      [9, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrderStatusResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.openOrderAddress = value;
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
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.quantityReleased = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.quantityRemaining = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.orderStatus = value;
  }
  return result;
}
