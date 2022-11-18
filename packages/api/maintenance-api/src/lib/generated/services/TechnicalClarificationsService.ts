/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TechnicalClarification } from '../models/TechnicalClarification';
import type { TechnicalClarificationBasic } from '../models/TechnicalClarificationBasic';
import type { TechnicalClarificationCreate } from '../models/TechnicalClarificationCreate';
import type { TechnicalClarificationJsonPatch } from '../models/TechnicalClarificationJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TechnicalClarificationsService {

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
     * @param recordId The recordId of the technical clarification
     * @param includeStatusDetails Include detailed information for statuses (both active and non-active)
     * @param includeTasks Include detailed information for tasks
     * @param includeAttachments Include attachments
     * @param includeTagDetails Include details about tag for technical clarification
     * @param includePersonResponsible Include person responsible information in response. If user does not have significant rights, this will return a `403` response
     * @param includeCreatedByDetails Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
     * @returns TechnicalClarification Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTechnicalClarification(
        recordId: string,
        includeStatusDetails: boolean = false,
        includeTasks: boolean = false,
        includeAttachments: boolean = false,
        includeTagDetails: boolean = false,
        includePersonResponsible: boolean = false,
        includeCreatedByDetails: boolean = false,
    ): CancelablePromise<TechnicalClarification | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-clarifications/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tasks': includeTasks,
                'include-attachments': includeAttachments,
                'include-tag-details': includeTagDetails,
                'include-person-responsible': includePersonResponsible,
                'include-created-by-details': includeCreatedByDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                403: `User does not have sufficient rights to read technical clarification`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical clarification - Update
     * ## Overview
     * Update key fields of a technical clarification.
     *
     * ## Important information
     * To avoid accidently overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * @param recordId The recordId of the technical clarification
     * @param requestBody Details on how to update technical clarification
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalClarification(
        recordId: string,
        requestBody: Array<TechnicalClarificationJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/technical-clarifications/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty text property was supplied`,
                403: `User does not have sufficient rights to update the technical clarification`,
            },
        });
    }

    /**
     * Technical clarification - Attachment download
     * Download single attachment for technical clarification
     * @param recordId
     * @param attachmentId
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadTechnicalClarification(
        recordId: string,
        attachmentId: string,
    ): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-clarifications/{record-id}/attachments/{attachment-id}',
            path: {
                'record-id': recordId,
                'attachment-id': attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

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
     * @param filter Filter to limit the technical clarifications by
     * @param includePersonResponsible Include person responsible information in response
     * @param statusId Status
     * @param plantId Plant
     * @param locationId Structured location within the plant. Use /plants/{plant-id}/locations for possible values
     * @param systemId System id to filter by
     * @param planningPlantId Planning plant used for planner group id
     * @param plannerGroupId Planner group id (planning-plant-id must also be supplied)
     * @param maxDaysSinceActivation Define how many days from the current day to include results for. 0 if only include for today
     * @param hasPersonResponsible Define if it should have a person responsible or not
     * @param createdAfterDatetime Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
     * @param includeCompleted Filter based on if it's completed or open
     * @param personResponsibleEmail Email of the person responsible in urlencoded format
     * @returns TechnicalClarificationBasic Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTechnicalClarifications(
        filter: 'recent-status-activations' | 'open-by-plant' | 'by-tag' | 'by-person-responsible',
        includePersonResponsible: boolean = false,
        statusId?: string,
        plantId?: string,
        locationId?: string,
        systemId?: string,
        planningPlantId?: string,
        plannerGroupId?: string,
        maxDaysSinceActivation?: number,
        hasPersonResponsible: boolean = false,
        createdAfterDatetime?: string,
        includeCompleted: boolean = false,
        personResponsibleEmail?: string,
    ): CancelablePromise<Array<TechnicalClarificationBasic> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-clarifications',
            query: {
                'include-person-responsible': includePersonResponsible,
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'location-id': locationId,
                'system-id': systemId,
                'planning-plant-id': planningPlantId,
                'planner-group-id': plannerGroupId,
                'max-days-since-activation': maxDaysSinceActivation,
                'has-person-responsible': hasPersonResponsible,
                'created-after-datetime': createdAfterDatetime,
                'include-completed': includeCompleted,
                'person-responsible-email': personResponsibleEmail,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * Technical clarifications - Create
     * Create new technical information update requests
     *
     * ### Important information
     * It is possible to create technical clarification for either tagId or equipmentId.
     *
     * @param requestBody Technical clarifications to create
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TechnicalClarificationBasic Created
     * @throws ApiError
     */
    public static createTechnicalClarifications(
        requestBody: TechnicalClarificationCreate,
    ): CancelablePromise<ProblemDetails | TechnicalClarificationBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-clarifications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a technical clarification`,
            },
        });
    }

}
