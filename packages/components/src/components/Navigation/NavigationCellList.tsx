import * as React from "react";
import { useMemo } from "react";
import { View } from "react-native";
import { NavigationProps } from "./NavigationCell";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

export type NavigationCellListProps = {
    children?:
        | React.ReactElement<NavigationProps>
        | React.ReactElement<NavigationProps>[];
};

export const NavigationCellList = (props: NavigationCellListProps) => {
    const styles = useStyles(themeStyles);
    const navs = useMemo(() => {
        const navChildren = React.Children.toArray(props.children).filter(
            (child) => React.isValidElement<NavigationProps>(child)
        );
        return navChildren.map((child, index) => {
            return React.cloneElement(
                child as React.ReactElement<NavigationProps>,
                {
                    borderEdges: {
                        top: index === 0,
                        bottom: index === navChildren.length - 1,
                    },
                }
            );
        });
    }, [props.children]);

    return (
        <View style={{ width: "100%" }}>
            {navs.map((child, index) => (
                <View key={index}>
                    {child}
                    {index !== 0 && (
                        <View style={styles.dividerOuter}>
                            <View style={styles.dividerInner} />
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

const themeStyles = EDSStyleSheet.create((theme) => ({
    dividerOuter: {
        position: "absolute",
        top: 0,
        left: 0,
        paddingHorizontal: theme.spacing.paddingHorizontal,
        width: "100%",
    },
    dividerInner: {
        backgroundColor: theme.colors.border.medium,
        width: "100%",
        height: 1,
    },
}));
