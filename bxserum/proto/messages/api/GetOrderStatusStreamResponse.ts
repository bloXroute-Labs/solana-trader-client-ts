import {
  Type as GetOrderStatusResponse,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./GetOrderStatusResponse.js";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export interface GetOrderStatusStreamResponse {
    blockHeight: string;
    orderInfo?: GetOrderStatusResponse;
  }
}
export type Type = $.api.GetOrderStatusStreamResponse;

export function getDefaultValue(): $.api.GetOrderStatusStreamResponse {
  return {
    blockHeight: "0",
    orderInfo: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetOrderStatusStreamResponse>): $.api.GetOrderStatusStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrderStatusStreamResponse): unknown {
  const result: any = {};
  if (value.blockHeight !== undefined) result.blockHeight = tsValueToJsonValueFns.int64(value.blockHeight);
  if (value.orderInfo !== undefined) result.orderInfo = encodeJson_1(value.orderInfo);
  return result;
}

export function decodeJson(value: any): $.api.GetOrderStatusStreamResponse {
  const result = getDefaultValue();
  if (value.blockHeight !== undefined) result.blockHeight = jsonValueToTsValueFns.int64(value.blockHeight);
  if (value.orderInfo !== undefined) result.orderInfo = decodeJson_1(value.orderInfo);
  return result;
}

export function encodeBinary(value: $.api.GetOrderStatusStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.blockHeight !== undefined) {
    const tsValue = value.blockHeight;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.orderInfo !== undefined) {
    const tsValue = value.orderInfo;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrderStatusStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.blockHeight = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.orderInfo = value;
  }
  return result;
}
