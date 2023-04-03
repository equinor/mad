import { View, Text } from "react-native";

export type CellIconProps = {
    iconName: string
};

export const CellIcon = ({
    iconName
}: CellIconProps) => {
    return <View>
        <Text>{iconName}</Text>
    </View>
};