/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityReportBasic = {
  recordId: string;
  tagId: string | null;
  tagPlantId: string;
  equipmentId: string;
  title: string;
  text: string;
  isOpen: boolean;
  workCenterId: string;
  workCenterPlantId: string;
  /**
   * Active statuses for the Failure report with space as separating character
   */
  activeStatusIds: string;
  createdDateTime: string | null;
};
