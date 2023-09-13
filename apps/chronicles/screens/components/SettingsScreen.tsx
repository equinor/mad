import React from "react";
import { SettingsTemplate, Config } from "@equinor/mad-screens";
import { useNavigation } from "@react-navigation/native";

function SettingScreen() {
    const navigation = useNavigation();

    const config: Config[] = [
        {
            title: "About",
            type: { name: "navigation", param: { route: "AboutScreen" } },
            icon: "information-outline",
        },
        {
            title: "Release notes",
            type: { name: "navigation", param: { route: "ChangePasswordScreen" } },
            icon: "format-list-bulleted",
        },
        {
            title: "Clear local data",
            type: { name: "button", onPress: () => null, color: "danger" },
            icon: "close",
        },
        {
            title: "Feedback",
            type: { name: "navigation", param: { route: "FeedbackScreen" } },
            icon: "message-alert-outline",
        },
        {
            icon: "dumbbell",
            title: "Training mode",
            type: {
                name: "switch",
                isActive: false,
                onChange: value => {
                    console.log("Switch toggled:", value);
                },
                switchSize: "small",
                description:
                    "In training mode the app will use demo data not connected to SAP. This allows users to learn unfamiliar features in an isolated environment. At this time linked documents are not available.",
            },
        },
        {
            icon: "barrel",
            title: "1234 - Platform",
            type: { name: "navigation", param: { route: "PlatformInfo" } },
        },
    ];

    const handleLogout = () => {
        // Logic for logging out the user
        // clear user data, navigate to login screen, etc.
    };

    return <SettingsTemplate config={config} onLogout={handleLogout} />;
}

export default SettingScreen;
