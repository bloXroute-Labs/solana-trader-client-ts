export declare namespace $.api {
  export type Infinity =
    | "INF_NOT"
    | "INF_POSITIVE"
    | "INF_NEGATIVE";
}
export type Type = $.api.Infinity;

export const num2name = {
  0: "INF_NOT",
  1: "INF_POSITIVE",
  2: "INF_NEGATIVE",
} as const;

export const name2num = {
  INF_NOT: 0,
  INF_POSITIVE: 1,
  INF_NEGATIVE: 2,
} as const;
