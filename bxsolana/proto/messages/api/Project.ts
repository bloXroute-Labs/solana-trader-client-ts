export declare namespace $.api {
  export type Project =
    | "P_UNKNOWN"
    | "P_JUPITER"
    | "P_RAYDIUM"
    | "P_Serum"
    | "P_ALL";
}
export type Type = $.api.Project;

export const num2name = {
  0: "P_UNKNOWN",
  1: "P_JUPITER",
  2: "P_RAYDIUM",
  3: "P_Serum",
  4: "P_ALL",
} as const;

export const name2num = {
  P_UNKNOWN: 0,
  P_JUPITER: 1,
  P_RAYDIUM: 2,
  P_Serum: 3,
  P_ALL: 4,
} as const;
