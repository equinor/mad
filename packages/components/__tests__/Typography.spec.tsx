import { act } from "@testing-library/react-native";
import React, { createRef } from "react";
import { Text } from "react-native";
import { Typography } from "../src/components/Typography";
import { renderWithTheme } from "../test-utils";

describe("Typography", () => {
    it("Should forward the ref to the Text element", () => {
        const ref = createRef<Text>();
        renderWithTheme(<Typography ref={ref}>Typography</Typography>);
        const blur = jest.spyOn(ref.current, "blur");
        act(() => {
            //Text component has a blur method. Typography does not.
            ref.current?.blur();
        });
        expect(blur).toBeCalled();
    });
});
