# Equinor MAD ESLint

This package includes all ESLint configurations used in the MAD Team at Equinor.

## Config structure

The main package consists of multiple entrypoints:

-   `base`
-   `react`
-   `typescript`

These entrypoints can be be used individually or all together.

## Installation

If you are using the default set of rules (`@equinor/mad`) or the `@equinor/mad/typescript` config, you need to first install and configure some prerequisites:
1. Install the latest version of `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`:
```
npm i @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest --save-dev
```

2. Add the following to your project ESLint config file:
```js
{
    // ...
    root: true,
    parserOptions: {
        project: true
        tsconfigRootDir: __dirname,
      }
}
```
