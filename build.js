const { build } = require("esbuild")
const { dependencies, peerDependencies } = require("./package.json")
const { Generator } = require("npm-dts")

const shared = {
    entryPoints: ["bxsolana/index.ts"],
    bundle: true,
    external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
}

build({
    ...shared,
    outfile: "dist/index.js",
})

build({
    ...shared,
    outfile: "dist/index.esm.js",
    format: "esm",
})

new Generator({
    entry: "bxsolana/index.ts",
    output: "dist/index.d.ts",
}).generate()
