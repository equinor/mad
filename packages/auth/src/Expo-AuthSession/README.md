# EXPO AUTH SESSION

An authentication library which uses Expo Auth Session under the hood, and requires you to set up
and app registration in Azure. This replaces the previous implementation that is using
`react-native-msal`.

## Usage

The `LoginButton` provided by this package uses `@equinor/mad-components`'s `Button` component. You
can style it however you want. However, if you want to create your own `LoginButton` from scratch,
you can do so by using the `useAuthenticate` hook. See the implementation of our `LoginButton` if
you need some inspiration. Alternatively, you can create the login flow logic from scratch using the
provided functions below.

This package provides a few basic functions you can use to either make your own login button, or use
throughout the app:

If you are not using our login button, nor `useAuthenticate`, use this function to initiate the
authentication client:

```ts
initiateAuthenticationClient(config: AuthRequestConfig,
    discovery: DiscoveryDocument): void
```

To check if the authentication client exists, use this function:

```ts
authenticationClientExists(): boolean
```

To authenticate interactively, use this function:

```ts
authenticateInteractively(): Promise<MadAuthenticationResult | null>
```

To authenticate silently, use this function:

```ts
authenticateSilently(): Promise<MadAuthenticationResult | null>
```

To get account, use this function:

```ts
getAccount(): MadAccount | null
```

Alternatively, you can use this hook to get account:

```ts
useAccount(): MadAccount | null
```

## Expo Web

This API uses `expo-secure-store` to securely store an encryption key for the persisted token. As
`expo-secure-store` is not working for Expo Web we have implemented a parallel API to
`expo-auth-session` for web that uses `@azure/msal-browser` instead. This is all handled under the hood, so
there is no need to do anything if you are developing for Expo Web in addition to iOS/Android.
