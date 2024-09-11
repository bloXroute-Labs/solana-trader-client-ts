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

export declare namespace $.api {
  export interface LiquidityPoolKeys {
    id: string;
    baseMint: string;
    quoteMint: string;
    lpMint: string;
    version: number;
    programID: string;
    authority: string;
    baseVault: string;
    quoteVault: string;
    lpVault: string;
    openOrders: string;
    targetOrders: string;
    withdrawQueue: string;
    marketVersion: number;
    marketProgramID: string;
    marketID: string;
    marketAuthority: string;
    marketBaseVault: string;
    marketQuoteVault: string;
    marketBids: string;
    marketAsks: string;
    marketEventQueue: string;
    tradeFeeRate: string;
  }
}
export type Type = $.api.LiquidityPoolKeys;

export function getDefaultValue(): $.api.LiquidityPoolKeys {
  return {
    id: "",
    baseMint: "",
    quoteMint: "",
    lpMint: "",
    version: 0,
    programID: "",
    authority: "",
    baseVault: "",
    quoteVault: "",
    lpVault: "",
    openOrders: "",
    targetOrders: "",
    withdrawQueue: "",
    marketVersion: 0,
    marketProgramID: "",
    marketID: "",
    marketAuthority: "",
    marketBaseVault: "",
    marketQuoteVault: "",
    marketBids: "",
    marketAsks: "",
    marketEventQueue: "",
    tradeFeeRate: "0",
  };
}

export function createValue(partialValue: Partial<$.api.LiquidityPoolKeys>): $.api.LiquidityPoolKeys {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.LiquidityPoolKeys): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.baseMint !== undefined) result.baseMint = tsValueToJsonValueFns.string(value.baseMint);
  if (value.quoteMint !== undefined) result.quoteMint = tsValueToJsonValueFns.string(value.quoteMint);
  if (value.lpMint !== undefined) result.lpMint = tsValueToJsonValueFns.string(value.lpMint);
  if (value.version !== undefined) result.version = tsValueToJsonValueFns.uint32(value.version);
  if (value.programID !== undefined) result.programID = tsValueToJsonValueFns.string(value.programID);
  if (value.authority !== undefined) result.authority = tsValueToJsonValueFns.string(value.authority);
  if (value.baseVault !== undefined) result.baseVault = tsValueToJsonValueFns.string(value.baseVault);
  if (value.quoteVault !== undefined) result.quoteVault = tsValueToJsonValueFns.string(value.quoteVault);
  if (value.lpVault !== undefined) result.lpVault = tsValueToJsonValueFns.string(value.lpVault);
  if (value.openOrders !== undefined) result.openOrders = tsValueToJsonValueFns.string(value.openOrders);
  if (value.targetOrders !== undefined) result.targetOrders = tsValueToJsonValueFns.string(value.targetOrders);
  if (value.withdrawQueue !== undefined) result.withdrawQueue = tsValueToJsonValueFns.string(value.withdrawQueue);
  if (value.marketVersion !== undefined) result.marketVersion = tsValueToJsonValueFns.uint32(value.marketVersion);
  if (value.marketProgramID !== undefined) result.marketProgramID = tsValueToJsonValueFns.string(value.marketProgramID);
  if (value.marketID !== undefined) result.marketID = tsValueToJsonValueFns.string(value.marketID);
  if (value.marketAuthority !== undefined) result.marketAuthority = tsValueToJsonValueFns.string(value.marketAuthority);
  if (value.marketBaseVault !== undefined) result.marketBaseVault = tsValueToJsonValueFns.string(value.marketBaseVault);
  if (value.marketQuoteVault !== undefined) result.marketQuoteVault = tsValueToJsonValueFns.string(value.marketQuoteVault);
  if (value.marketBids !== undefined) result.marketBids = tsValueToJsonValueFns.string(value.marketBids);
  if (value.marketAsks !== undefined) result.marketAsks = tsValueToJsonValueFns.string(value.marketAsks);
  if (value.marketEventQueue !== undefined) result.marketEventQueue = tsValueToJsonValueFns.string(value.marketEventQueue);
  if (value.tradeFeeRate !== undefined) result.tradeFeeRate = tsValueToJsonValueFns.uint64(value.tradeFeeRate);
  return result;
}

