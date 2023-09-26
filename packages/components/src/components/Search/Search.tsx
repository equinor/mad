import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { Button, Input, TextFieldProps, Typography, useStyles } from "../..";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

// export type SearchProps = Omit<TextFieldProps, "multiline">;
export type SearchProps = Omit<TextFieldProps, "multiline"> & {
    allowCancel?: boolean;
    // onFocusChange?: (isFocused: boolean) => void;
};

export const Search = (props: SearchProps) => {
    const { allowCancel, ...restProps } = props;
    const [text, setText] = useState('');
    const inputRef = useRef<TextInput | null>(null);
    const styles = useStyles(themedStyles);

    const handleClearText = () => {
        setText('');
        inputRef.current?.blur();
    };

    return (
        <Input
            {...restProps}
            ref={inputRef}
            value={text}
            onChange={setText}
            leftAdornments={
                <View style={styles.adornment}>
                    <MaterialIcons name="search" size={18} color={styles.icon.color} />
                </View>
            }
            rightAdornments={
                text && !allowCancel ? (
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
    );
};

/* 
            { {text && allowCancel && (
                <Typography onPress={handleClearText} >
                    Cancel
                </Typography>
            )} 
*/

const themedStyles = EDSStyleSheet.create(theme => {
    return {
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
        },

        adornment: {
            backgroundColor: theme.colors.container.background,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: theme.spacing.element.paddingHorizontal,
        },
        icon: {
            color: theme.colors.text.primary,
        },
    };
});
