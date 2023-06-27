import { ReactNode, useContext } from "react";
import { View, ViewProps } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { CellGroupContext, CellGroupContextType } from "./CellGroup";
import { PressableHighlight } from "../PressableHighlight";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { CellSwipeItemProps } from "./types";
import { CellSwipeItem } from "./CellSwipeItem";
import React from "react";

export type CellProps = {
    leftAdornment?: ReactNode;
    rightAdornment?: ReactNode;
    rightSwipeGroup?: CellSwipeItemProps[];
    leftSwipeGroup?: CellSwipeItemProps[];
    onPress?: () => void;
} & ViewProps;

export const Cell = React.forwardRef<View, React.PropsWithChildren<CellProps>>(
    (
        {
            leftAdornment,
            rightAdornment,
            leftSwipeGroup,
            rightSwipeGroup,
            onPress,
            children,
            ...rest
        },
        ref
    ) => {
        const { isFirstCell, isLastCell } = useContext(CellGroupContext);
        const styles = useStyles(themeStyle, { isFirstCell, isLastCell });
        const CellContent = () => (
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
        )
        return (
            (leftSwipeGroup || rightSwipeGroup) ?
                <Swipeable
                    overshootFriction={8}
                    containerStyle={{ backgroundColor: styles.container.backgroundColor }}
                    renderLeftActions={() => leftSwipeGroup && leftSwipeGroup.map((swipeItem, index) => (
                        <CellSwipeItem key={`testL_${index}`} {...swipeItem} />
                    ))}
                    renderRightActions={() => rightSwipeGroup && rightSwipeGroup.map((swipeItem, index) => (
                        <CellSwipeItem key={`test_${index}`} {...swipeItem} />
                    ))}>
                    {CellContent()}
                </Swipeable>
                :
                CellContent()

        );
    });

Cell.displayName = "Cell";

const themeStyle = EDSStyleSheet.create((theme, props: CellGroupContextType) => ({
    container: {
        borderColor: theme.colors.border.medium,
        borderBottomWidth: props.isLastCell ? theme.geometry.border.borderWidth : undefined,
        borderTopWidth: props.isFirstCell ? theme.geometry.border.borderWidth : undefined,
        backgroundColor: theme.colors.container.default,
        minHeight: theme.geometry.dimension.cell.minHeight,
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
