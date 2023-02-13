import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MaintenanceConceptsService {
    /**
     * Maintenance Concept - Lookup
     * ### Overview
     * Lookup single maintenance concept
     *
     * ### Update release v1.7.0
     * Added property conceptInstructions to maintenance concept and property text for maintenance activity.
     *
     * ### Update release 1.9.0
     * Extended support for durations, now displaying durations for all formats in SAP. This change
     * is implemented on all the duration fields; `recommendedInterval`, `maxInterval` and `initialInterval`.
     *
     * Weeks (WCH) will be represented as days, e.g `WCH=5` will be converted to `P35D`
     *
     * @returns MaintenanceConcept Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static getMaintenanceConcept({ conceptId, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-concepts/{concept-id}',
            path: {
                'concept-id': conceptId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }
}
