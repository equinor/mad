import React, { useState } from "react";
import {
    setEnvironment,
    useMadConfig,
    SettingsScreen,
    SettingsScreenConfiguration,
} from "@equinor/mad-core";
import { Cell, Typography } from "@equinor/mad-components";

export const SampleSettingsScreen = () => {
    const currentConfig = useMadConfig();
    const [isActive, setIsActive] = useState(currentConfig.currentEnvironment === "prod");
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
                    name: "custom",
                    key: "Custom",
                    component: () => (
                        <Cell>
                            <Typography>This is a custom setting</Typography>
                        </Cell>
                    ),
                },
                {
                    name: "switch",
                    title: "Toggle Environment",
                    onChange: () => {
                        setEnvironment(
                            currentConfig.currentEnvironment === "prod" ? "test" : "prod",
                        );
                        setIsActive(!isActive);
                    },
                    isActive: isActive,
                    iconName: "cog",
                    switchSize: "normal",
                    description: `Current Environment:  ${currentConfig.currentEnvironment}`,
                },
            ],
        },
    ];

    return <SettingsScreen config={appSpecificSettingsConfig} />;
};
