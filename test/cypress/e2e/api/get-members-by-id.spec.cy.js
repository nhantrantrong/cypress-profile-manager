import {
  allureReporter,
  memberRequests,
  getMemberByIdResponse,
  cyUtils
} from '../TestController';


describe('Validate GET - /members/{memberId} api should work correctly', () => {

  const fixtureDataPath = 'api/test-data/get-members-by-id/';

  it('GET-GM-002 - Validate corresponding member should be returned when sending request with existing memberId', () => {

    allureReporter.parentStep(`Send GET - '/members/{memberId}' request with valid request body`);

    const expectedMemberData = {
      "id": 1,
      "firstName": "Lenox",
      "lastName": "Lutfi",
      "title": "QA Engineer",
      "company": "Contour",
      "phoneNumber": "123-456-7890",
      "website": "https://contour.network",
      "email": "lenox.lutfi@contour.network"
    }

    memberRequests.getMemberById(1).then((response) => {
      getMemberByIdResponse.validateSuccessResponseStatus(response);
      getMemberByIdResponse.validateSuccessResponseSchema(response);
      getMemberByIdResponse.validateMemberData(response, expectedMemberData);
    })
  })

  // [Defect-API] HTML document with error is returned when sending GET - /members/{memberId} with special character in memberId
  it('GET-GM-003 - Validate there should not any member returned when sending request with non-existing memberId', () => {

    cyUtils.fixture(`${fixtureDataPath}invalid-member-ids.json`).as(`memberIds`);

    cyUtils.getAlias(`memberIds`).then((memberIds) => {
      memberIds.forEach(id => {

        allureReporter.parentStep(`Send GET - '/members/{memberId}' request with invalid memberId`);

        memberRequests.getMemberById(id).then((response) => {
          getMemberByIdResponse.validateNotFoundResponseStatus(response);
          getMemberByIdResponse.validateNotFoundResponseSchema(response);
          getMemberByIdResponse.validateNotFoundResponseData(response);
        })
      })
    })
  })

})