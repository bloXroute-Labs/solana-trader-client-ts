import {
  Type as Side,
  name2num,
  num2name,
} from "./Side";
import {
  Type as OrderType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "../common/OrderType";
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
  unpackFns,
} from "../../runtime/wire/scalar";
import {
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface Order {
    orderID: string;
    market: string;
    side: Side;
    types: OrderType[];
    price: number;
    remainingSize: number;
    createdAt?: Timestamp;
    clientOrderID: string;
    openOrderAccount: string;
  }
}
export type Type = $.api.Order;

export function getDefaultValue(): $.api.Order {
  return {
    orderID: "",
    market: "",
    side: "S_UNKNOWN",
    types: [],
    price: 0,
    remainingSize: 0,
    createdAt: undefined,
    clientOrderID: "",
    openOrderAccount: "",
  };
}

export function createValue(partialValue: Partial<$.api.Order>): $.api.Order {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Order): unknown {
  const result: any = {};
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  result.types = value.types.map(value => tsValueToJsonValueFns.enum(value));
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.remainingSize !== undefined) result.remainingSize = tsValueToJsonValueFns.double(value.remainingSize);
  if (value.createdAt !== undefined) result.createdAt = encodeJson_1(value.createdAt);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.string(value.clientOrderID);
  if (value.openOrderAccount !== undefined) result.openOrderAccount = tsValueToJsonValueFns.string(value.openOrderAccount);
  return result;
}

export function decodeJson(value: any): $.api.Order {
  const result = getDefaultValue();
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  result.types = value.types?.map((value: any) => jsonValueToTsValueFns.enum(value) as OrderType) ?? [];
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.remainingSize !== undefined) result.remainingSize = jsonValueToTsValueFns.double(value.remainingSize);
  if (value.createdAt !== undefined) result.createdAt = decodeJson_1(value.createdAt);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.string(value.clientOrderID);
  if (value.openOrderAccount !== undefined) result.openOrderAccount = jsonValueToTsValueFns.string(value.openOrderAccount);
  return result;
}

export function encodeBinary(value: $.api.Order): Uint8Array {
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
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.types) {
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
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

export function decodeBinary(binary: Uint8Array): $.api.Order {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name_1[num as keyof typeof num2name_1]);
    if (!value.length) break collection;
    result.types = value as any;
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
