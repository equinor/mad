/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicsUpdate } from '../models/CharacteristicsUpdate';
import type { Measurement } from '../models/Measurement';
import type { MeasurementCreate } from '../models/MeasurementCreate';
import type { MeasurementUpdate } from '../models/MeasurementUpdate';
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { MeasuringPointAddClass } from '../models/MeasuringPointAddClass';
import type { MeasuringPointBasic } from '../models/MeasuringPointBasic';
import type { MeasuringPointCreate } from '../models/MeasuringPointCreate';
import type { MeasuringPointJsonPatch } from '../models/MeasuringPointJsonPatch';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasuringPointsService {

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
     * Measuring point - Update
     * ### Overview
     * Update a single measuring point.
     *
     * Supports:
     * - Update `measuringPoint` and `measuringPosition`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateMeasuringPoint({
        pointId,
        requestBody,
    }: {
        /**
         * Measuring point id
         */
        pointId: string,
        /**
         * The information to be updated
         */
        requestBody: Array<MeasuringPointJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measuring-points/{point-id}',
            path: {
                'point-id': pointId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update measuring point`,
                404: `The specified resource was not found`,
                409: `Measuring point is locked by other user`,
            },
        });
    }

    /**
     * Measuring points - Search
     * ### Overview
     * Search measuring points.
     *
     * ### Filter: by-plant
     * Search measuring points based on plant and one other property of the measuring point.
     * Parameters:
     * - plant-id
     *
     * At least one of the following parameters is required:
     *
     * - `tag-prefix`
     * - `measuring-position`
     * - `quantitative-characteristic`
     * - `qualitative-code-group`
     * - `measuring-point-name`
     * - `characteristic-value-any-of`
     *
     * ### Examples
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&api-version=v1`
     * `/measuring-points?filter=by-plant&plant-id=1102&quantitative-characteristic=SURFACE_MAINTEANC&api-version=v1`
     *
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&position=VALVE%20STATUS&include-last-measurement=true&api-version=v1`
     *
     *
     * When using the `characteristic-value-any-of` it is important to URI Encode the input data especially when there are special characters as part of the input:
     *
     * `/measuring-points?characteristic-value-any-of=%3D17445%2F9818,%3D17433/6333&class-id=L_PART&characteristic-id=L_E3DREF&plant-id=1201&api-version=v1`
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to response.
     *
     * ### Update release 1.20.0
     * Edited the response structure to support pagination. Use the parameters `page` and `per-page` in the parameters to edit wanted response.
     *
     * ### Update release 1.21.0
     * Measuring points for equipment are now included in searches based on `plant-id`.
     * Measuring points for equipment now include the `tagId` and `tagPlantId` of the tag the equipment is installed on.
     *
     * ### Update release 1.22.0
     * To limit the response data for filter `by-plant`, at least one of the additional parameters must be provided.
     *
     * ### Update release 1.30.0
     * Added `characteristic-value-any-of`, `class-id` and `characteristic-id` query parameters.
     * Can be used to search for measuring points based on values of a characteristic.
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
        perPage = 50,
        page = 1,
        characteristicId,
        classId,
        characteristicValueAnyOf,
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
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids.
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id`. Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
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
                'per-page': perPage,
                'page': page,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'characteristic-value-any-of': characteristicValueAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Measuring point - Create
     * Create a new measuring point.
     *
     * ### Important information
     *
     * Mandatory fields for the creation of a measuring point are either tagId and tagPlantId, or equipmentId.
     *
     * As well the request must contain either quantitativeCharacteristicId, qualitativeCodeGroupId or combination of the two.
     *
     * Setting characteristics class and initial characteristics values (for example for class R_PIPE_DETAILS and characteristicId R_E3D_REF_NO) must be done through a separate endpoint POST `/measuring-points/{point-id}/characteristics`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MeasuringPointBasic Created
     * @throws ApiError
     */
    public static createMeasuringPoint({
        requestBody,
    }: {
        /**
         * Measuring point to create
         */
        requestBody: MeasuringPointCreate,
    }): CancelablePromise<ProblemDetails | MeasuringPointBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measuring-points',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The resource provided in the body is not according to specification`,
                403: `User does not have sufficient rights to create a measuring point`,
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
     * The supported fields are: `measurementTitle` and `processingStatus`.
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
     * Measuring point - Add characteristics
     * Add characteristics to existing measuring point.
     *
     * Characteristics are grouped into a class such as `R_PIPE_DETAILS` or `POSITION_DETAILS`.
     * Classes can be assigned to a measuring point and specific characteristics such as `R_DIAMETER_MM` and `E3D_REF_NO` will then be available for that specific measuring point.
     *
     * With this endpoint, the consumer can assign classes to a measuring point and define initial values for some of the characteristics in the classes.
     *
     * There is currently no endpoint for looking up existing classes and their characteristics, but this may be added in the future.
     *
     * ### Important information
     * Use `/measuring-points/{point-id}?include-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToMeasuringPoint({
        pointId,
        requestBody,
    }: {
        /**
         * Measuring point id
         */
        pointId: string,
        /**
         * Characteristics to add to measuring point.
         */
        requestBody: Array<MeasuringPointAddClass>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measuring-points/{point-id}/characteristics',
            path: {
                'point-id': pointId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
            },
        });
    }

    /**
     * Measuring Point - Update characteristics
     * Update existing values of characteristics on a tag. If the characteristics does not exist, a `404 - Not Found` is returned.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateMeasuringPointCharacteristics({
        pointId,
        requestBody,
    }: {
        /**
         * Measuring point id
         */
        pointId: string,
        /**
         * Characteristics to be updated, based on JsonPatch standard
         */
        requestBody: Array<CharacteristicsUpdate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measuring-points/{point-id}/characteristics',
            path: {
                'point-id': pointId,
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

}
