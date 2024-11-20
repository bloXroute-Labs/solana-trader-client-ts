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
  export interface ProgramPriorityFee {
    ten: string;
    hundred: string;
    fifteen: string;
    twenty: string;
    twentyFive: string;
    thirty: string;
    thirtyFive: string;
    forty: string;
    fortyFive: string;
    five: string;
    fifty: string;
    fiftyFive: string;
    sixty: string;
    sixtyFive: string;
    seventy: string;
    seventyFive: string;
    eighty: string;
    eightyFive: string;
    ninety: string;
    ninetyFive: string;
    program: string;
  }
}
export type Type = $.api.ProgramPriorityFee;

export function getDefaultValue(): $.api.ProgramPriorityFee {
  return {
    ten: "0",
    hundred: "0",
    fifteen: "0",
    twenty: "0",
    twentyFive: "0",
    thirty: "0",
    thirtyFive: "0",
    forty: "0",
    fortyFive: "0",
    five: "0",
    fifty: "0",
    fiftyFive: "0",
    sixty: "0",
    sixtyFive: "0",
    seventy: "0",
    seventyFive: "0",
    eighty: "0",
    eightyFive: "0",
    ninety: "0",
    ninetyFive: "0",
    program: "",
  };
}

export function createValue(partialValue: Partial<$.api.ProgramPriorityFee>): $.api.ProgramPriorityFee {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.ProgramPriorityFee): unknown {
  const result: any = {};
  if (value.ten !== undefined) result.ten = tsValueToJsonValueFns.uint64(value.ten);
  if (value.hundred !== undefined) result.hundred = tsValueToJsonValueFns.uint64(value.hundred);
  if (value.fifteen !== undefined) result.fifteen = tsValueToJsonValueFns.uint64(value.fifteen);
  if (value.twenty !== undefined) result.twenty = tsValueToJsonValueFns.uint64(value.twenty);
  if (value.twentyFive !== undefined) result.twentyFive = tsValueToJsonValueFns.uint64(value.twentyFive);
  if (value.thirty !== undefined) result.thirty = tsValueToJsonValueFns.uint64(value.thirty);
  if (value.thirtyFive !== undefined) result.thirtyFive = tsValueToJsonValueFns.uint64(value.thirtyFive);
  if (value.forty !== undefined) result.forty = tsValueToJsonValueFns.uint64(value.forty);
  if (value.fortyFive !== undefined) result.fortyFive = tsValueToJsonValueFns.uint64(value.fortyFive);
  if (value.five !== undefined) result.five = tsValueToJsonValueFns.uint64(value.five);
  if (value.fifty !== undefined) result.fifty = tsValueToJsonValueFns.uint64(value.fifty);
  if (value.fiftyFive !== undefined) result.fiftyFive = tsValueToJsonValueFns.uint64(value.fiftyFive);
  if (value.sixty !== undefined) result.sixty = tsValueToJsonValueFns.uint64(value.sixty);
  if (value.sixtyFive !== undefined) result.sixtyFive = tsValueToJsonValueFns.uint64(value.sixtyFive);
  if (value.seventy !== undefined) result.seventy = tsValueToJsonValueFns.uint64(value.seventy);
  if (value.seventyFive !== undefined) result.seventyFive = tsValueToJsonValueFns.uint64(value.seventyFive);
  if (value.eighty !== undefined) result.eighty = tsValueToJsonValueFns.uint64(value.eighty);
  if (value.eightyFive !== undefined) result.eightyFive = tsValueToJsonValueFns.uint64(value.eightyFive);
  if (value.ninety !== undefined) result.ninety = tsValueToJsonValueFns.uint64(value.ninety);
  if (value.ninetyFive !== undefined) result.ninetyFive = tsValueToJsonValueFns.uint64(value.ninetyFive);
  if (value.program !== undefined) result.program = tsValueToJsonValueFns.string(value.program);
  return result;
}

