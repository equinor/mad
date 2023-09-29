import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createStorage } from "../storage";
import { Language } from "../types";
import { ALL_SUPPORTED_LANGUAGES, SupportedLanguageCode } from "./supported-languages";

type LanguageState = {
    /**
     * Default language for the app.
     */
    defaultLanguage: Language;
    /**
     * Set the default language of the app
     * @param {SupportedLanguageCode} code - language code
     */
    setDefaultLanguage: (code: SupportedLanguageCode) => void;
    /**
     * User selected language
     */
    selectedLanguage: Language | null;
    /**
     * Set the user selected language of the app
     * @param {SupportedLanguageCode} code - language code
     */
    setSelectedLanguage: (code: SupportedLanguageCode) => void;
    /**
     * Get the selected language. If no language is selected, returns the default language
     * @returns {Language} selected language or default language
     */
    getLanguage: () => Language;
};

const initialDefaultLanguage = ALL_SUPPORTED_LANGUAGES[0];

const useLanguageStore = create<LanguageState>()(
    devtools(
        persist(
            (set, get) => ({
                defaultLanguage: initialDefaultLanguage,
                setDefaultLanguage: code => {
                    const newDefaultLanguage = ALL_SUPPORTED_LANGUAGES.find(
                        language => language.code === code,
                    );
                    if (!newDefaultLanguage) return;
                    set(() => ({
                        defaultLanguage: newDefaultLanguage,
                    }));
                },
                selectedLanguage: null,
                setSelectedLanguage: code =>
                    set(() => ({
                        selectedLanguage:
                            ALL_SUPPORTED_LANGUAGES.find(language => language.code === code) ||
                            null,
                    })),
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
     * Set the default language of the app
     * @param {SupportedLanguageCode} code - language code
     */
    setSelectedLanguage: LanguageState["setSelectedLanguage"];
    /**
     * Set the user selected language of the app
     * @param {SupportedLanguageCode} code - language code
     */
    setDefaultLanguage: LanguageState["setDefaultLanguage"];
};
export const useLanguage = (): UseLanguageReturnType => {
    const store = useLanguageStore();
    const language = store.getLanguage();
    const { setSelectedLanguage, setDefaultLanguage } = store;
    return { language, setDefaultLanguage, setSelectedLanguage };
};

export const { getLanguage, setDefaultLanguage, setSelectedLanguage } = useLanguageStore.getState();
