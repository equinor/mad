import { SelectMenu as _SelectMenu } from "./SelectMenu";
import { MultiselectMenu as _MultiselectMenu } from "./MultiselectMenu";

type SelectMenuFamily = typeof _SelectMenu & {
    Multiselect: typeof _MultiselectMenu;
};

const SelectMenu = _SelectMenu as SelectMenuFamily;
SelectMenu.Multiselect = _MultiselectMenu;

export { SelectMenu };
