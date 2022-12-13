import {
  Type as Block,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Block.js";
import {
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
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type GetBlockStreamResponse = {
    block?: Block;
  }
}
export type Type = $.api.GetBlockStreamResponse;

export function getDefaultValue(): $.api.GetBlockStreamResponse {
  return {
    block: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetBlockStreamResponse>): $.api.GetBlockStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBlockStreamResponse): unknown {
  const result: any = {};
  if (value.block !== undefined) result.block = encodeJson_1(value.block);
  return result;
}

export function decodeJson(value: any): $.api.GetBlockStreamResponse {
  const result = getDefaultValue();
  if (value.block !== undefined) result.block = decodeJson_1(value.block);
  return result;
}

export function encodeBinary(value: $.api.GetBlockStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.block !== undefined) {
    const tsValue = value.block;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBlockStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.block = value;
  }
  return result;
}
