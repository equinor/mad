import { CellGroup, CellGroupProps } from "./CellGroup";
import { NavigationCell, NavigationCellProps } from "./NavigationCell";
import { Cell as _Cell, CellProps } from "./Cell";
import { CellSwipeItemProps } from "./types";

type CellFamily = typeof _Cell & {
    Group: typeof CellGroup;
    Navigation: typeof NavigationCell;
};

const Cell = _Cell as CellFamily;
Cell.Group = CellGroup
Cell.Navigation = NavigationCell;

export {
    Cell,
    CellProps,
    CellGroupProps,
    NavigationCellProps,
    CellSwipeItemProps as CellSwipeGroup
}