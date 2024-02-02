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
  export interface GetTipAccountsResponse {
    accounts: string[];
  }
}
export type Type = $.searcher.GetTipAccountsResponse;

export function getDefaultValue(): $.searcher.GetTipAccountsResponse {
  return {
    accounts: [],
  };
}

export function createValue(partialValue: Partial<$.searcher.GetTipAccountsResponse>): $.searcher.GetTipAccountsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.GetTipAccountsResponse): unknown {
  const result: any = {};
  result.accounts = value.accounts.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.searcher.GetTipAccountsResponse {
  const result = getDefaultValue();
  result.accounts = value.accounts?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.searcher.GetTipAccountsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.accounts) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.GetTipAccountsResponse {
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
