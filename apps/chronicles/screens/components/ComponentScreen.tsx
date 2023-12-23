import React, { useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { ComponentsStackParamList } from "../../types/navigation";
import { ComponentConfig, ComponentName } from "../../types/components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "@equinor/mad-components";

export type ComponentsScreenProps = {
    navigation: NativeStackNavigationProp<ComponentsStackParamList, "Component">;
    route: RouteProp<ComponentsStackParamList, "Component">;
};

export const ComponentScreen = ({ navigation, route }: ComponentsScreenProps) => {
    useEffect(() => {
        const headerBackButton = navigation.canGoBack()
            ? undefined
            : () => (
                  <Button
                      title="Components"
                      variant="ghost"
                      iconName="arrow-left"
                      onPress={() => navigation.navigate("Discover")}
                  />
              );
        navigation.setOptions({
            title: ComponentName[route.params.name],
            headerLeft: headerBackButton,
            ...(route.params.screenOptions ?? {}),
        });
    }, [route, navigation]);
    console.log("GOT HERE", ComponentConfig[route.params.name]);
    return ComponentConfig[route.params.name]();
};
