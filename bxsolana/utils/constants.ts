const mainnetNy = "ny.solana.dex.blxrbdn.com"
const mainnetUk = "uk.solana.dex.blxrbdn.com"
const testnet = "serum-nlb-5a2c3912804344a3.elb.us-east-1.amazonaws.com"
const devnet =
    "solana-trader-api-nlb-6b0f765f2fc759e1.elb.us-east-1.amazonaws.com"

export const MAINNET_API_NY_HTTP = httpEndpoint(mainnetNy, true)
export const MAINNET_API_NY_WS = wsEndpoint(mainnetNy, true)
export const MAINNET_API_NY_GRPC = mainnetNy
export const MAINNET_API_UK_HTTP = httpEndpoint(mainnetUk, true)
export const MAINNET_API_UK_WS = wsEndpoint(mainnetUk, true)
export const MAINNET_API_UK_GRPC = mainnetUk
export const MAINNET_API_GRPC_PORT = 443

export const TESTNET_API_HTTP = httpEndpoint(testnet, false)
export const TESTNET_API_WS = wsEndpoint(testnet, false)
export const TESTNET_API_GRPC_HOST = testnet
export const TESTNET_API_GRPC_PORT = 80

export const DEVNET_API_HTTP = httpEndpoint(devnet, false)
export const DEVNET_API_WS = wsEndpoint(devnet, false)
export const DEVNET_API_GRPC_HOST = devnet
export const DEVNET_API_GRPC_PORT = 80

export const LOCAL_API_HTTP = "http://127.0.0.1:9000"
export const LOCAL_API_WS = "ws://127.0.0.1:9000/ws"
export const LOCAL_API_GRPC_HOST = "127.0.0.1"
export const LOCAL_API_GRPC_PORT = 9000

function httpEndpoint(base: string, secure: boolean): string {
    let prefix = "http"
    if (secure) {
        prefix = "https"
    }
    return `${prefix}://${base}`
}

function wsEndpoint(base: string, secure: boolean): string {
    let prefix = "ws"
    if (secure) {
        prefix = "wss"
    }
    return `${prefix}://${base}/ws`
}
