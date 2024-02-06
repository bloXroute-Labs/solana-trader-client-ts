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
  unpackFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.searcher {
  export interface SlotList {
    slots: string[];
  }
}
export type Type = $.searcher.SlotList;

export function getDefaultValue(): $.searcher.SlotList {
  return {
    slots: [],
  };
}

export function createValue(partialValue: Partial<$.searcher.SlotList>): $.searcher.SlotList {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.SlotList): unknown {
  const result: any = {};
  result.slots = value.slots.map(value => tsValueToJsonValueFns.uint64(value));
  return result;
}

export function decodeJson(value: any): $.searcher.SlotList {
  const result = getDefaultValue();
  result.slots = value.slots?.map((value: any) => jsonValueToTsValueFns.uint64(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.searcher.SlotList): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.slots) {
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.SlotList {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint64(wireValues));
    if (!value.length) break collection;
    result.slots = value as any;
  }
  return result;
}
