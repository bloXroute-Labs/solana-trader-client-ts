// @ts-nocheck
export declare namespace $.common {
  export type PerpContract =
    | "ALL"
    | "SOL_PERP"
    | "ETH_PERP"
    | "BTC_PERP"
    | "APT_PERP";
}

export type Type = $.common.PerpContract;

export const num2name = {
  0: "ALL",
  1: "SOL_PERP",
  2: "ETH_PERP",
  3: "BTC_PERP",
  4: "APT_PERP",
} as const;

export const name2num = {
  ALL: 0,
  SOL_PERP: 1,
  ETH_PERP: 2,
  BTC_PERP: 3,
  APT_PERP: 4,
} as const;
