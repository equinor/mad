import { IconName, NavigationCellProps, ButtonCellProps, SwitchCellProps } from "@equinor/mad-components";
import { NavigationProp } from "@react-navigation/native";
import { CoreStackParamListBase } from "../../../types";

export type SettingsScreenCellConfigurationItem =
    | ({
          name: "navigation";
      } & Omit<NavigationCellProps, "onPress"> & {onPress: (navigation: NavigationProp<CoreStackParamListBase>) => void})
    | ({
          name: "button";
      } & ButtonCellProps)
    | ({
          name: "switch";
      } & SwitchCellProps)
    | { name: "custom"; title: string; iconName: IconName; param: unknown };

export type SettingsScreenSectionProps = {
    title?: string;
    items: SettingsScreenCellConfigurationItem[];
};

export type SettingsScreenConfiguration = SettingsScreenSectionProps[];
