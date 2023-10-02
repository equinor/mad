import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Input, TextFieldProps, useStyles, useToken } from "../..";
import { EDSStyleSheet } from "../../styling";

export type SearchProps = Omit<TextFieldProps, "multiline"> & {
    cancellable?: boolean;
    onCancelPress?: () => void;
};
export const Search = ({ cancellable, onCancelPress, ...restProps }: SearchProps) => {
    const [text, setText] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [cancelButtonWidth, setCancelButtonWidth] = useState<number>(0);
    const inputRef = useRef<TextInput | null>(null);
    const animationValue = useRef(new Animated.Value(0)).current;
    const styles = useStyles(themedStyles);
    const token = useToken();

    const cancelButtonOpacity = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const cancelButtonTranslateX = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [cancelButtonWidth, 0]
    });

    const inputSlide = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, cancelButtonWidth + token.spacing.element.paddingHorizontal]
    });

    useEffect(() => {
        if (!cancellable) return;
        Animated.timing(animationValue, {
            toValue: isInputFocused ? 1 : 0,
            duration: token.timing.animation.slow,
            useNativeDriver: false
        }).start();
    }, [isInputFocused]);


    const handleCancel = () => {
        setText('');
        onCancelPress?.();
        inputRef.current?.blur();
    };

    // FIXME: On web the search field loses focus when the clear text button is pressed. 
    const handleClearText = () => {
        setText('');
        inputRef.current?.focus();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{ flex: 1, marginRight: inputSlide }}>
                <Input
                    {...restProps}
                    ref={inputRef}
                    value={text}
                    onChange={setText}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    leftAdornments={
                        <View style={styles.adornment}>
                            <MaterialIcons name="search" size={18} color={styles.icon.color} />
                        </View>
                    }
                    rightAdornments={
                        text ? (
                            <View style={styles.adornment}>
                                <Button.Icon
                                    name="close"
                                    variant="ghost"
                                    iconSize={18}
                                    onPress={handleClearText}
                                />
                            </View>
                        ) : null
                    }
                />
            </Animated.View>
            {cancellable && (
                <Animated.View
                    style={{
                        position: 'absolute',
                        right: 0,
                        opacity: cancelButtonOpacity,
                        transform: [{ translateX: cancelButtonTranslateX }]
                    }}
                    onLayout={event => setCancelButtonWidth(event.nativeEvent.layout.width)}
                >
                    <Button variant="ghost" title="Cancel" onPress={handleCancel} />
                </Animated.View>
            )}
        </View>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: theme.spacing.element.paddingHorizontal
    },
    adornment: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: theme.spacing.element.paddingHorizontal,
    },
    icon: {
        color: theme.colors.text.primary,
    },
}));
