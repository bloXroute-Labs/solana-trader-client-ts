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

export declare namespace $.common {
  export interface Fee {
    amount: number;
    mint: string;
    percent: number;
  }
}
export type Type = $.common.Fee;

export function getDefaultValue(): $.common.Fee {
  return {
    amount: 0,
    mint: "",
    percent: 0,
  };
}

export function createValue(partialValue: Partial<$.common.Fee>): $.common.Fee {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.common.Fee): unknown {
  const result: any = {};
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.float(value.amount);
  if (value.mint !== undefined) result.mint = tsValueToJsonValueFns.string(value.mint);
  if (value.percent !== undefined) result.percent = tsValueToJsonValueFns.float(value.percent);
  return result;
}

export function decodeJson(value: any): $.common.Fee {
  const result = getDefaultValue();
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.float(value.amount);
  if (value.mint !== undefined) result.mint = jsonValueToTsValueFns.string(value.mint);
  if (value.percent !== undefined) result.percent = jsonValueToTsValueFns.float(value.percent);
  return result;
}

export function encodeBinary(value: $.common.Fee): Uint8Array {
  const result: WireMessage = [];
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [1, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.mint !== undefined) {
    const tsValue = value.mint;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.percent !== undefined) {
    const tsValue = value.percent;
    result.push(
      [3, tsValueToWireValueFns.float(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.common.Fee {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mint = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.percent = value;
  }
  return result;
}
