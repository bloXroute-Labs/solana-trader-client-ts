import {
  Type as PacketFlags,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PacketFlags";
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

export declare namespace $.packet {
  export interface Meta {
    size: string;
    addr: string;
    port: number;
    flags?: PacketFlags;
    senderStake: string;
  }
}
export type Type = $.packet.Meta;

export function getDefaultValue(): $.packet.Meta {
  return {
    size: "0",
    addr: "",
    port: 0,
    flags: undefined,
    senderStake: "0",
  };
}

export function createValue(partialValue: Partial<$.packet.Meta>): $.packet.Meta {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.packet.Meta): unknown {
  const result: any = {};
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.uint64(value.size);
  if (value.addr !== undefined) result.addr = tsValueToJsonValueFns.string(value.addr);
  if (value.port !== undefined) result.port = tsValueToJsonValueFns.uint32(value.port);
  if (value.flags !== undefined) result.flags = encodeJson_1(value.flags);
  if (value.senderStake !== undefined) result.senderStake = tsValueToJsonValueFns.uint64(value.senderStake);
  return result;
}

export function decodeJson(value: any): $.packet.Meta {
  const result = getDefaultValue();
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.uint64(value.size);
  if (value.addr !== undefined) result.addr = jsonValueToTsValueFns.string(value.addr);
  if (value.port !== undefined) result.port = jsonValueToTsValueFns.uint32(value.port);
  if (value.flags !== undefined) result.flags = decodeJson_1(value.flags);
  if (value.senderStake !== undefined) result.senderStake = jsonValueToTsValueFns.uint64(value.senderStake);
  return result;
}

export function encodeBinary(value: $.packet.Meta): Uint8Array {
  const result: WireMessage = [];
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.addr !== undefined) {
    const tsValue = value.addr;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.port !== undefined) {
    const tsValue = value.port;
    result.push(
      [3, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.flags !== undefined) {
    const tsValue = value.flags;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.senderStake !== undefined) {
    const tsValue = value.senderStake;
    result.push(
      [5, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.packet.Meta {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.addr = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.port = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.flags = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.senderStake = value;
  }
  return result;
}
