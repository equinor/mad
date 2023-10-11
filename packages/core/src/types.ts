import { EnvironmentContextProps } from "@equinor/mad-components";
import { ImageSourcePropType } from "react-native";

export type MadConfig = {
    appVersion: string;
    servicePortalName: string;
    environment: EnvironmentContextProps["environment"];
    authentication: {
        clientId: string;
        redirectUri: string;
    };
    login: {
        title: string;
        logo: ImageSourcePropType;
    };
};

export type CoreStackParamListBase = {
    Login: undefined;
    WhatsNew: undefined;
    ReleaseNotes: undefined;
    Settings: undefined;
    About: undefined;
    Feedback: undefined;
    Root: undefined;
    NotFound: undefined;
};

export type Environment = "dev" | "test" | "qa" | "prod";
