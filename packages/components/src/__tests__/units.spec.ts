import { convertToUnitlessNumber } from "../translations/units";

describe("Unitless converter", () => {
    it("should convert px value to unitless value", () => {
        const input = "10px";
        const expected = 10;
        expect(convertToUnitlessNumber(input)).toEqual(expected);
    });
    it("should convert em value to unitless value", () => {
        const input = "10em";
        const expected = 170;
        expect(convertToUnitlessNumber(input)).toEqual(expected);
    });
    it("should convert rem value to unitless value", () => {
        const input = "1rem";
        const expected = 17;
        expect(convertToUnitlessNumber(input)).toEqual(expected);
    });
    it("should handle period decimal values", () => {
        const input = "2.0rem";
        const expected = 34;
        expect(convertToUnitlessNumber(input)).toEqual(expected);
    })
    it("should handle comma decimal values", () => {
        const input = "2,0em";
        const expected = 34;
        expect(convertToUnitlessNumber(input)).toEqual(expected);
    })
});