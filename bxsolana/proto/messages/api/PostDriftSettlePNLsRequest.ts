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
  export interface PostDriftSettlePNLsRequest {
    ownerAddress: string;
    settleeAccountAddresses: string[];
    contract: string;
  }
}
export type Type = $.api.PostDriftSettlePNLsRequest;

export function getDefaultValue(): $.api.PostDriftSettlePNLsRequest {
  return {
    ownerAddress: "",
    settleeAccountAddresses: [],
    contract: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostDriftSettlePNLsRequest>): $.api.PostDriftSettlePNLsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostDriftSettlePNLsRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  result.settleeAccountAddresses = value.settleeAccountAddresses.map(value => tsValueToJsonValueFns.string(value));
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  return result;
}

export function decodeJson(value: any): $.api.PostDriftSettlePNLsRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  result.settleeAccountAddresses = value.settleeAccountAddresses?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  return result;
}

export function encodeBinary(value: $.api.PostDriftSettlePNLsRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.settleeAccountAddresses) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostDriftSettlePNLsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.settleeAccountAddresses = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contract = value;
  }
  return result;
}
