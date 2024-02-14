import { View, StyleSheet, Image } from "react-native";
import { CanvasImageControls, ImageMarkup } from "@equinor/react-native-skia-draw";
import { Button, Typography } from "@equinor/mad-components";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";

export const DrawScreen = () => {
    const canvasHandle = useRef<CanvasImageControls>(null);
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
        if (canvasHandle?.current?.makeImageSnapshot) {
            const image = canvasHandle.current.makeImageSnapshot();
            setModifiedImage(image?.uri);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <ImageMarkup
                ref={canvasHandle}
                style={{
                    flex: 3,
                }}
                markupImage={originalImage}
            />
            <View style={styles.inOutContainer}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" style={{ margin: 7 }}>
                        Original image:
                    </Typography>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: originalImage }} style={{ height: "100%" }} />
                    </View>
                    <Button
                        title="+ Add photo"
                        onPress={() => void pickImage()}
                        style={{ margin: 10 }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" style={{ margin: 7 }}>
                        Modified image:
                    </Typography>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: modifiedImage }} style={{ height: "100%" }} />
                    </View>
                    <Button title="Save snapshot" style={{ margin: 10 }} onPress={saveSnapshot} />
                </View>
            </View>
        </View>
    );
};

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
        overflow: "hidden",
    },
});
