/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityReport } from "../models/ActivityReport";
import type { ActivityReportBasic } from "../models/ActivityReportBasic";
import type { ActivityReportCreate } from "../models/ActivityReportCreate";
import type { CorrectiveWorkOrder } from "../models/CorrectiveWorkOrder";
import type { ModificationWorkOrder } from "../models/ModificationWorkOrder";
import type { PreventiveWorkOrder } from "../models/PreventiveWorkOrder";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { ProjectWorkOrder } from "../models/ProjectWorkOrder";
import type { SASChangeWorkOrder } from "../models/SASChangeWorkOrder";
import type { SubseaWorkOrder } from "../models/SubseaWorkOrder";
import type { TagBasic } from "../models/TagBasic";
import type { TagCreate } from "../models/TagCreate";
import type { User } from "../models/User";
import type { WorkOrderInPlan } from "../models/WorkOrderInPlan";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ModifiedEndpointsService {
    /**
     * Work order plan - Get
     * ### Overview
     * Get work order activities planned to be performed for a single planning plant.
     * The response is normally based on the planned scheduling of work order operations through the properties `earliestStartDateTime` and `earliestFinishDateTime`. It does not use assignment to baseline plan as a source as this does not cover all work.
     *
     * It is possible to use the defined periods from the baseline plans as basis for the query parameters `planPeriodStartDate` and `planPeriodDuration`. Use `/plants/{plant-id}?include-baseline-plan=true&api-version=v1` for this purpose.
     *
     * `personResponsibleId` will normally not be populated as planning is performed on the work center as a whole.
     *
     * This endpoint returns only Work Order with status 'PLAN'. The field `requiredEndDate` is dependent on workOrderType.
     *
     *
     * ### Filter: by-plan-period
     * Provide the plan for a specific planning plant based on a defined plan period. This is the main usage of this endpoint.
     * Parameters:
     * - plan-period-start-date
     * - plan-period-duration
     * - location-id-any-of (optional)
     * - revision-id-any-of (optional)
     * - work-center-id-any-of (optional, supports * wildcard at the end)
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?filter=by-plan-period&plan-period-start-date=2023-03-02&plan-period-duration=P21D&location-id-any-of=CD00&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     * - `/work-order-plan/{planning-plant-id}?filter=by-plan-period&plan-period-start-date=2023-03-02&plan-period-duration=P21D&work-center-id-any-of=C31*&include-completed-work-order-operations=false&api-version=v1`
     *
     * ### Filter: by-person-responsible
     * Get the work order plan for a specific planning plant, but only for work orders assigned to a specific user.
     * Normally, work orders will not be assigned directly to a user, but in some work processes (such as inspection), this occurs.
     * Parameters:
     * - person-responsible-id
     * - plan-period-start-date (optional)
     * - plan-period-duration (optional)
     * - person-responsible-email (value should be URL encoded) (optional)
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?filter=by-person-responsible&person-responsible-email=shortname@equinor.com&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
     * ### Update release v1.26.0
     * Added query parameter `work-center-id-any-of`.
     *
     * Added properties `cmrIndicator` and `maintenanceRecordId`.
     *
     * @returns WorkOrderInPlan Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderPlan({
        planningPlantId,
        filter,
        planPeriodStartDate,
        planPeriodDuration,
        personResponsibleEmail,
        includeCompletedWorkOrderOperations = false,
        includePersonResponsible = false,
        workOrderTypesAnyOf,
        workCenterIdAnyOf,
        revisionIdAnyOf,
        locationIdAnyOf,
    }: {
        /**
         * Planning plant to retrieve work order plan for
         */
        planningPlantId: string;
        /**
         * Filter to limit the work order plan by
         */
        filter: "by-plan-period" | "by-person-responsible";
        /**
         * Start of plan period (`/plants/{plant-id}?include-baseline-plans=true` can be used as a reference )
         */
        planPeriodStartDate?: string;
        /**
         * Duration of plan period
         */
        planPeriodDuration?: string;
        /**
         * Email address for responsible person
         */
        personResponsibleEmail?: string;
        /**
         * Include completed work order operations
         */
        includeCompletedWorkOrderOperations?: boolean;
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean;
        /**
         * Limit to specific work order types (any-of). Default includes all types
         */
        workOrderTypesAnyOf?: Array<
            | "correctiveWorkOrders"
            | "preventiveWorkOrders"
            | "modificationWorkOrders"
            | "sasChangeWorkOrders"
            | "projectWorkOrders"
            | "subseaWorkOrders"
        >;
        /**
         * Comma-separated list of work-center-id
         */
        workCenterIdAnyOf?: string;
        /**
         * Comma-separated list of revision-id
         */
        revisionIdAnyOf?: string;
        /**
         * Comma-separated list of location-id
         */
        locationIdAnyOf?: string;
    }): CancelablePromise<Array<WorkOrderInPlan> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-order-plan/{planning-plant-id}",
            path: {
                "planning-plant-id": planningPlantId,
            },
            query: {
                filter: filter,
                "plan-period-start-date": planPeriodStartDate,
                "plan-period-duration": planPeriodDuration,
                "person-responsible-email": personResponsibleEmail,
                "include-completed-work-order-operations": includeCompletedWorkOrderOperations,
                "include-person-responsible": includePersonResponsible,
                "work-order-types-any-of": workOrderTypesAnyOf,
                "work-center-id-any-of": workCenterIdAnyOf,
                "revision-id-any-of": revisionIdAnyOf,
                "location-id-any-of": locationIdAnyOf,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
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
     * ### Update release v1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release v1.21.0
     * Added property `area` to tag details.
     *
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release v1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * Added activeStatusIds to related maintenance records.
     *
     * ### Update release v1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * Removed 'urlReferences' field from response object, and removed 'include-url-references' query parameter. URLReferences are only supported for Notifications.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release v1.26.0
     * Added property 'isEquipmentRental' to serviceOperations.
     *
     * @returns PreventiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupPreventiveWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeTechnicalFeedback = false,
        includeMaterials = false,
        includeMaintenanceRecords = false,
        includeMaintenancePlanDetails = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
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
         * Include Work order service operations
         */
        includeServiceOperations?: boolean;
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
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
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
                "include-service-operations": includeServiceOperations,
                "include-technical-feedback": includeTechnicalFeedback,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-plan-details": includeMaintenancePlanDetails,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
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
     * ### Update release v1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release v1.21.0
     * Added properties `costs` and `costsCurrency`.
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release v1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * Added activeStatusIds to related maintenance records.
     *
     * ### Update release v1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * Removed 'urlReferences' field from response object, and removed 'include-url-references' query parameter. URLReferences are only supported for Notifications.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release v1.26.0
     * Added property 'isEquipmentRental' to serviceOperations.
     *
     * @returns CorrectiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCorrectiveWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeTechnicalFeedback = false,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
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
         * Include Work order service operations
         */
        includeServiceOperations?: boolean;
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
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
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
                "include-service-operations": includeServiceOperations,
                "include-technical-feedback": includeTechnicalFeedback,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
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
     * Project Work order - Lookup
     * ### Overview
     * Lookup single Project Work order with related information
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `projectWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release v1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release v1.21.0
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release v1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * ### Update release v1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release v1.26.0
     * Added property 'isEquipmentRental' to serviceOperations.
     *
     * @returns ProjectWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupProjectWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include Work order attachments (on header and for operation)
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
    }): CancelablePromise<ProjectWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/project-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-service-operations": includeServiceOperations,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`projectWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Work order - Lookup
     * ### Overview
     * Lookup single Modification Work order with related information.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `modificationWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release v1.11.0
     * Added properties `additionalCostWBSId` and `additionalCostWBS`.
     *
     * ### Update release v1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release v1.21.0
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release v1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * ### Update release v1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release v1.26.0
     * Added property 'isEquipmentRental' to serviceOperations.
     *
     * @returns ModificationWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupModificationWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include Work order attachments (on header and for operation)
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
    }): CancelablePromise<ModificationWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/modification-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-service-operations": includeServiceOperations,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`modificationWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Subsea Work order - Lookup
     * ### Overview
     * Lookup single Subsea Work order with related information.
     *
     * ### Important information
     * By default `include-person-responsible` is false and then the fields `personResponsibleId` and `personResponsibleEmail` will always have null value.
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
     * Added tagsRelated to the response.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release v1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release v1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release v1.21.0
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release v1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * ### Update release v1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release v1.26.0
     * Added property 'isEquipmentRental' to serviceOperations.
     *
     * @returns SubseaWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupSubseaWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeMaterials = true,
        includeAttachments = false,
        includePersonResponsible = false,
        includeStatusDetails = false,
        includeRelatedTags = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include Work order attachments (on header and for operation)
         */
        includeAttachments?: boolean;
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean;
    }): CancelablePromise<SubseaWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/subsea-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-service-operations": includeServiceOperations,
                "include-materials": includeMaterials,
                "include-attachments": includeAttachments,
                "include-person-responsible": includePersonResponsible,
                "include-status-details": includeStatusDetails,
                "include-related-tags": includeRelatedTags,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`subseaWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Tag - Create
     * ### Overview
     * Create tag with option to create linear data. Linear data can be created only for the tagCategoryId `U` (Pipeline).
     *
     * Locations and systems available for this plant can be found by querying `/plants/{plant-id}?include-systems=true&include-locations=true&api-version=v1`
     *
     * To find a valid parentTagId, use the tag search endpoint `/plants/{plant-id}/tag-hierarchy`
     * ### Important information
     * There is a plant-specific configuration called "data origin" which determines which properties should be inherited from the parent tag, and which should be maintained by user directly, e.g. via the API. Properties provided in the request will overwrite the inherited default values. Nevertheless, the inheritance rules of the "data origin" configuration remain the same even if default values were overwritten during the creation.
     *
     * Please note that to execute this request, elevated roles are required in Equinor's ERP system.
     *
     * ### Update release v1.21.0
     *
     * Added support for property `area`.
     *
     * ### Update release v1.26.0
     * Added property `maintenanceConceptId` to response.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns any Created
     * @throws ApiError
     */
    public static createTag({
        plantId,
        requestBody,
    }: {
        plantId: string;
        /**
         * Tag to create
         */
        requestBody: TagCreate;
    }): CancelablePromise<
        | ProblemDetails
        | (TagBasic & {
              /**
               * The maintenance concept for the tag. More details planned to be available through endpoint /maintenance-concepts/{concept-id}
               */
              maintenanceConceptId?: string;
          })
    > {
        return __request(OpenAPI, {
            method: "POST",
            url: "/plants/{plant-id}/tags",
            path: {
                "plant-id": plantId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad request, for example if missing required properties`,
                403: `User does not have sufficient rights to create tag.`,
            },
        });
    }

    /**
     * SAS Change Work order - Lookup
     * ### Overview
     * Lookup single SAS Change Work order with related information
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `sasChangeWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release v1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release v1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release v1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release v1.21.0
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release v1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * ### Update release v1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release v1.26.0
     * Added property 'isEquipmentRental' to serviceOperations.
     *
     * @returns SASChangeWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupSasChangeWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include Work order attachments (on header and for operation)
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
    }): CancelablePromise<SASChangeWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/sas-change-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-service-operations": includeServiceOperations,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`sasChangeWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
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
     * ### Update release v1.17.0
     * Added query parameter `include-measurements`.
     *
     * ### Update release v1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release v1.26.0
     * Added query parameters `include-additional-metadata` and `include-additional-data-characteristics`
     * Added `additionalMetadata` to response
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
        includeMeasurements = false,
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
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean;
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
     * Activity report - Create
     * Create new activity report
     *
     * ### Important information
     * Equinor governing documents states that activity reports should be created at the lowest possible level in the tag hierachy.
     *
     * ### Update release 1.0.0
     * Added workCenterId, workCenterPlantId to create endpoint.
     *
     * Added activities to create endpoint.
     *
     * ### Update release 1.1.0
     * Added `relatedWorkOrder` to create endpoint. This will allow a relationship to be established on creation to either technical feedback or object list of a work order.
     *
     * ### Update release 1.6.0
     *
     * Added `isOpen` to create endpoint. isOpen set to true enables creation of activity report in status `OSNO - Outstanding Notification`. By default `isOpen` is set to false, and activity report is created with `NOCO - Notification Completed` status.
     *
     * ### Update release 1.26.0
     * Added `createdDateTime` to create endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ActivityReportBasic Created
     * @throws ApiError
     */
    public static createActivityReport({
        requestBody,
    }: {
        /**
         * Activity report to create
         */
        requestBody: ActivityReportCreate;
    }): CancelablePromise<ProblemDetails | ActivityReportBasic> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/activity-reports",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to create a activity report`,
            },
        });
    }

    /**
     * Logged in user - Lookup
     * ### Overview
     * Get information for the currently logged in user.
     *
     * If query parameter `include-authorization` is true, the request will check if the user has the necessary basic accesses required for the API. Consumer applications could use the response to display general instructions for applying to access if `authorization.hasAccessToAPI` is false.
     *
     * ### Update  release 1.26.0
     * Add query parameter `include-is-discipline-responsible` with default value false. Add parameter `isDisciplineResponsible` to response.
     *
     * @returns User Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getUser({
        includeAuthorizations = true,
        includeIsDisciplineResponsible = false,
    }: {
        /**
         * Include information on authorization user has for API
         */
        includeAuthorizations?: boolean;
        /**
         * Include information if user is discipline responsible
         */
        includeIsDisciplineResponsible?: boolean;
    }): CancelablePromise<User | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/user",
            query: {
                "include-authorizations": includeAuthorizations,
                "include-is-discipline-responsible": includeIsDisciplineResponsible,
            },
        });
    }
}
