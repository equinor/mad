import { forwardRef } from "react";
import {
    ColorValue,
    Pressable,
    PressableProps,
    View,
    ViewStyle,
} from "react-native";
import { useToken } from "../../hooks/useToken";

export type PressableHightlightProps = {
    disabled?: boolean;
    style?: ViewStyle;
};

export const PressableHighlight = forwardRef<
    View,
    React.PropsWithChildren<PressableHightlightProps & PressableProps>
>(
    (
        {
            style,
            children,
            disabled = false,
            ...rest
        }: React.PropsWithChildren<PressableHightlightProps>,
        ref
    ) => {
        const theme = useToken();
        return (
            <Pressable
                ref={ref}
                style={({ pressed }) => [
                    pressed && !disabled && {
                        backgroundColor:
                            theme.colors.interactive.pressedOverlay,
                    },
                    style,
                ]}
                {...rest}
            >
                {children}
            </Pressable>
        );
    }
);

PressableHighlight.displayName = "PressableHighlight";
