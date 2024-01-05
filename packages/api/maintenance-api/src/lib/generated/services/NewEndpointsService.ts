/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicsUpdate } from "../models/CharacteristicsUpdate";
import type { MaintenanceRecordItemMetadataCreate } from "../models/MaintenanceRecordItemMetadataCreate";
import type { MetadataAddClass } from "../models/MetadataAddClass";
import type { ProblemDetails } from "../models/ProblemDetails";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class NewEndpointsService {
    /**
     * Activity report - Add additional metadata
     * ### Overview
     * Add additional metadata for an activity report.
     * This related to additional failure modes and detection modes for an activity report and only used in rare cases.
     *
     * The metadata-id available to update for a given activity report can be found by querying `/maintenance-records/activity-reports/{record-id}?include-additional-metadata=true`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addActivityReportAdditionalMetadata({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string;
        /**
         * Update to make for metadata
         */
        requestBody: Array<MaintenanceRecordItemMetadataCreate>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/activity-reports/{record-id}/additional-metadata",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to update failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Activity report metadata - Add characteristics
     * Add new characteristics to an existing activity report metadata.
     *
     * Characteristics are grouped into a class such as `FL_MAINT_STRATEGY`.
     *
     * With this endpoint, the consumer can assign classes metadata and define initial values for some of the characteristics in the classes.
     *
     * There is currently no endpoint for looking up existing classes and their characteristics, but this may be added in the future.
     *
     * Note that if a given characteristic has already been added to this metadata, repeated adding will result in overwriting of the characteristic value.
     * If you want to update a characteristic the `PATCH` endpoint can be used.
     *
     * ### Important information
     * Use `/maintenance-records/activity-reports/{record-id}?include-additional-metadata=true&include-additional-data-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToActivityReportMetadata({
        recordId,
        metadataId,
        requestBody,
    }: {
        recordId: string;
        metadataId: string;
        /**
         * Characteristics to add to metadata.
         */
        requestBody: Array<MetadataAddClass>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/activity-reports/{record-id}/additional-metadata/{metadata-id}/characteristics",
            path: {
                "record-id": recordId,
                "metadata-id": metadataId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
            },
        });
    }

    /**
     * Activity report metadata - Update characteristic
     * Update existing values of characteristics on a activity report metadata. If the characteristics does not exist, a `404 - Not Found` is returned.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReportMetadataCharacteristics({
        recordId,
        metadataId,
        requestBody,
    }: {
        recordId: string;
        metadataId: string;
        /**
         * Characteristics to be updated, based on JsonPatch standard
         */
        requestBody: Array<CharacteristicsUpdate>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/activity-reports/{record-id}/additional-metadata/{metadata-id}/characteristics",
            path: {
                "record-id": recordId,
                "metadata-id": metadataId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to characteristics`,
                404: `The specified resource was not found`,
                409: `Characteristics is locked by other user`,
            },
        });
    }
}
