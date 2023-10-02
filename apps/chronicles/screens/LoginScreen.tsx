import React from "react";
import { LoginButton } from "@equinor/mad-auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { View } from "react-native";

export const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    navigation.navigate("Root")
    return (
        <View
            style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
            }}
        >
            <LoginButton
                redirectUri="msauth.com.equinor.mad.chronicles://auth"
                clientId="49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed"
                onAuthenticationSuccessful={() => navigation.navigate("Root")}
                enableAutomaticAuthentication
            />
        </View>
    );
};
