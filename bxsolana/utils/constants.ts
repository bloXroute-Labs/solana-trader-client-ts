export const warningTlsSlowdown = "Performance Notice: Secure (TLS) endpoints may introduce latency due to handshake overhead. For optimal trading speed, consider using non-secure endpoints when appropriate."

const mainnetNy = "ny.solana.dex.blxrbdn.com"
const mainnetUk = "uk.solana.dex.blxrbdn.com"
const mainnetPumpNy = "pump-ny.solana.dex.blxrbdn.com"
const mainnetPumpUk = "pump-uk.solana.dex.blxrbdn.com"
const mainnetLA = "la.solana.dex.blxrbdn.com"
const mainnetFrankfurt = "germany.solana.dex.blxrbdn.com"
const mainnetAmsterdam = "amsterdam.solana.dex.blxrbdn.com"
const mainnetTokyo = "tokyo.solana.dex.blxrbdn.com"
const testnet = "solana.dex.bxrtest.com"
const devnet = "solana-trader-api-nlb-6b0f765f2fc759e1.elb.us-east-1.amazonaws.com"

// GRPC Hosts and Ports
export const MAINNET_API_NY_GRPC = mainnetNy
export const MAINNET_API_UK_GRPC = mainnetUk
export const MAINNET_API_PUMP_NY_GRPC = mainnetPumpNy
export const MAINNET_API_PUMP_UK_GRPC = mainnetPumpUk
export const MAINNET_API_LA_GRPC = mainnetLA
export const MAINNET_API_AMSTERDAM_GRPC = mainnetAmsterdam
export const MAINNET_API_FRANKFURT_GRPC = mainnetFrankfurt
export const MAINNET_API_TOKYO_GRPC = mainnetTokyo
export const TESTNET_API_GRPC_HOST = testnet
export const DEVNET_API_GRPC_HOST = devnet
export const LOCAL_API_GRPC_HOST = "127.0.0.1"

export const MAINNET_API_GRPC_PORT = 80
export const MAINNET_API_GRPC_PORT_SECURE = 443
export const TESTNET_API_GRPC_PORT = 443
export const DEVNET_API_GRPC_PORT = 80
export const LOCAL_API_GRPC_PORT = 9000

/*
INSECURE
*/

// NY
export const MAINNET_API_NY_HTTP = httpEndpoint(mainnetNy, false)
export const MAINNET_API_NY_WS = wsEndpoint(mainnetNy, false)
export const MAINNET_API_PUMP_NY_HTTP = httpEndpoint(mainnetPumpNy, false)
export const MAINNET_API_PUMP_NY_WS = wsEndpoint(mainnetPumpNy, false)

// UK
export const MAINNET_API_UK_HTTP = httpEndpoint(mainnetUk, false)
export const MAINNET_API_UK_WS = wsEndpoint(mainnetUk, false)
export const MAINNET_API_PUMP_UK_HTTP = httpEndpoint(mainnetPumpUk, false)
export const MAINNET_API_PUMP_UK_WS = wsEndpoint(mainnetPumpUk, false)

// LA
export const MAINNET_API_LA_HTTP = httpEndpoint(mainnetLA, false)
export const MAINNET_API_LA_WS = wsEndpoint(mainnetLA, false)

// Frankfurt
export const MAINNET_API_FRANKFURT_HTTP = httpEndpoint(mainnetFrankfurt, false)
export const MAINNET_API_FRANKFURT_WS = wsEndpoint(mainnetFrankfurt, false)

// Amsterdam
export const MAINNET_API_AMSTERDAM_HTTP = httpEndpoint(mainnetAmsterdam, false)
export const MAINNET_API_AMSTERDAM_WS = wsEndpoint(mainnetAmsterdam, false)

// Tokyo
export const MAINNET_API_TOKYO_HTTP = httpEndpoint(mainnetTokyo, false)
export const MAINNET_API_TOKYO_WS = wsEndpoint(mainnetTokyo, false)

// Testnet
export const TESTNET_API_HTTP = httpEndpoint(testnet, false)
export const TESTNET_API_WS = wsEndpoint(testnet, false)

// Devnet
export const DEVNET_API_HTTP = httpEndpoint(devnet, false)
export const DEVNET_API_WS = wsEndpoint(devnet, false)

// Local
export const LOCAL_API_HTTP = "http://127.0.0.1:9000"
export const LOCAL_API_WS = "ws://127.0.0.1:9000/ws"

/*
SECURE
*/

// NY
export const MAINNET_API_NY_HTTP_SECURE = httpEndpoint(mainnetNy, true)
export const MAINNET_API_NY_WS_SECURE = wsEndpoint(mainnetNy, true)
export const MAINNET_API_PUMP_NY_HTTP_SECURE = httpEndpoint(mainnetPumpNy, true)
export const MAINNET_API_PUMP_NY_WS_SECURE = wsEndpoint(mainnetPumpNy, true)

// UK
export const MAINNET_API_UK_HTTP_SECURE = httpEndpoint(mainnetUk, true)
export const MAINNET_API_UK_WS_SECURE = wsEndpoint(mainnetUk, true)
export const MAINNET_API_PUMP_UK_HTTP_SECURE = httpEndpoint(mainnetPumpUk, true)
export const MAINNET_API_PUMP_UK_WS_SECURE = wsEndpoint(mainnetPumpUk, true)

// LA
export const MAINNET_API_LA_HTTP_SECURE = httpEndpoint(mainnetLA, true)
export const MAINNET_API_LA_WS_SECURE = wsEndpoint(mainnetLA, true)

// Frankfurt
export const MAINNET_API_FRANKFURT_HTTP_SECURE = httpEndpoint(mainnetFrankfurt, true)
export const MAINNET_API_FRANKFURT_WS_SECURE = wsEndpoint(mainnetFrankfurt, true)

// Amsterdam
export const MAINNET_API_AMSTERDAM_HTTP_SECURE = httpEndpoint(mainnetAmsterdam, true)
export const MAINNET_API_AMSTERDAM_WS_SECURE = wsEndpoint(mainnetAmsterdam, true)

// Tokyo
export const MAINNET_API_TOKYO_HTTP_SECURE = httpEndpoint(mainnetTokyo, true)
export const MAINNET_API_TOKYO_WS_SECURE = wsEndpoint(mainnetTokyo, true)

// Testnet
export const TESTNET_API_HTTP_SECURE = httpEndpoint(testnet, true)
export const TESTNET_API_WS_SECURE = wsEndpoint(testnet, true)

// Devnet
export const DEVNET_API_HTTP_SECURE = httpEndpoint(devnet, true)
export const DEVNET_API_WS_SECURE = wsEndpoint(devnet, true)

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
