import { ViewProps } from "react-native";
import { ButtonGroup } from "./ButtonGroup";
import React, { Children, ReactNode, createContext, useState } from "react";

export type ToggleButtonProps = {
    /**
     * A boolean value indicating whether or not multiple containing buttons should be allowed to be active at the same time.
     */
    multiple?: boolean;
    /**
     * A callback method invoked when a user presses one of the containing buttons in the toggle group.
     * @param indices A list of indicies refering to the active buttons in the toggle group.
     */
    onChange?: (indices: number[]) => void;
};

export type ToggleButtonContextContents = {
    /**
     * Boolean value indicating whether or not the contexed button is selected or not.
     */
    isSelected: boolean;
    /**
     * Boolean value indicating whether or not the contexed component passes validation (i.e is a button).
     */
    valid: boolean;
    /**
     * A callback method invokable by the contexed button for when the user presses it.
     */
    toggle: () => void;
};

export const ToggleButtonContext = createContext({
    isSelected: false,
    valid: false,
    toggle: () => {
        console.warn("Unintialized ToggleButtonContext");
    },
} as ToggleButtonContextContents);

export const ToggleButton = (props: ToggleButtonProps & ViewProps) => {
    const [selectedIndices, setSelectedIndices] = useState([0]);
    return (
        <ButtonGroup>
            {Children.map(props.children, (child: ReactNode, index: number) => {
                return (
                    <ToggleButtonContext.Provider
                        value={{
                            isSelected: selectedIndices.indexOf(index) !== -1,
                            valid: true,
                            toggle: () => {
                                let result = [];
                                if (props.multiple) {
                                    if (selectedIndices.indexOf(index) === -1) {
                                        result = [...selectedIndices, index];
                                    } else {
                                        result = selectedIndices.filter(
                                            current => current !== index,
                                        );
                                    }
                                } else {
                                    result = [index];
                                }
                                setSelectedIndices(result);
                                props.onChange && props.onChange(result);
                            },
                        }}
                    >
                        {child}
                    </ToggleButtonContext.Provider>
                );
            })}
        </ButtonGroup>
    );
};

ToggleButton.displayName = "Button.Toggle";
