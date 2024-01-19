import { EDSStyleSheet, useStyles, useBreakpoint, Breakpoint } from "@equinor/mad-components";

export const PropertyRow = () => {
    const breakpoint = useBreakpoint();
    const styles = useStyles(themeStyles, { breakpoint });
};

type PropertyRowStyleProps = {
    breakpoint: Breakpoint;
};

const themeStyles = EDSStyleSheet.create((token, styleProps: PropertyRowStyleProps) => ({
    container: {
        backgroundColor: styleProps.breakpoint === "xs" ? "red" : "blue",
    },
}));
