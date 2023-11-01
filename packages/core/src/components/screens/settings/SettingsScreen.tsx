import React from "react";
import { Button, Spacer, Typography } from "@equinor/mad-components";
import { View, ScrollView } from "react-native";
import { SettingsSection } from "./Section";
import { useSignOut } from "./useLogout";
import { useSettingsScreenConfig } from "../../../store/mad-config";
import { useAccountOrDemoAccount } from "../../../hooks";

export const SettingsScreen = () => {
    const signOut = useSignOut();
    const config = useSettingsScreenConfig();
    const account = useAccountOrDemoAccount();

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            {config.map((section, index) => (
                <SettingsSection key={index} {...section} />
            ))}
            <View style={{ padding: 30 }}>
                <Typography bold={true}>Logged in as</Typography>
                <Typography>{account?.username}</Typography>
            </View>
            <View style={{ flexDirection: "row-reverse" }}>
                <Button
                    title="Log out"
                    onPress={signOut}
                    style={{
                        marginHorizontal: 30,
                        width: 100,
                    }}
                />
            </View>
        </ScrollView>
    );
};
