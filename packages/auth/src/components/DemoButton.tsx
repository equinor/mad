import React from "react";
import { Button } from "react-native";

export type DemoButtonProps = { visible?: boolean; navigateFn: () => void };
export const DemoButton = ({ visible, navigateFn }: DemoButtonProps) => {
    if (!visible) return null;
    return <Button title="Demo" onPress={navigateFn} />;
};
