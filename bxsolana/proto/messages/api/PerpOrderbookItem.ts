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
  export interface PerpOrderbookItem {
    price: number;
    size: number;
    orderID: string;
    clientOrderID: string;
    status: string;
    orderType: string;
    slot: string;
    reduceOnly: boolean;
    triggerPrice: number;
    triggerCondition: string;
    postOnly: boolean;
    oraclePriceOffset: number;
    auctionDuration: number;
    auctionStartPrice: number;
    auctionEndPrice: number;
  }
}
export type Type = $.api.PerpOrderbookItem;

export function getDefaultValue(): $.api.PerpOrderbookItem {
  return {
    price: 0,
    size: 0,
    orderID: "",
    clientOrderID: "",
    status: "",
    orderType: "",
    slot: "0",
    reduceOnly: false,
    triggerPrice: 0,
    triggerCondition: "",
    postOnly: false,
    oraclePriceOffset: 0,
    auctionDuration: 0,
    auctionStartPrice: 0,
    auctionEndPrice: 0,
  };
}

export function createValue(partialValue: Partial<$.api.PerpOrderbookItem>): $.api.PerpOrderbookItem {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PerpOrderbookItem): unknown {
  const result: any = {};
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.double(value.size);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.string(value.clientOrderID);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.string(value.status);
  if (value.orderType !== undefined) result.orderType = tsValueToJsonValueFns.string(value.orderType);
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.reduceOnly !== undefined) result.reduceOnly = tsValueToJsonValueFns.bool(value.reduceOnly);
  if (value.triggerPrice !== undefined) result.triggerPrice = tsValueToJsonValueFns.double(value.triggerPrice);
  if (value.triggerCondition !== undefined) result.triggerCondition = tsValueToJsonValueFns.string(value.triggerCondition);
  if (value.postOnly !== undefined) result.postOnly = tsValueToJsonValueFns.bool(value.postOnly);
  if (value.oraclePriceOffset !== undefined) result.oraclePriceOffset = tsValueToJsonValueFns.double(value.oraclePriceOffset);
  if (value.auctionDuration !== undefined) result.auctionDuration = tsValueToJsonValueFns.int32(value.auctionDuration);
  if (value.auctionStartPrice !== undefined) result.auctionStartPrice = tsValueToJsonValueFns.double(value.auctionStartPrice);
  if (value.auctionEndPrice !== undefined) result.auctionEndPrice = tsValueToJsonValueFns.double(value.auctionEndPrice);
  return result;
}

export function decodeJson(value: any): $.api.PerpOrderbookItem {
  const result = getDefaultValue();
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.double(value.size);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.string(value.clientOrderID);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.string(value.status);
  if (value.orderType !== undefined) result.orderType = jsonValueToTsValueFns.string(value.orderType);
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.reduceOnly !== undefined) result.reduceOnly = jsonValueToTsValueFns.bool(value.reduceOnly);
  if (value.triggerPrice !== undefined) result.triggerPrice = jsonValueToTsValueFns.double(value.triggerPrice);
  if (value.triggerCondition !== undefined) result.triggerCondition = jsonValueToTsValueFns.string(value.triggerCondition);
  if (value.postOnly !== undefined) result.postOnly = jsonValueToTsValueFns.bool(value.postOnly);
  if (value.oraclePriceOffset !== undefined) result.oraclePriceOffset = jsonValueToTsValueFns.double(value.oraclePriceOffset);
  if (value.auctionDuration !== undefined) result.auctionDuration = jsonValueToTsValueFns.int32(value.auctionDuration);
  if (value.auctionStartPrice !== undefined) result.auctionStartPrice = jsonValueToTsValueFns.double(value.auctionStartPrice);
  if (value.auctionEndPrice !== undefined) result.auctionEndPrice = jsonValueToTsValueFns.double(value.auctionEndPrice);
  return result;
}

export function encodeBinary(value: $.api.PerpOrderbookItem): Uint8Array {
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
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.orderType !== undefined) {
    const tsValue = value.orderType;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [7, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.reduceOnly !== undefined) {
    const tsValue = value.reduceOnly;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.triggerPrice !== undefined) {
    const tsValue = value.triggerPrice;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.triggerCondition !== undefined) {
    const tsValue = value.triggerCondition;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.postOnly !== undefined) {
    const tsValue = value.postOnly;
    result.push(
      [11, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.oraclePriceOffset !== undefined) {
    const tsValue = value.oraclePriceOffset;
    result.push(
      [12, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.auctionDuration !== undefined) {
    const tsValue = value.auctionDuration;
    result.push(
      [13, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.auctionStartPrice !== undefined) {
    const tsValue = value.auctionStartPrice;
    result.push(
      [14, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.auctionEndPrice !== undefined) {
    const tsValue = value.auctionEndPrice;
    result.push(
      [15, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PerpOrderbookItem {
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.orderType = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.reduceOnly = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.triggerPrice = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.triggerCondition = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.postOnly = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.oraclePriceOffset = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.auctionDuration = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.auctionStartPrice = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.auctionEndPrice = value;
  }
  return result;
}
