/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RawEquipmentChange } from '../models/RawEquipmentChange';
import type { RawEquipmentChangeReturn } from '../models/RawEquipmentChangeReturn';
import type { RawEquipmentCreate } from '../models/RawEquipmentCreate';
import type { RawEquipmentCreateReturn } from '../models/RawEquipmentCreateReturn';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Equipment - Create (raw)
     * ### Overview
     *
     * Create equipment - special intended usage for machine-to-machine integration. Fields are kept in their raw form, and mirror the data model in SAP.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns RawEquipmentCreateReturn Created Equipment - return SAP BAPI structure
     * @throws ApiError
     */
    public static rawEquipmentCreate({
        requestBody,
    }: {
        /**
         * Create equipment - raw SAP BAPI data input.
         */
        requestBody: RawEquipmentCreate,
    }): CancelablePromise<ProblemDetails | RawEquipmentCreateReturn> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/raw/equipment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The resource provided in the body is not according to specification`,
                403: `User does not have sufficient rights to create a equipment`,
            },
        });
    }

    /**
     * Equipment - Change (raw)
     * ### Overview
     *
     * Change equipment - special intended usage for machine-to-machine integration. Fields are kept in their raw form, and mirror the data model in SAP.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns RawEquipmentChangeReturn Change equipment - return SAP BAPI structure
     * @throws ApiError
     */
    public static rawEquipmentChange({
        equipmentId,
        requestBody,
    }: {
        /**
         * Equipment number
         */
        equipmentId: string,
        /**
         * Change equipment - raw SAP BAPI data input.
         */
        requestBody: RawEquipmentChange,
    }): CancelablePromise<ProblemDetails | RawEquipmentChangeReturn> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/raw/equipment/{equipment-id}',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

}
