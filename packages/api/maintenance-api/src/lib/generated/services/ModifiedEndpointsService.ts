/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityReport } from '../models/ActivityReport';
import type { CorrectiveWorkOrder } from '../models/CorrectiveWorkOrder';
import type { Equipment } from '../models/Equipment';
import type { EquipmentSearchItem } from '../models/EquipmentSearchItem';
import type { FailureReport } from '../models/FailureReport';
import type { FailureReportBasic } from '../models/FailureReportBasic';
import type { FailureReportCreate } from '../models/FailureReportCreate';
import type { MaintenanceRecordActivity } from '../models/MaintenanceRecordActivity';
import type { MaintenanceRecordActivityCreate } from '../models/MaintenanceRecordActivityCreate';
import type { MaintenanceRecordExtendRequiredEnd } from '../models/MaintenanceRecordExtendRequiredEnd';
import type { Measurement } from '../models/Measurement';
import type { MeasurementCreate } from '../models/MeasurementCreate';
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { PreventiveWorkOrder } from '../models/PreventiveWorkOrder';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipToMaintenanceRecordAdd } from '../models/RelationshipToMaintenanceRecordAdd';
import type { Tag } from '../models/Tag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

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
        includeStatusDetails = false,
        includeLinearData = false,
    }: {
        plantId: string,
        tagId: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Include work orders. If include-work-order-types is not supplied, all support types are returned
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
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
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
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
        equipmentId: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
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
         * Include work orders. If include-work-order-types is not supplied, all support types are returned
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
         * Include equipment attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for equipment
         */
        includeUrlReferences?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean,
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
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-status-details': includeStatusDetails,
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
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
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
         * Include work orders. If include-work-order-types is not supplied, all support types are returned
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        /**
         * Limit include-work-orders to only open work order. Recommend using `true` in order to improve performance.
         */
        includeOnlyOpenWorkOrders?: boolean,
        /**
         * Include tag characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
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
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-only-open-maintenance-records': includeOnlyOpenMaintenanceRecords,
                'include-work-orders': includeWorkOrders,
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
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * ### Update release v1.15.0
     * Added `workOrderId` to response.
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
    }: {
        pointId: string,
        /**
         * Include the last measurement of the measuring point
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
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Measuring point - Search
     * ### Overview
     * Search measuring point.
     *
     * ### Filter: by-plant
     * Search measuring points based on plant and one other property of the measuring point.
     * Parameters:
     * - plant-id
     * - tag-prefix (optional)
     * - measuring-position (optional)
     * - quantitative-characteristic (optional)
     * - qualitative-code-group (optional)
     * - measuring-point-name (optional)
     *
     * ### Examples
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&api-version=v1`
     * `/measuring-points?filter=by-plant&plant-id=1102&quantitative-characteristic=SURFACE_MAINTEANC&api-version=v1`
     *
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&position=VALVE%20STATUS&include-last-measurement=true&api-version=v1`
     *
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * ### Update release v1.15.0
     * Added `workOrderId` to response.
     *
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMeasuringPoints({
        filter,
        plantId,
        tagPrefix,
        measuringPosition,
        quantitativeCharacteristic,
        qualitativeCodeGroup,
        measuringPointName,
        includeLastMeasurement = false,
        includeMeasurements = false,
        includeQualitativeCodeGroup = false,
        includeCharacteristics = false,
        includeCharacteristicsWithoutValue = false,
    }: {
        /**
         * Filter to limit the measuring points by
         */
        filter: 'by-plant',
        /**
         * Plant the tag-prefix belongs to
         */
        plantId?: string,
        /**
         * The first few characters of the tag
         */
        tagPrefix?: string,
        /**
         * Limit result based on a specific measuring position value
         */
        measuringPosition?: string,
        /**
         * Limit result based on a specific quantitative characteristic value
         */
        quantitativeCharacteristic?: string,
        /**
         * Limit result based on a specific qualitative code group value
         */
        qualitativeCodeGroup?: string,
        /**
         * Limit result based on a specific measuring point name value
         */
        measuringPointName?: string,
        /**
         * Include the last measurement of the measuring points
         */
        includeLastMeasurement?: boolean,
        /**
         * Include measurements of the measuring points
         */
        includeMeasurements?: boolean,
        /**
         * Include possible codes for qualitative measurements if qualitativeCodeGroupId is set
         */
        includeQualitativeCodeGroup?: boolean,
        /**
         * Include characteristics with defined value for the measuring points. Use `include-characteristics-without-value` to retrieve all characteristics available for the measuring points.
         */
        includeCharacteristics?: boolean,
        /**
         * Include all characteristics available for the measuring points regardless if they have a defined value or not. Use `include-characteristics` to only include characteristics with defined value for the measuring points.
         */
        includeCharacteristicsWithoutValue?: boolean,
    }): CancelablePromise<Array<MeasuringPoint> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measuring-points',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'tag-prefix': tagPrefix,
                'measuring-position': measuringPosition,
                'quantitative-characteristic': quantitativeCharacteristic,
                'qualitative-code-group': qualitativeCodeGroup,
                'measuring-point-name': measuringPointName,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-qualitative-code-group': includeQualitativeCodeGroup,
                'include-characteristics': includeCharacteristics,
                'include-characteristics-without-value': includeCharacteristicsWithoutValue,
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
     * ### Update release v1.10.0
     * Added `maintenanceRecordId` to request.
     *
     * ### Update release v1.15.0
     * Added `workOrderId` to request and response.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns Measurement Created
     * @throws ApiError
     */
    public static createMeasurement({
        pointId,
        requestBody,
    }: {
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
        includeMeasurements = false,
    }: {
        workOrderId: string,
        /**
         * Include Work order operations
         */
        includeOperations?: boolean,
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
         * Include related measurements
         */
        includeMeasurements?: boolean,
    }): CancelablePromise<PreventiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/preventive-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-technical-feedback': includeTechnicalFeedback,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-plan-details': includeMaintenancePlanDetails,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-measurements': includeMeasurements,
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
     * Added new query parameter `include-measurements`
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
        includeMeasurements = false,
    }: {
        workOrderId: string,
        /**
         * Include Work order operations
         */
        includeOperations?: boolean,
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
         * Include related measurements
         */
        includeMeasurements?: boolean,
    }): CancelablePromise<CorrectiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-technical-feedback': includeTechnicalFeedback,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-measurements': includeMeasurements,
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
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTags({
        plantId,
        filter = 'by-tag-prefix',
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
        plantId: string,
        filter?: 'by-tag-ids' | 'by-tag-prefix' | null,
        /**
         * The first few characters of the tag, required if filter is empty or `by-tag-prefix`
         */
        tagPrefix?: string | null,
        /**
         * The tagIds as a comma separated list, required if filter is `by-tag-ids`
         */
        tagIdsAnyOf?: Array<string>,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Include work orders. If include-work-order-types is not supplied, all support types are returned
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
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
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
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
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include linear data
         */
        includeLinearData?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<Tag> | ProblemDetails> {
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
        workOrderId: string,
        /**
         * Define maintenance record to add relationship to
         */
        requestBody: RelationshipToMaintenanceRecordAdd,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-order-relationships/{work-order-id}/related-maintenance-records',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
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
     * Added property `documentTitle` to urlReferences.
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
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include URL references for failure report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean,
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
                'include-created-by-details': includeCreatedByDetails,
                'include-url-references': includeUrlReferences,
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

    /**
     * Failure report - Add activities
     * ### Overview
     * Add activities for failure report.
     *
     * To find possible activityCodeGroupId and activityCodeId use the  `/maintenance-records/activity-codes?maintenance-record-id=...`.
     *
     * ### Update release v0.8.0
     * activityCodeId and activityCodeGroupId are no longer required properties. Client's are still recommended to provide them if possible.
     *
     * ### Update release v1.15.0
     * Added response body for 201 response
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordActivity Success
     * @throws ApiError
     */
    public static addFailureReportActivities({
        recordId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string,
        /**
         * Activities to add to existing failure report
         */
        requestBody: Array<MaintenanceRecordActivityCreate>,
    }): CancelablePromise<ProblemDetails | Array<MaintenanceRecordActivity>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/failure-reports/{record-id}/activities',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add activities to failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Extend required end date
     * ### Overview
     * Extend the required end date of the failure report.
     * This endpoint should only be executed by persons which have access to the 'action box' in Equinor's ERP system.
     *
     * Client applications should take special care in ensuring the business process of Equinor is followed in advance of calling this endpoint.
     *
     * The activityCodeId defines the reason for the extension
     * - `A121`= Lack of resources
     * - `A122`= Lack of spares
     * - `A123`=Maintenance access
     * - `A124`=Failure development time
     *
     * An activity for the failure report will be created by this call and the status `Date Extension Required ('EXTR')` will be set.
     *
     * ### Important information
     * Most users will not have sufficient authorizations to execute this endpoint. If a request fails due to missing authorizations, the response code will be HTTP 403.
     *
     * ### Update release 1.12.0
     * Bugfix - Created activity text and activity code must be read-only.
     *
     * ### Update release v1.15.0
     * Added response schema for 201 success
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordActivity Success
     * @throws ApiError
     */
    public static extendFailureReportRequiredEnd({
        recordId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string,
        /**
         * Extended end date-activity to be created on the failure report.
         */
        requestBody: MaintenanceRecordExtendRequiredEnd,
    }): CancelablePromise<ProblemDetails | MaintenanceRecordActivity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/failure-reports/{record-id}/required-end-extensions',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add activities to failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
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
     * Added property `documentTitle` to urlReferences.
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
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include URL references for activity report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean,
    }): CancelablePromise<ActivityReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/activity-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-activities': includeActivities,
                'include-attachments': includeAttachments,
                'include-created-by-details': includeCreatedByDetails,
                'include-url-references': includeUrlReferences,
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

}
