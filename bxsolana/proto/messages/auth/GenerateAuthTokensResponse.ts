import {
  Type as Token,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Token";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.auth {
  export interface GenerateAuthTokensResponse {
    accessToken?: Token;
    refreshToken?: Token;
  }
}
export type Type = $.auth.GenerateAuthTokensResponse;

export function getDefaultValue(): $.auth.GenerateAuthTokensResponse {
  return {
    accessToken: undefined,
    refreshToken: undefined,
  };
}

export function createValue(partialValue: Partial<$.auth.GenerateAuthTokensResponse>): $.auth.GenerateAuthTokensResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.auth.GenerateAuthTokensResponse): unknown {
  const result: any = {};
  if (value.accessToken !== undefined) result.accessToken = encodeJson_1(value.accessToken);
  if (value.refreshToken !== undefined) result.refreshToken = encodeJson_1(value.refreshToken);
  return result;
}

export function decodeJson(value: any): $.auth.GenerateAuthTokensResponse {
  const result = getDefaultValue();
  if (value.accessToken !== undefined) result.accessToken = decodeJson_1(value.accessToken);
  if (value.refreshToken !== undefined) result.refreshToken = decodeJson_1(value.refreshToken);
  return result;
}

export function encodeBinary(value: $.auth.GenerateAuthTokensResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.accessToken !== undefined) {
    const tsValue = value.accessToken;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.refreshToken !== undefined) {
    const tsValue = value.refreshToken;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.auth.GenerateAuthTokensResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.accessToken = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.refreshToken = value;
  }
  return result;
}
