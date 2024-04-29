# EXPO AUTH SESSION

An authentication library which uses Expo Auth Session under the hood, and requires you to set up
and app registration in Azure. This replaces the previous implementation that is using
`react-native-msal`.

# Usage

If you are already using `mad-auth 0.1.*` via the `mad-core` package here are some guidelines for migrating to `mad-auth 1.0`:

You have to install `expo-auth-session` and `expo-crypto` in your project.

```
npm i expo-auth-session expo-crypto
```

```
yarn add expo-auth-session expo-crypto
```

Next, add this to your `mad.config.ts` file:

```ts
    login: {
        useAuthenticate: true
    }
```

the `mad-core` package should handle most of the authentication logic for you. If there are certain usages in your app that use any mad-auth functions directly, 
here is an overview of the equivalent functions in `mad-auth 1.0` :


