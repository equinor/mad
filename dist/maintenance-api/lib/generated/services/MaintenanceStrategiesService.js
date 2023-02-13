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
    static getMaintenanceStrategy({ strategyId, }) {
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
