import { defineConfig } from "tsup";

export default defineConfig(options => ({
    entry: ["./src/**/*.ts?(x)", "!./src/types.d.ts", "!./src/__tests__/*"],
    splitting: true,
    clean: true,
    dts: true,
    format: "esm",
    bundle: !options.watch,
    tsconfig: "./tsconfig.json",
    loader: {
        ".otf": "copy",
    },
    esbuildOptions(options) {
        options.assetNames = "assets/fonts/[name]";
    },
}));
