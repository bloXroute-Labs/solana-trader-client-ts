import {
  Type as PostSubmitRequestEntry,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PostSubmitRequestEntry.js";
import {
  Type as SubmitStrategy,
  name2num,
  num2name,
} from "./SubmitStrategy.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type PostSubmitBatchRequest = {
    entries: PostSubmitRequestEntry[];
    SubmitStrategy: SubmitStrategy;
  }
}
export type Type = $.api.PostSubmitBatchRequest;

export function getDefaultValue(): $.api.PostSubmitBatchRequest {
  return {
    entries: [],
    SubmitStrategy: "P_UKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitBatchRequest>): $.api.PostSubmitBatchRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitBatchRequest): unknown {
  const result: any = {};
  result.entries = value.entries.map(value => encodeJson_1(value));
  if (value.SubmitStrategy !== undefined) result.SubmitStrategy = tsValueToJsonValueFns.enum(value.SubmitStrategy);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitBatchRequest {
  const result = getDefaultValue();
  result.entries = value.entries?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.SubmitStrategy !== undefined) result.SubmitStrategy = jsonValueToTsValueFns.enum(value.SubmitStrategy) as SubmitStrategy;
  return result;
}

export function encodeBinary(value: $.api.PostSubmitBatchRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.entries) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.SubmitStrategy !== undefined) {
    const tsValue = value.SubmitStrategy;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitBatchRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.entries = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.SubmitStrategy = value;
  }
  return result;
}
