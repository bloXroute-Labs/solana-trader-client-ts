export declare namespace $.common {
  export type PerpContract =
    | "ALL"
    | "SOL_PERP"
    | "ETH_PERP"
    | "BTC_PERP"
    | "APT_PERP"
    | "BONK_PERP"
    | "MATIC_PERP"
    | "ARB_PERP";
}
export type Type = $.common.PerpContract;

export const num2name = {
  0: "ALL",
  1: "SOL_PERP",
  2: "ETH_PERP",
  3: "BTC_PERP",
  4: "APT_PERP",
  5: "BONK_PERP",
  6: "MATIC_PERP",
  7: "ARB_PERP",
} as const;

export const name2num = {
  ALL: 0,
  SOL_PERP: 1,
  ETH_PERP: 2,
  BTC_PERP: 3,
  APT_PERP: 4,
  BONK_PERP: 5,
  MATIC_PERP: 6,
  ARB_PERP: 7,
} as const;
