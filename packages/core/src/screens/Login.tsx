import React from "react"
import { Button, View } from "react-native"
export type LoginProps = {onNavigate: () => void}
export const Login = ({onNavigate}: LoginProps) => {
    return <View>
        <Button title="Login" onPress={onNavigate} />
    </View>
}