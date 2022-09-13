import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.geyser {
  export interface Account {
    slot: string;
    pubkey: string;
    data: Uint8Array;
    executable: boolean;
    lamports: string;
    owner: string;
    rentEpoch: string;
    writeVersion: string;
  }
}
export type Type = $.geyser.Account;

export function getDefaultValue(): $.geyser.Account {
  return {
    slot: "0",
    pubkey: "",
    data: new Uint8Array(),
    executable: false,
    lamports: "0",
    owner: "",
    rentEpoch: "0",
    writeVersion: "0",
  };
}

export function createValue(partialValue: Partial<$.geyser.Account>): $.geyser.Account {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.Account): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.pubkey !== undefined) result.pubkey = tsValueToJsonValueFns.string(value.pubkey);
  if (value.data !== undefined) result.data = tsValueToJsonValueFns.bytes(value.data);
  if (value.executable !== undefined) result.executable = tsValueToJsonValueFns.bool(value.executable);
  if (value.lamports !== undefined) result.lamports = tsValueToJsonValueFns.uint64(value.lamports);
  if (value.owner !== undefined) result.owner = tsValueToJsonValueFns.string(value.owner);
  if (value.rentEpoch !== undefined) result.rentEpoch = tsValueToJsonValueFns.uint64(value.rentEpoch);
  if (value.writeVersion !== undefined) result.writeVersion = tsValueToJsonValueFns.uint64(value.writeVersion);
  return result;
}

export function decodeJson(value: any): $.geyser.Account {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.pubkey !== undefined) result.pubkey = jsonValueToTsValueFns.string(value.pubkey);
  if (value.data !== undefined) result.data = jsonValueToTsValueFns.bytes(value.data);
  if (value.executable !== undefined) result.executable = jsonValueToTsValueFns.bool(value.executable);
  if (value.lamports !== undefined) result.lamports = jsonValueToTsValueFns.uint64(value.lamports);
  if (value.owner !== undefined) result.owner = jsonValueToTsValueFns.string(value.owner);
  if (value.rentEpoch !== undefined) result.rentEpoch = jsonValueToTsValueFns.uint64(value.rentEpoch);
  if (value.writeVersion !== undefined) result.writeVersion = jsonValueToTsValueFns.uint64(value.writeVersion);
  return result;
}

export function encodeBinary(value: $.geyser.Account): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.pubkey !== undefined) {
    const tsValue = value.pubkey;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.data !== undefined) {
    const tsValue = value.data;
    result.push(
      [3, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.executable !== undefined) {
    const tsValue = value.executable;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.lamports !== undefined) {
    const tsValue = value.lamports;
    result.push(
      [5, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.owner !== undefined) {
    const tsValue = value.owner;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.rentEpoch !== undefined) {
    const tsValue = value.rentEpoch;
    result.push(
      [7, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.writeVersion !== undefined) {
    const tsValue = value.writeVersion;
    result.push(
      [8, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.Account {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pubkey = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.data = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.executable = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.lamports = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.owner = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.rentEpoch = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.writeVersion = value;
  }
  return result;
}
