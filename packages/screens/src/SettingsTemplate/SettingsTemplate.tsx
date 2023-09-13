import React from "react";
import { Button, Cell, Icon, IconName, Spacer, Typography } from "@equinor/mad-components";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type CellType =
    | {
          name: "navigation";
          param: { route: string; params?: Record<string, any> };
      }
    | {
          name: "button";
          onPress: () => void;
          color: Parameters<typeof Cell.Button>[0]["color"];
      }
    | {
          name: "switch";
          isActive: boolean;
          onChange: (isActive: boolean) => void;
          switchSize?: "small" | "normal";
          disabled?: boolean;
          description?: string;
          color?: string;
      }
    | { name: "custom"; param: any };

export type Config = {
    icon?: IconName;
    title: string;
    type: CellType;
};

export type SettingsScreenProps = {
    config: Config[];
    onLogout?: () => void;
    routeAfterLogout?: string;
    backLabel?: string;
    languageCode?: string;
};

export const SettingsTemplate = ({ config, onLogout }: SettingsScreenProps) => {
    const navigation = useNavigation();

    const renderCell = (item: Config) => {
        switch (item.type.name) {
            case "navigation":
                return (
                    <Cell.Navigation
                        title={item.title}
                        iconName={item.icon}
                        onPress={() =>
                            navigation.navigate(item.type.param.route, item.type.param.params)
                        }
                    />
                );
            case "custom":
                return (
                    <Cell onPress={() => null}>
                        <View style={{ justifyContent: "center" }}>
                            <Icon name={item.icon} />
                        </View>
                    </Cell>
                );
            case "button":
                return (
                    <Cell.Button
                        title={item.title}
                        iconName={item.icon}
                        color={item.type.color}
                        onPress={item.type.onPress}
                    />
                );
            case "switch":
                return (
                    <Cell.Switch
                        title={item.title}
                        iconName={item.icon}
                        isActive={item.type.isActive}
                        onChange={item.type.onChange}
                        switchSize={item.type.switchSize}
                        disabled={item.type.disabled}
                        description={item.type.description}
                        color={item.type.color}
                    />
                );
        }
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            <Cell.Group>{config.map(item => renderCell(item))}</Cell.Group>
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
