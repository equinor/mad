# Maintenance API TypeScript wrapper

This library wraps the Maintenance API in a TypeScript library. It includes everything needed for
establishing a secure connection to the maintenance API and is focused on ease of use.

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

Updating the wrapper is a matter of first running codegen on an updated OpenAPI spec, ensuring that
it builds and tests correctly and then you're done. Use the steps under as a guide

### Codegen

Run `yarn generate:maintenance-api /path/to/schema.json` to generate the library from the
Maintenance API schema. You will need to download the schema from the Maintenance API docs to your
machine before doing this.

### Formalities

Though the package has its own version, the wrapper itself also has a version that refers to the
actual api version being used. You will have to manually update this version in
`src/lib/generated/core/OpenAPI.ts`. This ensures that the package.json version can be version
bumped in case we correct some errors without making it look like we are changing the Maintenance
API spec version.

### Building

Run `yarn build:maintenance-api` to build the library.

### Running unit tests

Run `yarn test:maintenance-api` to execute the unit tests via [Jest](https://jestjs.io).
