import {
  Type as Type_1,
  name2num,
  num2name,
} from "./(SecurityScheme)/Type";
import {
  Type as In,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(SecurityScheme)/In";
import {
  Type as Flow,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./(SecurityScheme)/Flow";
import {
  Type as Scopes,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Scopes";
import {
  Type as Value,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
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
  default as Long,
} from "../../../../../runtime/Long";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize";

export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options {
  export interface SecurityScheme {
    type: Type_1;
    description: string;
    name: string;
    in: In;
    flow: Flow;
    authorizationUrl: string;
    tokenUrl: string;
    scopes?: Scopes;
    extensions: Map<string, Value>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  return {
    type: "TYPE_INVALID",
    description: "",
    name: "",
    in: "IN_INVALID",
    flow: "FLOW_INVALID",
    authorizationUrl: "",
    tokenUrl: "",
    scopes: undefined,
    extensions: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme>): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.in !== undefined) result.in = tsValueToJsonValueFns.enum(value.in);
  if (value.flow !== undefined) result.flow = tsValueToJsonValueFns.enum(value.flow);
  if (value.authorizationUrl !== undefined) result.authorizationUrl = tsValueToJsonValueFns.string(value.authorizationUrl);
  if (value.tokenUrl !== undefined) result.tokenUrl = tsValueToJsonValueFns.string(value.tokenUrl);
  if (value.scopes !== undefined) result.scopes = encodeJson_1(value.scopes);
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, encodeJson_2(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as Type_1;
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.in !== undefined) result.in = jsonValueToTsValueFns.enum(value.in) as In;
  if (value.flow !== undefined) result.flow = jsonValueToTsValueFns.enum(value.flow) as Flow;
  if (value.authorizationUrl !== undefined) result.authorizationUrl = jsonValueToTsValueFns.string(value.authorizationUrl);
  if (value.tokenUrl !== undefined) result.tokenUrl = jsonValueToTsValueFns.string(value.tokenUrl);
  if (value.scopes !== undefined) result.scopes = decodeJson_1(value.scopes);
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, decodeJson_2(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.in !== undefined) {
    const tsValue = value.in;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.flow !== undefined) {
    const tsValue = value.flow;
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.authorizationUrl !== undefined) {
    const tsValue = value.authorizationUrl;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tokenUrl !== undefined) {
    const tsValue = value.tokenUrl;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.scopes !== undefined) {
    const tsValue = value.scopes;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  {
    const fields = value.extensions.entries();
    for (const [key, value] of fields) {
      result.push(
        [9, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.in = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.flow = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.authorizationUrl = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tokenUrl = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.scopes = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_2(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = new Map(value as any);
  }
  return result;
}
