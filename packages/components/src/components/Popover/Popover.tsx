import { View, StyleSheet, ViewProps, Modal, Pressable } from "react-native";
import { tokens } from "@equinor/eds-tokens";
import React from "react";
import { flip, offset, Placement, shift, useFloating } from "@floating-ui/react-native";
import { convertToUnitlessNumber } from "../../translations/units";
import { Paper } from "../Paper";

export type PopoverProps = {
  open: boolean;
  onClose: () => void;
  anchorEl: React.MutableRefObject<View>;
  placement?: string;
};

export const Popover = (props: PopoverProps & ViewProps) => {
  if (!props.open) return <View />;
  const {
    x,
    y,
    refs, scrollProps
  } = useFloating({
    sameScrollView: false,
    middleware: [offset(0),
    flip(),
    shift({ padding: 8 }),
    ],
    placement: props.placement as Placement ?? "top",
  });
  refs.setReference(props.anchorEl);
  return (
    <Modal visible transparent={true} presentationStyle="overFullScreen">
      <Pressable onPress={() => {
        props.onClose && props.onClose();
      }}>
        <Paper
          style={{ position: "absolute", left: x ?? 0, top: y ?? 0 }}
          elevation="overlay"
          ref={refs.setFloating}
        >
          <View style={styles.innerContainer}>{props.children}</View>
        </Paper>
      </Pressable>
    </Modal>

  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: tokens.colors.ui.background__light.hex,
    padding: convertToUnitlessNumber(tokens.spacings.comfortable.medium),
    minWidth: convertToUnitlessNumber(tokens.shape.button.minWidth),
    minHeight: convertToUnitlessNumber(tokens.shape.button.minHeight)
  }
});