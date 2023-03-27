/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModificationProposal } from '../models/ModificationProposal';
import type { ModificationProposalBasic } from '../models/ModificationProposalBasic';
import type { ModificationProposalCreate } from '../models/ModificationProposalCreate';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModificationProposalsService {

    /**
     * Modification Proposal - Lookup
     * ### Overview
     * Modification proposal initiates the processing of a modification, replacement or maintenance project.
     * In Equinor for upstream offshore, a modification proposal initiates the business processes 'OM103.01 - Initiate projects on plants in operation' or 'OM103.70.01 - Propose simple modifications in safety and automatiion systems'.
     * This request looks up a single Modification proposal.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release v1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * ### Update release v1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns ModificationProposal Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getModificationProposal({
        recordId,
        includeTasks = true,
        includeStatusDetails = false,
        includeAttachments = false,
        includeCreatedByDetails = false,
    }: {
        recordId: string,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
    }): CancelablePromise<ModificationProposal | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/modification-proposals/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-tasks': includeTasks,
                'include-status-details': includeStatusDetails,
                'include-attachments': includeAttachments,
                'include-created-by-details': includeCreatedByDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Proposal - Create
     * ### Overview
     * Create a new modification proposal maintenance record.
     *
     * Modification proposal initiates the processing of a modification, replacement or maintenance project.
     * In Equinor for upstream offshore, a modification proposal initiates the business processes 'OM103.01 - Initiate projects on plants in operation' or 'OM103.70.01 - Propose simple modifications in safety and automatiion systems'.
     *
     * ### Important information
     * The following attributes rely on master data:
     * * `reasonGroupId` and `reasonId` - Use values from endpoint `/maintenance-records/reason-codes`
     * * `plannerGroupId` and `planningPlantId` - Use values from endpoint `/plants/{plant-id}/planner-groups`
     * * `workCenterId` and `workCenterPlantId` - USe values from `/plants/{plant-id}/work-centers`
     *
     * ### Important information
     * The `isSimpleProposal` attribute determines if this is a simple proposal. For a simple proposal, `reasonGroupId` and `reasonId` are not required.
     *
     * ### Update release v1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ModificationProposalBasic Created
     * @throws ApiError
     */
    public static createModificationProposal({
        requestBody,
    }: {
        /**
         * Modification proposal to create
         */
        requestBody: ModificationProposalCreate,
    }): CancelablePromise<ProblemDetails | ModificationProposalBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/modification-proposals',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a modification proposal`,
            },
        });
    }

    /**
     * Modification proposal - Update status
     * Update status of modification proposal.
     *
     * The statuses available for the modification proposal can be found by querying `/maintenance-records/modification-proposals/{record-id}?include-status-details=true`.
     *
     *
     * ### Important information
     * The endpoints supports status activation such as:
     *
     * - RQAS - Ready Quality Assurance
     * - RPRI - Ready Prioritization
     * - APRI - Approved Prioritization
     * - EXWO - Execution by Work Order
     * - FPPR - Finished Project Proposal
     * - RFDM - Ready for Decision Meeting
     * - NOPO - Notification postponed
     * - CANC - Cancelled
     * - PROJ - Project Consideration
     * - RISK - Risk Matrix assigned
     *
     * The endpoints supports status deactivation such as:
     *
     * - CANC - Cancelled
     * - PROJ - Project Consideration
     * - RISK - Risk Matrix assigned
     *
     * If the modification proposal has a relationship to a Work Order, the status `ORAS - Order assigned` will be set automatically on the activity report.
     *
     * When the modification proposal is completed, the status `NOCO - Notification completed` must be set.
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocIndex.html?DOCVIEW=FALSE?DOCID=1046023) provides some additional information.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateModificationProposalStatus({
        recordId,
        statusId,
        requestBody,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string,
        statusId: string,
        /**
         * Modification proposal status to update
         */
        requestBody: Array<StatusUpdateJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/modification-proposals/{record-id}/statuses/{status-id}',
            path: {
                'record-id': recordId,
                'status-id': statusId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                403: `User does not have sufficient rights to update activity report`,
                404: `The specified resource was not found`,
                409: `Activity report is locked by other user`,
            },
        });
    }

    /**
     * Modification Proposal - Attachment upload
     * Upload attachment for modification proposal
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadModificationProposalAttachment({
        recordId,
        formData,
    }: {
        recordId: string,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/modification-proposals/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Proposal - Attachment download
     * ### Overview
     *
     * Download single attachment for a modification proposal maintenance record.
     *
     * ### Known limitations
     * It's not possible to download attachments of type .txt which are stored in the GOS container of the ERP system.
     * Such requests will result in a `HTTP 404 Not found` response.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadModificationProposalAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/modification-proposals/{record-id}/attachments/{attachment-id}',
            path: {
                'record-id': recordId,
                'attachment-id': attachmentId,
            },
        });
    }

}
