import { SettingsScreenCellConfigurationItem } from "../components/screens/settings/types";
import { MadConfig } from "../types";

const releaseNotes: SettingsScreenCellConfigurationItem = {
    name: "navigation",
    iconName: "format-list-bulleted",
    title: "Release notes",
    onPress: navigation => navigation.navigate("ReleaseNotes"),
};

const about: SettingsScreenCellConfigurationItem = {
    name: "navigation",
    iconName: "information-outline",
    title: "About",
    onPress: navigation => navigation.navigate("About"),
};

const serviceNow: SettingsScreenCellConfigurationItem = {
    name: "navigation",
    iconName: "chat-alert-outline",
    title: "Feedback",
    onPress: navigation => navigation.navigate("Feedback"),
};

export const getPremadeSettings = (config: MadConfig) => {
    const premadeSettings = [releaseNotes];
    if (config.about) premadeSettings.push(about);
    if (config.serviceNow) premadeSettings.push(serviceNow);
    return { items: premadeSettings };
};
