/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TagJsonPatch } from '../models/TagJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsV1170Service {

    /**
     * Tag - Update
     * ### Overview
     * Update a single tag
     *
     * ### Important information
     * There is a plant-specific configuration called "data origin" which determines which properties should be inherited from the parent tag. Please be aware that updating of the field `parentTagId` might lead to overwriting of those properties to the default values of the new tag.
     *
     * If a tag is a parent tag, changing of an already existing property will be cascaded to all its childen. This is valid if according to the "data origin" this property should be inherited.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTag({
        plantId,
        tagId,
        requestBody,
    }: {
        plantId: string,
        tagId: string,
        /**
         * Information to be updated
         */
        requestBody: Array<TagJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/plants/{plant-id}/tags/{tag-id}',
            path: {
                'plant-id': plantId,
                'tag-id': tagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update tag`,
                404: `The specified resource was not found`,
                409: `Tag is locked by other user`,
            },
        });
    }

}
