import { View } from "react-native";
import { TextField, TextFieldProps } from "../TextField";
import { ReactNode } from "react";
import { EDSStyleSheet } from "../../styling";
import { Label, useStyles } from "../..";

export type InputProps = {
    leftAdornments?: ReactNode;
    rightAdornments?: ReactNode;
} & TextFieldProps;

export const Input = (props: InputProps) => {
    const styles = useStyles(themedStyles);
    const { leftAdornments, rightAdornments, label, helperText, ...other } = props;
    other.multiline = false;
    return (
        <View>
            {label && <Label label={label} />}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "stretch",
                }}
            >
                {leftAdornments && <View
                    style={[
                        { flex: 0.1 },
                        styles.adornment,
                    ]}
                >
                    {leftAdornments}
                </View>}
                <View style={{ flex: 1 }}>
                    <TextField {...other} />
                </View>
                {rightAdornments && <View
                    style={[
                        { flex: 0.1 },
                        styles.adornment,
                    ]}
                >
                    {rightAdornments}
                </View>}
            </View>
            {helperText && <Label label={helperText} />}
        </View>
    );
};

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        adornment: {
            backgroundColor: theme.colors.container.background,
            borderBottomWidth: theme.geometry.border.borderWidth,
            borderBottomColor: theme.colors.border.medium,
            marginTop: 4.25,
            marginBottom: 8.25
        }
    };
});
