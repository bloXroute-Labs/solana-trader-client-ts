import {
  Type as Option,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Option";
import {
  Type as Syntax,
  name2num,
  num2name,
} from "./Syntax";
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as Long,
} from "../../../runtime/Long";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface Method {
    name: string;
    requestTypeUrl: string;
    requestStreaming: boolean;
    responseTypeUrl: string;
    responseStreaming: boolean;
    options: Option[];
    syntax: Syntax;
  }
}
export type Type = $.google.protobuf.Method;

export function getDefaultValue(): $.google.protobuf.Method {
  return {
    name: "",
    requestTypeUrl: "",
    requestStreaming: false,
    responseTypeUrl: "",
    responseStreaming: false,
    options: [],
    syntax: "SYNTAX_PROTO2",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Method>): $.google.protobuf.Method {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Method): unknown {
  const result: any = {};
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.requestTypeUrl !== undefined) result.requestTypeUrl = tsValueToJsonValueFns.string(value.requestTypeUrl);
  if (value.requestStreaming !== undefined) result.requestStreaming = tsValueToJsonValueFns.bool(value.requestStreaming);
  if (value.responseTypeUrl !== undefined) result.responseTypeUrl = tsValueToJsonValueFns.string(value.responseTypeUrl);
  if (value.responseStreaming !== undefined) result.responseStreaming = tsValueToJsonValueFns.bool(value.responseStreaming);
  result.options = value.options.map(value => encodeJson_1(value));
  if (value.syntax !== undefined) result.syntax = tsValueToJsonValueFns.enum(value.syntax);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Method {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.requestTypeUrl !== undefined) result.requestTypeUrl = jsonValueToTsValueFns.string(value.requestTypeUrl);
  if (value.requestStreaming !== undefined) result.requestStreaming = jsonValueToTsValueFns.bool(value.requestStreaming);
  if (value.responseTypeUrl !== undefined) result.responseTypeUrl = jsonValueToTsValueFns.string(value.responseTypeUrl);
  if (value.responseStreaming !== undefined) result.responseStreaming = jsonValueToTsValueFns.bool(value.responseStreaming);
  result.options = value.options?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.syntax !== undefined) result.syntax = jsonValueToTsValueFns.enum(value.syntax) as Syntax;
  return result;
}

export function encodeBinary(value: $.google.protobuf.Method): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.requestTypeUrl !== undefined) {
    const tsValue = value.requestTypeUrl;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.requestStreaming !== undefined) {
    const tsValue = value.requestStreaming;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.responseTypeUrl !== undefined) {
    const tsValue = value.responseTypeUrl;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.responseStreaming !== undefined) {
    const tsValue = value.responseStreaming;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  for (const tsValue of value.options) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.syntax !== undefined) {
    const tsValue = value.syntax;
    result.push(
      [7, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Method {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.requestTypeUrl = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.requestStreaming = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.responseTypeUrl = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.responseStreaming = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.options = value as any;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.syntax = value;
  }
  return result;
}
