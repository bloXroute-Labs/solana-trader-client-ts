import {
  Type as GetDriftMarketDepthResponse,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./GetDriftMarketDepthResponse";
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
  export interface GetDriftMarketDepthStreamResponse {
    slot: string;
    Data?: GetDriftMarketDepthResponse;
  }
}
export type Type = $.api.GetDriftMarketDepthStreamResponse;

export function getDefaultValue(): $.api.GetDriftMarketDepthStreamResponse {
  return {
    slot: "0",
    Data: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarketDepthStreamResponse>): $.api.GetDriftMarketDepthStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarketDepthStreamResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.Data !== undefined) result.Data = encodeJson_1(value.Data);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarketDepthStreamResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.Data !== undefined) result.Data = decodeJson_1(value.Data);
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarketDepthStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.Data !== undefined) {
    const tsValue = value.Data;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarketDepthStreamResponse {
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
    result.Data = value;
  }
  return result;
}
