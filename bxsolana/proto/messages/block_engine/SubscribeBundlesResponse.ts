import {
  Type as BundleUuid,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../bundle/BundleUuid";
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

export declare namespace $.block_engine {
  export interface SubscribeBundlesResponse {
    bundles: BundleUuid[];
  }
}
export type Type = $.block_engine.SubscribeBundlesResponse;

export function getDefaultValue(): $.block_engine.SubscribeBundlesResponse {
  return {
    bundles: [],
  };
}

export function createValue(partialValue: Partial<$.block_engine.SubscribeBundlesResponse>): $.block_engine.SubscribeBundlesResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.SubscribeBundlesResponse): unknown {
  const result: any = {};
  result.bundles = value.bundles.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.block_engine.SubscribeBundlesResponse {
  const result = getDefaultValue();
  result.bundles = value.bundles?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.block_engine.SubscribeBundlesResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.bundles) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.SubscribeBundlesResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.bundles = value as any;
  }
  return result;
}
