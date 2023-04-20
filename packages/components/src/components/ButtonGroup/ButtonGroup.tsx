import { Children, ReactNode, createContext, isValidElement } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export type ButtonGroupProps = {
    vertical?: boolean;
};

export type ButtonGroupContextContents = {
    index: number;
    length: number;
    valid: boolean;
}

export const ButtonGroupContext = createContext({
    valid: false,
    length: 0,
    index: -1
} as ButtonGroupContextContents);

export const ButtonGroup = (props: ButtonGroupProps & ViewProps) => {
    return (
        <View style={props.vertical ? styles.vertical : styles.horizontal}>
            {
                Children.map(props.children, (child: ReactNode, i: number) => {
                    console.log(i);
                    if (isValidElement(child)) {
                        return (<ButtonGroupContext.Provider value={{
                            index: i,
                            length: Children.count(props.children),
                            valid: true
                        }}>
                            {child}
                        </ButtonGroupContext.Provider>);
                    }
                    return <View />
                })
            }
        </View>
    );
};

ButtonGroup.displayName = "ButtonGroup";

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: "row"
    },
    vertical: {
        flexDirection: "column"
    }
});
