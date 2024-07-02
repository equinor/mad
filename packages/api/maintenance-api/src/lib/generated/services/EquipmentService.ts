/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicsUpdate } from '../models/CharacteristicsUpdate';
import type { Equipment } from '../models/Equipment';
import type { EquipmentAddClass } from '../models/EquipmentAddClass';
import type { EquipmentBasicV2 } from '../models/EquipmentBasicV2';
import type { EquipmentChangeLogs } from '../models/EquipmentChangeLogs';
import type { EquipmentCreate } from '../models/EquipmentCreate';
import type { EquipmentJsonPatch } from '../models/EquipmentJsonPatch';
import type { EquipmentListItem } from '../models/EquipmentListItem';
import type { EquipmentSearchItem } from '../models/EquipmentSearchItem';
import type { InstallEquipment } from '../models/InstallEquipment';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EquipmentService {

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
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
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
         * Include person responsible information in response
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
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment - Update
     * ### Overview
     * Update a single equipment
     *
     * Supports:
     * - Update `warrantyStartDate` and `warrantyEndDate`
     *
     * ### Update release 1.27.0
     * Allow for update of `materialId`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateEquipment({
        equipmentId,
        requestBody,
    }: {
        equipmentId: string,
        /**
         * The information to be updated
         */
        requestBody: Array<EquipmentJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/equipment/{equipment-id}',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update equipment`,
                404: `The specified resource was not found`,
                409: `Equipment is locked by other user`,
            },
        });
    }

    /**
     * Equipment - Install
     * ### Overview
     * Install Equipment on a tag hierarchy.
     *
     * An equipment can be either installed on a Tag, or an Equipment.
     *
     * If `equipmentId` is provided in the body, the `equipmentId` from the path will be installed here.
     * If `tagPlantId`-`tagId` is provided in the body, the `equipmentId` from the path will be installed here.
     *
     * ### Important information
     * Both of these cases cannot be supported at the same time.
     * An equipment can not be installed at more than one place at a time.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static installEquipment({
        equipmentId,
        requestBody,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Install Equipment in a hierarchy.
         */
        requestBody: InstallEquipment,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment/{equipment-id}/install',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or \`equipmentId\` is located in the body alongside \`tagPlantId\`-\`tagId\``,
                403: `User does not have sufficient rights to install an equipment to a hierarchy`,
            },
        });
    }

    /**
     * Equipment - Dismantle
     * ### Overview
     * Dismantle Equipment on a tag hierarchy.
     *
     * An equipment can be either installed on a Tag, or an Equipment.
     * The correct installation needs to be provided in the body to be successfull.
     *
     * If `equipmentId` is provided in the body, the `equipmentId` from the path will be dismantled here.
     * If `tagPlantId`-`tagId` is provided in the body, the `equipmentId` from the path will be dismantled here.
     *
     * ### Important information
     * Both of these cases cannot be supported at the same time.
     * An equipment can not be installed at more than one place at a time.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static dismantleEquipment({
        equipmentId,
        requestBody,
        deleteEquipment = false,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Dismantle Equipment in a hierarchy.
         */
        requestBody: InstallEquipment,
        /**
         * Delete the equipment after dismantling
         */
        deleteEquipment?: boolean,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment/{equipment-id}/dismantle',
            path: {
                'equipment-id': equipmentId,
            },
            query: {
                'delete-equipment': deleteEquipment,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or \`equipmentId\` is located in the body alongside \`tagPlantId\`-\`tagId\``,
                403: `User does not have sufficient rights to dismantle an equipment to a hierarchy`,
            },
        });
    }

    /**
     * Equipment - Add characteristics
     * Add characteristics to equipment.
     *
     * Characteristics are grouped into a class such as `R_PIPE_DETAILS`.
     * Classes can be assigned to an equipment and specific characteristics such as `R_DIAMETER_MM` will then be available for that specific equipment.
     *
     * With this endpoint, the consumer can assign classes to an equipment and define initial values for some of the characteristics in the classes.
     *
     * There is currently no endpoint for looking up existing classes and their characteristics, but this may be added in the future.
     *
     * ### Important information
     * Use `/equipment/{equipment-id}?include-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToEquipment({
        equipmentId,
        requestBody,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Characteristics to add to equipment.
         */
        requestBody: Array<EquipmentAddClass>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment/{equipment-id}/characteristics',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to equipment`,
            },
        });
    }

    /**
     * Equipment - Update characteristic
     * Update existing values of characteristics on an equipment. If the characteristics does not exist, a `404 - Not Found` is returned.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateEquipmentCharacteristics({
        equipmentId,
        requestBody,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Characteristics to be updated, based on JsonPatch standard
         */
        requestBody: Array<CharacteristicsUpdate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/equipment/{equipment-id}/characteristics',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to characteristics`,
                404: `The specified resource was not found`,
                409: `Characteristics is locked by other user`,
            },
        });
    }

    /**
     * Equipment list - Get
     * Get list of all equipment for the specified plant.
     *
     * The response will include `equipmentCategoryId` and `catalogProfileId` for each equipment.
     *
     * ### Filter: filter-by-equipment-category (optional)
     * Limits the response to the provided `equipmentCategoryId`(s).
     * Parameters:
     * - equipment-category-id-any-of
     *
     * ### Important information
     * The endpoint returns a significant amount of data as it returns all equipment for the specified plant.  The data will be cached in the API and renewed on a daily basis.
     *
     * @returns EquipmentListItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEquipmentList({
        plantId,
        filter,
        equipmentCategoryIdAnyOf,
    }: {
        plantId: string,
        /**
         * Filter to limit the equipment list by
         */
        filter?: 'filter-by-equipment-category',
        /**
         * Comma-separated list of equipment categories. `G` = Tank Customer equipment, `L` = Pipe & Process Equipment Parts, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
         */
        equipmentCategoryIdAnyOf?: string,
    }): CancelablePromise<Array<EquipmentListItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/equipment-list',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'equipment-category-id-any-of': equipmentCategoryIdAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment - Attachment download
     * ### Overview
     * Download single attachment for equipment.
     *
     * The applicable document types are: `B10`, `B30`, `A01`, `A02`.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadEquipmentAttachment({
        equipmentId,
        attachmentId,
    }: {
        equipmentId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment/{equipment-id}/attachments/{attachment-id}',
            path: {
                'equipment-id': equipmentId,
                'attachment-id': attachmentId,
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
     * Added properties `manufacturerPartNumber`, `technicalIdentificationNumber`, `objectWeight` and `unitOfWeight`to response body.
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
     * * `technical-id-any-of`
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
         * Optional comma separated string array of plant-ids to filter your result to one or more plants. Wildcards are not supported. This query parameter can not be used on its own.
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
         * Include person responsible information in response
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
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        /**
         * Limit include-work-orders to only open work order
         */
        includeOnlyOpenWorkOrders?: boolean,
        /**
         * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean,
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
     * Equipment change log - Search
     * ### Overview
     * Search for equipment changes done recently.
     *
     * ### Response
     * The response contains only minimum information about the change made to the equipment.
     * For more information about each equipment, perform a lookup request using `/equipment/{equipment-id}`.
     *
     * ### Important information
     * It's not possible to capture all possible recent changes to an equipment. For example, changes to characteristics values are not captured.
     *
     * ### Filter: recently-changed-reserved-equipment
     * With the basis of a subsea work order, check if any of the currently reserved equipment has been changed recently.
     * Only the currently reserved equipment which have been recently changed are returned in the response.
     * Parameters:
     * - subsea-work-order-id
     * - changed-since-date (includes the provided date in the check)
     *
     * ### Filter: recently-changed-equipment
     * Check if the equipment provided in the request has been changed recently.
     * Only the equipment which have been recently changed are returned in the response.
     * Parameters:
     * - equipment-ids  (supports comma-separated list)
     * - changed-since-date (includes the provided date in the check)
     *
     * @returns EquipmentChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchEquipmentChangeLog({
        filter,
        subseaWorkOrderId,
        equipmentIds,
        changedSinceDate,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed-reserved-equipment' | 'recently-changed-equipment',
        /**
         * The subsea work order to check if any reserved equipment has been changed recently
         */
        subseaWorkOrderId?: string,
        /**
         * Comma-separated list of equipment to check
         */
        equipmentIds?: Array<string>,
        /**
         * Earliest datetime to returned changed equipment for
         */
        changedSinceDate?: string,
    }): CancelablePromise<EquipmentChangeLogs | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment-change-log',
            query: {
                'filter': filter,
                'subsea-work-order-id': subseaWorkOrderId,
                'equipment-ids': equipmentIds,
                'changed-since-date': changedSinceDate,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

}
