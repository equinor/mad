import { signOut } from "@equinor/mad-auth";
import { Button } from "@equinor/mad-components";
import React from "react";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export const SettingsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={{ height: "100%", padding: 16, justifyContent: "center" }}>
            <Button
                title="Sign out"
                onPress={() => signOut().then(res => res && navigation.navigate("Login"))}
            />
        </View>
    );
};
