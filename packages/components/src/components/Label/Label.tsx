import { TextProps } from "react-native";
import { Typography, TypographyProps } from "../Typography";

export type LabelProps = {
    label?: string;
};

export const Label = (props: LabelProps & TypographyProps) => {
    const { label, ...other } = props;
    return <Typography variant="label" {...other}>
        {label}
    </Typography>
}

Label.displayName = "Label";