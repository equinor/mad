import React from "react";
import { Button, Cell, Icon, IconName, Spacer, Typography } from "@equinor/mad-components";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

type SettingsScreenCellConfigurationItem =
    | {
          name: "navigation";
          title: string;
          onPress: () => void;
          description?: string;
          iconName?: IconName;
      }
    | {
          name: "button";
          title: string;
          onPress: () => void;
          color: Parameters<typeof Cell.Button>[0]["color"];
          iconName?: IconName;
      }
    | {
          name: "switch";
          title: string;
          isActive: boolean;
          onChange: (isActive: boolean) => void;
          switchSize?: "small" | "normal";
          disabled?: boolean;
          description?: string;
          color?: string;
          iconName?: IconName;
      }
    | { name: "custom"; title: string; iconName?: IconName; param: any };

type SettingsScreenSection = {
    title?: string;
    items: SettingsScreenCellConfigurationItem[];
};

export type SettingsScreenConfiguration = SettingsScreenSection[];

export type SettingsScreenProps = {
    config: SettingsScreenConfiguration;
    onLogout?: () => void;
    languageCode?: string;
};

export const SettingsTemplate = ({ config, onLogout }: SettingsScreenProps) => {
    const navigation = useNavigation();

    const renderCell = (item: SettingsScreenCellConfigurationItem) => {
        switch (item.name) {
            case "navigation":
                return (
                    <Cell.Navigation
                        title={item.title}
                        iconName={item.iconName}
                        onPress={item.onPress}
                    />
                );
            case "custom":
                return (
                    <Cell onPress={() => null}>
                        <View style={{ justifyContent: "center" }}>
                            <Icon name={item.iconName} />
                        </View>
                    </Cell>
                );
            case "button":
                return (
                    <Cell.Button
                        title={item.title}
                        iconName={item.iconName}
                        color={item.color}
                        onPress={item.onPress}
                    />
                );
            case "switch":
                return (
                    <Cell.Switch
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

    const renderSection = (section: SettingsScreenSection) => (
        <View>
            {section.title && <Typography>{section.title}</Typography>}
            <Cell.Group>{section.items.map(item => renderCell(item))}</Cell.Group>
        </View>
    );

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            {config.map(section => renderSection(section))}
            <View style={{ padding: 30 }}>
                <Typography bold={true}>Logged in as</Typography>
                <Typography>User</Typography>
            </View>
            <View style={{ flexDirection: "row-reverse" }}>
                <Button
                    title="Log out"
                    onPress={onLogout}
                    style={{
                        marginHorizontal: 30,
                        width: 100,
                    }}
                />
            </View>
        </ScrollView>
    );
};
