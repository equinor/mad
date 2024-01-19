import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, View, TextInput } from "react-native";

import { useToken } from "../../hooks/useToken";
import { useStyles } from "../../hooks/useStyles";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { InputProps } from "../Input";
import { EDSStyleSheet } from "../../styling/EDSStyleSheet";

export type SearchProps = Omit<InputProps, "multiline"> & {
    cancellable?: boolean;
    onCancelPress?: () => void;
    textValue?: string;
};
export const Search = ({
    cancellable,
    onCancelPress,
    onChange,
    textValue,
    ...restProps
}: SearchProps) => {
    const [text, setText] = useState("");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [cancelButtonWidth, setCancelButtonWidth] = useState<number>(0);
    const inputRef = useRef<TextInput | null>(null);
    const animationValue = useRef(new Animated.Value(0)).current;
    const styles = useStyles(themedStyles);
    const token = useToken();

    const cancelButtonOpacity = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const cancelButtonTranslateX = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [cancelButtonWidth, 0],
    });

    const inputSlide = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, cancelButtonWidth + token.spacing.element.paddingHorizontal],
    });

    useEffect(() => {
        if (!cancellable) return;
        Animated.timing(animationValue, {
            toValue: isInputFocused ? 1 : 0,
            duration: token.timing.animation.slow,
            useNativeDriver: false,
        }).start();
    }, [animationValue, cancellable, isInputFocused, token.timing.animation.slow]);

    useEffect(() => {
        if (textValue) {
            setText(textValue);
        }
    }, [textValue]);

    const handleCancel = () => {
        setText("");
        onCancelPress?.();
        inputRef.current?.blur();
    };

    // FIXME: On web the search field loses focus when the clear text button is pressed.
    const handleClearText = () => {
        setText("");
        onChange?.("");
        inputRef.current?.focus();
    };

    const onChangeText = (text: string) => {
        setText(text);
        onChange?.(text);
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ flex: 1, marginRight: inputSlide }}>
                <TextField
                    {...restProps}
                    ref={inputRef}
                    value={text}
                    onChange={onChangeText}
                    onFocus={e => {
                        setIsInputFocused(true);
                        restProps.onFocus?.(e);
                    }}
                    onBlur={e => {
                        setIsInputFocused(false);
                        restProps.onBlur?.(e);
                    }}
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
                        position: "absolute",
                        right: 0,
                        opacity: cancelButtonOpacity,
                        transform: [{ translateX: cancelButtonTranslateX }],
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
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "flex-end",
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
