import { StyleSheet, View } from "react-native";
import { Color, Icon, Paper, Popover, Typography } from "@equinor/mad-components";
import { SkiaDrawHandle } from "../../../types";
import React, { MutableRefObject, useRef, useState } from "react";
import { CanvasTool } from "../../../Canvas/types";
import { Circle } from "./Circle";
import { EDSControlPanelButton } from "./EDSControlPanelButton";

type EDSControlPanelProps = {
    canvasRef: MutableRefObject<SkiaDrawHandle | null>;
};

export const EDSControlPanel = ({ canvasRef }: EDSControlPanelProps) => {
    const [isSelectingColor, setIsSelectingColor] = useState<boolean>(false);
    const [currentColor, setCurrentColor] = useState<string>("red");

    const [isSelectingStrokeWeight, setIsSelectingStrokeWeight] = useState<boolean>(false);
    const [currentStrokeWeight, setCurrentStrokeWeight] = useState<number>(10);

    const [currentTool, setCurrentTool] = useState<CanvasTool>("pen");

    const colorSelectingButton = useRef<View>(null);
    const strokeWidthSelectingButton = useRef<View>(null);

    const colors = ["red", "white", "black", "blue", "orange", "yellow", "green"];
    const strokeWeights = [5, 10, 15];

    const onPressPenTool = () => {
        setCurrentTool("pen");
        canvasRef.current?.setTool("pen");
        setIsSelectingStrokeWeight(true);
    };

    const onPressTextTool = () => {
        setCurrentTool("text");
        canvasRef.current?.setTool("text");
    };

    const onPressColor = (c: string) => {
        setCurrentColor(c);
        setIsSelectingColor(false);
        canvasRef.current?.setColor(c);
    };

    const onPressUndo = () => {
        canvasRef.current?.undo();
    };

    const onPressClear = () => {
        canvasRef.current?.clear();
    };

    const onPressStrokeWidth = (sw: number) => {
        setCurrentStrokeWeight(sw);
        setIsSelectingStrokeWeight(false);
        canvasRef.current?.setStrokeWeight(sw);
    };

    return (
        <Paper elevation="sticky" style={styles.container}>
            <EDSControlPanelButton
                onPress={onPressPenTool}
                ref={strokeWidthSelectingButton}
                key={"pen-tool-button"}
            >
                <Icon name="brush" color={currentTool === "pen" ? "primary" : "secondary"} />
            </EDSControlPanelButton>

            <EDSControlPanelButton onPress={onPressTextTool} key={"text-tool-button"}>
                <Icon
                    name="format-textbox"
                    color={currentTool === "text" ? "primary" : "secondary"}
                />
            </EDSControlPanelButton>

            <Popover
                open={isSelectingStrokeWeight}
                anchorEl={strokeWidthSelectingButton}
                onClose={() => setIsSelectingStrokeWeight(false)}
                placement="top"
                style={{ padding: 0 }}
            >
                {strokeWeights.map(rad => (
                    <EDSControlPanelButton key={rad} onPress={() => onPressStrokeWidth(rad)}>
                        <View style={{ margin: 20 }}>
                            <Circle diameter={rad} />
                        </View>
                    </EDSControlPanelButton>
                ))}
            </Popover>

            <EDSControlPanelButton
                onPress={() => setIsSelectingColor(true)}
                ref={colorSelectingButton}
                key={"color-button"}
            >
                <Icon
                    name={currentColor === "white" ? "water-outline" : "water"}
                    color={currentColor === "white" ? "secondary" : (currentColor as Color)}
                />
            </EDSControlPanelButton>
            <Popover
                open={isSelectingColor}
                anchorEl={colorSelectingButton}
                onClose={() => setIsSelectingColor(false)}
                placement="top"
                style={{ padding: 0 }}
            >
                {colors.map(col => (
                    <EDSControlPanelButton key={col} onPress={() => onPressColor(col)}>
                        <View style={{ margin: 20 }}>
                            <Circle color={col} showBorder />
                        </View>
                    </EDSControlPanelButton>
                ))}
            </Popover>

            <EDSControlPanelButton onPress={onPressUndo} key={"undo-button"}>
                <Typography group="interactive" variant="button" color="secondary">
                    undo
                </Typography>
            </EDSControlPanelButton>

            <EDSControlPanelButton onPress={onPressClear} key={"clear-button"}>
                <Typography group="interactive" variant="button" color="danger">
                    clear
                </Typography>
            </EDSControlPanelButton>
        </Paper>
    );
};

EDSControlPanel.displayName = "EDSControlPanel";

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
});