export function decodeJson(value: any): $.api.ProgramPriorityFee {
  const result = getDefaultValue();
  if (value.ten !== undefined) result.ten = jsonValueToTsValueFns.uint64(value.ten);
  if (value.hundred !== undefined) result.hundred = jsonValueToTsValueFns.uint64(value.hundred);
  if (value.fifteen !== undefined) result.fifteen = jsonValueToTsValueFns.uint64(value.fifteen);
  if (value.twenty !== undefined) result.twenty = jsonValueToTsValueFns.uint64(value.twenty);
  if (value.twentyFive !== undefined) result.twentyFive = jsonValueToTsValueFns.uint64(value.twentyFive);
  if (value.thirty !== undefined) result.thirty = jsonValueToTsValueFns.uint64(value.thirty);
  if (value.thirtyFive !== undefined) result.thirtyFive = jsonValueToTsValueFns.uint64(value.thirtyFive);
  if (value.forty !== undefined) result.forty = jsonValueToTsValueFns.uint64(value.forty);
  if (value.fortyFive !== undefined) result.fortyFive = jsonValueToTsValueFns.uint64(value.fortyFive);
  if (value.five !== undefined) result.five = jsonValueToTsValueFns.uint64(value.five);
  if (value.fifty !== undefined) result.fifty = jsonValueToTsValueFns.uint64(value.fifty);
  if (value.fiftyFive !== undefined) result.fiftyFive = jsonValueToTsValueFns.uint64(value.fiftyFive);
  if (value.sixty !== undefined) result.sixty = jsonValueToTsValueFns.uint64(value.sixty);
  if (value.sixtyFive !== undefined) result.sixtyFive = jsonValueToTsValueFns.uint64(value.sixtyFive);
  if (value.seventy !== undefined) result.seventy = jsonValueToTsValueFns.uint64(value.seventy);
  if (value.seventyFive !== undefined) result.seventyFive = jsonValueToTsValueFns.uint64(value.seventyFive);
  if (value.eighty !== undefined) result.eighty = jsonValueToTsValueFns.uint64(value.eighty);
  if (value.eightyFive !== undefined) result.eightyFive = jsonValueToTsValueFns.uint64(value.eightyFive);
  if (value.ninety !== undefined) result.ninety = jsonValueToTsValueFns.uint64(value.ninety);
  if (value.ninetyFive !== undefined) result.ninetyFive = jsonValueToTsValueFns.uint64(value.ninetyFive);
  if (value.program !== undefined) result.program = jsonValueToTsValueFns.string(value.program);
  return result;
}

export function encodeBinary(value: $.api.ProgramPriorityFee): Uint8Array {
  const result: WireMessage = [];
  if (value.ten !== undefined) {
    const tsValue = value.ten;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.hundred !== undefined) {
    const tsValue = value.hundred;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.fifteen !== undefined) {
    const tsValue = value.fifteen;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.twenty !== undefined) {
    const tsValue = value.twenty;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.twentyFive !== undefined) {
    const tsValue = value.twentyFive;
    result.push(
      [5, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.thirty !== undefined) {
    const tsValue = value.thirty;
    result.push(
      [6, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.thirtyFive !== undefined) {
    const tsValue = value.thirtyFive;
    result.push(
      [7, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.forty !== undefined) {
    const tsValue = value.forty;
    result.push(
      [8, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.fortyFive !== undefined) {
    const tsValue = value.fortyFive;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.five !== undefined) {
    const tsValue = value.five;
    result.push(
      [10, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.fifty !== undefined) {
    const tsValue = value.fifty;
    result.push(
      [11, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.fiftyFive !== undefined) {
    const tsValue = value.fiftyFive;
    result.push(
      [12, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.sixty !== undefined) {
    const tsValue = value.sixty;
    result.push(
      [13, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.sixtyFive !== undefined) {
    const tsValue = value.sixtyFive;
    result.push(
      [14, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.seventy !== undefined) {
    const tsValue = value.seventy;
    result.push(
      [15, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.seventyFive !== undefined) {
    const tsValue = value.seventyFive;
    result.push(
      [16, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.eighty !== undefined) {
    const tsValue = value.eighty;
    result.push(
      [17, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.eightyFive !== undefined) {
    const tsValue = value.eightyFive;
    result.push(
      [18, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.ninety !== undefined) {
    const tsValue = value.ninety;
    result.push(
      [19, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.ninetyFive !== undefined) {
    const tsValue = value.ninetyFive;
    result.push(
      [20, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.program !== undefined) {
    const tsValue = value.program;
    result.push(
      [21, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.ProgramPriorityFee {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.ten = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.hundred = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.fifteen = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.twenty = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.twentyFive = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.thirty = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.thirtyFive = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.forty = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.fortyFive = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.five = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.fifty = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.fiftyFive = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.sixty = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.sixtyFive = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.seventy = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.seventyFive = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.eighty = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.eightyFive = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.ninety = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.ninetyFive = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.program = value;
  }
  return result;
}
