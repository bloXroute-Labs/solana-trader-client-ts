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
  export interface PostCloseDriftPerpPositionsRequest {
    ownerAddress: string;
    accountAddress: string;
    contracts: string[];
  }
}
export type Type = $.api.PostCloseDriftPerpPositionsRequest;

export function getDefaultValue(): $.api.PostCloseDriftPerpPositionsRequest {
  return {
    ownerAddress: "",
    accountAddress: "",
    contracts: [],
  };
}

export function createValue(partialValue: Partial<$.api.PostCloseDriftPerpPositionsRequest>): $.api.PostCloseDriftPerpPositionsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostCloseDriftPerpPositionsRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  result.contracts = value.contracts.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.PostCloseDriftPerpPositionsRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  result.contracts = value.contracts?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.PostCloseDriftPerpPositionsRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.contracts) {
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostCloseDriftPerpPositionsRequest {
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
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.contracts = value as any;
  }
  return result;
}
