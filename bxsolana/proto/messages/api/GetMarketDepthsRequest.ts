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
  export interface GetMarketDepthsRequest {
    markets: string[];
    limit: number;
    project: Project;
  }
}
export type Type = $.api.GetMarketDepthsRequest;

export function getDefaultValue(): $.api.GetMarketDepthsRequest {
  return {
    markets: [],
    limit: 0,
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.GetMarketDepthsRequest>): $.api.GetMarketDepthsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetMarketDepthsRequest): unknown {
  const result: any = {};
  result.markets = value.markets.map(value => tsValueToJsonValueFns.string(value));
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.GetMarketDepthsRequest {
  const result = getDefaultValue();
  result.markets = value.markets?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.GetMarketDepthsRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.markets) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
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

export function decodeBinary(binary: Uint8Array): $.api.GetMarketDepthsRequest {
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
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.limit = value;
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
