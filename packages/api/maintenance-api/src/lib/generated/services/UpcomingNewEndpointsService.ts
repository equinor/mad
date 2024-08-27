/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunicationCreate } from '../models/CommunicationCreate';
import type { DocumentJsonPatch } from '../models/DocumentJsonPatch';
import type { InstallEquipment } from '../models/InstallEquipment';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingNewEndpointsService {

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
     * Corrective Work Order - Add communication
     * ### Overview
     *
     * Add communication to Corrective Work order.
     * Purchaser and Requestor collaboration text used on the order for a material.
     *
     * ### Important information
     * The communication is stored differently for each operation type PM01 (`operations`) or PM03 (`service-operations`).
     *
     * #### For PM01 (`operations`)
     * The communication will be stored on a unique reservation, and the reservation id is used to identify the reservation. Reservation id can be found under `materials` for a given operation.
     *
     * #### For PM03 (`service-operations`)
     * The communication will be stored on a unique service operation, and the service operation id is used to identify the service operation. Service operation id can be found under `serviceOperations` for a given work order.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addCorrectiveWorkOrderOperationCommunication({
        workOrderId,
        operation,
        requestBody,
    }: {
        workOrderId: string,
        operation: string,
        /**
         * Communication to add to Corrective Work order
         */
        requestBody: CommunicationCreate,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}/communication',
            path: {
                'work-order-id': workOrderId,
                'operation': operation,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to add communication to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Corrective Work Order Communication - Attachment upload
     * ### Overview
     * **Upload attachment for Corrective Work Order Communication and PM03 service-operations**
     *
     * ### Important information
     * Limitations of Attachment upload endpoints:
     * - No support for parallel calls (uploading multiple attachments at once).
     * - Maximum file size is 60 MB. Files between 60.0MB - 99.9MB will give a 400 error. Files larger than 100MB will result in a `413 Request Entity Too Large' Error in HTML. This is due to constraints in the underlying system and is outside of our control.
     * - There will be created a new DMS document for the communication, or reuse already existing document if an attachment is already uploaded.
     *
     * Please use the endpoint `/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}/communication` to add communication before uploading attachments.
     *
     * Please use the endpoint `/documents/{document-id}/attachments/{attachment-id}` to download attachments. `attachment-id` can be found in the response of the LookupCorrectiveWorkOrder endpoint.
     *
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadCorrectiveWorkOrderOperationCommunicationAttachment({
        workOrderId,
        operation,
        formData,
    }: {
        workOrderId: string,
        operation: string,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}/communication/attachments',
            path: {
                'work-order-id': workOrderId,
                'operation': operation,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
                413: `Request Entity Too Large.
                This error occurs when the size of an attachment exceeds 100MB.
                `,
            },
        });
    }

    /**
     * Corrective Work Order Material Communication - Attachment upload
     * ### Overview
     * **Upload attachment for Corrective Work Order Communication and PM01 operations**
     *
     * ### Important information
     * Limitations of Attachment upload endpoints:
     * - No support for parallel calls (uploading multiple attachments at once).
     * - Maximum file size is 60 MB. Files between 60.0MB - 99.9MB will give a 400 error. Files larger than 100MB will result in a `413 Request Entity Too Large' Error in HTML. This is due to constraints in the underlying system and is outside of our control.
     * - There will be created a new DMS document for the communication, or reuse already existing document if an attachment is already uploaded.
     *
     * Please use the endpoint `/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}/communication` to add communication before uploading attachments.
     *
     * Please use the endpoint `/documents/{document-id}/attachments/{attachment-id}` to download attachments. `attachment-id` can be found in the response of the LookupCorrectiveWorkOrder endpoint.
     *
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadCorrectiveWorkOrderOperationCommunicationMaterialAttachment({
        workOrderId,
        operation,
        reservationId,
        formData,
    }: {
        workOrderId: string,
        operation: string,
        reservationId: string,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}/materials/{reservation-id}/communication/attachments',
            path: {
                'work-order-id': workOrderId,
                'operation': operation,
                'reservation-id': reservationId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
                413: `Request Entity Too Large.
                This error occurs when the size of an attachment exceeds 100MB.
                `,
            },
        });
    }

}
