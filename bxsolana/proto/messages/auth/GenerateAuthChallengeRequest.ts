import {
  Type as Role,
  name2num,
  num2name,
} from "./Role";
import {
  tsValueToJsonValueFns,
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
  default as Long,
} from "../../runtime/Long";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.auth {
  export interface GenerateAuthChallengeRequest {
    role: Role;
    pubkey: Uint8Array;
  }
}
export type Type = $.auth.GenerateAuthChallengeRequest;

export function getDefaultValue(): $.auth.GenerateAuthChallengeRequest {
  return {
    role: "RELAYER",
    pubkey: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.auth.GenerateAuthChallengeRequest>): $.auth.GenerateAuthChallengeRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.auth.GenerateAuthChallengeRequest): unknown {
  const result: any = {};
  if (value.role !== undefined) result.role = tsValueToJsonValueFns.enum(value.role);
  if (value.pubkey !== undefined) result.pubkey = tsValueToJsonValueFns.bytes(value.pubkey);
  return result;
}

export function decodeJson(value: any): $.auth.GenerateAuthChallengeRequest {
  const result = getDefaultValue();
  if (value.role !== undefined) result.role = jsonValueToTsValueFns.enum(value.role) as Role;
  if (value.pubkey !== undefined) result.pubkey = jsonValueToTsValueFns.bytes(value.pubkey);
  return result;
}

export function encodeBinary(value: $.auth.GenerateAuthChallengeRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.role !== undefined) {
    const tsValue = value.role;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.pubkey !== undefined) {
    const tsValue = value.pubkey;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.auth.GenerateAuthChallengeRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.role = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.pubkey = value;
  }
  return result;
}
