process.env.API_ENV = "mainnet"
process.env.IS_UNIT_TEST = "true"

import {
    callGetPumpFunAmmQuotes,
    callPostPumpFunAmmSwap,
    doAmmRequests,
    getGrpcProviders,
    grpc,
} from "."

test("example all grpc", async () => {
    await grpc()
})

test("example AMM requests", async () => {
    const { provider, pumpProvider } = getGrpcProviders()
    await doAmmRequests(provider, pumpProvider)
}, 30000)

test("example Pump Fun AMM Quote", async () => {
    const { pumpProvider } = getGrpcProviders()
    await callGetPumpFunAmmQuotes(pumpProvider)
})

test("example Pump Fun AMM Swap", async () => {
    const { pumpProvider } = getGrpcProviders()
    await callPostPumpFunAmmSwap(pumpProvider)
})
