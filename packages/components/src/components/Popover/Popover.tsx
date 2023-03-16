import { View, Text, StyleSheet, ViewProps } from "react-native";
import { tokens } from "@equinor/eds-tokens";
import React, { Ref } from "react";
import { shift, useFloating } from "@floating-ui/react-native";

export type PopoverProps = {
  open: boolean;
  anchorEl: any;
};

export const Popover = (props: PopoverProps & ViewProps) => {
  if (!props.open) return <View />;
  let { x, y, refs } = useFloating({
    middleware: [shift()],
    placement: "top"
  });
  refs.setReference(props.anchorEl);
  return (
    <View
      collapsable={false}
      style={{ position: "absolute", left: x as number, top: y as number}}
      ref={refs.setFloating}
    >
      <View style={styles.innerContainer}>{props.children}</View>
      <View style={styles.arrow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: tokens.colors.ui.background__info.hex,
    padding: 8,
    minWidth: 32,
    minHeight: 32,
  },
  arrow: {
    backgroundColor: tokens.colors.ui.background__info.hex,
    width: 16,
    height: 16,
    marginTop: -8,
    marginLeft: 8,
    transform: [{ rotateZ: "45deg" }],
  },
});

