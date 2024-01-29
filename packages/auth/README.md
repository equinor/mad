# MAD AUTH

A simple authentication package used by the mad-team. It uses MSAL under the hood, and requires you
to set up an app registration in azure.

# Usage

You have to install `react-native-msal` in your app in order to make this work. `react-native-msal`
is an archived package no longer maintained, but we have created a fork which you can find
[here](https://github.com/equinor/react-native-msal). Install the newest commit by putting this in
your `package.json`:

```json
{
    "dependencies": {
        "react-native-msal": "git+https://github.com/equinor/react-native-msal.git#COMMIT_HASH"
    }
}
```

PS: you might need `yarn` installed on your computer for it to work.

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
initiateAuthenticationClient({clientId: string, redirectUri: string, authority?: string}): Promise<void>
```

To check if the authentication client exists, use this function:

```ts
authenticationClientExists(): boolean
```

To authenticate interactively, use this function:

```ts
authenticateInteractively(scope: string[]): Promise<MadAuthenticationResult | null>
```

To authenticate silently, use this function:

```ts
authenticateSilently(scope: string[]): Promise<MadAuthenticationResult | null>
```

To get account, use this function:

```ts
getAccount(): Promise<MadAccount | null>
```

Alternatively, you can use this hook to get account:

```ts
useAccount(): MadAccount | null
```
