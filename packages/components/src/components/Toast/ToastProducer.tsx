import { View } from "react-native";
import { useToasts } from "./hooks/useToasts"
import { PrototypeToast } from "./prototype_toast";

const PrototypeEmitter = (props: { subscriptionKey: string, direction: string, amount: number }) => {
    const toasts = useToasts();
    return <>
        {
            toasts.map((toast, index) => <PrototypeToast key={index}{...toast} />)
        }
    </>
}