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
  export interface GenerateAuthTokensRequest {
    challenge: string;
    clientPubkey: Uint8Array;
    signedChallenge: Uint8Array;
  }
}
export type Type = $.auth.GenerateAuthTokensRequest;

export function getDefaultValue(): $.auth.GenerateAuthTokensRequest {
  return {
    challenge: "",
    clientPubkey: new Uint8Array(),
    signedChallenge: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.auth.GenerateAuthTokensRequest>): $.auth.GenerateAuthTokensRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.auth.GenerateAuthTokensRequest): unknown {
  const result: any = {};
  if (value.challenge !== undefined) result.challenge = tsValueToJsonValueFns.string(value.challenge);
  if (value.clientPubkey !== undefined) result.clientPubkey = tsValueToJsonValueFns.bytes(value.clientPubkey);
  if (value.signedChallenge !== undefined) result.signedChallenge = tsValueToJsonValueFns.bytes(value.signedChallenge);
  return result;
}

export function decodeJson(value: any): $.auth.GenerateAuthTokensRequest {
  const result = getDefaultValue();
  if (value.challenge !== undefined) result.challenge = jsonValueToTsValueFns.string(value.challenge);
  if (value.clientPubkey !== undefined) result.clientPubkey = jsonValueToTsValueFns.bytes(value.clientPubkey);
  if (value.signedChallenge !== undefined) result.signedChallenge = jsonValueToTsValueFns.bytes(value.signedChallenge);
  return result;
}

export function encodeBinary(value: $.auth.GenerateAuthTokensRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.challenge !== undefined) {
    const tsValue = value.challenge;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.clientPubkey !== undefined) {
    const tsValue = value.clientPubkey;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.signedChallenge !== undefined) {
    const tsValue = value.signedChallenge;
    result.push(
      [3, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.auth.GenerateAuthTokensRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.challenge = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.clientPubkey = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.signedChallenge = value;
  }
  return result;
}
