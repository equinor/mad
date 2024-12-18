import { fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { Cell } from "../src/components/Cell/Cell";
import { SwipeableMethods } from "../src/components/Cell/types";
import { renderWithTheme } from "../test-utils";

describe("Cell", () => {
    /**
     * Note: This test doesn't test if the methods are correct. That's an impossible task for a unit test. In fact, the methods log errors in this test.
     * This test simply checks if the methods are available
     */
    it.skip("Should make the available methods available in swipe-group's onPress event: `close`, `openLeft`, `openRight`, `reset`", () => {
        let close, openLeft, openRight, reset;
        const onPress = (methods: SwipeableMethods) => {
            try {
                if (!close) close = jest.spyOn(methods, "close");
                if (!openLeft) openLeft = jest.spyOn(methods, "openLeft");
                if (!openRight) openRight = jest.spyOn(methods, "openRight");
                if (!reset) reset = jest.spyOn(methods, "reset");
            } catch (e) {
                throw new Error(
                    "close, openLeft, openRight, and/or reset is not available in onPress",
                );
            }

            methods.close();
            methods.openLeft();
            methods.openRight();
            methods.reset();
        };
        const cell = (
            <Cell
                testID="CELL"
                key="CELL"
                leftSwipeGroup={[
                    {
                        title: "LEFT BUTTON",
                        color: "success",
                        onPress,
                    },
                ]}
                rightSwipeGroup={[
                    {
                        title: "RIGHT BUTTON",
                        color: "warning",
                        onPress,
                    },
                ]}
            />
        );

        renderWithTheme(cell);

        const left = screen.getByText("LEFT BUTTON");
        const right = screen.getByText("RIGHT BUTTON");

        fireEvent(left, "press");
        expect(close).toHaveBeenCalledTimes(1);
        expect(openLeft).toHaveBeenCalledTimes(1);
        expect(openRight).toHaveBeenCalledTimes(1);
        expect(reset).toHaveBeenCalledTimes(1);

        fireEvent(right, "press");
        expect(close).toHaveBeenCalledTimes(2);
        expect(openLeft).toHaveBeenCalledTimes(2);
        expect(openRight).toHaveBeenCalledTimes(2);
        expect(reset).toHaveBeenCalledTimes(2);
    });
});
