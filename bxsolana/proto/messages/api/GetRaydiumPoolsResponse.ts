import {
  Type as ProjectPool,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ProjectPool";
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
  export interface GetRaydiumPoolsResponse {
    pools: ProjectPool[];
  }
}
export type Type = $.api.GetRaydiumPoolsResponse;

export function getDefaultValue(): $.api.GetRaydiumPoolsResponse {
  return {
    pools: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetRaydiumPoolsResponse>): $.api.GetRaydiumPoolsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRaydiumPoolsResponse): unknown {
  const result: any = {};
  result.pools = value.pools.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetRaydiumPoolsResponse {
  const result = getDefaultValue();
  result.pools = value.pools?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetRaydiumPoolsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.pools) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRaydiumPoolsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.pools = value as any;
  }
  return result;
}
