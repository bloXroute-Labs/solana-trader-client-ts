import {
  Type as JSONSchemaSimpleTypes,
  name2num,
  num2name,
} from "./(JSONSchema)/JSONSchemaSimpleTypes";
import {
  Type as Value,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../../../google/protobuf/Value";
import {
  Type as FieldConfiguration,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(JSONSchema)/FieldConfiguration";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../../../../runtime/wire/scalar";
import {
  default as Long,
} from "../../../../../runtime/Long";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize";

export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options {
  export interface JSONSchema {
    ref: string;
    title: string;
    description: string;
    default: string;
    readOnly: boolean;
    example: string;
    multipleOf: number;
    maximum: number;
    exclusiveMaximum: boolean;
    minimum: number;
    exclusiveMinimum: boolean;
    maxLength: string;
    minLength: string;
    pattern: string;
    maxItems: string;
    minItems: string;
    uniqueItems: boolean;
    maxProperties: string;
    minProperties: string;
    required: string[];
    array: string[];
    type: JSONSchemaSimpleTypes[];
    format: string;
    enum: string[];
    extensions: Map<string, Value>;
    fieldConfiguration?: FieldConfiguration;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema {
  return {
    ref: "",
    title: "",
    description: "",
    default: "",
    readOnly: false,
    example: "",
    multipleOf: 0,
    maximum: 0,
    exclusiveMaximum: false,
    minimum: 0,
    exclusiveMinimum: false,
    maxLength: "0",
    minLength: "0",
    pattern: "",
    maxItems: "0",
    minItems: "0",
    uniqueItems: false,
    maxProperties: "0",
    minProperties: "0",
    required: [],
    array: [],
    type: [],
    format: "",
    enum: [],
    extensions: new Map(),
    fieldConfiguration: undefined,
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema>): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema): unknown {
  const result: any = {};
  if (value.ref !== undefined) result.ref = tsValueToJsonValueFns.string(value.ref);
  if (value.title !== undefined) result.title = tsValueToJsonValueFns.string(value.title);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.default !== undefined) result.default = tsValueToJsonValueFns.string(value.default);
  if (value.readOnly !== undefined) result.readOnly = tsValueToJsonValueFns.bool(value.readOnly);
  if (value.example !== undefined) result.example = tsValueToJsonValueFns.string(value.example);
  if (value.multipleOf !== undefined) result.multipleOf = tsValueToJsonValueFns.double(value.multipleOf);
  if (value.maximum !== undefined) result.maximum = tsValueToJsonValueFns.double(value.maximum);
  if (value.exclusiveMaximum !== undefined) result.exclusiveMaximum = tsValueToJsonValueFns.bool(value.exclusiveMaximum);
  if (value.minimum !== undefined) result.minimum = tsValueToJsonValueFns.double(value.minimum);
  if (value.exclusiveMinimum !== undefined) result.exclusiveMinimum = tsValueToJsonValueFns.bool(value.exclusiveMinimum);
  if (value.maxLength !== undefined) result.maxLength = tsValueToJsonValueFns.uint64(value.maxLength);
  if (value.minLength !== undefined) result.minLength = tsValueToJsonValueFns.uint64(value.minLength);
  if (value.pattern !== undefined) result.pattern = tsValueToJsonValueFns.string(value.pattern);
  if (value.maxItems !== undefined) result.maxItems = tsValueToJsonValueFns.uint64(value.maxItems);
  if (value.minItems !== undefined) result.minItems = tsValueToJsonValueFns.uint64(value.minItems);
  if (value.uniqueItems !== undefined) result.uniqueItems = tsValueToJsonValueFns.bool(value.uniqueItems);
  if (value.maxProperties !== undefined) result.maxProperties = tsValueToJsonValueFns.uint64(value.maxProperties);
  if (value.minProperties !== undefined) result.minProperties = tsValueToJsonValueFns.uint64(value.minProperties);
  result.required = value.required.map(value => tsValueToJsonValueFns.string(value));
  result.array = value.array.map(value => tsValueToJsonValueFns.string(value));
  result.type = value.type.map(value => tsValueToJsonValueFns.enum(value));
  if (value.format !== undefined) result.format = tsValueToJsonValueFns.string(value.format);
  result.enum = value.enum.map(value => tsValueToJsonValueFns.string(value));
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, encodeJson_1(value)]));
  if (value.fieldConfiguration !== undefined) result.fieldConfiguration = encodeJson_2(value.fieldConfiguration);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema {
  const result = getDefaultValue();
  if (value.ref !== undefined) result.ref = jsonValueToTsValueFns.string(value.ref);
  if (value.title !== undefined) result.title = jsonValueToTsValueFns.string(value.title);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.default !== undefined) result.default = jsonValueToTsValueFns.string(value.default);
  if (value.readOnly !== undefined) result.readOnly = jsonValueToTsValueFns.bool(value.readOnly);
  if (value.example !== undefined) result.example = jsonValueToTsValueFns.string(value.example);
  if (value.multipleOf !== undefined) result.multipleOf = jsonValueToTsValueFns.double(value.multipleOf);
  if (value.maximum !== undefined) result.maximum = jsonValueToTsValueFns.double(value.maximum);
  if (value.exclusiveMaximum !== undefined) result.exclusiveMaximum = jsonValueToTsValueFns.bool(value.exclusiveMaximum);
  if (value.minimum !== undefined) result.minimum = jsonValueToTsValueFns.double(value.minimum);
  if (value.exclusiveMinimum !== undefined) result.exclusiveMinimum = jsonValueToTsValueFns.bool(value.exclusiveMinimum);
  if (value.maxLength !== undefined) result.maxLength = jsonValueToTsValueFns.uint64(value.maxLength);
  if (value.minLength !== undefined) result.minLength = jsonValueToTsValueFns.uint64(value.minLength);
  if (value.pattern !== undefined) result.pattern = jsonValueToTsValueFns.string(value.pattern);
  if (value.maxItems !== undefined) result.maxItems = jsonValueToTsValueFns.uint64(value.maxItems);
  if (value.minItems !== undefined) result.minItems = jsonValueToTsValueFns.uint64(value.minItems);
  if (value.uniqueItems !== undefined) result.uniqueItems = jsonValueToTsValueFns.bool(value.uniqueItems);
  if (value.maxProperties !== undefined) result.maxProperties = jsonValueToTsValueFns.uint64(value.maxProperties);
  if (value.minProperties !== undefined) result.minProperties = jsonValueToTsValueFns.uint64(value.minProperties);
  result.required = value.required?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.array = value.array?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.type = value.type?.map((value: any) => jsonValueToTsValueFns.enum(value) as JSONSchemaSimpleTypes) ?? [];
  if (value.format !== undefined) result.format = jsonValueToTsValueFns.string(value.format);
  result.enum = value.enum?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, decodeJson_1(value)]));
  if (value.fieldConfiguration !== undefined) result.fieldConfiguration = decodeJson_2(value.fieldConfiguration);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema): Uint8Array {
  const result: WireMessage = [];
  if (value.ref !== undefined) {
    const tsValue = value.ref;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.title !== undefined) {
    const tsValue = value.title;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.default !== undefined) {
    const tsValue = value.default;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.readOnly !== undefined) {
    const tsValue = value.readOnly;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.example !== undefined) {
    const tsValue = value.example;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.multipleOf !== undefined) {
    const tsValue = value.multipleOf;
    result.push(
      [10, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.maximum !== undefined) {
    const tsValue = value.maximum;
    result.push(
      [11, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.exclusiveMaximum !== undefined) {
    const tsValue = value.exclusiveMaximum;
    result.push(
      [12, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.minimum !== undefined) {
    const tsValue = value.minimum;
    result.push(
      [13, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.exclusiveMinimum !== undefined) {
    const tsValue = value.exclusiveMinimum;
    result.push(
      [14, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.maxLength !== undefined) {
    const tsValue = value.maxLength;
    result.push(
      [15, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.minLength !== undefined) {
    const tsValue = value.minLength;
    result.push(
      [16, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.pattern !== undefined) {
    const tsValue = value.pattern;
    result.push(
      [17, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.maxItems !== undefined) {
    const tsValue = value.maxItems;
    result.push(
      [20, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.minItems !== undefined) {
    const tsValue = value.minItems;
    result.push(
      [21, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.uniqueItems !== undefined) {
    const tsValue = value.uniqueItems;
    result.push(
      [22, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.maxProperties !== undefined) {
    const tsValue = value.maxProperties;
    result.push(
      [24, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.minProperties !== undefined) {
    const tsValue = value.minProperties;
    result.push(
      [25, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.required) {
    result.push(
      [26, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.array) {
    result.push(
      [34, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.type) {
    result.push(
      [35, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.format !== undefined) {
    const tsValue = value.format;
    result.push(
      [36, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.enum) {
    result.push(
      [46, tsValueToWireValueFns.string(tsValue)],
    );
  }
  {
    const fields = value.extensions.entries();
    for (const [key, value] of fields) {
      result.push(
        [48, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(value) }]]) }],
      );
    }
  }
  if (value.fieldConfiguration !== undefined) {
    const tsValue = value.fieldConfiguration;
    result.push(
      [1001, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ref = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.title = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.default = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.readOnly = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.example = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.multipleOf = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.maximum = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.exclusiveMaximum = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.minimum = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.exclusiveMinimum = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.maxLength = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.minLength = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pattern = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.maxItems = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.minItems = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.uniqueItems = value;
  }
  field: {
    const wireValue = wireFields.get(24);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.maxProperties = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.minProperties = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 26).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.required = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 34).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.array = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 35).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.type = value as any;
  }
  field: {
    const wireValue = wireFields.get(36);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.format = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 46).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.enum = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 48).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_1(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = new Map(value as any);
  }
  field: {
    const wireValue = wireFields.get(1001);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.fieldConfiguration = value;
  }
  return result;
}
