import {
  Type as Method,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Method";
import {
  Type as Option,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Option";
import {
  Type as SourceContext,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./SourceContext";
import {
  Type as Mixin,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Mixin";
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
  export interface Api {
    name: string;
    methods: Method[];
    options: Option[];
    version: string;
    sourceContext?: SourceContext;
    mixins: Mixin[];
    syntax: Syntax;
  }
}
export type Type = $.google.protobuf.Api;

export function getDefaultValue(): $.google.protobuf.Api {
  return {
    name: "",
    methods: [],
    options: [],
    version: "",
    sourceContext: undefined,
    mixins: [],
    syntax: "SYNTAX_PROTO2",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Api>): $.google.protobuf.Api {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Api): unknown {
  const result: any = {};
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  result.methods = value.methods.map(value => encodeJson_1(value));
  result.options = value.options.map(value => encodeJson_2(value));
  if (value.version !== undefined) result.version = tsValueToJsonValueFns.string(value.version);
  if (value.sourceContext !== undefined) result.sourceContext = encodeJson_3(value.sourceContext);
  result.mixins = value.mixins.map(value => encodeJson_4(value));
  if (value.syntax !== undefined) result.syntax = tsValueToJsonValueFns.enum(value.syntax);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Api {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  result.methods = value.methods?.map((value: any) => decodeJson_1(value)) ?? [];
  result.options = value.options?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.version !== undefined) result.version = jsonValueToTsValueFns.string(value.version);
  if (value.sourceContext !== undefined) result.sourceContext = decodeJson_3(value.sourceContext);
  result.mixins = value.mixins?.map((value: any) => decodeJson_4(value)) ?? [];
  if (value.syntax !== undefined) result.syntax = jsonValueToTsValueFns.enum(value.syntax) as Syntax;
  return result;
}

export function encodeBinary(value: $.google.protobuf.Api): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.methods) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.options) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.version !== undefined) {
    const tsValue = value.version;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.sourceContext !== undefined) {
    const tsValue = value.sourceContext;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  for (const tsValue of value.mixins) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
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

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Api {
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
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.methods = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.options = value as any;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.version = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.sourceContext = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.mixins = value as any;
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
