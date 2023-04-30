import { ReactNode, useContext } from "react";
import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { CellGroupContext, CellGroupContextType } from "./CellGroup";
import { PressableHighlight } from "../PressableHighlight";

export type CellProps = {
    leftAdornment?: ReactNode;
    rightAdornment?: ReactNode;
    onPress?: () => void;
};

export const Cell = ({
    leftAdornment,
    rightAdornment,
    onPress,
    children
}: React.PropsWithChildren<CellProps>) => {
    const { isFirstCell, isLastCell } = useContext(CellGroupContext);
    const styles = useStyles(themeStyle, { isFirstCell, isLastCell });
    return (
        <View style={styles.container}>
            <PressableHighlight
                disabled={!onPress}
                onPress={onPress}
                style={{ flex: 1 }}
            >
                <View style={styles.contentContainer}>
                    {leftAdornment && <View style={styles.adornment}>
                        {leftAdornment}
                    </View>}
                    <View style={styles.children}>
                        {children}
                    </View>
                    {rightAdornment && <View style={styles.adornment}>
                        {rightAdornment}
                    </View>}
                </View>
                {!isLastCell && <View style={styles.dividerOuter} >
                    <View style={styles.dividerInner} />
                </View>}
            </PressableHighlight>
        </View>
    );
};

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
    adornment: {
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
