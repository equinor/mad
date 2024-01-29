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
    const [text, setText] = useState(textValue ?? "");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [cancelButtonWidth, setCancelButtonWidth] = useState<number>(0);

    const styles = useStyles(themedStyles);
    const token = useToken();

    const inputRef = useRef<TextInput>(null);
    const animationValue = useRef(new Animated.Value(0)).current;

    const iconSize = token.geometry.dimension.icon.size;

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
    }, [animationValue, isInputFocused, token.timing.animation.slow, cancellable]);

    const handleCancel = () => {
        setText("");
        onCancelPress?.();
        inputRef.current?.blur();
    };

    const handleClearText = () => {
        setText("");
        onChange?.("");
        inputRef.current?.focus();
    };

    const onChangeText = (text: string) => {
        setText(text);
        onChange?.(text);
    };

    const handleOnBlur = (e: any) => {
        if (e.relatedTarget && e.relatedTarget.id === "search-clear-text-button") {
            e.target.focus();
            setIsInputFocused(true);
        } else {
            setIsInputFocused(false);
        }
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
                        if (Platform.OS === "web") {
                            handleOnBlur(e);
                        }
                        if (Platform.OS !== "web") {
                            setIsInputFocused(false);
                            restProps.onBlur?.(e);
                        }
                    }}
                    leftAdornments={
                        <View style={styles.iconContainer}>
                            <MaterialIcons
                                name="search"
                                size={iconSize}
                                color={styles.icon.color}
                            />
                        </View>
                    }
                    rightAdornments={
                        text ? (
                            <View style={styles.iconContainer}>
                                <MaterialIcons
                                    id="search-clear-text-button"
                                    name="close"
                                    tabIndex={0}
                                    color={styles.icon.color}
                                    size={iconSize}
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
                    <Button
                        variant="ghost"
                        title="Cancel"
                        onPressIn={Platform.OS === "web" ? handleCancel : undefined}
                        onPress={Platform.OS !== "web" ? handleCancel : undefined}
                    />
                </Animated.View>
            )}
        </View>
    );
};

const themedStyles = EDSStyleSheet.create(theme => {
    return {
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
        iconContainer: {
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: theme.spacing.button.paddingHorizontal,
            paddingVertical: theme.spacing.button.paddingVertical,
        },
        icon: {
            color: theme.colors.interactive.primary,
        },
    };
});
