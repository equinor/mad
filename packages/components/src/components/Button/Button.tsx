import { tokens } from "@equinor/eds-tokens";
import React from "react";
import { Pressable, StyleSheet, View, Text, ViewProps } from "react-native";

export type ButtonProps = {
  onPress?: any;
  style?: StyleSheet;
};

export const Button = React.forwardRef<View, ButtonProps & ViewProps>(
  (props: ButtonProps & ViewProps, ref) => {
    return (
      <View style={props.style} ref={ref} collapsable={false}>
        <Pressable
          style={({ pressed }) => {
            return pressed ? styles.containerPressed : styles.containerResting;
          }}
          onPress={props.onPress}
        >
          {props.children}
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  containerResting: {
    backgroundColor: tokens.colors.interactive.primary__resting.hex,
    borderRadius: 2,
    padding: 8,
  },
  containerPressed: {
    backgroundColor: tokens.colors.interactive.pressed_overlay_dark.hex,
    borderRadius: 2,
    padding: 8,
  },
});

