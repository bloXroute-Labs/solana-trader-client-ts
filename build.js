const esbuild = require("esbuild")

esbuild.buildSync({
    entryPoints: ["bxsolana/index.ts"],
    platform: "browser",
    sourcemap: true,
    bundle: true,
    outfile: "dist/index.js",
})