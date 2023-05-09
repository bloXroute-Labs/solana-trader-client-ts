import {
  Type as TokenAccount,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TokenAccount";
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

export declare namespace $.api {
  export interface GetTokenAccountsResponse {
    accounts: TokenAccount[];
  }
}
export type Type = $.api.GetTokenAccountsResponse;

export function getDefaultValue(): $.api.GetTokenAccountsResponse {
  return {
    accounts: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetTokenAccountsResponse>): $.api.GetTokenAccountsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTokenAccountsResponse): unknown {
  const result: any = {};
  result.accounts = value.accounts.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetTokenAccountsResponse {
  const result = getDefaultValue();
  result.accounts = value.accounts?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetTokenAccountsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.accounts) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTokenAccountsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.accounts = value as any;
  }
  return result;
}
