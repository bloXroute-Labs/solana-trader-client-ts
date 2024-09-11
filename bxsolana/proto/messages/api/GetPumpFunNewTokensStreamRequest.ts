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
  export interface GetPumpFunNewTokensStreamRequest {}
}
export type Type = $.api.GetPumpFunNewTokensStreamRequest;

export function getDefaultValue(): $.api.GetPumpFunNewTokensStreamRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunNewTokensStreamRequest>): $.api.GetPumpFunNewTokensStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunNewTokensStreamRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunNewTokensStreamRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunNewTokensStreamRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunNewTokensStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
