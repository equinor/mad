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
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static lookupMeasuringPoint({ pointId, includeLastMeasurement = false, includeMeasurements = false, includeQualitativeCodeGroup = false, includeCharacteristics = false, includeCharacteristicsWithoutValue = false, }) {
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
    static updateMeasuringPoint({ pointId, requestBody, }) {
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
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static searchMeasuringPoints({ filter, plantId, tagPrefix, measuringPosition, quantitativeCharacteristic, qualitativeCodeGroup, measuringPointName, includeLastMeasurement = false, includeMeasurements = false, includeQualitativeCodeGroup = false, includeCharacteristics = false, includeCharacteristicsWithoutValue = false, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measuring-points',
            query: {
                filter: filter,
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
     * Measuring point - Create
     * Create a new measuring point.
     *
     * ### Important information
     *
     * Mandatory fields for the creation of a measuring point are either tagId and tagPlantId, or equipmentId.
     *
     * As well the request must contain either quantitativeCharacteristicId, qualitativeCodeGroupId or combination of the two.
     *
     * Setting characteristics class and initial characteristics values (for example for class R_PIPE_DETAILS and characteristicsId R_E3D_REF_NO) must be done through a separate endpoint POST `/measuring-points/{point-id}/characteristics`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MeasuringPointBasic Created
     * @throws ApiError
     */
    static createMeasuringPoint({ requestBody, }) {
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
     * ### Update release v1.10.0
     * Added `maintenanceRecordId` to request.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns Measurement Created
     * @throws ApiError
     */
    static createMeasurement({ pointId, requestBody, }) {
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
    static addCharacteristicsToMeasuringPoint({ pointId, requestBody, }) {
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
}
