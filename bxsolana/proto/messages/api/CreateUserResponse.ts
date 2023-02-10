import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
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
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface CreateUserResponse {
    transaction: string;
    project: Project;
  }
}
export type Type = $.api.CreateUserResponse;

export function getDefaultValue(): $.api.CreateUserResponse {
  return {
    transaction: "",
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.CreateUserResponse>): $.api.CreateUserResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.CreateUserResponse): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = tsValueToJsonValueFns.string(value.transaction);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.CreateUserResponse {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = jsonValueToTsValueFns.string(value.transaction);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.CreateUserResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.CreateUserResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.transaction = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
