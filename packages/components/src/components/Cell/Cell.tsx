import { ReactNode, useContext } from "react";
import { View, ViewProps } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { CellGroupContext, CellGroupContextType } from "./CellGroup";
import { PressableHighlight } from "../PressableHighlight";
import React from "react";

export type CellProps = {
    leftAdornment?: ReactNode;
    rightAdornment?: ReactNode;
    onPress?: () => void;
} & ViewProps;

export const Cell = React.forwardRef<View, React.PropsWithChildren<CellProps>>(
    (
        {
            leftAdornment,
            rightAdornment,
            onPress,
            children,
            ...rest
        },
        ref
    ) => {
        const { isFirstCell, isLastCell } = useContext(CellGroupContext);
        const styles = useStyles(themeStyle, { isFirstCell, isLastCell });
        return (
            <View {...rest} style={[styles.container, rest.style]} ref={ref}>
                <PressableHighlight
                    disabled={!onPress}
                    onPress={onPress}
                    style={{ flex: 1 }}
                >
                    <View style={styles.contentContainer}>
                        {leftAdornment && <View>
                            {leftAdornment}
                        </View>}
                        <View style={styles.children}>
                            {children}
                        </View>
                        {rightAdornment && <View>
                            {rightAdornment}
                        </View>}
                    </View>
                    {!isLastCell && <View style={styles.dividerOuter} >
                        <View style={styles.dividerInner} />
                    </View>}
                </PressableHighlight>
            </View>
        );
    });

Cell.displayName = "Cell";

const themeStyle = EDSStyleSheet.create((theme, props: CellGroupContextType) => ({
    container: {
        backgroundColor: theme.colors.container.default,
        minHeight: theme.geometry.dimension.cell.minHeight,
        borderColor: theme.colors.border.medium,
        borderBottomWidth: props.isLastCell ? theme.geometry.border.borderWidth : undefined,
        borderTopWidth: props.isFirstCell ? theme.geometry.border.borderWidth : undefined,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        gap: theme.spacing.cell.gapHorizontal,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.cell.paddingVertical,
    },
    children: {
        flex: 1,
    },
    dividerOuter: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    dividerInner: {
        height: theme.geometry.border.borderWidth,
        backgroundColor: theme.colors.border.medium,
    }
}));
