import { Language } from "../types";

/**
 * Supported languages for the core package
 */
export const CORE_SUPPORTED_LANGUAGES = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "nb",
        name: "Norwegian",
    },
] as const satisfies readonly Language[];

export type SupportedLanguageCode = (typeof CORE_SUPPORTED_LANGUAGES)[number]["code"];
