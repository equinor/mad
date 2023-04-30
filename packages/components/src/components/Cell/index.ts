import { CellGroup, CellGroupProps } from "./CellGroup";
import { Cell as _Cell, CellProps } from "./Cell";

type CellFamily = typeof _Cell & {
    Group: typeof CellGroup,
};

const Cell = _Cell as CellFamily;
Cell.Group = CellGroup

export {
    Cell,
    CellProps,
    CellGroupProps,
}