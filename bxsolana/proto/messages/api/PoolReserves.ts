import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
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
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface PoolReserves {
    token1Reserves: string;
    token1Address: string;
    token2Reserves: string;
    token2Address: string;
    poolAddress: string;
    project: Project;
  }
}
export type Type = $.api.PoolReserves;

export function getDefaultValue(): $.api.PoolReserves {
  return {
    token1Reserves: "",
    token1Address: "",
    token2Reserves: "",
    token2Address: "",
    poolAddress: "",
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.PoolReserves>): $.api.PoolReserves {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PoolReserves): unknown {
  const result: any = {};
  if (value.token1Reserves !== undefined) result.token1Reserves = tsValueToJsonValueFns.string(value.token1Reserves);
  if (value.token1Address !== undefined) result.token1Address = tsValueToJsonValueFns.string(value.token1Address);
  if (value.token2Reserves !== undefined) result.token2Reserves = tsValueToJsonValueFns.string(value.token2Reserves);
  if (value.token2Address !== undefined) result.token2Address = tsValueToJsonValueFns.string(value.token2Address);
  if (value.poolAddress !== undefined) result.poolAddress = tsValueToJsonValueFns.string(value.poolAddress);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.PoolReserves {
  const result = getDefaultValue();
  if (value.token1Reserves !== undefined) result.token1Reserves = jsonValueToTsValueFns.string(value.token1Reserves);
  if (value.token1Address !== undefined) result.token1Address = jsonValueToTsValueFns.string(value.token1Address);
  if (value.token2Reserves !== undefined) result.token2Reserves = jsonValueToTsValueFns.string(value.token2Reserves);
  if (value.token2Address !== undefined) result.token2Address = jsonValueToTsValueFns.string(value.token2Address);
  if (value.poolAddress !== undefined) result.poolAddress = jsonValueToTsValueFns.string(value.poolAddress);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.PoolReserves): Uint8Array {
  const result: WireMessage = [];
  if (value.token1Reserves !== undefined) {
    const tsValue = value.token1Reserves;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token1Address !== undefined) {
    const tsValue = value.token1Address;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token2Reserves !== undefined) {
    const tsValue = value.token2Reserves;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token2Address !== undefined) {
    const tsValue = value.token2Address;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.poolAddress !== undefined) {
    const tsValue = value.poolAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PoolReserves {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token1Reserves = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token1Address = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token2Reserves = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token2Address = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.poolAddress = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
