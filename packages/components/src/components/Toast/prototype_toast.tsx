import { Text, View } from "react-native"
import { ToastType } from "./types"
import { getColorByToastType } from "./utils/getColorByToastType"

type Props = { message: string, type: ToastType }
/**
 * This is just an awful toast component used for prototyping
 */
export const PrototypeToast = ({ message, type }: Props) => {
    const color = getColorByToastType(type)
    return <View style={{ backgroundColor: color }}>
        <Text style={{ color: "white" }}>{message}</Text>
    </View>
}