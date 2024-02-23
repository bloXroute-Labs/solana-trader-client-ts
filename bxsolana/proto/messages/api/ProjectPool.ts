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

export declare namespace $.api {
  export interface ProjectPool {
    pool: string;
    poolAddress: string;
    token1Reserves: string;
    token1MintAddress: string;
    token1MintSymbol: string;
    token2Reserves: string;
    token2MintAddress: string;
    token2MintSymbol: string;
    openTime: string;
  }
}
export type Type = $.api.ProjectPool;

export function getDefaultValue(): $.api.ProjectPool {
  return {
    pool: "",
    poolAddress: "",
    token1Reserves: "0",
    token1MintAddress: "",
    token1MintSymbol: "",
    token2Reserves: "0",
    token2MintAddress: "",
    token2MintSymbol: "",
    openTime: "0",
  };
}

export function createValue(partialValue: Partial<$.api.ProjectPool>): $.api.ProjectPool {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.ProjectPool): unknown {
  const result: any = {};
  if (value.pool !== undefined) result.pool = tsValueToJsonValueFns.string(value.pool);
  if (value.poolAddress !== undefined) result.poolAddress = tsValueToJsonValueFns.string(value.poolAddress);
  if (value.token1Reserves !== undefined) result.token1Reserves = tsValueToJsonValueFns.int64(value.token1Reserves);
  if (value.token1MintAddress !== undefined) result.token1MintAddress = tsValueToJsonValueFns.string(value.token1MintAddress);
  if (value.token1MintSymbol !== undefined) result.token1MintSymbol = tsValueToJsonValueFns.string(value.token1MintSymbol);
  if (value.token2Reserves !== undefined) result.token2Reserves = tsValueToJsonValueFns.int64(value.token2Reserves);
  if (value.token2MintAddress !== undefined) result.token2MintAddress = tsValueToJsonValueFns.string(value.token2MintAddress);
  if (value.token2MintSymbol !== undefined) result.token2MintSymbol = tsValueToJsonValueFns.string(value.token2MintSymbol);
  if (value.openTime !== undefined) result.openTime = tsValueToJsonValueFns.uint64(value.openTime);
  return result;
}

export function decodeJson(value: any): $.api.ProjectPool {
  const result = getDefaultValue();
  if (value.pool !== undefined) result.pool = jsonValueToTsValueFns.string(value.pool);
  if (value.poolAddress !== undefined) result.poolAddress = jsonValueToTsValueFns.string(value.poolAddress);
  if (value.token1Reserves !== undefined) result.token1Reserves = jsonValueToTsValueFns.int64(value.token1Reserves);
  if (value.token1MintAddress !== undefined) result.token1MintAddress = jsonValueToTsValueFns.string(value.token1MintAddress);
  if (value.token1MintSymbol !== undefined) result.token1MintSymbol = jsonValueToTsValueFns.string(value.token1MintSymbol);
  if (value.token2Reserves !== undefined) result.token2Reserves = jsonValueToTsValueFns.int64(value.token2Reserves);
  if (value.token2MintAddress !== undefined) result.token2MintAddress = jsonValueToTsValueFns.string(value.token2MintAddress);
  if (value.token2MintSymbol !== undefined) result.token2MintSymbol = jsonValueToTsValueFns.string(value.token2MintSymbol);
  if (value.openTime !== undefined) result.openTime = jsonValueToTsValueFns.uint64(value.openTime);
  return result;
}

export function encodeBinary(value: $.api.ProjectPool): Uint8Array {
  const result: WireMessage = [];
  if (value.pool !== undefined) {
    const tsValue = value.pool;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.poolAddress !== undefined) {
    const tsValue = value.poolAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token1Reserves !== undefined) {
    const tsValue = value.token1Reserves;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.token1MintAddress !== undefined) {
    const tsValue = value.token1MintAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token1MintSymbol !== undefined) {
    const tsValue = value.token1MintSymbol;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token2Reserves !== undefined) {
    const tsValue = value.token2Reserves;
    result.push(
      [6, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.token2MintAddress !== undefined) {
    const tsValue = value.token2MintAddress;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token2MintSymbol !== undefined) {
    const tsValue = value.token2MintSymbol;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.openTime !== undefined) {
    const tsValue = value.openTime;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.ProjectPool {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pool = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.poolAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.token1Reserves = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token1MintAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token1MintSymbol = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.token2Reserves = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token2MintAddress = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token2MintSymbol = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.openTime = value;
  }
  return result;
}
