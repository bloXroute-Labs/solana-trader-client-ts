import {
  Type as TickerV2,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TickerV2";
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
  export interface GetTickersResponseV2 {
    tickers: TickerV2[];
  }
}
export type Type = $.api.GetTickersResponseV2;

export function getDefaultValue(): $.api.GetTickersResponseV2 {
  return {
    tickers: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetTickersResponseV2>): $.api.GetTickersResponseV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTickersResponseV2): unknown {
  const result: any = {};
  result.tickers = value.tickers.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetTickersResponseV2 {
  const result = getDefaultValue();
  result.tickers = value.tickers?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetTickersResponseV2): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tickers) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTickersResponseV2 {
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
