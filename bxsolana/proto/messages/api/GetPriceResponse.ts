import {
  Type as TokenPrice,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TokenPrice";
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
  export interface GetPriceResponse {
    tokenPrices: TokenPrice[];
  }
}
export type Type = $.api.GetPriceResponse;

export function getDefaultValue(): $.api.GetPriceResponse {
  return {
    tokenPrices: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPriceResponse>): $.api.GetPriceResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPriceResponse): unknown {
  const result: any = {};
  result.tokenPrices = value.tokenPrices.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPriceResponse {
  const result = getDefaultValue();
  result.tokenPrices = value.tokenPrices?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPriceResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tokenPrices) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPriceResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tokenPrices = value as any;
  }
  return result;
}
