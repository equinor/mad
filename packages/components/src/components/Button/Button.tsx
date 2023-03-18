import { tokens } from "@equinor/eds-tokens";
import React from "react";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { convertToUnitlessNumber } from "../../translations/units";
import { Typography } from "../Typography";

export type ButtonProps = {
  onPress?: any;
};

export const Button = React.forwardRef<View, ButtonProps & ViewProps>(
  (props: ButtonProps & ViewProps, ref) => {
    const children = React.Children.toArray(props.children);
    return (
      <View style={props.style} ref={ref} collapsable={false}>
        <Pressable
          style={({ pressed }) => {
            return pressed ? styles.containerPressed : styles.containerResting;
          }}
          onPress={props.onPress}
        >
          {children.map(child => {
            if (typeof (child) === "string")
              return <Typography
                group="navigation"
                variant="button"
                color="white"
              >
                {child}
              </Typography>
            return child
          })}
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  containerResting: {
    backgroundColor: tokens.colors.interactive.primary__resting.rgba,
    borderRadius: convertToUnitlessNumber(tokens.shape.button.borderRadius),
    padding: convertToUnitlessNumber(tokens.spacings.comfortable.medium_small),
  },
  containerPressed: {
    backgroundColor: tokens.colors.interactive.pressed_overlay_dark.rgba,
    borderRadius: convertToUnitlessNumber(tokens.shape.button.borderRadius),
    padding: convertToUnitlessNumber(tokens.spacings.comfortable.medium_small),
  },
});

