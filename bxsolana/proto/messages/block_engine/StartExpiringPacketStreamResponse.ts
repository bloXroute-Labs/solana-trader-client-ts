import {
  Type as Heartbeat,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Heartbeat";
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
  export interface StartExpiringPacketStreamResponse {
    heartbeat?: Heartbeat;
  }
}
export type Type = $.block_engine.StartExpiringPacketStreamResponse;

export function getDefaultValue(): $.block_engine.StartExpiringPacketStreamResponse {
  return {
    heartbeat: undefined,
  };
}

export function createValue(partialValue: Partial<$.block_engine.StartExpiringPacketStreamResponse>): $.block_engine.StartExpiringPacketStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.StartExpiringPacketStreamResponse): unknown {
  const result: any = {};
  if (value.heartbeat !== undefined) result.heartbeat = encodeJson_1(value.heartbeat);
  return result;
}

export function decodeJson(value: any): $.block_engine.StartExpiringPacketStreamResponse {
  const result = getDefaultValue();
  if (value.heartbeat !== undefined) result.heartbeat = decodeJson_1(value.heartbeat);
  return result;
}

export function encodeBinary(value: $.block_engine.StartExpiringPacketStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.heartbeat !== undefined) {
    const tsValue = value.heartbeat;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.StartExpiringPacketStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.heartbeat = value;
  }
  return result;
}
