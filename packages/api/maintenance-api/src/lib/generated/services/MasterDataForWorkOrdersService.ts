/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostCategory } from '../models/CostCategory';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { SafetyMeasure } from '../models/SafetyMeasure';
import type { StandardTextTemplate } from '../models/StandardTextTemplate';
import type { TechnicalFeedbackStatus } from '../models/TechnicalFeedbackStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MasterDataForWorkOrdersService {

    /**
     * Work orders - Get standard text templates
     * ### Overview
     * Get a list of standard text templates which can be used for work order operations.
     *
     * For preventive maintenance, the standard text template can be assigned to work order operations in the maintenance programme (see [Maintenance Plan Item - Update operation](#operation/UpdateOperationForMaintenancePlanItem))
     *
     * Use `plant-id` query parameter to filter by plant, or leave the parameter out to get all standard text templates.
     *
     * ### Examples
     * `/work-orders/standard-text-templates?plant-id=1100&api-version=v1` - Get all standard text templates specific for plant 1100.
     *
     * `/work-orders/standard-text-templates?api-version=v1` - Get all standard text templates
     *
     * ### Update release 1.40.0
     * Deprecated `filter=by-plant` and `filter=all`. The endpoint will accept the parameter but ignore it. Use `plant-id` query parameter to filter by plant, or leave the parameter out to get all standard text templates.
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * @returns StandardTextTemplate Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderStandardTextTemplates({
        filter,
        plantId,
        page,
        perPage,
    }: {
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-plant' | 'all',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<StandardTextTemplate> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/standard-text-templates',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'page': page,
                'per-page': perPage,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
            },
        });
    }

    /**
     * Work orders - Get safety measures
     * ### Overview
     * Get a list of safety measures. They can be added to a work order operation when it requires special safety practices or risk management
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * @returns SafetyMeasure Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getSafetyMeasures({
        page,
        perPage,
    }: {
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<SafetyMeasure> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/safety-measures',
            query: {
                'page': page,
                'per-page': perPage,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
            },
        });
    }

    /**
     * Work orders - Get cost categories
     * ### Overview
     * Get a list of cost categories. They can be added to a work order when it requires special cost tracking.
     *
     * @returns CostCategory Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getCostCategories(): CancelablePromise<Array<CostCategory> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/cost-categories',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
            },
        });
    }

    /**
     * Technical feedback - Master data
     * ### Overview
     * Get a list of all statuses and reasons which can be used in updating technical feedback.
     *
     * ### Related endpoint
     *
     * `POST` [/work-order-operations/{operation-id}/technical-feedback/{technical-feedback-id}](#operation/UpdateTechnicalFeedback)
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * @returns TechnicalFeedbackStatus Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTechnicalFeedbackMasterData({
        page,
        perPage,
    }: {
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<TechnicalFeedbackStatus> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/technical-feedback-master-data',
            query: {
                'page': page,
                'per-page': perPage,
            },
        });
    }

}
