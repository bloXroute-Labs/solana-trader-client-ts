export declare namespace $.api {
  export type Project =
    | "P_UNKNOWN"
    | "P_ALL"
    | "P_JUPITER"
    | "P_RAYDIUM";
}
export type Type = $.api.Project;

export const num2name = {
  0: "P_UNKNOWN",
  1: "P_ALL",
  2: "P_JUPITER",
  3: "P_RAYDIUM",
} as const;

export const name2num = {
  P_UNKNOWN: 0,
  P_ALL: 1,
  P_JUPITER: 2,
  P_RAYDIUM: 3,
} as const;
