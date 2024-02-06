import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.searcher {
  export interface ConnectedLeadersRequest {}
}
export type Type = $.searcher.ConnectedLeadersRequest;

export function getDefaultValue(): $.searcher.ConnectedLeadersRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.searcher.ConnectedLeadersRequest>): $.searcher.ConnectedLeadersRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.ConnectedLeadersRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.searcher.ConnectedLeadersRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.searcher.ConnectedLeadersRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.ConnectedLeadersRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
