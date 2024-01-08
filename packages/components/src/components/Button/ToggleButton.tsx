import React, { createContext } from "react";
import { ViewProps } from "react-native";
import { useValidChildren } from "../../hooks/useValidChildren";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonGroupChildrenType, ToggleButtonContextType } from "./types";

export type ToggleButtonProps = {
    /**
     * Index of the selected button.
     */
    activeIndex: number;
};

export const ToggleButtonContext = createContext<ToggleButtonContextType>(undefined);

export const ToggleButton = ({ activeIndex, children }: ToggleButtonProps & ViewProps) => {
    const validChildren = useValidChildren(children) as ButtonGroupChildrenType[];
    return (
        <ButtonGroup>
            {validChildren.map((child, index) => {
                return (
                    <ToggleButtonContext.Provider
                        key={index}
                        value={{
                            isSelected: activeIndex === index,
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
