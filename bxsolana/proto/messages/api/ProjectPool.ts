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

export declare namespace $.api {
  export type ProjectPool = {
    name: string;
    address: string;
    token1MintAddress: string;
    token1MintSymbol: string;
    token2MintAddress: string;
    token2MintSymbol: string;
  }
}
export type Type = $.api.ProjectPool;

export function getDefaultValue(): $.api.ProjectPool {
  return {
    name: "",
    address: "",
    token1MintAddress: "",
    token1MintSymbol: "",
    token2MintAddress: "",
    token2MintSymbol: "",
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
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.token1MintAddress !== undefined) result.token1MintAddress = tsValueToJsonValueFns.string(value.token1MintAddress);
  if (value.token1MintSymbol !== undefined) result.token1MintSymbol = tsValueToJsonValueFns.string(value.token1MintSymbol);
  if (value.token2MintAddress !== undefined) result.token2MintAddress = tsValueToJsonValueFns.string(value.token2MintAddress);
  if (value.token2MintSymbol !== undefined) result.token2MintSymbol = tsValueToJsonValueFns.string(value.token2MintSymbol);
  return result;
}

export function decodeJson(value: any): $.api.ProjectPool {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.token1MintAddress !== undefined) result.token1MintAddress = jsonValueToTsValueFns.string(value.token1MintAddress);
  if (value.token1MintSymbol !== undefined) result.token1MintSymbol = jsonValueToTsValueFns.string(value.token1MintSymbol);
  if (value.token2MintAddress !== undefined) result.token2MintAddress = jsonValueToTsValueFns.string(value.token2MintAddress);
  if (value.token2MintSymbol !== undefined) result.token2MintSymbol = jsonValueToTsValueFns.string(value.token2MintSymbol);
  return result;
}

export function encodeBinary(value: $.api.ProjectPool): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.address !== undefined) {
    const tsValue = value.address;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token1MintAddress !== undefined) {
    const tsValue = value.token1MintAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token1MintSymbol !== undefined) {
    const tsValue = value.token1MintSymbol;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token2MintAddress !== undefined) {
    const tsValue = value.token2MintAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token2MintSymbol !== undefined) {
    const tsValue = value.token2MintSymbol;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
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
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.address = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token1MintAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token1MintSymbol = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token2MintAddress = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token2MintSymbol = value;
  }
  return result;
}
