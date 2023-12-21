import { ImageSourcePropType } from "react-native";
import { Language } from "./store/types";
import { AppInsightsInitConfig } from "@equinor/mad-insights";

export type MadConfig = {
    /**
     * Version of the app. Will be displayed in the about screen, and will be used for release notes
     */
    appVersion: EnvironmentValues<string>;
    /**
     * service portal name of the app. Will be used to find the correct resource for service messages and release notes.
     * @see https://web-mad-service-portal-web-prod.radix.equinor.com/
     */
    servicePortalName: EnvironmentValues<string>;
    /**
     * ServiceNow Configuration Item (cmdb_ci) of the app.
     * Will be used to create ServiceNow tickets for the correlating application.
     * @see https://portal.azure.com/#@StatoilSRM.onmicrosoft.com/resource/subscriptions/2ad1b087-ffb8-4cf3-bcc2-8caeebfcd3f3/resourceGroups/mad-test/providers/Microsoft.Storage/storageAccounts/madtest62alhixjcodkm/storagebrowser
     */
    serviceNowConfigurationItem: EnvironmentValues<string>;
    /**
     * Current environment. Will be used for environment banner, as well as getting the correct resource for service messages and release notes
     */
    currentEnvironment: Environment;
    language: EnvironmentValues<{
        /**
         * Supported languages of the app.
         */
        supportedLanguages: Language[];
        /**
         * Default language of the app. This language will be returned by useLanguage hook and getLanguage function if user has not selected a language.
         * If `defaultLanguageCode` is not provided, the first language in `supportedLanguages` will be considered default.
         */
        defaultLanguageCode?: string;
        /**
         * Core navigates to a language selection screen by default if needed. Set this to true if you want to override this behaviour
         */
        skipOnboarding?: boolean;
    }>;
    authentication: EnvironmentValues<{
        /**
         * Client Id of the application. Used for login.
         * You can find your application's client Id in your application's
         * App registration in Azure.
         * @see https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
         */
        clientId: string;
        /**
         * Redirect uri of your application.
         * You can find and modify your application's registered redirect URIs in your application's
         * App registration in Azure.
         * @see https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
         */
        redirectUri: string;
        /**
         * Redirect uri for the web wersion of your application
         * You can find and modify your application's registered redirect URIs in your application's
         * App registration in Azure.
         * @see https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
         */
        redirectUriWeb?: string;
        /**
         * Scope to use for interactive login. You can find information about your application's
         * available scopes in your application's App registration in Azure.
         * @see https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
         */
        scopes: string[];
    }>;
    login: EnvironmentValues<{
        /**
         * Title of the app. Used in login screen
         */
        title: string;
        /**
         * App logo. Used in login screen
         */
        logo: ImageSourcePropType;
    }>;
    /**
     * App insights config used for initializing application insights service(s)
     */
    applicationInsights: EnvironmentValues<AppInsightsInitConfig>;
    about?: EnvironmentValues<{
        /**
         * Endpoints used by the app
         */
        endpoints: string[];
        /**
         * Build number of the app.
         */
        buildNumber: string;
    }>;
    serviceNow?: EnvironmentValues<{
        //TODO
        whatever: string;
    }>;
};

export type CoreStackParamListBase = {
    Login: undefined;
    WhatsNew: undefined;
    SelectLanguage: undefined;
    SelectLanguageOnboarding: undefined;
    ReleaseNotes: undefined;
    Settings: undefined;
    About: undefined;
    Feedback: undefined;
    Root: undefined;
    NotFound: undefined;
};

export type Environment = "dev" | "test" | "qa" | "prod";

export type EnvironmentValues<T> = Partial<Record<Environment, T>> | T;

export type WithoutEnvironmentOptionValues<TToken> = {
    [K in keyof TToken]: TToken[K] extends EnvironmentValues<infer U> ? U : TToken[K];
};

export type EnvironmentContextualConfig = WithoutEnvironmentOptionValues<MadConfig>;
