/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrectiveWorkOrder } from '../models/CorrectiveWorkOrder';
import type { CorrectiveWorkOrderBasic } from '../models/CorrectiveWorkOrderBasic';
import type { CorrectiveWorkOrderCreate } from '../models/CorrectiveWorkOrderCreate';
import type { CorrectiveWorkOrderSimple } from '../models/CorrectiveWorkOrderSimple';
import type { Equipment } from '../models/Equipment';
import type { EquipmentSearchItem } from '../models/EquipmentSearchItem';
import type { FailureReportBasic } from '../models/FailureReportBasic';
import type { FailureReportCreate } from '../models/FailureReportCreate';
import type { FailureReportSimpleForSearch } from '../models/FailureReportSimpleForSearch';
import type { Measurement } from '../models/Measurement';
import type { MeasurementCreate } from '../models/MeasurementCreate';
import type { MeasurementUpdate } from '../models/MeasurementUpdate';
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { ModificationWorkOrder } from '../models/ModificationWorkOrder';
import type { ModificationWorkOrderBasic } from '../models/ModificationWorkOrderBasic';
import type { ModificationWorkOrderCreate } from '../models/ModificationWorkOrderCreate';
import type { PreventiveWorkOrder } from '../models/PreventiveWorkOrder';
import type { PreventiveWorkOrderBasic } from '../models/PreventiveWorkOrderBasic';
import type { PreventiveWorkOrderCreate } from '../models/PreventiveWorkOrderCreate';
import type { PreventiveWorkOrderSimple } from '../models/PreventiveWorkOrderSimple';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { ProjectWorkOrder } from '../models/ProjectWorkOrder';
import type { ProjectWorkOrderBasic } from '../models/ProjectWorkOrderBasic';
import type { ProjectWorkOrderCreate } from '../models/ProjectWorkOrderCreate';
import type { ProjectWorkOrderSimple } from '../models/ProjectWorkOrderSimple';
import type { SASChangeWorkOrder } from '../models/SASChangeWorkOrder';
import type { SASChangeWorkOrderBasic } from '../models/SASChangeWorkOrderBasic';
import type { SASChangeWorkOrderCreate } from '../models/SASChangeWorkOrderCreate';
import type { SASChangeWorkOrderSimple } from '../models/SASChangeWorkOrderSimple';
import type { SubseaWorkOrder } from '../models/SubseaWorkOrder';
import type { SubseaWorkOrderMaterialForAddMaterialResponse } from '../models/SubseaWorkOrderMaterialForAddMaterialResponse';
import type { Tag } from '../models/Tag';
import type { TagSearch } from '../models/TagSearch';
import type { WorkOrderChangeLogs } from '../models/WorkOrderChangeLogs';
import type { WorkOrderInPlan } from '../models/WorkOrderInPlan';
import type { WorkOrderMaterialAdd } from '../models/WorkOrderMaterialAdd';
import type { WorkOrderMaterialForAddMaterialResponse } from '../models/WorkOrderMaterialForAddMaterialResponse';
import type { WorkOrderServiceOperationJsonPatch } from '../models/WorkOrderServiceOperationJsonPatch';
import type { WorkOrderTypes } from '../models/WorkOrderTypes';
import type { WorkOrderWithOperationList } from '../models/WorkOrderWithOperationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

    /**
     * Tag - Lookup
     * ### Overview
     * Lookup a single tag with related information
     *
     * ### Update release 0.9.0
     * Added `include-measuring-points` and `include-last-measurement` query parameters.
     *
     * ### Update release 1.1.0
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
     * ### Update release 1.3.0
     * Added `workCenterId`, `workCenterPlantId`, `workCenter`, `planningPlantId`,`plannerGroupId` and `plannerGroup` properties.
     *
     * Added `include-bill-of-materials` query parameter.
     *
     * ### Update release 1.5.0
     * Added `revisionId` and `revision` to related work orders (represents shutdown or campaign work).
     *
     * ### Update release 1.8.0
     * Added properties `hasUnsafeFailureMode` and `unsafeFailureModeStatus` for failure reports.
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release 1.11.0
     * Added property `costWBSId`.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to response.
     *
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * Added `modification-proposal` as a maintenance record type to include with `include-maintenance-record-types` parameter.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics.
     *
     * Added query parameters `include-attachments` and `include-url-references`.
     *
     * Added property `workCenterId`
     *
     * ### Update release 1.21.0
     * Added property `area`.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * Added property `cmrIndicator` for WorkOrders
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.28.0
     * `billOfMaterials` now include the property `parentMaterialId`
     *
     * Added `materialId` and `material` to the response
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `createdOnDate` and `changedOnDate`.
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     *
     * ### Update future release
     *
     * Added new property `hasCommunication`
     *
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTag({
        plantId,
        tagId,
        includeMaintenanceRecords = false,
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
        /**
         * Plants or maintenance plants to include tags from.
         */
        plantId: string,
        tagId: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Include installed equipment
         */
        includeInstalledEquipment?: boolean,
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean,
        /**
         * Include Maintenance Plan items this functional location is part of
         */
        includeMaintenancePlanItems?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include bill of materials (also known as structure list) for tag and installed equipment
         */
        includeBillOfMaterials?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include linear data
         */
        includeLinearData?: boolean,
    }): CancelablePromise<Tag | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tags/{tag-id}',
            path: {
                'plant-id': plantId,
                'tag-id': tagId,
            },
            query: {
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-installed-equipment': includeInstalledEquipment,
                'include-catalog-profile-details': includeCatalogProfileDetails,
                'include-maintenance-plan-items': includeMaintenancePlanItems,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-characteristics': includeCharacteristics,
                'include-bill-of-materials': includeBillOfMaterials,
                'include-attachments': includeAttachments,
                'include-url-references': includeUrlReferences,
                'include-status-details': includeStatusDetails,
                'include-linear-data': includeLinearData,
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
     * `/equipment/11948620?include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteristics=true&include-status-details=true&api-version=v1` - Lookup equipment with status details and characteristics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
     *
     * ### Update release 1.4.0
     * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
     *
     * ### Update release 1.5.0
     * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
     *
     * Bugfix for include-work-orders related to deleted equipment reservations.
     *
     * Added revisionId and revision to related work orders (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
     *
     * ### Update release 1.7.0
     * Added property parentEquipmentId.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release 1.12.0
     * Added properties `equipmentCategoryId` and `quantityUnitId`.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to the lastMeasurement.
     *
     * Added query parameter `include-url-references`.
     *
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * ### Update release 1.17.0
     * Add property `characteristics` to `urlReferences` in response
     *
     * Add query parameter `include-url-characteristics`
     *
     * ### Update release 1.21.0
     * Added query parameter `include-person-responsible`, that expands work order response with person responsible.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * Added property `cmrIndicator` for WorkOrders
     *
     * ### Update release 1.25.0
     * Added query parameter `include-sub-equipment`
     *
     * ### Update release 1.26.0
     * Added properties `tagId` and `tagPlantId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Added properties `manufacturerPartNumber`, `technicalIdentificationNumber`, `objectWeight` and `unitOfWeight`to response body.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.34.0
     * Added property `linkedEquipment`, which can be included in the response by using the new query parameter `include-linked-equipment`.
     *
     * Added boolean property `hasLinkageToEquipment` that will be true if the equipment has any linked equipment.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `createdOnDate` and `changedOnDate`.
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     * Added new work order type `overHeadMaintenanceWorkOrders` to response.
     *
     * @returns Equipment Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupEquipment({
        equipmentId,
        includeMaintenanceRecords = false,
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
        includePersonResponsible = false,
        includeSubEquipment = false,
        includeStatusDetails = false,
        includeLinkedEquipment = false,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Limit include-maintenance-records to only open maintenance records
         */
        includeOnlyOpenMaintenanceRecords?: boolean,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Limit include-work-orders to only open work order
         */
        includeOnlyOpenWorkOrders?: boolean,
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean,
        /**
         * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Include characteristics for URL References
         */
        includeUrlCharacteristics?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Include child equipment for an equipment.
         * Limit to only the first level childs of the hierarchy.
         *
         */
        includeSubEquipment?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include list of equipment that are physically linked to this equipment.
         */
        includeLinkedEquipment?: boolean,
    }): CancelablePromise<Equipment | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment/{equipment-id}',
            path: {
                'equipment-id': equipmentId,
            },
            query: {
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-only-open-maintenance-records': includeOnlyOpenMaintenanceRecords,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-only-open-work-orders': includeOnlyOpenWorkOrders,
                'include-catalog-profile-details': includeCatalogProfileDetails,
                'include-characteristics': includeCharacteristics,
                'include-attachments': includeAttachments,
                'include-url-references': includeUrlReferences,
                'include-url-characteristics': includeUrlCharacteristics,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-person-responsible': includePersonResponsible,
                'include-sub-equipment': includeSubEquipment,
                'include-status-details': includeStatusDetails,
                'include-linked-equipment': includeLinkedEquipment,
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
     * * `characteristic-value-any-of`
     * * `equipment-any-of`
     * * `technical-identification-number-any-of`
     * * `maintenance-concept-id-any-of`
     * * `equipment-category-id-any-of`
     *
     * These parameters allow a comma-separated list of entries.
     *
     * If more than one of these parameters are supplied in the same request, the equipment in the response will need to fulfill all parameters (the 'AND' operator will be used between the parameters).
     *
     * Query parameters `include-only-open-maintenance-records` and `include-only-open-work-orders` have a recommended value of `true` in order to improve performance (default value `false`).
     *
     * ### Important information
     * For warehouse and logistics data of an equipment, use SCM Logistics API.
     *
     * ### Example usage
     * `/equipment?serial-number-any-of=4500695422-20-003,4500695422-20-004&include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteristics=true&api-version=v1` - Search equipment based on serialNumber with characteritics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
     *
     * When using the `characteristic-value-any-of` it is important to URI Encode the input data especially when there are special characters as part of the input:
     *
     * `/equipment?characteristic-value-any-of=%3D17445%2F9818,%3D17433/6333&class-id=L_PART&characteristic-id=L_E3DREF&plant-id=1201&api-version=v1`
     *
     * ### Update release 1.4.0
     * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
     *
     * ### Update release 1.5.0
     * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
     *
     * Bugfix for include-work-orders related to deleted equipment reservations.
     *
     * Added revisionId and revision to related work orders (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
     *
     * ### Update release 1.7.0
     * Added property parentEquipmentId.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release 1.12.0
     * Added property `quantityUnitId`
     *
     * ### Update release 1.15.0
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * ### Update release 1.21.0
     * Added query parameter `include-person-responsible`, that expands work order response with person responsible.
     *
     * ### Update release 1.22.0
     * Added `include-measuring-points` and `include-last-measurement` query parameters.
     *
     * ### Update release 1.24.0
     * Added `characteristic-value-any-of`, `class-id`, `characteristic-id` and `plant-id-any-of` query parameters.
     * Can be used to search for equipment based on values of a characteristic.
     * In addition, an optional filter on a plant can be supplied.
     *
     * Added property `cmrIndicator` for WorkOrders.
     *
     * Added query parameter `equipment-any-of`, a wildcard search based on `equipment`
     *
     * ### Update release 1.25.0
     * Added query parameter `include-sub-equipment`
     *
     * ### Update release 1.26.0
     * Added query parameter `include-status-details`.
     * Added properties `tagId` and `tagPlantId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Added properties `manufacturerPartNumber`, `technicalIdentificationNumber`, `objectWeight` and `unitOfWeight`to response body.
     *
     * Added query parameter `technical-identification-number-any-of` to allow searching based on `technicalIdentificationNumber`.
     *
     * ### Update release 1.34.0
     * Added property `linkedEquipment`, which can be included in each equipment in the response by using the new query parameter `include-linked-equipment`.
     *
     * Added boolean property `hasLinkageToEquipment` that will be true if the equipment has any linked equipment.
     *
     * ### Update release 1.35.0
     * Added support for including attachments on equipments in the response by setting the new query parameter `include-attachments` to true.
     *
     * Added new fields `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate` to response body.
     *
     * Added new filters based on the new fields - `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate`.
     *
     * ### Update release 1.36.0
     * Added new properies `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     * Added new work order type `overHeadMaintenanceWorkOrders` to response.
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
        characteristicValueAnyOf,
        plantIdAnyOf,
        equipmentAnyOf,
        technicalIdentificationNumberAnyOf,
        characteristicId,
        classId,
        equipmentCategoryIdAnyOf,
        maintenanceConceptIdAnyOf,
        createdBeforeDate,
        createdAfterDate,
        changedBeforeDate,
        changedAfterDate,
        includeMaintenanceRecords = false,
        includeMaintenanceRecordTypes,
        includeOnlyOpenMaintenanceRecords = false,
        includeWorkOrders = true,
        includePersonResponsible = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeSubEquipment = false,
        includeStatusDetails = false,
        includeWorkOrderTypes,
        includeOnlyOpenWorkOrders = false,
        includeCharacteristics = false,
        includeLinkedEquipment = false,
        includeAttachments = false,
        perPage = 20,
        page = 1,
    }: {
        /**
         * Search based on equipmentIds. Wildcards are supported
         */
        equipmentIdAnyOf?: Array<string>,
        /**
         * Search based on serialNumber. Wildcards are supported
         */
        serialNumberAnyOf?: Array<string>,
        /**
         * Search based on partNumber. Wildcards are supported
         */
        vendorPartNumberAnyOf?: Array<string>,
        /**
         * Search based on materialId. Wildcards are supported
         */
        materialIdAnyOf?: Array<string>,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id` Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Optional comma separated string array of plant-ids to filter your result to one or more plants (`plantId`) or maintenance plants (`maintenancePlantId`). Wildcards are not supported. This query parameter can not be used on its own.
         */
        plantIdAnyOf?: string,
        /**
         * Optional comma separated string array of equipment descriptions/titles (`equipment` in response model). Wildcards are supported.
         */
        equipmentAnyOf?: string | null,
        /**
         * Optional comma separated string array of technical identification numbers (`technicalIdentificationNumber` in response model). Wildcards are not supported.
         */
        technicalIdentificationNumberAnyOf?: string,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Optional comma separated string array of equipment category Id (`equipmentCategoryId` in response model). Wildcards are not supported.
         */
        equipmentCategoryIdAnyOf?: Array<string>,
        /**
         * Optional comma separated string array of Maintenance Concept Ids (`maintenanceConceptId` in response model). Wildcards are not supported.
         */
        maintenanceConceptIdAnyOf?: Array<string>,
        /**
         * Latest `createdOnDate` date to include. Use together with `created-after-date` to get Equipment created in the given time period.
         */
        createdBeforeDate?: string | null,
        /**
         * Earliest `createdOnDate` date to include. Use together with `created-before-date` to get Equipment created in the given time period.
         */
        createdAfterDate?: string | null,
        /**
         * Latest `changedOnDate` date to include. Use together with `changed-after-date` to get Equipment changed in the given time period.
         */
        changedBeforeDate?: string | null,
        /**
         * Earliest `changedOnDate` date to include. Use together with `changed-before-date` to get Equipment changed in the given time period.
         */
        changedAfterDate?: string | null,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Limit include-maintenance-records to only open maintenance records. Recommend using `true` in order to improve performance.
         */
        includeOnlyOpenMaintenanceRecords?: boolean,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include child equipment for an equipment.
         * Limit to only the first level childs of the hierarchy.
         *
         */
        includeSubEquipment?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Limit include-work-orders to only open work order
         */
        includeOnlyOpenWorkOrders?: boolean,
        /**
         * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean,
        /**
         * Include list of equipment that are physically linked to this equipment.
         */
        includeLinkedEquipment?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<EquipmentSearchItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment',
            query: {
                'equipment-id-any-of': equipmentIdAnyOf,
                'serial-number-any-of': serialNumberAnyOf,
                'vendor-part-number-any-of': vendorPartNumberAnyOf,
                'material-id-any-of': materialIdAnyOf,
                'characteristic-value-any-of': characteristicValueAnyOf,
                'plant-id-any-of': plantIdAnyOf,
                'equipment-any-of': equipmentAnyOf,
                'technical-identification-number-any-of': technicalIdentificationNumberAnyOf,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'equipment-category-id-any-of': equipmentCategoryIdAnyOf,
                'maintenance-concept-id-any-of': maintenanceConceptIdAnyOf,
                'created-before-date': createdBeforeDate,
                'created-after-date': createdAfterDate,
                'changed-before-date': changedBeforeDate,
                'changed-after-date': changedAfterDate,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-only-open-maintenance-records': includeOnlyOpenMaintenanceRecords,
                'include-work-orders': includeWorkOrders,
                'include-person-responsible': includePersonResponsible,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-sub-equipment': includeSubEquipment,
                'include-status-details': includeStatusDetails,
                'include-work-order-types': includeWorkOrderTypes,
                'include-only-open-work-orders': includeOnlyOpenWorkOrders,
                'include-characteristics': includeCharacteristics,
                'include-linked-equipment': includeLinkedEquipment,
                'include-attachments': includeAttachments,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Measuring point - Lookup
     * ### Overview
     * Lookup a single measuring point.
     *
     * A measuring point represents the physical or virtual location at which process values, events or conditions are described. For instance a temperature reader, pressure sensor, or a spot on a pipe where thickness is measured.
     *
     * Measuring points indicate where measurements (or derived/calculated values) occur.
     *
     * A measuring point is normally connected to a tag or equipment, facilitating the monitoring of its state and performance.
     *
     * ### Important information
     * Measuring points support quantitative (example 3mm), qualitative (example YES) or combination of the two when creating measurements for the measuring point.
     *
     * Quantitative measurements are defined by quantitativeCharacteristicId and have a unit of measure.
     *
     * Qualitative measurement codes are defined by qualitativeCodeGroupId.
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to response.
     *
     * ### Update release 1.21.0
     * Measuring points for equipment now include the `tagId` and `tagPlantId` of the tag the equipment is installed on.
     *
     * ### Update release 1.37.0
     * Added `include-measurement-text` query parameter to include measurement text in the response.
     *
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupMeasuringPoint({
        pointId,
        includeLastMeasurement = false,
        includeMeasurements = false,
        includeQualitativeCodeGroup = false,
        includeCharacteristics = false,
        includeCharacteristicsWithoutValue = false,
        includeMeasurementText = false,
    }: {
        /**
         * Measuring point id
         */
        pointId: string,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include measurements of the measuring point
         */
        includeMeasurements?: boolean,
        /**
         * Include possible codes for qualitative measurements if qualitativeCodeGroupId is set
         */
        includeQualitativeCodeGroup?: boolean,
        /**
         * Include characteristics with defined value for the measuring point. Use `include-characteristics-without-value` to retrieve all characteristics available for the measuring point.
         */
        includeCharacteristics?: boolean,
        /**
         * Include all characteristics available for the measuring point regardless if they have a defined value or not. Use `include-characteristics` to only include characteristics with defined value for the measuring point.
         */
        includeCharacteristicsWithoutValue?: boolean,
        /**
         * Include measurement text in the response
         */
        includeMeasurementText?: boolean,
    }): CancelablePromise<MeasuringPoint | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measuring-points/{point-id}',
            path: {
                'point-id': pointId,
            },
            query: {
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-qualitative-code-group': includeQualitativeCodeGroup,
                'include-characteristics': includeCharacteristics,
                'include-characteristics-without-value': includeCharacteristicsWithoutValue,
                'include-measurement-text': includeMeasurementText,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Measurement - Create
     * Create new measurement for measuring point.
     *
     * ### Important information
     * Measuring points support quantitative (example 3mm), qualitative (example YES) or combination of the two when creating measurements for the measuring point.
     *
     * Quantitative measurements are defined by quantitativeCharacteristicId property of the measuring point. Make sure the quantitativeReading is in the reading unit of the measuring point.
     *
     * Qualitative measurement codes are defined by qualitativeCodeGroupId property of the measuring point.
     *
     * ### Update release 1.10.0
     * Added `maintenanceRecordId` to request.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to request and response.
     *
     * ### Update release 1.37.0
     * Add support for `text` in the request body and response.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns Measurement Created
     * @throws ApiError
     */
    public static createMeasurement({
        pointId,
        requestBody,
    }: {
        /**
         * Measuring point id
         */
        pointId: string,
        /**
         * Measurement of measuring point to create
         */
        requestBody: MeasurementCreate,
    }): CancelablePromise<ProblemDetails | Measurement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measuring-points/{point-id}/measurements',
            path: {
                'point-id': pointId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request - Can occur if quantitative and qualitative measurements provided are not supported by measuring point`,
                403: `User does not have sufficient rights to create a measurement of measuring point`,
            },
        });
    }

    /**
     * Measurement - Update
     * Update a measurement for measuring point.
     * The supported fields are: `measurementTitle` and `processingStatusId`.
     *
     * ### Update release 1.37.0
     * Add support for `text` in the request body.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateMeasurement({
        pointId,
        measurementId,
        requestBody,
    }: {
        /**
         * Measuring point id
         */
        pointId: string,
        /**
         * Measurement id
         */
        measurementId: string,
        /**
         * Fields in measuring point to update
         */
        requestBody: Array<MeasurementUpdate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measuring-points/{point-id}/measurements/{measurement-id}',
            path: {
                'point-id': pointId,
                'measurement-id': measurementId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update a measurement of measuring point`,
            },
        });
    }

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
     *
     * **For this filter, `plan-period-start` is required.**
     * All other parameters are optional.
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?filter=by-plan-period&plan-period-start=2023-03-02&plan-period-duration=P21D&location-id-any-of=CD00&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     * - `/work-order-plan/{planning-plant-id}?filter=by-plan-period&plan-period-start=2023-03-02&plan-period-duration=P21D&work-center-id-any-of=C31*&include-completed-work-order-operations=false&api-version=v1`
     *
     * ### Filter: by-person-responsible
     * Get the work order plan for a specific planning plant, but only for work orders assigned to a specific user.
     * Normally, work orders will not be assigned directly to a user, but in some work processes (such as inspection), this occurs.
     *
     * **For this filter, it is required to provide either `person-responsible-id` or `person-responsible-email` (but not both).**
     * All other parameters are optional.
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?filter=by-person-responsible&person-responsible-email=shortname@equinor.com&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
     * ### Update release 1.26.0
     * Added query parameter `work-center-id-any-of`.
     *
     * ### Update release 1.29.0
     * Added properties `cmrIndicator` and `maintenanceRecordId`.
     *
     * ### Update release 1.34.0
     * Added following filter options:
     * - `main-work-center-id-any-of`
     * - `status-any-of`
     * - `status-not`
     * - `operation-notes-any-of`
     *
     * Added following fields to the response:
     * - `personResponsible`
     * - `mainWorkCenterId`
     *
     * ### Update release 1.36.0
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     * Added `overheadMaintenanceWorkOrders` to `work-order-types-any-of` query parameter.
     *
     * @returns WorkOrderInPlan Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderPlan({
        planningPlantId,
        filter,
        planPeriodStart,
        planPeriodDuration,
        personResponsibleEmail,
        personResponsibleId,
        includeCompletedWorkOrderOperations = false,
        includePersonResponsible = false,
        workOrderTypesAnyOf,
        workCenterIdAnyOf,
        mainWorkCenterIdAnyOf,
        revisionIdAnyOf,
        locationIdAnyOf,
        statusAnyOf,
        statusNot,
        operationNotesAnyOf,
    }: {
        /**
         * Planning plant to retrieve work order plan for
         */
        planningPlantId: string,
        /**
         * Filter to limit the work order plan by
         */
        filter: 'by-plan-period' | 'by-person-responsible',
        /**
         * Start of plan period (`/plants/{plant-id}?include-baseline-plans=true` can be used as a reference). Required for `filter=by-plan-period`.
         */
        planPeriodStart?: string,
        /**
         * Duration of plan period
         */
        planPeriodDuration?: string,
        /**
         * Email address for responsible person. Should not be used in combination with `person-responsible-id`.
         */
        personResponsibleEmail?: string,
        /**
         * Id for responsible person. Should not be used in combination with `person-responsible-email`.
         */
        personResponsibleId?: string,
        /**
         * Include Work Order Plans with completed work order operations
         */
        includeCompletedWorkOrderOperations?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Limit to specific work order types (any-of). Default includes all types
         */
        workOrderTypesAnyOf?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Comma-separated list of work-center-id
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of main-work-center-id
         */
        mainWorkCenterIdAnyOf?: string,
        /**
         * Comma-separated list of revision-id
         */
        revisionIdAnyOf?: string,
        /**
         * Comma-separated list of location-id
         */
        locationIdAnyOf?: string,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on `planNotes` in operations
         */
        operationNotesAnyOf?: string,
    }): CancelablePromise<Array<WorkOrderInPlan> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-plan/{planning-plant-id}',
            path: {
                'planning-plant-id': planningPlantId,
            },
            query: {
                'filter': filter,
                'plan-period-start': planPeriodStart,
                'plan-period-duration': planPeriodDuration,
                'person-responsible-email': personResponsibleEmail,
                'person-responsible-id': personResponsibleId,
                'include-completed-work-order-operations': includeCompletedWorkOrderOperations,
                'include-person-responsible': includePersonResponsible,
                'work-order-types-any-of': workOrderTypesAnyOf,
                'work-center-id-any-of': workCenterIdAnyOf,
                'main-work-center-id-any-of': mainWorkCenterIdAnyOf,
                'revision-id-any-of': revisionIdAnyOf,
                'location-id-any-of': locationIdAnyOf,
                'status-any-of': statusAnyOf,
                'status-not': statusNot,
                'operation-notes-any-of': operationNotesAnyOf,
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
     * * `personResponsibleId` and `personResponsibleEmail`
     * * `isProductionCritical` and `isHSECritical`
     * * `workCenter`
     * * `plannerGroup`
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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * ### Update release 1.34.0
     * Added new properties `callNumber`, `previousCall`, and `completionDate` to `maintenancePlan`.
     *
     * Added new property `relatedOperations` to `maintenanceRecords` and `tagsRelated`.
     * Also added query parameter `include-related-operations` to include the property `relatedOperations`.
     *
     * Added properties `additionalCostWBSId`, `additionalCostWBS`, `costWBS`, `costWBSId` and `requiredEndDate` to the response.
     *
     * ### Update release 1.35.0
     * Added new property `dueDate` to the response. Removed the property `requiredEndDate`.
     *
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * Added new query parameter `include-estimated-costs`. Set to `true` to include `estimatedCosts` array in the response.
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency`.
     *
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * ### Upcoming future release
     * Added new property  `hasCommunication`
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
        includeCostDataForMaterials = false,
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
        includeRelatedOperations = false,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
         * Include detailed information for the main tag of the Work order
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
         * Includes the property `relatedOperations` in the response to expose operations that are related to an object in the objectlist (only relevant for related tags and related maintenance records).
         */
        includeRelatedOperations?: boolean,
        /**
         * Include estimated costs
         */
        includeEstimatedCosts?: boolean,
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
                'include-cost-data-for-materials': includeCostDataForMaterials,
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
                'include-related-operations': includeRelatedOperations,
                'include-estimated-costs': includeEstimatedCosts,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`preventiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Preventive Work order - Search
     * ### Overview
     * Search for Preventive Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each preventive work order.
     * This can be found by performing a subsequent request to lookup preventive-work-order.
     *
     *
     * ### Filter: maintenance-plan-history
     * Based on the maintenance plan of the Preventive Work order provided, find other instances sorted by start date.
     * Parameters:
     * - `work-order-id`
     * - `earliest-date` (optional)
     * - `max-work-orders` (optional)
     *
     * ### Filter: recent-status-activations
     * Find Preventive work orders based on recent status activations for the work order.
     * Parameters:
     * - `status-id`
     * - `plant-id`
     * - `max-days-since-activation`
     *
     * ### Filter: before-planned-date
     * Find open Preventive work orders before the `before-planned-date`.
     * Parameters:
     * - `plant-id`
     * - `planned-date`
     * - `location-id` (optional)
     * - `system-id` (optional)
     *
     * ### Filter: by-maintenance-type-id
     * Find open Preventive work orders by `maintenance-type-id`.
     * Parameters:
     * - `plant-id`
     * - `maintenance-type-id`
     *
     * ### Update release 0.9.0
     * Added filter by-maintenance-type-id.
     *
     * ### Update release 0.11.0
     * Added `system-id` as optional parameter for filter `before-planned-date`.
     *
     * ### Update release 1.5.0
     * Added `revisionId` and `revision` to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.21.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * @returns PreventiveWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchPreventiveWorkOrders({
        filter,
        statusId,
        plantId,
        maxDaysSinceActivation,
        workOrderId,
        earliestDate,
        maxWorkOrders,
        locationId,
        plannedDate,
        systemId,
        maintenanceTypeId,
    }: {
        /**
         * Filter to limit the failure reports by
         */
        filter: 'recent-status-activations' | 'before-planned-date' | 'by-maintenance-type-id' | 'maintenance-plan-history',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Preventive Work order id
         */
        workOrderId?: string,
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        earliestDate?: string,
        /**
         * Maximal numbers of results returned (optional for filter)
         */
        maxWorkOrders?: number,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        plannedDate?: string,
        /**
         * system-id of the preventive work order
         * @deprecated
         */
        systemId?: string,
        /**
         * Type of maintenance for the work order
         */
        maintenanceTypeId?: string,
    }): CancelablePromise<Array<PreventiveWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/preventive-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'max-days-since-activation': maxDaysSinceActivation,
                'work-order-id': workOrderId,
                'earliest-date': earliestDate,
                'max-work-orders': maxWorkOrders,
                'location-id': locationId,
                'planned-date': plannedDate,
                'system-id': systemId,
                'maintenance-type-id': maintenanceTypeId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * @deprecated
     * Preventive Work order - Create
     * ### Overview
     * Create new Preventive Work order.
     *
     * In addition to the required fields, one also needs to supply either `equipmentId` or a Tag (`tagPlantId`-`tagId`)
     *
     * It's possible to supply operations in the add operations endpoint. If no operations are passed, a default operation will be created automatically.
     *
     * To lookup the created preventive work order use endpoint `/work-orders/preventive-work-orders/{work-order-id}`
     *
     * ### Important information ###
     * There is an on-going initiative to prevent the possibility to create PM02 work orders in SAP (with the exception of MaintenancePlans). As of Release 1.36.0 on 21.01.2025, the usage of this endpoint is limited to applications with dispensation for usage, documented in disp.equinor.com.
     *
     *
     * To use this endpoint, your business process must be approved by O&M owners. To raise this request, please create a disp on disp.equinor.com, and raise this in O&M [Stryo board](https://equinor.service-now.com/rm_story.do?sys_id=-1&sysparm_stack=rm_story_list.do&sysparm_view=scrum&sysparm_query=rm_story.do%3Fsys_id%3D-1%26sysparm_query%3Dactive%3Dtrue%26sysparm_stack%3Drm_story_list.do%3Fsysparm_query%3Dactive%3Dtrue).
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to the response.
     *
     * Endpoint is now limited.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns PreventiveWorkOrderBasic Created
     * @throws ApiError
     */
    public static createPreventiveWorkOrder({
        requestBody,
    }: {
        /**
         * Preventive Work order to create
         */
        requestBody: PreventiveWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | PreventiveWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/preventive-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `Client is not allowed to access the endpoint. Please contact the APIphany-team to request access.`,
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
     * Added new query parameter `include-safety-measure`
     *
     * Added new query parameter `include-estimated-costs`
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
     * Added `agreement` & `agreementItem` on `serviceOperations` and `grossPrice`, `netValue` & `currency` on `services`
     *
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`
     *
     * ### Update release 1.34.0
     * Added new property `relatedOperations` to `maintenanceRecords` and `tagsRelated`.
     * Also added query parameter `include-related-operations` to include the property `relatedOperations`.
     *
     * Added new properties `isHSECritical` and `isProductionCritical` to the response.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * ### Update release 1.36.0
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * ### Upcoming future release
     * Added new property  `hasCommunication`
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
        includeCostDataForMaterials = false,
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
        includeRelatedOperations = false,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
         * Include detailed information for the main tag of the Work order
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
        /**
         * Includes the property `relatedOperations` in the response to expose operations that are related to an object in the objectlist (only relevant for related tags and related maintenance records).
         */
        includeRelatedOperations?: boolean,
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
                'include-cost-data-for-materials': includeCostDataForMaterials,
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
                'include-related-operations': includeRelatedOperations,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`correctiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Search
     * ### Overview
     * Search for corrective Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each corrective work order.
     * This can be found by performing a subsequent request to Lookup corrective-work-order.
     *
     * ### Filter: recent-status-activations
     * Find Corrective work orders based on recent status activations for the work orders.
     * Parameters:
     * - `status-id`
     * - `plant-id`
     * - `max-days-since-activation`
     *
     * ### Filter: before-required-end-date
     * Find open Corrective work orders before the `required-end-date`.
     * Parameters:
     * - `plant-id`
     * - `required-end-date`
     * - `location-id` (optional)
     * - `system-id` (optional)
     *
     * ### Filter: by-maintenance-type-id
     * Find open Corrective work orders by `maintenance-type-id`.
     * Parameters:
     * - `plant-id`
     * - `maintenance-type-id`
     *
     * ### Update release 0.9.0
     * Added filter `by-maintenance-type-id`.
     *
     * ### Update release 0.11.0
     * Added `system-id` as optional parameter for filter `before-required-end-date`.
     *
     * ### Update release 1.5.0
     * Added `revisionId` and `revision` to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.21.0
     * Added properties `costs` and `costsCurrency`.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.36.0
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * @returns CorrectiveWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCorrectiveWorkOrder({
        filter,
        statusId,
        plantId,
        maxDaysSinceActivation,
        maxWorkOrders,
        locationId,
        requiredEndDate,
        systemId,
        maintenanceTypeId,
    }: {
        /**
         * Filter to limit the Corrective work order by
         */
        filter: 'recent-status-activations' | 'same-maintenance-plan' | 'before-required-end-date' | 'by-maintenance-type-id',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Maximal numbers of results returned (optional for filter)
         */
        maxWorkOrders?: number,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * placeholder
         */
        requiredEndDate?: string,
        /**
         * system-id of the corrective work order
         * @deprecated
         */
        systemId?: string,
        /**
         * Type of maintenance for the work order
         */
        maintenanceTypeId?: string,
    }): CancelablePromise<Array<CorrectiveWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'max-days-since-activation': maxDaysSinceActivation,
                'max-work-orders': maxWorkOrders,
                'location-id': locationId,
                'required-end-date': requiredEndDate,
                'system-id': systemId,
                'maintenance-type-id': maintenanceTypeId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Create
     * ### Overview
     * Create new Corrective Work order based on a supplied failure report.
     *
     * It's possible to supply operations in the create operation. If no operations are passed, a default operation will be created automatically.
     *
     * To lookup the created corrective work order use endpoint `/work-orders/corrective-work-orders/{work-order-id}`
     *
     * ### Important information
     *
     * Up until release 1.32.0, we have enabled creating operations with `operationId` `0010` through the API, allowing the user to customize this operation during creation.
     *
     * Starting from release 1.32.0, the API logic for creating operations has been aligned with the new logic enforced by the SAP backend system. The new logic adds operations from the task list of any failure report that the work order is created from.
     *
     * As a result, creating an operation with a reserved `operationId` is no longer allowed.
     * This always affects operations with `operationId` equal to `0010`, but can also apply to other operations.
     *
     * To see which operations are already reserved, use `/maintenance-api/maintenance-records/failure-reports/{record-id}&include-task-list=true`
     *
     * ### Update release 1.1.0
     * Added externalPartnerWorkOrderId property to be used as reference to work order in external partner system.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * Added sortField and revisionId to create request. Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values for `revisionId`.
     *
     * ### Update release 1.8.0
     * Added support for calculation key on operation level. It determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * ### Update release 1.21.0
     * Add property `IsExcludedFromWorkOrderPlan` to operations model.
     *
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.32.0
     * Restriction to create a work order with operationId `0010` and other reserved operationIds.
     *
     * To see which operationIds are already reserved, use `/maintenance-api/maintenance-records/failure-reports/{record-id}&include-task-list=true`
     *
     * ### Update release 1.36.0
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from the response. See STRY0261073 in ServiceNow for more details.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CorrectiveWorkOrderBasic Created
     * @throws ApiError
     */
    public static createCorrectiveWorkOrder({
        requestBody,
    }: {
        /**
         * Corrective Work order to create
         */
        requestBody: CorrectiveWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | CorrectiveWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to create a Project Work order`,
                404: `The specified resource was not found`,
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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * ### Update release 1.34.0
     * Added new property `relatedOperations` to `maintenanceRecords` and `tagsRelated`.
     * Also added query parameter `include-related-operations` to include the property `relatedOperations`.
     *
     * Added properties `additionalCostWBSId`, `additionalCostWBS`, `requiredEndDate`, `isHSECritical` and `isProductionCritical` to the response.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * ### Update release 1.36.0
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
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
        includeCostDataForMaterials = false,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeSafetyMeasures = false,
        includeRelatedOperations = false,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
         * Include detailed information for the main tag of the Work order
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
        /**
         * Includes the property `relatedOperations` in the response to expose operations that are related to an object in the objectlist (only relevant for related tags and related maintenance records).
         */
        includeRelatedOperations?: boolean,
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
                'include-cost-data-for-materials': includeCostDataForMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
                'include-related-operations': includeRelatedOperations,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`projectWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Search
     * ### Overview
     * Search for project Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each project work order.
     * This can be found by performing a subsequent request to Lookup project-work-order.
     *
     * ### Filter: open-by-plant
     * Find open Project Work orders by `plant-id`.
     * Parameters:
     * - `plant-id`
     * - `location-id` (optional)
     * - `system-id` (optional)
     *
     * ### Filter: recent-status-activations
     * Find Project work orders based on recent status activations for the work orders.
     * Parameters:
     * - `status-id`
     * - `plant-id`
     * - `max-days-since-activation`
     *
     * ### Filter: by-cost-network
     * Find Project work orders based on Cost Network Id.
     * Parameters:
     * - `cost-network-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-cost-wbs
     * Project work orders based on Cost WBS Id.
     * Parameters:
     * - `cost-wbs-id`
     * - `plant-id` (optional)
     *
     * ### Update release 1.4.0
     * Added location-id and system-id to filter `open-by-plant`.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.21.0
     * Added filter `by-cost-network`, with required parameter `cost-network-id` and optional parameter `plant-id`.
     *
     * ### Update release 1.24.0
     * Added filter `by-cost-wbs`, with required parameter `cost-wbs-id`. Can be used in combination with optional parameter `plant-id`.
     * This filter only includes work orders where the WBS is represented on the work order level.
     * It does not include work orders where WBS is only represented in the settlement rules.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.36.0
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * @returns ProjectWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchProjectWorkOrders({
        filter,
        statusId,
        plantId,
        costNetworkId,
        costWbsId,
        locationId,
        systemId,
        maxDaysSinceActivation,
    }: {
        /**
         * Filter to limit the Project work order by
         */
        filter: 'open-by-plant' | 'recent-status-activations' | 'by-cost-network' | 'by-cost-wbs',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Required parameter if `filter=by-cost-network`
         */
        costNetworkId?: string,
        /**
         * Required parameter if `filter=by-cost-wbs`
         */
        costWbsId?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * System id to filter by
         */
        systemId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
    }): CancelablePromise<Array<ProjectWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'cost-network-id': costNetworkId,
                'cost-wbs-id': costWbsId,
                'location-id': locationId,
                'system-id': systemId,
                'max-days-since-activation': maxDaysSinceActivation,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Create
     * ### Overview
     * Create new Project Work order
     *
     *
     * ### Update release 1.4.0
     * Fixed bug related to costNetworkId.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * Added sortField and revisionId to create request. Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values for `revisionId`.
     *
     * ### Update release 1.8.0
     * Added support for calculation key on operation level. It determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * ### Update release 1.19.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` to the response. See STRY0261073 in ServiceNow for more details.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ProjectWorkOrderBasic Created
     * @throws ApiError
     */
    public static createProjectWorkOrder({
        requestBody,
    }: {
        /**
         * Project Work order to create
         */
        requestBody: ProjectWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | ProjectWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/project-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to create a Project Work order`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Work order - Create
     * ### Overview
     * Create new Modification Work order based on a supplied failure report.
     *
     * It's possible to supply operations in the create operation. If no operations are passed, a default operation will be created automatically.
     *
     * To lookup the created corrective work order use endpoint `/work-orders/modification-work-orders/{work-order-id}`.
     *
     * ### Important information
     * The primary cost wbs of a modification work order is typically resolved automatically from the provided tag. However, in order to later set the modification work order to status `REL - Release`, you need to provide an additional cost wbs (property `additionalCostWBSId`) on creation.
     *
     * ### Update release 1.19.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from the response. See STRY0261073 in ServiceNow for more details.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ModificationWorkOrderBasic Created
     * @throws ApiError
     */
    public static createModificationWorkOrder({
        requestBody,
    }: {
        /**
         * Modification Work order to create
         */
        requestBody: ModificationWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | ModificationWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/modification-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to create a Project Work order`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Work order - Lookup
     * ### Overview
     * Lookup single Modification Work order with related information.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `modificationWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release 1.11.0
     * Added properties `additionalCostWBSId` and `additionalCostWBS`.
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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.34.0
     * Added new property `relatedOperations` to `maintenanceRecords` and `tagsRelated`.
     * Also added query parameter `include-related-operations` to include the property `relatedOperations`.
     *
     * Added property `requiredEndDate`, `isHSECritical` and `isProductionCritical` to the response.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * ### Update release 1.36.0
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
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
        includeCostDataForMaterials = false,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeSafetyMeasures = false,
        includeRelatedOperations = false,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
         * Include detailed information for the main tag of the Work order
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
        /**
         * Includes the property `relatedOperations` in the response to expose operations that are related to an object in the objectlist (only relevant for related tags and related maintenance records).
         */
        includeRelatedOperations?: boolean,
    }): CancelablePromise<ModificationWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/modification-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-materials': includeMaterials,
                'include-cost-data-for-materials': includeCostDataForMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
                'include-related-operations': includeRelatedOperations,
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
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.7.0
     * Added tagsRelated to the response.
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
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.34.0
     * Added properties `additionalCostWBSId`, `additionalCostWBS`, `costWBS`, `isHSECritical` and `isProductionCritical` to the response.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * ### Update release 1.36.0
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
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
        includeCostDataForMaterials = false,
        includeAttachments = false,
        includePersonResponsible = false,
        includeStatusDetails = false,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
        /**
         * Include Work order attachments (on header and for operation)
         */
        includeAttachments?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
    }): CancelablePromise<SubseaWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/subsea-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-materials': includeMaterials,
                'include-cost-data-for-materials': includeCostDataForMaterials,
                'include-attachments': includeAttachments,
                'include-person-responsible': includePersonResponsible,
                'include-status-details': includeStatusDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`subseaWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release 1.15.0
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics
     *
     * ### Update release 1.18.0
     * Added new filter `by-external-system-reference`.
     * Added new property `semiModelId`.
     *
     * ### Update release 1.21.0
     * Added property `area`.
     *
     * ### Update release 1.24.0
     * Added query parameters `include-attachments` and `include-url-references`.
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * Added property `cmrIndicator` for WorkOrders
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.28.0
     * `billOfMaterials` now include the property `parentMaterialId`
     *
     * Added `materialId` and `material` to the response
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `createdOnDate` and `changedOnDate`.
     *
     * Added new filters for use in combination with the `by-tag-prefix` and `by-tag-ids` filters:
     * - `tag-category-id-any-of`
     * - `maintenance-concept-id-any-of`
     * - `created-before-date`
     * - `created-after-date`
     * - `changed-before-date`
     * - `changed-after-date`
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     *
     * @returns TagSearch Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTags({
        plantId,
        filter = 'by-tag-prefix',
        tagPrefix,
        tagIdsAnyOf,
        externalSystemReference,
        tagCategoryIdAnyOf,
        maintenanceConceptIdAnyOf,
        createdBeforeDate,
        createdAfterDate,
        changedBeforeDate,
        changedAfterDate,
        includeMaintenanceRecords = false,
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
        perPage = 100,
        page = 1,
    }: {
        /**
         * Plant to include tags from.
         */
        plantId: string,
        filter?: 'by-tag-ids' | 'by-tag-prefix' | 'by-external-system-reference' | null,
        /**
         * The first few characters of the tag, required if filter is empty or `by-tag-prefix`
         */
        tagPrefix?: string | null,
        /**
         * The tagIds as a comma separated list, required if filter is `by-tag-ids`
         */
        tagIdsAnyOf?: Array<string>,
        /**
         * Required if filter is `by-external-system-reference`
         */
        externalSystemReference?: string | null,
        /**
         * Optional comma separated string array of tag category ids to filter your result to one or more tag categories (`tagCategoryId`). Wildcards are not supported. May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        tagCategoryIdAnyOf?: Array<string> | null,
        /**
         * Optional comma separated string array of Maintenance Concept Ids (`maintenanceConceptId` in response model). Wildcards are not supported. May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        maintenanceConceptIdAnyOf?: Array<string>,
        /**
         * Latest `createdOnDate` date to include. Use together with `created-after-date` to get Tags created in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        createdBeforeDate?: string | null,
        /**
         * Earliest `createdOnDate` date to include. Use together with `created-before-date` to get Tags created in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        createdAfterDate?: string | null,
        /**
         * Latest `changedOnDate` date to include. Use together with `changed-after-date` to get Tags changed in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        changedBeforeDate?: string | null,
        /**
         * Earliest `changedOnDate` date to include. Use together with `changed-before-date` to get Tags changed in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        changedAfterDate?: string | null,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Include installed equipment
         */
        includeInstalledEquipment?: boolean,
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean,
        /**
         * Include Maintenance Plan items this functional location is part of
         */
        includeMaintenancePlanItems?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include bill of materials (also known as structure list) for tag and installed equipment
         */
        includeBillOfMaterials?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include linear data
         */
        includeLinearData?: boolean,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<TagSearch> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tags',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'tag-prefix': tagPrefix,
                'tag-ids-any-of': tagIdsAnyOf,
                'external-system-reference': externalSystemReference,
                'tag-category-id-any-of': tagCategoryIdAnyOf,
                'maintenance-concept-id-any-of': maintenanceConceptIdAnyOf,
                'created-before-date': createdBeforeDate,
                'created-after-date': createdAfterDate,
                'changed-before-date': changedBeforeDate,
                'changed-after-date': changedAfterDate,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-installed-equipment': includeInstalledEquipment,
                'include-catalog-profile-details': includeCatalogProfileDetails,
                'include-maintenance-plan-items': includeMaintenancePlanItems,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-characteristics': includeCharacteristics,
                'include-bill-of-materials': includeBillOfMaterials,
                'include-attachments': includeAttachments,
                'include-url-references': includeUrlReferences,
                'include-status-details': includeStatusDetails,
                'include-linear-data': includeLinearData,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * SAS Change Work order - Lookup
     * ### Overview
     * Lookup single SAS Change Work order with related information
     *
     * ### Update release 1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `sasChangeWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.34.0
     * Added new property `relatedOperations` to `maintenanceRecords` and `tagsRelated`.
     * Also added query parameter `include-related-operations` to include the property `relatedOperations`.
     *
     * Added properties `additionalCostWBSId`, `additionalCostWBS`, `requiredEndDate`, `isHSECritical` and `isProductionCritical` to the response.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * ### Update release 1.36.0
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
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
        includeCostDataForMaterials = false,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeSafetyMeasures = false,
        includeRelatedOperations = false,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
         * Include detailed information for the main tag of the Work order
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
        /**
         * Includes the property `relatedOperations` in the response to expose operations that are related to an object in the objectlist (only relevant for related tags and related maintenance records).
         */
        includeRelatedOperations?: boolean,
    }): CancelablePromise<SASChangeWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/sas-change-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-materials': includeMaterials,
                'include-cost-data-for-materials': includeCostDataForMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
                'include-related-operations': includeRelatedOperations,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`sasChangeWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * SAS Change Work order - Search
     * ### Overview
     * Search for SAS Change Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each SAS Change Work order.
     * This can be found by performing a subsequent request to Lookup sas-change-work-orders.
     *
     * ### Filter: open-by-plant
     * Find open SAS Change Work orders by plant.
     * Parameters:
     * - `plant-id`
     * - `location-id` (optional)
     * - `system-id` (optional)
     *
     * ### Filter: recent-status-activations
     * SAS Change Work orders based on recent status activations for the work orders.
     * Parameters:
     * - `status-id`
     * - `plant-id`
     * - `max-days-since-activation`
     *
     * ### Filter: by-cost-network
     * Find SAS Change work orders based on Cost Network Id.
     * Parameters:
     * - `cost-network-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-cost-wbs
     * Find SAS Change Work orders based on Cost WBS Id.
     * Parameters:
     * - `cost-wbs-id`
     * - `plant-id` (optional)
     *
     * ### Update release 1.4.0
     * Added location-id and system-id to filter `open-by-plant`.
     *
     * ### Update release 1.5.0
     * Added revisionId to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.19.0
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added filter `by-cost-wbs`, with required parameter `cost-wbs-id`. Can be used in combination with optional parameter`plant-id`.
     * This filter only includes work orders where the WBS is represented on the work order level. It does not include work orders where WBS is only represented in the settlement rules.
     *
     * Added filter `by-cost-network`, with required parameter `cost-network-id` and optional parameter `plant-id`.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.36.0
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * @returns SASChangeWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchSasChangeWorkOrders({
        filter,
        statusId,
        plantId,
        locationId,
        systemId,
        maxDaysSinceActivation,
        costWbsId,
        costNetworkId,
    }: {
        /**
         * Filter to limit the SAS Change work order by
         */
        filter: 'open-by-plant' | 'recent-status-activations' | 'by-cost-wbs' | 'by-cost-network',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * System id to filter by
         */
        systemId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Required parameter if `filter=by-cost-wbs`
         */
        costWbsId?: string,
        /**
         * Required parameter if `filter=by-cost-network`
         */
        costNetworkId?: string,
    }): CancelablePromise<Array<SASChangeWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/sas-change-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'location-id': locationId,
                'system-id': systemId,
                'max-days-since-activation': maxDaysSinceActivation,
                'cost-wbs-id': costWbsId,
                'cost-network-id': costNetworkId,
            },
        });
    }

    /**
     * SAS Change Work order - Create
     * ### Overview
     * Create new SAS Change Work order
     *
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * Added sortField and revisionId to create request. Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values for `revisionId`.
     * ### Update release 1.8.0
     * Added support for calculation key on operation level. It determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * ### Update release 1.19.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from the response. See STRY0261073 in ServiceNow for more details.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns SASChangeWorkOrderBasic Created
     * @throws ApiError
     */
    public static createSasChangeWorkOrder({
        requestBody,
    }: {
        /**
         * SAS Change Work order to create
         */
        requestBody: SASChangeWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | SASChangeWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/sas-change-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to create a SAS Change Work order`,
            },
        });
    }

    /**
     * Work orders - Search
     * ### Overview
     * Search for Work orders regardless of type through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response can include most of the details for each work order.
     * If additional data is needed, it can be retrieved by using the endpoint represented in the `_links.self` property.
     *
     *
     * ### Filter: recently-changed
     * Find Work orders which have been recently changed (created or updated) for a given plant. Normally, clients will provide the parameters `changed-since-datetime` and `plant-id` to return any changed Work order from `changed-since-datetime` to now. It is also possible to add `before-datetime` query parameter - the endpoint will then return any work order changed between `changed-since-datetime` and `before-datetime`.
     *
     * Parameters:
     * - `plant-id`
     * - `changed-since-datetime`
     * - `before-datetime` (optional)
     *
     * ### Filter: before-basic-end-date
     * Find open Work orders before the `basic-end-date`. `basic-end-date` should be a date in the future so that already finished work orders will not be presented.
     *
     * Parameters:
     * - `plant-id`
     * - `basic-end-date`
     * - `location-id` (optional)
     *
     * ### Filter: by-external-partner-work-order-id
     * Find Work orders for a 'work-order-id' in an external partner system. Note: In theory, different external systems could have the same `external-partner-id` but this is very unlikely. Clients are recommended to filter the response based on the plants they are interested in to avoid any issues.
     *
     * Parameters:
     * - `external-partner-work-order-id`
     *
     * ### Filter: by-cost-network
     * Find Work orders based on Cost Network Id.
     *
     * Parameters:
     * - `cost-network-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-cost-wbs
     * Find Work orders based on Cost WBS Id.
     *
     * Parameters:
     * - `cost-wbs-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-center-id
     * Find Work orders based on their `workCenterId`.
     *
     * Parameters:
     * - `work-center-id-any-of`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-order-id
     * Find Work orders based on their `workOrderId`.
     *
     * Parameters:
     * - `work-order-ids-any-of`
     * - `plant-id` (optional)
     *
     * ### Update release 0.11.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * Filter by-external-partner-work-order-id added.
     * ### Update release 1.3.0
     * Bugfix related to plantId source.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.12.0
     * Improved performance of endpoint.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added filter `by-cost-wbs`, with required parameter `cost-wbs-id`. Can be used in combination with the optional parameter `plant-id`
     * This filter only includes work orders where the WBS is represented on the work order level. It does not include work orders where WBS is only represented in the settlement rules.
     *
     * Added filter `by-cost-network`, with required parameter `cost-network-id`. Can be used in combination with the optional parameter `plant-id`
     *
     * Added property `cmrIndicator` to the top level objects in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
     *
     * ### Update release 1.30.0
     * Modified GET work order to fetch data from Maintenance plant from the sap field `swerk`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.35.0
     * Added filter `by-work-center-id` with the required parameter `work-center-id-any-of`. Can optionally be combined with the parameter `plant-id`
     *
     * Added filter `by-work-order-id` with the required parameter `work-order-ids-any-of`. Can optionally be combined with the parameter `plant-id`
     *
     * Added option to not include operations for the Work Orders by setting the optional parameter `include-operations` to `false` (default is `true`). This can improve performance for the endpoint.
     *
     * Added property `requiredEndDate` to the top level objects in the response (Not including preventive work orders).
     *
     * Added property `confirmationId`, `RemainingWork` and `RemainingWorkUnit` to `operations`
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     * Added `overheadMaintenanceWorkOrders` to `include-work-order-types` filter in Parameters and to the response.
     *
     * @returns WorkOrderWithOperationList Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrders({
        filter,
        plantId,
        changedSinceDatetime,
        beforeDatetime,
        includeWorkOrderText,
        includeWorkOrderOperationText,
        includeWorkOrderTypes,
        includeOperations = true,
        basicEndDate,
        locationId,
        externalPartnerWorkOrderId,
        costWbsId,
        costNetworkId,
        workCenterIdAnyOf,
        workOrderIdsAnyOf,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed' | 'before-basic-end-date' | 'by-external-partner-work-order-id' | 'by-cost-network' | 'by-cost-wbs' | 'by-work-center-id' | 'by-work-order-id',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest datetime to returned changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        beforeDatetime?: string,
        /**
         * The text of the Work order is time-consuming to retrieve. Set to false to avoid returning it
         */
        includeWorkOrderText?: boolean,
        /**
         * The text of the Work order operation is time-consuming to retrieve. Set to false to avoid returning it
         */
        includeWorkOrderOperationText?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Include operations for the Work orders in the response.
         */
        includeOperations?: boolean,
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        basicEndDate?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * If work order was initially created in an external system, this represent the unique id of it
         */
        externalPartnerWorkOrderId?: string,
        /**
         * Required parameter if `filter=by-cost-wbs`
         */
        costWbsId?: string,
        /**
         * Required parameter if `filter=by-cost-network`
         */
        costNetworkId?: string,
        /**
         * Comma-separated list of `work-center-id`.
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
    }): CancelablePromise<WorkOrderWithOperationList | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'before-datetime': beforeDatetime,
                'include-work-order-text': includeWorkOrderText,
                'include-work-order-operation-text': includeWorkOrderOperationText,
                'include-work-order-types': includeWorkOrderTypes,
                'include-operations': includeOperations,
                'basic-end-date': basicEndDate,
                'location-id': locationId,
                'external-partner-work-order-id': externalPartnerWorkOrderId,
                'cost-wbs-id': costWbsId,
                'cost-network-id': costNetworkId,
                'work-center-id-any-of': workCenterIdAnyOf,
                'work-order-ids-any-of': workOrderIdsAnyOf,
            },
        });
    }

    /**
     * Work orders - Types
     * ### Overview
     * Get type of a work order based on the work order id.
     *
     * ### Update release 1.37.0
     * Added support for new work order type `overheadMaintenanceWorkOrder`.
     *
     * @returns WorkOrderTypes Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderType({
        workOrderIdsAnyOf,
    }: {
        /**
         * The work orders as a comma separated list.
         */
        workOrderIdsAnyOf: string,
    }): CancelablePromise<Array<WorkOrderTypes> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-types',
            query: {
                'work-order-ids-any-of': workOrderIdsAnyOf,
            },
        });
    }

    /**
     * Work order - Update service operation
     * ### Overview
     * Convert an operation to a service operation.
     * This will change the type of operation to `PM03 - service` and subsequently remove it from the operations list.
     * Required fields must be supplied:  `materialGroup`, `purchasingGroup`, `purchasingOrganization`.
     * One service has to be created with the following data:
     * `lineId`, `quantity`, `unit`, `materialGroup`, `costElement`, and either a `title` (for a text item service) or `serviceId`.
     *
     * Note: There is a known bug on the SAP side that prevents updating `standardTextTemplate` for service operations.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.36.0
     * Added support for updating property `isExcludedFromWorkOrderPlan`.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateWorkOrderServiceOperation({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Update of Work order service operation details
         */
        requestBody: Array<WorkOrderServiceOperationJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-service-operations/{operation-id}',
            path: {
                'operation-id': operationId,
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
     * ### Update release 1.35.0
     * Added new property `requisitionerId` to the response.
     *
     * ### Update release 1.37.0
     * Added property `unloadingPoint` to the response.
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
    }): CancelablePromise<ProblemDetails | Array<(WorkOrderMaterialForAddMaterialResponse | SubseaWorkOrderMaterialForAddMaterialResponse)>> {
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
     * Work orders change log - Search
     * ### Overview
     * Search for Work orders changes done recently.
     *
     * ### Response
     * The response contains only minimum information about the change made to the work orders.
     * For more information about each individual work order, use the lookup end-point referenced in `_links.related`.
     *
     * ### Important information
     * This endpoint relies on change log being activated for the plant in question.
     *
     * ### Filter: recently-changed-property
     * Find Work orders which have recently had a change in a specific property.
     * Parameters:
     * - plant-id
     * - property-name - Values supported `basicStartDateTime` and `basicEndDateTime`
     * - changed-since-datetime
     *
     * include-work-order-types is an optional parameter to define which work orders to return changes for.
     *
     * ### Important information
     * The response contains list of changes to work orders (not list of work orders changed). Therefore, an individual work order may be represented multiple times. Consumers can use changeDateTime to identify the last change.
     *
     * ### Update release 1.37.0
     * Added `overheadMaintenanceWorkOrders` to include-work-order-types filter in Parameters and `overheadMaintenanceWorkOrdersChanged` to response.
     *
     * @returns WorkOrderChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrderChangeLog({
        filter,
        plantId,
        changedSinceDatetime,
        propertyName,
        includeWorkOrderTypes,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed-property',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest datetime to returned changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * The property which was recently changed
         */
        propertyName?: 'basicStartDateTime' | 'basicEndDateTime',
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
    }): CancelablePromise<WorkOrderChangeLogs | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders-change-log',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'property-name': propertyName,
                'include-work-order-types': includeWorkOrderTypes,
            },
        });
    }

    /**
     * Failure report - Search
     * ### Overview
     * Search for Failure reports through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include status details for each failure report.
     * This can be found by performing a subsequent request to Lookup failure-reports.
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
     * Find open Failure reports by plant
     * Parameters:
     * - plant-id
     * - location-id (optional)
     * - system-id (optional)
     * - work-center-ids (optional)
     *
     * ### Update release 1.1.0
     * Added open-by-plant filter and properties systemId and locationId.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus.
     *
     * ### Update release 1.16.0
     * Added property `work-center-ids` to filters `recent-status-activations` and `open-by-plant`
     *
     * Added property `workCenterId`
     *
     * ### Update release 1.35.0
     * Added `workOrderTypeId` and `workOrderId` to the response. `workOrderId` includes the id of work orders, not constrained to only showing corrective work orders.
     * `correctiveWorkOrderId` has been corrected to only show the work order id if it is a corrective work order.
     *
     * ### Update release 1.37.0
     * Added support for new work order type `overheadMaintenanceWorkOrders` to `workOrderTypeId` enum of allowed types.
     *
     * @returns FailureReportSimpleForSearch Success
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
        filter: 'recent-status-activations' | 'open-by-plant',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * System id to filter by
         */
        systemId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Comma separated list of work center IDs to filter by
         */
        workCenterIds?: Array<string>,
    }): CancelablePromise<Array<FailureReportSimpleForSearch> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/failure-reports',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'location-id': locationId,
                'system-id': systemId,
                'max-days-since-activation': maxDaysSinceActivation,
                'work-center-ids': workCenterIds,
            },
        });
    }

    /**
     * Failure report - Create
     * Create new failure report.
     *
     * The following endpoints can be used to find possible values for input:
     * 1. `workCenterId` - [/plants/{plant-id}?include-work-centers](#operation/LookupPlant)
     * 1. `plannerGroupId` - [/plants/{plant-id}?include-planner-groups=true](#operation/LookupPlant)
     * 1. `locationId` - [/plants/{plant-id}?include-locations=true](#operation/LookupPlant)
     * 1. `detectionMethodId`, `failureMechanismId`, `failureModeId` - [/plants/{plant-id}/tags/{tag-id}?include-catalog-profile-details=true](#operation/LookupTag) or [/equipment/{equipment-id}?include-catalog-profile-details=true](#operation/LookupEquipment)
     * 1. `codingId` - [/catalogs/{catalog-id}/code-groups](#operation/SearchCodeGroup)
     *
     * ### Important information
     * Equinor governing documents states that failure reports should be created at the lowest possible level in the tag hierarchy.
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
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * Added properties `codingGroupId` and `codingId`.
     *
     * ### Update release 1.31.0
     * Removed requirement for providing `reasonId` as part of the `technicalFeedbackParameters` when `source` is `TechnicalFeedback`.
     *
     * ### Update release 1.35.0
     * Added `workOrderTypeId` and `workOrderId` to the response. `workOrderId` includes the id of work orders, not constrained to only showing corrective work orders.
     * `correctiveWorkOrderId` has been corrected to only show the work order id if it is a corrective work order.
     *
     * ### Update release 1.37.0
     * Added support for `overheadMaintenanceWorkOrders`.
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
        requestBody: FailureReportCreate,
    }): CancelablePromise<ProblemDetails | FailureReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/failure-reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

}
