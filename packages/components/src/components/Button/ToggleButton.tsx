import { ViewProps } from "react-native";
import { ButtonGroup } from "./ButtonGroup";
import { Children, ReactNode, createContext, useState } from "react";

export type ToggleButtonProps = {
    multiple?: boolean;
    onChange?: (indices: number[]) => void;
}

export type ToggleButtonContextContents = {
    isSelected: boolean;
    valid: boolean;
    toggle: () => void;
};

export const ToggleButtonContext = createContext({
    isSelected: false,
    valid: false,
    toggle: () => {
        // eslint-disable-next-line no-console
        console.log("Unintialized ToggleButtonContext");
    }
} as ToggleButtonContextContents);

export const ToggleButton = (props: ToggleButtonProps & ViewProps) => {
    const [selectedIndices, setSelectedIndices] = useState([0]);
    return <ButtonGroup>
        {
            Children.map(props.children, (child: ReactNode, index: number) => {
                return <ToggleButtonContext.Provider value={{
                    isSelected: selectedIndices.indexOf(index) !== -1,
                    valid: true,
                    toggle: () => {
                        let result = [];
                        if (props.multiple) {
                            if (selectedIndices.indexOf(index) === -1) {
                                result = [...selectedIndices, index];
                            } else {
                                result = selectedIndices.filter((current) => current !== index)
                            }
                        } else {
                            result = [index];
                        }
                        setSelectedIndices(result);
                        props.onChange && props.onChange(result);
                    }
                }}>
                    {child}
                </ToggleButtonContext.Provider>;
            })
        }
    </ButtonGroup>
}

ToggleButton.displayName = "Button.Toggle";