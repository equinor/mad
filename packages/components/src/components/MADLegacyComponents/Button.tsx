import React from "react";
import {
    View,
    TouchableOpacity,
    ActivityIndicator,
    GestureResponderEvent,
} from "react-native";
import Typography from "./Typography";

const styles = {
    defaultTextStyle: {
        color: "white",
        backgroundColor: "rgba(0,0,0,0)",
        fontSize: 16,
    },
    defaultButtonStyle: {
        flexDirection: "row",
        borderRadius: 2,
        minHeight: 35,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#007079",
    },
};

export const MADLegacyButton = (props: {
    title: string | JSX.Element;
    onPress: (event: GestureResponderEvent) => void;
    textStyle: Object;
    viewStyle: Object;
    disabled: boolean;
    busy: boolean;
}) => {
    const { defaultButtonStyle, defaultTextStyle } = styles;
    const { title, onPress, textStyle, viewStyle, disabled, busy } = props;

    const titleComponent =
        typeof title === "string" ? (
            <Typography style={[defaultTextStyle, textStyle]}>
                {title}
            </Typography>
        ) : (
            title
        );

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View
                style={[
                    defaultButtonStyle,
                    viewStyle,
                    disabled && { opacity: 0.5 },
                ]}
            >
                {busy && (
                    <ActivityIndicator
                        size="small"
                        style={{ marginRight: 4 }}
                    />
                )}
                {titleComponent}
            </View>
        </TouchableOpacity>
    );
};
