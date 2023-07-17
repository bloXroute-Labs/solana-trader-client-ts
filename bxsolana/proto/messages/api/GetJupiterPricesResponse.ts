import {
  Type as TokenPriceV2,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TokenPriceV2";
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
  export interface GetJupiterPricesResponse {
    tokenPrices: TokenPriceV2[];
  }
}
export type Type = $.api.GetJupiterPricesResponse;

export function getDefaultValue(): $.api.GetJupiterPricesResponse {
  return {
    tokenPrices: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetJupiterPricesResponse>): $.api.GetJupiterPricesResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetJupiterPricesResponse): unknown {
  const result: any = {};
  result.tokenPrices = value.tokenPrices.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetJupiterPricesResponse {
  const result = getDefaultValue();
  result.tokenPrices = value.tokenPrices?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetJupiterPricesResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tokenPrices) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetJupiterPricesResponse {
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
