import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.api {
  export interface VisibilityRule {
    selector: string;
    restriction: string;
  }
}
export type Type = $.google.api.VisibilityRule;

export function getDefaultValue(): $.google.api.VisibilityRule {
  return {
    selector: "",
    restriction: "",
  };
}

export function createValue(partialValue: Partial<$.google.api.VisibilityRule>): $.google.api.VisibilityRule {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.api.VisibilityRule): unknown {
  const result: any = {};
  if (value.selector !== undefined) result.selector = tsValueToJsonValueFns.string(value.selector);
  if (value.restriction !== undefined) result.restriction = tsValueToJsonValueFns.string(value.restriction);
  return result;
}

export function decodeJson(value: any): $.google.api.VisibilityRule {
  const result = getDefaultValue();
  if (value.selector !== undefined) result.selector = jsonValueToTsValueFns.string(value.selector);
  if (value.restriction !== undefined) result.restriction = jsonValueToTsValueFns.string(value.restriction);
  return result;
}

export function encodeBinary(value: $.google.api.VisibilityRule): Uint8Array {
  const result: WireMessage = [];
  if (value.selector !== undefined) {
    const tsValue = value.selector;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.restriction !== undefined) {
    const tsValue = value.restriction;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.api.VisibilityRule {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.selector = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.restriction = value;
  }
  return result;
}
