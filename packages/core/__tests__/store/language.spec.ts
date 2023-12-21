import { renderHook, act } from "@testing-library/react-native";
import { getLanguage, useLanguage } from "../../src/store/language/language";
import { getConfig, setConfig } from "../../src/store/mad-config/mad-config";
import { MadConfig } from "../../src/types";
import { Language } from "../../src/store/types";
import { ImageSourcePropType } from "react-native";

const norwegianBokmal = { code: "nb", name: "Norwegian" };
const english = { code: "en", name: "English" };

const mockConfig: MadConfig = {
    applicationInsights: { instrumentationKey: "undefined" },
    currentEnvironment: "test",
    appVersion: "1.0.0",
    servicePortalName: "Chronicles",
    language: {
        supportedLanguages: [{ code: "en", name: "English" }],
    },
    authentication: {
        redirectUri: "msauth.com.equinor.mad.chronicles://auth",
        clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
        scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
    },
    login: {
        title: "Chronicles",
        logo: "whatever doesn't matter in this test" as ImageSourcePropType,
    }
};

const setSupportedLanguagesAndMaybeDefaultLanguageCode = (
    languages: Language[],
    defaultLanguageCode?: string,
) => {
    setConfig({ ...mockConfig, language: { supportedLanguages: languages, defaultLanguageCode } });
};

describe("Language", () => {
    it("Should always return a language as long as a valid mad config has been provided", () => {
        expect(() => getLanguage()).toThrow();
        act(() =>
            setSupportedLanguagesAndMaybeDefaultLanguageCode([
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

        expect(getConfig()).toBeTruthy();
        const { result } = renderHook(() => useLanguage());
        expect(result.current.language).toBeTruthy();
        expect(getLanguage()).toBeTruthy();
    });

    it("Should have a default language equal to the first language in the supportedLanguages array, if no defaultLanguageCode is provided", () => {
        act(() =>
            setSupportedLanguagesAndMaybeDefaultLanguageCode([
                {
                    code: "nb",
                    name: "Norwegian",
                },
                {
                    code: "en",
                    name: "English",
                },
            ]),
        );
        const { result } = renderHook(() => useLanguage());
        expect(result.current.language).toMatchObject(norwegianBokmal);
        expect(getLanguage()).toMatchObject(norwegianBokmal);
    });

    it("Should have a default language equal to language in the supportedLanguages array with defaultLanguageCode as code, if defaultLanguageCode is provided", () => {
        act(() =>
            setSupportedLanguagesAndMaybeDefaultLanguageCode(
                [
                    {
                        code: "nb",
                        name: "Norwegian",
                    },
                    {
                        code: "en",
                        name: "English",
                    },
                ],
                "en",
            ),
        );
        const { result } = renderHook(() => useLanguage());
        expect(result.current.language).toMatchObject(english);
        expect(getLanguage()).toMatchObject(english);
    });

    it("Should return the user selected language if it exists", () => {
        act(() =>
            setSupportedLanguagesAndMaybeDefaultLanguageCode([
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
        const { result, rerender } = renderHook(() => useLanguage());

        expect(result.current.language).toMatchObject(english);
        expect(getLanguage()).toMatchObject(english);

        act(() => result.current.setSelectedLanguage("nb"));
        rerender({});
        expect(result.current.language).toMatchObject(norwegianBokmal);
        expect(getLanguage()).toMatchObject(norwegianBokmal);
    });
});
