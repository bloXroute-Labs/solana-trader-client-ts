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

export declare namespace $.api {
  export interface GetBundleResultsStreamResponse {
    uuid: string;
    bundleResult: string;
    timestamp?: Timestamp;
  }
}
export type Type = $.api.GetBundleResultsStreamResponse;

export function getDefaultValue(): $.api.GetBundleResultsStreamResponse {
  return {
    uuid: "",
    bundleResult: "",
    timestamp: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetBundleResultsStreamResponse>): $.api.GetBundleResultsStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBundleResultsStreamResponse): unknown {
  const result: any = {};
  if (value.uuid !== undefined) result.uuid = tsValueToJsonValueFns.string(value.uuid);
  if (value.bundleResult !== undefined) result.bundleResult = tsValueToJsonValueFns.string(value.bundleResult);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.api.GetBundleResultsStreamResponse {
  const result = getDefaultValue();
  if (value.uuid !== undefined) result.uuid = jsonValueToTsValueFns.string(value.uuid);
  if (value.bundleResult !== undefined) result.bundleResult = jsonValueToTsValueFns.string(value.bundleResult);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  return result;
}

export function encodeBinary(value: $.api.GetBundleResultsStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.uuid !== undefined) {
    const tsValue = value.uuid;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.bundleResult !== undefined) {
    const tsValue = value.bundleResult;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBundleResultsStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.uuid = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bundleResult = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
