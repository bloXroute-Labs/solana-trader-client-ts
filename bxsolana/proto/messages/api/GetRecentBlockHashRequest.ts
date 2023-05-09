import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetRecentBlockHashRequest {}
}
export type Type = $.api.GetRecentBlockHashRequest;

export function getDefaultValue(): $.api.GetRecentBlockHashRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetRecentBlockHashRequest>): $.api.GetRecentBlockHashRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRecentBlockHashRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetRecentBlockHashRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetRecentBlockHashRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRecentBlockHashRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
