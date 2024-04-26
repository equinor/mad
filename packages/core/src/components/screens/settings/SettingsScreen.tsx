import React from "react";
import { Button, Spacer, Typography } from "@equinor/mad-components";
import { View, ScrollView } from "react-native";
import { SettingsSection } from "./Section";
import { useSignOut } from "./useSignOut";
import { useSettingsScreenPremadeConfig } from "../../../store/mad-config";
import { useAccountOrDemoAccount } from "../../../hooks";
import { SettingsScreenConfiguration } from "./types";
import { getFinalSettingsConfig } from "../../../utils/getFinalSettingsConfig";
import { useScreenTitleFromDictionary } from "../../../hooks/useScreenTitleFromDictionary";
import { useDictionary } from "../../../language/useDictionary";

export type SettingsScreenProps = {
    /**
     * Your settings screen configuration.
     */
    config?: SettingsScreenConfiguration;
    /**
     * Set this to true if you want full autonomy of the content on the settings page.
     * If this is false, we will put some default cells in the settings screen for you,
     * Like Release notes, About, etc.
     */
    clean?: boolean;
};
export const SettingsScreen = ({ config = [], clean = false }: SettingsScreenProps) => {
    useScreenTitleFromDictionary(dic => dic.settings.title);
    const dictionary = useDictionary();
    const signOut = useSignOut();
    const premadeConfig = useSettingsScreenPremadeConfig();
    const account = useAccountOrDemoAccount();

    const finalSettingsConfig = getFinalSettingsConfig(config, premadeConfig, clean);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            {finalSettingsConfig.map((section, index) => (
                <SettingsSection key={index} {...section} />
            ))}
            <View style={{ padding: 30 }}>
                <Typography bold={true}>{dictionary.settings.loggedInAs}</Typography>
                <Typography>{account?.username}</Typography>
            </View>
            <View style={{ flexDirection: "row-reverse" }}>
                <Button
                    title={dictionary.settings.logOut}
                    onPress={() => void signOut()}
                    style={{
                        marginHorizontal: 30,
                        width: 100,
                    }}
                />
            </View>
        </ScrollView>
    );
};
