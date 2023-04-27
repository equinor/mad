import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { Input, TextFieldProps, useStyles } from "../..";
import { MaterialIcons } from "@expo/vector-icons";

export type SearchProps = Omit<TextFieldProps, "multiline">;

export const Search = (props: SearchProps) => {
    const styles = useStyles(themedStyles);
    return (
        <Input {...props} leftAdornments={
            <View style={styles.adornment}>
                <MaterialIcons name="search" size={18} color={styles.icon.color} />
            </View>
        }></Input>
    );
};

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        adornment: {
            backgroundColor: theme.colors.container.default,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        icon: {
            color: theme.colors.text.primary
        }
    };
});
