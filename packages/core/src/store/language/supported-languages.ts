import { Language } from "../types";

/**
 * Supported languages. All languages in this list should be supported by our common screens
 */
export const ALL_SUPPORTED_LANGUAGES = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "nb",
        name: "Norwegian",
    },
] as const satisfies ReadonlyArray<Language>;

export type SupportedLanguageCode = (typeof ALL_SUPPORTED_LANGUAGES)[number]["code"];
