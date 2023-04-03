import { StyleSheet, View, ColorValue } from "react-native";
import { Paper, Popover, PressableHighlight, Typography } from "@equinor/mad-components"
import { SkiaDrawHandle } from "../../types";
import { MutableRefObject, useRef, useState } from "react";


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
        setCurrentStrokeWeight(sw);
        setIsSelectingStrokeWeight(false);
        props.canvasRef.current?.setStrokeWeight(sw);
    };

    const Circle = ({
        diameter = BUTTON_SIZE,
        color = "#007079",
        showBorder = false,
    }: {
        diameter?: number,
        color?: ColorValue,
        showBorder?: boolean,
    }) => (
        <View style={{
            backgroundColor: color,
            width: diameter,
            height: diameter,
            borderRadius: diameter / 2,
            borderColor: "lightgray",
            borderWidth: showBorder ? 1 : undefined,
        }} />
    );

    return (
        <Paper
            elevation="sticky"
            style={styles.container}>

            <PressableHighlight
                onPress={() => setIsSelectingStrokeWeight(true)}
                ref={strokeWidthSelectingButton}
                style={styles.buttonStyle}
                key={"stroke-width-button"}>
                <Circle diameter={currentStrokeWeight} />
            </PressableHighlight>

            <Popover
                open={isSelectingStrokeWeight}
                anchorEl={strokeWidthSelectingButton}
                onClose={() => setIsSelectingStrokeWeight(false)}
                placement="top"
                style={{ padding: 0 }}
            >
                {strokeWeights.map(rad => (
                    <PressableHighlight
                        key={rad}
                        onPress={() => onPressStrokeWidth(rad)}
                        style={styles.buttonStyle}
                    >
                        <View style={{ margin: 20 }}>
                            <Circle diameter={rad} />
                        </View>
                    </PressableHighlight>
                ))}

            </Popover>

            <PressableHighlight
                onPress={() => setIsSelectingColor(true)}
                ref={colorSelectingButton}
                style={styles.buttonStyle}
                key={"color-button"}>
                <Circle color={currentColor} showBorder />
            </PressableHighlight>
            <Popover
                open={isSelectingColor}
                anchorEl={colorSelectingButton}
                onClose={() => setIsSelectingColor(false)}
                placement="top"
                style={{ padding: 0 }}
            >
                {colors.map(col => (
                    <PressableHighlight
                        key={col}
                        onPress={() => onPressColor(col)}
                        style={styles.buttonStyle}
                    >
                        <View style={{ margin: 20 }}>
                            <Circle color={col} showBorder />
                        </View>
                    </PressableHighlight>
                ))}
            </Popover>

            <PressableHighlight onPress={() => onPressUndo()} key={"undo-button"} style={styles.buttonStyle}>
                <Typography color="gray">undo</Typography>
            </PressableHighlight>
            <PressableHighlight onPress={() => onPressClear()} key={"clear-button"} style={styles.buttonStyle}>
                <Typography color="red">clear</Typography>
            </PressableHighlight>
        </Paper >
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
    buttonStyle: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        height: BUTTON_SIZE,
        width: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE / 2
    }
});