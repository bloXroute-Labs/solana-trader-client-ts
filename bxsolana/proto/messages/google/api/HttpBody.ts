import {
  Type as Any,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../protobuf/Any";
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
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.api {
  export interface HttpBody {
    contentType: string;
    data: Uint8Array;
    extensions: Any[];
  }
}
export type Type = $.google.api.HttpBody;

export function getDefaultValue(): $.google.api.HttpBody {
  return {
    contentType: "",
    data: new Uint8Array(),
    extensions: [],
  };
}

export function createValue(partialValue: Partial<$.google.api.HttpBody>): $.google.api.HttpBody {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.api.HttpBody): unknown {
  const result: any = {};
  if (value.contentType !== undefined) result.contentType = tsValueToJsonValueFns.string(value.contentType);
  if (value.data !== undefined) result.data = tsValueToJsonValueFns.bytes(value.data);
  result.extensions = value.extensions.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.google.api.HttpBody {
  const result = getDefaultValue();
  if (value.contentType !== undefined) result.contentType = jsonValueToTsValueFns.string(value.contentType);
  if (value.data !== undefined) result.data = jsonValueToTsValueFns.bytes(value.data);
  result.extensions = value.extensions?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.google.api.HttpBody): Uint8Array {
  const result: WireMessage = [];
  if (value.contentType !== undefined) {
    const tsValue = value.contentType;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.data !== undefined) {
    const tsValue = value.data;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  for (const tsValue of value.extensions) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.api.HttpBody {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentType = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.data = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = value as any;
  }
  return result;
}
