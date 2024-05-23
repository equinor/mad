import React from "react";
import { Button } from "@equinor/mad-components";
import { useCoreStackNavigation } from "@equinor/mad-core";
import { View } from "react-native";

export type GoToSettingsButtonProps = { marginRight?: number };
export const GoToSettingsButton = ({ marginRight }: GoToSettingsButtonProps) => {
    const navigation = useCoreStackNavigation();
    return (
        <View style={{ marginRight }}>
            <Button.Icon
                name="cog-outline"
                variant="ghost"
                onPress={() => navigation.navigate("Settings")}
            />
        </View>
    );
};
