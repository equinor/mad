import { ViewProps, Pressable, Text, View } from "react-native";
import { ButtonGroup } from "../ButtonGroup";
import { Children, ReactNode, createContext, isValidElement, useState } from "react";

export type ToggleButtonProps = {
    multiple?: boolean;
    onChange: (indices: number[]) => void;
}

export type ToggleButtonContextContents = {
    isSelected: boolean;
    valid: boolean;
};

export const ToggleButtonContext = createContext({
    isSelected: false,
    valid: false
} as ToggleButtonContextContents);

export const ToggleButton = (props: ToggleButtonProps & ViewProps) => {
    let [selectedIndices, setSelectedIndices] = useState([0]);
    return <ButtonGroup>
        {
            Children.map(props.children, (child: ReactNode, index: number) => {
                return <ToggleButtonContext.Provider value={{
                    isSelected: selectedIndices.indexOf(index) !== -1,
                    valid: true
                }}>
                    <Pressable onPress={() => {
                        if (props.multiple) {
                            if (selectedIndices.indexOf(index) === -1) {
                                setSelectedIndices([...selectedIndices, index]);
                            } else {
                                setSelectedIndices(selectedIndices.filter((current) => current !== index));
                            }
                        } else {
                            setSelectedIndices([index]);
                        }
                        props.onChange(selectedIndices);
                    }}>
                        {child}
                    </Pressable>
                </ToggleButtonContext.Provider>;
            })
        }
    </ButtonGroup>
}

ToggleButton.displayName = "ToggleButton";