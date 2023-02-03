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
  export interface GetServerTimeRequest {}
}
export type Type = $.api.GetServerTimeRequest;

export function getDefaultValue(): $.api.GetServerTimeRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetServerTimeRequest>): $.api.GetServerTimeRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetServerTimeRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetServerTimeRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetServerTimeRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetServerTimeRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
