import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
import {
  Type as PerpContract,
  name2num as name2num_1,
  num2name as num2name_1,
} from "../common/PerpContract";
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
  default as Long,
} from "../../runtime/Long";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetPerpPositionsRequest {
    project: Project;
    ownerAddress: string;
    accountAddress: string;
    contracts: PerpContract[];
  }
}
export type Type = $.api.GetPerpPositionsRequest;

export function getDefaultValue(): $.api.GetPerpPositionsRequest {
  return {
    project: "P_UNKNOWN",
    ownerAddress: "",
    accountAddress: "",
    contracts: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPerpPositionsRequest>): $.api.GetPerpPositionsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPerpPositionsRequest): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  result.contracts = value.contracts.map(value => tsValueToJsonValueFns.enum(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPerpPositionsRequest {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  result.contracts = value.contracts?.map((value: any) => jsonValueToTsValueFns.enum(value) as PerpContract) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPerpPositionsRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.contracts) {
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPerpPositionsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name_1[num as keyof typeof num2name_1]);
    if (!value.length) break collection;
    result.contracts = value as any;
  }
  return result;
}
