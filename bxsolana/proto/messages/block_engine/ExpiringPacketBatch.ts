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

export declare namespace $.block_engine {
  export interface ExpiringPacketBatch {
    header?: Header;
    batch?: PacketBatch;
    expiryMs: number;
  }
}
export type Type = $.block_engine.ExpiringPacketBatch;

export function getDefaultValue(): $.block_engine.ExpiringPacketBatch {
  return {
    header: undefined,
    batch: undefined,
    expiryMs: 0,
  };
}

export function createValue(partialValue: Partial<$.block_engine.ExpiringPacketBatch>): $.block_engine.ExpiringPacketBatch {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.ExpiringPacketBatch): unknown {
  const result: any = {};
  if (value.header !== undefined) result.header = encodeJson_1(value.header);
  if (value.batch !== undefined) result.batch = encodeJson_2(value.batch);
  if (value.expiryMs !== undefined) result.expiryMs = tsValueToJsonValueFns.uint32(value.expiryMs);
  return result;
}

export function decodeJson(value: any): $.block_engine.ExpiringPacketBatch {
  const result = getDefaultValue();
  if (value.header !== undefined) result.header = decodeJson_1(value.header);
  if (value.batch !== undefined) result.batch = decodeJson_2(value.batch);
  if (value.expiryMs !== undefined) result.expiryMs = jsonValueToTsValueFns.uint32(value.expiryMs);
  return result;
}

export function encodeBinary(value: $.block_engine.ExpiringPacketBatch): Uint8Array {
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
  if (value.expiryMs !== undefined) {
    const tsValue = value.expiryMs;
    result.push(
      [3, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.ExpiringPacketBatch {
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
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.expiryMs = value;
  }
  return result;
}
