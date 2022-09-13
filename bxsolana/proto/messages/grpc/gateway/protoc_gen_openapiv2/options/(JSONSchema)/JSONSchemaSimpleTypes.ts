export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema {
  export type JSONSchemaSimpleTypes =
    | "UNKNOWN"
    | "ARRAY"
    | "BOOLEAN"
    | "INTEGER"
    | "NULL"
    | "NUMBER"
    | "OBJECT"
    | "STRING";
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes;

export const num2name = {
  0: "UNKNOWN",
  1: "ARRAY",
  2: "BOOLEAN",
  3: "INTEGER",
  4: "NULL",
  5: "NUMBER",
  6: "OBJECT",
  7: "STRING",
} as const;

export const name2num = {
  UNKNOWN: 0,
  ARRAY: 1,
  BOOLEAN: 2,
  INTEGER: 3,
  NULL: 4,
  NUMBER: 5,
  OBJECT: 6,
  STRING: 7,
} as const;
