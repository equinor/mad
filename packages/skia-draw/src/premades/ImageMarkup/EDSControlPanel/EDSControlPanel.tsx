import { KeyboardAvoidingView, View } from "react-native";
import {
    Color,
    EDSStyleSheet,
    Icon,
    Paper,
    Popover,
    Spacer,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import React, { useEffect, useRef, useState } from "react";
import { Circle } from "./Circle";
import { EDSControlPanelButton } from "./EDSControlPanelButton";
import { useCanvasControl } from "../../../hooks/useCanvasControl";
import { TextInputBubble } from "./TextInputBubble";

export const EDSControlPanel = () => {
    const {
        toolColor,
        setToolColor,
        setStrokeWeight,
        toolType,
        setToolType,
        text,
        setText,
        undo,
        clear,
    } = useCanvasControl();

    const styles = useStyles(themeStyles);

    const [isSelectingColor, setIsSelectingColor] = useState<boolean>(false);
    const [isSelectingStrokeWeight, setIsSelectingStrokeWeight] = useState<boolean>(false);
    const [isShowingTextBubble, setIsShowingTextBubble] = useState<boolean>(false);

    const colorSelectingButton = useRef<View>(null);
    const strokeWidthSelectingButton = useRef<View>(null);
    const textToolSelectingButton = useRef<View>(null);

    const colors = ["red", "white", "black", "blue", "orange", "yellow", "green"];
    const strokeWeights = [5, 10, 15];

    const onPressPenTool = () => {
        setToolType("pen");
        setIsSelectingStrokeWeight(true);
        setIsShowingTextBubble(false);
    };

    const onPressTextTool = () => {
        setToolType("text");
        setIsShowingTextBubble(state => !state);
    };

    const onPressColor = (c: string) => {
        setToolColor(c);
        setIsSelectingColor(false);
    };

    const onPressStrokeWidth = (sw: number) => {
        setStrokeWeight(sw);
        setIsSelectingStrokeWeight(false);
    };

    useEffect(() => {
        return () => {
            setIsSelectingColor(false);
            setIsSelectingStrokeWeight(false);
            setIsShowingTextBubble(false);
        };
    }, []);

    return (
        <View style={styles.container}>
            <TextInputBubble open={isShowingTextBubble} value={text} onChangeText={setText} />
            <Spacer amount="small" />
            <Paper elevation="sticky" style={styles.paperContainer}>
                <EDSControlPanelButton
                    onPress={onPressPenTool}
                    ref={strokeWidthSelectingButton}
                    key={"pen-tool-button"}
                >
                    <Icon name="brush" color={toolType === "pen" ? "primary" : "secondary"} />
                </EDSControlPanelButton>

                <EDSControlPanelButton
                    ref={textToolSelectingButton}
                    onPress={onPressTextTool}
                    key={"text-tool-button"}
                >
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
        </View>
    );
};

EDSControlPanel.displayName = "EDSControlPanel";

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        maxWidth: 500,
    },
    paperContainer: {
        height: 60,
        flex: 1,
        width: "100%",
        flexDirection: "row",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    paddedContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
