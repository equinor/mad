import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { CoreStackParamListBase } from "../types";

export const useCoreStackNavigation = () => useNavigation<NavigationProp<CoreStackParamListBase>>();
export const useCoreStackRoute = () => useRoute<RouteProp<CoreStackParamListBase>>();
