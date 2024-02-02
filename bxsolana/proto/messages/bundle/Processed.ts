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

export declare namespace $.bundle {
  export interface Processed {
    validatorIdentity: string;
    slot: string;
    bundleIndex: string;
  }
}
export type Type = $.bundle.Processed;

export function getDefaultValue(): $.bundle.Processed {
  return {
    validatorIdentity: "",
    slot: "0",
    bundleIndex: "0",
  };
}

export function createValue(partialValue: Partial<$.bundle.Processed>): $.bundle.Processed {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.Processed): unknown {
  const result: any = {};
  if (value.validatorIdentity !== undefined) result.validatorIdentity = tsValueToJsonValueFns.string(value.validatorIdentity);
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.bundleIndex !== undefined) result.bundleIndex = tsValueToJsonValueFns.uint64(value.bundleIndex);
  return result;
}

export function decodeJson(value: any): $.bundle.Processed {
  const result = getDefaultValue();
  if (value.validatorIdentity !== undefined) result.validatorIdentity = jsonValueToTsValueFns.string(value.validatorIdentity);
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.bundleIndex !== undefined) result.bundleIndex = jsonValueToTsValueFns.uint64(value.bundleIndex);
  return result;
}

export function encodeBinary(value: $.bundle.Processed): Uint8Array {
  const result: WireMessage = [];
  if (value.validatorIdentity !== undefined) {
    const tsValue = value.validatorIdentity;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.bundleIndex !== undefined) {
    const tsValue = value.bundleIndex;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.Processed {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.validatorIdentity = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.bundleIndex = value;
  }
  return result;
}
