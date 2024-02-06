import {
  Type as Packet,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Packet";
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

export declare namespace $.packet {
  export interface PacketBatch {
    packets: Packet[];
  }
}
export type Type = $.packet.PacketBatch;

export function getDefaultValue(): $.packet.PacketBatch {
  return {
    packets: [],
  };
}

export function createValue(partialValue: Partial<$.packet.PacketBatch>): $.packet.PacketBatch {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.packet.PacketBatch): unknown {
  const result: any = {};
  result.packets = value.packets.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.packet.PacketBatch {
  const result = getDefaultValue();
  result.packets = value.packets?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.packet.PacketBatch): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.packets) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.packet.PacketBatch {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.packets = value as any;
  }
  return result;
}
