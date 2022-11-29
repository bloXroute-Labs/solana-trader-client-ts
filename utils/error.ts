export interface RPCError {
    code: number
    message: string
}

export function IsRPCError(obj: any): obj is RPCError {
    return typeof obj.code == "number" && typeof obj.message == "string"
}
