import { StyleSheet, Pressable } from "react-native";
import { Paper, Popover, Typography } from "@equinor/mad-components"
import { SkiaDrawHandle } from "../types";
import { MutableRefObject, useRef, useState } from "react";


export const EDSControlPanel = (props: { canvasRef: MutableRefObject<SkiaDrawHandle | null> }) => {
  const [isSelectingColor, setIsSelectingColor] = useState<boolean>(false);
  const colorSelectingButton = useRef(null);

  const colors = ["white", "red", "blue", "orange", "yellow", "green"];
  const strokeWeights = [5, 10, 15];
  const buttonSize = 20;

  const onPressColor = (c: string) => {
    props.canvasRef.current?.setColor(c);
  }

  const onPressUndo = () => {
    props.canvasRef.current?.undo()
  };

  const onPressClear = () => {
    props.canvasRef.current?.clear()
  };

  const onPressStrokeWidth = () => {
    props.canvasRef.current?.setStrokeWeight(3)
  };

  const ColorButton = () => {
    return (
      <>
        <Pressable
          ref={colorSelectingButton}
          onPress={() => setIsSelectingColor((state) => !state)}
          style={{ height: buttonSize, width: buttonSize, backgroundColor: "white", borderColor: "black", borderWidth: 1, borderRadius: buttonSize / 2 }} />
        <Popover
          open={isSelectingColor}
          anchorEl={colorSelectingButton.current!!}
          onClose={() => null}
          placement="top"
        >
          <Typography>Some color</Typography>
          <Typography>Some color</Typography>
          <Typography>Some color</Typography>
          <Typography>Some color</Typography>
          <Typography>Some color</Typography>
          <Typography>Some color</Typography>
        </Popover>
      </>
    );
  };

  return (
    <Paper
      elevation="sticky"
      style={styles.container}>
      {ColorButton()}
      {/* For testing undo, clear, and setStrokeWeight */}
      <Pressable onPress={() => onPressUndo()} key={"undo-button"} style={{ height: buttonSize, width: buttonSize, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Typography>U</Typography>
      </Pressable>
      <Pressable onPress={() => onPressClear()} key={"clear-button"} style={{ height: buttonSize, width: buttonSize, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Typography>C</Typography>
      </Pressable>
      <Pressable onPress={() => onPressStrokeWidth()} key={"stroke-width-button"} style={{ height: buttonSize, width: buttonSize, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Typography>SW</Typography>
      </Pressable>
    </Paper>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    width: "100%",
    maxWidth: 500,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 30,
  },
});