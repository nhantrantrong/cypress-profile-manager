import {
  allureReporter,
  memberRequests,
  stringUtils,
  addMemberResponse,
  cyUtils
} from '../TestController';


describe('Validate POST - /members api should work correctly', () => {

  const fixtureDataPath = 'api/test-data/add-members/';

  it('POST-AM-001 - Validate new member should be added successfully with valid data', () => {

    allureReporter.parentStep(`Send POST - '/members' request with valid request body`);

    const unique = stringUtils.randomString(5);
    const requestBody = {
      "firstName": "at",
      "lastName": `member-${unique}`,
      "title": "QA",
      "company": "Testing Company",
      "phoneNumber": "12312445",
      "website": "",
      "email": ""
    }
    memberRequests.countNumberOfMembers().as("numberOfMembers");

    cyUtils.getAlias('numberOfMembers').then((numberOfMembers) => {

      memberRequests.addMember(requestBody).then((response) => {
        addMemberResponse.validateSuccessResponseStatus(response);
        addMemberResponse.validateSuccessResponseSchema(response);
        addMemberResponse.validateAddedNewMemberSuccessfully(response, numberOfMembers);

        // Validate data of new added Member
        const memberId = response.body
        requestBody.id = memberId
        addMemberResponse.validateMemberDataById(memberId, requestBody);
      })

    })
  })

  // Bug: [Defect-API] New member can be still added into the system without required fields
  it('POST-AM-002 - Validate error should be returned when adding user without required field', () => {

    cyUtils.fixture(`${fixtureDataPath}missing-required-fields.json`).as(`requestBodies`);

    cyUtils.getAlias(`requestBodies`).then((requestBodies) => {
      requestBodies.forEach(requestBody => {

        allureReporter.parentStep(`Send POST - '/members' request without required fields in request body`);
        memberRequests.countNumberOfMembers().as("numberOfMembers");

        cyUtils.getAlias('numberOfMembers').then((numberOfMembers) => {

          memberRequests.addMember(requestBody).then((response) => {
            addMemberResponse.validateBadRequestResponseStatus(response);
            addMemberResponse.validateNumberOfMembers(numberOfMembers);
          })

        })
      })
    })
  })

  // Bug: [Defect-API] New member can be still added into the system with invalid phone number
  it('POST-AM-003 - Validate error message should be returned when adding new member with invalid phone number', () => {

    cyUtils.fixture(`${fixtureDataPath}/invalid-phone-numbers.json`).as(`requestBodies`);

    cyUtils.getAlias(`requestBodies`).then((requestBodies) => {
      requestBodies.forEach(requestBody => {

        allureReporter.parentStep(`Send POST - '/members' request with invalid 'phoneNumber' in request body`);
        memberRequests.countNumberOfMembers().as("numberOfMembers");

        cyUtils.getAlias('numberOfMembers').then((numberOfMembers) => {

          memberRequests.addMember(requestBody).then((response) => {
            addMemberResponse.validateBadRequestResponseStatus(response);
            addMemberResponse.validateNumberOfMembers(numberOfMembers);
          })

        })
      })
    })
  })

  // Bug: [Defect-API] New member can be still added into the system with invalid email address
  it('POST-AM-004 - Validate error message should be returned when adding new member with invalid email address', () => {

    cyUtils.fixture(`${fixtureDataPath}/invalid-emails.json`).as(`requestBodies`);
    cyUtils.getAlias(`requestBodies`).then((requestBodies) => {
      requestBodies.forEach(requestBody => {

        allureReporter.parentStep(`Send POST - '/members' request with invalid 'email' in request body`);
        memberRequests.countNumberOfMembers().as("numberOfMembers");

        cyUtils.getAlias('numberOfMembers').then((numberOfMembers) => {

          memberRequests.addMember(requestBody).then((response) => {
            addMemberResponse.validateBadRequestResponseStatus(response);
            addMemberResponse.validateNumberOfMembers(numberOfMembers);
          })

        })
      })
    })
  })

  it('POST-AM-005 - Validate new member should be added successfully with different type of entered phone number format', () => {

    cyUtils.fixture(`${fixtureDataPath}/valid-phone-numbers.json`).as(`requestBodies`);

    cyUtils.getAlias(`requestBodies`).then((requestBodies) => {
      requestBodies.forEach(requestBody => {

        allureReporter.parentStep(`Send POST - '/members' request with different type of phone number format`);
        memberRequests.countNumberOfMembers().as("numberOfMembers");

        cyUtils.getAlias('numberOfMembers').then((numberOfMembers) => {

          memberRequests.addMember(requestBody).then((response) => {
            addMemberResponse.validateSuccessResponseStatus(response);
            addMemberResponse.validateSuccessResponseSchema(response);
            addMemberResponse.validateAddedNewMemberSuccessfully(response, numberOfMembers);

            // Validate data of new added Member
            const memberId = response.body
            requestBody.id = memberId
            addMemberResponse.validateMemberDataById(memberId, requestBody);
          })

        })
      })
    })
  })
})