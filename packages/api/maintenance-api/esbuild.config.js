import * as esbuild from "esbuild"

const sharedOptions = {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: true,
  packages: "external",
  tsconfig: "./tsconfig.lib.json",
}

await esbuild.build({
  ...sharedOptions,
  platform: "node",
  target: "node16",
  outfile: "./dist/index.js",
});
await esbuild.build({
  ...sharedOptions,
  platform: "neutral",
  format: "esm",
  outfile: "./dist/index.esm.js",
});