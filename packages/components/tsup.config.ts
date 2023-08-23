import { spawnSync } from "child_process";
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.ts?(x)", "!./src/types.d.ts", "!./src/__tests__/*"],
    splitting: true,
    clean: true,
    dts: false,
    format: "esm",
    tsconfig: "./tsconfig.json",
    loader: {
        ".otf": "copy",
    },
    esbuildOptions(options) {
        options.assetNames = "assets/fonts/[name]";
    },
    async onSuccess() {
        // eslint-disable-next-line no-console
        console.log("⚙️ Generating typescript declarations..");
        spawnSync("tsc", ["--project", "tsconfig.json", "--emitDeclarationOnly", "--declaration"]);
    },
});
