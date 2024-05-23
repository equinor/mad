---
sidebar_label: Experimental features
description: Learn how to use experimental features!
---

# Using experimental features (optional)

Some functionalities that are implemented but not mature enough for widespread use will be made
available as an experimental option for developers to test out.

Currently the only experimental feature is switching from react-native-msal to expo-auth-session for
authentication handling.

To use this experimental feature, you have to install `expo-auth-session` and `expo-crypto` in your
project.

```
npm i expo-auth-session expo-crypto
```

```
yarn add expo-auth-session expo-crypto
```

Next, add this to your `mad.config.ts` file:

```ts
experimental: {
    useExpoAuthSession: true;
}
```

The `mad-core` package should handle most of the authentication logic for you. If there are certain
usages in your app that use any `mad-auth` functions directly, you can import these functions
directly as normal, as long as you have the `useExpoAuthSession` flag in your `mad.config.ts` file.
If you want to learn more about this feature please check out the `README.md` in
`mad-auth/Expo-AuthSession`
