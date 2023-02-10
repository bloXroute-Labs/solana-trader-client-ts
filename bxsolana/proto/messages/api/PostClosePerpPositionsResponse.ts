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

export declare namespace $.api {
  export interface PostClosePerpPositionsResponse {
    transactions: string[];
  }
}
export type Type = $.api.PostClosePerpPositionsResponse;

export function getDefaultValue(): $.api.PostClosePerpPositionsResponse {
  return {
    transactions: [],
  };
}

export function createValue(partialValue: Partial<$.api.PostClosePerpPositionsResponse>): $.api.PostClosePerpPositionsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostClosePerpPositionsResponse): unknown {
  const result: any = {};
  result.transactions = value.transactions.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.PostClosePerpPositionsResponse {
  const result = getDefaultValue();
  result.transactions = value.transactions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.PostClosePerpPositionsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.transactions) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostClosePerpPositionsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
  }
  return result;
}
