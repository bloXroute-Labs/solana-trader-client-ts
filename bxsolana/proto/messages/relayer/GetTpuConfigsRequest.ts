import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.relayer {
  export interface GetTpuConfigsRequest {}
}
export type Type = $.relayer.GetTpuConfigsRequest;

export function getDefaultValue(): $.relayer.GetTpuConfigsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.relayer.GetTpuConfigsRequest>): $.relayer.GetTpuConfigsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.relayer.GetTpuConfigsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.relayer.GetTpuConfigsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.relayer.GetTpuConfigsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.relayer.GetTpuConfigsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
