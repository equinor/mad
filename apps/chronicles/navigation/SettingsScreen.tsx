import React from "react";
import {setConfig, SettingsScreen, SettingsScreenConfiguration} from "@equinor/mad-core";
import {config, testConfig} from "../mad.config";
import {useMadConfig} from "@equinor/mad-core/dist/store/mad-config";

export const SampleSettingsScreen = () => {
    const currentConfig = useMadConfig();
    const appSpecificSettingsConfig: SettingsScreenConfiguration = [
        {
            items: [
                {
                    name: "navigation",
                    title: "navigation",
                    onPress: () => undefined,
                    iconName: "abacus",
                },
                {
                    name: "button",
                    title: "Button",
                    onPress: () => undefined,
                    iconName: "abacus",
                    color: "primary",
                },
                {
                    name: "switch",
                    title: "Test",
                    onChange: () => undefined,
                    isActive: true,
                    iconName: "abacus",
                },
                {
                    name: "switch",
                    title: `Toggle Environment: ${currentConfig.environment}`,
                    onChange: () => {
                        currentConfig.environment === "prod" ? setConfig(testConfig): setConfig(config);
                    },
                    isActive: true,
                    iconName: "cog"
                }
            ],
        },
    ];

    return <SettingsScreen config={appSpecificSettingsConfig} />;
};
