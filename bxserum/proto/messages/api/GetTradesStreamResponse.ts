import {
  Type as GetTradesResponse,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./GetTradesResponse.js";
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
  export interface GetTradesStreamResponse {
    blockHeight: string;
    trades?: GetTradesResponse;
  }
}
export type Type = $.api.GetTradesStreamResponse;

export function getDefaultValue(): $.api.GetTradesStreamResponse {
  return {
    blockHeight: "0",
    trades: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetTradesStreamResponse>): $.api.GetTradesStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTradesStreamResponse): unknown {
  const result: any = {};
  if (value.blockHeight !== undefined) result.blockHeight = tsValueToJsonValueFns.int64(value.blockHeight);
  if (value.trades !== undefined) result.trades = encodeJson_1(value.trades);
  return result;
}

export function decodeJson(value: any): $.api.GetTradesStreamResponse {
  const result = getDefaultValue();
  if (value.blockHeight !== undefined) result.blockHeight = jsonValueToTsValueFns.int64(value.blockHeight);
  if (value.trades !== undefined) result.trades = decodeJson_1(value.trades);
  return result;
}

export function encodeBinary(value: $.api.GetTradesStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.blockHeight !== undefined) {
    const tsValue = value.blockHeight;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.trades !== undefined) {
    const tsValue = value.trades;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTradesStreamResponse {
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
    result.trades = value;
  }
  return result;
}
