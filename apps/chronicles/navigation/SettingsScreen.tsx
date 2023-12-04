import React from "react";
import { SettingsScreen, SettingsScreenConfiguration } from "@equinor/mad-core";

export const SampleSettingsScreen = () => {
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
            ],
        },
    ];

    return <SettingsScreen config={appSpecificSettingsConfig} />;
};
