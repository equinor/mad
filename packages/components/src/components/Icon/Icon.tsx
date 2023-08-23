import React from "react";
import { TextStyle } from "react-native";
import { useToken } from "../../hooks/useToken";
import { Color, resolveColor } from "../../styling";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

export type IconProps = {
	/**
	 * The name of the icon.
	 */
	name: IconName;
	/**
	 * The size of the icon.
	 */
	size?: number;
	/**
	 * The color of the icon.
	 */
	color?: Color;
	/**
	 * A custom text style applied to the icon.
	 * The icon is treated as a font character and will therefore respond to text style values.
	 */
	style?: TextStyle;
};

export const Icon = ({ name, size, color, style }: IconProps) => {
	const token = useToken();
	return (
		<MaterialCommunityIcons
			name={name}
			size={size ?? token.geometry.dimension.icon.size}
			color={resolveColor(color ?? "textPrimary", token)}
			style={style}
		/>
	);
};

Icon.displayName = "Icon";
Icon.displayName = "Icon";
