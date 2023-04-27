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
    const leftFlex = leftAdornments ? 0.1 : 0;
    const rightFlex = rightAdornments ? 0.1 : 0;
    const centerFlex = 1 - leftFlex - rightFlex;
    return (
        <View style={{
            flexDirection: "row"
        }}>
            <View style={[{ flex: leftFlex }, styles.adornment]}>{leftAdornments}</View>
            <View style={{ flex: centerFlex }}><TextField {...other} /></View>
            <View style={[{ flex: rightFlex }, styles.adornment]}>{rightAdornments}</View>
        </View>
    );
};

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        adornment: {
            backgroundColor: "red",
            borderBottomWidth: theme.geometry.border.borderWidth,
            borderBottomColor: theme.colors.border.medium,
            marginTop: 20,
            marginBottom: 4
        },
    };
});
