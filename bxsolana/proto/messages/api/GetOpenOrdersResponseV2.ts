import {
  Type as OrderV2,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./OrderV2";
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
  export interface GetOpenOrdersResponseV2 {
    orders: OrderV2[];
  }
}
export type Type = $.api.GetOpenOrdersResponseV2;

export function getDefaultValue(): $.api.GetOpenOrdersResponseV2 {
  return {
    orders: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetOpenOrdersResponseV2>): $.api.GetOpenOrdersResponseV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOpenOrdersResponseV2): unknown {
  const result: any = {};
  result.orders = value.orders.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetOpenOrdersResponseV2 {
  const result = getDefaultValue();
  result.orders = value.orders?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetOpenOrdersResponseV2): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.orders) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOpenOrdersResponseV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.orders = value as any;
  }
  return result;
}
