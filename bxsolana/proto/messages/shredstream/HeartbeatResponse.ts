import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
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

export declare namespace $.shredstream {
  export interface HeartbeatResponse {
    ttlMs: number;
  }
}
export type Type = $.shredstream.HeartbeatResponse;

export function getDefaultValue(): $.shredstream.HeartbeatResponse {
  return {
    ttlMs: 0,
  };
}

export function createValue(partialValue: Partial<$.shredstream.HeartbeatResponse>): $.shredstream.HeartbeatResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.shredstream.HeartbeatResponse): unknown {
  const result: any = {};
  if (value.ttlMs !== undefined) result.ttlMs = tsValueToJsonValueFns.uint32(value.ttlMs);
  return result;
}

export function decodeJson(value: any): $.shredstream.HeartbeatResponse {
  const result = getDefaultValue();
  if (value.ttlMs !== undefined) result.ttlMs = jsonValueToTsValueFns.uint32(value.ttlMs);
  return result;
}

export function encodeBinary(value: $.shredstream.HeartbeatResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.ttlMs !== undefined) {
    const tsValue = value.ttlMs;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.shredstream.HeartbeatResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.ttlMs = value;
  }
  return result;
}
