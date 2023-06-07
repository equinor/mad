import React from "react";
import { createContext } from "react";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { useValidChildrenIndexes } from "../../hooks/useValidChildrenIndexes";

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
}

export const CellGroup = ({
    title,
    children,
}: React.PropsWithChildren<CellGroupProps>) => {
    const styles = useStyles(themeStyles);
    const validChildrenIndexes = useValidChildrenIndexes(children);
    return (
        <>
            {title &&
                <Typography
                    group="cell"
                    variant="groupTitle"
                    color="textTertiary"
                    style={styles.title}>
                    {title}
                </Typography>}
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
    title: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingBottom: theme.spacing.cell.group.titleBottomPadding,
    }
}));
