import {
  Type as ExpiringPacketBatch,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ExpiringPacketBatch";
import {
  Type as Heartbeat,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../shared/Heartbeat";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
  Field,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.block_engine {
  export interface PacketBatchUpdate {
    msg?: (
      | { field: "batches", value: ExpiringPacketBatch }
      | { field: "heartbeat", value: Heartbeat }
  );
  }
}
export type Type = $.block_engine.PacketBatchUpdate;

export function getDefaultValue(): $.block_engine.PacketBatchUpdate {
  return {
    msg: undefined,
  };
}

export function createValue(partialValue: Partial<$.block_engine.PacketBatchUpdate>): $.block_engine.PacketBatchUpdate {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.PacketBatchUpdate): unknown {
  const result: any = {};
  switch (value.msg?.field) {
    case "batches": {
      result.batches = encodeJson_1(value.msg.value);
      break;
    }
    case "heartbeat": {
      result.heartbeat = encodeJson_2(value.msg.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.block_engine.PacketBatchUpdate {
  const result = getDefaultValue();
  if (value.batches !== undefined) result.msg = {field: "batches", value: decodeJson_1(value.batches)};
  if (value.heartbeat !== undefined) result.msg = {field: "heartbeat", value: decodeJson_2(value.heartbeat)};
  return result;
}

export function encodeBinary(value: $.block_engine.PacketBatchUpdate): Uint8Array {
  const result: WireMessage = [];
  switch (value.msg?.field) {
    case "batches": {
      const tsValue = value.msg.value;
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "heartbeat": {
      const tsValue = value.msg.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "batches"],
  [2, "heartbeat"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  msg: new Set([1, 2]),
};
const oneofFieldNamesMap = {
  msg: new Map([
    [1, "batches" as const],
    [2, "heartbeat" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.block_engine.PacketBatchUpdate {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.msg;
    const oneofFieldNames = oneofFieldNamesMap.msg;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.msg = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
