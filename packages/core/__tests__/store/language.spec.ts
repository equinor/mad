import { renderHook, act } from "@testing-library/react-native";
import { SupportedLanguageCode, getLanguage, useLanguage } from "../../src/store/language";

const norwegianBokmål = { code: "nb", name: "Norwegian" };
const english = { code: "en", name: "English" };

jest.mock("@react-native-async-storage/async-storage");
jest.mock("zustand");

describe("Language", () => {
    it("Should always return a language, even if no language has been set", () => {
        const { result } = renderHook(() => useLanguage());
        expect(result.current).toBeTruthy();
        expect(getLanguage()).toBeTruthy();
    });

    it("Should have a default language of English if no other default language is set", () => {
        const { result } = renderHook(() => useLanguage());
        expect(result.current.language).toMatchObject(english);
        expect(getLanguage()).toMatchObject(english);
    });

    it("Should be possible to change the default language", () => {
        const { result, rerender } = renderHook(() => useLanguage());

        act(() => result.current.setDefaultLanguage("nb"));
        rerender({});
        expect(result.current.language).toMatchObject(norwegianBokmål);
        expect(getLanguage()).toMatchObject(norwegianBokmål);
    });

    it("Should return the user selected language if it exists", () => {
        const { result, rerender } = renderHook(() => useLanguage());

        expect(result.current.language).toMatchObject(english);
        expect(getLanguage()).toMatchObject(english);

        act(() => result.current.setSelectedLanguage("nb"));
        rerender({});
        expect(result.current.language).toMatchObject(norwegianBokmål);
        expect(getLanguage()).toMatchObject(norwegianBokmål);

        act(() => result.current.setDefaultLanguage("en"));
        rerender({});
        expect(result.current.language).toMatchObject(norwegianBokmål);
        expect(getLanguage()).toMatchObject(norwegianBokmål);
    });

    /**
     * This test obviously does not cover all scenarios, but it should cover
     * The most likely language for a developer to add in equinor context. If a developer adds a new
     * language, we should support it properly and create new tests
     */
    it("Should only accept English and Norwegian as language choices", () => {
        const { result, rerender } = renderHook(() => useLanguage());

        // Portuguese
        act(() => result.current.setSelectedLanguage("pt" as SupportedLanguageCode));
        act(() => result.current.setDefaultLanguage("pt" as SupportedLanguageCode));
        // Chinese
        act(() => result.current.setSelectedLanguage("zh" as SupportedLanguageCode));
        act(() => result.current.setDefaultLanguage("zh" as SupportedLanguageCode));
        // Swedish
        act(() => result.current.setSelectedLanguage("sv" as SupportedLanguageCode));
        act(() => result.current.setDefaultLanguage("sv" as SupportedLanguageCode));
        // French
        act(() => result.current.setSelectedLanguage("fr" as SupportedLanguageCode));
        act(() => result.current.setDefaultLanguage("fr" as SupportedLanguageCode));
        // German
        act(() => result.current.setSelectedLanguage("de" as SupportedLanguageCode));
        act(() => result.current.setDefaultLanguage("de" as SupportedLanguageCode));
        // Dutch
        act(() => result.current.setSelectedLanguage("nl" as SupportedLanguageCode));
        act(() => result.current.setDefaultLanguage("nl" as SupportedLanguageCode));
        rerender({});
        expect(result.current.language).toMatchObject(english);
        expect(getLanguage()).toMatchObject(english);
    });
});
