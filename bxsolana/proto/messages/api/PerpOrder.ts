import {
  Type as PerpContract,
  name2num,
  num2name,
} from "../common/PerpContract";
import {
  Type as PerpPositionSide,
  name2num as name2num_1,
  num2name as num2name_1,
} from "../common/PerpPositionSide";
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
  export interface PerpOrder {
    orderID: string;
    clientOrderID: string;
    contract: PerpContract;
    positionSide: PerpPositionSide;
    orderType: string;
    price: number;
    size: number;
    remainingSize: number;
    status: string;
    accountAddress: string;
    subAccountID: string;
    postOnly: boolean;
  }
}
export type Type = $.api.PerpOrder;

export function getDefaultValue(): $.api.PerpOrder {
  return {
    orderID: "0",
    clientOrderID: "0",
    contract: "ALL",
    positionSide: "PS_UNKNOWN",
    orderType: "",
    price: 0,
    size: 0,
    remainingSize: 0,
    status: "",
    accountAddress: "",
    subAccountID: "0",
    postOnly: false,
  };
}

export function createValue(partialValue: Partial<$.api.PerpOrder>): $.api.PerpOrder {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PerpOrder): unknown {
  const result: any = {};
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.uint64(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.uint64(value.clientOrderID);
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.enum(value.contract);
  if (value.positionSide !== undefined) result.positionSide = tsValueToJsonValueFns.enum(value.positionSide);
  if (value.orderType !== undefined) result.orderType = tsValueToJsonValueFns.string(value.orderType);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.double(value.size);
  if (value.remainingSize !== undefined) result.remainingSize = tsValueToJsonValueFns.double(value.remainingSize);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.string(value.status);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.subAccountID !== undefined) result.subAccountID = tsValueToJsonValueFns.uint64(value.subAccountID);
  if (value.postOnly !== undefined) result.postOnly = tsValueToJsonValueFns.bool(value.postOnly);
  return result;
}

export function decodeJson(value: any): $.api.PerpOrder {
  const result = getDefaultValue();
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.uint64(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.uint64(value.clientOrderID);
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.enum(value.contract) as PerpContract;
  if (value.positionSide !== undefined) result.positionSide = jsonValueToTsValueFns.enum(value.positionSide) as PerpPositionSide;
  if (value.orderType !== undefined) result.orderType = jsonValueToTsValueFns.string(value.orderType);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.double(value.size);
  if (value.remainingSize !== undefined) result.remainingSize = jsonValueToTsValueFns.double(value.remainingSize);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.string(value.status);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.subAccountID !== undefined) result.subAccountID = jsonValueToTsValueFns.uint64(value.subAccountID);
  if (value.postOnly !== undefined) result.postOnly = jsonValueToTsValueFns.bool(value.postOnly);
  return result;
}

export function encodeBinary(value: $.api.PerpOrder): Uint8Array {
  const result: WireMessage = [];
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.positionSide !== undefined) {
    const tsValue = value.positionSide;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.orderType !== undefined) {
    const tsValue = value.orderType;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.remainingSize !== undefined) {
    const tsValue = value.remainingSize;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.subAccountID !== undefined) {
    const tsValue = value.subAccountID;
    result.push(
      [11, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.postOnly !== undefined) {
    const tsValue = value.postOnly;
    result.push(
      [12, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PerpOrder {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.orderID = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.clientOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.contract = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.positionSide = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.orderType = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.remainingSize = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.subAccountID = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.postOnly = value;
  }
  return result;
}
