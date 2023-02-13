import type { ProblemDetails } from '../models/ProblemDetails';
import type { StandardTextTemplate } from '../models/StandardTextTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MasterDataForWorkOrdersService {
    /**
     * Work orders - Get standard text templates
     * ### Overview
     * Get a list of standard text templates which can be used for work order operations.
     *
     * For preventive maintenance, the standard text template can be assigned to work order operations in the maintenance programme (see [Maintenance Plan Item - Update operation](#operation/UpdateOperationForMaintenancePlanItem))
     *
     * ### Filter: by-plant
     * Find standard text templates by plant.
     * Parameters:
     * - plant-id
     *
     * ### Filter: all
     * Find all standard text templates.
     * Parameters:
     * - None
     *
     * ### Examples
     * `/work-orders/standard-text-templates?filter=by-plant&plantId=1100&api-version=v1` - Get all standard text templates specific for plant 1100.
     *
     * `/work-orders/standard-text-templates?filter=all&api-version=v1` - Get all standard text templates
     *
     * @returns StandardTextTemplate Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static getWorkOrderStandardTextTemplates({ filter, plantId, }: {
        /**
         * Filter to limit the failure reports by
         */
        filter: 'by-plant' | 'all';
        /**
         * Plant
         */
        plantId?: string;
    }): CancelablePromise<Array<StandardTextTemplate> | ProblemDetails>;
}
