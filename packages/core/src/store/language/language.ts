import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createStorage } from "../storage";
import { Language } from "../types";
import { getConfig } from "../mad-config";

type LanguageState = {
    /**
     * User selected language
     */
    selectedLanguage: Language | null;
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
    getIsLanguageSelected: () => boolean;
};

const getSupportedLanguages = () => getConfig().language.supportedLanguages;
const getDefaultLanguage = () => {
    const supportedLanguages = getSupportedLanguages();
    const defaultLanguageCode = getConfig().language.defaultLanguageCode;
    if (supportedLanguages.length === 0) throw new Error("There are no supported languages");
    if (!defaultLanguageCode) return supportedLanguages[0];
    const defaultLanguage = supportedLanguages.find(
        language => language.code === defaultLanguageCode,
    );
    if (!defaultLanguage)
        throw new Error("defaultLanguageCode was not found within supported languages");
    return defaultLanguage;
};

const useLanguageStore = create<LanguageState>()(
    devtools(
        persist(
            (set, get) => ({
                selectedLanguage: null,
                setSelectedLanguage: code => {
                    const supportedLanguages = getSupportedLanguages();
                    set(() => ({
                        selectedLanguage:
                            supportedLanguages.find(language => language.code === code) ?? null,
                    }));
                },

                getLanguage: () => {
                    const { selectedLanguage } = get();
                    return selectedLanguage ?? getDefaultLanguage();
                },
                getIsLanguageSelected: () => {
                    const { selectedLanguage } = get();
                    return !!selectedLanguage;
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
     * Selected language, or default language if no language is selected
     */
    language: Language;
    /**
     * Get supported languages for the app
     */
    getSupportedLanguages: () => Language[];
    /**
     * Get the default language of the app
     */
    getDefaultLanguage: () => Language;
    /**
     * Set the user selected language of the app
     * @param {string} code - language code
     */
    setSelectedLanguage: LanguageState["setSelectedLanguage"];
    /**
     * Check if the user has selected a language
     * @returns whether the language is selected
     */
    getIsLanguageSelected: () => boolean;
};
export const useLanguage = (): UseLanguageReturnType => {
    const store = useLanguageStore();
    const language = store.getLanguage();
    const { setSelectedLanguage, getIsLanguageSelected } = store;
    return {
        language,
        getDefaultLanguage,
        setSelectedLanguage,
        getSupportedLanguages,
        getIsLanguageSelected,
    };
};

export const { getLanguage, setSelectedLanguage, getIsLanguageSelected } =
    useLanguageStore.getState();
