import {
  Type as Header,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Header";
import {
  Type as PacketBatch,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../packet/PacketBatch";
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

export declare namespace $.block_engine {
  export interface SubscribePacketsResponse {
    header?: Header;
    batch?: PacketBatch;
  }
}
export type Type = $.block_engine.SubscribePacketsResponse;

export function getDefaultValue(): $.block_engine.SubscribePacketsResponse {
  return {
    header: undefined,
    batch: undefined,
  };
}

export function createValue(partialValue: Partial<$.block_engine.SubscribePacketsResponse>): $.block_engine.SubscribePacketsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.SubscribePacketsResponse): unknown {
  const result: any = {};
  if (value.header !== undefined) result.header = encodeJson_1(value.header);
  if (value.batch !== undefined) result.batch = encodeJson_2(value.batch);
  return result;
}

export function decodeJson(value: any): $.block_engine.SubscribePacketsResponse {
  const result = getDefaultValue();
  if (value.header !== undefined) result.header = decodeJson_1(value.header);
  if (value.batch !== undefined) result.batch = decodeJson_2(value.batch);
  return result;
}

export function encodeBinary(value: $.block_engine.SubscribePacketsResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.header !== undefined) {
    const tsValue = value.header;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.batch !== undefined) {
    const tsValue = value.batch;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.SubscribePacketsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.header = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.batch = value;
  }
  return result;
}
