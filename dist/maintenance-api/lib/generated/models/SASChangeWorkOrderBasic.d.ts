import type { SASChangeWorkOrderSimple } from './SASChangeWorkOrderSimple';
export type SASChangeWorkOrderBasic = (SASChangeWorkOrderSimple & {
    text: string;
    /**
     * The type of work order it is an instance of
     */
    workOrderTypeId: 'sasChangeWorkOrder';
    costWBS: string;
    plannerGroup: string;
    workCenter: string;
});
