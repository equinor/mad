import { View, ViewProps } from "react-native";
import { useFloating, shift, offset } from "@floating-ui/react-native";
import { useRef, useState } from "react";
import { Button } from "../Button";
import { Popover } from "../Popover";

export interface PopoverContainerProps extends ViewProps {
    offset?: number;
    buttonTitle: string;
    popoverText: string;
}

export function PopoverContainer(props: PopoverContainerProps) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    let { x, y, refs, middlewareData } = useFloating({
        middleware: [shift(), offset(props.offset ?? 3)],
        placement: "top",
    });
    return (
        <View style={props.style}>
            <Button
                title={props.buttonTitle}
                fuiRef={refs.setReference}
                onPress={() => {
                    setPopoverOpen(!popoverOpen);
                }}
            ></Button>
            <Popover
                text={props.popoverText}
                left={x ?? 0}
                top={y ?? 0}
                fuiRef={refs.setFloating}
                open={popoverOpen}
            ></Popover>
        </View>
    );
}
