import {
  Type as TokenBalance,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TokenBalance";
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
  export interface GetAccountBalanceResponse {
    tokens: TokenBalance[];
  }
}
export type Type = $.api.GetAccountBalanceResponse;

export function getDefaultValue(): $.api.GetAccountBalanceResponse {
  return {
    tokens: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetAccountBalanceResponse>): $.api.GetAccountBalanceResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetAccountBalanceResponse): unknown {
  const result: any = {};
  result.tokens = value.tokens.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetAccountBalanceResponse {
  const result = getDefaultValue();
  result.tokens = value.tokens?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetAccountBalanceResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tokens) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetAccountBalanceResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tokens = value as any;
  }
  return result;
}
