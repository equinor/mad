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

export const Popover = (props: PopoverProps & ViewProps) => {

  const arrowRef = useRef(null);
  const {
    x,
    y,
    refs,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    sameScrollView: false,
    middleware: [
      offset(15),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef })
    ],
    placement: props.placement as Placement ?? "top",
  });

  useLayoutEffect(() => {
    refs.setReference(props.anchorEl.current);
  }, [refs, props.anchorEl]);

  return (
    <Modal visible={props.open} transparent={true} presentationStyle="overFullScreen">
      <Pressable onPress={props.onClose} style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Paper
          style={{ position: "absolute", left: x ?? 0, top: y ?? 0, borderRadius: 12 }}
          elevation="overlay"
          ref={refs.setFloating}
        >
          <View style={[styles.innerContainer, props.style]} {...props}>{props.children}</View>
          {/* <View ref={arrowRef} style={[styles.arrow, { left: arrowX ?? 0, top: arrowY ?? 0 }]}></View> */}
        </Paper>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    transform: [{ rotateZ: '45deg' }],
    width: 25,
    height: 25,
    backgroundColor: "white",
  },

  innerContainer: {
    overflow: "hidden",
    minWidth: convertToUnitlessNumber(tokens.shape.button.minWidth),
    padding: convertToUnitlessNumber(tokens.spacings.comfortable.medium),
    minHeight: convertToUnitlessNumber(tokens.shape.button.minHeight)
  }
});