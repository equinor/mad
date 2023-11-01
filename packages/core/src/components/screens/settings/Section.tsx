import React from "react";
import { SettingsScreenSectionProps } from "./types";
import { Cell, Typography } from "@equinor/mad-components";
import { View } from "react-native";
import { renderCell } from "./renderCell";
import { useCoreStackNavigation } from "../../../hooks";

export const SettingsSection = ({ title, items }: SettingsScreenSectionProps) => {
    const navigation = useCoreStackNavigation();
    return (
        <View>
            {title && <Typography>{title}</Typography>}
            <Cell.Group>{items.map(item => renderCell(item, navigation))}</Cell.Group>
        </View>
    );
};
