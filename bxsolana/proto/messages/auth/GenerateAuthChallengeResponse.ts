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
  export interface GenerateAuthChallengeResponse {
    challenge: string;
  }
}
export type Type = $.auth.GenerateAuthChallengeResponse;

export function getDefaultValue(): $.auth.GenerateAuthChallengeResponse {
  return {
    challenge: "",
  };
}

export function createValue(partialValue: Partial<$.auth.GenerateAuthChallengeResponse>): $.auth.GenerateAuthChallengeResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.auth.GenerateAuthChallengeResponse): unknown {
  const result: any = {};
  if (value.challenge !== undefined) result.challenge = tsValueToJsonValueFns.string(value.challenge);
  return result;
}

export function decodeJson(value: any): $.auth.GenerateAuthChallengeResponse {
  const result = getDefaultValue();
  if (value.challenge !== undefined) result.challenge = jsonValueToTsValueFns.string(value.challenge);
  return result;
}

export function encodeBinary(value: $.auth.GenerateAuthChallengeResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.challenge !== undefined) {
    const tsValue = value.challenge;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.auth.GenerateAuthChallengeResponse {
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
  return result;
}
