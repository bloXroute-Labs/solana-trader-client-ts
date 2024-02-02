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
  export interface Accepted {
    slot: string;
    validatorIdentity: string;
  }
}
export type Type = $.bundle.Accepted;

export function getDefaultValue(): $.bundle.Accepted {
  return {
    slot: "0",
    validatorIdentity: "",
  };
}

export function createValue(partialValue: Partial<$.bundle.Accepted>): $.bundle.Accepted {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.Accepted): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.validatorIdentity !== undefined) result.validatorIdentity = tsValueToJsonValueFns.string(value.validatorIdentity);
  return result;
}

export function decodeJson(value: any): $.bundle.Accepted {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.validatorIdentity !== undefined) result.validatorIdentity = jsonValueToTsValueFns.string(value.validatorIdentity);
  return result;
}

export function encodeBinary(value: $.bundle.Accepted): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.validatorIdentity !== undefined) {
    const tsValue = value.validatorIdentity;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.Accepted {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.validatorIdentity = value;
  }
  return result;
}
