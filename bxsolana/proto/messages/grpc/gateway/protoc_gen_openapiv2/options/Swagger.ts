import {
  Type as Info,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Info";
import {
  Type as Scheme,
  name2num,
  num2name,
} from "./Scheme";
import {
  Type as Response,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Response";
import {
  Type as SecurityDefinitions,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./SecurityDefinitions";
import {
  Type as SecurityRequirement,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./SecurityRequirement";
import {
  Type as ExternalDocumentation,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./ExternalDocumentation";
import {
  Type as Value,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
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
  export interface Swagger {
    swagger: string;
    info?: Info;
    host: string;
    basePath: string;
    schemes: Scheme[];
    consumes: string[];
    produces: string[];
    responses: Map<string, Response>;
    securityDefinitions?: SecurityDefinitions;
    security: SecurityRequirement[];
    externalDocs?: ExternalDocumentation;
    extensions: Map<string, Value>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Swagger;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Swagger {
  return {
    swagger: "",
    info: undefined,
    host: "",
    basePath: "",
    schemes: [],
    consumes: [],
    produces: [],
    responses: new Map(),
    securityDefinitions: undefined,
    security: [],
    externalDocs: undefined,
    extensions: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Swagger>): $.grpc.gateway.protoc_gen_openapiv2.options.Swagger {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Swagger): unknown {
  const result: any = {};
  if (value.swagger !== undefined) result.swagger = tsValueToJsonValueFns.string(value.swagger);
  if (value.info !== undefined) result.info = encodeJson_1(value.info);
  if (value.host !== undefined) result.host = tsValueToJsonValueFns.string(value.host);
  if (value.basePath !== undefined) result.basePath = tsValueToJsonValueFns.string(value.basePath);
  result.schemes = value.schemes.map(value => tsValueToJsonValueFns.enum(value));
  result.consumes = value.consumes.map(value => tsValueToJsonValueFns.string(value));
  result.produces = value.produces.map(value => tsValueToJsonValueFns.string(value));
  if (value.responses !== undefined) result.responses = Object.fromEntries([...value.responses.entries()].map(([key, value]) => [key, encodeJson_2(value)]));
  if (value.securityDefinitions !== undefined) result.securityDefinitions = encodeJson_3(value.securityDefinitions);
  result.security = value.security.map(value => encodeJson_4(value));
  if (value.externalDocs !== undefined) result.externalDocs = encodeJson_5(value.externalDocs);
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, encodeJson_6(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Swagger {
  const result = getDefaultValue();
  if (value.swagger !== undefined) result.swagger = jsonValueToTsValueFns.string(value.swagger);
  if (value.info !== undefined) result.info = decodeJson_1(value.info);
  if (value.host !== undefined) result.host = jsonValueToTsValueFns.string(value.host);
  if (value.basePath !== undefined) result.basePath = jsonValueToTsValueFns.string(value.basePath);
  result.schemes = value.schemes?.map((value: any) => jsonValueToTsValueFns.enum(value) as Scheme) ?? [];
  result.consumes = value.consumes?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.produces = value.produces?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.responses !== undefined) result.responses = Object.fromEntries([...value.responses.entries()].map(([key, value]) => [key, decodeJson_2(value)]));
  if (value.securityDefinitions !== undefined) result.securityDefinitions = decodeJson_3(value.securityDefinitions);
  result.security = value.security?.map((value: any) => decodeJson_4(value)) ?? [];
  if (value.externalDocs !== undefined) result.externalDocs = decodeJson_5(value.externalDocs);
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, decodeJson_6(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Swagger): Uint8Array {
  const result: WireMessage = [];
  if (value.swagger !== undefined) {
    const tsValue = value.swagger;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.info !== undefined) {
    const tsValue = value.info;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.host !== undefined) {
    const tsValue = value.host;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.basePath !== undefined) {
    const tsValue = value.basePath;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.schemes) {
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
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
        [10, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(value) }]]) }],
      );
    }
  }
  if (value.securityDefinitions !== undefined) {
    const tsValue = value.securityDefinitions;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  for (const tsValue of value.security) {
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.externalDocs !== undefined) {
    const tsValue = value.externalDocs;
    result.push(
      [14, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  {
    const fields = value.extensions.entries();
    for (const [key, value] of fields) {
      result.push(
        [15, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_6(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Swagger {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.swagger = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.info = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.host = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.basePath = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.schemes = value as any;
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
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 10).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_2(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.responses = new Map(value as any);
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.securityDefinitions = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 12).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.security = value as any;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.externalDocs = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 15).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_6(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = new Map(value as any);
  }
  return result;
}
