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
    experimental: {
        useExpoAuthSession: true
    }
```

the `mad-core` package should handle most of the authentication logic for you. If there are certain usages in your app that use any mad-auth functions directly, 
you can import these functions directly by adding 
``import { ExpoAuthSession } from "@equinor/mad-auth;"``
and prepending ``ExpoAuthSession.`` to the methods you currently use from ``mad-auth

### If you are using this library for the first time: Follow these steps as well:

After installing it, follow
[this guide if you use expo](https://github.com/equinor/react-native-msal/blob/main/docs/expo_setup.md),
or
[this guide for iOS setup in a bare react native project](https://github.com/equinor/react-native-msal/blob/main/docs/ios_setup.md).
Our fork of `react-native-msal` will not work for Android.

Next, add our provided `LoginButton` to your application:

```tsx
export const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View
            style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
            }}
        >
            <LoginButton
                redirectUri="msauth.com.equinor.mad.chronicles://auth"
                clientId="49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed"
                onAuthenticationSuccessful={() => navigation.navigate("Root")}
                onAuthenticationFailed={() => console.error("Unable to authenticate")}
                enableAutomaticAuthentication
            />
        </View>
    );
};
```

The `LoginButton` provided by this package uses `@equinor/mad-components`'s `Button` component. You
can style it however you want. However, if you want to create your own `LoginButton` from scratch,
you can do so by using the `useAuthenticate` hook. See the implementation of our `LoginButton` if
you need some inspiration. Alternatively, you can create the login flow logic from scratch using the
provided functions below.

This package provides a few basic functions you can use to either make your own login button, or use
throughout the app:

If you are not using our login button, nor `useAuthenticate`, use this function to initate the
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

