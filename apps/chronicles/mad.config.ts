import { MadConfig } from "@equinor/mad-core";
import { getBuildNumber } from "./settings";
import Splash from "./assets/images/splash.png";
import { RootStackParamList } from "./types/navigation";
import * as ExpoConfig from "./app.json";

export const config: MadConfig<RootStackParamList> = {
    navigateToMainRouteFn: navigation => navigation.navigate("Root"),
    appVersion: "1.0.0",
    servicePortalName: "Chronicles",
    currentEnvironment: "dev",
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
            redirectUriWeb: "https://web-chronicles-prod.radix.equinor.com/",
            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
            scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
        },
        test: {
            redirectUri: "msauth.com.equinor.mad.chronicles://auth",
            redirectUriWeb: "https://web-chronicles-test.radix.equinor.com/",
            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
            scopes: ["830a7388-cd89-4e25-a631-bd615bf225a4/user_impersonation"],
        },
        dev: {
            redirectUri: "msauth.com.equinor.mad.chronicles://auth",
            redirectUriWeb: "http://localhost:8081",
            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
            scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
        },
    },
    login: {
        splash: Splash,
        backgroundColor: ExpoConfig.expo.splash.backgroundColor,
        addScreenManually: true,
    },
    applicationInsights: {
        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",
        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },
    },
    about: {
        endpoints: [],
        buildNumber: getBuildNumber(),
    },
    experimental: {
        useExpoAuthSession: true,
    },
};
