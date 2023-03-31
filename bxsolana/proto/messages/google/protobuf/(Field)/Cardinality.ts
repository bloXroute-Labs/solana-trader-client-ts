export declare namespace $.google.protobuf.Field {
  export type Cardinality =
    | "CARDINALITY_UNKNOWN"
    | "CARDINALITY_OPTIONAL"
    | "CARDINALITY_REQUIRED"
    | "CARDINALITY_REPEATED";
}
export type Type = $.google.protobuf.Field.Cardinality;

export const num2name = {
  0: "CARDINALITY_UNKNOWN",
  1: "CARDINALITY_OPTIONAL",
  2: "CARDINALITY_REQUIRED",
  3: "CARDINALITY_REPEATED",
} as const;

export const name2num = {
  CARDINALITY_UNKNOWN: 0,
  CARDINALITY_OPTIONAL: 1,
  CARDINALITY_REQUIRED: 2,
  CARDINALITY_REPEATED: 3,
} as const;
