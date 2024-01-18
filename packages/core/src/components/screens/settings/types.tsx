import { NavigationCellProps, ButtonCellProps, SwitchCellProps } from "@equinor/mad-components";
import { NavigationProp } from "@react-navigation/native";
import { CoreStackParamListBase } from "../../../types";
import { ReactNode } from "react";

export type SettingsScreenCellConfigurationItem =
    | ({
          name: "navigation";
      } & Omit<NavigationCellProps, "onPress"> & {
              onPress: (navigation: NavigationProp<CoreStackParamListBase>) => void;
          })
    | ({
          name: "button";
      } & ButtonCellProps)
    | ({
          name: "switch";
      } & SwitchCellProps)
    | { name: "custom"; key: string; component: () => ReactNode };

export type SettingsScreenSectionProps = {
    title?: string;
    items: SettingsScreenCellConfigurationItem[];
};

export type SettingsScreenConfiguration = SettingsScreenSectionProps[];
