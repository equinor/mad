import { spawnSync } from "child_process";
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.ts?(x)", "!./src/types.d.ts"],
    splitting: true,
    clean: true,
    dts: true,
    format: "esm",
    bundle: false,
    tsconfig: "./tsconfig.json",
    loader: {
        ".json": "copy",
    },
    async onSuccess() {
        // eslint-disable-next-line no-console
        console.log("⚙️ Copying static files..");
        spawnSync("cp", ["-r", "./src/static/", "./dist/static"]);
    },
});
