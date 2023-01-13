import dotenv from "dotenv"

export type Config = {
    privateKey: string
    publicKey: string
    authHeader: string
}

export function loadFromEnv(): Config {
    dotenv.config()

    const envAuthHeader = process.env.AUTH_HEADER || ""
    const envPrivateKey = process.env.PRIVATE_KEY || ""
    const envPublicKey: string = process.env.PUBLIC_KEY || ""
    return {
        privateKey: envPrivateKey,
        publicKey: envPublicKey,
        authHeader: envAuthHeader,
    }
}
