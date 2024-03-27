/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceStrategy } from '../models/MaintenanceStrategy';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaintenanceStrategiesService {

    /**
     * Maintenance Strategies - Lookup
     * ### Overview
     * Lookup single maintenance strategy.
     *
     * Maintenance strategies define a set of maintenance packages which are used in the maintenance plans. The maintenance packages determine the cycle duration for preventive maintenance and can be organised as calendar-based with e.g. 3-, 6-, 12- or 24-monthly intervals, or as hourly with e.g. 1000-, 2000- or 5000-hour interval.
     *
     * @returns MaintenanceStrategy Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getMaintenanceStrategy({
        strategyId,
    }: {
        /**
         * The id of the strategy. Example values: `1100-1`,`1100-3`,`1100-5`,`1100-9`
         */
        strategyId: string,
    }): CancelablePromise<MaintenanceStrategy | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-strategies/{strategy-id}',
            path: {
                'strategy-id': strategyId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

}
