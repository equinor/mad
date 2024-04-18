import { act, render } from "@testing-library/react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import { SwipeableWithContext } from "../src/components/_internal/SwipeableWithContext";

describe("SwipeableWithContext", () => {
    it("Should let you reference the Swipeable", () => {
        const ref = React.createRef<Swipeable>();
        render(<SwipeableWithContext ref={ref} />);
        if (!ref.current) throw Error("Ref not set");
        const close = jest.spyOn(ref.current, "close");
        const openLeft = jest.spyOn(ref.current, "openLeft");
        const openRight = jest.spyOn(ref.current, "openRight");
        const reset = jest.spyOn(ref.current, "reset");

        act(() => ref.current?.close());
        expect(close).toBeCalled();
        act(() => ref.current?.openLeft());
        expect(openLeft).toBeCalled();
        act(() => ref.current?.openRight());
        expect(openRight).toBeCalled();
        act(() => ref.current?.reset());
        expect(reset).toBeCalled();
    });
});
