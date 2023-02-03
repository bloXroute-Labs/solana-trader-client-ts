export declare namespace $.common {
  export type PerpPositionSide =
    | "PS_UNKNOWN"
    | "PS_LONG"
    | "PS_SHORT";
}
export type Type = $.common.PerpPositionSide;

export const num2name = {
  0: "PS_UNKNOWN",
  1: "PS_LONG",
  2: "PS_SHORT",
} as const;

export const name2num = {
  PS_UNKNOWN: 0,
  PS_LONG: 1,
  PS_SHORT: 2,
} as const;
