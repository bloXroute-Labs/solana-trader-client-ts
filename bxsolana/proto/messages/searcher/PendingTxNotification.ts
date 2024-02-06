import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
import {
  Type as Packet,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../packet/Packet";
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

export declare namespace $.searcher {
  export interface PendingTxNotification {
    serverSideTs?: Timestamp;
    expirationTime?: Timestamp;
    transactions: Packet[];
  }
}
export type Type = $.searcher.PendingTxNotification;

export function getDefaultValue(): $.searcher.PendingTxNotification {
  return {
    serverSideTs: undefined,
    expirationTime: undefined,
    transactions: [],
  };
}

export function createValue(partialValue: Partial<$.searcher.PendingTxNotification>): $.searcher.PendingTxNotification {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.PendingTxNotification): unknown {
  const result: any = {};
  if (value.serverSideTs !== undefined) result.serverSideTs = encodeJson_1(value.serverSideTs);
  if (value.expirationTime !== undefined) result.expirationTime = encodeJson_1(value.expirationTime);
  result.transactions = value.transactions.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.searcher.PendingTxNotification {
  const result = getDefaultValue();
  if (value.serverSideTs !== undefined) result.serverSideTs = decodeJson_1(value.serverSideTs);
  if (value.expirationTime !== undefined) result.expirationTime = decodeJson_1(value.expirationTime);
  result.transactions = value.transactions?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.searcher.PendingTxNotification): Uint8Array {
  const result: WireMessage = [];
  if (value.serverSideTs !== undefined) {
    const tsValue = value.serverSideTs;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.expirationTime !== undefined) {
    const tsValue = value.expirationTime;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.transactions) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.PendingTxNotification {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.serverSideTs = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.expirationTime = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
  }
  return result;
}
