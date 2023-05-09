import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
import {
  Type as PerpCollateralType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "../common/PerpCollateralType";
import {
  Type as PerpCollateralToken,
  name2num as name2num_2,
  num2name as num2name_2,
} from "../common/PerpCollateralToken";
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
  export interface PostManageCollateralRequest {
    accountAddress: string;
    amount: number;
    project: Project;
    type: PerpCollateralType;
    token: PerpCollateralToken;
    toAccountAddress: string;
  }
}
export type Type = $.api.PostManageCollateralRequest;

export function getDefaultValue(): $.api.PostManageCollateralRequest {
  return {
    accountAddress: "",
    amount: 0,
    project: "P_UNKNOWN",
    type: "PCT_DEPOSIT",
    token: "PCTK_USDC",
    toAccountAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostManageCollateralRequest>): $.api.PostManageCollateralRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostManageCollateralRequest): unknown {
  const result: any = {};
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  if (value.token !== undefined) result.token = tsValueToJsonValueFns.enum(value.token);
  if (value.toAccountAddress !== undefined) result.toAccountAddress = tsValueToJsonValueFns.string(value.toAccountAddress);
  return result;
}

export function decodeJson(value: any): $.api.PostManageCollateralRequest {
  const result = getDefaultValue();
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as PerpCollateralType;
  if (value.token !== undefined) result.token = jsonValueToTsValueFns.enum(value.token) as PerpCollateralToken;
  if (value.toAccountAddress !== undefined) result.toAccountAddress = jsonValueToTsValueFns.string(value.toAccountAddress);
  return result;
}

export function encodeBinary(value: $.api.PostManageCollateralRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
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
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.token !== undefined) {
    const tsValue = value.token;
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.toAccountAddress !== undefined) {
    const tsValue = value.toAccountAddress;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostManageCollateralRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.token = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.toAccountAddress = value;
  }
  return result;
}
