import { StyleSheet, Pressable} from "react-native";
import {Paper, Typography} from "@equinor/mad-components"
import {SkiaDrawHandle} from "../types";
import {MutableRefObject} from "react";


export const EDSControlPanel = (props: {canvasRef: MutableRefObject<SkiaDrawHandle | null>}) => {
    const colors = ["red", "blue", "orange", "yellow", "green"];
    const buttonSize = 20;
    const onPressColor = (c:string) => {
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

    return (
        <Paper
            elevation="sticky"
            style={styles.container}>
                {colors.map((c, index) => <Pressable onPress={() => onPressColor(c)} key={index} style={{height: buttonSize, width: buttonSize, backgroundColor: c}}/>)}
                {/* For testing undo, clear, and setStrokeWeight */}
                <Pressable onPress={() => onPressUndo()} key={"undo-button"} style={{height: buttonSize, width: buttonSize, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
                    <Typography>U</Typography>
                </Pressable>
                <Pressable onPress={() => onPressClear()} key={"clear-button"} style={{height: buttonSize, width: buttonSize, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
                    <Typography>C</Typography>
                </Pressable>
                <Pressable onPress={() => onPressStrokeWidth()} key={"stroke-width-button"} style={{height: buttonSize, width: buttonSize, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
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
        borderRadius: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 30,
    }
});