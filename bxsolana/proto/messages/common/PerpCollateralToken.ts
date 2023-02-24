export declare namespace $.common {
  export type PerpCollateralToken =
    | "PCTK_USDC"
    | "PCTK_SOL";
}
export type Type = $.common.PerpCollateralToken;

export const num2name = {
  0: "PCTK_USDC",
  1: "PCTK_SOL",
} as const;

export const name2num = {
  PCTK_USDC: 0,
  PCTK_SOL: 1,
} as const;
