/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeGroup } from '../models/CodeGroup';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MasterDataForCatalogsService {

    /**
     * Code Group - Search
     * ### Overview
     * Returns a list of codeGroups that belong in the catalog.
     *
     * The catalog-id can be any of the following:
     * | catalogId      |  Description                                                         |
     * |-----------------------|-----------------------------------------------------------------------|
     * | 1                     |  Characteristic attribute       |
     * | 2                     |  Tasks                          |
     * | 5                     |  Failure mechanism              |
     * | C                     |  Failure mode                   |
     * | V                     |  Measuring points               |
     * | D                     |  Coding                         |
     *
     * ### Update release 1.28.0
     * Added catalog for coding to be used for general classification of maintenance records.
     *
     * @returns CodeGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCodeGroup({
        catalogId,
    }: {
        catalogId: '1' | '2' | '5' | 'C' | 'D' | 'V',
    }): CancelablePromise<Array<CodeGroup> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/catalogs/{catalog-id}/code-groups',
            path: {
                'catalog-id': catalogId,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

}
