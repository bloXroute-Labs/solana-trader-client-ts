import {
  Type as PerpContract,
  name2num,
  num2name,
} from "../common/PerpContract";
import {
  Type as Project,
  name2num as name2num_1,
  num2name as num2name_1,
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
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";
import {
  unpackFns,
} from "../../runtime/wire/scalar";

export declare namespace $.api {
  export type GetContractsRequest = {
    contracts: PerpContract[];
    project: Project;
  }
}
export type Type = $.api.GetContractsRequest;

export function getDefaultValue(): $.api.GetContractsRequest {
  return {
    contracts: [],
    project: "P_UNKNOWN",
  };
}

export function createValue(partialValue: Partial<$.api.GetContractsRequest>): $.api.GetContractsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetContractsRequest): unknown {
  const result: any = {};
  result.contracts = value.contracts.map(value => tsValueToJsonValueFns.enum(value));
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.GetContractsRequest {
  const result = getDefaultValue();
  result.contracts = value.contracts?.map((value: any) => jsonValueToTsValueFns.enum(value) as PerpContract) ?? [];
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  return result;
}

export function encodeBinary(value: $.api.GetContractsRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.contracts) {
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetContractsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.contracts = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
