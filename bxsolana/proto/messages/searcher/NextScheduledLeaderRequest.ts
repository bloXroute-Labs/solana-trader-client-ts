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
  export interface NextScheduledLeaderRequest {}
}
export type Type = $.searcher.NextScheduledLeaderRequest;

export function getDefaultValue(): $.searcher.NextScheduledLeaderRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.searcher.NextScheduledLeaderRequest>): $.searcher.NextScheduledLeaderRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.NextScheduledLeaderRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.searcher.NextScheduledLeaderRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.searcher.NextScheduledLeaderRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.NextScheduledLeaderRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
