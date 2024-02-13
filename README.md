# Solana Trader Typescript Client

Provides a Typescript SDK for bloXroute's Solana Trader API.

This library is exposes HTTP, websockets, and GRPC interfaces, and is compatible with both modern browser and node.js
environments. Note that some methods and the GRPC interface is only available in node.js run-times, since some aspects
of these functions are incompatible with browsers (e.g. http/2 requirement for GRPC, loading from environment, etc.)

## Installation

```
npm i @bloxroute/solana-trader-client-ts
```

## Usage

First, you will need an `AUTH_HEADER` from bloXroute (see [the BDN user portal][1]) . If you wish to create transactions
you will also need your Solana `PRIVATE_KEY` available.

In `node.js` environments, you can specify both of these values in a `.env` file, or export them manually yourself. In
the browser, you'll want to define them during run-time from user input, and probably use some wallet provider to handle
the transaction signing.

A simple example:

```typescript
import { HttpProvider } from "../bxsolana/provider/http.js"

const provider = new HttpProvider()

let req = await provider.getOrderbook({ market: "SOLUSDC", limit: 5 })
console.info(req)
```

Refer to the `examples/` for more info. As mentioned above, you'll need an `.env` file for exported variables to execute
the full suite. A proper `.env` file looks like something like this.

```
AUTH_HEADER="ZDIxYzE0NmItZWYxNi00ZmFmLTg5YWUtMzYwMTk4YzUyZmM4OjEwOWE5MzEzZDc2Yjg3M......................"
PRIVATE_KEY="3EhZ4Epe6QrcDKQRucdftv6vWXMnpTKDV4mekSPWZEcZnJV4huzesLHwASdVUzo......................"
```

A general note on transaction submission: methods named `post*` (e.g. `postOrder`) typically do not sign/submit the
transaction, only return the raw unsigned transaction. This is mainly useful for generating transaction in browsers
or if you want to handle your signing manually. You may also want to use the similarly named `submit*` methods
(e.g. `submitOrder`), which generate, sign, and submit the transaction all at once.

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

[1]: https://portal.bloxroute.com/
