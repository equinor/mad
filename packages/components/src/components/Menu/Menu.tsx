import { Placement, flip, offset, shift, useFloating } from "@floating-ui/react-native";
import React, { createContext } from "react";
import { View, ViewProps } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { Paper } from "../Paper";
import { useStyles } from "../../hooks/useStyles";
import { RootModal } from "../_internal/RootModal";
import { PopInContainer } from "../_internal/PopInContainer";

export type MenuProps = {
    anchorEl: React.MutableRefObject<View | null>;
    open: boolean;
    onClose: () => void;
    placement?: Placement;
};

export type MenuContextType = {
    close: () => void;
}

export const MenuContext = createContext<MenuContextType>({
    close: () => null,
})

export const Menu = ({
    anchorEl,
    open,
    onClose,
    placement = "bottom",
    children,
    ...rest
}: React.PropsWithChildren<MenuProps & ViewProps>) => {
    const {
        refs,
        floatingStyles
    } = useFloating({
        sameScrollView: false,
        elements: {
            reference: anchorEl.current,
        },
        middleware: [
            offset(8),
            flip(),
            shift({ padding: 8 }),
        ],
        placement,
    });

    const styles = useStyles(themeStyles);
    return (open &&
        <RootModal onBackdropPress={onClose}>
            <View
                ref={refs.setFloating}
                style={floatingStyles}>
                <PopInContainer>
                    <Paper
                        style={styles.paperStyle}
                        elevation="temporaryNav"
                    >
                        <View
                            style={[styles.innerContainer, rest.style]}
                            {...rest}
                        >
                            <MenuContext.Provider
                                value={{
                                    close: onClose
                                }}>
                                {children}
                            </MenuContext.Provider>
                        </View>
                    </Paper>
                </PopInContainer>
            </View>
        </RootModal>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    paperStyle: {
        borderRadius: theme.geometry.border.elementBorderRadius,
    },
    innerContainer: {
        overflow: "hidden",
        minHeight: theme.geometry.dimension.button.minHeight,
        paddingVertical: theme.spacing.menu.paddingVertical,
    },
}));