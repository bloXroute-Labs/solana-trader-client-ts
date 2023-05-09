import {
  Type as Side,
  name2num,
  num2name,
} from "./Side";
import {
  Type as OrderStatus,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./OrderStatus";
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
  export interface GetOrderStatusResponse {
    market: string;
    openOrderAddress: string;
    orderID: string;
    clientOrderID: string;
    quantityReleased: number;
    quantityRemaining: number;
    fillPrice: number;
    side: Side;
    orderStatus: OrderStatus;
    orderPrice: number;
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
    fillPrice: 0,
    side: "S_UNKNOWN",
    orderStatus: "OS_UNKNOWN",
    orderPrice: 0,
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
  if (value.fillPrice !== undefined) result.fillPrice = tsValueToJsonValueFns.float(value.fillPrice);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  if (value.orderStatus !== undefined) result.orderStatus = tsValueToJsonValueFns.enum(value.orderStatus);
  if (value.orderPrice !== undefined) result.orderPrice = tsValueToJsonValueFns.float(value.orderPrice);
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
  if (value.fillPrice !== undefined) result.fillPrice = jsonValueToTsValueFns.float(value.fillPrice);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  if (value.orderStatus !== undefined) result.orderStatus = jsonValueToTsValueFns.enum(value.orderStatus) as OrderStatus;
  if (value.orderPrice !== undefined) result.orderPrice = jsonValueToTsValueFns.float(value.orderPrice);
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
  if (value.fillPrice !== undefined) {
    const tsValue = value.fillPrice;
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
  if (value.orderPrice !== undefined) {
    const tsValue = value.orderPrice;
    result.push(
      [10, tsValueToWireValueFns.float(tsValue)],
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
    result.fillPrice = value;
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
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.orderPrice = value;
  }
  return result;
}
