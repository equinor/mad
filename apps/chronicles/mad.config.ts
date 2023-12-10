import { MadConfig } from "@equinor/mad-core";
import Logo from "./assets/images/icon.png";

export const config: MadConfig = {
    appVersion: "1.0.0",
    servicePortalName: "Chronicles",
    environment: "prod",
    language: {
        supportedLanguages: [
            { code: "en", name: "English" },
            { code: "nb", name: "Norwegian" },
        ],
    },
    authentication: {
        redirectUri: "msauth.com.equinor.mad.chronicles://auth",
        redirectUriWeb: "http://localhost:8081",
        clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
        scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
    },
    login: {
        title: "Chronicles",
        logo: Logo,
    },
    applicationInsights: {
        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",
        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },
    },
    serviceNow: {
        whatever: "",
    },
    about: {
        endpoints: [],
        buildNumber: "",
    },
};
