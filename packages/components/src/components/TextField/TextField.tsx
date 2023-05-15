
import { TextInput } from "react-native";
import { Input, InputProps } from "../Input";
import React from "react";

export type TextFieldProps = Omit<InputProps, "leftAdornment" | "rightAdornment">

export const TextField = React.forwardRef<TextInput, TextFieldProps>(
    (
        props,
        ref
    ) => {
        return (
            <Input
                ref={ref}
                {...props}
            />
        );
    }
);

TextField.displayName = "TextField";
