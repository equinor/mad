import React from "react";
import { LoginScreen } from "@equinor/mad-core";

export const SampleLoginScreen = () => {
    return (
        <LoginScreen
            onAuthenticationSuccessful={() => console.log("Yay!")}
            onAuthenticationFailed={() => console.log("Nay!")}
        />
    );
};
