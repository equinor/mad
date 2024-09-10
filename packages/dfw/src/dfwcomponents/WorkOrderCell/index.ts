import { WorkOrderCell as _WorkOrderCell } from "./WorkOrderCell";
import { WorkOrderCellNavigation } from "./WorkOrderCellNavigation";
import { WorkOrder, WorkOrderCellProps, StatusConfig } from "./types";

type WorkOrderCellFamily = typeof _WorkOrderCell & {
    Navigation: typeof WorkOrderCellNavigation;
};

const WorkOrderCell = _WorkOrderCell as WorkOrderCellFamily;
WorkOrderCell.Navigation = WorkOrderCellNavigation;

export { WorkOrderCell };
export type { WorkOrder, WorkOrderCellProps, StatusConfig };
