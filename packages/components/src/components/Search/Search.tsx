// eslint-disable-next-line import/default
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import React, { FocusEvent, useEffect, useRef, useState } from "react";
import {
    NativeSyntheticEvent,
    Platform,
    TextInput,
    TextInputFocusEventData,
    View,
} from "react-native";

import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling/EDSStyleSheet";
import { InputProps } from "../Input";
import { Icon } from "../Icon";

export type SearchProps = Omit<InputProps, "multiline"> & {
    cancellable?: boolean;
    disabled?: boolean;
    onCancelPress?: () => void;
};

export const Search = ({
    cancellable,
    value,
    disabled,
    onCancelPress,
    onChange,
    ...restProps
}: SearchProps) => {
    const [text, setText] = useState(value ?? "");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [cancelButtonWidth, setCancelButtonWidth] = useState<number>(0);

    const styles = useStyles(themedStyles);
    const token = useToken();

    const inputRef = useRef<TextInput>(null);
    const animationValue = useSharedValue(0);

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

    const handleOnBlurWeb = (e: FocusEvent<HTMLInputElement>) => {
        if (e.relatedTarget && e.relatedTarget.id === "search-clear-text-button") {
            e.target.focus();
            setIsInputFocused(true);
        } else {
            setIsInputFocused(false);
        }
    };

    const handleOnBlurNative = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsInputFocused(false);
        restProps.onBlur?.(e);
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[{ flex: 1 }, inputStyle]}>
                <TextField
                    {...restProps}
                    readOnly={disabled}
                    ref={inputRef}
                    value={text}
                    onChange={onChangeText}
                    onFocus={e => {
                        setIsInputFocused(true);
                        restProps.onFocus?.(e);
                    }}
                    onBlur={e => {
                        if (Platform.OS === "web") {
                            handleOnBlurWeb(e as unknown as FocusEvent<HTMLInputElement>);
                        } else {
                            handleOnBlurNative(e);
                        }
                    }}
                    leftAdornments={
                        <View style={styles.magnifyIconContainer}>
                            <Icon
                                name="magnify"
                                color={isInputFocused ? "textPrimary" : "textTertiary"}
                            />
                        </View>
                    }
                    rightAdornments={
                        text ? (
                            <View style={styles.adornmentIconContainer}>
                                <Button.Icon
                                    id="search-clear-text-button"
                                    name="close"
                                    color="primary"
                                    variant="ghost"
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
            alignItems: "center",
        },
        adornmentIconContainer: {
            position: "absolute",
            top: 0,
            right: 0,
            paddingHorizontal: 4,
        },
        magnifyIconContainer: {
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 16,
            paddingRight: 4,
            paddingVertical: theme.spacing.element.paddingVertical,
        },
        cancelButtonContainer: {
            justifyContent: "center",
            height: theme.geometry.dimension.button.minHeight,
            paddingHorizontal: theme.spacing.button.paddingHorizontal,
        },
    };
});
