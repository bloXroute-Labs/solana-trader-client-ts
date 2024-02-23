import {
  Type as Ticker,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Ticker";
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
  export interface GetTickersResponse {
    tickers: Ticker[];
  }
}
export type Type = $.api.GetTickersResponse;

export function getDefaultValue(): $.api.GetTickersResponse {
  return {
    tickers: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetTickersResponse>): $.api.GetTickersResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTickersResponse): unknown {
  const result: any = {};
  result.tickers = value.tickers.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetTickersResponse {
  const result = getDefaultValue();
  result.tickers = value.tickers?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetTickersResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tickers) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTickersResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tickers = value as any;
  }
  return result;
}
