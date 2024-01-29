/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../types/navigation";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Components: {
                        screens: {
                            Discover: "components",
                            Component: "components/:name",
                        },
                    },
                    DFW: {
                        screens: {
                            Discover: "dfwcomponents",
                            Component: "dfwcomponents/:name",
                        },
                    },
                    IconsTab: {
                        screens: {
                            Icons: "icons",
                        },
                    },
                },
            },
            Modal: "modal",
            NotFound: "*",
        },
    },
};

export default linking;
