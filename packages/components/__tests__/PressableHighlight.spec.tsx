import React from "react";
import { fireEvent, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { PressableHighlight } from "../src/components/PressableHighlight";
import { renderWithTheme } from "../test-utils";

describe("PressableHighlight", () => {
    it("keeps the overlay mounted through a disabled and re-enabled transition", () => {
        const onPress = jest.fn();
        const renderHighlight = (disabled: boolean) => (
            <PressableHighlight testID="highlight" disabled={disabled} onPress={onPress}>
                <Text testID="content">Up</Text>
            </PressableHighlight>
        );
        const { rerender } = renderWithTheme(renderHighlight(false));
        const content = screen.getByTestId("content");

        fireEvent(content, "pressIn");
        rerender(renderHighlight(true));
        expect(screen.getByTestId("content")).toBe(content);
        expect(screen.getByTestId("highlight").props.pointerEvents).toBe("box-none");
        fireEvent(content, "press");
        expect(onPress).not.toHaveBeenCalled();

        rerender(renderHighlight(false));
        expect(screen.getByTestId("content")).toBe(content);
        fireEvent(content, "press");
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("preserves pointerEvents none while disabled", () => {
        renderWithTheme(<PressableHighlight testID="highlight" pointerEvents="none" disabled />);
        expect(screen.getByTestId("highlight").props.pointerEvents).toBe("none");
    });
});
