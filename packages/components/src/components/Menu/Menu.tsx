import { Placement, flip, offset, shift, useFloating } from "@floating-ui/react-native";
import React, { createContext } from "react";
import { Animated, Modal, Pressable, View, ViewProps } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { Paper } from "../Paper";
import { useStyles } from "../../hooks/useStyles";

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
    return (
        <Modal
            visible={open}
            transparent={true}
        >
            <Pressable
                onPress={onClose}
                style={{ width: "100%", height: "100%" }}
            >
                <Animated.View
                    ref={refs.setFloating}
                    style={floatingStyles}
                >
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
                </Animated.View>
            </Pressable>
        </Modal>
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