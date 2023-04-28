import { ViewProps } from "react-native";
import { Typography } from "../Typography";

export type LabelProps = {
    label?: string;
};

export const Label = (props: LabelProps & ViewProps) => {
    const { label, ...other } = props;
    return <Typography variant="label" {...other}>
        {label}
    </Typography>
}

Label.displayName = "Label";