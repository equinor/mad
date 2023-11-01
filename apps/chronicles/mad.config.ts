import { MadConfig } from "@equinor/mad-core";
import Logo from "./assets/images/icon.png";

export const config: MadConfig = {
    appVersion: "1.0.0",
    servicePortalName: "Chronicles",
    environment: "test",
    language: {
        supportedLanguages: [{ code: "en", name: "English" }],
    },
    authentication: {
        redirectUri: "msauth.com.equinor.mad.chronicles://auth",
        clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
        scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
    },
    login: {
        title: "Chronicles",
        logo: Logo,
    },
    about: {
        endpoints: [],
        buildNumber: "1",
    },
    serviceNow: {
        whatever: "",
    },
    settings: [
        {
            title: "test",
            items: [
                {
                    name: "navigation",
                    description: "With description",
                    iconName: "ab-testing",
                    onPress: () => undefined,
                    title: "Navigation test",
                },
                {
                    name: "button",
                    iconName: "ab-testing",
                    onPress: () => undefined,
                    title: "Button test",
                    color: "danger",
                },
                {
                    name: "switch",
                    title: "Switch test",
                    iconName: "ab-testing",
                    isActive: true,
                    onChange: () => undefined,
                },
            ],
        },
    ],
};
