export declare namespace $.api {
  export type Direction =
    | "D_ASCENDING"
    | "D_DESCENDING";
}
export type Type = $.api.Direction;

export const num2name = {
  0: "D_ASCENDING",
  1: "D_DESCENDING",
} as const;

export const name2num = {
  D_ASCENDING: 0,
  D_DESCENDING: 1,
} as const;
