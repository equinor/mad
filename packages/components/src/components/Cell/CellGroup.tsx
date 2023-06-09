import React, { ReactNode } from "react";
import { createContext } from "react";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { useValidChildrenIndexes } from "../../hooks/useValidChildrenIndexes";
import { View } from "react-native";

export type CellGroupContextType = {
    isFirstCell: boolean;
    isLastCell: boolean;
}
export const CellGroupContext = createContext<CellGroupContextType>({
    isFirstCell: true,
    isLastCell: true,
});

export type CellGroupProps = {
    title?: string;
    adornment?: ReactNode;
}

export const CellGroup = ({
    title,
    adornment,
    children,
}: React.PropsWithChildren<CellGroupProps>) => {
    const styles = useStyles(themeStyles);
    const validChildrenIndexes = useValidChildrenIndexes(children);
    return (
        <>
            <View style={styles.titleContainer}>
                {title &&
                    <Typography
                        group="cell"
                        variant="groupTitle"
                        color="textTertiary">
                        {title}
                    </Typography>}
                <View>
                    {adornment}
                </View>

            </View>
            {React.Children.map(children, (child, index) => (
                <CellGroupContext.Provider value={{
                    isFirstCell: index === validChildrenIndexes.at(0),
                    isLastCell: index === validChildrenIndexes.at(-1)
                }}>
                    {child}
                </CellGroupContext.Provider>
            ))}
        </>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    titleContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingBottom: theme.spacing.cell.group.titleBottomPadding,
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
}));
