import type { HexColorValue, RGBAColorValue } from "./types"

export const isHexColorValue = (obj: string): obj is HexColorValue => obj.startsWith("#");
export const isRGBAColorValue = (obj: string): obj is RGBAColorValue => obj.startsWith("rgba");