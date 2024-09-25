/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityReportBasic } from '../models/ActivityReportBasic';
import type { ActivityReportJsonPatch } from '../models/ActivityReportJsonPatch';
import type { CorrectiveWorkOrder } from '../models/CorrectiveWorkOrder';
import type { CorrectiveWorkOrderJsonPatch } from '../models/CorrectiveWorkOrderJsonPatch';
import type { FailureReport } from '../models/FailureReport';
import type { FailureReportBasic } from '../models/FailureReportBasic';
import type { FailureReportJsonPatch } from '../models/FailureReportJsonPatch';
import type { GenericWorkOrderJsonPatch } from '../models/GenericWorkOrderJsonPatch';
import type { ModificationProposal } from '../models/ModificationProposal';
import type { PlanningPlantRevision } from '../models/PlanningPlantRevision';
import type { PreventiveWorkOrder } from '../models/PreventiveWorkOrder';
import type { PreventiveWorkOrderJsonPatch } from '../models/PreventiveWorkOrderJsonPatch';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { ProjectWorkOrder } from '../models/ProjectWorkOrder';
import type { RevisionWorkOrderOperation } from '../models/RevisionWorkOrderOperation';
import type { SubseaWorkOrderMaterial } from '../models/SubseaWorkOrderMaterial';
import type { TechnicalClarification } from '../models/TechnicalClarification';
import type { TechnicalInformationUpdateRequest } from '../models/TechnicalInformationUpdateRequest';
import type { WorkOrderMaterial } from '../models/WorkOrderMaterial';
import type { WorkOrderMaterialAdd } from '../models/WorkOrderMaterialAdd';
import type { WorkOrderMaterialJsonPatch } from '../models/WorkOrderMaterialJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

    /**
     * Revisions - Search
     * ### Overview
     * Search revisions for a single plant with related information.
     *
     * ### Filter: by-revision-id
     * Search by revision ids for a single plant
     *
     * Parameters:
     * - revision-id-any-of
     * - include-work-order-operations (default: false)
     * - include-work-order-operation-text (default: false)
     * - include-only-work-order-operations-with-materials (default: false)
     *
     * ### Examples
     * `/plants/1310/revisions?filter=by-revision-id&revision-id-any-of=OFP,OFP%202022,&include-work-order-operations=true&include-only-work-order-operations-with-materials=true&include-work-order-operation-text=true&api-version=v1`
     *
     * ### Update release 1.19.0
     * Added parameter `include-text-item-materials`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * @returns PlanningPlantRevision Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchRevisions({
        plantId,
        filter,
        revisionIdAnyOf,
        includeWorkOrderOperations = false,
        includeOnlyWorkOrderOperationsWithMaterials = false,
        includeTextItemMaterials = false,
    }: {
        plantId: string,
        /**
         * Filter to limit revisions
         */
        filter: 'by-revision-id',
        /**
         * Comma-separated list of revision-id
         */
        revisionIdAnyOf?: string,
        /**
         * Include the work order operations
         */
        includeWorkOrderOperations?: boolean,
        /**
         * Limit the work order operations to only those which have material
         */
        includeOnlyWorkOrderOperationsWithMaterials?: boolean,
        /**
         * Include text item materials
         */
        includeTextItemMaterials?: boolean,
    }): CancelablePromise<Array<PlanningPlantRevision> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/revisions',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'revision-id-any-of': revisionIdAnyOf,
                'include-work-order-operations': includeWorkOrderOperations,
                'include-only-work-order-operations-with-materials': includeOnlyWorkOrderOperationsWithMaterials,
                'include-text-item-materials': includeTextItemMaterials,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Revisions Work Order Operations - Search
     * ### Overview
     * Search revision work order operations on a plant.
     *
     * Parameters:
     * - include-work-order-operation-text (default: false)
     * - include-only-work-order-operations-with-materials (default: false)
     *
     * ### Examples
     * `/plants/1310/revisions/PS01-23?include-only-work-order-operations-with-materials=true&include-work-order-operation-text=true&page=1&per-page=10&api-version=v1`
     *
     * ### Update version 1.28.0
     * Added `changedDateTime`,`changedById`, `changedBy`, `changedByEmail`.
     *
     * ### Update release 1.29.0
     * Added `progressChangedDateTime`, `progressChangedBy`, `progressChangedById` and `progressChangedByEmail` to response.  These values represent the last update datetime for technical feedback.
     * Altered `changedDateTime`, `changedBy`, `changedById` and `changedByEmail` to only represent last update to the operation.
     *
     * ### Update release 1.30.1
     * Added fields `confirmationDateTime`, `confirmationBy`, `confirmationByEmail` and `confirmationById`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * @returns RevisionWorkOrderOperation Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchRevisionWorkOrderOperations({
        plantId,
        revisionId,
        includeOnlyWorkOrderOperationsWithMaterials = false,
        includeTextItemMaterials = false,
        perPage,
        page,
    }: {
        plantId: string,
        revisionId: string,
        /**
         * Limit the work order operations to only those which have material
         */
        includeOnlyWorkOrderOperationsWithMaterials?: boolean,
        /**
         * Include text item materials
         */
        includeTextItemMaterials?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<RevisionWorkOrderOperation> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/revisions/{revision-id}/work-order-operations',
            path: {
                'plant-id': plantId,
                'revision-id': revisionId,
            },
            query: {
                'include-only-work-order-operations-with-materials': includeOnlyWorkOrderOperationsWithMaterials,
                'include-text-item-materials': includeTextItemMaterials,
                'per-page': perPage,
                'page': page,
            },
            errors: {
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
     * ### Update release 1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `preventiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release 1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Added sourceId to related maintenance records.
     *
     * Added isActive property for maintenance plan details.
     *
     * ### Update release 1.8.0
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
     * ### Update release 1.15.0
     * Added new query parameter `include-measurements`
     *
     * ### Update release 1.16.0
     * Added new query parameters `include-measuring-points`, `include-last-measurement` and `include-url-references`. `include-attachments` extended to also return PRT attachments of an operation.  `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * Added activeStatusIds to related maintenance records.
     *
     * ### Update release 1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * Removed `urlReferences` field from response object, and removed `include-url-references` query parameter. URLReferences are only supported for Notifications.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.26.0
     * Added property `isEquipmentRental` to services in serviceOperations.
     * Added `materials` to serviceOperations.
     *
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * Added `tag` and `title` to `maintenanceRecords` expand.
     *
     * ### Update release 1.28.0
     * Added new query parameter `include-safety-measures`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `operations.materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * Added `agreement` & `agreementItem` on `serviceOperations` and `grossPrice`, `netValue` & `currency` on `services`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
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
        includeSafetyMeasures = false,
    }: {
        workOrderId: string,
        /**
         * Include Work order operations
         */
        includeOperations?: boolean,
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean,
        /**
         * Include technical feedback required to be completed as part of work order execution.
         */
        includeTechnicalFeedback?: boolean,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include related maintenance records (from object list and technical feedback)
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include details for maintenance plan
         */
        includeMaintenancePlanDetails?: boolean,
        /**
         * Include Work order attachments (including PRT attachments)
         */
        includeAttachments?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean,
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean,
        /**
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
    }): CancelablePromise<PreventiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/preventive-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-technical-feedback': includeTechnicalFeedback,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-plan-details': includeMaintenancePlanDetails,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-safety-measures': includeSafetyMeasures,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`preventiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Preventive Work order - Update
     * ### Overview
     * Update preventive work order.
     *
     * Supports:
     * - Append to text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update externalPartnerWorkOrderId
     * - Update title
     * - Update plannerGroupId
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     *
     * ### Important information
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Update release 1.0.0
     * Added additional properties to update
     *
     * ### Update release 1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release 1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release 1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * ### Update release 1.18.0
     * Added possibility for update of `externalPartnerWorkOrderId`, `title` and `plannerGroupId`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current work order text.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updatePreventiveWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: PreventiveWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/preventive-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
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
     * ### Update release 1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `correctiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release 1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release 1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release 1.12.0
     * Added new query parameter `include-technical-feedback`. It returns related technical feedback required to be completed as part of work order execution. Technical feedback is mostly used for preventive work orders, but can also be used for corrective work orders.
     *
     * Introduced property `detectionMethodGroupId` and `detectionMethodId` for technical feedback.
     *
     * ### Update release 1.15.0
     * Added new query parameter `include-measurements`.
     *
     * ### Update release 1.16.0
     * Added new query parameters `include-measuring-points`, `include-last-measurement` and `include-url-references`. `include-attachments` extended to also return PRT attachments of an operation.  `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added properties `costs` and `costsCurrency`.
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * Added activeStatusIds to related maintenance records.
     *
     * ### Update release 1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * Removed 'urlReferences' field from response object, and removed 'include-url-references' query parameter. URLReferences are only supported for Notifications.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.26.0
     * Added property `isEquipmentRental` to services in serviceOperations.
     * Added `materials` to serviceOperations.
     *
     * 'tagDetails' object now includes the new field 'maintenanceConceptId'
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.28.0
     * Added new query parameter `include-safety-measure`.
     *
     * Added new query parameter `include-estimated-costs`.
     *
     * Added `tag` and `title` to `maintenanceRecords` expand.
     *
     * ### Update release 1.29.0
     * Added new properties for `additionalCostWBSId` and `costWBSId`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `operations.materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * Added `agreement` & `agreementItem` on `serviceOperations` and `grossPrice`, `netValue` & `currency` on `services`.
     *
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials` .
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
        includeSafetyMeasures = false,
        includeEstimatedCosts = false,
    }: {
        workOrderId: string,
        /**
         * Include Work order operations
         */
        includeOperations?: boolean,
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean,
        /**
         * Include technical feedback required to be completed as part of work order execution.
         */
        includeTechnicalFeedback?: boolean,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include Work order attachments (including PRT attachments)
         */
        includeAttachments?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean,
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean,
        /**
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
        /**
         * Include estimated costs
         */
        includeEstimatedCosts?: boolean,
    }): CancelablePromise<CorrectiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-technical-feedback': includeTechnicalFeedback,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-safety-measures': includeSafetyMeasures,
                'include-estimated-costs': includeEstimatedCosts,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`correctiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Update
     * ### Overview
     * Update a Corrective Work Order.
     *
     * Supports:
     * - Append and replace text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update title
     * - Update plannerGroupId
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     * - Update costs
     * - Update costWBSId and additionalCostWBSId
     * - Update priorityId
     *
     *
     * ### Important information - costWBSId and additionalCostWBSId
     * It's generally recommended that the values of `costWBSId` and `additionalCostWBSId` match.
     * When the work order is released (by setting status `REL`), there is Equinor business logic check to see if they match.
     * If the work order is released through Maintenance API, different values for costWBSId and additionalCostWBSId will result in an error.
     * If the work order is released directly in the ERP system, the user will receive a warning and can choose to continue.
     *
     * Updating of `costWBSId` will trigger a new determination of the settlement rule in the ERP system. If a settlement rule already exists, the updating of `costWBSId` will automatically update the settlement rule. Hence the `costWBSId` and settlement rule are allways aligned.
     *
     *
     * ### Important information - Text
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Important information - priorityId
     * `priorityId` can only be updated if the Corrective Work Order has a different priority than the FailureReport connected to this workorder.
     *
     * ### Update release 1.0.0
     * Added additional properties to update
     *
     * ### Update release 1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release 1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release 1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * ### Update release 1.18.0
     * Added possibility for update of `title` and `plannerGroupId`.
     *
     * ### Update release 1.21.0
     * Added possibility for update of `costs`.
     *
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.29.0
     * Added possibility for update of `costWBSId` and `additionalCostWBSId`.
     *
     * ### Update release 1.31.0
     * Added possibility for update of `priorityId`.
     *
     * ### Update release 1.32.0
     *
     * Updating of `costWBSId` from now on triggers the determination/updating of the settlement rule.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current work order text.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: CorrectiveWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/corrective-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Project Work order - Lookup
     * ### Overview
     * Lookup single Project Work order with related information
     *
     * ### Update release 1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `projectWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release 1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release 1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.26.0
     * Added property `isEquipmentRental` to services in serviceOperations.
     * Added `materials` to serviceOperations.
     *
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
     *
     * Added `tag` and `title` to `maintenanceRecords` expand.
     *
     * ### Update release 1.28.0
     * Added new query parameter `include-safety-measures`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `operations.materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * Added `agreement` & `agreementItem` on `serviceOperations` and `grossPrice`, `netValue` & `currency` on `services`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
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
        includeSafetyMeasures = false,
    }: {
        workOrderId: string,
        /**
         * Include Work order operations
         */
        includeOperations?: boolean,
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include Work order attachments (on header and for operation)
         */
        includeAttachments?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean,
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
    }): CancelablePromise<ProjectWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`projectWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Update
     * ### Overview
     * Update project work order.
     *
     * Supports:
     * - Append and replace text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update title
     * - Update plannerGroupId
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     *
     * ### Important information
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Update release 1.0.0
     * Added additional properties to update
     *
     * ### Update release 1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release 1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release 1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * ### Update release 1.18.0
     * Added possibility for update of `title` and `plannerGroupId`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current work order text.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateProjectWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: GenericWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/project-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Modification Work order - Update
     * ### Overview
     * Update modification work order.
     *
     * Supports:
     * - Append and replace text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update title
     * - Update plannerGroupId
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     *
     * ### Important information
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Update release 1.0.0
     * Added additional properties to update
     *
     * ### Update release 1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release 1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release 1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * ### Update release 1.18.0
     * Added possibility for update of `title` and `plannerGroupId`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current work order text.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateModificationWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: GenericWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/modification-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * SAS Change Work order - Update
     * ### Overview
     * Update SAS Change work order.
     *
     * Supports:
     * - Append to text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update title
     * - Update plannerGroupId
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     *
     * ### Important information
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Update release 1.0.0
     * Added additional properties to update
     *
     * ### Update release 1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release 1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release 1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * ### Update release 1.18.0
     * Added possibility for update of `title` and `plannerGroupId`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current work order text.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateSasChangeWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: GenericWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/sas-change-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Work order - Add materials
     * ### Overview
     * Add materials to a work order operation (of any work order type).
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * There are three types of materials which can be added to work orders:
     * 1. Material identified by `materialId`
     * 2. Material identified by `equipmentId` (only for Subsea work orders)
     * 3. Material identified only by the `material` field (also known as text items).
     *
     * Each item in the request must include one of `materialId`, `equipmentId` or `material`.
     *
     * ### Update release 1.22.0
     * Added possibility of adding materials without a materialId (also known as text items).
     * In this case, the purchasing fields mentioned below need to be provided as input:
     * - `material`
     * - `price`
     * - `priceUnitId`
     * - `purchasingGroup`
     * - `goodsRecipient`
     * - `unloadingPoint`
     * - `materialGroup`
     *
     * ### Update release 1.31.0
     * Split parts of `location` into `finalLocation` and `temporaryLocation` in the response.
     *
     * ### Update release 1.33.0
     * Added support for new properties `supplierId`, `vendorsMaterialNumber`, `deliveryTimeInDays`, `requisitionerId`, `holdDeliveryOnshore`, `text`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns any Created
     * @throws ApiError
     */
    public static addMaterialToWorkOrderOperation({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Add material details
         */
        requestBody: Array<WorkOrderMaterialAdd>,
    }): CancelablePromise<ProblemDetails | Array<(WorkOrderMaterial | SubseaWorkOrderMaterial)>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-order-operations/{operation-id}/materials',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, for example if both \`materialId\` and \`material\` is supplied for the same item`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
                501: `(__Production environment only__) Not implemented yet`,
            },
        });
    }

    /**
     * Work order operation - Update material
     * ### Overview
     * Update a material in a work order operation (of any work order type).
     *
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * The ´reservation-id´ parameter to use in the url can be found using the include-materials query parameter to work order lookup.
     *
     * ### Update release 1.33.0
     * Added support for the same properties which can be used for material creation.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateMaterialInWorkOrderOperation({
        operationId,
        reservationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Reservation id for the material found through work order lookup with include-materials
         */
        reservationId: string,
        /**
         * Update material details
         */
        requestBody: Array<WorkOrderMaterialJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}/materials/{reservation-id}',
            path: {
                'operation-id': operationId,
                'reservation-id': reservationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
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
     * ### Update release 1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.15.0
     * Added property `documentTitle` to `urlReferences`.
     *
     * ### Update release 1.16.0
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.17.0
     * Added query parameter `include-measurements`.
     *
     * ### Update release 1.19.0
     * Added query parameter `include-additional-data-characteristics`.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release 1.26.0
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * Added properties `codingGroupId` and `codingId`.
     *
     * ### Update release 1.31.0
     * Added `isReadonlyText` property to `activities` in the response.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * Added a query parameter `include-task-list` and `taskList` in the response. When a work order is created based on this notification, operations from the `taskList` will be automatically copied into the work order.
     *
     * ### Update release 1.33.0
     * Added `taskResponsible` and `taskResponsibleEmail` for `tasks` in response when the new query parameter `include-task-responsible-details` is set to true.
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
        includeAdditionalDataCharacteristics = false,
        includeCreatedByDetails = false,
        includeUrlReferences = false,
        includeMeasurements = false,
        includeTaskList = false,
        includeTaskResponsibleDetails = false,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean,
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include extra metadata related to additional failure modes and detection modes. This is only used in rare cases
         */
        includeAdditionalMetadata?: boolean,
        /**
         * Include characteristics for additional metadata
         */
        includeAdditionalDataCharacteristics?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include URL references for failure report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean,
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean,
        /**
         * Include task list with task list operations
         */
        includeTaskList?: boolean,
        /**
         * Include task responsible details. Can have a slight performance impact.
         */
        includeTaskResponsibleDetails?: boolean,
    }): CancelablePromise<FailureReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/failure-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-activities': includeActivities,
                'include-tasks': includeTasks,
                'include-attachments': includeAttachments,
                'include-additional-metadata': includeAdditionalMetadata,
                'include-additional-data-characteristics': includeAdditionalDataCharacteristics,
                'include-created-by-details': includeCreatedByDetails,
                'include-url-references': includeUrlReferences,
                'include-measurements': includeMeasurements,
                'include-task-list': includeTaskList,
                'include-task-responsible-details': includeTaskResponsibleDetails,
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
     * Failure report - Update
     * ## Overview
     * Update key fields of a failure report.
     *
     * The following endpoints can be used to find possible values for input:
     * 1. `workCenterId` - [/plants/{plant-id}?include-work-centers](#operation/LookupPlant)
     * 1. `plannerGroupId` - [/plants/{plant-id}?include-planner-groups=true](#operation/LookupPlant)
     * 1. `locationId` - [/plants/{plant-id}?include-locations=true](#operation/LookupPlant)
     * 1. `detectionMethodId`, `failureMechanismId`, `failureModeId` - [/plants/{plant-id}/tags/{tag-id}?include-catalog-profile-details=true](#operation/LookupTag) or [/equipment/{equipment-id}?include-catalog-profile-details=true](#operation/LookupEquipment)
     * 1. `codingId` - [/catalogs/{catalog-id}/code-groups](#operation/SearchCodeGroup)
     *
     *
     * ## Important information
     * To avoid accidentally overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * ### Update release 1.0.0
     * Added possibility to update plannerGroupId.
     *
     * ### Update release 1.1.0
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties to response according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     *
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * Added properties `codingGroupId` and `codingId`.
     *
     * ### Update release 1.29.0
     * Deprecated update of the property `failureImpactId`. See [Deprecation](#section/Deprecation/Deprecation-policy) for more information.
     *
     * ### Update release 1.32.0
     * Added ability to append text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current text.
     *
     * @returns FailureReportBasic Success, the failure report has been updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateFailureReport({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string,
        /**
         * Details on how to update the Failure Report
         */
        requestBody: Array<FailureReportJsonPatch>,
    }): CancelablePromise<FailureReportBasic | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/failure-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty text property was supplied`,
                403: `User does not have sufficient rights to update the failure report`,
            },
        });
    }

    /**
     * Activity report - Update
     * ## Overview
     * Update key fields of an activity report.
     *
     * ## Important information
     * To avoid accidentally overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.32.0
     * Added ability to append text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info.
     *
     * ### Update release 1.33.0
     * Added possibility to prepend text. Use the operation `prepend` in the request body to prepend text to the current text.
     *
     * @returns ActivityReportBasic Success, the activity report has been updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReport({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string,
        /**
         * Details on how to update the Activity Report
         */
        requestBody: Array<ActivityReportJsonPatch>,
    }): CancelablePromise<ActivityReportBasic | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/activity-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty value for text property was supplied`,
                403: `User does not have sufficient rights to update the activity report`,
            },
        });
    }

    /**
     * Modification Proposal - Lookup
     * ### Overview
     * Modification proposal initiates the processing of a modification, replacement or maintenance project.
     * In Equinor for upstream offshore, a modification proposal initiates the business processes 'OM103.01 - Initiate projects on plants in operation' or 'OM103.70.01 - Propose simple modifications in safety and automation systems'.
     * This request looks up a single Modification proposal.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.33.0
     * Added `taskResponsible` and `taskResponsibleEmail` for `tasks` in response when the new query parameter `include-task-responsible-details` is set to true.
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
        includeTaskResponsibleDetails = false,
    }: {
        recordId: string,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include task responsible details. Can have a slight performance impact.
         */
        includeTaskResponsibleDetails?: boolean,
    }): CancelablePromise<ModificationProposal | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/modification-proposals/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-tasks': includeTasks,
                'include-status-details': includeStatusDetails,
                'include-attachments': includeAttachments,
                'include-created-by-details': includeCreatedByDetails,
                'include-task-responsible-details': includeTaskResponsibleDetails,
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
     * ### Update release 1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * ### Update release 1.26.0
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.33.0
     * Added `changedDateTime` to the response.
     *
     * Added `taskResponsible` and `taskResponsibleEmail` for `tasks` in response when the new query parameter `include-task-responsible-details` is set to true.
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
        includeTaskResponsibleDetails = false,
    }: {
        /**
         * The recordId of the technical information update request
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean,
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include task responsible details. Can have a slight performance impact.
         */
        includeTaskResponsibleDetails?: boolean,
    }): CancelablePromise<TechnicalInformationUpdateRequest | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-information-update-requests/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tasks': includeTasks,
                'include-attachments': includeAttachments,
                'include-tag-details': includeTagDetails,
                'include-person-responsible': includePersonResponsible,
                'include-created-by-details': includeCreatedByDetails,
                'include-task-responsible-details': includeTaskResponsibleDetails,
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
     * Technical clarification - Lookup
     * ### Overview
     * Lookup a single technical clarification.
     *
     * Represents a request for technical clarification when not covered by other maintenance records (such as failure-reports and corrective-work-orders).
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides additional information for this maintenance record type.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * ### Update release 1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release 1.26.0
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### update release 1.33.0
     * Added `taskResponsible` and `taskResponsibleEmail` for `tasks` in response when the new query parameter `include-task-responsible-details` is set to true.
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
        includeTaskResponsibleDetails = false,
    }: {
        /**
         * The recordId of the technical clarification
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include details about tag for technical clarification
         */
        includeTagDetails?: boolean,
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include task responsible details. Can have a slight performance impact.
         */
        includeTaskResponsibleDetails?: boolean,
    }): CancelablePromise<TechnicalClarification | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-clarifications/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tasks': includeTasks,
                'include-attachments': includeAttachments,
                'include-tag-details': includeTagDetails,
                'include-person-responsible': includePersonResponsible,
                'include-created-by-details': includeCreatedByDetails,
                'include-task-responsible-details': includeTaskResponsibleDetails,
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
