import { Border } from "@equinor/eds-tokens";
import * as React from "react";
import { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProps } from "./NavigationCell"
import { navigationToken } from "./NavigationCell.token";

export type NavigationCellListProps = {
    children?: React.ReactElement<NavigationProps> | React.ReactElement<NavigationProps>[];
}

export const NavigationCellList = (props: NavigationCellListProps) => {
    const navs = useMemo(() => {
        const navChildren = React.Children.toArray(props.children).filter(child => React.isValidElement<NavigationProps>(child));
        return navChildren.map((child, index) => {
            return React.cloneElement((child as React.ReactElement<NavigationProps>), { borderEdges: { top: index === 0, bottom: index === navChildren.length - 1 } });
        })
    },
        [props.children])

    return (
        <View style={{ width: "100%" }}>
            {navs.map((child, index) => (
                <View key={index}>
                    {child}
                    <View style={{ paddingHorizontal: 12 }}>
                        {index !== navs.length - 1 && <View style={styles.divider} />}
                    </View>
                </View>
            ))
            }
        </View >
    );
}
const styles = StyleSheet.create({
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: (navigationToken.border as Border).color,
    }
})