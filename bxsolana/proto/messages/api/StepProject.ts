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

export declare namespace $.api {
  export interface StepProject {
    label: string;
    id: string;
  }
}
export type Type = $.api.StepProject;

export function getDefaultValue(): $.api.StepProject {
  return {
    label: "",
    id: "",
  };
}

export function createValue(partialValue: Partial<$.api.StepProject>): $.api.StepProject {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.StepProject): unknown {
  const result: any = {};
  if (value.label !== undefined) result.label = tsValueToJsonValueFns.string(value.label);
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  return result;
}

export function decodeJson(value: any): $.api.StepProject {
  const result = getDefaultValue();
  if (value.label !== undefined) result.label = jsonValueToTsValueFns.string(value.label);
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  return result;
}

export function encodeBinary(value: $.api.StepProject): Uint8Array {
  const result: WireMessage = [];
  if (value.label !== undefined) {
    const tsValue = value.label;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.StepProject {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.label = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  return result;
}
