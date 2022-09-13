export declare namespace $.api {
  export type OrderStatus =
    | "OS_UNKNOWN"
    | "OS_OPEN"
    | "OS_PARTIAL_FILL"
    | "OS_CANCELLED"
    | "OS_FILLED";
}
export type Type = $.api.OrderStatus;

export const num2name = {
  0: "OS_UNKNOWN",
  1: "OS_OPEN",
  2: "OS_PARTIAL_FILL",
  3: "OS_CANCELLED",
  4: "OS_FILLED",
} as const;

export const name2num = {
  OS_UNKNOWN: 0,
  OS_OPEN: 1,
  OS_PARTIAL_FILL: 2,
  OS_CANCELLED: 3,
  OS_FILLED: 4,
} as const;
