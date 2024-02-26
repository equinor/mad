import { renderHook, act } from "@testing-library/react-native";
import { setEnvironment, useMadConfig } from "../../src/store/mad-config/mad-config";
import { MadConfig } from "../../src/types";
import { setConfig } from "../../src/store/mad-config";
import { ImageSourcePropType } from "react-native";

const mockConfig: MadConfig = {
    applicationInsights: {
        dev: {
            instrumentationKey: "this is a test",
        },
        test: {
            connectionString: "testing different stuff",
        },
        prod: {
            instrumentationKey: "testing in production",
        },
    },
    currentEnvironment: "test",
    appVersion: {
        dev: "1.0.1.3",
        test: "1.0.1",
        qa: "1.0.0",
        prod: "1.0.0",
    },
    servicePortalName: "Chronicles",
    language: {
        supportedLanguages: [{ code: "en", name: "English" }],
    },
    authentication: {
        test: {
            redirectUri: "this is a string",
            clientId: "another string!",
            scopes: ["strings inside of arrays!"],
        },
        prod: {
            redirectUri: "msauth.com.equinor.mad.chronicles://auth",
            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",
            scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
        },
    },
    login: {
        title: "Chronicles",
        logo: "undefined" as ImageSourcePropType,
    },
    serviceNow: {
        whatever: "what",
    },
};

describe("madConfig", () => {
    it("should always return the environment specific value", () => {
        act(() => {
            setConfig(mockConfig);
        });
        const { result } = renderHook(() => useMadConfig());
        const environmentContextualConfig = result.current;
        expect(environmentContextualConfig).toBeTruthy();
        expect(environmentContextualConfig.appVersion).toEqual(mockConfig.appVersion[mockConfig.currentEnvironment]);
        expect(environmentContextualConfig.authentication).toEqual(mockConfig.authentication[mockConfig.currentEnvironment]);
        expect(environmentContextualConfig.applicationInsights).toEqual(mockConfig.applicationInsights[mockConfig.currentEnvironment]);
    });

    it("should always return the config value even if environment variables are not set for this value.", () => {
        act(() => {
            setConfig(mockConfig);
        });
        const { result } = renderHook(() => useMadConfig());
        const environmentContextualConfig = result.current;
        expect(environmentContextualConfig).toBeTruthy();
        expect(environmentContextualConfig.servicePortalName).toEqual(mockConfig.servicePortalName);
        expect(environmentContextualConfig.serviceNow).toEqual(mockConfig.serviceNow);
        expect(environmentContextualConfig.language).toEqual(mockConfig.language);
    });

    it("should always return the correct environment specific value after the environment has been changed", async () => {
        act(() => {
            setConfig(mockConfig);
        });
        const {result} = renderHook(() => useMadConfig());
        const environmentContextualConfig = result.current;
        expect(environmentContextualConfig).toBeTruthy();
        expect(environmentContextualConfig.appVersion).toEqual("1.0.1");
        act(() => {
            setEnvironment("qa");
        });
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
            const newEnvironmentContextualConfig = result.current;
            expect(newEnvironmentContextualConfig).toBeTruthy();
            expect(newEnvironmentContextualConfig.appVersion).toEqual("1.0.0");
        });
    });
});
