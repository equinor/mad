import React from "react";
import { SettingsScreenCellConfigurationItem } from "./types";
import { Cell, Icon } from "@equinor/mad-components";
import { View } from "react-native";
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
            return (
                <Cell key={item.title} onPress={() => null}>
                    <View style={{ justifyContent: "center" }}>
                        <Icon name={item.iconName} />
                    </View>
                </Cell>
            );
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
