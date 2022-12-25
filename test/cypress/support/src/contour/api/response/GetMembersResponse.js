import { allureReporter } from '../../../../../e2e/TestController';
import { getListMembersSchemaSuccess } from '../../../../../fixtures/api/schemas/get-members-schemas-success';
import ContourApiResponse from './ContourApiResponse';

/**
 * This class define common methods of GET - /members Response handling
 */
class GetMembersResponse extends ContourApiResponse {

    /**
     * Validate JSON Response Schema of GET - /members when sending successfully
     * @param {*} response 
     */
    validateSuccessResponseSchema(response) {
        allureReporter.step(`Validate JSON Response Schema of GET - /members request Success should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, getListMembersSchemaSuccess);
            });
    }

    /**
     * Validate the response list should NOT be empty
     * @param {*} response 
     * @param {number} numberOfMembers Number of existing members before adding 
     */
    validateResponseListNotEmpty(response) {
        const responseBody = response.body

        allureReporter.step(`Validate the response list should NOT be empty`)
            .then(() => {
                expect(responseBody).to.not.empty;
            });
    }
}

export default GetMembersResponse;
