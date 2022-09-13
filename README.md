# Solana Trader Typescript Client

Provides a Typescript SDK for bloXroute's Solana Trader API.

## Installation

```
$ git clone https://github.com/bloXroute-Labs/solana-trader-client-ts.git
$ cd solana-trader-client-ts
$ npm i
$ brew install pbkit/tap/pbkit
```

Full repo installation via NPM is expected to be supported soon.

## Usage

This library supports HTTP, websockets, and GRPC interfaces. 

For any methods involving transaction creation you will need to provide your 
Solana private key. You can provide this via the .env file - variable 
`WALLET_SECRET_KEY`. Also please set your `WALLET_PUBLIC_KEY` to your main SOL wallet address.
See samples for more information. 
A general note on this: methods named `post*` (e.g. `postorder`) typically 
do not sign/submit the transaction, only return the raw unsigned transaction. 
This isn't very useful to most users (unless you want to write a signer in a 
different language), and you'll typically want the similarly named `submit*` 
methods (e.g. `submitOrder`). These methods generate, sign, and submit the
transaction all at once.

Sample:

```typescript
import { HttpProvider } from "../bxsolana/provider/http.js"

const provider = new HttpProvider()
    
let req = await provider.getOrderbook({ "market": "SOLUSDC", "limit": 5 })
console.info(req)
```

Refer to the `examples/` for more info.

## Development

We use `pbkit/pbkit` to generate Typescript files from `.proto` definitions. You'll need to install their kit:

```
$ brew install pbkit/tap/pbkit
```

Clone the repo and install dependencies:
```
$ git clone https://github.com/bloXroute-Labs/solana-trader-client-ts.git
$ cd solana-trader-client-ts
$ npm i
```

Lint:

```
$ npm run lint
```

Format:

```
$ npm run format
```

Install precommit hooks:

```
$ npx husky install
```

Regenerate protobuf definitions:
```
$ npm run proto
```

