import React from "react";
import { Cell, IconName } from "@equinor/mad-components";
import { ComponentType } from "../types/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ComponentsStackParamList } from "../types/navigation";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export type ComponentNavigationCellProps = {
    componentName: ComponentType;
    title: string;
    description: string;
    iconName: IconName;
    screenOptions?: Partial<NativeStackNavigationOptions>;
};

export const ComponentNavigationCell = ({
    componentName,
    title,
    description,
    iconName,
    screenOptions,
}: ComponentNavigationCellProps) => {
    const navigation = useNavigation<NavigationProp<ComponentsStackParamList>>();
    return (
        <Cell.Navigation
            title={title}
            testID={title}
            description={description}
            iconName={iconName}
            onPress={() =>
                navigation.navigate("Component", {
                    name: componentName,
                    screenOptions,
                })
            }
        />
    );
};
