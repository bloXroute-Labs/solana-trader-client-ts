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

export declare namespace $.searcher {
  export interface WriteLockedAccountSubscriptionV0 {
    accounts: string[];
  }
}
export type Type = $.searcher.WriteLockedAccountSubscriptionV0;

export function getDefaultValue(): $.searcher.WriteLockedAccountSubscriptionV0 {
  return {
    accounts: [],
  };
}

export function createValue(partialValue: Partial<$.searcher.WriteLockedAccountSubscriptionV0>): $.searcher.WriteLockedAccountSubscriptionV0 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.WriteLockedAccountSubscriptionV0): unknown {
  const result: any = {};
  result.accounts = value.accounts.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.searcher.WriteLockedAccountSubscriptionV0 {
  const result = getDefaultValue();
  result.accounts = value.accounts?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.searcher.WriteLockedAccountSubscriptionV0): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.accounts) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.WriteLockedAccountSubscriptionV0 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.accounts = value as any;
  }
  return result;
}
