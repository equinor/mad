import { tokens } from '@equinor/eds-tokens';
import { Pressable, StyleSheet, View, Text } from 'react-native';

export interface ButtonProps {
    title: string;
    fuiRef?: any;
    onPress: any;
}

export function Button(props: ButtonProps) {
    return (
        <Pressable collapsable={false} ref={props.fuiRef} style={({pressed}) => {
            return pressed ? styles.containerPressed : styles.containerResting
        }} onPress={props.onPress}>
            <View>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    containerResting: {
        backgroundColor: tokens.colors.interactive.primary__resting.hex,
        borderRadius: 2,
        padding: 8
    },
    containerPressed: {
        backgroundColor: tokens.colors.interactive.pressed_overlay_dark.hex,
        borderRadius: 2,
        padding: 8
    },
    text: {
        color: "white"
    }
});