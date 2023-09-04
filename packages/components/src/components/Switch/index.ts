import { Switch as _Switch, SwitchProps as SwitchProps } from "./Switch";

type ExtendedSwitch = typeof _Switch & {
    /**
     * Placeholder for other variants of Switch, like a grouped Switch.
     */
    // Group: typeof SwitchGroup; // Uncomment this when you have a SwitchGroup component
    /**
     * Placeholder for other potential extensions to the Switch component.
     */
    // OtherVariant: typeof SwitchOtherVariant; // Uncomment and rename as per your requirements
};

const Switch = _Switch as ExtendedSwitch;
// Switch.Group = SwitchGroup; // Uncomment this when you have a SwitchGroup component
// Switch.OtherVariant = SwitchOtherVariant; // Uncomment and rename as per your requirements

export { Switch, SwitchProps as SwitchProps };
