import React from "react";
import { SettingsTemplate, SettingsScreenConfiguration } from "@equinor/mad-screens";
import { useNavigation } from "@react-navigation/native";

function SettingScreen() {
    const navigation = useNavigation();

    const config: SettingsScreenConfiguration = [
        {
            items: [
                {
                    name: "navigation",
                    title: "About",
                    iconName: "information-outline",
                    onPress: () => doSomething(),
                },
                {
                    name: "navigation",
                    title: "Release notes",
                    iconName: "format-list-bulleted",
                    onPress: () => doSomething(),
                },
                {
                    name: "button",
                    title: "Clear local data",
                    iconName: "close",
                    onPress: () => null,
                    color: "danger",
                },
                {
                    name: "navigation",
                    title: "Feedback",
                    iconName: "message-alert-outline",
                    onPress: () => doSomething(),
                },
                {
                    name: "switch",
                    title: "Training mode",
                    iconName: "dumbbell",
                    isActive: false,
                    onChange: value => {
                        console.log("Switch toggled:", value);
                    },
                    switchSize: "small",
                    description:
                        "In training mode the app will use demo data not connected to SAP. This allows users to learn unfamiliar features in an isolated environment. At this time linked documents are not available.",
                },
                {
                    name: "navigation",
                    title: "1234 - Platform",
                    iconName: "barrel",
                    onPress: () => doSomething(),
                },
            ],
        },
    ];

    const handleLogout = () => {
        // Logic for logging out the user
        // clear user data, navigate to login screen, etc.
    };

    const doSomething = () => {
        // Handle ompress logic here
    };

    return <SettingsTemplate config={config} onLogout={handleLogout} />;
}

export default SettingScreen;
