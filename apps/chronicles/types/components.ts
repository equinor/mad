import { AccordionScreen } from "../screens/components/components/AccordionScreen";
import { AutocompleteScreen } from "../screens/components/components/AutocompleteScreen";
import { ButtonCellScreen } from "../screens/components/components/ButtonCellScreen";
import { ButtonScreen } from "../screens/components/components/ButtonScreen";
import { CellScreen } from "../screens/components/components/CellScreen";
import { ChipScreen } from "../screens/components/components/ChipScreen";
import { DialogScreen } from "../screens/components/components/DialogScreen";
import { EnvironmentScreen } from "../screens/components/components/EnvironmentScreen";
import { ErrorBoundaryScreen } from "../screens/components/components/ErrorBoundaryScreen";
import { InputScreen } from "../screens/components/components/InputScreen";
import { MenuScreen } from "../screens/components/components/MenuScreen";
import { NavigationCellScreen } from "../screens/components/components/NavigationCellScreen";
import { PaperScreen } from "../screens/components/components/PaperScreen";
import { PopoverScreen } from "../screens/components/components/PopoverScreen";
import { PortalScreen } from "../screens/components/components/PortalScreen";
import { ProgressIndicatorScreen } from "../screens/components/components/ProgressIndicatorScreen";
import { ProgressScreen } from "../screens/components/components/ProgressScreen";
import { SearchScreen } from "../screens/components/components/SearchScreen";
import { SelectScreen } from "../screens/components/components/SelectScreen";
import SelectionControlsScreen from "../screens/components/components/SelectionControlsScreen";
import { SwitchCellScreen } from "../screens/components/components/SwitchCellScreen";
import { TabsScreen } from "../screens/components/components/TabsScreen";
import { TextFieldScreen } from "../screens/components/components/TextFieldScreen";

export const ComponentConfig = {
    paper: PaperScreen,
    button: ButtonScreen,
    selectionControls: SelectionControlsScreen,
    popover: PopoverScreen,
    input: InputScreen,
    textField: TextFieldScreen,
    search: SearchScreen,
    cell: CellScreen,
    navigationCell: NavigationCellScreen,
    autocomplete: AutocompleteScreen,
    switchCell: SwitchCellScreen,
    buttonCell: ButtonCellScreen,
    accordion: AccordionScreen,
    menu: MenuScreen,
    progressIndicator: ProgressIndicatorScreen,
    portal: PortalScreen,
    dialog: DialogScreen,
    environment: EnvironmentScreen,
    errorBoundary: ErrorBoundaryScreen,
    chip: ChipScreen,
    tabs: TabsScreen,
    select: SelectScreen,
    progress: ProgressScreen,
} as const;

export const ComponentName: Record<ComponentType, string> = {
    paper: "Paper",
    button: "Button",
    selectionControls: "Selection controls",
    popover: "Popover",
    input: "Input",
    textField: "Text field",
    search: "Search",
    cell: "Cell",
    navigationCell: "Navigation cell",
    autocomplete: "Autocomplete",
    switchCell: "Switch cell",
    buttonCell: "Button cell",
    accordion: "Accordion",
    menu: "Menu",
    progressIndicator: "Progress indicator",
    portal: "Portal",
    dialog: "Dialog",
    environment: "Environment",
    errorBoundary: "Error boundary",
    chip: "Chip",
    tabs: "Tabs",
    select: "Select",
    progress: "Progress",
};

export type ComponentType = keyof typeof ComponentConfig;
