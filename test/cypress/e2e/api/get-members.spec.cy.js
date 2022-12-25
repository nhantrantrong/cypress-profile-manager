import { allureReporter, getMembersResponse, memberRequests } from '../TestController';


describe('Validate GET - /members api should work correctly', () => {

  it('GET-GM-001 - Validate list of members should be returned correctly', () => {

    allureReporter.parentStep(`Send GET - '/members' request with valid request body`);

    memberRequests.getMembers().then((response) => {
      getMembersResponse.validateSuccessResponseStatus(response);
      getMembersResponse.validateSuccessResponseSchema(response);
      getMembersResponse.validateResponseListNotEmpty(response);
    })
  })
})