import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { Input, useStyles } from "../..";
import React from "react";

export type SearchProps = {
    onChange: (text: string) => void;
};

export const Search = (props: SearchProps) => {
    const styles = useStyles(themedStyles);
    return (
        <Input onChange={(x) => props.onChange?.(x)} leftAdornments={
            <View style={{ backgroundColor: "#007079", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="cafe" size={16} color={"white"} />
            </View>
        } label="Say something" placeholder="Anything goes here"></Input>
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
