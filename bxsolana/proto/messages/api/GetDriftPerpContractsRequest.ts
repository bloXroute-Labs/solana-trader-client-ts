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
  export interface GetDriftPerpContractsRequest {}
}
export type Type = $.api.GetDriftPerpContractsRequest;

export function getDefaultValue(): $.api.GetDriftPerpContractsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftPerpContractsRequest>): $.api.GetDriftPerpContractsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftPerpContractsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetDriftPerpContractsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetDriftPerpContractsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftPerpContractsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
