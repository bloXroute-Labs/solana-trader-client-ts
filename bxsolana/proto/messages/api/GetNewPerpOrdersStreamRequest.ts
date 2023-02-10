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
  export interface GetNewPerpOrdersStreamRequest {
    markets: string[];
    project: Project;
  }
}
export type Type = $.api.GetNewPerpOrdersStreamRequest;

export function getDefaultValue(): $.api.GetNewPerpOrdersStreamRequest {
  return {
    markets: [],
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.GetNewPerpOrdersStreamRequest>): $.api.GetNewPerpOrdersStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetNewPerpOrdersStreamRequest): unknown {
  const result: any = {};
  result.markets = value.markets.map(value => tsValueToJsonValueFns.string(value));
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.GetNewPerpOrdersStreamRequest {
  const result = getDefaultValue();
  result.markets = value.markets?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.GetNewPerpOrdersStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.markets) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetNewPerpOrdersStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.markets = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
