import { ButtonProps } from "./Button";

export type ToggleButtonContextType =
    | {
          /**
           * Boolean value indicating whether or not the contexed button is selected or not.
           */
          isSelected: boolean;
      }
    | undefined;

export type ButtonGroupChildrenType = React.ReactElement<ButtonProps> | boolean | null | undefined;
