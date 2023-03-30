export declare namespace $.google.protobuf {
  export type Syntax =
    | "SYNTAX_PROTO2"
    | "SYNTAX_PROTO3";
}
export type Type = $.google.protobuf.Syntax;

export const num2name = {
  0: "SYNTAX_PROTO2",
  1: "SYNTAX_PROTO3",
} as const;

export const name2num = {
  SYNTAX_PROTO2: 0,
  SYNTAX_PROTO3: 1,
} as const;
