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

export declare namespace $.shared {
  export interface Heartbeat {
    count: string;
  }
}
export type Type = $.shared.Heartbeat;

export function getDefaultValue(): $.shared.Heartbeat {
  return {
    count: "0",
  };
}

export function createValue(partialValue: Partial<$.shared.Heartbeat>): $.shared.Heartbeat {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.shared.Heartbeat): unknown {
  const result: any = {};
  if (value.count !== undefined) result.count = tsValueToJsonValueFns.uint64(value.count);
  return result;
}

export function decodeJson(value: any): $.shared.Heartbeat {
  const result = getDefaultValue();
  if (value.count !== undefined) result.count = jsonValueToTsValueFns.uint64(value.count);
  return result;
}

export function encodeBinary(value: $.shared.Heartbeat): Uint8Array {
  const result: WireMessage = [];
  if (value.count !== undefined) {
    const tsValue = value.count;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.shared.Heartbeat {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.count = value;
  }
  return result;
}
