import React, { PropsWithChildren } from "react";
import { Portal } from "../Portal";
import { Pressable, StyleSheet } from "react-native";

type RootModalProps = {
    onBackdropPress?: () => void;
};

export const RootModal = ({
    onBackdropPress = () => null,
    children
}: PropsWithChildren<RootModalProps>) => (
    <Portal name="root">
        <Pressable
            onPress={onBackdropPress}
            style={{ ...StyleSheet.absoluteFillObject, zIndex: 1 }}>
            {children}
        </Pressable>
    </Portal>
)