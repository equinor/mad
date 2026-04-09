import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import "core-js/stable/atob";
import { View } from "react-native";
import { resetToken, setRefreshToken } from "../store/authStore";

WebBrowser.maybeCompleteAuthSession();

export const CorruptRefreshToken = () => {


    return (
        <View>
            <Button
                title={"Corrupt Refresh Token"}
                onPress={() => {
                    resetToken();
                    setRefreshToken("CORRUPTED TOKEN")
                }}
            />
        </View>
    );
};
