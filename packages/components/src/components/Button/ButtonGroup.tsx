import { Children, createContext, isValidElement, useMemo } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export type ButtonGroupProps = {
    vertical?: boolean;
};

export type ButtonGroupContextType = {
    isFirstItem: boolean;
    isLastItem: boolean;
}

export const ButtonGroupContext = createContext({
    isFirstItem: true,
    isLastItem: true,
} as ButtonGroupContextType);

export const ButtonGroup = ({
    vertical,
    children,
}: ButtonGroupProps & ViewProps) => {

    const validChildrenIndexes = useMemo(() => {
        const validChildren = Children.toArray(children).filter(child => isValidElement(child));
        return validChildren.map((_, index) => index);
    }, [children]);

    return (
        <View style={vertical ? styles.vertical : styles.horizontal}>
            {
                Children.map(children, (child, index) => {
                    return (
                        <ButtonGroupContext.Provider value={{
                            isFirstItem: index === validChildrenIndexes.at(0),
                            isLastItem: index === validChildrenIndexes.at(-1),
                        }}>
                            {child}
                        </ButtonGroupContext.Provider>);
                })
            }
        </View>
    );
};

ButtonGroup.displayName = "Button.Group";

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: "row",
        alignItems: "center"
    },
    vertical: {
        flexDirection: "column",
        alignItems: "center",
    }
});
