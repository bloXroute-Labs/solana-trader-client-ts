# Serum Typescript Client

Provides a Typescript SDK for bloXroute's Serum API.

## Installation

```
$ git clone https://github.com/bloXroute-Labs/serum-client-ts.git
$ cd serum-client-ts
$ npm i
```

## Usage

This library supports HTTP, websockets, and GRPC interfaces. You can use it with
a context manager or handle open/closing yourself.

For any methods involving transaction creation you will need to provide your 
Solana private key. You can provide this via the .env file - variable 
`WALLET_SECRET_KEY`. Also please set your `WALLET_PUBLIC_KEY` to your main SOL wallet address.
See samples for more information. 
As a general note on this: methods named `post*` (e.g. `postorder`) typically 
do not sign/submit the transaction, only return the raw unsigned transaction. 
This isn't very useful to most users (unless you want to write a signer in a 
different language), and you'll typically want the similarly named `submit*` 
methods (e.g. `submitOrder`). These methods generate, sign, and submit the
transaction all at once.

Sample:

```typescript
import { HttpProvider } from "../bxserum/provider/http.js"

const provider = new HttpProvider()
    
let req = await provider.getOrderbook({ "market": "SOLUSDC", "limit": 5 })
console.info(req)
```

Refer to the `examples/` for more info.

