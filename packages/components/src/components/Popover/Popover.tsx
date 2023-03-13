import { View, Text, StyleSheet } from "react-native";
import { arrow } from "@floating-ui/react-native";
import { tokens } from "@equinor/eds-tokens";

export interface PopoverProps {
  text: string;
  left: number;
  top: number;
  fuiRef: any;
  open: boolean;
}

export function Popover(props: PopoverProps) {
  if (!props.open) return <View />;
  return (
    <View
      collapsable={false}
      ref={props.fuiRef}
      style={[
        styles.outerContainer,
        { left: props.left ?? 0, top: props.top ?? 0 },
      ]}
    >
      <View style={styles.innerContainer}>
        <Text>{props.text}</Text>
      </View>
      <View style={styles.arrow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: tokens.colors.ui.background__info.hex,
    padding: 8,
    minWidth: 32,
    minHeight: 32,
  },
  outerContainer: {
    position: "absolute",
  },
  arrow: {
    backgroundColor: tokens.colors.ui.background__info.hex,
    width: 12,
    height: 12,
    marginTop: -6,
    marginLeft: 6,
    transform: [{ rotateZ: "45deg" }],
  },
});
