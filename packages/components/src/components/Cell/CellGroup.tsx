import React, { useMemo } from "react";
import { createContext } from "react";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

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
    const validChildrenIndexes = useMemo(() => {
        const validChildren = React.Children.toArray(children).filter(child => React.isValidElement(child));
        return validChildren.map((_, index) => index);
    }, [children]);
    const styles = useStyles(themeStyles);
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
