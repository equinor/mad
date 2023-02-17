# Maintenance API TypeScript wrapper

This library wraps the Maintenance API in a TypeScript library.
It includes everything needed for establishing a secure connection to the maintenance API and is focused on ease of use.

## How to use

```ts
import {
  initializeMaintenanceApi,
  filterMaintenanceApiProblem,
  Plants,
} from "@equinor/mad-maintenance-api-ts-wrapper";

// Example token fetcher. Get this from your auth provider
const getMaintenanceApiToken = async () => {
  return "SomeToken";
};

// Set up maintenance api with correct url and token
initializeMaintenanceApi({
  baseUrl: "https://someUrlHere.com",
  tokenFetcher: getMaintenanceApiToken,
});

// Endpoints are structured similarly as in the maintenance api docs.
const apiResult = await Plants.TagAndEquipment.lookupTag({
  plantId: "123",
  tagId: "34XV1234",
  includeMeasuringPoints: true,
});

// Maitnenance API returns a union type containing ProblemDetails in the case of internal errors.
// We can filter this out using the provided filter method:
const properResult = filterMaintenanceApiProblem(apiResult);
```

## Development

### Codegen

Run `pnpm generate:maintenance-api --input=/path/to/schema.json` to generate the library from the Maintenance API schema.

### Building

Run `pnpm build:maintenance-api` to build the library.

### Running unit tests

Run `pnpm test:maintenance-api` to execute the unit tests via [Jest](https://jestjs.io).
