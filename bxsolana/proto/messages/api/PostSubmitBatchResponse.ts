import {
  Type as PostSubmitBatchResponseEntry,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PostSubmitBatchResponseEntry";
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface PostSubmitBatchResponse {
    transactions: PostSubmitBatchResponseEntry[];
    uuid?: string;
  }
}
export type Type = $.api.PostSubmitBatchResponse;

export function getDefaultValue(): $.api.PostSubmitBatchResponse {
  return {
    transactions: [],
    uuid: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitBatchResponse>): $.api.PostSubmitBatchResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitBatchResponse): unknown {
  const result: any = {};
  result.transactions = value.transactions.map(value => encodeJson_1(value));
  if (value.uuid !== undefined) result.uuid = tsValueToJsonValueFns.string(value.uuid);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitBatchResponse {
  const result = getDefaultValue();
  result.transactions = value.transactions?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.uuid !== undefined) result.uuid = jsonValueToTsValueFns.string(value.uuid);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitBatchResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.transactions) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.uuid !== undefined) {
    const tsValue = value.uuid;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitBatchResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.uuid = value;
  }
  return result;
}
