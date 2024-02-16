import React, { ReactNode, forwardRef, useContext } from "react";
import { View, ViewProps } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { CellGroupContext, CellGroupContextType } from "./CellGroup";
import { PressableHighlight } from "../PressableHighlight";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { CellSwipeItemProps } from "./types";
import { CellSwipeItem } from "./CellSwipeItem";

export type AdditionalSurfaceProps = {
    /**
     * The content of the additional surface.
     */
    component: ReactNode;
    /**
     * Callback method invoked when a user presses the additional surface.
     * Leaving this `undefined` causes the additional surface to not respond to touch or hover events.
     */
    onPress?: () => void;
};

export type CellProps = {
    /**
     * A component that uses the left-remaining space after the child content of the cell has been adjusted for.
     */
    leftAdornment?: ReactNode;
    /**
     * A component that uses the right-remaining space after the child content of the cell has been adjusted for.
     */
    rightAdornment?: ReactNode;
    /**
     * A list of items configuring the components that appear on the right side when a user swipes the cell.
     * Setting this prop makes the cell swipable to the left.
     */
    rightSwipeGroup?: CellSwipeItemProps[];
    /**
     * A list of items configuring the components that appear on the left side when a user swipes the cell.
     * Setting this prop makes the cell swipable to the right.
     */
    leftSwipeGroup?: CellSwipeItemProps[];
    /**
     * Callback method invoked when a user presses the cell.
     * Leaving this `undefined` causes the cell to not respond to touch or hover events.
     */
    onPress?: () => void;
    /**
     * Additional touchable surface to be rendered to the left of the cell
     */
    additionalSurface?: AdditionalSurfaceProps;
} & ViewProps;

export const Cell = forwardRef<View, React.PropsWithChildren<CellProps>>(
    (
        {
            leftAdornment,
            rightAdornment,
            leftSwipeGroup,
            rightSwipeGroup,
            additionalSurface,
            onPress,
            children,
            ...rest
        },
        ref,
    ) => {
        const { isFirstCell, isLastCell } = useContext(CellGroupContext);
        const styles = useStyles(themeStyle, { isFirstCell, isLastCell });

        const CellContent = () => (
            <View {...rest} style={[styles.container, rest.style]} ref={ref}>
                <View style={{ flexDirection: "row" }}>
                    {additionalSurface && (
                        <PressableHighlight
                            onPress={additionalSurface.onPress}
                            style={styles.additionalSurface}
                        >
                            {additionalSurface.component}
                        </PressableHighlight>
                    )}
                    <PressableHighlight disabled={!onPress} onPress={onPress} style={{ flex: 1 }}>
                        <View style={styles.contentContainer}>
                            {leftAdornment && <View style={styles.adornment}>{leftAdornment}</View>}
                            <View style={styles.children}>
                                <View style={{ flex: 1, justifyContent: "center" }}>
                                    {children}
                                </View>
                            </View>
                            {rightAdornment && (
                                <View style={styles.adornment}>{rightAdornment}</View>
                            )}
                        </View>
                        {!isLastCell && (
                            <View style={styles.dividerOuter}>
                                <View style={styles.dividerInner} />
                            </View>
                        )}
                    </PressableHighlight>
                </View>
            </View>
        );
        return !!leftSwipeGroup || !!rightSwipeGroup ? (
            <Swipeable
                overshootFriction={8}
                containerStyle={{ backgroundColor: styles.container.backgroundColor }}
                renderLeftActions={() =>
                    leftSwipeGroup?.map((swipeItem, index) => (
                        <CellSwipeItem key={`leftSwipeItem_${index}`} {...swipeItem} />
                    ))
                }
                renderRightActions={() =>
                    rightSwipeGroup?.map((swipeItem, index) => (
                        <CellSwipeItem key={`rightSwipeItem_${index}`} {...swipeItem} />
                    ))
                }
            >
                {CellContent()}
            </Swipeable>
        ) : (
            CellContent()
        );
    },
);

Cell.displayName = "Cell";

const themeStyle = EDSStyleSheet.create((theme, props: CellGroupContextType) => ({
    container: {
        borderColor: theme.colors.border.medium,
        borderBottomWidth: props.isLastCell ? theme.geometry.border.borderWidth : undefined,
        borderTopWidth: props.isFirstCell ? theme.geometry.border.borderWidth : undefined,
        backgroundColor: theme.colors.container.default,
        minHeight: theme.geometry.dimension.cell.minHeight,
        justifyContent: "center",
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.cell.gapHorizontal,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.cell.paddingVertical,
    },
    children: {
        flex: 1,
        flexDirection: "row",
    },
    adornment: {
        flexDirection: "row",
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
    },
    additionalSurface: {
        borderRightWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderColor: theme.colors.border.medium,
        marginVertical: theme.spacing.menu.item.paddingVertical,
    },
}));
