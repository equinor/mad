/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentJsonPatch } from '../models/DocumentJsonPatch';
import type { InstallEquipment } from '../models/InstallEquipment';
import type { MaintenanceRecordTypes } from '../models/MaintenanceRecordTypes';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { WorkOrderTypes } from '../models/WorkOrderTypes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Maintenance record - Types
     * ### Overview
     * Get type of a maintenance record based on the maintenance record id.
     *
     * @returns MaintenanceRecordTypes Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getMaintenanceRecordType({
        maintenanceRecordIdsAnyOf,
    }: {
        /**
         * The maintenance record ids as a comma separated list.
         */
        maintenanceRecordIdsAnyOf: string,
    }): CancelablePromise<Array<MaintenanceRecordTypes> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-record-types',
            query: {
                'maintenance-record-ids-any-of': maintenanceRecordIdsAnyOf,
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
     * An equipment can be dismantled from a tag, or an equipment.
     * The correct installation needs to be provided in the body to be successful.
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
         * Dismantle equipment in a hierarchy.
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
     * Document - Update
     * ### Overview
     * Update a Document.
     *
     * Supports updating the following properties:
     * - `statusId`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateDocument({
        documentId,
        requestBody,
    }: {
        /**
         * Unique id of the document that will be updated
         */
        documentId: string,
        /**
         * The information to be updated
         */
        requestBody: Array<DocumentJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/documents/{document-id}',
            path: {
                'document-id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update Document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

    /**
     * Work orders - Types
     * ### Overview
     * Get type of a work order based on the work order id.
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

}
