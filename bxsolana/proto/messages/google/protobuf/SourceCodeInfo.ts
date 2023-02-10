import {
  Type as Location,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(SourceCodeInfo)/Location";
import {
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
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface SourceCodeInfo {
    location: Location[];
  }
}
export type Type = $.google.protobuf.SourceCodeInfo;

export function getDefaultValue(): $.google.protobuf.SourceCodeInfo {
  return {
    location: [],
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.SourceCodeInfo>): $.google.protobuf.SourceCodeInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.SourceCodeInfo): unknown {
  const result: any = {};
  result.location = value.location.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.google.protobuf.SourceCodeInfo {
  const result = getDefaultValue();
  result.location = value.location?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.google.protobuf.SourceCodeInfo): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.location) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.SourceCodeInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.location = value as any;
  }
  return result;
}
