import {
    SettingsScreenCellConfigurationItem,
    SettingsScreenSectionProps,
} from "../components/screens/settings/types";
import { CoreDictionary } from "../language/types";
import { MadConfig } from "../types";

const getReleaseNotesConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "format-list-bulleted",
    title: dictionary.releaseNotes.releaseNotes,
    onPress: (navigation) => navigation.navigate("ReleaseNotes"),
});

const getAboutConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "information-outline",
    title: dictionary.settings.aboutApp,
    onPress: navigation => navigation.navigate("About"),
});

const getServiceNowConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "chat-alert-outline",
    title: dictionary.settings.feedback,
    onPress: navigation => navigation.navigate("Feedback"),
});

const getLanguageConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "chat-processing-outline",
    title: dictionary.settings.language,
    onPress: navigation => navigation.navigate("NotFound"),
});

export type PremadeSettings = ReturnType<typeof getPremadeSettings>;
export const getPremadeSettings = (config: MadConfig, dictionary: CoreDictionary) => {
    const premadeCommonNavigationItems = [getReleaseNotesConfig(dictionary)];
    if (config.about) premadeCommonNavigationItems.push(getAboutConfig(dictionary));
    if (config.serviceNow) premadeCommonNavigationItems.push(getServiceNowConfig(dictionary));

    const premadeLanguageSection: SettingsScreenSectionProps | undefined =
        config.language.supportedLanguages.length >= 2 ? { items: [getLanguageConfig(dictionary)] } : undefined;
    const premadeCommonNavigationSection: SettingsScreenSectionProps = {
        items: premadeCommonNavigationItems,
    };

    return { language: premadeLanguageSection, common: premadeCommonNavigationSection };
};
