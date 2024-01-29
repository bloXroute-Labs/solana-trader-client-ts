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
  export interface PostOrderRequestV2 {
    ownerAddress: string;
    payerAddress: string;
    market: string;
    side: string;
    type: string;
    amount: number;
    price: number;
    openOrdersAddress: string;
    clientOrderID: string;
    computeLimit: number;
    computePrice: string;
    tip?: string;
  }
}
export type Type = $.api.PostOrderRequestV2;

export function getDefaultValue(): $.api.PostOrderRequestV2 {
  return {
    ownerAddress: "",
    payerAddress: "",
    market: "",
    side: "",
    type: "",
    amount: 0,
    price: 0,
    openOrdersAddress: "",
    clientOrderID: "0",
    computeLimit: 0,
    computePrice: "0",
    tip: "0",
  };
}

export function createValue(partialValue: Partial<$.api.PostOrderRequestV2>): $.api.PostOrderRequestV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostOrderRequestV2): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.payerAddress !== undefined) result.payerAddress = tsValueToJsonValueFns.string(value.payerAddress);
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.string(value.side);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = tsValueToJsonValueFns.string(value.openOrdersAddress);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.uint64(value.clientOrderID);
  if (value.computeLimit !== undefined) result.computeLimit = tsValueToJsonValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = tsValueToJsonValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = tsValueToJsonValueFns.uint64(value.tip);
  return result;
}

export function decodeJson(value: any): $.api.PostOrderRequestV2 {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.payerAddress !== undefined) result.payerAddress = jsonValueToTsValueFns.string(value.payerAddress);
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.string(value.side);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = jsonValueToTsValueFns.string(value.openOrdersAddress);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.uint64(value.clientOrderID);
  if (value.computeLimit !== undefined) result.computeLimit = jsonValueToTsValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = jsonValueToTsValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = jsonValueToTsValueFns.uint64(value.tip);
  return result;
}

export function encodeBinary(value: $.api.PostOrderRequestV2): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.payerAddress !== undefined) {
    const tsValue = value.payerAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.openOrdersAddress !== undefined) {
    const tsValue = value.openOrdersAddress;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.computeLimit !== undefined) {
    const tsValue = value.computeLimit;
    result.push(
      [10, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.computePrice !== undefined) {
    const tsValue = value.computePrice;
    result.push(
      [11, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.tip !== undefined) {
    const tsValue = value.tip;
    result.push(
      [12, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostOrderRequestV2 {
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
    result.payerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.openOrdersAddress = value;
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
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.computeLimit = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.computePrice = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tip = value;
  }
  return result;
}
