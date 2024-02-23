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
  export interface GetTipAccountsRequest {}
}
export type Type = $.searcher.GetTipAccountsRequest;

export function getDefaultValue(): $.searcher.GetTipAccountsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.searcher.GetTipAccountsRequest>): $.searcher.GetTipAccountsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.GetTipAccountsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.searcher.GetTipAccountsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.searcher.GetTipAccountsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.GetTipAccountsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
