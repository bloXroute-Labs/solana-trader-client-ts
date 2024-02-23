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
  export interface GetBundleResultsStreamRequest {}
}
export type Type = $.api.GetBundleResultsStreamRequest;

export function getDefaultValue(): $.api.GetBundleResultsStreamRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetBundleResultsStreamRequest>): $.api.GetBundleResultsStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBundleResultsStreamRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetBundleResultsStreamRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetBundleResultsStreamRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBundleResultsStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
