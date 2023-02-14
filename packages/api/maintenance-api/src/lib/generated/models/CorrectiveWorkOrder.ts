/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";
import type { CorrectiveWorkOrderBasic } from "./CorrectiveWorkOrderBasic";
import type { CorrectiveWorkOrderOperation } from "./CorrectiveWorkOrderOperation";
import type { MaintenanceRecordMinimal } from "./MaintenanceRecordMinimal";
import type { Status } from "./Status";
import type { TagBasic } from "./TagBasic";
import type { TagRelatedToWorkOrder } from "./TagRelatedToWorkOrder";

export type CorrectiveWorkOrder = CorrectiveWorkOrderBasic & {
  operations?: Array<CorrectiveWorkOrderOperation>;
  /**
   * All statuses possible with information about activation
   */
  statuses?: Array<Status>;
  /**
   * Related tags
   */
  tagsRelated?: Array<TagRelatedToWorkOrder>;
  /**
   * Related tags
   */
  maintenanceRecords?: Array<MaintenanceRecordMinimal>;
  tagDetails?: TagBasic;
  /**
   * Attachments to Work order header
   */
  attachments?: Array<Attachment>;
};
