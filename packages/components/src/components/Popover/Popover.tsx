import { View, Text, StyleSheet, ViewProps } from "react-native";
import { tokens } from "@equinor/eds-tokens";
import React, { Ref } from "react";
import { Placement, shift, useFloating } from "@floating-ui/react-native";

export type PopoverProps = {
  open: boolean;
  anchorEl: any;
  placement?: string;
};

export const Popover = (props: PopoverProps & ViewProps) => {
  if (!props.open) return <View />;
  let { x, y, refs } = useFloating({
    middleware: [shift()],
    placement: props.placement as Placement ?? "top"
  });
  refs.setReference(props.anchorEl);
  return (
    <View
      collapsable={false}
      style={{ position: "absolute", left: x as number, top: y as number }}
      ref={refs.setFloating}
    >
      <View style={styles.innerContainer}>{props.children}</View>

    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: tokens.colors.ui.background__light.hex,
    padding: 8,
    minWidth: 32,
    minHeight: 32
  }
});