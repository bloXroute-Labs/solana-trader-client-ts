const mainnetNy = "ny.solana.dex.blxrbdn.com"
const mainnetUk = "uk.solana.dex.blxrbdn.com"
const mainnetPumpNy = "pump-ny.solana.dex.blxrbdn.com"
const mainnetPumpUk = "pump-uk.solana.dex.blxrbdn.com"
const mainnetLA = "la.solana.dex.blxrbdn.com"
const mainnetFrankfurt = "germany.solana.dex.blxrbdn.com"
const mainnetAmsterdam = "amsterdam.solana.dex.blxrbdn.com"
const mainnetTokyo = "tokyo.solana.dex.blxrbdn.com"
const testnet = "solana.dex.bxrtest.com"
const devnet =
    "solana-trader-api-nlb-6b0f765f2fc759e1.elb.us-east-1.amazonaws.com"

export const MAINNET_API_NY_HTTP = httpEndpoint(mainnetNy, true)
export const MAINNET_API_NY_WS = wsEndpoint(mainnetNy, true)
export const MAINNET_API_NY_GRPC = mainnetNy
export const MAINNET_API_UK_HTTP = httpEndpoint(mainnetUk, true)
export const MAINNET_API_UK_WS = wsEndpoint(mainnetUk, true)
export const MAINNET_API_UK_GRPC = mainnetUk
export const MAINNET_API_GRPC_PORT = 443

// Pump URLs are a special deployment of solana trader api. See documentation:
// https://docs.bloxroute.com/solana/trader-api/api-endpoints/pump.fun/quotes
export const MAINNET_API_PUMP_NY_HTTP = httpEndpoint(mainnetPumpNy, true)
export const MAINNET_API_PUMP_NY_WS = wsEndpoint(mainnetPumpNy, true)
export const MAINNET_API_PUMP_NY_GRPC = mainnetPumpNy

export const MAINNET_API_PUMP_UK_HTTP = httpEndpoint(mainnetPumpUk, true)
export const MAINNET_API_PUMP_UK_WS = wsEndpoint(mainnetPumpUk, true)
export const MAINNET_API_PUMP_UK_GRPC = mainnetPumpUk

// Submit-Only URLs are a special deployment of solana trader api. They only accept tx for propogation and
// do not have any of the other API endpoint functionality.
// See documentation: https://docs.bloxroute.com/solana/trader-api/introduction/regions
export const MAINNET_API_LA_HTTP = httpEndpoint(mainnetLA, true)
export const MAINNET_API_LA_WS = wsEndpoint(mainnetLA, true)
export const MAINNET_API_LA_GRPC = mainnetLA

export const MAINNET_API_FRANKFURT_HTTP = httpEndpoint(mainnetFrankfurt, true)
export const MAINNET_API_FRANKFURT_WS = wsEndpoint(mainnetFrankfurt, true)
export const MAINNET_API_FRANKFURT_GRPC = mainnetFrankfurt

export const MAINNET_API_AMSTERDAM_HTTP = httpEndpoint(mainnetAmsterdam, true)
export const MAINNET_API_AMSTERDAM_WS = wsEndpoint(mainnetAmsterdam, true)
export const MAINNET_API_AMSTERDAM_GRPC = mainnetAmsterdam

export const MAINNET_API_TOKYO_HTTP = httpEndpoint(mainnetTokyo, true)
export const MAINNET_API_TOKYO_WS = wsEndpoint(mainnetTokyo, true)
export const MAINNET_API_TOKYO_GRPC = mainnetTokyo

export const TESTNET_API_HTTP = httpEndpoint(testnet, true)
export const TESTNET_API_WS = wsEndpoint(testnet, true)
export const TESTNET_API_GRPC_HOST = testnet
export const TESTNET_API_GRPC_PORT = 443

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
