export interface RpcError {
    code: number
    message: string
}

export function IsRpcError(obj: any): obj is RpcError {
    return typeof obj.code == "number" && typeof obj.message == "string"
}
