/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityReport } from "../models/ActivityReport";
import type { CertificationReport } from "../models/CertificationReport";
import type { CorrectiveWorkOrder } from "../models/CorrectiveWorkOrder";
import type { Equipment } from "../models/Equipment";
import type { EquipmentSearchItem } from "../models/EquipmentSearchItem";
import type { FailureReport } from "../models/FailureReport";
import type { FailureReportBasic } from "../models/FailureReportBasic";
import type { FailureReportCreate } from "../models/FailureReportCreate";
import type { FailureReportSimple } from "../models/FailureReportSimple";
import type { MaintenanceRecordList } from "../models/MaintenanceRecordList";
import type { ModificationProposal } from "../models/ModificationProposal";
import type { PreventiveWorkOrder } from "../models/PreventiveWorkOrder";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { RelationshipToMaintenanceRecordAdd } from "../models/RelationshipToMaintenanceRecordAdd";
import type { Tag } from "../models/Tag";
import type { TechnicalClarification } from "../models/TechnicalClarification";
import type { TechnicalInformationUpdateRequest } from "../models/TechnicalInformationUpdateRequest";
import type { WorkOrderOptimizedForQuery } from "../models/WorkOrderOptimizedForQuery";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ModifiedEndpointsService {
    /**
     * Maintenance records - Search
     * ### Overview
     * Search for Maintenance records regardless of type through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each Maintenance record.
     * This can be found by subsequent call to lookup for the respective maintenance record resource type
     *
     * ### Filter: by-external-partner-record-id
     * Find open Maintenance records for an id in an external partner system. Note: In theory different external system could have the same `external-partner-record-id` but it's very unlikely. Clients are recommended to filter the response based on the plants they are intersted in to avoid any issues.
     *
     * Parameters:
     * - external-partner-record-id
     *
     * ### Filter: my-recent-maintenance-records
     * Find maintenance record created by the logged in user.
     *
     * Parameters:
     * - created-after-datetime (optional)
     *
     * ### Filter: recently-changed
     * Find maintenance records which have been recently changed (created or updated) for a given plant. Normally, clients will provide parameters changed-since-datetime and plant-id and in this case the endpoint will return any changed maintenance record from changed-since-datetime and to now. It is also possible to add before-datetime query parameter and the endpoint will then return any changed maintenance between changed-since-datetime and before-datetime.
     *
     * Parameters:
     * - plant-id
     * - changed-since-datetime
     * - before-datetime (optional)
     *
     * ### Update release v1.2.0
     * Added filter `my-recent-maintenance-records`.
     *
     * ### Update release v1.5.0
     * Added filter `recently-changed` and maintenance record types `modification-proposal`, `certification-report`,`technical-information-update-request` and `technical-clarification`.
     *
     * ### Update release v1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release v1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * ### Update release v1.12.0
     * Added property `maintenanceRecordTypeId`.
     *
     * ### Update release v1.16.0
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * @returns MaintenanceRecordList Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMaintenanceRecords({
        filter,
        externalPartnerRecordId,
        createdAfterDatetime,
        plantId,
        changedSinceDatetime,
        beforeDatetime,
        includeMaintenanceRecordTypes,
    }: {
        /**
         * Filter to limit the failure reports by
         */
        filter:
            | "by-external-partner-record-id"
            | "my-recent-maintenance-records"
            | "recently-changed";
        /**
         * If failure report was initially created in an external system, this represent the unique id of it
         */
        externalPartnerRecordId?: string;
        /**
         * Optional parameter to limit the response to only maintenance records changed after changed-since-datetime but before this datetime
         */
        createdAfterDatetime?: string;
        /**
         * Plant
         */
        plantId?: string;
        /**
         * Earliest datetime to returned changed work orders for
         */
        changedSinceDatetime?: string;
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        beforeDatetime?: string;
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
         */
        includeMaintenanceRecordTypes?: Array<
            | "modification-proposal"
            | "failure-report"
            | "activity-report"
            | "certification-report"
            | "technical-information-update-request"
            | "technical-clarification"
        >;
    }): CancelablePromise<MaintenanceRecordList | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records",
            query: {
                filter: filter,
                "external-partner-record-id": externalPartnerRecordId,
                "created-after-datetime": createdAfterDatetime,
                "plant-id": plantId,
                "changed-since-datetime": changedSinceDatetime,
                "before-datetime": beforeDatetime,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
            },
            errors: {
                400: `Bad request, for example if \`before-datetime\` is before \`changed-since-datetime\``,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Tag - Lookup
     * ### Overview
     * Lookup a single tag with related information
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v0.9.0
     * Added `include-measuring-points` and `include-last-measurement` query parameters.
     *
     * ### Update release v1.1.0
     * Added additional characteristics with ids CRIT_MAIN_FUNCTION and CRIT_SUB_FUNCTION.
     *
     * Added certification-report, technical-information-update-requests and technical-clarifications for `include-maintenance-records` query parameter.
     *
     * Added `include-work-orders` to return work orders where the requested tag is the main reference. `include-work-order-types` can be used to limit to certain work order types.
     *
     * Added isOpen and completedDateTime properties for maintenance records if `include-maintenance-records` is true.
     *
     * Fixed bug for `include-installed-equipment`.
     *
     * ### Update release v1.3.0
     * Added `workCenterId`, `workCenterPlantId`, `workCenter`, `planningPlantId`,`plannerGroupId` and `plannerGroup` properties.
     *
     * Added `include-bill-of-materials` query parameter.
     *
     * ### Update release v1.5.0
     * Added `revisionId` and `revision` to related work orders (represents shutdown or campaign work).
     *
     * ### Update release v1.8.0
     * Added properties `hasUnsafeFailureMode` and `unsafeFailureModeStatus` for failure reports.
     *
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release v1.11.0
     * Added property `costWBSId`.
     *
     * ### Update release v1.15.0
     * Added `workOrderId` to response.
     *
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * Added `modification-proposal` as a maintenance record type to include with `include-maintenance-record-types` parameter.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics.
     *
     * Added query parameters `include-attachments` and `include-url-references`.
     *
     * Added property `workCenterId`
     *
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTag({
        plantId,
        tagId,
        includeMaintenanceRecords = true,
        includeMaintenanceRecordTypes,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeInstalledEquipment = false,
        includeCatalogProfileDetails = false,
        includeMaintenancePlanItems = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeCharacteristics = false,
        includeBillOfMaterials = false,
        includeAttachments = false,
        includeUrlReferences = false,
        includeStatusDetails = false,
        includeLinearData = false,
    }: {
        plantId: string;
        tagId: string;
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
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean;
        /**
         * Include URL references for equipment or tag
         */
        includeUrlReferences?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include linear data
         */
        includeLinearData?: boolean;
    }): CancelablePromise<Tag | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/tags/{tag-id}",
            path: {
                "plant-id": plantId,
                "tag-id": tagId,
            },
            query: {
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-installed-equipment": includeInstalledEquipment,
                "include-catalog-profile-details": includeCatalogProfileDetails,
                "include-maintenance-plan-items": includeMaintenancePlanItems,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-characteristics": includeCharacteristics,
                "include-bill-of-materials": includeBillOfMaterials,
                "include-attachments": includeAttachments,
                "include-url-references": includeUrlReferences,
                "include-status-details": includeStatusDetails,
                "include-linear-data": includeLinearData,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

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
     * Equipment - Search
     * ### Overview
     * Search for equipment and include related maintenance information.
     *
     * The endpoint has several include query parameters which allows a client to retrieve only the information which is relevant for their use case.
     *
     * The client must in the request provide at least one of the following search parameters:
     * * `equipment-id-any-of`
     * * `serial-number-any-of`
     * * `vendor-part-number-any-of`
     * * `material-id-any-of`
     *
     * These parameters allow a comma-separated list of entries.
     *
     * If more than one of these parameters are supplied in the same request, the equipment in the response will need to fulfill all parameters (ie. operator AND is used between the parameter).
     *
     * Query parameters `include-only-open-maintenance-records` and `include-only-open-work-orders` have a recommended value of `true` in order to improve performance (default value `false`).
     *
     * ### Important information
     * For warehouse and logistics data of an equipment, use SCM Logistics API.
     *
     * ### Example usage
     * `/equipment?serial-number-any-of=4500695422-20-003,4500695422-20-004&include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteristics=true&api-version=v1` - Search equipment based on serialNumber with characteritics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
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
     * ### Update release v1.12.0
     * Added property `quantityUnitId`
     *
     * ### Update release v1.15.0
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * @returns EquipmentSearchItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchEquipment({
        equipmentIdAnyOf,
        serialNumberAnyOf,
        vendorPartNumberAnyOf,
        materialIdAnyOf,
        includeMaintenanceRecords = true,
        includeMaintenanceRecordTypes,
        includeOnlyOpenMaintenanceRecords = false,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeOnlyOpenWorkOrders = false,
        includeCharacteristics = false,
        perPage = 20,
        page = 1,
    }: {
        /**
         * Search based on equipmentIds. Wildcards are supported
         */
        equipmentIdAnyOf?: Array<string>;
        /**
         * Search based on serialNumber. Wildcards are supported
         */
        serialNumberAnyOf?: Array<string>;
        /**
         * Search based on partNumber. Wildcards are supported
         */
        vendorPartNumberAnyOf?: Array<string>;
        /**
         * Search based on materialId. Wildcards are supported
         */
        materialIdAnyOf?: Array<string>;
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
         * Limit include-maintenance-records to only open maintenance records. Recommend using `true` in order to improve performance.
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
         * Limit include-work-orders to only open work order. Recommend using `true` in order to improve performance.
         */
        includeOnlyOpenWorkOrders?: boolean;
        /**
         * Include tag characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean;
        /**
         * Results to return pr page
         */
        perPage?: number;
        /**
         * Page to fetch
         */
        page?: number;
    }): CancelablePromise<Array<EquipmentSearchItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/equipment",
            query: {
                "equipment-id-any-of": equipmentIdAnyOf,
                "serial-number-any-of": serialNumberAnyOf,
                "vendor-part-number-any-of": vendorPartNumberAnyOf,
                "material-id-any-of": materialIdAnyOf,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-only-open-maintenance-records":
                    includeOnlyOpenMaintenanceRecords,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-only-open-work-orders": includeOnlyOpenWorkOrders,
                "include-characteristics": includeCharacteristics,
                "per-page": perPage,
                page: page,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Preventive Work order - Lookup
     * ### Overview
     * Lookup single Preventive Work order with related information.
     *
     * ### Technical feedback
     * Technical feedback ensures a common and best practice maintenance based on the type of tag/equipment. It's mostly used by preventive work orders, but can in some cases be used in corrective work orders.
     * As part of work order execution, the technical feedback items will need to be completed.
     *
     * The endpoint `/work-orders/technical-feedback-master-data` describes the business rules for when it's necessary to create a maintenance record based on the status(`feedbackStatusId`) and reason(`feedbackReasonId`) found for the technical feedback.
     *
     * The `include-technical-feedback` query parameter for preventive and corrective work order lookup endpoints will return the technical feedback for each operation of the provided work order.
     *
     * If a technical feedback has `isDetailedFeedback: true`, it requires a very specific feedback type currently not supported by the Maintenance API.
     *
     * When executing a technical feedback item, the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status(`feedbackStatusId`) and a reason(`feedbackReasonId`). Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data`:
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports` or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * * `hasRequiredMaintenanceRecord: true` As no maintenance record is required, the technical feedback is completed using the endpoint `PATCH /work-order-operations/{operation-id}/technical-feedback/{feedback-id}`
     *
     * If you want to include the maintenance records of a technical feedback, one needs to apply both `include-technical-feedback=True`, and `include-maintenance-records=True`.
     *
     * ### Production Resources/Tool (PRT)
     * Production resources/tools (PRT) are used for materials, tools and equipment that are needed to carry out the task and are to be returned after use.
     *
     * In Equinor, this is normally added as part of maintenance program.
     * Maintenance API supports the following PRT resources:
     * - Attachments (through query parameter `include-attachments=true`)
     * - Measuring points (through query parameter `include-measuring-points=true`)
     * - URL references (through query parameter `include-url-references=true`)
     *
     * For more information see governing document [GL1624 Guidelines for the establishment of a preventive maintenance programme in SAP](https://docmap.equinor.com/Docmap/page/doc/dmDocIndex.html?DOCKEYID=533758).
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `preventiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release v1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
     *
     * ### Update release v1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Added sourceId to related maintenance records.
     *
     * Added isActive property for maintenance plan details.
     *
     * ### Update release v1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release 1.11.0
     * Added the following properties:
     *
     * * personResponsibleId and personResponsibleEmail
     * * isProductionCritical and isHSECritical
     * * workCenter
     * * plannerGroup
     *
     * ### Update release 1.12.0
     * Added new query parameter `include-technical-feedback`. It returns related technical feedback required to be completed as part of work order execution.
     *
     * Introduced property `detectionMethodGroupId` and `detectionMethodId` for technical feedback.
     *
     * ### Update release v1.15.0
     * Added new query parameter `include-measurements`
     *
     * ### Update release v1.16.0
     * Added new query parameters `include-measuring-points`, `include-last-measurement` and `include-url-references`. `include-attachments` extended to also return PRT attachments of an operation.  `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns PreventiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupPreventiveWorkOrder({
        workOrderId,
        includeOperations = true,
        includeTechnicalFeedback = false,
        includeMaterials = false,
        includeMaintenanceRecords = false,
        includeMaintenancePlanDetails = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeUrlReferences = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeMeasurements = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include technical feedback required to be completed as part of work order execution.
         */
        includeTechnicalFeedback?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list and technical feedback)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include details for maintenance plan
         */
        includeMaintenancePlanDetails?: boolean;
        /**
         * Include Work order attachments (including PRT attachments)
         */
        includeAttachments?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean;
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean;
        /**
         * Include URL references from PRT
         */
        includeUrlReferences?: boolean;
        /**
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean;
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean;
    }): CancelablePromise<PreventiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/preventive-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-technical-feedback": includeTechnicalFeedback,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-plan-details":
                    includeMaintenancePlanDetails,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
                "include-url-references": includeUrlReferences,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-measurements": includeMeasurements,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`preventiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Lookup
     * ### Overview
     * Lookup single Corrective Work order with related information
     *
     * ### Technical feedback
     * Technical feedback ensures a common and best practice maintenance based on the type of tag/equipment. It's mostly used by preventive work orders, but can in some cases be used in corrective work orders.
     * As part of work order execution, the technical feedback will need to be completed.
     *
     * The endpoint `/work-orders/technical-feedback-master-data` describes the business rules for when it's necessary to create a maintenance record based on the status (`feedbackStatusId`) and reason  (`feedbackReasonId`) found for the technical feedback.
     *
     * The `include-technical-feedback` query parameter for preventive and corrective work order lookup endpoints will return the technical feedback for each operation of the provided work order.
     *
     * If a technical feedback has `isDetailedFeedback: true`, it requires a very specific feedback type currently not supported by the Maintenance API.
     *
     * When executing a technical feedback item, the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status (`feedbackStatusId`) and a reason (`feedbackReasonId`). Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data` and base the next step based on the value of `hasRequiredMaintenanceRecord`:
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports` or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * * `hasRequiredMaintenanceRecord: false` As no maintenance record is required, the technical feedback is completed using the endpoint `PATCH /work-order-operations/{operation-id}/technical-feedback/{feedback-id}`
     *
     * If you want to include the maintenance records of a technical feedback, one needs to apply both `include-technical-feedback=True`, and `include-maintenance-records=True`.
     *
     * ### Production Resources/Tool (PRT)
     * Production resources/tools (PRT) are used for materials, tools and equipment that are needed to carry out the task and are to be returned after use.
     *
     * In Equinor, this is normally added as part of maintenance program.
     * Maintenance API supports the following PRT resources:
     * - Attachments (through query parameter `include-attachments=true`)
     * - Measuring points (through query parameter `include-measuring-points=true`)
     * - URL references (through query parameter `include-url-references=true`)
     *
     * For more information see governing document [GL1624 Guidelines for the establishment of a preventive maintenance programme in SAP](https://docmap.equinor.com/Docmap/page/doc/dmDocIndex.html?DOCKEYID=533758).
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `correctiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release v1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
     *
     * ### Update release v1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release v1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release 1.12.0
     * Added new query parameter `include-technical-feedback`. It returns related technical feedback required to be completed as part of work order execution. Technical feedback is mostly used for preventive work orders, but can also be used for corrective work orders.
     *
     * Introduced property `detectionMethodGroupId` and `detectionMethodId` for technical feedback.
     *
     * ### Update release v1.15.0
     * Added new query parameter `include-measurements`.
     *
     * ### Update release v1.16.0
     * Added new query parameters `include-measuring-points`, `include-last-measurement` and `include-url-references`. `include-attachments` extended to also return PRT attachments of an operation.  `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns CorrectiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCorrectiveWorkOrder({
        workOrderId,
        includeOperations = true,
        includeTechnicalFeedback = false,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeUrlReferences = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeMeasurements = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include technical feedback required to be completed as part of work order execution.
         */
        includeTechnicalFeedback?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include Work order attachments (including PRT attachments)
         */
        includeAttachments?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean;
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean;
        /**
         * Include URL references from PRT
         */
        includeUrlReferences?: boolean;
        /**
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean;
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean;
    }): CancelablePromise<CorrectiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/corrective-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-technical-feedback": includeTechnicalFeedback,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
                "include-url-references": includeUrlReferences,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-measurements": includeMeasurements,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`correctiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
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
     * ### Update release v1.15.0
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics
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
        includeStatusDetails = false,
        includeLinearData = false,
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
            | "modification-proposal"
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
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include linear data
         */
        includeLinearData?: boolean;
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
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-installed-equipment": includeInstalledEquipment,
                "include-catalog-profile-details": includeCatalogProfileDetails,
                "include-maintenance-plan-items": includeMaintenancePlanItems,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-characteristics": includeCharacteristics,
                "include-bill-of-materials": includeBillOfMaterials,
                "include-status-details": includeStatusDetails,
                "include-linear-data": includeLinearData,
                "per-page": perPage,
                page: page,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * Work orders - Optimized for query
     * ### Overview
     * Query work orders for potentially complicated patterns where speed is of the essence.
     *
     * `planning-plants` is the only mandatory fields, but clients should normally provide at least one more query criteria.
     *
     * A normal use case would be to first provide an initial query criteria based on user input. Then allow the end-users based on the resulting data select unwanted results based on specific attributes. The unwanted results should then be added to the exclusion list (for example `keywords-not` or `work-centers-not)` and the API call repeated.
     *
     * `max-results` have a default value of 1000 and is necessary to provide a quick response.
     *
     * The multi-line `text` property is not included by default, but can included by setting `include-text=true` in the request. This will influence performance significantly.
     *
     * ### Response
     * The response schema differs slightly from the other work order endpoints as a result of the optimization for speed.
     *
     * ### Examples
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&tags-all-of=10B9` - Return work orders where tag is 10B9
     *
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&tags-all-of=AA15*&tags-not=AA15002` - Return work orders where tag has pattern `AA15*` but is not AA15002
     *
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&keywords-all-of=heli,male` - Return work orders where the title contains both `heli` and `male`
     *
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&status-any-of=PREP,RDEX&created-after-date=2021-06-01` - Return work orders with status PREP or RDEX and created after a certain date
     *
     * ### Update release v1.5.0
     * Added revisionId to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.12.0
     * Added query parameter `include-maintenance-record`.
     *
     * ### Update release v1.16.0
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * @returns WorkOrderOptimizedForQuery Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static queryWorkOrdersOptimized({
        planningPlants,
        keywordsAllOf,
        keywordsAnyOf,
        keywordsNot,
        tagsAllOf,
        tagsAnyOf,
        tagsNot,
        workCentersAnyOf,
        workCentersNot,
        systemsAnyOf,
        systemsNot,
        locationsAnyOf,
        locationsNot,
        sortFieldAnyOf,
        sortFieldNot,
        revisionCodeAnyOf,
        revisionCodeNot,
        statusAllOf,
        statusAnyOf,
        statusNot,
        isOpen,
        createdAfterDate,
        createdBeforeDate,
        workOrderTypes,
        sortBy,
        includeText = false,
        includeMaintenanceRecord = false,
        maxResults,
    }: {
        /**
         * Query based on planningPlantIds (any-of)
         */
        planningPlants: Array<string>;
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsAllOf?: Array<string>;
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsAnyOf?: Array<string>;
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsNot?: Array<string>;
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsAllOf?: Array<string>;
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsAnyOf?: Array<string>;
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `AE55*`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsNot?: Array<string>;
        /**
         * Query based on workCenterIds
         */
        workCentersAnyOf?: Array<string>;
        /**
         * Query based on workCenterIds
         */
        workCentersNot?: Array<string>;
        /**
         * Query based on systemIds
         */
        systemsAnyOf?: Array<string>;
        /**
         * Query based on systemIds
         */
        systemsNot?: Array<string>;
        /**
         * Query based on locationIds
         */
        locationsAnyOf?: Array<string>;
        /**
         * Query based on locationIds
         */
        locationsNot?: Array<string>;
        /**
         * Query based on sortField ()used for grouping work orders)
         */
        sortFieldAnyOf?: Array<string>;
        /**
         * Query based on sortField (used for grouping work orders)
         */
        sortFieldNot?: Array<string>;
        /**
         * Query based on revisionCode
         */
        revisionCodeAnyOf?: Array<string>;
        /**
         * Query based on sortField (often used for revision codes)
         */
        revisionCodeNot?: Array<string>;
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAllOf?: Array<string>;
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<string>;
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<string>;
        /**
         * Include only open work orders or only closed work orders. By default, all work orders are included.
         */
        isOpen?: boolean;
        /**
         * Earliest creation date to include
         */
        createdAfterDate?: string;
        /**
         * Latest creation date to include
         */
        createdBeforeDate?: string;
        /**
         * Limit to specific work order types (one-of)
         */
        workOrderTypes?: Array<
            | "correctiveWorkOrders"
            | "preventiveWorkOrders"
            | "modificationWorkOrders"
            | "sasChangeWorkOrders"
            | "projectWorkOrders"
            | "subseaWorkOrders"
        >;
        /**
         * Property to sort the results by
         */
        sortBy?: Array<
            | "createdDateTime desc"
            | "createdDateTime asc"
            | "workOrderId desc"
            | "workOrderId asc"
            | "systemId desc"
            | "systemId asc"
            | "locationId desc"
            | "locationId asc"
            | "sortField desc"
            | "sortField asc"
            | "title desc"
            | "title asc"
        >;
        /**
         * Include the multi-line text of the work order (will cause the endpoint to go significantly slower)
         */
        includeText?: boolean;
        /**
         * Include the main maintenance record linked to the work order (if any)
         */
        includeMaintenanceRecord?: boolean;
        /**
         * Maximum number of results to include. Default is 1000.
         */
        maxResults?: number;
    }): CancelablePromise<Array<WorkOrderOptimizedForQuery> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders-optimized-for-query",
            query: {
                "planning-plants": planningPlants,
                "keywords-all-of": keywordsAllOf,
                "keywords-any-of": keywordsAnyOf,
                "keywords-not": keywordsNot,
                "tags-all-of": tagsAllOf,
                "tags-any-of": tagsAnyOf,
                "tags-not": tagsNot,
                "work-centers-any-of": workCentersAnyOf,
                "work-centers-not": workCentersNot,
                "systems-any-of": systemsAnyOf,
                "systems-not": systemsNot,
                "locations-any-of": locationsAnyOf,
                "locations-not": locationsNot,
                "sort-field-any-of": sortFieldAnyOf,
                "sort-field-not": sortFieldNot,
                "revision-code-any-of": revisionCodeAnyOf,
                "revision-code-not": revisionCodeNot,
                "status-all-of": statusAllOf,
                "status-any-of": statusAnyOf,
                "status-not": statusNot,
                "is-open": isOpen,
                "created-after-date": createdAfterDate,
                "created-before-date": createdBeforeDate,
                "work-order-types": workOrderTypes,
                "sort-by": sortBy,
                "include-text": includeText,
                "include-maintenance-record": includeMaintenanceRecord,
                "max-results": maxResults,
            },
        });
    }

    /**
     * Work order relationships - Add related maintenance record
     * ### Overview
     * Add new relationship between a work order and a maintenance record.
     *
     * For `source` type `ObjectList`, the relationship will be stored in the object list of the work order.
     * This will add a relationship that is accessible by lookup requests to the work order.
     *
     * For `source` type `TechnicalFeedback`, the relationship will be stored as part of the technical feedback for the work order. Depending on `technicalFeedbackParameters.statusId` and `technicalFeedbackParameters.reasonId`, different types of maintenance records are required (either `failureReport` or `activityReport`). If these requirements are not fulfilled, the response status code will be 409 - Conflict.
     *
     * This endpoint returns no response data. Perform a lookup request for the specific work order type to get updated information. This is currently not possible for technical feedback, but is expected to be added in the future.
     *
     * ### Important information
     * The maintenance record must not be closed.
     *
     * ### Update release v1.5.0
     * Added relationship of type `TechnicalFeedback`.
     *
     * ### Update release 1.15.0
     * Fixed issue with `relatedWorkOrder` `source` `ObjectList`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addRelationshipFromWorkOrderToMaintenanceRecord({
        workOrderId,
        requestBody,
    }: {
        /**
         * Id of the work order (can be any type)
         */
        workOrderId: string;
        /**
         * Define maintenance record to add relationship to
         */
        requestBody: RelationshipToMaintenanceRecordAdd;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/work-order-relationships/{work-order-id}/related-maintenance-records",
            path: {
                "work-order-id": workOrderId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user, maintenance record is closed or criterias for \`TechnicalFeedback\` are not fulfilled`,
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
     * Failure report - Search
     * ### Overview
     * Search for failure reports through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include status details for each failure report.
     * This can be found by subsequent call to lookup failure-reports
     *
     *
     * ### Filter: recent-status-activations
     * Failure reports based on recent status activations for the failure reports.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     * - work-center-ids (optional)
     *
     * ### Filter: open-by-plant
     * Find open failure reports by plant
     * Parameters:
     * - plant-id
     * - location-id (optional)
     * - system-id (optional)
     * - work-center-ids (optional)
     *
     * ### Update release v1.1.0
     * Added open-by-plant filter and properties systemId and locationId.
     *
     * ### Update release v1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus.
     *
     * ### Update release v1.16.0
     * Added property `work-center-ids` to filters `recent-status-activations` and `open-by-plant`
     *
     * Added property `workCenterId`
     *
     * @returns FailureReportSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchFailureReports({
        filter,
        statusId,
        plantId,
        locationId,
        systemId,
        maxDaysSinceActivation,
        workCenterIds,
    }: {
        /**
         * Filter to limit the failure reports by
         */
        filter: "recent-status-activations" | "open-by-plant";
        /**
         * Status
         */
        statusId?: string;
        /**
         * Plant
         */
        plantId?: string;
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string;
        /**
         * System id to filter by
         */
        systemId?: string;
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number;
        /**
         * Comma separated list of work center IDs to filter by
         */
        workCenterIds?: Array<string>;
    }): CancelablePromise<Array<FailureReportSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/failure-reports",
            query: {
                filter: filter,
                "status-id": statusId,
                "plant-id": plantId,
                "location-id": locationId,
                "system-id": systemId,
                "max-days-since-activation": maxDaysSinceActivation,
                "work-center-ids": workCenterIds,
            },
        });
    }

    /**
     * Failure report - Create
     * Create new failure report
     *
     * ### Important information
     * Equinor governing documents states that failure reports should be created at the lowest possible level in the tag hierachy.
     *
     * It is possible to create failure report for either tagId or equipmentId.
     *
     * If `hasUnsafeFailureMode` is true after creation, operations supervisor must be contacted immediately in accordance with business process requirement `R-12137 - Give immediate warning of unsafe failure modes`
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId properties to additionalMetadata on creation.
     *
     * ### Update release 1.1.0
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     *
     * Added `relatedWorkOrder` to create endpoint. This will allow a relationship to be established on creation to either technical feedback or object list of a work order.
     *
     * ### Update release 1.2.0
     * Added `externalPartnerId`.
     *
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * ### Update release 1.7.0
     * Implemented create with property `equipmentId`.
     *
     * ### Update release 1.15.0
     * Fixed issue with `relatedWorkOrder` `source` `ObjectList`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns FailureReportBasic Created
     * @throws ApiError
     */
    public static createFailureReport({
        requestBody,
    }: {
        /**
         * Failure report to create
         */
        requestBody: FailureReportCreate;
    }): CancelablePromise<ProblemDetails | FailureReportBasic> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

    /**
     * Activity report - Lookup
     * ### Overview
     * Lookup a single activity report. The activity report represents work performed for a maintenance activity against a tag or an equipment.
     *
     * ### Update release v1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v.1.6.0
     * Added `301` response.
     *
     * Added `isOpen` to lookup response.
     *
     * ### Update release v1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release v1.11.0
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.15.0
     * Added property `documentTitle` to `urlReferences`.
     *
     * ### Update release v1.16.0
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns ActivityReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupActivityReport({
        recordId,
        includeStatusDetails = false,
        includeActivities = false,
        includeAttachments = false,
        includeCreatedByDetails = false,
        includeUrlReferences = false,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
        /**
         * Include URL references for activity report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean;
    }): CancelablePromise<ActivityReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/activity-reports/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-status-details": includeStatusDetails,
                "include-activities": includeActivities,
                "include-attachments": includeAttachments,
                "include-created-by-details": includeCreatedByDetails,
                "include-url-references": includeUrlReferences,
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
     * Modification Proposal - Lookup
     * ### Overview
     * Modification proposal initiates the processing of a modification, replacement or maintenance project.
     * In Equinor for upstream offshore, a modification proposal initiates the business processes 'OM103.01 - Initiate projects on plants in operation' or 'OM103.70.01 - Propose simple modifications in safety and automatiion systems'.
     * This request looks up a single Modification proposal.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release v1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * ### Update release v1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns ModificationProposal Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getModificationProposal({
        recordId,
        includeTasks = true,
        includeStatusDetails = false,
        includeAttachments = false,
        includeCreatedByDetails = false,
    }: {
        recordId: string;
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
    }): CancelablePromise<ModificationProposal | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/modification-proposals/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-tasks": includeTasks,
                "include-status-details": includeStatusDetails,
                "include-attachments": includeAttachments,
                "include-created-by-details": includeCreatedByDetails,
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
     * Certification report - Lookup
     * ### Overview
     * Lookup a single certification report.
     *
     * The certification report represents the results of PSV or lifting certification.
     *
     * For PSV certification, details are reported as measurements for 33 predefined measuring points.
     * For lifting certification, details are stored in attachment and possibly as characteristics on the tag/equipment.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release v1.11.0
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns CertificationReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCertification({
        recordId,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeAttachments = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeCreatedByDetails = false,
    }: {
        /**
         * The recordId of the certification report
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
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include measuring points related to tagId/equipmentId
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points
         */
        includeLastMeasurement?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
    }): CancelablePromise<CertificationReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/certification-reports/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-attachments": includeAttachments,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-created-by-details": includeCreatedByDetails,
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
     * Technical information update request - Lookup
     * ### Overview
     * Lookup a single technical information update request.
     *
     * A technical information update request represents a notice of change to initiate, distribute and follow up work to update technical information.
     *
     * Examples of usage:
     * - Updating blueprints or other technical documentation
     * - Changing spare parts lists (BOM- Bill of Materials) and storage management information
     * - Updating maintenance program
     * - Updating classification such as criticality, containment, selected safety critical equipment, etc.
     * - Updating master data/management information in SAP, e.g. Equipment details, work centre, Planner Group, WBS, measuring points, etc.
     * - Updating maintenance concept
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides additional information for this maintenance record type.
     *
     * ### Update release v1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns TechnicalInformationUpdateRequest Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTechnicalInformationUpdateRequest({
        recordId,
        includeStatusDetails = false,
        includeTasks = false,
        includeAttachments = false,
        includeTagDetails = false,
        includePersonResponsible = false,
        includeCreatedByDetails = false,
    }: {
        /**
         * The recordId of the technical information update request
         */
        recordId: string;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean;
        /**
         * Include person responsible information in response. If user does not have significant rights, this will return a `403` response
         */
        includePersonResponsible?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
    }): CancelablePromise<TechnicalInformationUpdateRequest | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/technical-information-update-requests/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-status-details": includeStatusDetails,
                "include-tasks": includeTasks,
                "include-attachments": includeAttachments,
                "include-tag-details": includeTagDetails,
                "include-person-responsible": includePersonResponsible,
                "include-created-by-details": includeCreatedByDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                403: `User does not have sufficient rights to read technical information update request`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical clarifications - Lookup
     * ### Overview
     * Lookup a single technical clarification.
     *
     * Represents a request for technical clarification when not covered by other maintenance records (such as failure-reports and corrective-work-orders).
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides additional information for this maintenance record type.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release v1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns TechnicalClarification Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTechnicalClarification({
        recordId,
        includeStatusDetails = false,
        includeTasks = false,
        includeAttachments = false,
        includeTagDetails = false,
        includePersonResponsible = false,
        includeCreatedByDetails = false,
    }: {
        /**
         * The recordId of the technical clarification
         */
        recordId: string;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include details about tag for technical clarification
         */
        includeTagDetails?: boolean;
        /**
         * Include person responsible information in response. If user does not have significant rights, this will return a `403` response
         */
        includePersonResponsible?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
    }): CancelablePromise<TechnicalClarification | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/technical-clarifications/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-status-details": includeStatusDetails,
                "include-tasks": includeTasks,
                "include-attachments": includeAttachments,
                "include-tag-details": includeTagDetails,
                "include-person-responsible": includePersonResponsible,
                "include-created-by-details": includeCreatedByDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                403: `User does not have sufficient rights to read technical clarification`,
                404: `The specified resource was not found`,
            },
        });
    }
}
