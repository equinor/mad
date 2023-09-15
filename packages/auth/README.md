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

Next, add our provided `LoginScreen` to your application (or create your own):

```tsx
import React from "react";
import { LoginScreen as MadAuthLoginScreen } from "@equinor/mad-auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import Logo from "../assets/images/icon.png";

export const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <MadAuthLoginScreen
            logo={Logo}
            redirectUri="your redirect uri can be found in your azure app registration"
            clientId="your client id can be found in your azure app registration"
            navigateFn={() => navigation.navigate("Root")}
        />
    );
};
```

This package provides a few basic functions you can use to either make your own login screen, or use
throughout the app:

To initiate the authentication client, use this function:

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
