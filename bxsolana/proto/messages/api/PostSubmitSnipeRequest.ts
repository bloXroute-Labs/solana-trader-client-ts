import {
  Type as PostSubmitRequestEntry,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PostSubmitRequestEntry";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Timestamp";
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
  export interface PostSubmitSnipeRequest {
    entries: PostSubmitRequestEntry[];
    useStakedRPCs?: boolean;
    timestamp?: Timestamp;
  }
}
export type Type = $.api.PostSubmitSnipeRequest;

export function getDefaultValue(): $.api.PostSubmitSnipeRequest {
  return {
    entries: [],
    useStakedRPCs: false,
    timestamp: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitSnipeRequest>): $.api.PostSubmitSnipeRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitSnipeRequest): unknown {
  const result: any = {};
  result.entries = value.entries.map(value => encodeJson_1(value));
  if (value.useStakedRPCs !== undefined) result.useStakedRPCs = tsValueToJsonValueFns.bool(value.useStakedRPCs);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_2(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitSnipeRequest {
  const result = getDefaultValue();
  result.entries = value.entries?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.useStakedRPCs !== undefined) result.useStakedRPCs = jsonValueToTsValueFns.bool(value.useStakedRPCs);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_2(value.timestamp);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitSnipeRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.entries) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.useStakedRPCs !== undefined) {
    const tsValue = value.useStakedRPCs;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitSnipeRequest {
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
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.useStakedRPCs = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
