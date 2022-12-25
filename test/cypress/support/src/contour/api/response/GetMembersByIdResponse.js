import { allureReporter } from '../../../../../e2e/TestController';
import ContourApiResponse from './ContourApiResponse';
import {
    getMemberByIdSchemaSuccess
} from '../../../../../fixtures/api/schemas/get-members-by-id-schemas-success';
import {
    getMemberByIdSchemaNotFound
} from '../../../../../fixtures/api/schemas/get-members-by-id-schemas-not-found';

/**
 * This class define common methods of GET - /members/{memberId} Response handling
 */
class GetMembersByIdResponse extends ContourApiResponse {

    /**
     * Validate JSON Response Schema of GET - /members when sending successfully
     * @param {*} response 
     */
    validateSuccessResponseSchema(response) {
        allureReporter.step(`Validate JSON Response Schema of GET - /members/{memberId} request Success should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, getMemberByIdSchemaSuccess);
            });
    }

    /**
     * Validate JSON Response Schema of GET - /members when sending with Not Found returned
     * @param {*} response 
     */
    validateNotFoundResponseSchema(response) {
        allureReporter.step(`Validate JSON Response Schema of GET - /members/{memberId} request Not Found should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, getMemberByIdSchemaNotFound);
            });
    }

    /**
     * Validate the returned member data in JSON Response should be correct
     * @param {*} response 
     * @param {*} expectedMemberData expected member data
     */
    validateMemberData(response, expectedMemberData) {
        const responseBody = response.body

        allureReporter.step(`Validate the returned member data in JSON Response should be correct`)
            .then(() => {
                expect(responseBody).to.deep.eq(expectedMemberData);
            });
    }

    validateNotFoundResponseData(response){
        const responseBody = response.body
        const notFoundMessage = 'Not Found'

        allureReporter.step(`Validate the returned message data in JSON Response should be 'Not found'`)
            .then(() => {
                expect(responseBody).to.be.eq(notFoundMessage);
            });
    }

}

export default GetMembersByIdResponse;
