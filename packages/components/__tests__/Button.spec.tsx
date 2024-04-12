import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Button } from "../src/components/Button/Button";

describe("Button", () => {
    it("Should display the title on screen", () => {
        render(<Button title="TITLE" />);
        //the test will fail if element is not found
        screen.getByText("TITLE");
    });
    it("Should run onPress event when pressed", () => {
        const mockOnPressFn = jest.fn();
        render(<Button title="Button" onPress={mockOnPressFn} />);
        fireEvent(screen.getByText("Button"), "press");
        expect(mockOnPressFn).toBeCalled();
    });
    it("Should run onPressIn event when pressed in", () => {
        const mockOnPressInFn = jest.fn();
        render(<Button title="Button" onPressIn={mockOnPressInFn} />);
        fireEvent(screen.getByText("Button"), "pressIn");
        expect(mockOnPressInFn).toBeCalled();
    });
    it("Should run onPressOut event when pressed out", () => {
        const mockOnPressOutFn = jest.fn();
        render(<Button title="Button" onPressOut={mockOnPressOutFn} />);
        fireEvent(screen.getByText("Button"), "pressOut");
        expect(mockOnPressOutFn).toBeCalled();
    });
    it("Should not run any of the press events when disabled", () => {
        const mockFn = jest.fn();
        render(
            <Button
                title="Button"
                onPress={mockFn}
                onPressIn={mockFn}
                onPressOut={mockFn}
                disabled
            />,
        );
        const button = screen.getByText("Button");
        fireEvent(button, "press");
        fireEvent(button, "pressIn");
        fireEvent(button, "pressOut");
        expect(mockFn).not.toBeCalled();
    });
});
