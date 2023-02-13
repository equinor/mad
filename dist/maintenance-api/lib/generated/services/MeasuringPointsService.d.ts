import type { Measurement } from '../models/Measurement';
import type { MeasurementCreate } from '../models/MeasurementCreate';
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { MeasuringPointAddClass } from '../models/MeasuringPointAddClass';
import type { MeasuringPointBasic } from '../models/MeasuringPointBasic';
import type { MeasuringPointCreate } from '../models/MeasuringPointCreate';
import type { MeasuringPointJsonPatch } from '../models/MeasuringPointJsonPatch';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MeasuringPointsService {
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
    static lookupMeasuringPoint({ pointId, includeLastMeasurement, includeMeasurements, includeQualitativeCodeGroup, includeCharacteristics, includeCharacteristicsWithoutValue, }: {
        pointId: string;
        /**
         * Include the last measurement of the measuring point
         */
        includeLastMeasurement?: boolean;
        /**
         * Include measurements of the measuring point
         */
        includeMeasurements?: boolean;
        /**
         * Include possible codes for qualitative measurements if qualitativeCodeGroupId is set
         */
        includeQualitativeCodeGroup?: boolean;
        /**
         * Include characteristics with defined value for the measuring point. Use `include-characteristics-without-value` to retrieve all characteristics available for the measuring point.
         */
        includeCharacteristics?: boolean;
        /**
         * Include all characteristics available for the measuring point regardless if they have a defined value or not. Use `include-characteristics` to only include characteristics with defined value for the measuring point.
         */
        includeCharacteristicsWithoutValue?: boolean;
    }): CancelablePromise<MeasuringPoint | ProblemDetails>;
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
    static updateMeasuringPoint({ pointId, requestBody, }: {
        pointId: string;
        /**
         * The information to be updated
         */
        requestBody: Array<MeasuringPointJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
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
    static searchMeasuringPoints({ filter, plantId, tagPrefix, measuringPosition, quantitativeCharacteristic, qualitativeCodeGroup, measuringPointName, includeLastMeasurement, includeMeasurements, includeQualitativeCodeGroup, includeCharacteristics, includeCharacteristicsWithoutValue, }: {
        /**
         * Filter to limit the measuring points by
         */
        filter: 'by-plant';
        /**
         * Plant the tag-prefix belongs to
         */
        plantId?: string;
        /**
         * The first few characters of the tag
         */
        tagPrefix?: string;
        /**
         * Limit result based on a specific measuring position value
         */
        measuringPosition?: string;
        /**
         * Limit result based on a specific quantitative characteristic value
         */
        quantitativeCharacteristic?: string;
        /**
         * Limit result based on a specific qualitative code group value
         */
        qualitativeCodeGroup?: string;
        /**
         * Limit result based on a specific measuring point name value
         */
        measuringPointName?: string;
        /**
         * Include the last measurement of the measuring points
         */
        includeLastMeasurement?: boolean;
        /**
         * Include measurements of the measuring points
         */
        includeMeasurements?: boolean;
        /**
         * Include possible codes for qualitative measurements if qualitativeCodeGroupId is set
         */
        includeQualitativeCodeGroup?: boolean;
        /**
         * Include characteristics with defined value for the measuring points. Use `include-characteristics-without-value` to retrieve all characteristics available for the measuring points.
         */
        includeCharacteristics?: boolean;
        /**
         * Include all characteristics available for the measuring points regardless if they have a defined value or not. Use `include-characteristics` to only include characteristics with defined value for the measuring points.
         */
        includeCharacteristicsWithoutValue?: boolean;
    }): CancelablePromise<Array<MeasuringPoint> | ProblemDetails>;
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
    static createMeasuringPoint({ requestBody, }: {
        /**
         * Measuring point to create
         */
        requestBody: MeasuringPointCreate;
    }): CancelablePromise<ProblemDetails | MeasuringPointBasic>;
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
    static createMeasurement({ pointId, requestBody, }: {
        pointId: string;
        /**
         * Measurement of measuring point to create
         */
        requestBody: MeasurementCreate;
    }): CancelablePromise<ProblemDetails | Measurement>;
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
    static addCharacteristicsToMeasuringPoint({ pointId, requestBody, }: {
        /**
         * Measuring point id
         */
        pointId: string;
        /**
         * Characteristics to add to measuring point.
         */
        requestBody: Array<MeasuringPointAddClass>;
    }): CancelablePromise<ProblemDetails | string>;
}
