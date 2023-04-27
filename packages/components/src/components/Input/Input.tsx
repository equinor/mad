import { View } from "react-native";
import { TextField, TextFieldProps } from "../TextField";
import { ReactNode } from "react";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../..";

export type InputProps = {
    leftAdornments?: ReactNode;
    rightAdornments?: ReactNode;
} & TextFieldProps;

export const Input = (props: InputProps) => {
    const styles = useStyles(themedStyles);
    const { leftAdornments, rightAdornments, ...other } = props;
    other.multiline = false;
    const labelFontSize = styles.label.fontSize ?? 0;
    const marginTop = 4.25 + (props.label ? labelFontSize : 0);
    const marginBottom = 8.25 + (props.helperText ? labelFontSize : 0);
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "stretch",
            }}
        >
            {leftAdornments && <View
                style={[
                    { flex: 0.1, marginTop, marginBottom },
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
                    { flex: 0.1, marginBottom, marginTop },
                    styles.adornment,
                ]}
            >
                {rightAdornments}
            </View>}
        </View>
    );
};

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        adornment: {
            backgroundColor: theme.colors.container.default,
            borderBottomWidth: theme.geometry.border.borderWidth,
            borderBottomColor: theme.colors.border.medium,
        },
        label: {
            fontSize: theme.typography.basic.label.fontSize,
        },
    };
});
