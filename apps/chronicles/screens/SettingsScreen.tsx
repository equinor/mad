import React, { useEffect, useState } from "react";
import { signOut, getAccount, MadAccount, useIsDemoModeEnabled } from "@equinor/mad-auth";
import { Button, Typography } from "@equinor/mad-components";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export const SettingsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const isDemoModeEnabled = useIsDemoModeEnabled();
    const [account, setAccount] = useState<MadAccount>();

    useEffect(() => {
        getAccount().then(res => res && setAccount(res));
    }, []);
    return (
        <View style={{ height: "100%", padding: 16, justifyContent: "center", gap: 24 }}>
            <Typography variant="h5">demo mode: {`${isDemoModeEnabled}`}</Typography>
            <Typography variant="h1">User info:</Typography>
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
