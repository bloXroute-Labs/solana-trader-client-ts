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

## Examples

<!-- GrpcClient Example -->
<details open>
<summary>GrpcClient</summary>

```typescript
import {
    MAINNET_API_GRPC_PORT,
    MAINNET_API_NY_GRPC,
    GrpcProvider,
    GetRecentBlockHashRequest,
    loadFromEnv
} from "@bloxroute/solana-trader-client-ts";

// Calls to provider must be made inside async function
async function main(): Promise<void> {
    try {
        // Load configuration from environment variables
        const config = loadFromEnv();

        // Initialize the GrpcProvider with necessary credentials and endpoint
        const provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        );

        // Prepare the request for fetching the recent block hash
        const request: GetRecentBlockHashRequest = {};

        // Fetch the recent block hash from the provider
        const response = await provider.getRecentBlockHash(request);

        // Log the response
        console.info("Recent Block Hash Response: ");
        console.info(JSON.stringify(response, null, 2));
    } catch (error) {
        console.error("Error fetching recent block hash:", error);
    }
}

// Execute the main function
main();
```
</details>

---

<!-- HttpClient Example -->
<details>
<summary>HttpClient</summary>

```typescript
import {
  MAINNET_API_NY_HTTP,
  HttpProvider,
  GetRecentBlockHashRequest,
  loadFromEnv
} from "@bloxroute/solana-trader-client-ts";
import { AxiosRequestConfig } from "axios"

// Calls to provider must be made inside async function
async function main(): Promise<void> {
  try {
    // Load configuration from environment variables
    const config = loadFromEnv();
    
    const requestConfig: AxiosRequestConfig = {
      timeout: 30_000,
    }
    
    // Initialize the HttpProvider with necessary credentials and endpoint
    let provider = new HttpProvider(
      config.authHeader,
      config.privateKey,
      MAINNET_API_NY_HTTP,
      requestConfig
    )
    
    // Prepare the request for fetching the recent block hash
    const request: GetRecentBlockHashRequest = {};
    
    // Fetch the recent block hash from the provider
    const response = await provider.getRecentBlockHash(request);
    
    // Log the response
    console.info("Recent Block Hash Response: ");
    console.info(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("Error fetching recent block hash:", error);
  }
}

// Execute the main function
main();
```

</details>

---

<!-- WsClient Example Example -->
<details>
<summary>WsClient</summary>

```typescript
import {
  MAINNET_API_NY_WS,
  WsProvider,
  GetRecentBlockHashRequest,
  loadFromEnv
} from "@bloxroute/solana-trader-client-ts";

// Calls to provider must be made inside async function
async function main(): Promise<void> {
  try {
    // Load configuration from environment variables
    const config = loadFromEnv();
    
    // Initialize the WsProvider with necessary credentials and endpoint
    const provider = new WsProvider(
      config.authHeader,
      config.privateKey,
      MAINNET_API_NY_WS
    )
    
    // Prepare the request for fetching the recent block hash
    const request: GetRecentBlockHashRequest = {};
    
    // Connect to the WebSocket server
    await provider.connect()
    
    // Fetch the recent block hash from the provider
    const response = await provider.getRecentBlockHash(request);
    
    // Close the connection
    provider.close()
    
    // Log the response
    console.info("Recent Block Hash Response: ");
    console.info(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("Error fetching recent block hash:", error);
  }
}

// Execute the main function
main();
```

</details>

---

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

First, you will need to create an npm.js account, and request publishing access from Dima for the Bloxroute Organization.

Then, you will need to setup 2FA, it is required in order to publish.

Then, bump the `package.json` version:

```
"version": "2.2.1",
```

And finally run:

```
$ npm run release
```

[more info](https://bloxroute.atlassian.net/wiki/spaces/TRAD/pages/562200577/solana-trader-client-ts)

[1]: https://portal.bloxroute.com/
