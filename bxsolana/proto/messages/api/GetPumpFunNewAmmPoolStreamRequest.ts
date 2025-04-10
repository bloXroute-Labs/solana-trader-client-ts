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
  export interface GetPumpFunNewAmmPoolStreamRequest {}
}
export type Type = $.api.GetPumpFunNewAmmPoolStreamRequest;

export function getDefaultValue(): $.api.GetPumpFunNewAmmPoolStreamRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunNewAmmPoolStreamRequest>): $.api.GetPumpFunNewAmmPoolStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunNewAmmPoolStreamRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunNewAmmPoolStreamRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunNewAmmPoolStreamRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunNewAmmPoolStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
