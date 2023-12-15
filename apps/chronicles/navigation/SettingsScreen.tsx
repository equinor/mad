import React, {useState} from "react";
import {setConfig, SettingsScreen, SettingsScreenConfiguration} from "@equinor/mad-core";
import {config} from "../mad.config";
import {useMadConfig} from "@equinor/mad-core/dist/store/mad-config";

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
                    name: "switch",
                    title: "Toggle Environment",
                    onChange: () => {
                        // disabling this for now
                        //currentConfig.currentEnvironment === "prod" ? setConfig(testConfig): setConfig(config);
                        setIsActive(!isActive);
                    },
                    isActive: isActive,
                    iconName: "cog",
                    switchSize: "normal",
                    description: `Current Environment:  ${currentConfig.environments}`
                }
            ],
        },
    ];

    return <SettingsScreen config={appSpecificSettingsConfig} />;
};
