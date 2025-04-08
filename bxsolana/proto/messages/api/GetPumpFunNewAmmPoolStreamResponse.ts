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
  export interface GetPumpFunNewAmmPoolStreamResponse {
    slot: string;
    creator: string;
    pool: string;
    baseMint: string;
    quoteMint: string;
    lpMint: string;
    timestamp?: Timestamp;
  }
}
export type Type = $.api.GetPumpFunNewAmmPoolStreamResponse;

export function getDefaultValue(): $.api.GetPumpFunNewAmmPoolStreamResponse {
  return {
    slot: "0",
    creator: "",
    pool: "",
    baseMint: "",
    quoteMint: "",
    lpMint: "",
    timestamp: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunNewAmmPoolStreamResponse>): $.api.GetPumpFunNewAmmPoolStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunNewAmmPoolStreamResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.creator !== undefined) result.creator = tsValueToJsonValueFns.string(value.creator);
  if (value.pool !== undefined) result.pool = tsValueToJsonValueFns.string(value.pool);
  if (value.baseMint !== undefined) result.baseMint = tsValueToJsonValueFns.string(value.baseMint);
  if (value.quoteMint !== undefined) result.quoteMint = tsValueToJsonValueFns.string(value.quoteMint);
  if (value.lpMint !== undefined) result.lpMint = tsValueToJsonValueFns.string(value.lpMint);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunNewAmmPoolStreamResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.creator !== undefined) result.creator = jsonValueToTsValueFns.string(value.creator);
  if (value.pool !== undefined) result.pool = jsonValueToTsValueFns.string(value.pool);
  if (value.baseMint !== undefined) result.baseMint = jsonValueToTsValueFns.string(value.baseMint);
  if (value.quoteMint !== undefined) result.quoteMint = jsonValueToTsValueFns.string(value.quoteMint);
  if (value.lpMint !== undefined) result.lpMint = jsonValueToTsValueFns.string(value.lpMint);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunNewAmmPoolStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.creator !== undefined) {
    const tsValue = value.creator;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.pool !== undefined) {
    const tsValue = value.pool;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseMint !== undefined) {
    const tsValue = value.baseMint;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quoteMint !== undefined) {
    const tsValue = value.quoteMint;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.lpMint !== undefined) {
    const tsValue = value.lpMint;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunNewAmmPoolStreamResponse {
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
    result.creator = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pool = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseMint = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteMint = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lpMint = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
