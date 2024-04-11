import React, { LegacyRef, MutableRefObject, RefObject, createRef } from "react";
import { act, render } from "@testing-library/react-native";
import { Typography } from "../src/components/Typography";
import { Text } from "react-native";

describe("Typography", () => {
    it("Should forward the ref to the Text element", () => {
        const ref = createRef<Text>();
        render(<Typography ref={ref}>Typography</Typography>);
        //@ts-expect-error current can be null, but we don't care
        const blur = jest.spyOn(ref.current, "blur");
        act(() => {
            //Text component has a blur method. Typography does not.
            ref.current?.blur();
        });
        expect(blur).toBeCalled();
    });
});
