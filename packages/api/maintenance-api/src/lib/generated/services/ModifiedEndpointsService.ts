/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Equipment } from "../models/Equipment";
import type { FailureReport } from "../models/FailureReport";
import type { Plant } from "../models/Plant";
import type { ProblemDetails } from "../models/ProblemDetails";

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
     * ### Update release v1.15.0
     * Added `workOrderId` to the lastMeasurement.
     *
     * Added query parameter `include-url-references`.
     *
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * ### Update release v1.17.0
     * Add property `characteristics` to `urlReferences` in response
     *
     * Add query parameter `include-url-characteristics`
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
        includeUrlReferences = false,
        includeUrlCharacteristics = false,
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
            | "failure-report"
            | "activity-report"
            | "certification-report"
            | "technical-information-update-request"
            | "technical-clarification"
            | "modification-proposal"
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
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean;
        /**
         * Include URL references for equipment or tag
         */
        includeUrlReferences?: boolean;
        /**
         * Include characteristics for URL References
         */
        includeUrlCharacteristics?: boolean;
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
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-only-open-maintenance-records":
                    includeOnlyOpenMaintenanceRecords,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-only-open-work-orders": includeOnlyOpenWorkOrders,
                "include-catalog-profile-details": includeCatalogProfileDetails,
                "include-characteristics": includeCharacteristics,
                "include-attachments": includeAttachments,
                "include-url-references": includeUrlReferences,
                "include-url-characteristics": includeUrlCharacteristics,
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
     * ### Update version 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
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
                "include-equipment-catalog-profiles":
                    includeEquipmentCatalogProfiles,
                "include-only-default-catalog-profiles":
                    includeOnlyDefaultCatalogProfiles,
                "include-surface-degradation-factors":
                    includeSurfaceDegradationFactors,
                "include-revisions": includeRevisions,
                "include-systems": includeSystems,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Plants - Search
     * ### Overview
     * Search for plants through predefined filters.
     *
     * ### Filter: by-plant
     * Search plant based on one or more `plant-id`
     *
     * Parameters:
     * - plant-id (supports comma-separated list)
     *
     * ### Filter: by-planning-plant
     * Search plant based on one or more `planning-plant-id`
     *
     * Parameters:
     * - planning-plant-id (supports comma-separated list)
     *
     * ### Update version 1.13.0
     * Added `include-equipment-catalog-profiles` query parameter.
     *
     * ### Update version 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
     *
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchPlant({
        filter,
        plantId,
        planningPlantId,
        includeLocations = false,
        includeWorkCenters = false,
        includePlannerGroups = false,
        includeTagCatalogProfiles = false,
        includeEquipmentCatalogProfiles = false,
        includeSurfaceDegradationFactors = false,
    }: {
        /**
         * Filter to limit plants by
         */
        filter: "by-plant" | "by-planning-plant";
        /**
         * Plant identifier
         */
        plantId?: string;
        /**
         * Plant used to plan the maintenance work. Usually same as `plantId`, but there are some cases were one `planningPlantId` is used across multiple `plantId`.
         */
        planningPlantId?: string;
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
         * Include surface degradations for plant
         */
        includeSurfaceDegradationFactors?: boolean;
    }): CancelablePromise<Array<Plant> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants",
            query: {
                filter: filter,
                "plant-id": plantId,
                "planning-plant-id": planningPlantId,
                "include-locations": includeLocations,
                "include-work-centers": includeWorkCenters,
                "include-planner-groups": includePlannerGroups,
                "include-tag-catalog-profiles": includeTagCatalogProfiles,
                "include-equipment-catalog-profiles":
                    includeEquipmentCatalogProfiles,
                "include-surface-degradation-factors":
                    includeSurfaceDegradationFactors,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Failure report - Lookup
     * ### Overview
     * Lookup a single failure report
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId to additionalMetadata.
     *
     * ### Update release 1.0.0
     * Added tasks for failure reports through query option include-tasks.
     * Added properties plannerGroupId, plannerGroup and planningPlantId.
     *
     * ### Update release 1.1.0
     * Added isOpen and completedDateTime.
     *
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * ### Update release v1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release v1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.15.0
     * Added property `documentTitle` to `urlReferences`.
     *
     * ### Update release v1.16.0
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release v1.17.0
     * Added query parameter `include-measurements`.
     *
     * @returns FailureReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupFailureReport({
        recordId,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeActivities = false,
        includeTasks = false,
        includeAttachments = false,
        includeAdditionalMetadata = false,
        includeCreatedByDetails = false,
        includeUrlReferences = false,
        includeMeasurements = false,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean;
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean;
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include extra metadata related to additional failure modes and detection modes. This is only used in rare cases
         */
        includeAdditionalMetadata?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
        /**
         * Include URL references for failure report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean;
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean;
    }): CancelablePromise<FailureReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/failure-reports/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-activities": includeActivities,
                "include-tasks": includeTasks,
                "include-attachments": includeAttachments,
                "include-additional-metadata": includeAdditionalMetadata,
                "include-created-by-details": includeCreatedByDetails,
                "include-url-references": includeUrlReferences,
                "include-measurements": includeMeasurements,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Failure report - Attachment upload
     * Upload attachment for failure report
     *
     * ### Update release 1.17.0
     * Added `documentTitle` as input. If supplied, the title is added to all files that are sent
     * in the current request. If different titles are wanted for different files, they have to be sent in separately
     * (one file, one document title per request). When supplying a document-title, a new document will always be created for the attachment
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadFailureReportAttachment({
        recordId,
        formData,
    }: {
        recordId: string;
        formData?: {
            files: Array<Blob>;
            "document-title"?: string | null;
        };
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports/{record-id}/attachments",
            path: {
                "record-id": recordId,
            },
            formData: formData,
            mediaType: "multipart/form-data",
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }
}
