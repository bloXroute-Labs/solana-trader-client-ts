import {
  Type as Field,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Field.js";
import {
  Type as Option,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Option.js";
import {
  Type as SourceContext,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./SourceContext.js";
import {
  Type as Syntax,
  name2num,
  num2name,
} from "./Syntax.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.js";
import {
  default as Long,
} from "../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.js";

export declare namespace $.google.protobuf {
  export interface Type {
    name: string;
    fields: Field[];
    oneofs: string[];
    options: Option[];
    sourceContext?: SourceContext;
    syntax: Syntax;
  }
}
export type Type = $.google.protobuf.Type;

export function getDefaultValue(): $.google.protobuf.Type {
  return {
    name: "",
    fields: [],
    oneofs: [],
    options: [],
    sourceContext: undefined,
    syntax: "SYNTAX_PROTO2",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Type>): $.google.protobuf.Type {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Type): unknown {
  const result: any = {};
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  result.fields = value.fields.map(value => encodeJson_1(value));
  result.oneofs = value.oneofs.map(value => tsValueToJsonValueFns.string(value));
  result.options = value.options.map(value => encodeJson_2(value));
  if (value.sourceContext !== undefined) result.sourceContext = encodeJson_3(value.sourceContext);
  if (value.syntax !== undefined) result.syntax = tsValueToJsonValueFns.enum(value.syntax);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Type {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  result.fields = value.fields?.map((value: any) => decodeJson_1(value)) ?? [];
  result.oneofs = value.oneofs?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.options = value.options?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.sourceContext !== undefined) result.sourceContext = decodeJson_3(value.sourceContext);
  if (value.syntax !== undefined) result.syntax = jsonValueToTsValueFns.enum(value.syntax) as Syntax;
  return result;
}

export function encodeBinary(value: $.google.protobuf.Type): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.fields) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.oneofs) {
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.options) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.sourceContext !== undefined) {
    const tsValue = value.sourceContext;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.syntax !== undefined) {
    const tsValue = value.syntax;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Type {
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
    result.fields = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.oneofs = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.options = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.sourceContext = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.syntax = value;
  }
  return result;
}