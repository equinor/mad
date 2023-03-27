import { StyleSheet, Pressable, View } from "react-native";
import { Paper, Popover, Typography } from "@equinor/mad-components"
import { SkiaDrawHandle } from "../types";
import { MutableRefObject, useRef, useState } from "react";
import React from "react";


const BUTTON_SIZE = 20;

export const EDSControlPanel = (props: { canvasRef: MutableRefObject<SkiaDrawHandle | null> }) => {
  const [isSelectingColor, setIsSelectingColor] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>("white");

  const [isSelectingStrokeWeight, setIsSelectingStrokeWeight] = useState<boolean>(false);
  const [currentStrokeWeight, setCurrentStrokeWeight] = useState<number>(10);

  const colorSelectingButton = useRef<View>(null);
  const strokeWidthSelectingButton = useRef<View>(null);

  const colors = ["white", "black", "red", "blue", "orange", "yellow", "green"];
  const strokeWeights = [5, 10, 15];

  const onPressColor = (c: string) => {
    setCurrentColor(c);
    setIsSelectingColor(false);
    props.canvasRef.current?.setColor(c);
  }

  const onPressUndo = () => {
    props.canvasRef.current?.undo()
  };

  const onPressClear = () => {
    props.canvasRef.current?.clear()
  };

  const onPressStrokeWidth = (sw: number) => {
    props.canvasRef.current?.setStrokeWeight(sw);
  };


  type CircleButtonProps = {
    onPress: () => void;
    color?: string;
    radius?: number;
  }

  const CircleButton = (props: CircleButtonProps) => (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && { backgroundColor: "rgba(0,0,0,0.15)" }}>
      <View style={[
        styles.circle,
        { backgroundColor: props.color ?? "#007079" },
        !!props.color && { borderColor: "gray" },
        {
          margin: 20,
          height: props.radius ?? BUTTON_SIZE,
          width: props.radius ?? BUTTON_SIZE,
          borderWidth: 1, borderRadius: (props.radius ?? BUTTON_SIZE) / 2
        }]} />
    </Pressable>

  );

  return (
    <Paper
      elevation="sticky"
      style={styles.container}>

      <Pressable
        onPress={() => setIsSelectingStrokeWeight(true)}
        ref={strokeWidthSelectingButton}
        style={({ pressed }) => [pressed && { backgroundColor: "rgba(0,0,0,0.15)" }, styles.buttonStyle]}
        key={"stroke-width-button"}>
        <View style={{ width: currentStrokeWeight, height: currentStrokeWeight, backgroundColor: "#007079", borderRadius: currentStrokeWeight / 2 }} />
      </Pressable>

      <Popover
        open={isSelectingStrokeWeight}
        anchorEl={strokeWidthSelectingButton}
        onClose={() => setIsSelectingStrokeWeight(false)}
        placement="top"
        style={{ padding: 0 }}
      >
        {strokeWeights.map(rad => {
          return (
            <CircleButton
              key={rad}
              radius={rad}
              onPress={() => onPressStrokeWidth(rad)}
            />

          );
        })}

      </Popover>

      <Pressable
        onPress={() => setIsSelectingColor(true)}
        ref={colorSelectingButton}
        style={({ pressed }) => [pressed && { backgroundColor: "rgba(0,0,0,0.15)" }, styles.buttonStyle]}
        key={"color-button"}>
        <View style={[styles.circle, { backgroundColor: currentColor }]} />
      </Pressable>
      <Popover
        open={isSelectingColor}
        anchorEl={colorSelectingButton}
        onClose={() => setIsSelectingColor(false)}
        placement="top"
        style={{ padding: 0 }}
      >
        {colors.map(col => {
          return (
            <CircleButton
              key={col}
              color={col}
              onPress={() => onPressColor(col)}
            />

          );
        })}
      </Popover>
      <Pressable onPress={() => onPressUndo()} key={"undo-button"} style={({ pressed }) => [pressed && { backgroundColor: "rgba(0,0,0,0.15)" }, styles.buttonStyle]}>
        <Typography>U</Typography>
      </Pressable>
      <Pressable onPress={() => onPressClear()} key={"clear-button"} style={({ pressed }) => [pressed && { backgroundColor: "rgba(0,0,0,0.15)" }, styles.buttonStyle]}>
        <Typography>C</Typography>
      </Pressable>
    </Paper>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    width: "100%",
    maxWidth: 500,
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonStyle: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderWidth: 1, borderRadius: BUTTON_SIZE / 2
  }
});