import { Cell, IconName, SwitchColor } from "@equinor/mad-components";
import { NavigationProp } from "@react-navigation/native";
import { CoreStackParamListBase } from "../../../types";

export type SettingsScreenCellConfigurationItem =
    | {
          name: "navigation";
          title: string;
          onPress: (navigation: NavigationProp<CoreStackParamListBase>) => void;
          description?: string;
          iconName: IconName;
      }
    | {
          name: "button";
          title: string;
          onPress: () => void;
          color: Parameters<typeof Cell.Button>[0]["color"];
          iconName: IconName;
      }
    | {
          name: "switch";
          title: string;
          isActive: boolean;
          onChange: (isActive: boolean) => void;
          switchSize?: "small" | "normal";
          disabled?: boolean;
          description?: string;
          color?: SwitchColor;
          iconName: IconName;
      }
    | { name: "custom"; title: string; iconName: IconName; param: unknown };

export type SettingsScreenSectionProps = {
    title?: string;
    items: SettingsScreenCellConfigurationItem[];
};

export type SettingsScreenConfiguration = SettingsScreenSectionProps[];
