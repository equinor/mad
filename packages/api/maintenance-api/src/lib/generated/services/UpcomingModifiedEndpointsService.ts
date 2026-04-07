/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TechnicalInformationUpdateRequestBasic } from '../models/TechnicalInformationUpdateRequestBasic';
import type { TechnicalInformationUpdateRequestCreate } from '../models/TechnicalInformationUpdateRequestCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingModifiedEndpointsService {

    /**
     * Technical information update request - Create
     * Create new technical information update requests
     *
     * ### Important information
     * It is possible to create technical information update request for either tagId or equipmentId.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update future release
     * Added `relatedWorkOrder`. This will allow a relationship to be established on creation to either technical feedback or object list of a work order.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TechnicalInformationUpdateRequestBasic Created
     * @throws ApiError
     */
    public static createTechnicalInformationUpdateRequest({
        requestBody,
    }: {
        /**
         * Technical information update request to create
         */
        requestBody: TechnicalInformationUpdateRequestCreate,
    }): CancelablePromise<ProblemDetails | TechnicalInformationUpdateRequestBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-information-update-requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

}
