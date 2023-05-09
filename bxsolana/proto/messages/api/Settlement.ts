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
  export interface Settlement {
    symbol: string;
    unsettled: number;
    amount: number;
  }
}
export type Type = $.api.Settlement;

export function getDefaultValue(): $.api.Settlement {
  return {
    symbol: "",
    unsettled: 0,
    amount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.Settlement>): $.api.Settlement {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Settlement): unknown {
  const result: any = {};
  if (value.symbol !== undefined) result.symbol = tsValueToJsonValueFns.string(value.symbol);
  if (value.unsettled !== undefined) result.unsettled = tsValueToJsonValueFns.double(value.unsettled);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  return result;
}

export function decodeJson(value: any): $.api.Settlement {
  const result = getDefaultValue();
  if (value.symbol !== undefined) result.symbol = jsonValueToTsValueFns.string(value.symbol);
  if (value.unsettled !== undefined) result.unsettled = jsonValueToTsValueFns.double(value.unsettled);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  return result;
}

export function encodeBinary(value: $.api.Settlement): Uint8Array {
  const result: WireMessage = [];
  if (value.symbol !== undefined) {
    const tsValue = value.symbol;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.unsettled !== undefined) {
    const tsValue = value.unsettled;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Settlement {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.symbol = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.unsettled = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  return result;
}
