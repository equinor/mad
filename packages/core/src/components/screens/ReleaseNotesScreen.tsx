import { Button } from "@equinor/mad-components";
import React from "react";
import { Text, View } from "react-native";
import { useCoreStackNavigation } from "../../hooks/useCoreStackNavigation";

export const ReleaseNotesScreen = () => {
    const navigation = useCoreStackNavigation();
    return (
        <View>
            <Text>Releasenotes screen</Text>
            <Button title="Go to root" onPress={() => navigation.navigate("Root")} />
        </View>
    );
};
