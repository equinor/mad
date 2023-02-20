import * as React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
 } from "react-native";



 export const Button = ({}) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => console.log("Pressed button!")}>
            <Text>PRESS ME!</Text>
        </TouchableOpacity>
    );
 }


 const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "red",
        borderRadius: 15,
        width: 100,
        height: 100,
    }
 })