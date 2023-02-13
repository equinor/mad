# Maintenance API TypeScript wrapper

This library wraps the Maintenance API in a TypeScript library.
It inclides everything needed for establishing a secure connection to the maintenance API and is focused on ease of use.

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

Run `nx codegen maintenance-api` to generate the library from the Maintenance API schema.

## Building

Run `nx build maintenance-api` to build the library.

## Running unit tests

Run `nx test maintenance-api` to execute the unit tests via [Jest](https://jestjs.io).
