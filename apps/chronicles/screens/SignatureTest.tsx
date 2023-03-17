import {useEffect, useRef, useState} from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { MADLegacyButton, Typography} from "@equinor/mad-components";
import {SignaturePadHandle, SkiaDrawSnapshot} from "@equinor/react-native-skia-draw/dist/types";
import {SignaturePad} from "@equinor/react-native-skia-draw/dist/premades/SignaturePad/SignaturePad";
import {Circle} from "@shopify/react-native-skia";

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

    const drawRef = useRef<SignaturePadHandle>(null)
    return <View style={{flex:1}}>
        <View style={styles.resultsContainer}>
            <Typography>Results:</Typography>
            <Image source={{uri:image?.uri}} style={{height: height, width:width}}/>
        </View>
        <View style={styles.padContainer}>
            <View style={styles.canvasContainer}>
                <SignaturePad ref={drawRef} withLabel height={200}>
                    <Circle cx={128} cy={128} r={128} color="lightblue" />
                </SignaturePad>
            </View>
            <View style={styles.buttonContainer}>
                <MADLegacyButton title={"Snapshot"} disabled={false} busy={false} viewStyle={{}} textStyle={{}} onPress={() => drawRef.current?.makeImageSnapshot && setImage(drawRef.current?.makeImageSnapshot())}/>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    resultsContainer: {flex: 1, justifyContent: "center", alignItems: "center"},
    padContainer: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"white"},
    buttonContainer: {flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems:"center"},
    canvasContainer: {flex:2, flexDirection: "row"},
})