/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderChangeLogBasicWithRelated } from "./WorkOrderChangeLogBasicWithRelated";

export type WorkOrderChangeLogs = {
  correctiveWorkOrdersChanged?: Array<WorkOrderChangeLogBasicWithRelated>;
  preventiveWorkOrdersChanged?: Array<WorkOrderChangeLogBasicWithRelated>;
  modificationWorkOrdersChanged?: Array<WorkOrderChangeLogBasicWithRelated>;
  sasChangeWorkOrdersChanged?: Array<WorkOrderChangeLogBasicWithRelated>;
  projectWorkOrdersChanged?: Array<WorkOrderChangeLogBasicWithRelated>;
  subseaWorkOrdersChanged?: Array<WorkOrderChangeLogBasicWithRelated>;
};
