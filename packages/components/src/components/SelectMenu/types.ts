import { IconName } from "../Icon";

// Represents a single option within the select menu.
export type SelectMenuItem<T> = {
    /**
     * The display text of the menu item.
     */
    title: string;
    /**
     * The value associated with the menuc item.
     */
    value: T;
    /**
     * Icon to display alongside the menu item's title.
     * Displayed to the left of the title.
     */
    icon?: IconName;
};
