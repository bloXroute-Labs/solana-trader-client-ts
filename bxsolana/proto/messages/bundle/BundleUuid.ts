import {
  Type as Bundle,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Bundle";
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

export declare namespace $.bundle {
  export interface BundleUuid {
    bundle?: Bundle;
    uuid: string;
  }
}
export type Type = $.bundle.BundleUuid;

export function getDefaultValue(): $.bundle.BundleUuid {
  return {
    bundle: undefined,
    uuid: "",
  };
}

export function createValue(partialValue: Partial<$.bundle.BundleUuid>): $.bundle.BundleUuid {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.BundleUuid): unknown {
  const result: any = {};
  if (value.bundle !== undefined) result.bundle = encodeJson_1(value.bundle);
  if (value.uuid !== undefined) result.uuid = tsValueToJsonValueFns.string(value.uuid);
  return result;
}

export function decodeJson(value: any): $.bundle.BundleUuid {
  const result = getDefaultValue();
  if (value.bundle !== undefined) result.bundle = decodeJson_1(value.bundle);
  if (value.uuid !== undefined) result.uuid = jsonValueToTsValueFns.string(value.uuid);
  return result;
}

export function encodeBinary(value: $.bundle.BundleUuid): Uint8Array {
  const result: WireMessage = [];
  if (value.bundle !== undefined) {
    const tsValue = value.bundle;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.uuid !== undefined) {
    const tsValue = value.uuid;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.BundleUuid {
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
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.uuid = value;
  }
  return result;
}
