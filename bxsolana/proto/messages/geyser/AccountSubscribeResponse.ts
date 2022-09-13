import {
  Type as Account,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Account.js";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface AccountSubscribeResponse {
    accounts: Account[];
  }
}
export type Type = $.geyser.AccountSubscribeResponse;

export function getDefaultValue(): $.geyser.AccountSubscribeResponse {
  return {
    accounts: [],
  };
}

export function createValue(partialValue: Partial<$.geyser.AccountSubscribeResponse>): $.geyser.AccountSubscribeResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.AccountSubscribeResponse): unknown {
  const result: any = {};
  result.accounts = value.accounts.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.geyser.AccountSubscribeResponse {
  const result = getDefaultValue();
  result.accounts = value.accounts?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.geyser.AccountSubscribeResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.accounts) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.AccountSubscribeResponse {
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
