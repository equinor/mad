import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Platform, TextInput, View } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling/EDSStyleSheet";
import { InputProps } from "../Input";

export type SearchProps = Omit<InputProps, "multiline"> & {
    cancellable?: boolean;
    textValue?: string;
    onCancelPress?: () => void;
};

export const Search = ({
    cancellable,
    textValue,
    onCancelPress,
    onChange,
    ...restProps
}: SearchProps) => {
    const [text, setText] = useState(textValue ?? "");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [cancelButtonWidth, setCancelButtonWidth] = useState<number>(0);

    const styles = useStyles(themedStyles);
    const token = useToken();

    const inputRef = useRef<TextInput>(null);
    const animationValue = useSharedValue(0);

    const iconSize = token.geometry.dimension.icon.size;

    const cancelButtonStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animationValue.value, [0, 1], [0, 1]),
            transform: [
                { translateX: interpolate(animationValue.value, [0, 1], [cancelButtonWidth, 0]) },
            ],
        };
    });

    const inputStyle = useAnimatedStyle(() => {
        return {
            marginRight: interpolate(
                animationValue.value,
                [0, 1],
                [0, cancelButtonWidth + token.spacing.element.paddingHorizontal],
            ),
        };
    });

    useEffect(() => {
        if (!cancellable) return;
        animationValue.value = withTiming(isInputFocused ? 1 : 0, {
            duration: token.timing.animation.slow,
        });
    }, [isInputFocused, cancellable, animationValue, token.timing.animation.slow]);

    const handleCancelPressOut = () => {
        handleCancel();
    };

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
            <Animated.View style={[{ flex: 1 }, inputStyle]}>
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
                    style={[
                        {
                            position: "absolute",
                            right: 0,
                        },
                        cancelButtonStyle,
                    ]}
                    onLayout={event => setCancelButtonWidth(event.nativeEvent.layout.width)}
                >
                    <Button
                        variant="ghost"
                        title="Cancel"
                        onPress={Platform.OS !== "web" ? handleCancel : undefined}
                        onPressOut={Platform.OS === "web" ? handleCancelPressOut : undefined}
                    />
                </Animated.View>
            )}
        </View>
    );
};

const themedStyles = EDSStyleSheet.create(theme => {
    return {
        container: {
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
