import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Color, Icon, Input, Paper, Popover, Typography } from "@equinor/mad-components";
import React, { useRef, useState } from "react";
import { Circle } from "./Circle";
import { EDSControlPanelButton } from "./EDSControlPanelButton";
import { useCanvasControl } from "../../../hooks/useCanvasControl";

export const EDSControlPanel = () => {
    const { toolColor, setToolColor, setStrokeWeight, toolType, setToolType, undo, clear } =
        useCanvasControl();

    const [isSelectingColor, setIsSelectingColor] = useState<boolean>(false);
    const [isSelectingStrokeWeight, setIsSelectingStrokeWeight] = useState<boolean>(false);
    const [isEditingText, setIsEditingText] = useState<boolean>(false);

    const colorSelectingButton = useRef<View>(null);
    const strokeWidthSelectingButton = useRef<View>(null);

    const colors = ["red", "white", "black", "blue", "orange", "yellow", "green"];
    const strokeWeights = [5, 10, 15];

    const onPressPenTool = () => {
        setToolType("pen");
        setIsSelectingStrokeWeight(true);
    };

    const onPressTextTool = () => {
        setToolType("text");
    };

    const onPressColor = (c: string) => {
        setToolColor(c);
        setIsSelectingColor(false);
    };

    const onPressStrokeWidth = (sw: number) => {
        setStrokeWeight(sw);
        setIsSelectingStrokeWeight(false);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            {toolType === "text" && <Input value={"whassup"} />}
            <Paper elevation="sticky" style={styles.paperContainer}>
                <EDSControlPanelButton
                    onPress={onPressPenTool}
                    ref={strokeWidthSelectingButton}
                    key={"pen-tool-button"}
                >
                    <Icon name="brush" color={toolType === "pen" ? "primary" : "secondary"} />
                </EDSControlPanelButton>

                <EDSControlPanelButton onPress={onPressTextTool} key={"text-tool-button"}>
                    <Icon
                        name="format-textbox"
                        color={toolType === "text" ? "primary" : "secondary"}
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
                        name={toolColor === "white" ? "water-outline" : "water"}
                        color={toolColor === "white" ? "secondary" : (toolColor as Color)}
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

                <EDSControlPanelButton onPress={undo} key={"undo-button"}>
                    <Typography group="interactive" variant="button" color="secondary">
                        undo
                    </Typography>
                </EDSControlPanelButton>

                <EDSControlPanelButton onPress={clear} key={"clear-button"}>
                    <Typography group="interactive" variant="button" color="danger">
                        clear
                    </Typography>
                </EDSControlPanelButton>
            </Paper>
        </KeyboardAvoidingView>
    );
};

EDSControlPanel.displayName = "EDSControlPanel";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 500,
    },
    paperContainer: {
        flex: 1,
        height: 60,
        width: "100%",
        flexDirection: "row",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});
