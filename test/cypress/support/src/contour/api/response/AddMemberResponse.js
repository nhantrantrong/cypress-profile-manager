import { allureReporter } from '../../../../../e2e/TestController';
import { addMemberSchemaSuccess } from '../../../../../fixtures/api/schemas/add-members-schemas-success';
import ContourApiResponse from './ContourApiResponse';


/**
 * This class define common methods of POST - /members Response handling
 */
class AddMemberResponse extends ContourApiResponse {

    /**
     * Validate JSON Response Schema of POST - /members when sending successfully
     * @param {*} response 
     */
    validateSuccessResponseSchema(response) {
        allureReporter.step(`Validate JSON Response Schema of POST - /members request Success should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, addMemberSchemaSuccess);
            });
    }

    /**
     * Validate 1 new member should be added successfully to the system
     * @param {*} response 
     * @param {number} numberOfMembers Number of existing members before adding 
     */
    validateAddedNewMemberSuccessfully(response, numberOfMembers) {
        const responseBody = response.body
        allureReporter.step(`Validate 1 new member should be added successfully to the system`)
            .then(() => {
                expect(responseBody).to.be.eq(numberOfMembers + 1);
            });
    }

}

export default AddMemberResponse;
