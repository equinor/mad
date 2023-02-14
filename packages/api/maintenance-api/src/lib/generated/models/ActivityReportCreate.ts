/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenanceRecordActivityCreate } from "./MaintenanceRecordActivityCreate";

export type ActivityReportCreate = {
  /**
   * Required to input either tag or equipment
   */
  tagId?: string | null;
  /**
   * Required to input either tag or equipment
   */
  tagPlantId?: string;
  /**
   * Required to input either tag or equipment
   */
  equipmentId?: string;
  /**
   * If workCenter is not provided, it will use default defined on tag/equipment
   */
  workCenterId?: string;
  /**
   * If workCenter is not provided, it will use default defined on tag/equipment
   */
  workCenterPlantId?: string;
  title: string;
  text: string;
  /**
   * If isOpen is not provided, it will be set by default to false
   */
  isOpen?: boolean;
  /**
   * Activities to add to the activity report on creation
   */
  activities?: Array<MaintenanceRecordActivityCreate>;
  /**
   * Defines a relationship to a specific part of a work order
   */
  relatedWorkOrder?: {
    /**
     * Work order id this activity report is related to
     */
    workOrderId?: string;
    /**
     * Defines the type of relationship to the work order
     */
    source?: "ObjectList" | "TechnicalFeedback";
    /**
     * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
     */
    sourceId?: string;
    /**
     * For source `TechnicalFeedback` these parameters are normally also supplied. If they are not supplied, the relationship between maintenance and technical feedback is of type optional.
     */
    technicalFeedbackParameters?: {
      statusId?: string;
      reasonId?: string;
    };
  };
};
