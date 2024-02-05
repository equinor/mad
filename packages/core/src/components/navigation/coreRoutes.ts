import { CoreStackParamListBase } from "../../types";

export const CoreRoutes = {
    LOGIN: "Login",
    WHATS_NEW: "WhatsNew",
    SELECT_LANGUAGE: "SelectLanguage",
    SELECT_LANGUAGE_ONBOARDING: "SelectLanguageOnboarding",
    RELEASE_NOTES: "ReleaseNotes",
    SETTINGS: "Settings",
    ABOUT: "About",
    FEEDBACK: "Feedback",
    NOT_FOUND: "NotFound",
} as const satisfies Record<string, keyof CoreStackParamListBase>;
