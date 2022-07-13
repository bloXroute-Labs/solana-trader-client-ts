
import  base58 from "bs58"
import * as dotenv from 'dotenv';
dotenv.config()

const envWsk = process.env.WALLET_SECRET_KEY || ""
const wsk:Uint8Array = envWsk.length > 0 && envWsk[0] == "[" ? JSON.parse(envWsk) :  base58.decode(envWsk)

const wpk:string = process.env.WALLET_PUBLIC_KEY || ""

export default {
    WalletSecretKey : wsk,
    WalletPublicKey: wpk
}