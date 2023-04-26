import { Typography } from "../Typography";

export type LabelProps = {
    label?: string;
};

export const Label = (props: LabelProps) => {
    return <Typography variant="label">
        {props.label}
    </Typography>
}

Label.displayName = "Label";