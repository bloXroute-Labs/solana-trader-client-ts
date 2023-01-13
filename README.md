# Solana Trader Typescript Client

Provides a Typescript SDK for bloXroute's Solana Trader API.

## Installation

```
npm i @bloxroute/solana-trader-client-ts
```

## Usage

This library supports HTTP, websockets, and GRPC interfaces. NOTE: GRPC is not available in browser. See https://yuku.takahashi.coffee/blog/2019/01/grpc-proxy-for-grpc-web

First, you need to set `AUTH_HEADER` in your .env file to be able to authenticate properly.

For any methods involving transaction creation you will need to provide your 
Solana private key. You can provide this via the .env file - variable 
`PRIVATE_KEY`. See samples for more information. 

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

Refer to the `examples/` for more info. You need to add an .env file in `examples/` with the right properties, to run it.

a proper `.env` file looks like something like this.

```
AUTH_HEADER="ZDIxYzE0NmItZWYxNi00ZmFmLTg5YWUtMzYwMTk4YzUyZmM4OjEwOWE5MzEzZDc2Yjg3M......................"
PRIVATE_KEY="3EhZ4Epe6QrcDKQRucdftv6vWXMnpTKDV4mekSPWZEcZnJV4huzesLHwASdVUzo......................"
```

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

## How to Publish a new NPM release
We use `np` to publish new releases to npm. To make a new release, in the project directory use:

```
$ npm run release
```

Follow the menu items to select a version for the release (major, minor, patch). 

