import {useEffect, useRef, useState} from "react";
import {Text, Circle} from "@shopify/react-native-skia";
import {StyleSheet, View, Image} from "react-native";
import {Button, Typography} from "@equinor/mad-components";
import { Canvas } from "@equinor/react-native-skia-draw/src/Canvas"
import {SkiaDrawHandle, SkiaDrawSnapshot} from "@equinor/react-native-skia-draw/dist/types";

export const SignatureScreen = () => {
    const [image, setImage] = useState<SkiaDrawSnapshot>()
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0)
    useEffect(() => {
        if (!image) return;
        Image.getSize(image.uri, (newWidth, newHeight) => {
            setHeight(newHeight/2)
            setWidth(newWidth/2)
        })
    }, [image])

    const drawRef = useRef<SkiaDrawHandle>(null)
    return <View style={{flex:1}}>
        <View style={styles.resultsContainer}>
            <Typography>Results:</Typography>
            <Image source={{uri:image?.uri}} style={{height: height, width:width}}/>
        </View>
        <View style={styles.padContainer}>
            <View style={styles.canvasContainer}>
                <Canvas ref={drawRef} initialDrawColor={"black"} initialStrokeWidth={3} style={{height:200,flex:1, margin: 16, backgroundColor: "white", borderColor: "#DFDFDF", borderWidth: 1, borderRadius: 16}}>
                    <Circle cx={128} cy={128} r={128} color="lightblue" />
                </Canvas>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Snapshot"} onPress={() => setImage(drawRef.current?.makeImageSnapshot())}/>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    resultsContainer: {flex: 1, justifyContent: "center", alignItems: "center"},
    padContainer: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"white"},
    buttonContainer: {flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems:"center"},
    canvasContainer: {flex:1, flexDirection: "row"},
})