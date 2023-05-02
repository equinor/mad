import { useToken } from "../../hooks/useToken";
import { Color, resolveColor } from "../../styling";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

export type IconProps = {
    name: IconName;
    size?: number;
    color?: Color;
};

export const Icon = ({
    name,
    size,
    color,
}: IconProps) => {
    const token = useToken();
    return <MaterialCommunityIcons name={name} size={size ?? token.geometry.dimension.icon.size} color={resolveColor(color ?? "textPrimary", token)} />
};

Icon.displayName = "Icon";