import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  outfile: "../../../dist/maintenace-api",
  platform: "node",
});