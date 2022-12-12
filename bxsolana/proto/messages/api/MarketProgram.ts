export declare namespace $.api {
  export type MarketProgram =
    | "MP_SERUM"
    | "MP_OPENBOOK";
}
export type Type = $.api.MarketProgram;

export const num2name = {
  0: "MP_SERUM",
  1: "MP_OPENBOOK",
} as const;

export const name2num = {
  MP_SERUM: 0,
  MP_OPENBOOK: 1,
} as const;
