import { Border } from "@equinor/eds-tokens";
import { Pressable, StyleSheet, View } from "react-native";
import { useDynamicStyle } from "../../hooks/useDynamicStyle";
import { Typography } from "../Typography";
import { navigationToken } from "./NavigationCell.token";

export type NavigationBorderEdges = {
    top: boolean;
    bottom: boolean;
}

export type NavigationProps = {
    title?: string;
    description?: string;
    onPress: () => void;
    borderEdges?: Partial<NavigationBorderEdges>
}

export const NavigationCell = (props: React.PropsWithChildren<NavigationProps>) => {
    console.log("RERENDER")
    const borderEdges: NavigationBorderEdges = {
        top: props?.borderEdges?.top ?? true,
        bottom: props?.borderEdges?.bottom ?? true,
    };

    const wrapperStyle = useDynamicStyle(() => ({
        width: "100%",
        minHeight: 70,
        borderColor: (navigationToken.border as Border).color,
        borderTopWidth: borderEdges.top ? 1 : undefined,
        borderBottomWidth: borderEdges.bottom ? 1 : undefined,
    }), [props.borderEdges]);

    return (
        <View style={wrapperStyle}>
            <Pressable
                onPress={props.onPress}
                style={({ pressed }) => pressed ? styles.containerPressed : styles.containerResting}>
                <View style={{ flex: 1, flexDirection: "row", paddingLeft: 12, paddingRight: 12, paddingTop: 12, paddingBottom: 12 }}>
                    <View style={styles.cellIconContainer}>
                        <Typography>{"?"}</Typography>
                    </View>
                    <View style={{ flex: 1, alignSelf: "stretch", justifyContent: "center" }}>
                        {props.title && <Typography group="navigation" variant="menu_title">{props.title}</Typography>}
                        {props.description && <Typography group="navigation" variant="label">{props.description}</Typography>}
                        {props.children}
                    </View>
                    <View style={styles.cellIconContainer}>
                        <Typography>{">"}</Typography>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    containerResting: {
        flex: 1,
        backgroundColor: navigationToken.background,
    },
    containerPressed: {
        flex: 1,
        backgroundColor: navigationToken.states?.pressed?.background,
    },
    cellIconContainer: {
        backgroundColor: "cyan",
        flexBasis: 40,
        justifyContent: "center",
        alignItems: "center",
    }
});
