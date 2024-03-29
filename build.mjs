import esbuild from "esbuild"
import packageJson from './package.json' assert { type: 'json' };

const external = ["dotenv", "@grpc/grpc-js"]

// ESM for browser
esbuild.buildSync({
    entryPoints: ["bxsolana/index.browser.ts"],
    platform: "browser",
    format: "esm",
    sourcemap: true,
    bundle: true,
    outfile: "dist/browser/index.js",
    external,
    define: {
        'process.env.PACKAGE_NAME': JSON.stringify(packageJson.name),
        'process.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
    },
})

// CJS for browser
esbuild.buildSync({
    entryPoints: ["bxsolana/index.browser.ts"],
    platform: "browser",
    format: "cjs",
    sourcemap: true,
    bundle: true,
    outfile: "dist/browser/index.cjs",
    external,
    define: {
        'process.env.PACKAGE_NAME': JSON.stringify(packageJson.name),
        'process.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
    },
})

// ESM for node
esbuild.buildSync({
    entryPoints: ["bxsolana/index.ts"],
    platform: "node",
    format: "esm",
    sourcemap: true,
    bundle: true,
    // not entirely sure what this snippet does: https://github.com/evanw/esbuild/issues/1921
    banner: {
        js: `
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
`,
    },
    outfile: "dist/node/index.js",
    define: {
        'process.env.PACKAGE_NAME': JSON.stringify(packageJson.name),
        'process.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
    },
})

// CJS for node
esbuild.buildSync({
    entryPoints: ["bxsolana/index.ts"],
    platform: "node",
    format: "cjs",
    sourcemap: true,
    bundle: true,
    outfile: "dist/node/index.cjs",
    define: {
        'process.env.PACKAGE_NAME': JSON.stringify(packageJson.name),
        'process.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
    },
})
