import type { TechnicalFeedback } from './TechnicalFeedback';
import type { WorkOrderOperation } from './WorkOrderOperation';
export type CorrectiveWorkOrderOperation = (WorkOrderOperation & {
    /**
     * Technical feedback to be completed as part of work order execution
     */
    technicalFeedback?: Array<TechnicalFeedback>;
});
