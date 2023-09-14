import React from "react";
import { LoginScreen as MadAuthLoginScreen } from "@equinor/mad-auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import Logo from "../assets/images/icon.png";

export const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <MadAuthLoginScreen
            logo={Logo}
            redirectUri="msauth.com.equinor.mad.chronicles://auth"
            clientId="49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed"
            navigateFn={() => navigation.navigate("Root")}
        />
    );
};
