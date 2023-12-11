import React from "react";
import { SettingsScreenSectionProps } from "./types";
import { Cell, Spacer } from "@equinor/mad-components";
import { View } from "react-native";
import { renderCell } from "./renderCell";
import { useCoreStackNavigation } from "../../../hooks";

export const SettingsSection = ({ title, items }: SettingsScreenSectionProps) => {
    const navigation = useCoreStackNavigation();
    return (
        <View>
            <Cell.Group title={title}>{items.map(item => renderCell(item, navigation))}</Cell.Group>
            <Spacer amount="small" />
        </View>
    );
};
