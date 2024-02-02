import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
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
  export interface PacketFlags {
    discard: boolean;
    forwarded: boolean;
    repair: boolean;
    simpleVoteTx: boolean;
    tracerPacket: boolean;
  }
}
export type Type = $.packet.PacketFlags;

export function getDefaultValue(): $.packet.PacketFlags {
  return {
    discard: false,
    forwarded: false,
    repair: false,
    simpleVoteTx: false,
    tracerPacket: false,
  };
}

export function createValue(partialValue: Partial<$.packet.PacketFlags>): $.packet.PacketFlags {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.packet.PacketFlags): unknown {
  const result: any = {};
  if (value.discard !== undefined) result.discard = tsValueToJsonValueFns.bool(value.discard);
  if (value.forwarded !== undefined) result.forwarded = tsValueToJsonValueFns.bool(value.forwarded);
  if (value.repair !== undefined) result.repair = tsValueToJsonValueFns.bool(value.repair);
  if (value.simpleVoteTx !== undefined) result.simpleVoteTx = tsValueToJsonValueFns.bool(value.simpleVoteTx);
  if (value.tracerPacket !== undefined) result.tracerPacket = tsValueToJsonValueFns.bool(value.tracerPacket);
  return result;
}

export function decodeJson(value: any): $.packet.PacketFlags {
  const result = getDefaultValue();
  if (value.discard !== undefined) result.discard = jsonValueToTsValueFns.bool(value.discard);
  if (value.forwarded !== undefined) result.forwarded = jsonValueToTsValueFns.bool(value.forwarded);
  if (value.repair !== undefined) result.repair = jsonValueToTsValueFns.bool(value.repair);
  if (value.simpleVoteTx !== undefined) result.simpleVoteTx = jsonValueToTsValueFns.bool(value.simpleVoteTx);
  if (value.tracerPacket !== undefined) result.tracerPacket = jsonValueToTsValueFns.bool(value.tracerPacket);
  return result;
}

export function encodeBinary(value: $.packet.PacketFlags): Uint8Array {
  const result: WireMessage = [];
  if (value.discard !== undefined) {
    const tsValue = value.discard;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.forwarded !== undefined) {
    const tsValue = value.forwarded;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.repair !== undefined) {
    const tsValue = value.repair;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.simpleVoteTx !== undefined) {
    const tsValue = value.simpleVoteTx;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.tracerPacket !== undefined) {
    const tsValue = value.tracerPacket;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.packet.PacketFlags {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.discard = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.forwarded = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.repair = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.simpleVoteTx = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.tracerPacket = value;
  }
  return result;
}
