import { TextInput, View } from "react-native";
import { Input, InputProps } from "../Input";
import React from "react";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

export type TextFieldProps = {
    /**
     * A unit describing the input value.
     */
    unit?: string;
} & Omit<InputProps, "leftAdornment" | "rightAdornment">;

export const TextField = React.forwardRef<TextInput, TextFieldProps>(({ unit, ...rest }, ref) => {
    const styles = useStyles(themeStyles);
    return (
        <Input
            ref={ref}
            rightAdornments={
                unit && (
                    <View style={styles.unit}>
                        <Typography variant="label" color="textTertiary">
                            {unit}
                        </Typography>
                    </View>
                )
            }
            {...rest}
        />
    );
});

TextField.displayName = "TextField";

const themeStyles = EDSStyleSheet.create(theme => ({
    unit: {
        justifyContent: "center",
        paddingHorizontal: theme.spacing.textField.paddingHorizontal,
    },
}));
