import { Button as _Button, ButtonProps } from "./Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";
import { IconButton, IconButtonProps } from "./IconButton";

type ExtendedButton = typeof _Button & {
    Group: typeof ButtonGroup;
    Toggle: typeof ToggleButton;
    Icon: typeof IconButton;
}

const Button = _Button as ExtendedButton;
Button.Group = ButtonGroup;
Button.Toggle = ToggleButton;
Button.Icon = IconButton;

export {
    Button,
    ButtonProps,
    ButtonGroupProps,
    ToggleButtonProps,
    IconButtonProps,
};