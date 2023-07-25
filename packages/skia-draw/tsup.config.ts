import { spawnSync } from "child_process";
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.ts?(x)", "!./src/__tests__/*"],
    splitting: true,
    clean: true,
    dts: false,
    format: "esm",
    tsconfig: "./tsconfig.json",
    async onSuccess() {
        // eslint-disable-next-line no-console
        console.log("⚙️ Generating typescript declarations..");
        spawnSync("tsc", [
            "--project",
            "tsconfig.json",
            "--emitDeclarationOnly",
            "--declaration",
        ]);
    },
});
