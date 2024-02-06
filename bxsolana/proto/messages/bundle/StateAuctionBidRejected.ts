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

export declare namespace $.bundle {
  export interface StateAuctionBidRejected {
    auctionId: string;
    simulatedBidLamports: string;
    msg?: string;
  }
}
export type Type = $.bundle.StateAuctionBidRejected;

export function getDefaultValue(): $.bundle.StateAuctionBidRejected {
  return {
    auctionId: "",
    simulatedBidLamports: "0",
    msg: "",
  };
}

export function createValue(partialValue: Partial<$.bundle.StateAuctionBidRejected>): $.bundle.StateAuctionBidRejected {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.StateAuctionBidRejected): unknown {
  const result: any = {};
  if (value.auctionId !== undefined) result.auctionId = tsValueToJsonValueFns.string(value.auctionId);
  if (value.simulatedBidLamports !== undefined) result.simulatedBidLamports = tsValueToJsonValueFns.uint64(value.simulatedBidLamports);
  if (value.msg !== undefined) result.msg = tsValueToJsonValueFns.string(value.msg);
  return result;
}

export function decodeJson(value: any): $.bundle.StateAuctionBidRejected {
  const result = getDefaultValue();
  if (value.auctionId !== undefined) result.auctionId = jsonValueToTsValueFns.string(value.auctionId);
  if (value.simulatedBidLamports !== undefined) result.simulatedBidLamports = jsonValueToTsValueFns.uint64(value.simulatedBidLamports);
  if (value.msg !== undefined) result.msg = jsonValueToTsValueFns.string(value.msg);
  return result;
}

export function encodeBinary(value: $.bundle.StateAuctionBidRejected): Uint8Array {
  const result: WireMessage = [];
  if (value.auctionId !== undefined) {
    const tsValue = value.auctionId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.simulatedBidLamports !== undefined) {
    const tsValue = value.simulatedBidLamports;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.msg !== undefined) {
    const tsValue = value.msg;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.StateAuctionBidRejected {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.auctionId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.simulatedBidLamports = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.msg = value;
  }
  return result;
}
