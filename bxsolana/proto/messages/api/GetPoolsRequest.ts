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
  export interface GetPoolsRequest {
    projects: Project[];
    pairOrAddress: string;
  }
}
export type Type = $.api.GetPoolsRequest;

export function getDefaultValue(): $.api.GetPoolsRequest {
  return {
    projects: [],
    pairOrAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetPoolsRequest>): $.api.GetPoolsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPoolsRequest): unknown {
  const result: any = {};
  result.projects = value.projects.map(value => tsValueToJsonValueFns.enum(value));
  if (value.pairOrAddress !== undefined) result.pairOrAddress = tsValueToJsonValueFns.string(value.pairOrAddress);
  return result;
}

export function decodeJson(value: any): $.api.GetPoolsRequest {
  const result = getDefaultValue();
  result.projects = value.projects?.map((value: any) => jsonValueToTsValueFns.enum(value) as Project) ?? [];
  if (value.pairOrAddress !== undefined) result.pairOrAddress = jsonValueToTsValueFns.string(value.pairOrAddress);
  return result;
}

export function encodeBinary(value: $.api.GetPoolsRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.projects) {
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.pairOrAddress !== undefined) {
    const tsValue = value.pairOrAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPoolsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.projects = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pairOrAddress = value;
  }
  return result;
}
