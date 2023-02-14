/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Equipment } from "../models/Equipment";
import type { MaintenancePlan } from "../models/MaintenancePlan";
import type { MaintenancePlanItem } from "../models/MaintenancePlanItem";
import type { Plant } from "../models/Plant";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { Tag } from "../models/Tag";
import type { TaskListOperationBasic } from "../models/TaskListOperationBasic";
import type { TaskWorkOrderOperationCreate } from "../models/TaskWorkOrderOperationCreate";
import type { TaskWorkOrderOperationJsonPatch } from "../models/TaskWorkOrderOperationJsonPatch";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ModifiedEndpointsService {
  /**
   * Equipment - Lookup
   * ### Overview
   * Lookup a single equipment with related maintenance information.
   *
   * The endpoint has several include query parameters which allows a client to retrieve only the information which is relevant for their use case.
   *
   * ### Important information
   * For warehouse and logistics data of an equipment, use SCM Logistics API.
   *
   * ### Example usage
   * `/equipment/11948620?include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteritics=true&include-status-details=true&api-version=v1` - Lookup equipment with status details and characteristics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
   *
   * ### Update release v1.4.0
   * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
   *
   * ### Update release v1.5.0
   * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
   *
   * Bugfix for include-work-orders related to deleted equipment reservations.
   *
   * Added revisionId and revision to related work orders (represents shutdown or campaign work).
   *
   * ### Update release v1.6.0
   * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
   *
   * ### Update release v1.7.0
   * Added property parentEquipmentId.
   *
   * ### Update release v1.8.0
   * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
   *
   * ### Update release v1.10.0
   * Added property `maintenanceRecordId` to measurements of measuring points.
   *
   * ### Update release v1.12.0
   * Added properties `equipmentCategoryId` and `quantityUnitId`.
   *
   * ### Update release v1.14.0
   * Added query parameter `include-attachments`.
   *
   * @returns Equipment Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static lookupEquipment({
    equipmentId,
    includeMaintenanceRecords = true,
    includeMaintenanceRecordTypes,
    includeOnlyOpenMaintenanceRecords = false,
    includeWorkOrders = true,
    includeWorkOrderTypes,
    includeOnlyOpenWorkOrders = false,
    includeCatalogProfileDetails = false,
    includeCharacteristics = false,
    includeAttachments = false,
    includeMeasuringPoints = false,
    includeLastMeasurement = false,
    includeStatusDetails = false,
  }: {
    /**
     * The unique equipmentId in Equinor's system
     */
    equipmentId: string;
    /**
     * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
     */
    includeMaintenanceRecords?: boolean;
    /**
     * Include which types of maintenance records
     */
    includeMaintenanceRecordTypes?: Array<
      | "modification-proposal"
      | "failure-report"
      | "activity-report"
      | "certification-report"
      | "technical-information-update-request"
      | "technical-clarification"
    >;
    /**
     * Limit include-maintenance-records to only open maintenance records
     */
    includeOnlyOpenMaintenanceRecords?: boolean;
    /**
     * Include work orders. If include-work-order-types is not supplied, all support types are returned
     */
    includeWorkOrders?: boolean;
    /**
     * Include which types of work orders. Use comma-separated list of entries.
     */
    includeWorkOrderTypes?: Array<
      | "correctiveWorkOrders"
      | "preventiveWorkOrders"
      | "modificationWorkOrders"
      | "sasChangeWorkOrders"
      | "projectWorkOrders"
      | "subseaWorkOrders"
    >;
    /**
     * Limit include-work-orders to only open work order
     */
    includeOnlyOpenWorkOrders?: boolean;
    /**
     * Include possible detection methods, failure modes and failure mechanisms
     */
    includeCatalogProfileDetails?: boolean;
    /**
     * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
     */
    includeCharacteristics?: boolean;
    /**
     * Include equipment attachments
     */
    includeAttachments?: boolean;
    /**
     * Include measuring points for this tag
     */
    includeMeasuringPoints?: boolean;
    /**
     * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
     */
    includeLastMeasurement?: boolean;
    /**
     * Include detailed information for statuses (both active and non-active)
     */
    includeStatusDetails?: boolean;
  }): CancelablePromise<Equipment | ProblemDetails> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/equipment/{equipment-id}",
      path: {
        "equipment-id": equipmentId,
      },
      query: {
        "include-maintenance-records": includeMaintenanceRecords,
        "include-maintenance-record-types": includeMaintenanceRecordTypes,
        "include-only-open-maintenance-records":
          includeOnlyOpenMaintenanceRecords,
        "include-work-orders": includeWorkOrders,
        "include-work-order-types": includeWorkOrderTypes,
        "include-only-open-work-orders": includeOnlyOpenWorkOrders,
        "include-catalog-profile-details": includeCatalogProfileDetails,
        "include-characteristics": includeCharacteristics,
        "include-attachments": includeAttachments,
        "include-measuring-points": includeMeasuringPoints,
        "include-last-measurement": includeLastMeasurement,
        "include-status-details": includeStatusDetails,
      },
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }

  /**
   * Plants - Lookup
   * ### Overview
   * Lookup a single plant with related information.
   *
   * ### Update version 1.6.0
   * Added `include-revisions` for reading master data on revisions for the `planningPlantId` of the provided `plantId`.
   *
   * ### Update version 1.7.0
   * Added `include-systems` query parameter.
   *
   * ### Update version 1.13.0
   * Added `include-equipment-catalog-profiles` query parameter.
   *
   * ### Update version 1.14.0
   * Added `include-only-default-tag-catalog-profiles` query parameter to limit the response from `include-tag-catalog-profiles` and/or `include-equipment-catalog-profiles`
   *
   * Updated PlanningPlantRevision-model.
   *
   * @returns Plant Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static lookupPlant({
    plantId,
    includeLocations = false,
    includeWorkCenters = false,
    includePlannerGroups = false,
    includeTagCatalogProfiles = false,
    includeEquipmentCatalogProfiles = false,
    includeOnlyDefaultCatalogProfiles = false,
    includeSurfaceDegradationFactors = false,
    includeRevisions = false,
    includeSystems = false,
  }: {
    plantId: string;
    /**
     * Include location for plant
     */
    includeLocations?: boolean;
    /**
     * Include work centers for plant
     */
    includeWorkCenters?: boolean;
    /**
     * Include planner groups for plant
     */
    includePlannerGroups?: boolean;
    /**
     * Include tag catalog profiles in use for plant
     */
    includeTagCatalogProfiles?: boolean;
    /**
     * Include equipment catalog profiles in use for plant
     */
    includeEquipmentCatalogProfiles?: boolean;
    /**
     * Use this in combination with `include-tag-catalog-profiles=true` and/or `include-equipment-catalog-profiles=true` to improve performance.
     *
     */
    includeOnlyDefaultCatalogProfiles?: boolean;
    /**
     * Include surface degradations for plant
     */
    includeSurfaceDegradationFactors?: boolean;
    /**
     * Include revisions for plant
     */
    includeRevisions?: boolean;
    /**
     * Include systems for plant
     */
    includeSystems?: boolean;
  }): CancelablePromise<Plant | ProblemDetails> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/plants/{plant-id}",
      path: {
        "plant-id": plantId,
      },
      query: {
        "include-locations": includeLocations,
        "include-work-centers": includeWorkCenters,
        "include-planner-groups": includePlannerGroups,
        "include-tag-catalog-profiles": includeTagCatalogProfiles,
        "include-equipment-catalog-profiles": includeEquipmentCatalogProfiles,
        "include-only-default-catalog-profiles":
          includeOnlyDefaultCatalogProfiles,
        "include-surface-degradation-factors": includeSurfaceDegradationFactors,
        "include-revisions": includeRevisions,
        "include-systems": includeSystems,
      },
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }

  /**
   * Tag - Search
   * Search tags for a plant based on the first few characters of the tag.
   *
   * The results include key information for a tag.
   * Additional information for each tag can be retrieved by using the endpoint `/plants/{plant-id}/tags/{tag-id}`.
   *
   * If there are no tags found for the search, the response will be HTTP 200 with an empty array as content.
   *
   * ### Important information
   * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
   *
   * The value of the tag-prefix parameter should be url-encoded in order to support special characters
   *
   * ### Examples
   * `/plants/1219/tags?tag-prefix=44&api-version=v1`
   *
   * `/plants/1100/tags?tag-prefix=02%22-EC-%202525-M&api-version=v1`
   *
   * ### Update 1.14.0
   * Added support for filter `by-tag-ids` with accompanying parameter `tag-ids-any-of`
   * Filter is not required and defaults to `by-tag-prefix` to keep backwards compatibility.
   *
   * Added options to include more data using the same data model as on `Tag - Lookup`, but all includes are defaulted
   * to false.
   *
   * `by-tag-prefix` filter now supports wildcards (`*`) in the tag prefix
   *
   * Edited the response structure to support pagination if filter `by-tag-prefix` is set. Use the parameters `page` and `per-page` in the parameters to edit wanted response.
   *
   * @returns Tag Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static searchTags({
    plantId,
    filter = "by-tag-prefix",
    tagPrefix,
    tagIdsAnyOf,
    includeMaintenanceRecords = false,
    includeMaintenanceRecordTypes,
    includeWorkOrders = false,
    includeWorkOrderTypes,
    includeInstalledEquipment = false,
    includeCatalogProfileDetails = false,
    includeMaintenancePlanItems = false,
    includeMeasuringPoints = false,
    includeLastMeasurement = false,
    includeCharacteristics = false,
    includeBillOfMaterials = false,
    perPage = 100,
    page = 1,
  }: {
    plantId: string;
    filter?: "by-tag-ids" | "by-tag-prefix" | null;
    /**
     * The first few characters of the tag, required if filter is empty or `by-tag-prefix`
     */
    tagPrefix?: string | null;
    /**
     * The tagIds as a comma separated list, required if filter is `by-tag-ids`
     */
    tagIdsAnyOf?: Array<string>;
    /**
     * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
     */
    includeMaintenanceRecords?: boolean;
    /**
     * Include which types of maintenance records
     */
    includeMaintenanceRecordTypes?: Array<
      | "failure-report"
      | "activity-report"
      | "certification-report"
      | "technical-information-update-request"
      | "technical-clarification"
    >;
    /**
     * Include work orders. If include-work-order-types is not supplied, all support types are returned
     */
    includeWorkOrders?: boolean;
    /**
     * Include which types of work orders. Use comma-separated list of entries.
     */
    includeWorkOrderTypes?: Array<
      | "correctiveWorkOrders"
      | "preventiveWorkOrders"
      | "modificationWorkOrders"
      | "sasChangeWorkOrders"
      | "projectWorkOrders"
      | "subseaWorkOrders"
    >;
    /**
     * Include installed equipment
     */
    includeInstalledEquipment?: boolean;
    /**
     * Include possible detection methods, failure modes and failure mechanisms
     */
    includeCatalogProfileDetails?: boolean;
    /**
     * Include Maintenance Plan items this functional location is part of
     */
    includeMaintenancePlanItems?: boolean;
    /**
     * Include measuring points for this tag
     */
    includeMeasuringPoints?: boolean;
    /**
     * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
     */
    includeLastMeasurement?: boolean;
    /**
     * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
     */
    includeCharacteristics?: boolean;
    /**
     * Include bill of materials (also known as structure list) for tag and installed equipment
     */
    includeBillOfMaterials?: boolean;
    /**
     * Results to return pr page
     */
    perPage?: number;
    /**
     * Page to fetch
     */
    page?: number;
  }): CancelablePromise<Array<Tag> | ProblemDetails> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/plants/{plant-id}/tags",
      path: {
        "plant-id": plantId,
      },
      query: {
        filter: filter,
        "tag-prefix": tagPrefix,
        "tag-ids-any-of": tagIdsAnyOf,
        "include-maintenance-records": includeMaintenanceRecords,
        "include-maintenance-record-types": includeMaintenanceRecordTypes,
        "include-work-orders": includeWorkOrders,
        "include-work-order-types": includeWorkOrderTypes,
        "include-installed-equipment": includeInstalledEquipment,
        "include-catalog-profile-details": includeCatalogProfileDetails,
        "include-maintenance-plan-items": includeMaintenancePlanItems,
        "include-measuring-points": includeMeasuringPoints,
        "include-last-measurement": includeLastMeasurement,
        "include-characteristics": includeCharacteristics,
        "include-bill-of-materials": includeBillOfMaterials,
        "per-page": perPage,
        page: page,
      },
      errors: {
        400: `Request is missing required parameters`,
      },
    });
  }

  /**
   * Maintenance Plan - Lookup
   * Lookup single Maintenance Plan
   *
   * ### Update version 1.8.0
   * Added isActive property.
   *
   * ### Update version 1.13.0
   * Added uniqueKey in TaskListOperations.
   *
   * ### Update version 1.14.0
   * Removed `taskList` and `objectList` properties from the response schema. They were never included in the actual
   * response, so this change has no implication on the data received from the API.
   *
   * @returns MaintenancePlan Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static lookupMaintenancePlan({
    planId,
    includeItems = true,
    includeItemCalls = true,
  }: {
    planId: string;
    /**
     * Include items of the maintenance plan
     */
    includeItems?: boolean;
    /**
     * Include calls for items of the maintenance plan
     */
    includeItemCalls?: boolean;
  }): CancelablePromise<MaintenancePlan | ProblemDetails> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/maintenance-plans/{plan-id}",
      path: {
        "plan-id": planId,
      },
      query: {
        "include-items": includeItems,
        "include-item-calls": includeItemCalls,
      },
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }

  /**
   * Maintenance Plan Item- Lookup
   * ### Overview
   * Lookup single maintenance plan item
   *
   * Maintenance Item contains the object list, task list and previous calls for preventive work orders.
   *
   * The object list describes the tag/equipment covered in the maintenance plan item.
   *
   *
   * The task list describes the maintenance activities with the necessary support activities to be performed in the maintenance programme. These are divided into operations that are listed in an order that is natural for the practical implementation of the maintenance. The task List also sets the interval of operations through maintenance packages.
   *
   * ### Update release v1.2.0
   * Added `calculationKey` for operations in the task list.
   *
   * ### Update release v1.5.0
   * Bugfix related to text for operation.
   *
   * ### Update release v1.8.0
   * New properties were added to the calls expand: duePackages, schedulingType, callDate, completionDate
   *
   * ### Update release v1.9.0
   * Added property objectId for objectList.
   *
   * ### Update release v1.13.0
   * Added parameter include-item-object-list-linkage with default value true. Added uniqueKey in TaskListOperations.
   *
   * ### Update release v1.14.0
   * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
   * configuration switch, which will initially be disabled, and when appropriate, enabled.
   *
   * @returns MaintenancePlanItem Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static lookupMaintenancePlanItem({
    planId,
    itemId,
    includeItemCalls = true,
    includeItemObjectList = false,
    includeObjectListLinkage = true,
    includeItemTaskList = false,
  }: {
    /**
     * The id of the maintenance plan
     */
    planId: string;
    /**
     * The id of the maintenance plan item
     */
    itemId: string;
    /**
     * Include calls to maintenance plan item
     */
    includeItemCalls?: boolean;
    /**
     * Include list of objects for the maintenance plan item
     */
    includeItemObjectList?: boolean;
    /**
     * Include object list linkage for maintenance plan item
     */
    includeObjectListLinkage?: boolean;
    /**
     * Include task list, operations (w/related objects and material needs) for the maintenance plan item
     */
    includeItemTaskList?: boolean;
  }): CancelablePromise<MaintenancePlanItem | ProblemDetails> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/maintenance-plans/{plan-id}/items/{item-id}",
      path: {
        "plan-id": planId,
        "item-id": itemId,
      },
      query: {
        "include-item-calls": includeItemCalls,
        "include-item-object-list": includeItemObjectList,
        "include-object-list-linkage": includeObjectListLinkage,
        "include-item-task-list": includeItemTaskList,
      },
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }

  /**
   * Maintenance Plan Item - Update operation
   * ## Overview
   * Update operation for a maintenance plan item.
   *
   * ### Important information
   * Note: The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
   *
   * Use the HTTP GET endpoint `/maintenance-plans?filter=by-task-id&task-id={task-id}&api-version=v1` to view maintenance plans and maintenance plan items affected by this change.
   *
   * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
   *
   * ### Update for release v1.2.0
   * Added `calculationKey` as updatable field.
   *
   * ### Update release v1.5.0 + v1.11.0
   * Bugfix related to text for operation.
   *
   * ### Update release v1.14.0
   * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
   * configuration switch, which will initially be disabled, and when appropriate, enabled.
   *
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static updateOperationForMaintenancePlanItem({
    planId,
    itemId,
    taskId,
    operationId,
    requestBody,
  }: {
    /**
     * The id of the maintenance plan
     */
    planId: string;
    /**
     * The id of the maintenance plan item
     */
    itemId: string;
    /**
     * The id of the task within the maintenance plant item
     */
    taskId: string;
    /**
     * The id of the operation within the task list
     */
    operationId: string;
    /**
     * Operations to add to existing Work order
     */
    requestBody: Array<TaskWorkOrderOperationJsonPatch>;
  }): CancelablePromise<ProblemDetails> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}",
      path: {
        "plan-id": planId,
        "item-id": itemId,
        "task-id": taskId,
        "operation-id": operationId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }

  /**
   * Maintenance Plan Item - Create operation
   * ## Overview
   * Create an operation for a maintenance plan item.
   *
   * In order for the operation to be part of the next maintenance plan call, the client must also assign a maintenance package to the newly created operation. This can be done via endpoint `/maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}/maintenance-packages`.
   *
   * ### Important information
   * The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
   *
   * Use the HTTP GET endpoint `/maintenance-plans?filter=by-task-id&task-id={task-id}&api-version=v1` to view maintenance plans and maintenance plan items affected by this change.
   *
   * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
   *
   * `activityTypeId` is related to cost center and fiscal year, and there is currently no endpoint to get possible values.
   *
   * ### Update release v1.5.0
   * Bugfix related to text for operation.
   *
   * ### Update release v1.14.0
   * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
   * configuration switch, which will initially be disabled, and when appropriate, enabled.
   *
   * @returns ProblemDetails Response for other HTTP status codes
   * @returns TaskListOperationBasic Success
   * @throws ApiError
   */
  public static createOperationForMaintenancePlanItem({
    planId,
    itemId,
    taskId,
    requestBody,
  }: {
    /**
     * The id of the maintenance plan
     */
    planId: string;
    /**
     * The id of the maintenance plan item
     */
    itemId: string;
    /**
     * The id of the task within the maintenance plan item
     */
    taskId: string;
    /**
     * Operation to add to existing maintenance plan item
     */
    requestBody: TaskWorkOrderOperationCreate;
  }): CancelablePromise<ProblemDetails | TaskListOperationBasic> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations",
      path: {
        "plan-id": planId,
        "item-id": itemId,
        "task-id": taskId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }
}
