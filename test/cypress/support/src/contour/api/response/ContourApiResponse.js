import { allureReporter, memberRequests } from '../../../../../e2e/TestController';
import APIResponse from "../../../core/api/ApiResponse";


/**
 * This class is used to define reusable common methods realting in specified Contour Project scope
 */
class ContourApiResponse extends APIResponse {

    /**
     * Validate number of existing members in the system
     * @param {number} actual Actual number of existing members
     * @param {number} expected Expected number of existing members
     */
    validateNumberOfMembers(actual, expected) {
        allureReporter.step(`Validate number of existing members in the system should be matched`)
            .then(() => {
                expect(actual).to.be.eq(expected);
            });
    }

    /**
     * Send api request GET - /members/{memberId}
     * Then validate the response data with the expected input
     * @param {*} memberId memberId to retrieve data for validation
     * @param {*} expectedMemberData expected member data
     */
    validateMemberDataById(memberId, expectedMemberData) {
        memberRequests.getMemberById(memberId).then((response) => {
            const actualMemberData = response.body
            allureReporter.step(`Validate the corresponding data of memberId '${memberId}' should be correct`)
                .then(() => {
                    expect(actualMemberData).to.deep.eq(expectedMemberData);
                });
        })
    }
}

export default ContourApiResponse;