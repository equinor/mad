/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectWorkOrderSimple } from "./ProjectWorkOrderSimple";

export type ProjectWorkOrderBasic = ProjectWorkOrderSimple & {
  text: string;
  /**
   * The type of work order it is an instance of
   */
  workOrderTypeId: "projectWorkOrder";
  costWBS: string;
  plannerGroup: string;
  workCenter: string;
};
