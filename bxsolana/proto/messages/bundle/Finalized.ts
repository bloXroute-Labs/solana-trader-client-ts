import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.bundle {
  export interface Finalized {}
}
export type Type = $.bundle.Finalized;

export function getDefaultValue(): $.bundle.Finalized {
  return {
  };
}

export function createValue(partialValue: Partial<$.bundle.Finalized>): $.bundle.Finalized {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.Finalized): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.bundle.Finalized {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.bundle.Finalized): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.Finalized {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
