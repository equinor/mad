import { renderHook, act } from "@testing-library/react-native";
import {
    getLanguage,
    getSupportedLanguages,
    setSupportedLanguages,
    useLanguage,
} from "../../src/store/language";

const norwegianBokmål = { code: "nb", name: "Norwegian" };
const english = { code: "en", name: "English" };

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

    it("Should be possible set supported languages.", () => {
        const { rerender } = renderHook(() => useLanguage());
        rerender({});
        expect(getSupportedLanguages()).toStrictEqual([]);
        act(() =>
            setSupportedLanguages([
                {
                    code: "pt",
                    name: "Portuguese",
                },
                {
                    code: "nb",
                    name: "Norwegian",
                },
            ]),
        );
        rerender({});
        expect(getSupportedLanguages()).toStrictEqual([
            {
                code: "pt",
                name: "Portuguese",
            },
            {
                code: "nb",
                name: "Norwegian",
            },
        ]);
    });

    it("Should update the default language if default language is not a supported language", () => {
        const { result, rerender } = renderHook(() => useLanguage());
        rerender({});
        act(() =>
            setSupportedLanguages([
                {
                    code: "pt",
                    name: "Portuguese",
                },
                {
                    code: "nb",
                    name: "Norwegian",
                },
            ]),
        );
        rerender({});
        expect(result.current.language).toStrictEqual({
            code: "pt",
            name: "Portuguese",
        });
    });

    it("Should be possible to change the default language to any supported language", () => {
        const { result, rerender } = renderHook(() => useLanguage());
        act(() =>
            setSupportedLanguages([
                {
                    code: "pt",
                    name: "Portuguese",
                },
                {
                    code: "nb",
                    name: "Norwegian",
                },
            ]),
        );
        act(() => result.current.setDefaultLanguage("nb"));
        rerender({});
        expect(result.current.language).toMatchObject(norwegianBokmål);
        expect(getLanguage()).toMatchObject(norwegianBokmål);
    });

    it("Should return the user selected language if it exists", () => {
        const { result, rerender } = renderHook(() => useLanguage());
        act(() =>
            setSupportedLanguages([
                {
                    code: "en",
                    name: "English",
                },
                {
                    code: "nb",
                    name: "Norwegian",
                },
            ]),
        );

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
});
