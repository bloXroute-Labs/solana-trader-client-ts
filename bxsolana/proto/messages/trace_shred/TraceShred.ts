import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
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

export declare namespace $.trace_shred {
  export interface TraceShred {
    region: string;
    createdAt?: Timestamp;
    seqNum: number;
  }
}
export type Type = $.trace_shred.TraceShred;

export function getDefaultValue(): $.trace_shred.TraceShred {
  return {
    region: "",
    createdAt: undefined,
    seqNum: 0,
  };
}

export function createValue(partialValue: Partial<$.trace_shred.TraceShred>): $.trace_shred.TraceShred {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.trace_shred.TraceShred): unknown {
  const result: any = {};
  if (value.region !== undefined) result.region = tsValueToJsonValueFns.string(value.region);
  if (value.createdAt !== undefined) result.createdAt = encodeJson_1(value.createdAt);
  if (value.seqNum !== undefined) result.seqNum = tsValueToJsonValueFns.uint32(value.seqNum);
  return result;
}

export function decodeJson(value: any): $.trace_shred.TraceShred {
  const result = getDefaultValue();
  if (value.region !== undefined) result.region = jsonValueToTsValueFns.string(value.region);
  if (value.createdAt !== undefined) result.createdAt = decodeJson_1(value.createdAt);
  if (value.seqNum !== undefined) result.seqNum = jsonValueToTsValueFns.uint32(value.seqNum);
  return result;
}

export function encodeBinary(value: $.trace_shred.TraceShred): Uint8Array {
  const result: WireMessage = [];
  if (value.region !== undefined) {
    const tsValue = value.region;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.createdAt !== undefined) {
    const tsValue = value.createdAt;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.seqNum !== undefined) {
    const tsValue = value.seqNum;
    result.push(
      [3, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.trace_shred.TraceShred {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.region = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createdAt = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.seqNum = value;
  }
  return result;
}
