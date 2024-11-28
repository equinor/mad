import {
    createBottomTabNavigatorFactory,
    createNativeStackNavigatorFactory,
    createStackNavigatorFactory,
} from "@equinor/mad-navigation";
import { MadCoreSubHeader } from "./MadCoreSubHeader";

export const createBottomTabNavigator = createBottomTabNavigatorFactory(MadCoreSubHeader);
export const createNativeStackNavigator = createNativeStackNavigatorFactory(MadCoreSubHeader);
export const createStackNavigator = createStackNavigatorFactory(MadCoreSubHeader);