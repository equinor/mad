import React, { useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DFWStackParamList } from "../../types/navigation";
import { Button } from "@equinor/mad-components";
import { DFWComponentConfig } from "../../types/dfwcomponents";

export type DFWComponentsScreenProps = {
    navigation: NativeStackNavigationProp<DFWStackParamList, "DFWComponent">;
    route: RouteProp<DFWStackParamList, "DFWComponent">;
};

export const DFWComponentScreen = ({ navigation, route }: DFWComponentsScreenProps) => {
    useEffect(() => {
        if (navigation.canGoBack()) return;
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="DFWComponents"
                    variant="ghost"
                    iconName="arrow-left"
                    onPress={() => navigation.navigate("DFWDiscover")}
                />
            ),
        });
    }, [route, navigation]);
    return DFWComponentConfig[route.params.name]();
};
