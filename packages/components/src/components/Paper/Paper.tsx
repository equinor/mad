import { View, ViewProps } from "react-native";
import {
    ElevationType,
    paperToken
} from "./Paper.tokens"

import { useDynamicStyle } from "../../hooks/useDynamicStyle"
import { elevationShadowStyleMap } from "../../translations/boxShadow";

export type PaperProps = {
    elevation: ElevationType
};

export const Paper = ({
    elevation = "none",
    children,
    ...rest
}: React.PropsWithChildren<PaperProps & ViewProps>) => {
    const shadowStyle = useDynamicStyle(() => {
        return elevationShadowStyleMap[elevation];
    }, [elevation])
    return(
        <View {...rest} style={[shadowStyle, {backgroundColor: paperToken.background}, rest.style]}>
            {children}
        </View>
    )
}
