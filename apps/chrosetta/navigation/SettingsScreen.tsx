import React from "react";
import {
    setEnvironment,
    useMadConfig,
    SettingsScreen,
    SettingsScreenConfiguration,
} from "@equinor/mad-core";
import { Button, Cell, Typography } from "@equinor/mad-components";

export const SampleSettingsScreen = () => {
    const currentConfig = useMadConfig();
    const appSpecificSettingsConfig: SettingsScreenConfiguration = [
        {
            items: [
                {
                    name: "custom",
                    key: "Environment",
                    component: () => (
                        <Cell
                            leftAdornment={
                                <Typography group="cell" variant="title" numberOfLines={1}>
                                    Select environment:
                                </Typography>
                            }
                            rightAdornment={
                                <Button.Toggle
                                    activeIndex={["dev", "test", "prod"].indexOf(
                                        currentConfig.currentEnvironment,
                                    )}
                                >
                                    <Button title="Dev" onPress={() => setEnvironment("dev")} />
                                    <Button title="Test" onPress={() => setEnvironment("test")} />
                                    <Button title="Prod" onPress={() => setEnvironment("prod")} />
                                </Button.Toggle>
                            }
                        />
                    ),
                },
            ],
        },
    ];

    return <SettingsScreen config={appSpecificSettingsConfig} />;
};
