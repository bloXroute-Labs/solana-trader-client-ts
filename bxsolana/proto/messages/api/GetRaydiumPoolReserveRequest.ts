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
  export interface GetRaydiumPoolReserveRequest {
    pairsOrAddresses: string[];
  }
}
export type Type = $.api.GetRaydiumPoolReserveRequest;

export function getDefaultValue(): $.api.GetRaydiumPoolReserveRequest {
  return {
    pairsOrAddresses: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetRaydiumPoolReserveRequest>): $.api.GetRaydiumPoolReserveRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRaydiumPoolReserveRequest): unknown {
  const result: any = {};
  result.pairsOrAddresses = value.pairsOrAddresses.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.GetRaydiumPoolReserveRequest {
  const result = getDefaultValue();
  result.pairsOrAddresses = value.pairsOrAddresses?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetRaydiumPoolReserveRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.pairsOrAddresses) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRaydiumPoolReserveRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.pairsOrAddresses = value as any;
  }
  return result;
}
