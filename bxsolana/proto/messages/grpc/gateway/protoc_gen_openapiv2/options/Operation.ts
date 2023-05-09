import {
  Type as ExternalDocumentation,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ExternalDocumentation";
import {
  Type as Response,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Response";
import {
  Type as Scheme,
  name2num,
  num2name,
} from "./Scheme";
import {
  Type as SecurityRequirement,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./SecurityRequirement";
import {
  Type as Value,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "../../../../google/protobuf/Value";
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
  export interface Operation {
    tags: string[];
    summary: string;
    description: string;
    externalDocs?: ExternalDocumentation;
    operationId: string;
    consumes: string[];
    produces: string[];
    responses: Map<string, Response>;
    schemes: Scheme[];
    deprecated: boolean;
    security: SecurityRequirement[];
    extensions: Map<string, Value>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Operation;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Operation {
  return {
    tags: [],
    summary: "",
    description: "",
    externalDocs: undefined,
    operationId: "",
    consumes: [],
    produces: [],
    responses: new Map(),
    schemes: [],
    deprecated: false,
    security: [],
    extensions: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Operation>): $.grpc.gateway.protoc_gen_openapiv2.options.Operation {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Operation): unknown {
  const result: any = {};
  result.tags = value.tags.map(value => tsValueToJsonValueFns.string(value));
  if (value.summary !== undefined) result.summary = tsValueToJsonValueFns.string(value.summary);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.externalDocs !== undefined) result.externalDocs = encodeJson_1(value.externalDocs);
  if (value.operationId !== undefined) result.operationId = tsValueToJsonValueFns.string(value.operationId);
  result.consumes = value.consumes.map(value => tsValueToJsonValueFns.string(value));
  result.produces = value.produces.map(value => tsValueToJsonValueFns.string(value));
  if (value.responses !== undefined) result.responses = Object.fromEntries([...value.responses.entries()].map(([key, value]) => [key, encodeJson_2(value)]));
  result.schemes = value.schemes.map(value => tsValueToJsonValueFns.enum(value));
  if (value.deprecated !== undefined) result.deprecated = tsValueToJsonValueFns.bool(value.deprecated);
  result.security = value.security.map(value => encodeJson_3(value));
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, encodeJson_4(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Operation {
  const result = getDefaultValue();
  result.tags = value.tags?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.summary !== undefined) result.summary = jsonValueToTsValueFns.string(value.summary);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.externalDocs !== undefined) result.externalDocs = decodeJson_1(value.externalDocs);
  if (value.operationId !== undefined) result.operationId = jsonValueToTsValueFns.string(value.operationId);
  result.consumes = value.consumes?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.produces = value.produces?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.responses !== undefined) result.responses = Object.fromEntries([...value.responses.entries()].map(([key, value]) => [key, decodeJson_2(value)]));
  result.schemes = value.schemes?.map((value: any) => jsonValueToTsValueFns.enum(value) as Scheme) ?? [];
  if (value.deprecated !== undefined) result.deprecated = jsonValueToTsValueFns.bool(value.deprecated);
  result.security = value.security?.map((value: any) => decodeJson_3(value)) ?? [];
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, decodeJson_4(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Operation): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tags) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.summary !== undefined) {
    const tsValue = value.summary;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.externalDocs !== undefined) {
    const tsValue = value.externalDocs;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.operationId !== undefined) {
    const tsValue = value.operationId;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.consumes) {
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.produces) {
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  {
    const fields = value.responses.entries();
    for (const [key, value] of fields) {
      result.push(
        [9, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(value) }]]) }],
      );
    }
  }
  for (const tsValue of value.schemes) {
    result.push(
      [10, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.deprecated !== undefined) {
    const tsValue = value.deprecated;
    result.push(
      [11, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  for (const tsValue of value.security) {
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  {
    const fields = value.extensions.entries();
    for (const [key, value] of fields) {
      result.push(
        [13, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_4(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Operation {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tags = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.summary = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.externalDocs = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.operationId = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.consumes = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.produces = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_2(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.responses = new Map(value as any);
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 10).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.schemes = value as any;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.deprecated = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 12).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.security = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 13).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_4(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = new Map(value as any);
  }
  return result;
}
