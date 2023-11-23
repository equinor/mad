import { Switch as _Switch, SwitchProps } from "./Switch";
import { SmallSwitch, SmallSwitchProps } from "./SmallSwitch";

type SwitchFamily = typeof _Switch & {
    Small: typeof SmallSwitch;
};

const Switch = _Switch as SwitchFamily;
Switch.Small = SmallSwitch;

export { Switch, SwitchProps, SmallSwitchProps };