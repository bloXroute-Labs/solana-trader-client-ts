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
  export interface GetZetaTransactionStreamRequest {
    instructions: string[];
  }
}
export type Type = $.api.GetZetaTransactionStreamRequest;

export function getDefaultValue(): $.api.GetZetaTransactionStreamRequest {
  return {
    instructions: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetZetaTransactionStreamRequest>): $.api.GetZetaTransactionStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetZetaTransactionStreamRequest): unknown {
  const result: any = {};
  result.instructions = value.instructions.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.GetZetaTransactionStreamRequest {
  const result = getDefaultValue();
  result.instructions = value.instructions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetZetaTransactionStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.instructions) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetZetaTransactionStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.instructions = value as any;
  }
  return result;
}
