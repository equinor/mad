import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.ts?(x)", "!./src/types.d.ts", "!./src/__tests__/*"],
    splitting: true,
    clean: true,
    dts: true,
    format: "esm",
    tsconfig: "./tsconfig.json",
});
