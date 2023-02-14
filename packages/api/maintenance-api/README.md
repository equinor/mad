# Maintenance API TypeScript wrapper

This library wraps the Maintenance API in a TypeScript library.
It includes everything needed for establishing a secure connection to the maintenance API and is focused on ease of use.

## How to use

```ts
import { initializeMaintenanceApi, Plants } from "@mad/maintenance-api";

const getMaintenanceApiToken = async () => {
  return "SomeToken";
};

initializeMaintenanceApi({
  baseUrl: "https://someUrlHere.com",
  tokenFetcher: getMaintenanceApiToken,
});
```

# Development

## Codegen

Run `pnpm generate:maintenance-api --input=/path/to/schema.json` to generate the library from the Maintenance API schema.

## Building

Run `pnpm build:maintenance-api` to build the library.

## Running unit tests

Run `pnpm test:maintenance-api` to execute the unit tests via [Jest](https://jestjs.io).
