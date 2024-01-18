import React from "react";
import { SettingsScreenCellConfigurationItem } from "./types";
import { Cell } from "@equinor/mad-components";
import { NavigationProp } from "@react-navigation/native";
import { CoreStackParamListBase } from "../../../types";

export const renderCell = (
    item: SettingsScreenCellConfigurationItem,
    navigation: NavigationProp<CoreStackParamListBase>,
) => {
    switch (item.name) {
        case "navigation":
            return (
                <Cell.Navigation
                    key={item.title}
                    title={item.title}
                    iconName={item.iconName}
                    onPress={() => item.onPress(navigation)}
                />
            );
        case "custom":
            return <item.component key={item.key} />;
        case "button":
            return (
                <Cell.Button
                    key={item.title}
                    title={item.title}
                    iconName={item.iconName}
                    color={item.color}
                    onPress={item.onPress}
                />
            );
        case "switch":
            return (
                <Cell.Switch
                    key={item.title}
                    title={item.title}
                    iconName={item.iconName}
                    isActive={item.isActive}
                    onChange={item.onChange}
                    switchSize={item.switchSize}
                    disabled={item.disabled}
                    description={item.description}
                    color={item.color}
                />
            );
    }
};
