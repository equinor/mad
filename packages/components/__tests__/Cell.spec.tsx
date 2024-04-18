import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { Cell } from "../src/components/Cell/Cell";
import { SwipeableMethods } from "../src/components/_internal/SwipeableWithContext";
describe("Cell", () => {
    /**
     * Note: This test doesn't test if the methods are correct. That's an impossible task for a unit test. In fact, the methods log errors in this test.
     * This test simply checks if the methods are available
     */
    it("Should make the available methods available in swipe-group's onPress event: `close`, `openLeft`, `openRight`, `reset`", () => {
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

        render(cell);

        const left = screen.getByText("LEFT BUTTON");
        const right = screen.getByText("RIGHT BUTTON");

        fireEvent(left, "press");
        expect(close).toBeCalledTimes(1);
        expect(openLeft).toBeCalledTimes(1);
        expect(openRight).toBeCalledTimes(1);
        expect(reset).toBeCalledTimes(1);

        fireEvent(right, "press");
        expect(close).toBeCalledTimes(2);
        expect(openLeft).toBeCalledTimes(2);
        expect(openRight).toBeCalledTimes(2);
        expect(reset).toBeCalledTimes(2);
    });
});
