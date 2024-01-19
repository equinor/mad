import React, { useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { ComponentsStackParamList } from "../../types/navigation";
import { ComponentConfig } from "../../types/components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "@equinor/mad-components";

export type ComponentsScreenProps = {
    navigation: NativeStackNavigationProp<ComponentsStackParamList, "Component">;
    route: RouteProp<ComponentsStackParamList, "Component">;
};

export const ComponentScreen = ({ navigation, route }: ComponentsScreenProps) => {
    useEffect(() => {
        if (navigation.canGoBack()) return;
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Components"
                    variant="ghost"
                    iconName="arrow-left"
                    onPress={() => navigation.navigate("Discover")}
                />
            ),
        });
    }, [route, navigation]);
    return ComponentConfig[route.params.name]();
};
