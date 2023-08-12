# Equinor MAD ESLint
This package includes all ESLint configurations used in the MAD Team at Equinor.

## Config structure
The main package consists of multiple entrypoints:
- `base`
- `react`
- `typescript`

These entrypoints can be be used individually or all together.

## Installation
If you are using the default set of rules (`mad`) or the `mad/typescript` config, add the following to your project ESLint config file:
```js
{
    // ...
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      }
}
```