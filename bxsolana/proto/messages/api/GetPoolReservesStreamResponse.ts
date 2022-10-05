import {
  Type as PoolReserves,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PoolReserves.js";
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
  export type GetPoolReservesStreamResponse = {
    slot: string;
    reserves?: PoolReserves;
  }
}
export type Type = $.api.GetPoolReservesStreamResponse;

export function getDefaultValue(): $.api.GetPoolReservesStreamResponse {
  return {
    slot: "0",
    reserves: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetPoolReservesStreamResponse>): $.api.GetPoolReservesStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPoolReservesStreamResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.reserves !== undefined) result.reserves = encodeJson_1(value.reserves);
  return result;
}

export function decodeJson(value: any): $.api.GetPoolReservesStreamResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.reserves !== undefined) result.reserves = decodeJson_1(value.reserves);
  return result;
}

export function encodeBinary(value: $.api.GetPoolReservesStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.reserves !== undefined) {
    const tsValue = value.reserves;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPoolReservesStreamResponse {
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
    result.reserves = value;
  }
  return result;
}
