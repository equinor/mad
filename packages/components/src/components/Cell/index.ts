import { CellGroup, CellGroupProps } from "./CellGroup";
import { NavigationCell, NavigationCellProps } from "./NavigationCell";
import { Cell as _Cell, CellProps } from "./Cell";
import { CellSwipeItemProps } from "./types";

type CellFamily = typeof _Cell & {
    /**
     * A container for grouping cells togehter. The child cells visually come together inside a group.
     */
    Group: typeof CellGroup;
    /**
     * A predefined cell covering most use cases for navigating.
     */
    Navigation: typeof NavigationCell;
};

const Cell = _Cell as CellFamily;
Cell.Group = CellGroup;
Cell.Navigation = NavigationCell;

export {
    Cell,
    CellProps,
    CellGroupProps,
    NavigationCellProps,
    CellSwipeItemProps,
};
