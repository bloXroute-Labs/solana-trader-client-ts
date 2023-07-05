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
  export interface PostDriftSettlePNLRequest {
    ownerAddress: string;
    settleeAccountAddress: string;
    contract: string;
  }
}
export type Type = $.api.PostDriftSettlePNLRequest;

export function getDefaultValue(): $.api.PostDriftSettlePNLRequest {
  return {
    ownerAddress: "",
    settleeAccountAddress: "",
    contract: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostDriftSettlePNLRequest>): $.api.PostDriftSettlePNLRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostDriftSettlePNLRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.settleeAccountAddress !== undefined) result.settleeAccountAddress = tsValueToJsonValueFns.string(value.settleeAccountAddress);
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  return result;
}

export function decodeJson(value: any): $.api.PostDriftSettlePNLRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.settleeAccountAddress !== undefined) result.settleeAccountAddress = jsonValueToTsValueFns.string(value.settleeAccountAddress);
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  return result;
}

export function encodeBinary(value: $.api.PostDriftSettlePNLRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.settleeAccountAddress !== undefined) {
    const tsValue = value.settleeAccountAddress;
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

export function decodeBinary(binary: Uint8Array): $.api.PostDriftSettlePNLRequest {
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
    result.settleeAccountAddress = value;
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
