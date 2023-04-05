import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/index.ts", "./src/components/*/!(index).ts?(x)"],
    splitting: false,
    clean: true,
    dts: true,
    format: "esm",
    tsconfig: "./tsconfig.json",
    esbuildOptions(options, context) {
        options.assetNames = "assets/fonts/[name]"
    },
    loader: {
        ".otf": "file",
    }
});