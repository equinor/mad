import {
    SettingsScreenCellConfigurationItem,
    SettingsScreenSectionProps,
} from "../components/screens/settings/types";
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

const language: SettingsScreenCellConfigurationItem = {
    name: "navigation",
    iconName: "chat-processing-outline",
    title: "Language",
    onPress: navigation => navigation.navigate("NotFound"),
};

export type PremadeSettings = ReturnType<typeof getPremadeSettings>;
export const getPremadeSettings = (config: MadConfig) => {
    const premadeCommonNavigationItems = [releaseNotes];
    if (config.about) premadeCommonNavigationItems.push(about);
    if (config.serviceNow) premadeCommonNavigationItems.push(serviceNow);

    const premadeLanguageSection: SettingsScreenSectionProps | undefined =
        config.language.supportedLanguages.length >= 2 ? { items: [language] } : undefined;
    const premadeCommonNavigationSection: SettingsScreenSectionProps = {
        items: premadeCommonNavigationItems,
    };

    return { language: premadeLanguageSection, common: premadeCommonNavigationSection };
};
