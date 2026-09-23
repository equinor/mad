import React, { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

type RootModalProps = {
    /**
     * Callback method invoked when the user presses outside the child content.
     */
    onBackdropPress?: () => void;
    /**
     * Added a visible prop so the Modal knows when to mount
     */
    visible?: boolean;
};

export const RootModal = ({
    onBackdropPress,
    visible = true,
    children
}: PropsWithChildren<RootModalProps>) => (
    <Modal
        visible={visible}
        transparent={true}
        animationType="none"
        onRequestClose={onBackdropPress}
    >
        {onBackdropPress ? (
            <Pressable
                onPress={onBackdropPress}
                style={StyleSheet.absoluteFill}
            >
                <Pressable style={StyleSheet.absoluteFill} pointerEvents="box-none">
                    {children}
                </Pressable>
            </Pressable>
        ) : (
            <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
                {children}
            </View>
        )}
    </Modal>
);
