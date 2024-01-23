import React from "react";
import { Cell, IconName } from "@equinor/mad-components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { DFWComponentType } from "../types/dfwcomponents";
import { DFWStackParamList } from "../types/navigation";

export type ComponentNavigationCellProps = {
    componentName: DFWComponentType;
    title: string;
    description: string;
    iconName: IconName;
    screenOptions?: Partial<NativeStackNavigationOptions>;
};

export const DFWComponentNavigationCell = ({
    componentName,
    title,
    description,
    iconName,
    screenOptions,
}: ComponentNavigationCellProps) => {
    const navigation = useNavigation<NavigationProp<DFWStackParamList>>();
    return (
        <Cell.Navigation
            title={title}
            description={description}
            iconName={iconName}
            onPress={() =>
                navigation.navigate("DFWComponent", {
                    name: componentName,
                    screenOptions,
                })
            }
        />
    );
};
