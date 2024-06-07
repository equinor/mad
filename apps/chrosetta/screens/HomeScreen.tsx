import React from "react";
import { Image, View } from "react-native";
import splash from "../assets/images/splash.png";

export default function HomeScreen() {
    return (
        <View>
            <Image source={splash} style={{ width: "100%", height: "100%" }} />
        </View>
    );
}
