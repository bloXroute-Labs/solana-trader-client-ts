import {
  Type as ProjectPools,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ProjectPools";
import {
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export type GetPoolsResponse = {
    projects: ProjectPools[];
  }
}
export type Type = $.api.GetPoolsResponse;

export function getDefaultValue(): $.api.GetPoolsResponse {
  return {
    projects: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPoolsResponse>): $.api.GetPoolsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPoolsResponse): unknown {
  const result: any = {};
  result.projects = value.projects.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPoolsResponse {
  const result = getDefaultValue();
  result.projects = value.projects?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPoolsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.projects) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPoolsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.projects = value as any;
  }
  return result;
}
