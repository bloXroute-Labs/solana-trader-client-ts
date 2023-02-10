import {
  Type as OrderStatus,
  name2num,
  num2name,
} from "./OrderStatus";
import {
  Type as Side,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Side";
import {
  Type as OrderType,
  name2num as name2num_2,
  num2name as num2name_2,
} from "../common/OrderType";
import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
import {
  Type as Direction,
  name2num as name2num_3,
  num2name as num2name_3,
} from "./Direction";
import {
  Type as Project,
  name2num as name2num_4,
  num2name as num2name_4,
} from "./Project";
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
  export interface GetOrdersRequest {
    market: string;
    status: OrderStatus;
    side: Side;
    types: OrderType[];
    from?: Timestamp;
    limit: number;
    direction: Direction;
    address: string;
    openOrdersAddress: string;
    project: Project;
  }
}
export type Type = $.api.GetOrdersRequest;

export function getDefaultValue(): $.api.GetOrdersRequest {
  return {
    market: "",
    status: "OS_UNKNOWN",
    side: "S_UNKNOWN",
    types: [],
    from: undefined,
    limit: 0,
    direction: "D_ASCENDING",
    address: "",
    openOrdersAddress: "",
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.GetOrdersRequest>): $.api.GetOrdersRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrdersRequest): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  result.types = value.types.map(value => tsValueToJsonValueFns.enum(value));
  if (value.from !== undefined) result.from = encodeJson_1(value.from);
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  if (value.direction !== undefined) result.direction = tsValueToJsonValueFns.enum(value.direction);
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = tsValueToJsonValueFns.string(value.openOrdersAddress);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.GetOrdersRequest {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as OrderStatus;
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  result.types = value.types?.map((value: any) => jsonValueToTsValueFns.enum(value) as OrderType) ?? [];
  if (value.from !== undefined) result.from = decodeJson_1(value.from);
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  if (value.direction !== undefined) result.direction = jsonValueToTsValueFns.enum(value.direction) as Direction;
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = jsonValueToTsValueFns.string(value.openOrdersAddress);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.GetOrdersRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  for (const tsValue of value.types) {
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.from !== undefined) {
    const tsValue = value.from;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [6, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.direction !== undefined) {
    const tsValue = value.direction;
    result.push(
      [7, { type: WireType.Varint as const, value: new Long(name2num_3[tsValue as keyof typeof name2num_3]) }],
    );
  }
  if (value.address !== undefined) {
    const tsValue = value.address;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.openOrdersAddress !== undefined) {
    const tsValue = value.openOrdersAddress;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [10, { type: WireType.Varint as const, value: new Long(name2num_4[tsValue as keyof typeof name2num_4]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrdersRequest {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name_2[num as keyof typeof num2name_2]);
    if (!value.length) break collection;
    result.types = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.from = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.limit = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_3[wireValue.value[0] as keyof typeof num2name_3] : undefined;
    if (value === undefined) break field;
    result.direction = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.address = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.openOrdersAddress = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_4[wireValue.value[0] as keyof typeof num2name_4] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
