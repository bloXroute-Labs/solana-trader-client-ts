import {
  WireMessage,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface Empty {}
}
export type Type = $.google.protobuf.Empty;

export function getDefaultValue(): $.google.protobuf.Empty {
  return {
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Empty>): $.google.protobuf.Empty {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Empty): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Empty {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.google.protobuf.Empty): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Empty {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
