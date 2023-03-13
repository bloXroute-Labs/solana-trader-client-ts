import {
  Type as ContractInfo,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ContractInfo";
import {
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export type GetContractsResponse = {
    contracts: ContractInfo[];
  }
}
export type Type = $.api.GetContractsResponse;

export function getDefaultValue(): $.api.GetContractsResponse {
  return {
    contracts: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetContractsResponse>): $.api.GetContractsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetContractsResponse): unknown {
  const result: any = {};
  result.contracts = value.contracts.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetContractsResponse {
  const result = getDefaultValue();
  result.contracts = value.contracts?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetContractsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.contracts) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetContractsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.contracts = value as any;
  }
  return result;
}
