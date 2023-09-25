import React from "react";
import { signOut, useAccount } from "@equinor/mad-auth";
import { Button, Typography } from "@equinor/mad-components";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

/**
 *∏
 * This is a temp settings screen to test the signout functionality and to check account info.
 * We will replace this with another settings screen in the future
 */
export const SettingsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const account = useAccount();

    return (
        <View style={{ height: "100%", padding: 16, justifyContent: "center", gap: 24 }}>
            <Typography variant="h1">User info</Typography>
            <Typography variant="h2">Identifier: {account?.identifier || "Undefined"}</Typography>
            <Typography variant="h2">Name: {account?.name || "Undefined"}</Typography>
            <Typography variant="h2">Username: {account?.username || "Undefined"}</Typography>
            <Button
                title="Sign out"
                onPress={() => signOut().then(res => res && navigation.navigate("Login"))}
            />
        </View>
    );
};
