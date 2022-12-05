export interface RpcError {
    code: number
    message: string
}

export function isRpcError(obj: any): boolean {
    return typeof obj.code == "number" && typeof obj.message == "string"
}
