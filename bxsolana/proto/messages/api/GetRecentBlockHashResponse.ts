import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetRecentBlockHashResponse {
    blockHash: string;
  }
}
export type Type = $.api.GetRecentBlockHashResponse;

export function getDefaultValue(): $.api.GetRecentBlockHashResponse {
  return {
    blockHash: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetRecentBlockHashResponse>): $.api.GetRecentBlockHashResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRecentBlockHashResponse): unknown {
  const result: any = {};
  if (value.blockHash !== undefined) result.blockHash = tsValueToJsonValueFns.string(value.blockHash);
  return result;
}

export function decodeJson(value: any): $.api.GetRecentBlockHashResponse {
  const result = getDefaultValue();
  if (value.blockHash !== undefined) result.blockHash = jsonValueToTsValueFns.string(value.blockHash);
  return result;
}

export function encodeBinary(value: $.api.GetRecentBlockHashResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.blockHash !== undefined) {
    const tsValue = value.blockHash;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRecentBlockHashResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.blockHash = value;
  }
  return result;
}
