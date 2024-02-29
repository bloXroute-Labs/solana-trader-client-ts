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
  default as Long,
} from "../../runtime/Long";
import {
  tsValueToWireValueFns,
  unpackFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetPoolReservesStreamRequest {
    projects: Project[];
    pools: string[];
  }
}
export type Type = $.api.GetPoolReservesStreamRequest;

export function getDefaultValue(): $.api.GetPoolReservesStreamRequest {
  return {
    projects: [],
    pools: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPoolReservesStreamRequest>): $.api.GetPoolReservesStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPoolReservesStreamRequest): unknown {
  const result: any = {};
  result.projects = value.projects.map(value => tsValueToJsonValueFns.enum(value));
  result.pools = value.pools.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPoolReservesStreamRequest {
  const result = getDefaultValue();
  result.projects = value.projects?.map((value: any) => jsonValueToTsValueFns.enum(value) as Project) ?? [];
  result.pools = value.pools?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPoolReservesStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.projects) {
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.pools) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPoolReservesStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.projects = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.pools = value as any;
  }
  return result;
}
