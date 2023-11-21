import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CoreStackParamListBase } from "../types";

export const useCoreStackNavigation = () => useNavigation<NavigationProp<CoreStackParamListBase>>();
