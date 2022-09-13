import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface AccountSubscribeRequest {
    accountOrOwner: string[];
  }
}
export type Type = $.geyser.AccountSubscribeRequest;

export function getDefaultValue(): $.geyser.AccountSubscribeRequest {
  return {
    accountOrOwner: [],
  };
}

export function createValue(partialValue: Partial<$.geyser.AccountSubscribeRequest>): $.geyser.AccountSubscribeRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.AccountSubscribeRequest): unknown {
  const result: any = {};
  result.accountOrOwner = value.accountOrOwner.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.geyser.AccountSubscribeRequest {
  const result = getDefaultValue();
  result.accountOrOwner = value.accountOrOwner?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.geyser.AccountSubscribeRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.accountOrOwner) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.AccountSubscribeRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.accountOrOwner = value as any;
  }
  return result;
}
