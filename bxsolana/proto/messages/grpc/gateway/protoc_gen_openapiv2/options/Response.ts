import {
  Type as Schema,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Schema";
import {
  Type as Header,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Header";
import {
  Type as Value,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
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
} from "../../../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize";

export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options {
  export interface Response {
    description: string;
    schema?: Schema;
    headers: Map<string, Header>;
    examples: Map<string, string>;
    extensions: Map<string, Value>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Response;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Response {
  return {
    description: "",
    schema: undefined,
    headers: new Map(),
    examples: new Map(),
    extensions: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Response>): $.grpc.gateway.protoc_gen_openapiv2.options.Response {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Response): unknown {
  const result: any = {};
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.schema !== undefined) result.schema = encodeJson_1(value.schema);
  if (value.headers !== undefined) result.headers = Object.fromEntries([...value.headers.entries()].map(([key, value]) => [key, encodeJson_2(value)]));
  if (value.examples !== undefined) result.examples = Object.fromEntries([...value.examples.entries()].map(([key, value]) => [key, tsValueToJsonValueFns.string(value)]));
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, encodeJson_3(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Response {
  const result = getDefaultValue();
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.schema !== undefined) result.schema = decodeJson_1(value.schema);
  if (value.headers !== undefined) result.headers = Object.fromEntries([...value.headers.entries()].map(([key, value]) => [key, decodeJson_2(value)]));
  if (value.examples !== undefined) result.examples = Object.fromEntries([...value.examples.entries()].map(([key, value]) => [key, jsonValueToTsValueFns.string(value)]));
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, decodeJson_3(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Response): Uint8Array {
  const result: WireMessage = [];
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.schema !== undefined) {
    const tsValue = value.schema;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  {
    const fields = value.headers.entries();
    for (const [key, value] of fields) {
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(value) }]]) }],
      );
    }
  }
  {
    const fields = value.examples.entries();
    for (const [key, value] of fields) {
      result.push(
        [4, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, tsValueToWireValueFns.string(value)]]) }],
      );
    }
  }
  {
    const fields = value.extensions.entries();
    for (const [key, value] of fields) {
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_3(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Response {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.schema = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_2(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.headers = new Map(value as any);
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), wireValueToTsValueFns.string(value)] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.examples = new Map(value as any);
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_3(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = new Map(value as any);
  }
  return result;
}
