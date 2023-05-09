import {
  Type as Order,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Order";
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
  export interface GetOrderByIDResponse {
    order?: Order;
  }
}
export type Type = $.api.GetOrderByIDResponse;

export function getDefaultValue(): $.api.GetOrderByIDResponse {
  return {
    order: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetOrderByIDResponse>): $.api.GetOrderByIDResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrderByIDResponse): unknown {
  const result: any = {};
  if (value.order !== undefined) result.order = encodeJson_1(value.order);
  return result;
}

export function decodeJson(value: any): $.api.GetOrderByIDResponse {
  const result = getDefaultValue();
  if (value.order !== undefined) result.order = decodeJson_1(value.order);
  return result;
}

export function encodeBinary(value: $.api.GetOrderByIDResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.order !== undefined) {
    const tsValue = value.order;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrderByIDResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.order = value;
  }
  return result;
}
