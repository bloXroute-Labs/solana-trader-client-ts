export declare namespace $.api {
  export type SubmitProtection =
    | "SP_LOW"
    | "SP_MEDIUM"
    | "SP_HIGH";
}
export type Type = $.api.SubmitProtection;

export const num2name = {
  0: "SP_LOW",
  1: "SP_MEDIUM",
  2: "SP_HIGH",
} as const;

export const name2num = {
  SP_LOW: 0,
  SP_MEDIUM: 1,
  SP_HIGH: 2,
} as const;
