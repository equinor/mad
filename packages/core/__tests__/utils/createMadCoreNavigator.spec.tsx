import React, { PropsWithChildren, useEffect } from "react";
import { act, render, waitFor } from "@testing-library/react-native";
import {
    createMadCoreNativeStackNavigator,
    createMadCoreStackNavigator,
} from "../../src/utils/createMadCoreNavigator";
import { invalidateAuthSession, rearmAuthSession } from "../../src/store/auth-session";
import { authenticate } from "../../src/authenticate";
import { ExpoAuthSession } from "@equinor/mad-auth";
import { CoreRoutes } from "../../src/components/navigation/coreRoutes";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CoreStackParamListBase } from "../../src/types";

const ProtectedScreen = () => null;

jest.mock("@equinor/mad-auth", () => ({
    ExpoAuthSession: {
        authenticate: jest.fn(),
        signOut: jest.fn(() => true),
    },
}));

jest.mock("../../src/store", () => ({
    useMadConfig: () => ({
        login: {},
        language: { supportedLanguages: [] },
    }),
}));
jest.mock("../../src/components/screens/AboutScreen", () => ({ AboutScreen: () => null }));
jest.mock("../../src/components/screens/create-incident/CreateIncidentScreen", () => ({
    CreateIncidentScreen: () => null,
}));
jest.mock("../../src/components/screens/language/SelectLanguageScreen", () => ({
    SelectLanguageScreen: () => null,
}));
jest.mock("../../src/components/screens/LoginScreen", () => ({ LoginScreen: () => null }));
jest.mock("../../src/components/screens/release-notes/ReleaseNotesScreen", () => ({
    ReleaseNotesScreen: () => null,
}));
jest.mock("../../src/components/screens/release-notes/WhatsNewScreen", () => ({
    WhatsNewScreen: () => null,
}));
jest.mock("../../src/utils/MadCoreProviders", () => ({
    MadCoreProviders: ({ children }: PropsWithChildren) => children,
}));

describe.each([
    ["stack", createMadCoreStackNavigator],
    ["native stack", createMadCoreNativeStackNavigator],
])("createMadCoreNavigator with %s", (_, createNavigator) => {
    beforeEach(() => {
        jest.clearAllMocks();
        rearmAuthSession();
    });

    it("replaces the navigation group when the auth session is invalidated", () => {
        const navigationKeys: string[] = [];
        const Stack = {
            Navigator: ({ children }: PropsWithChildren) => children,
            Group: ({ children, navigationKey }: PropsWithChildren<{ navigationKey: string }>) => {
                useEffect(() => {
                    navigationKeys.push(navigationKey);
                }, [navigationKey]);
                return children;
            },
            Screen: () => null,
        };
        const Navigator = createNavigator(Stack as never);

        render(<Navigator />);
        expect(navigationKeys).toEqual(["auth-session-0"]);

        act(invalidateAuthSession);

        expect(navigationKeys).toEqual(["auth-session-0", "auth-session-1"]);
    });

    it("replaces the navigation group when resource authentication is cancelled", async () => {
        const navigationKeys: string[] = [];
        const initialRoutes: unknown[] = [];
        const Stack = {
            Navigator: ({
                children,
                initialRouteName,
            }: PropsWithChildren<{ initialRouteName: unknown }>) => {
                useEffect(() => {
                    initialRoutes.push(initialRouteName);
                }, [initialRouteName]);
                return children;
            },
            Group: ({ children, navigationKey }: PropsWithChildren<{ navigationKey: string }>) => {
                useEffect(() => {
                    navigationKeys.push(navigationKey);
                }, [navigationKey]);
                return children;
            },
            Screen: () => null,
        };
        const Navigator = createNavigator(Stack as never);
        jest.mocked(ExpoAuthSession.authenticate).mockImplementationOnce(async (_, options) => {
            await options?.onAuthenticationCancelled?.();
            return null;
        });

        render(<Navigator />);

        await act(async () => {
            await authenticate(["scope"]);
        });

        expect(navigationKeys).toEqual(["auth-session-0", "auth-session-1"]);
        expect(initialRoutes).toEqual([CoreRoutes.LOGIN]);
        expect(ExpoAuthSession.signOut).toHaveBeenCalledTimes(1);
    });
});

describe("createMadCoreNavigator navigation state", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        rearmAuthSession();
    });

    it("removes protected history when resource authentication is cancelled", async () => {
        type TestStackParamList = CoreStackParamListBase & { Protected: undefined };
        const navigationRef = createNavigationContainerRef<TestStackParamList>();
        const Stack = createStackNavigator<TestStackParamList>();
        const Navigator = createMadCoreStackNavigator(Stack);
        jest.mocked(ExpoAuthSession.authenticate).mockImplementationOnce(async (_, options) => {
            await options?.onAuthenticationCancelled?.();
            return null;
        });

        render(
            <NavigationContainer ref={navigationRef}>
                <Navigator>
                    <Stack.Screen name="Protected" component={ProtectedScreen} />
                </Navigator>
            </NavigationContainer>,
        );

        await act(async () => {
            navigationRef.navigate("Protected");
        });
        expect(navigationRef.getRootState().routes.map(route => route.name)).toEqual([
            CoreRoutes.LOGIN,
            "Protected",
        ]);

        await act(async () => {
            await authenticate(["scope"]);
        });

        await waitFor(() => {
            expect(navigationRef.getRootState().routes.map(route => route.name)).toEqual([
                CoreRoutes.LOGIN,
            ]);
            expect(navigationRef.getCurrentRoute()?.name).toBe(CoreRoutes.LOGIN);
        });
    });
});
