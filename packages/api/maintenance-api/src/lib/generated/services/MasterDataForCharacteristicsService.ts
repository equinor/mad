/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Class } from '../models/Class';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MasterDataForCharacteristicsService {

    /**
     * Class - Lookup
     * ### Overview
     * Returns a list of characteristics for a Class.
     *
     * The class-type can be any of the following:
     * | class-type            |  Description                                                         |
     * |-----------------------|-----------------------------------------------------------------------|
     * | 002                   |  Equipment                      |
     * | 003                   |  Tags                           |
     * | 015                   |  Notification Item              |
     * | 037                   |  Measuring Point                |
     *
     * @returns Class Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupClass({
        classId,
        classType,
    }: {
        classId: string,
        classType: '002' | '003' | '015' | '037',
    }): CancelablePromise<Class | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/characteristics/{class-id}',
            path: {
                'class-id': classId,
            },
            query: {
                'class-type': classType,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

}
