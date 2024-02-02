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
  export interface DroppedBundle {
    msg: string;
  }
}
export type Type = $.bundle.DroppedBundle;

export function getDefaultValue(): $.bundle.DroppedBundle {
  return {
    msg: "",
  };
}

export function createValue(partialValue: Partial<$.bundle.DroppedBundle>): $.bundle.DroppedBundle {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.DroppedBundle): unknown {
  const result: any = {};
  if (value.msg !== undefined) result.msg = tsValueToJsonValueFns.string(value.msg);
  return result;
}

export function decodeJson(value: any): $.bundle.DroppedBundle {
  const result = getDefaultValue();
  if (value.msg !== undefined) result.msg = jsonValueToTsValueFns.string(value.msg);
  return result;
}

export function encodeBinary(value: $.bundle.DroppedBundle): Uint8Array {
  const result: WireMessage = [];
  if (value.msg !== undefined) {
    const tsValue = value.msg;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.DroppedBundle {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.msg = value;
  }
  return result;
}
