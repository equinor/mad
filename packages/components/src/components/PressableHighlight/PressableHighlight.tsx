import { forwardRef } from "react";
import { ColorValue, Pressable, PressableProps, StyleProp, View, ViewStyle } from "react-native"
import { Interactive } from "../../constants/colors"

export type PressableHightlightProps = {
    highlightColor?: ColorValue;
    style?: ViewStyle;
}

export const PressableHighlight = forwardRef<View, React.PropsWithChildren<PressableHightlightProps & PressableProps>>(({
    highlightColor = Interactive.PRESSED,
    style,
    children,
    ...rest
}: React.PropsWithChildren<PressableHightlightProps>, ref) => (
    <Pressable
        ref={ref}
        style={({ pressed }) => [
            pressed && { backgroundColor: highlightColor },
            style
        ]}
        {...rest}>
        {children}
    </Pressable>
));

PressableHighlight.displayName = "PressableHighlight";