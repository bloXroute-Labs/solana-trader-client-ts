import {
  Type as Context,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Context";
import {
  Type as GetDriftPerpPositionsValue,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./GetDriftPerpPositionsValue";
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
  export interface GetDriftPerpPositionsResponse {
    context?: Context;
    data?: GetDriftPerpPositionsValue;
  }
}
export type Type = $.api.GetDriftPerpPositionsResponse;

export function getDefaultValue(): $.api.GetDriftPerpPositionsResponse {
  return {
    context: undefined,
    data: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftPerpPositionsResponse>): $.api.GetDriftPerpPositionsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftPerpPositionsResponse): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.data !== undefined) result.data = encodeJson_2(value.data);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftPerpPositionsResponse {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.data !== undefined) result.data = decodeJson_2(value.data);
  return result;
}

export function encodeBinary(value: $.api.GetDriftPerpPositionsResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.data !== undefined) {
    const tsValue = value.data;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftPerpPositionsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.data = value;
  }
  return result;
}