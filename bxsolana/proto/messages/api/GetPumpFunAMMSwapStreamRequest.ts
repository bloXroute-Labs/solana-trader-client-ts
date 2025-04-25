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
  export interface GetPumpFunAMMSwapStreamRequest {
    pools: string[];
  }
}
export type Type = $.api.GetPumpFunAMMSwapStreamRequest;

export function getDefaultValue(): $.api.GetPumpFunAMMSwapStreamRequest {
  return {
    pools: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunAMMSwapStreamRequest>): $.api.GetPumpFunAMMSwapStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunAMMSwapStreamRequest): unknown {
  const result: any = {};
  result.pools = value.pools.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunAMMSwapStreamRequest {
  const result = getDefaultValue();
  result.pools = value.pools?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunAMMSwapStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.pools) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunAMMSwapStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.pools = value as any;
  }
  return result;
}
