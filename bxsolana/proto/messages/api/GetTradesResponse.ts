import {
  Type as Trade,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Trade.js";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type GetTradesResponse = {
    trades: Trade[];
  }
}
export type Type = $.api.GetTradesResponse;

export function getDefaultValue(): $.api.GetTradesResponse {
  return {
    trades: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetTradesResponse>): $.api.GetTradesResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTradesResponse): unknown {
  const result: any = {};
  result.trades = value.trades.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetTradesResponse {
  const result = getDefaultValue();
  result.trades = value.trades?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetTradesResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.trades) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTradesResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.trades = value as any;
  }
  return result;
}