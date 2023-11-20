import React from "react";
import { Icon } from "../Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PressableHighlight } from "../PressableHighlight";

export type RadioProps = {
    /**
     * Callback method invoked when the user presses the button.
     */
    onPress?: (b: boolean) => void;
    /**
     * Color theme of the button.
     */
    color?: "primary" | "secondary" | "danger";
    /**
     * whether the button is in its disabled state.
     */
    disabled?: boolean;
    /**
     * Whether the button should be in its checked state.
     */
    checked?: boolean;
    /**
     * The size of the icon
     */
    size?: number;
};
export const Radio = ({
    onPress = () => null,
    checked = false,
    disabled = false,
    size = 24,
    color = "primary",
}: RadioProps) => {
    return (
        <PressableHighlight
            style={{backgroundColor: "rgba(0,0,0,0)"}}
            onPress={() => {
                onPress(disabled ? checked : !checked);
            }}
            disabled={disabled}
        >
            <Icon
                name={
                    (checked
                        ? "radio-button-checked"
                        : "radio-button-unchecked") as keyof typeof MaterialCommunityIcons.glyphMap
                }
                size={size}
                color={color}
            />
        </PressableHighlight>
    );
};
