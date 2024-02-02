import {
  Type as Meta,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Meta";
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
  export interface Packet {
    data: Uint8Array;
    meta?: Meta;
  }
}
export type Type = $.packet.Packet;

export function getDefaultValue(): $.packet.Packet {
  return {
    data: new Uint8Array(),
    meta: undefined,
  };
}

export function createValue(partialValue: Partial<$.packet.Packet>): $.packet.Packet {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.packet.Packet): unknown {
  const result: any = {};
  if (value.data !== undefined) result.data = tsValueToJsonValueFns.bytes(value.data);
  if (value.meta !== undefined) result.meta = encodeJson_1(value.meta);
  return result;
}

export function decodeJson(value: any): $.packet.Packet {
  const result = getDefaultValue();
  if (value.data !== undefined) result.data = jsonValueToTsValueFns.bytes(value.data);
  if (value.meta !== undefined) result.meta = decodeJson_1(value.meta);
  return result;
}

export function encodeBinary(value: $.packet.Packet): Uint8Array {
  const result: WireMessage = [];
  if (value.data !== undefined) {
    const tsValue = value.data;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.meta !== undefined) {
    const tsValue = value.meta;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.packet.Packet {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.data = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.meta = value;
  }
  return result;
}
