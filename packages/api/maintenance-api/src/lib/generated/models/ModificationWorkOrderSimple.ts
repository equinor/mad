/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModificationWorkOrderSimple = {
  workOrderId: string;
  tagId: string | null;
  tagPlantId: string;
  tag: string;
  title: string;
  workCenterId: string;
  workCenterPlantId: string;
  /**
   * Maintenance record id which has initiated this work order
   */
  modificationProposalId: string;
  /**
   * Structured location within the plant where the tag is located
   */
  locationId: string;
  plantId: string;
  planningPlantId: string;
  plannerGroupId: string;
  /**
   * Active statuses for the Failure report with space as separating character
   */
  activeStatusIds: string;
  maintenanceTypeId: string;
  maintenanceType: string;
  /**
   * An identifier to the revision (shutdown or campaign work) this work order is related to
   */
  revisionId: string;
  /**
   * Name of the revision (shutdown or campaign work) this work order is related to
   */
  revision: string;
  basicStartDateTime: string | null;
  basicEndDateTime: string | null;
  createdDateTime: string | null;
  changedDateTime: string | null;
  costWBSId: string;
  /**
   * The primary cost wbs is typically resolved from the provided tag, but for modification work orders it is required to have an additional cost wbs in place before the work order can be set to status `REL - Released`
   */
  additionalCostWBSId?: string;
  projectId: string;
  /**
   * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
   */
  sortField: string;
};
