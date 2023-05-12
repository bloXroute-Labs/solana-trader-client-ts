import {
  Type as GetDriftMarginOrderbookResponse,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./GetDriftMarginOrderbookResponse";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetDriftMarginOrderbooksStreamResponse {
    slot: string;
    orderbook?: GetDriftMarginOrderbookResponse;
  }
}
export type Type = $.api.GetDriftMarginOrderbooksStreamResponse;

export function getDefaultValue(): $.api.GetDriftMarginOrderbooksStreamResponse {
  return {
    slot: "0",
    orderbook: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarginOrderbooksStreamResponse>): $.api.GetDriftMarginOrderbooksStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarginOrderbooksStreamResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.orderbook !== undefined) result.orderbook = encodeJson_1(value.orderbook);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarginOrderbooksStreamResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.orderbook !== undefined) result.orderbook = decodeJson_1(value.orderbook);
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarginOrderbooksStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.orderbook !== undefined) {
    const tsValue = value.orderbook;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarginOrderbooksStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.orderbook = value;
  }
  return result;
}
