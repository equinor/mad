---
sidebar_label: Create a config
description: Learn how to create a config!
---

# Create a config

Create a `mad.config.ts` file (name of the file can be anything, but we have used this naming
convention when developing this package). Use the `MadConfig` type from `@equinor/mad-core` for type
safety:

```ts
import { MadConfig } from "@equinor/mad-core";
import Splash from "./assets/images/splash.png";
import { getBuildNumber, getAppSpecificEndpoints } from "./settings";
import { RootStackParamList } from "./types/navigation";

export const config: MadConfig<RootStackParamList> = {
    navigateToMainRouteFn: navigation => navigation.navigate("Root"),
    appVersion: "1.0.0",
    servicePortalName: "Chronicles",
    currentEnvironment: "prod",
    language: {
        supportedLanguages: [
            { code: "en", name: "English" },
            { code: "nb", name: "Norwegian" },
            { code: "pt", name: "Portuguese" },
        ],
        skipOnboarding: false,
    },
    authentication: {
        redirectUri: "msauth.com.equinor.mad.chronicles://auth",
        redirectUriWeb: "http://localhost:8081",
        clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
        scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
    },
    login: {
        splash: Splash,
    },
    applicationInsights: {
        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",
        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },
    },
    serviceNow: "SERVICE_NOW_CONFIGURATION_ITEM",
    about: {
        endpoints: getAppSpecificEndpoints(),
        buildNumber: getBuildNumber(),
    },
};
```

You can also set environment specific values for each field. The config supports `dev`, `test`,
`qa`, `prod`. The correct values will be picked based on `currentEnvironment`. Example from
`Chronicles`:

```ts
import { MadConfig } from "@equinor/mad-core";
import Splash from "./assets/images/splash.png";
import { getBuildNumber } from "./settings";
import { RootStackParamList } from "./types/navigation";

export const config: MadConfig<RootStackParamList> = {
    navigateToMainRouteFn: navigation => navigation.navigate("Root"),
    appVersion: "1.0.0",
    servicePortalName: "Chronicles",
    currentEnvironment: "prod",
    serviceNow: "MAD",
    language: {
        supportedLanguages: [
            { code: "en", name: "English" },
            { code: "nb", name: "Norwegian" },
            { code: "pt", name: "Portuguese" },
        ],
        skipOnboarding: false,
    },
    authentication: {
        prod: {
            redirectUri: "msauth.com.equinor.mad.chronicles://auth",
            redirectUriWeb: "http://localhost:8081",
            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
            scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
        },
        test: {
            redirectUri: "msauth.com.equinor.mad.chronicles://auth",
            redirectUriWeb: "http://localhost:8081",
            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
            scopes: ["830a7388-cd89-4e25-a631-bd615bf225a4/user_impersonation"],
        },
    },
    login: {
        splash: Splash,
    },
    applicationInsights: {
        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",
        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },
    },
    about: {
        endpoints: [],
        buildNumber: getBuildNumber(),
    },
};
```

| key                   | required? | explanation                                                                                                                                                                                         |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appVersion`          | true      | Your app's current version. Used to figure out whether the app should display what's new, and which release notes version to fetch                                                                  |
| `navigateToMainFn`    | true      | a function `@equinor/mad-core` will use when navigating to your app's main route. To make this function type safe, make sure to provide a `ParamList` as a generic argument to the `MadConfig` type |
| `servicePortalName`   | true      | The name of the app in the service portal. Used to figure out which release notes and service messages to fetch                                                                                     |
| `currentEnvironment`  | true      | The environment of the app. Used to display environment banner, and to select the correct service message and release notes endpoint. Also used to pick correct values from config                  |
| `language`            | true      | language config. See [language](#language-config)                                                                                                                                                   |
| `authentication`      | true      | authentication config. See [authentication](#authentication-config)                                                                                                                                 |
| `login`               | true      | login screen config. See [login](#login-config)                                                                                                                                                     |
| `applicationInsights` | true      | application insights config. See [application insights](#application-insights-config)                                                                                                               |
| `serviceNow`          | false     | Configuration item in Service Now. Used for create incident screen. If not provided, we won't add create incident screen to the stack                                                               |
| `about`               | false     | about screen config. If not provided, we won't add about screen to the stack. See [about](#about-config)                                                                                            |

###### Language config

| key                   | required? | explanation                                                                                                                                                                                                                                                                                         |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `supportedLanguages`  | true      | an array of supported languages. The language object should contain `code` and `name`. `mad-core` supports Norwegian (`no`, `nb`), english (`en`) and Portuguese (`pt`). If you use any other languages, the common screens will be in english. If you need more language support, create an issue! |
| `defaultLanguageCode` | false     | The default language of the app. This is the language the app will use if the user has not selected a language. If default language is not provided, the app will use the first language in the `supportedLanguages` array                                                                          |
| `skipOnboarding`      | false     | Set this to true if you don't want to force the user to set their preferred language the first time they start the app                                                                                                                                                                              |

###### Authentication config

| key              | required? | explanation                                                                           |
| ---------------- | --------- | ------------------------------------------------------------------------------------- |
| `clientId`       | true      | The application's client id                                                           |
| `redirectUri`    | true      | The application's redirect uri                                                        |
| `redirectUriWeb` | false     | The application's redirect uri for web. This is required if your app has web support. |
| `scopes`         | true      | an array of scopes to use when logging in                                             |

###### Login config

| key                 | required? | explanation                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `splash`            | true      | The splash screen of the application. Will be used as a background for the login screen. For best results, set `resizeMode` to `"cover"`, and `backgroundColor` to your splash screen's background color in `app.json`. `@equinor/mad-core` will use resize mode `cover` on iOS, and `contain` on web.                                                                               |
| `backgroundColor`   | false     | Background color for the login screen. Should be identical to the splash screen's background color. We have a common design for login screens across our apps, with a default background color. If your login screen for some reason uses different colors, use this property to change the background color.                                                                        |
| `addScreenManually` | false     | Set this to true if you want to add the login screen manually to the stack, just like you do with SettingsScreen. This way you can access LoginScreen's props: `onAuthenticationSuccessful` and `onAuthenticationFailed`. When adding `LoginScreen` to the stack, use `getDefaultScreenOptionsForLoginScreen` to use the same options as we do when adding the screen automatically. |

###### Application Insights config

| key                                        | required? | explanation                                                                                       |
| ------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------- |
| `instrumentationKey` or `connectionString` | true      | used to connect to the right resource in Azure                                                    |
| `longTermLog`                              | false     | used to define long term log config. It should contain `instrumentationKey` or `connectionString` |

###### About config

| key           | required? | explanation                                                                                                                           |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `endpoints`   | true      | The endpoints used by the application. The endpoints used by `mad-core` is added automatically. Will be displayed at the about-screen |
| `buildNumber` | true      | The build number of the application. Will be displayed at the about-screen                                                            |
