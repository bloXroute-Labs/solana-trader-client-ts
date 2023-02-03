import {
  Type as Kind,
  name2num,
  num2name,
} from "./(Field)/Kind";
import {
  Type as Cardinality,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(Field)/Cardinality";
import {
  Type as Option,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Option";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  default as Long,
} from "../../../runtime/Long";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface Field {
    kind: Kind;
    cardinality: Cardinality;
    number: number;
    name: string;
    typeUrl: string;
    oneofIndex: number;
    packed: boolean;
    options: Option[];
    jsonName: string;
    defaultValue: string;
  }
}
export type Type = $.google.protobuf.Field;

export function getDefaultValue(): $.google.protobuf.Field {
  return {
    kind: "TYPE_UNKNOWN",
    cardinality: "CARDINALITY_UNKNOWN",
    number: 0,
    name: "",
    typeUrl: "",
    oneofIndex: 0,
    packed: false,
    options: [],
    jsonName: "",
    defaultValue: "",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Field>): $.google.protobuf.Field {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Field): unknown {
  const result: any = {};
  if (value.kind !== undefined) result.kind = tsValueToJsonValueFns.enum(value.kind);
  if (value.cardinality !== undefined) result.cardinality = tsValueToJsonValueFns.enum(value.cardinality);
  if (value.number !== undefined) result.number = tsValueToJsonValueFns.int32(value.number);
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.typeUrl !== undefined) result.typeUrl = tsValueToJsonValueFns.string(value.typeUrl);
  if (value.oneofIndex !== undefined) result.oneofIndex = tsValueToJsonValueFns.int32(value.oneofIndex);
  if (value.packed !== undefined) result.packed = tsValueToJsonValueFns.bool(value.packed);
  result.options = value.options.map(value => encodeJson_1(value));
  if (value.jsonName !== undefined) result.jsonName = tsValueToJsonValueFns.string(value.jsonName);
  if (value.defaultValue !== undefined) result.defaultValue = tsValueToJsonValueFns.string(value.defaultValue);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Field {
  const result = getDefaultValue();
  if (value.kind !== undefined) result.kind = jsonValueToTsValueFns.enum(value.kind) as Kind;
  if (value.cardinality !== undefined) result.cardinality = jsonValueToTsValueFns.enum(value.cardinality) as Cardinality;
  if (value.number !== undefined) result.number = jsonValueToTsValueFns.int32(value.number);
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.typeUrl !== undefined) result.typeUrl = jsonValueToTsValueFns.string(value.typeUrl);
  if (value.oneofIndex !== undefined) result.oneofIndex = jsonValueToTsValueFns.int32(value.oneofIndex);
  if (value.packed !== undefined) result.packed = jsonValueToTsValueFns.bool(value.packed);
  result.options = value.options?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.jsonName !== undefined) result.jsonName = jsonValueToTsValueFns.string(value.jsonName);
  if (value.defaultValue !== undefined) result.defaultValue = jsonValueToTsValueFns.string(value.defaultValue);
  return result;
}

export function encodeBinary(value: $.google.protobuf.Field): Uint8Array {
  const result: WireMessage = [];
  if (value.kind !== undefined) {
    const tsValue = value.kind;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.cardinality !== undefined) {
    const tsValue = value.cardinality;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.number !== undefined) {
    const tsValue = value.number;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.typeUrl !== undefined) {
    const tsValue = value.typeUrl;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.oneofIndex !== undefined) {
    const tsValue = value.oneofIndex;
    result.push(
      [7, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.packed !== undefined) {
    const tsValue = value.packed;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  for (const tsValue of value.options) {
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.jsonName !== undefined) {
    const tsValue = value.jsonName;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.defaultValue !== undefined) {
    const tsValue = value.defaultValue;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Field {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.kind = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.cardinality = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.typeUrl = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.oneofIndex = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.packed = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.options = value as any;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.jsonName = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.defaultValue = value;
  }
  return result;
}
