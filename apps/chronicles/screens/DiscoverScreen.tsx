import { ScrollView, StyleSheet } from "react-native";
import { DiscoverStackParamList } from "../types";

import { NavigationCell, NavigationCellList } from "@equinor/mad-components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function DiscoverScreen({
  navigation,
}: NativeStackScreenProps<DiscoverStackParamList>) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <NavigationCellList>
        <NavigationCell title="Paper" description="Multiple elevations and shadows" onPress={() => navigation.navigate("Paper")} />
        <NavigationCell title="Button" description="Buttons, buttons, and more buttons!" onPress={() => navigation.navigate("Button")} />
        <NavigationCell title="Popover" description="Contaner floating over some reference element" onPress={() => navigation.navigate("Popover")} />
      </NavigationCellList>
    </ScrollView>
  );
}
