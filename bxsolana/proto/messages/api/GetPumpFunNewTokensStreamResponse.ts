import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
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

export declare namespace $.api {
  export interface GetPumpFunNewTokensStreamResponse {
    slot: string;
    txnHash: string;
    name: string;
    symbol: string;
    uri: string;
    mint: string;
    bondingCurve: string;
    creator: string;
    timestamp?: Timestamp;
    creatorVault: string;
  }
}
export type Type = $.api.GetPumpFunNewTokensStreamResponse;

export function getDefaultValue(): $.api.GetPumpFunNewTokensStreamResponse {
  return {
    slot: "0",
    txnHash: "",
    name: "",
    symbol: "",
    uri: "",
    mint: "",
    bondingCurve: "",
    creator: "",
    timestamp: undefined,
    creatorVault: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunNewTokensStreamResponse>): $.api.GetPumpFunNewTokensStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunNewTokensStreamResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.txnHash !== undefined) result.txnHash = tsValueToJsonValueFns.string(value.txnHash);
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.symbol !== undefined) result.symbol = tsValueToJsonValueFns.string(value.symbol);
  if (value.uri !== undefined) result.uri = tsValueToJsonValueFns.string(value.uri);
  if (value.mint !== undefined) result.mint = tsValueToJsonValueFns.string(value.mint);
  if (value.bondingCurve !== undefined) result.bondingCurve = tsValueToJsonValueFns.string(value.bondingCurve);
  if (value.creator !== undefined) result.creator = tsValueToJsonValueFns.string(value.creator);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  if (value.creatorVault !== undefined) result.creatorVault = tsValueToJsonValueFns.string(value.creatorVault);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunNewTokensStreamResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.txnHash !== undefined) result.txnHash = jsonValueToTsValueFns.string(value.txnHash);
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.symbol !== undefined) result.symbol = jsonValueToTsValueFns.string(value.symbol);
  if (value.uri !== undefined) result.uri = jsonValueToTsValueFns.string(value.uri);
  if (value.mint !== undefined) result.mint = jsonValueToTsValueFns.string(value.mint);
  if (value.bondingCurve !== undefined) result.bondingCurve = jsonValueToTsValueFns.string(value.bondingCurve);
  if (value.creator !== undefined) result.creator = jsonValueToTsValueFns.string(value.creator);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  if (value.creatorVault !== undefined) result.creatorVault = jsonValueToTsValueFns.string(value.creatorVault);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunNewTokensStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.txnHash !== undefined) {
    const tsValue = value.txnHash;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.symbol !== undefined) {
    const tsValue = value.symbol;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.uri !== undefined) {
    const tsValue = value.uri;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.mint !== undefined) {
    const tsValue = value.mint;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.bondingCurve !== undefined) {
    const tsValue = value.bondingCurve;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.creator !== undefined) {
    const tsValue = value.creator;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.creatorVault !== undefined) {
    const tsValue = value.creatorVault;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunNewTokensStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.txnHash = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.symbol = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.uri = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mint = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bondingCurve = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.creator = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.creatorVault = value;
  }
  return result;
}
