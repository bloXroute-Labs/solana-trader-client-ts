export declare namespace $.common {
  export type MarginContract =
    | "ALL_SPOTS"
    | "SOL_SPOT"
    | "USDC_SPOT";
}
export type Type = $.common.MarginContract;

export const num2name = {
  0: "ALL_SPOTS",
  1: "SOL_SPOT",
  2: "USDC_SPOT",
} as const;

export const name2num = {
  ALL_SPOTS: 0,
  SOL_SPOT: 1,
  USDC_SPOT: 2,
} as const;
