import { Button as _Button, ButtonProps } from "./Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";

type ExtendedButton = typeof _Button & {
    Group: typeof ButtonGroup,
    Toggle: typeof ToggleButton
}

const Button = _Button as ExtendedButton;
Button.Group = ButtonGroup;
Button.Toggle = ToggleButton;

export { Button, ButtonProps, ButtonGroupProps, ToggleButtonProps };