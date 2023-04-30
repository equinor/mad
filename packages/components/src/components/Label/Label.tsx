import { Typography, TypographyProps } from "../Typography";
import { View } from "react-native";
export type LabelProps = {
    label?: string;
    meta?: string;
};

export const Label = (props: LabelProps & TypographyProps) => {
    const { label, meta, ...other } = props;
    return <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Typography variant="label" color="textTertiary" {...other}>
            {label}
        </Typography>
        <Typography variant="label" color="textTertiary" {...other}>
            {meta}
        </Typography>
    </View>
}

Label.displayName = "Label";