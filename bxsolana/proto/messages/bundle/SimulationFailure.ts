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
  export interface SimulationFailure {
    txSignature: string;
    msg?: string;
  }
}
export type Type = $.bundle.SimulationFailure;

export function getDefaultValue(): $.bundle.SimulationFailure {
  return {
    txSignature: "",
    msg: "",
  };
}

export function createValue(partialValue: Partial<$.bundle.SimulationFailure>): $.bundle.SimulationFailure {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.SimulationFailure): unknown {
  const result: any = {};
  if (value.txSignature !== undefined) result.txSignature = tsValueToJsonValueFns.string(value.txSignature);
  if (value.msg !== undefined) result.msg = tsValueToJsonValueFns.string(value.msg);
  return result;
}

export function decodeJson(value: any): $.bundle.SimulationFailure {
  const result = getDefaultValue();
  if (value.txSignature !== undefined) result.txSignature = jsonValueToTsValueFns.string(value.txSignature);
  if (value.msg !== undefined) result.msg = jsonValueToTsValueFns.string(value.msg);
  return result;
}

export function encodeBinary(value: $.bundle.SimulationFailure): Uint8Array {
  const result: WireMessage = [];
  if (value.txSignature !== undefined) {
    const tsValue = value.txSignature;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.msg !== undefined) {
    const tsValue = value.msg;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.SimulationFailure {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.txSignature = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.msg = value;
  }
  return result;
}
