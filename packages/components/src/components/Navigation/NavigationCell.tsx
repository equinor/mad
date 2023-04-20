import { StyleSheet, View } from "react-native";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { PressableHighlight } from "../PressableHighlight";
import { useStyles } from "../../hooks/useStyles";

export type NavigationBorderEdges = {
    top: boolean;
    bottom: boolean;
};

export type NavigationProps = {
    title?: string;
    description?: string;
    onPress: () => void;
    borderEdges?: Partial<NavigationBorderEdges>;
};

export const NavigationCell = (
    props: React.PropsWithChildren<NavigationProps>
) => {
    const borderEdges: NavigationBorderEdges = {
        top: props?.borderEdges?.top ?? true,
        bottom: props?.borderEdges?.bottom ?? true,
    };

    const dynamicStyle = useStyles(themeStyles, { borderEdges });

    return (
        <View style={dynamicStyle.containerWrapper}>
            <PressableHighlight onPress={props.onPress} style={{ flex: 1 }}>
                <View style={dynamicStyle.containerInner}>
                    <View style={styles.cellIconContainer}>
                        <Typography>{"?"}</Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignSelf: "stretch",
                            justifyContent: "center",
                        }}
                    >
                        {props.title && (
                            <Typography
                                style={{ paddingBottom: 5 }}
                                group="navigation"
                                variant="cellTitle"
                            >
                                {props.title}
                            </Typography>
                        )}
                        {props.description && (
                            <Typography
                                group="navigation"
                                variant="cellDescription"
                            >
                                {props.description}
                            </Typography>
                        )}
                        {props.children}
                    </View>
                    <View style={styles.disclosureContainer}>
                        <Typography>{">"}</Typography>
                    </View>
                </View>
            </PressableHighlight>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: { borderEdges: Partial<NavigationBorderEdges> }) => ({
        containerWrapper: {
            width: "100%",
            minHeight: 70,
            backgroundColor: theme.colors.container.elevation.none,
            borderColor: theme.colors.border.medium,
            borderTopWidth: props.borderEdges.top ? 1 : undefined,
            borderBottomWidth: props.borderEdges.bottom ? 1 : undefined,
        },
        containerInner: {
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: theme.spacing.paddingHorizontal,
            paddingTop: 12,
            paddingBottom: 12,
        },
    })
);

const styles = StyleSheet.create({
    cellIconContainer: {
        backgroundColor: "#ff1243",
        marginRight: 10,
        flexBasis: 46,
        justifyContent: "center",
        alignItems: "center",
    },
    disclosureContainer: {
        backgroundColor: "#ff1243",
        marginLeft: 10,
        flexBasis: 46,
        justifyContent: "center",
        alignItems: "center",
    },
});
