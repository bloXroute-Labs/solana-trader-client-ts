import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
import {
  Type as TokenPair,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TokenPair";
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
  default as deserialize,
} from "../../runtime/wire/deserialize";
import {
  unpackFns,
} from "../../runtime/wire/scalar";

export declare namespace $.api {
  export interface GetQuotesStreamRequest {
    projects: Project[];
    tokenPairs: TokenPair[];
  }
}
export type Type = $.api.GetQuotesStreamRequest;

export function getDefaultValue(): $.api.GetQuotesStreamRequest {
  return {
    projects: [],
    tokenPairs: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetQuotesStreamRequest>): $.api.GetQuotesStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetQuotesStreamRequest): unknown {
  const result: any = {};
  result.projects = value.projects.map(value => tsValueToJsonValueFns.enum(value));
  result.tokenPairs = value.tokenPairs.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetQuotesStreamRequest {
  const result = getDefaultValue();
  result.projects = value.projects?.map((value: any) => jsonValueToTsValueFns.enum(value) as Project) ?? [];
  result.tokenPairs = value.tokenPairs?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetQuotesStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.projects) {
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.tokenPairs) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetQuotesStreamRequest {
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
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tokenPairs = value as any;
  }
  return result;
}
