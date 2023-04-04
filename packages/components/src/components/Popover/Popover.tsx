import { tokens } from "@equinor/eds-tokens";
import { arrow, flip, offset, Placement, shift, useFloating } from "@floating-ui/react-native";
import React, { useLayoutEffect, useRef } from "react";
import { Modal, Pressable, StyleSheet, View, ViewProps } from "react-native";
import { convertToUnitlessNumber } from "../../translations/units";
import { Paper } from "../Paper";

export type PopoverProps = {
    open: boolean;
    onClose: () => void;
    anchorEl: React.MutableRefObject<View | null>;
    placement?: string;
};

type PopoverDimensions = {
    width?: number;
    height?: number;
};

const arrowContainerSize = 16;

export const Popover = (props: PopoverProps & ViewProps) => {

    const arrowRef = useRef(null);
    const popoverDimensions = useRef({
        width: 0,
        height: 0
    } as PopoverDimensions)
    const {
        x,
        y,
        refs,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    } = useFloating({
        sameScrollView: false,
        middleware: [
            offset(12),
            flip(),
            shift({ padding: 8 }),
            arrow({ element: arrowRef })
        ],
        placement: props.placement as Placement ?? "top",
    });

    useLayoutEffect(() => {
        refs.setReference(props.anchorEl.current);
    }, [refs, props.anchorEl]);

    let calculatedArrowX = (x as number) + (arrowX ?? 0);
    let calculatedArrowY = (y as number) + (arrowY ?? 0);
    if (props.placement?.startsWith("left")) {
        calculatedArrowX += popoverDimensions.current.width ?? 0;
    }
    if (props.placement?.startsWith("top")) {
        calculatedArrowY += popoverDimensions.current.height ?? 0;
    }
    if (props.placement?.startsWith("top") || props.placement?.startsWith("bottom")) {
        calculatedArrowY -= arrowContainerSize / 2;
    }
    if (props.placement?.startsWith("left") || props.placement?.startsWith("right")) {
        calculatedArrowX -= arrowContainerSize / 2;
    }
    return (
        <Modal visible={props.open} transparent={true} presentationStyle="overFullScreen">
            <Pressable onPress={props.onClose} style={{ width: "100%", height: "100%", position: "absolute" }}>
                <Paper
                    style={{ position: "absolute", left: x ?? 0, top: y ?? 0, borderRadius: 12 }}
                    elevation="overlay"
                    ref={refs.setFloating}
                    onLayout={(e) => {
                        popoverDimensions.current.width = e.nativeEvent.layout.width;
                        popoverDimensions.current.height = e.nativeEvent.layout.height;
                    }}
                >
                    <View style={[styles.innerContainer, props.style]} {...props}>{props.children}</View>
                </Paper>
                <View ref={arrowRef} style={[styles.arrow, { left: calculatedArrowX, top: calculatedArrowY }]}>
                    <View style={{
                        width: arrowContainerSize / 1.444,
                        height: arrowContainerSize / 1.444,
                        transform: [{ rotate: "45deg" }],
                        backgroundColor: "white"
                    }}></View>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    arrow: {
        position: "absolute",
        width: arrowContainerSize,
        height: arrowContainerSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    innerContainer: {
        overflow: "hidden",
        minWidth: convertToUnitlessNumber(tokens.shape.button.minWidth),
        padding: convertToUnitlessNumber(tokens.spacings.comfortable.medium),
        minHeight: convertToUnitlessNumber(tokens.shape.button.minHeight)
    }
});