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

export declare namespace $.shared {
  export interface Socket {
    ip: string;
    port: string;
  }
}
export type Type = $.shared.Socket;

export function getDefaultValue(): $.shared.Socket {
  return {
    ip: "",
    port: "0",
  };
}

export function createValue(partialValue: Partial<$.shared.Socket>): $.shared.Socket {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.shared.Socket): unknown {
  const result: any = {};
  if (value.ip !== undefined) result.ip = tsValueToJsonValueFns.string(value.ip);
  if (value.port !== undefined) result.port = tsValueToJsonValueFns.int64(value.port);
  return result;
}

export function decodeJson(value: any): $.shared.Socket {
  const result = getDefaultValue();
  if (value.ip !== undefined) result.ip = jsonValueToTsValueFns.string(value.ip);
  if (value.port !== undefined) result.port = jsonValueToTsValueFns.int64(value.port);
  return result;
}

export function encodeBinary(value: $.shared.Socket): Uint8Array {
  const result: WireMessage = [];
  if (value.ip !== undefined) {
    const tsValue = value.ip;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.port !== undefined) {
    const tsValue = value.port;
    result.push(
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.shared.Socket {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ip = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.port = value;
  }
  return result;
}
