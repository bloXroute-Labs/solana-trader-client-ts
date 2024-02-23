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
  export interface AccountMeta {
    programID: string;
    isSigner: boolean;
    isWritable: boolean;
  }
}
export type Type = $.api.AccountMeta;

export function getDefaultValue(): $.api.AccountMeta {
  return {
    programID: "",
    isSigner: false,
    isWritable: false,
  };
}

export function createValue(partialValue: Partial<$.api.AccountMeta>): $.api.AccountMeta {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.AccountMeta): unknown {
  const result: any = {};
  if (value.programID !== undefined) result.programID = tsValueToJsonValueFns.string(value.programID);
  if (value.isSigner !== undefined) result.isSigner = tsValueToJsonValueFns.bool(value.isSigner);
  if (value.isWritable !== undefined) result.isWritable = tsValueToJsonValueFns.bool(value.isWritable);
  return result;
}

export function decodeJson(value: any): $.api.AccountMeta {
  const result = getDefaultValue();
  if (value.programID !== undefined) result.programID = jsonValueToTsValueFns.string(value.programID);
  if (value.isSigner !== undefined) result.isSigner = jsonValueToTsValueFns.bool(value.isSigner);
  if (value.isWritable !== undefined) result.isWritable = jsonValueToTsValueFns.bool(value.isWritable);
  return result;
}

export function encodeBinary(value: $.api.AccountMeta): Uint8Array {
  const result: WireMessage = [];
  if (value.programID !== undefined) {
    const tsValue = value.programID;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isSigner !== undefined) {
    const tsValue = value.isSigner;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isWritable !== undefined) {
    const tsValue = value.isWritable;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.AccountMeta {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.programID = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isSigner = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isWritable = value;
  }
  return result;
}
