export declare namespace $.common {
  export type MarginContract =
    | "ALL_SPOTS"
    | "SOL_SPOT"
    | "USDC_SPOT"
    | "MSOL_SPOT"
    | "WBTC_SPOT"
    | "WETH_SPOT"
    | "USDT_SPOT";
}
export type Type = $.common.MarginContract;

export const num2name = {
  0: "ALL_SPOTS",
  1: "SOL_SPOT",
  2: "USDC_SPOT",
  3: "MSOL_SPOT",
  4: "WBTC_SPOT",
  5: "WETH_SPOT",
  6: "USDT_SPOT",
} as const;

export const name2num = {
  ALL_SPOTS: 0,
  SOL_SPOT: 1,
  USDC_SPOT: 2,
  MSOL_SPOT: 3,
  WBTC_SPOT: 4,
  WETH_SPOT: 5,
  USDT_SPOT: 6,
} as const;
