import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
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

export declare namespace $.google.protobuf {
  export interface FieldMask {
    paths: string[];
  }
}
export type Type = $.google.protobuf.FieldMask;

export function getDefaultValue(): $.google.protobuf.FieldMask {
  return {
    paths: [],
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.FieldMask>): $.google.protobuf.FieldMask {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.FieldMask): unknown {
  const result: any = {};
  result.paths = value.paths.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.google.protobuf.FieldMask {
  const result = getDefaultValue();
  result.paths = value.paths?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.google.protobuf.FieldMask): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.paths) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.FieldMask {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.paths = value as any;
  }
  return result;
}
