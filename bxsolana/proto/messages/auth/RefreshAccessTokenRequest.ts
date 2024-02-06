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

export declare namespace $.auth {
  export interface RefreshAccessTokenRequest {
    refreshToken: string;
  }
}
export type Type = $.auth.RefreshAccessTokenRequest;

export function getDefaultValue(): $.auth.RefreshAccessTokenRequest {
  return {
    refreshToken: "",
  };
}

export function createValue(partialValue: Partial<$.auth.RefreshAccessTokenRequest>): $.auth.RefreshAccessTokenRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.auth.RefreshAccessTokenRequest): unknown {
  const result: any = {};
  if (value.refreshToken !== undefined) result.refreshToken = tsValueToJsonValueFns.string(value.refreshToken);
  return result;
}

export function decodeJson(value: any): $.auth.RefreshAccessTokenRequest {
  const result = getDefaultValue();
  if (value.refreshToken !== undefined) result.refreshToken = jsonValueToTsValueFns.string(value.refreshToken);
  return result;
}

export function encodeBinary(value: $.auth.RefreshAccessTokenRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.refreshToken !== undefined) {
    const tsValue = value.refreshToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.auth.RefreshAccessTokenRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.refreshToken = value;
  }
  return result;
}
