import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
import {
  Type as QuoteRoute,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./QuoteRoute";
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
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface ProjectQuote {
    project: Project;
    routes: QuoteRoute[];
  }
}
export type Type = $.api.ProjectQuote;

export function getDefaultValue(): $.api.ProjectQuote {
  return {
    project: "P_UNKNOWN",
    routes: [],
  };
}

export function createValue(partialValue: Partial<$.api.ProjectQuote>): $.api.ProjectQuote {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.ProjectQuote): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  result.routes = value.routes.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.ProjectQuote {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  result.routes = value.routes?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.ProjectQuote): Uint8Array {
  const result: WireMessage = [];
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.routes) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.ProjectQuote {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.routes = value as any;
  }
  return result;
}
