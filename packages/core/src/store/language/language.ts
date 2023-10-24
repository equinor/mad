import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createStorage } from "../storage";
import { Language } from "../types";
import { CORE_SUPPORTED_LANGUAGES } from "./supported-languages";

type LanguageState = {
    /**
     * Languages supported by the app
     */
    supportedLanguages: Language[];
    /**
     * Set languages supported by the app. If initial default language is not in the
     */
    setSupportedLanguages: (languages: Language[]) => void;
    /**
     * Get supported languages for the app
     * @returns {Language[]} supported languages
     */
    getSupportedLanguages: () => Language[];
    /**
     * Default language for the app.
     */
    defaultLanguage: Language;
    /**
     * User selected language
     */
    selectedLanguage: Language | null;
    /**
     * Set the default language of the app
     * @param {string} code - language code
     */
    setDefaultLanguage: (code: string) => void;
    /**
     * Set the user selected language of the app
     * @param {string} code - language code
     */
    setSelectedLanguage: (code: string) => void;
    /**
     * Get the selected language. If no language is selected, returns the default language
     * @returns {Language} selected language or default language
     */
    getLanguage: () => Language;
};

const initialDefaultLanguage = CORE_SUPPORTED_LANGUAGES[0];

const useLanguageStore = create<LanguageState>()(
    devtools(
        persist(
            (set, get) => ({
                supportedLanguages: [],
                setSupportedLanguages: languageCodes => {
                    if (languageCodes.length === 0) return;
                    set(() => {
                        return { supportedLanguages: languageCodes };
                    });
                    const { defaultLanguage } = get();
                    if (languageCodes.includes(defaultLanguage)) return;
                    set(() => ({ defaultLanguage: languageCodes[0] }));
                },
                getSupportedLanguages: () => {
                    const { supportedLanguages } = get();
                    return supportedLanguages;
                },

                defaultLanguage: initialDefaultLanguage,
                setDefaultLanguage: code => {
                    const { supportedLanguages } = get();
                    const newDefaultLanguage = supportedLanguages.find(
                        language => language.code === code,
                    );
                    if (!newDefaultLanguage) return;
                    set(() => ({
                        defaultLanguage: newDefaultLanguage,
                    }));
                },

                selectedLanguage: null,
                setSelectedLanguage: code => {
                    const { supportedLanguages } = get();
                    set(() => ({
                        selectedLanguage:
                            supportedLanguages.find(language => language.code === code) || null,
                    }));
                },

                getLanguage: () => {
                    const { selectedLanguage, defaultLanguage } = get();
                    return selectedLanguage || defaultLanguage;
                },
            }),
            {
                name: "language",
                storage: createStorage<LanguageState>(),
            },
        ),
        { name: "core/language" },
    ),
);

export type UseLanguageReturnType = {
    /**
     * selected language, or default language if no language is selected
     */
    language: Language;
    /**
     * get supported languages for the app
     */
    getSupportedLanguages: () => Language[];
    /**
     * Set the default language of the app
     * @param {SupportedLanguageCode} code - language code
     */
    setDefaultLanguage: LanguageState["setSelectedLanguage"];
    /**
     * Set the user selected language of the app
     * @param {SupportedLanguageCode} code - language code
     */
    setSelectedLanguage: LanguageState["setDefaultLanguage"];
};
export const useLanguage = (): UseLanguageReturnType => {
    const store = useLanguageStore();
    const language = store.getLanguage();
    const { setSelectedLanguage, setDefaultLanguage, getSupportedLanguages } = store;
    return { language, setDefaultLanguage, setSelectedLanguage, getSupportedLanguages };
};

export const {
    getLanguage,
    setDefaultLanguage,
    setSelectedLanguage,
    setSupportedLanguages,
    getSupportedLanguages,
} = useLanguageStore.getState();
