import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipURLReferencesAdd } from '../models/RelationshipURLReferencesAdd';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MaintenanceRecordRelationshipsService {
    /**
     * Maintenance record relationships -  Add URL reference
     * ### Overview
     * Add a URL reference to a maintenance record.
     *
     * Supported maintenance record types:
     * - Activity reports
     * - Failure reports
     *
     * URL references are stored in the Document Management System (DMS). If there exist a DMS document for the provided characteristics it will be reused, otherwise a new DMS document will be created.
     *
     * The following characteristicsId can be used:
     * - `DISCIPLINE_B30`
     * - `ADDITIONAL_REFERENCE_B30`
     * - `DATE_OF_DOCUMENT_B30` (Date of photo / report)
     *
     * Existing URL references are available through the lookup endpoints for maintenance records. Examples: `GET /maintenance-records/failure-reports/{record-id}?include-url-references=true&api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static addRelationshipFromMaintenanceRecordToUrlReference({ recordId, requestBody, }: {
        /**
         * Id of the maintenance record (can be any type)
         */
        recordId: string;
        /**
         * Define URL reference to add relationship
         */
        requestBody: RelationshipURLReferencesAdd;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance record relationships - Remove URL reference
     * ### Overview
     * Remove a URL reference from an existing maintenance record.
     *
     * Existing URL references can be found through the lookup endpoints for maintenance records. Example: `GET /maintenance-records/failure-reports/{record-id}?include-url-references=true&api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static removeRelationshipFromMaintenanceRecordToUrl({ recordId, urlReferenceId, }: {
        /**
         * Id of the maintenance record (can be any type)
         */
        recordId: string;
        /**
         * Id of the URL reference
         */
        urlReferenceId: string;
    }): CancelablePromise<ProblemDetails>;
}
