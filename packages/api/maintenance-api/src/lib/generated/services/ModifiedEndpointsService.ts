/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrectiveWorkOrder } from '../models/CorrectiveWorkOrder';
import type { Document } from '../models/Document';
import type { EqHubAndSemiUsage } from '../models/EqHubAndSemiUsage';
import type { Equipment } from '../models/Equipment';
import type { EquipmentBasicV2 } from '../models/EquipmentBasicV2';
import type { EquipmentCreate } from '../models/EquipmentCreate';
import type { EquipmentSearchItem } from '../models/EquipmentSearchItem';
import type { ModificationWorkOrder } from '../models/ModificationWorkOrder';
import type { OverheadMaintenanceWorkOrder } from '../models/OverheadMaintenanceWorkOrder';
import type { PlanningPlantRevision } from '../models/PlanningPlantRevision';
import type { PreventiveWorkOrder } from '../models/PreventiveWorkOrder';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { ProjectWorkOrder } from '../models/ProjectWorkOrder';
import type { RevisionWorkOrderOperation } from '../models/RevisionWorkOrderOperation';
import type { SASChangeWorkOrder } from '../models/SASChangeWorkOrder';
import type { SubseaWorkOrder } from '../models/SubseaWorkOrder';
import type { WorkOrderInPlan } from '../models/WorkOrderInPlan';
import type { WorkOrderOptimizedForQuery } from '../models/WorkOrderOptimizedForQuery';
import type { WorkOrderWithOperationList } from '../models/WorkOrderWithOperationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

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
     * ### Update release 1.38.0
     * Added new property `tag` to the response.
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
     * Equipment - Create
     * ### Overview
     * Create equipment and possibly install at tag.
     *
     * ### Important information
     * In the current version of the endpoint, it's only possible to create equipment with equipmentCategoryId `R` = Process Equipment.
     *
     * If the request includes `installedAtTag`, the equipment will inherit properties such as `planningPlantId`, `plannerGroupId`, `workCenterId`, `ABCId`, `systemId` and `locationId`from the tag.
     *
     * Access to the role `YO059 - Static Process Equipment Data Establisher (SAPP03)` is required.
     *
     * ### Update release 1.26.0
     * Added properties `tagId` and `tagPlantId` to response body.
     *
     * ### Update release 1.31.0
     * Added properties `manufacturerPartNumber`, `technicalIdentificationNumber`, `objectWeight` and `unitOfWeight` to response body.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate` to response body.
     *
     * ### Update release 1.38.0
     * Add field `tag` to the response.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns EquipmentBasicV2 Created
     * @throws ApiError
     */
    public static createEquipment({
        requestBody,
    }: {
        /**
         * Equipment to create
         */
        requestBody: EquipmentCreate,
    }): CancelablePromise<ProblemDetails | EquipmentBasicV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, for example if missing required properties, \`equipmentCategoryId\` is not \`R\` or if \`installedAtTag\` is invalid or is not in service.`,
                403: `User does not have sufficient rights to create an equipment.`,
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
     * ### Update release 1.38.0
     * Added `tag` to the response.
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
     * Document - Search
     * ### Overview
     * Search documents and include related information such as characteristics, materials, equipment and attachments.
     *
     *
     * The client must in the request provide at least one of the following search parameters:
     * * `document-type-any-of`
     * * `document-number-any-of`
     * * `characteristic-value-any-of`
     *
     * **N.B** The link in the attachment object is in the first iteration always routed via the equipment attachment endpoint.
     * In a future release we will implement a general endpoint `documents/attachment/{attachment-id}` for downloading attachments which will be displayed here.
     *
     * ### Update release 1.31.0
     * Added `include-inventory-count` query parameter to include `equipmentInventoryCount` and `materialInventoryCount` property in the response.
     *
     * Added support for including more business objects: `include-tags`, `include-measuring-points` and `include-maintenance-records`.
     *
     * ### Update release 1.32.0
     * Added `include-url-references` query parameter to include URL references in the response.
     *
     * Added properties `statusId` and `statusText` to the response.
     *
     * Added properties `partNumber` & `manufacturer` to `material` in the response.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate` for `equipment`.
     *
     * ### Update release 1.38.0
     * Added `tag` to the response of `equipment`.
     *
     * @returns Document Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchDocuments({
        documentTypeAnyOf,
        documentNumberAnyOf,
        characteristicValueAnyOf,
        characteristicId,
        classId,
        includeCharacteristics = false,
        includeMaterial = false,
        includeEquipment = false,
        includeTags = false,
        includeMaintenanceRecords = false,
        includeMeasuringPoints = false,
        includeAttachments = false,
        includeInventoryCount = false,
        includeUrlReferences = false,
        perPage = 50,
        page = 1,
    }: {
        /**
         * Search based on `documentType`.
         */
        documentTypeAnyOf?: Array<string>,
        /**
         * Search based on `documentNumber`.
         */
        documentNumberAnyOf?: Array<string>,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id` Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Include characteristics'
         */
        includeCharacteristics?: boolean,
        /**
         * Include material related to the object
         */
        includeMaterial?: boolean,
        /**
         * Include equipment related to the object
         */
        includeEquipment?: boolean,
        /**
         * Include tags.
         */
        includeTags?: boolean,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        includeInventoryCount?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<Document> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents',
            query: {
                'document-type-any-of': documentTypeAnyOf,
                'document-number-any-of': documentNumberAnyOf,
                'characteristic-value-any-of': characteristicValueAnyOf,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'include-characteristics': includeCharacteristics,
                'include-material': includeMaterial,
                'include-equipment': includeEquipment,
                'include-tags': includeTags,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-measuring-points': includeMeasuringPoints,
                'include-attachments': includeAttachments,
                'include-inventory-count': includeInventoryCount,
                'include-url-references': includeUrlReferences,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to view document`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Document - Lookup
     * ### Overview
     * Lookup document by id. Use the different include parameters to include additional information about the document.
     * [POST document-relationships/{relationship-type}/{source-id}](#operation/AddRelationshipsToDocument) can be used to link the document to a business object.
     *
     * **N.B** The link in the attachment object is in the first iteration always routed via the equipment attachment endpoint.
     * In a future release we will implement a general endpoint `documents/attachment/{attachment-id}` for downloading attachments which will be displayed here.
     *
     * ### Update release 1.31.0
     * Added `include-inventory-count` query parameter to include `equipmentInventoryCount` and `materialInventoryCount` property in the response.
     *
     * Added support for including more business objects: `include-tags`, `include-measuring-points` and `include-maintenance-records`.
     *
     * ### Update release 1.32.0
     * Added `include-url-references` query parameter to include URL references in the response.
     *
     * Added `changedDateTime` for attachments.
     *
     * Added properties `statusId` and `statusText` to the response.
     *
     * Added properties `partNumber` & `manufacturer` to `material` in the response.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate` for `equipment`.
     *
     * ### Update release 1.38.0
     * Added `tag` to the response of `equipment`.
     *
     * @returns Document Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupDocument({
        documentId,
        includeCharacteristics = false,
        includeMaterial = false,
        includeEquipment = false,
        includeTags = false,
        includeMaintenanceRecords = false,
        includeMeasuringPoints = false,
        includeAttachments = false,
        includeInventoryCount = false,
        includeUrlReferences = false,
    }: {
        /**
         * Unique id for the document to be used against endpoints for the `/documents` resource
         */
        documentId: string,
        /**
         * Include characteristics'
         */
        includeCharacteristics?: boolean,
        /**
         * Include material related to the object
         */
        includeMaterial?: boolean,
        /**
         * Include equipment related to the object
         */
        includeEquipment?: boolean,
        /**
         * Include tags.
         */
        includeTags?: boolean,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        includeInventoryCount?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
    }): CancelablePromise<Document | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents/{document-id}',
            path: {
                'document-id': documentId,
            },
            query: {
                'include-characteristics': includeCharacteristics,
                'include-material': includeMaterial,
                'include-equipment': includeEquipment,
                'include-tags': includeTags,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-measuring-points': includeMeasuringPoints,
                'include-attachments': includeAttachments,
                'include-inventory-count': includeInventoryCount,
                'include-url-references': includeUrlReferences,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to view document`,
                404: `The specified resource was not found`,
            },
        });
    }

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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * ### Update release 1.36.0
     * Added `superiorRoutingCounterId` to `operations`.
     *
     * ### Update release 1.38.0
     * Added property `text` to `materials` in `workOrderOperations`.
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
        includeCostDataForMaterials = false,
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
        /**
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
                'include-cost-data-for-materials': includeCostDataForMaterials,
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
     * ### Update release 1.28.0
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
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * ### Update release 1.36.0
     * Added `superiorRoutingCounterId` to response.
     *
     * ### Update release 1.38.0
     * Added property `text` in `materials`.
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
        includeCostDataForMaterials = false,
        perPage,
        page = 1,
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
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
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
                'include-cost-data-for-materials': includeCostDataForMaterials,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                404: `The specified resource was not found`,
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
     * ### Using `plan-period-start` and `plan-period-duration`
     * Provide the plan for a specific planning plant based on a defined plan period. This is the main usage of this endpoint.
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?plan-period-start=2023-03-02&plan-period-duration=P21D&location-id-any-of=CD00&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     * - `/work-order-plan/{planning-plant-id}?plan-period-start=2023-03-02&plan-period-duration=P21D&work-center-id-any-of=C31*&include-completed-work-order-operations=false&api-version=v1`
     *
     * ### Using `person-responsible-*`
     * Get the work order plan for a specific planning plant, but only for work orders assigned to a specific user.
     * Normally, work orders will not be assigned directly to a user, but in some work processes (such as inspection), this occurs.
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?person-responsible-email=shortname@equinor.com&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
     * ### Combining all parameters
     * It is possible to get all work order plans for a period which are assigned to user by combining all parameters.
     *
     * Example of usage:
     *
     * - `/work-order-plan/{planning-plant-id}?person-responsible-email=shortname@equinor.com&plan-period-start=2023-03-02&plan-period-duration=P21D&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
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
     * ### Update release 1.38.0
     * Deprecated the `filter` parameter. The endpoint will accept the parameter but ignore it. It is now possible to combine almost all
     * query parameters. `person-responsible-email` and `person-responsible-id` will still be mutually exclusive.
     * It is required to supply either `plan-period-start` or `person-responsible-*` in order to not cause issues in the underlying system.
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
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-plan-period' | 'by-person-responsible',
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
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
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
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
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
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
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
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
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
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
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
     * @deprecated
     * Overhead Maintenance Work order - Lookup
     * ### Deprecated
     * This endpoint is marked as deprecated due to currently being unavailable. This endpoint is only a draft. Calling the endpoint until available will result in a `404- Not Found`. Deprecation will be removed when the endpoint is available.
     *
     * ### Overview
     * Lookup single Overhead Maintenance Work order related information.
     *
     * ### Important information
     * By default `include-person-responsible` is false and then the fields `personResponsibleId` and `personResponsibleEmail` will always have null value.
     *
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
     *
     * @returns OverheadMaintenanceWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupoverheadMaintenanceWorkOrders({
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
    }): CancelablePromise<OverheadMaintenanceWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/overhead-maintenance-work-orders/{work-order-id}',
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
                301: `If work-order-id exist, but is not a \`OverheadMaintenanceWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
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
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
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
     * Work orders - Search
     * ### Overview
     * Search for Work orders regardless of type through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response can include most of the details for each work order.
     * If additional data is needed, it can be retrieved by using the endpoint represented in the `_links.self` property.
     *
     * Pagination is supported for this endpoint by setting values for `page` and `per-page`. If these parameteres are omitted, the result will be returned without pagination.
     *
     * ### Filter: recently-changed
     * Find Work orders which have been recently changed (created or updated) for a given plant. Normally, clients will provide the parameters `changed-since-datetime` and `plant-id` to return any changed Work order from `changed-since-datetime` to now. It is also possible to add `before-datetime` query parameter - the endpoint will then return any work order changed between `changed-since-datetime` and `before-datetime`.
     *
     * Parameters:
     * - `changed-since-datetime`
     * - `plant-id` (optional)
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
     * ### Update release 1.38.0
     * Marked `plantId` as an optional parameter for filter `recently-changed`.
     * Add pagination to this endpoint, see [Pagination](#section/Pagination) for more information.
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
        perPage,
        page = 1,
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
         * Earliest datetime to return changed work orders for
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
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
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
                'per-page': perPage,
                'page': page,
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
     * Pagination is supported for this endpoint by setting values for `page` and `per-page`. If these parameteres are omitted, the result will be returned without pagination.
     *
     * ### Response
     * The response schema has been optimized for speed, enabling the retrieval of work orders only from the past three years.
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
     * ### Update release 1.5.0
     * Added revisionId to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.12.0
     * Added query parameter `include-maintenance-record`.
     *
     * ### Update release 1.16.0
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * ### Update release 1.29.0
     * Added properties `revision` and `changedDatetime`.
     *
     * Allow searching by `changedOnDay` when `is-open` is set. Search by using the new query parameters `changed-after-date` and `changed-before-date`.
     *
     * ### Update release 1.31.0
     * Added list of supported statuses for `status-all-of`, `status-any-of` and `status-not` query parameters. Status `REL` is now supported.
     *
     * Added property `hasStatusREL` to the response.
     *
     * ### Update release 1.35.0
     * Added support for optional pagination.
     *
     * ### Update release 1.37.0
     * Added query parameter `work-order-ids-any-of`
     * Deprecated query parameter `max-results` as the same functionality can be achieved with `per-page``.
     *
     * ### Update release 1.37.0
     * Added query parameter `work-order-ids-any-of` & add support for SWNG in `status-all-of`, `status-any-of` and `status-not` query parameters.
     *
     * Deprecated query parameter `max-results` as the same functionality can be achieved with `per-page`.
     *
     * Added properties `tag`, `requiredEndDate`, `hseCritical` & `productionCritical`.
     *
     * Added query parameter `include-status-details` and the object `statuses`
     *
     * ### Update release 1.38.0
     * Added `overheadMaintenanceWorkOrders` to `work-order-types` query parameter.
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
        changedAfterDate,
        changedBeforeDate,
        workOrderTypes,
        workOrderIdsAnyOf,
        sortBy,
        includeText = false,
        includeMaintenanceRecord = false,
        includeStatusDetails = false,
        maxResults,
        perPage,
        page = 1,
    }: {
        /**
         * Query based on planningPlantIds (any-of)
         */
        planningPlants: Array<string>,
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsAllOf?: Array<string>,
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsAnyOf?: Array<string>,
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsNot?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsAllOf?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsAnyOf?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `AE55*`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsNot?: Array<string>,
        /**
         * Query based on workCenterIds
         */
        workCentersAnyOf?: Array<string>,
        /**
         * Query based on workCenterIds
         */
        workCentersNot?: Array<string>,
        /**
         * Query based on systemIds
         */
        systemsAnyOf?: Array<string>,
        /**
         * Query based on systemIds
         */
        systemsNot?: Array<string>,
        /**
         * Query based on locationIds
         */
        locationsAnyOf?: Array<string>,
        /**
         * Query based on locationIds
         */
        locationsNot?: Array<string>,
        /**
         * Query based on sortField ()used for grouping work orders)
         */
        sortFieldAnyOf?: Array<string>,
        /**
         * Query based on sortField (used for grouping work orders)
         */
        sortFieldNot?: Array<string>,
        /**
         * Query based on revisionCode
         */
        revisionCodeAnyOf?: Array<string>,
        /**
         * Query based on sortField (often used for revision codes)
         */
        revisionCodeNot?: Array<string>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAllOf?: Array<'PREP' | 'PRCO' | 'RDEX' | 'STRT' | 'CANC' | 'RDOP' | 'CRTD' | 'TECO' | 'REL' | 'SWNG'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<'PREP' | 'PRCO' | 'RDEX' | 'STRT' | 'CANC' | 'RDOP' | 'CRTD' | 'TECO' | 'REL' | 'SWNG'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<'PREP' | 'PRCO' | 'RDEX' | 'STRT' | 'CANC' | 'RDOP' | 'CRTD' | 'TECO' | 'REL' | 'SWNG'>,
        /**
         * Include only open work orders or only closed work orders. By default, all work orders are included.
         */
        isOpen?: boolean,
        /**
         * Earliest creation date to include
         */
        createdAfterDate?: string,
        /**
         * Latest creation date to include
         */
        createdBeforeDate?: string,
        /**
         * Earliest `changedOnDay` date to include. Query parameter `is-open` must be set to `true` or `false` to use this parameter.
         */
        changedAfterDate?: string,
        /**
         * Latest `changedOnDay` date to include. Query parameter `is-open` must be set to `true` or `false` to use this parameter.
         */
        changedBeforeDate?: string,
        /**
         * Limit to specific work order types (one-of)
         */
        workOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
        /**
         * Property to sort the results by
         */
        sortBy?: Array<'createdDateTime desc' | 'createdDateTime asc' | 'workOrderId desc' | 'workOrderId asc' | 'systemId desc' | 'systemId asc' | 'locationId desc' | 'locationId asc' | 'sortField desc' | 'sortField asc' | 'title desc' | 'title asc'>,
        /**
         * Include the multi-line text of the work order (will cause the endpoint to go significantly slower)
         */
        includeText?: boolean,
        /**
         * Include the main maintenance record linked to the work order (if any)
         */
        includeMaintenanceRecord?: boolean,
        /**
         * Include status details for the work orders
         */
        includeStatusDetails?: boolean,
        /**
         * Maximum number of results to include. Default is 1000.
         * @deprecated
         */
        maxResults?: number,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<WorkOrderOptimizedForQuery> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders-optimized-for-query',
            query: {
                'planning-plants': planningPlants,
                'keywords-all-of': keywordsAllOf,
                'keywords-any-of': keywordsAnyOf,
                'keywords-not': keywordsNot,
                'tags-all-of': tagsAllOf,
                'tags-any-of': tagsAnyOf,
                'tags-not': tagsNot,
                'work-centers-any-of': workCentersAnyOf,
                'work-centers-not': workCentersNot,
                'systems-any-of': systemsAnyOf,
                'systems-not': systemsNot,
                'locations-any-of': locationsAnyOf,
                'locations-not': locationsNot,
                'sort-field-any-of': sortFieldAnyOf,
                'sort-field-not': sortFieldNot,
                'revision-code-any-of': revisionCodeAnyOf,
                'revision-code-not': revisionCodeNot,
                'status-all-of': statusAllOf,
                'status-any-of': statusAnyOf,
                'status-not': statusNot,
                'is-open': isOpen,
                'created-after-date': createdAfterDate,
                'created-before-date': createdBeforeDate,
                'changed-after-date': changedAfterDate,
                'changed-before-date': changedBeforeDate,
                'work-order-types': workOrderTypes,
                'work-order-ids-any-of': workOrderIdsAnyOf,
                'sort-by': sortBy,
                'include-text': includeText,
                'include-maintenance-record': includeMaintenanceRecord,
                'include-status-details': includeStatusDetails,
                'max-results': maxResults,
                'per-page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Report for EqHub and SEMI usage - Get
     * ### Overview
     *
     * Get the list of EqHub and SEMI usage. T-code in backend system `ZOMPM_SEMI_USAGE`.
     *
     * ### Update release 1.38.0
     * Added filter `changed-since-date` and `changed-before-date`.
     *
     * @returns EqHubAndSemiUsage Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEqHubAndSemiUsage({
        eqhubIdAnyOf,
        semiIdAnyOf,
        filter,
        includeStatus = false,
        changedSinceDate,
        changedBeforeDate,
        perPage = 100,
        page = 1,
    }: {
        /**
         * Comma-separated List of eqhub id's
         */
        eqhubIdAnyOf?: string,
        /**
         * Comma-separated List of SEMI id's
         */
        semiIdAnyOf?: string,
        /**
         * Filter between eqhub or SEMI
         */
        filter?: 'eqhub' | 'SEMI',
        /**
         * Include status in response
         */
        includeStatus?: boolean,
        /**
         * Earliest date to return EqHub and SEMI usage for.
         */
        changedSinceDate?: string,
        /**
         * Latest date to return EqHub and SEMI usage for.
         */
        changedBeforeDate?: string,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<EqHubAndSemiUsage> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reports/eqhub-and-semi-usage',
            query: {
                'eqhub-id-any-of': eqhubIdAnyOf,
                'SEMI-id-any-of': semiIdAnyOf,
                'filter': filter,
                'include-status': includeStatus,
                'changed-since-date': changedSinceDate,
                'changed-before-date': changedBeforeDate,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                403: `User does not have sufficient rights to use T-code ZOMPM_SEMI_USAGE`,
            },
        });
    }

}
