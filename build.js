import esbuild from "esbuild"

esbuild.buildSync({
    entryPoints: ["bxsolana/index.ts"],
    // platform: "browser",
    platform: "node",
    sourcemap: true,
    bundle: true,
    outfile: "dist/index.js",
})