export function decodeJson(value: any): $.api.LiquidityPoolKeys {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.baseMint !== undefined) result.baseMint = jsonValueToTsValueFns.string(value.baseMint);
  if (value.quoteMint !== undefined) result.quoteMint = jsonValueToTsValueFns.string(value.quoteMint);
  if (value.lpMint !== undefined) result.lpMint = jsonValueToTsValueFns.string(value.lpMint);
  if (value.version !== undefined) result.version = jsonValueToTsValueFns.uint32(value.version);
  if (value.programID !== undefined) result.programID = jsonValueToTsValueFns.string(value.programID);
  if (value.authority !== undefined) result.authority = jsonValueToTsValueFns.string(value.authority);
  if (value.baseVault !== undefined) result.baseVault = jsonValueToTsValueFns.string(value.baseVault);
  if (value.quoteVault !== undefined) result.quoteVault = jsonValueToTsValueFns.string(value.quoteVault);
  if (value.lpVault !== undefined) result.lpVault = jsonValueToTsValueFns.string(value.lpVault);
  if (value.openOrders !== undefined) result.openOrders = jsonValueToTsValueFns.string(value.openOrders);
  if (value.targetOrders !== undefined) result.targetOrders = jsonValueToTsValueFns.string(value.targetOrders);
  if (value.withdrawQueue !== undefined) result.withdrawQueue = jsonValueToTsValueFns.string(value.withdrawQueue);
  if (value.marketVersion !== undefined) result.marketVersion = jsonValueToTsValueFns.uint32(value.marketVersion);
  if (value.marketProgramID !== undefined) result.marketProgramID = jsonValueToTsValueFns.string(value.marketProgramID);
  if (value.marketID !== undefined) result.marketID = jsonValueToTsValueFns.string(value.marketID);
  if (value.marketAuthority !== undefined) result.marketAuthority = jsonValueToTsValueFns.string(value.marketAuthority);
  if (value.marketBaseVault !== undefined) result.marketBaseVault = jsonValueToTsValueFns.string(value.marketBaseVault);
  if (value.marketQuoteVault !== undefined) result.marketQuoteVault = jsonValueToTsValueFns.string(value.marketQuoteVault);
  if (value.marketBids !== undefined) result.marketBids = jsonValueToTsValueFns.string(value.marketBids);
  if (value.marketAsks !== undefined) result.marketAsks = jsonValueToTsValueFns.string(value.marketAsks);
  if (value.marketEventQueue !== undefined) result.marketEventQueue = jsonValueToTsValueFns.string(value.marketEventQueue);
  if (value.tradeFeeRate !== undefined) result.tradeFeeRate = jsonValueToTsValueFns.uint64(value.tradeFeeRate);
  return result;
}

export function encodeBinary(value: $.api.LiquidityPoolKeys): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseMint !== undefined) {
    const tsValue = value.baseMint;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quoteMint !== undefined) {
    const tsValue = value.quoteMint;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.lpMint !== undefined) {
    const tsValue = value.lpMint;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.version !== undefined) {
    const tsValue = value.version;
    result.push(
      [5, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.programID !== undefined) {
    const tsValue = value.programID;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.authority !== undefined) {
    const tsValue = value.authority;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseVault !== undefined) {
    const tsValue = value.baseVault;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quoteVault !== undefined) {
    const tsValue = value.quoteVault;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.lpVault !== undefined) {
    const tsValue = value.lpVault;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.openOrders !== undefined) {
    const tsValue = value.openOrders;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.targetOrders !== undefined) {
    const tsValue = value.targetOrders;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.withdrawQueue !== undefined) {
    const tsValue = value.withdrawQueue;
    result.push(
      [13, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketVersion !== undefined) {
    const tsValue = value.marketVersion;
    result.push(
      [14, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.marketProgramID !== undefined) {
    const tsValue = value.marketProgramID;
    result.push(
      [15, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketID !== undefined) {
    const tsValue = value.marketID;
    result.push(
      [16, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketAuthority !== undefined) {
    const tsValue = value.marketAuthority;
    result.push(
      [17, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketBaseVault !== undefined) {
    const tsValue = value.marketBaseVault;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketQuoteVault !== undefined) {
    const tsValue = value.marketQuoteVault;
    result.push(
      [19, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketBids !== undefined) {
    const tsValue = value.marketBids;
    result.push(
      [20, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketAsks !== undefined) {
    const tsValue = value.marketAsks;
    result.push(
      [21, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketEventQueue !== undefined) {
    const tsValue = value.marketEventQueue;
    result.push(
      [22, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tradeFeeRate !== undefined) {
    const tsValue = value.tradeFeeRate;
    result.push(
      [23, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.LiquidityPoolKeys {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseMint = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteMint = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lpMint = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.version = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.programID = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.authority = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseVault = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteVault = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lpVault = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.openOrders = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.targetOrders = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.withdrawQueue = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.marketVersion = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketProgramID = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketID = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketAuthority = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketBaseVault = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketQuoteVault = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketBids = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketAsks = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketEventQueue = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tradeFeeRate = value;
  }
  return result;
}
