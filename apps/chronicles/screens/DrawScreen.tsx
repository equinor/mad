import { View, StyleSheet, Image } from "react-native";
import { ImageMarkup } from "@equinor/react-native-skia-draw";
import { Button, Typography } from "@equinor/mad-components";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import { SnapshotHandle } from "@equinor/react-native-skia-draw/dist/types";

export const DrawScreen = () => {
    const canvasHandle = useRef<SnapshotHandle>(null);
    const [originalImage, setOriginalImage] = useState<string>();
    const [modifiedImage, setModifiedImage] = useState<string>();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            quality: 1,
        });
        if (!result.canceled) {
            setOriginalImage(result.assets[0].uri);
        }
    };

    const saveSnapshot = () => {
        if (!!canvasHandle?.current?.makeImageSnapshot) {
            const image = canvasHandle.current.makeImageSnapshot();
            setModifiedImage(image?.uri);
        }
    };

    return (
        <>
            <ImageMarkup ref={canvasHandle} style={{ flex: 3, backgroundColor: "black", justifyContent: "center" }} markupImage={originalImage} />
            <View style={styles.inOutContainer}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h6" style={{ margin: 7 }}>Original image:</Typography>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: originalImage }} style={{ height: "100%" }} />
                    </View>
                    <Button
                        onPress={pickImage}
                        style={{ margin: 10 }}>
                        + Add photo
                    </Button>

                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h6" style={{ margin: 7 }}>Modified image:</Typography>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: modifiedImage }} style={{ height: "100%" }} />
                    </View>
                    <Button
                        style={{ margin: 10 }}
                        onPress={saveSnapshot}
                    >
                        Save snapshot
                    </Button>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    inOutContainer: {
        flex: 1,
        flexDirection: "row",
    },
    imageContainer: {
        alignSelf: "center",
        flex: 1,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 12,
        overflow: "hidden"
    },
})