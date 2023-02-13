import type { ProblemDetails } from '../models/ProblemDetails';
import type { TechnicalClarification } from '../models/TechnicalClarification';
import type { TechnicalClarificationBasic } from '../models/TechnicalClarificationBasic';
import type { TechnicalClarificationCreate } from '../models/TechnicalClarificationCreate';
import type { TechnicalClarificationJsonPatch } from '../models/TechnicalClarificationJsonPatch';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TechnicalClarificationsService {
    /**
     * Technical clarifications - Lookup
     * ### Overview
     * Lookup a single technical clarification.
     *
     * Represents a request for technical clarification when not covered by other maintenance records (such as failure-reports and corrective-work-orders).
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides additional information for this maintenance record type.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release v1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * @returns TechnicalClarification Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static lookupTechnicalClarification({ recordId, includeStatusDetails, includeTasks, includeAttachments, includeTagDetails, includePersonResponsible, includeCreatedByDetails, }: {
        /**
         * The recordId of the technical clarification
         */
        recordId: string;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include details about tag for technical clarification
         */
        includeTagDetails?: boolean;
        /**
         * Include person responsible information in response. If user does not have significant rights, this will return a `403` response
         */
        includePersonResponsible?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
    }): CancelablePromise<TechnicalClarification | ProblemDetails>;
    /**
     * Technical clarification - Update
     * ## Overview
     * Update key fields of a technical clarification.
     *
     * ## Important information
     * To avoid accidently overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateTechnicalClarification({ recordId, requestBody, }: {
        /**
         * The recordId of the technical clarification
         */
        recordId: string;
        /**
         * Details on how to update technical clarification
         */
        requestBody: Array<TechnicalClarificationJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Technical clarification - Attachment download
     * ### Overview
     * Download single attachment for technical clarification
     *
     * ### Known limitations
     * It's not possible to download attachments of type .txt which are stored in the GOS container of the ERP system.
     * Such requests will result in a `HTTP 404 Not found` response.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static downloadTechnicalClarification({ recordId, attachmentId, }: {
        recordId: string;
        attachmentId: string;
    }): CancelablePromise<Blob | ProblemDetails>;
    /**
     * Technical clarification - Search
     * ### Overview
     * Search for technical clarifications through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each technical clarification.
     * Use lookup of technical clarification to retrieve additional details.
     *
     * ### Request
     * If query parameter include-person-responsible is set to true in the request, the response will contain values for personResponsibleId and personResponsibleEmail. This will have a performance impact and therefore the default value is false.
     *
     * ### Filter: recent-status-activations
     * Technical clarifications based on recent status activations.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     *
     * Example request: `/maintenance-records/technical-clarifications?api-version=v1&filter=recent-status-activations&status-id=CRTE&plant-id=1100&max-days-since-activation=10`
     *
     * ### Filter: open-by-plant
     * Find open Technical clarifications by plant.
     * Parameters:
     * - plant-id
     * - location-id (optional)
     * - system-id (optional)
     * - has-person-responsible (optional)
     * - created-after-datetime (optional)
     * - planning-plant-id (optional)
     * - planner-group-id (optional)
     *
     * Example request: `/maintenance-records/technical-clarifications?api-version=v1&filter=open-by-plant&plant-id=1100&has-person-responsible=false`
     *
     * ### Filter: by-tag
     * Find Technical clarifications by tag with possibility of not including completed ones. `/plants/{plant-id}/tags/{tag-id}?include-maintenance-records=true` may also be used for a similar effect.
     * Parameters:
     * - plant-id
     * - tag-id
     * - include-completed (optional)
     * - created-after-datetime (optional)
     *
     * Example request: `/maintenance-records/technical-clarifications?api-version=v1&filter=by-tag&plant-id=1100&tag-id=DV50100&include-completed=true`
     *
     * ### Filter: by-person-responsible
     * Find technical clarifications by person responsible.
     * Parameters:
     * - person-responsible-email  (value should be urlencoded)
     * - include-completed (optional, default false)
     *
     * Example request: `/maintenance-records/technical-clarifications?api-version=v1&filter=by-person-responsible&person-responsible-email=shortname%40equinor.com&include-completed=false&include-person-responsible=true`
     *
     * ### Update release 1.4.0
     * Added filter by-person-responsible.
     *
     * Added query parameter include-person-responsible.
     *
     * Added properties personResponsibleId and personResponsibleEmail to response (only populated if include-person-responsible=true in the request).
     *
     * @returns TechnicalClarificationBasic Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static searchTechnicalClarifications({ filter, includePersonResponsible, statusId, plantId, locationId, systemId, planningPlantId, plannerGroupId, maxDaysSinceActivation, hasPersonResponsible, createdAfterDatetime, includeCompleted, personResponsibleEmail, }: {
        /**
         * Filter to limit the technical clarifications by
         */
        filter: 'recent-status-activations' | 'open-by-plant' | 'by-tag' | 'by-person-responsible';
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean;
        /**
         * Status
         */
        statusId?: string;
        /**
         * Plant
         */
        plantId?: string;
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string;
        /**
         * System id to filter by
         */
        systemId?: string;
        /**
         * Planning plant used for planner group id
         */
        planningPlantId?: string;
        /**
         * Planner group id (planning-plant-id must also be supplied)
         */
        plannerGroupId?: string;
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number;
        /**
         * Define if it should have a person responsible or not
         */
        hasPersonResponsible?: boolean;
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        createdAfterDatetime?: string;
        /**
         * Filter based on if it's completed or open
         */
        includeCompleted?: boolean;
        /**
         * Email of the person responsible in urlencoded format
         */
        personResponsibleEmail?: string;
    }): CancelablePromise<Array<TechnicalClarificationBasic> | ProblemDetails>;
    /**
     * Technical clarifications - Create
     * Create new technical information update requests
     *
     * ### Important information
     * It is possible to create technical clarification for either tagId or equipmentId.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TechnicalClarificationBasic Created
     * @throws ApiError
     */
    static createTechnicalClarifications({ requestBody, }: {
        /**
         * Technical clarifications to create
         */
        requestBody: TechnicalClarificationCreate;
    }): CancelablePromise<ProblemDetails | TechnicalClarificationBasic>;
}
