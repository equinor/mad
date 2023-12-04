import {
    createBottomTabNavigatorFactory,
    createNativeStackNavigatorFactory,
} from "@equinor/mad-navigation";
import { MadCoreSubHeader } from "./MadCoreSubHeader";

export const createBottomTabNavigator = createBottomTabNavigatorFactory(MadCoreSubHeader);
export const createNativeStackNavigator = createNativeStackNavigatorFactory(MadCoreSubHeader);
