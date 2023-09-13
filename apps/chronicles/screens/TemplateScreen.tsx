import React from "react";
import { ScrollView } from "react-native";
import { TemplateStackParamList } from "../types";
import SettingsScreen from "./components/SettingsScreen";

import { Cell, Spacer } from "@equinor/mad-components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function TemplateScreen({
    navigation,
}: NativeStackScreenProps<TemplateStackParamList, "Template">) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            <Cell.Group title="Template screens">
                <Cell.Navigation
                    title="Settings Screen"
                    description="Customizeable setting screen based off of config file"
                    iconName="cog"
                    onPress={() => navigation.navigate("Settings")}
                />
            </Cell.Group>
        </ScrollView>
    );
}
