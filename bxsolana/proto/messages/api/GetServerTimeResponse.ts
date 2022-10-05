import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type GetServerTimeResponse = {
    timestamp: string;
  }
}
export type Type = $.api.GetServerTimeResponse;

export function getDefaultValue(): $.api.GetServerTimeResponse {
  return {
    timestamp: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetServerTimeResponse>): $.api.GetServerTimeResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetServerTimeResponse): unknown {
  const result: any = {};
  if (value.timestamp !== undefined) result.timestamp = tsValueToJsonValueFns.string(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.api.GetServerTimeResponse {
  const result = getDefaultValue();
  if (value.timestamp !== undefined) result.timestamp = jsonValueToTsValueFns.string(value.timestamp);
  return result;
}

export function encodeBinary(value: $.api.GetServerTimeResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetServerTimeResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
