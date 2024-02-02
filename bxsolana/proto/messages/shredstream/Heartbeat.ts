import {
  Type as Socket,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Socket";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.shredstream {
  export interface Heartbeat {
    socket?: Socket;
    regions: string[];
  }
}
export type Type = $.shredstream.Heartbeat;

export function getDefaultValue(): $.shredstream.Heartbeat {
  return {
    socket: undefined,
    regions: [],
  };
}

export function createValue(partialValue: Partial<$.shredstream.Heartbeat>): $.shredstream.Heartbeat {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.shredstream.Heartbeat): unknown {
  const result: any = {};
  if (value.socket !== undefined) result.socket = encodeJson_1(value.socket);
  result.regions = value.regions.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.shredstream.Heartbeat {
  const result = getDefaultValue();
  if (value.socket !== undefined) result.socket = decodeJson_1(value.socket);
  result.regions = value.regions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.shredstream.Heartbeat): Uint8Array {
  const result: WireMessage = [];
  if (value.socket !== undefined) {
    const tsValue = value.socket;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.regions) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.shredstream.Heartbeat {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.socket = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.regions = value as any;
  }
  return result;
}
