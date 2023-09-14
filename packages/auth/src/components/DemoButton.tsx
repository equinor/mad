import React from "react";
import { Button } from "react-native";
import { enableDemoMode } from "../demo-mode";

export type DemoButtonProps = { visible?: boolean; navigateFn: () => void };
export const DemoButton = ({ visible, navigateFn }: DemoButtonProps) => {
    const onPress = () => {
        enableDemoMode();
        navigateFn();
    };

    if (!visible) return null;
    return <Button title="Demo" onPress={onPress} />;
};
