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
  export interface UnsettledAccountToken {
    address: string;
    amount: number;
  }
}
export type Type = $.api.UnsettledAccountToken;

export function getDefaultValue(): $.api.UnsettledAccountToken {
  return {
    address: "",
    amount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.UnsettledAccountToken>): $.api.UnsettledAccountToken {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.UnsettledAccountToken): unknown {
  const result: any = {};
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  return result;
}

export function decodeJson(value: any): $.api.UnsettledAccountToken {
  const result = getDefaultValue();
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  return result;
}

export function encodeBinary(value: $.api.UnsettledAccountToken): Uint8Array {
  const result: WireMessage = [];
  if (value.address !== undefined) {
    const tsValue = value.address;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.UnsettledAccountToken {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.address = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  return result;
}
