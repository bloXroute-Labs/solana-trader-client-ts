import {
  Type as Bundle,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../bundle/Bundle";
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

export declare namespace $.searcher {
  export interface SendBundleRequest {
    bundle?: Bundle;
  }
}
export type Type = $.searcher.SendBundleRequest;

export function getDefaultValue(): $.searcher.SendBundleRequest {
  return {
    bundle: undefined,
  };
}

export function createValue(partialValue: Partial<$.searcher.SendBundleRequest>): $.searcher.SendBundleRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.SendBundleRequest): unknown {
  const result: any = {};
  if (value.bundle !== undefined) result.bundle = encodeJson_1(value.bundle);
  return result;
}

export function decodeJson(value: any): $.searcher.SendBundleRequest {
  const result = getDefaultValue();
  if (value.bundle !== undefined) result.bundle = decodeJson_1(value.bundle);
  return result;
}

export function encodeBinary(value: $.searcher.SendBundleRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.bundle !== undefined) {
    const tsValue = value.bundle;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.SendBundleRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.bundle = value;
  }
  return result;
}
