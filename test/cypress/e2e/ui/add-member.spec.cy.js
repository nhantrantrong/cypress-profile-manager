import {
    setupUITest,
    homePage,
    allureReporter,
    addMemberPage,
    stringUtils,
    memberRequests,
    searchMemberPage,
    viewMemberPage
} from '../TestController';
import Member from '../../support/src/contour/objects/Member';

describe('Validate Add Member test Scenario', () => {

    beforeEach(() => {
        setupUITest();

        allureReporter.parentStep(`Click on 'Add Member' Navigation Link`);
        homePage.clickAddMemberLink();
    })

    it('AM-001 - Validate user should not able to submit the form without entering required fields', () => {
        allureReporter.parentStep(`Validate all required fields on 'Add Member' page`);
        addMemberPage.validateRequiredFields();

        allureReporter.parentStep(`Leave all required fields as empty, then click 'Submit' button`);
        addMemberPage.clickSubmit();

        allureReporter.parentStep(`Validate 'Add Member' is still opened`);
        addMemberPage.validateUrl();

        allureReporter.parentStep(`Fill in 'First Name', then click 'Submit' button`);
        addMemberPage.typeFirstName('at');
        addMemberPage.clickSubmit();

        allureReporter.parentStep(`Validate 'Add Member' is still opened`);
        addMemberPage.validateUrl();

        allureReporter.parentStep(`Fill in 'Last Name', then click 'Submit' button`);
        addMemberPage.typeLastName('test');
        addMemberPage.clickSubmit();

        allureReporter.parentStep(`Validate 'Add Member' is still opened`);
        addMemberPage.validateUrl();

        allureReporter.parentStep(`Fill in 'Title', then click 'Submit' button`);
        addMemberPage.typeTitle('QA Engineer');
        addMemberPage.clickSubmit();

        allureReporter.parentStep(`Validate 'Add Member' is still opened`);
        addMemberPage.validateUrl();

        allureReporter.parentStep(`Fill in 'Company', then click 'Submit' button`);
        addMemberPage.typeCompany('Testing Company');
        addMemberPage.clickSubmit();

        allureReporter.parentStep(`Validate 'Add Member' is still opened`);
        addMemberPage.validateUrl();

        allureReporter.parentStep(`Fill in 'Email Address', then click 'Submit' button`);
        addMemberPage.typeEmail('at-test@gmail.com');
        addMemberPage.clickSubmit();

        allureReporter.parentStep(`Validate 'Add Member' is still opened`);
        addMemberPage.validateUrl();
    })

    it('AM-002 - Validate user can add new member successfully with valid data', () => {
        const unique = stringUtils.randomString(5);
        const lastName = `member-${unique}`;
        const member = new Member(
            'at', lastName, 'QA Engineer', 'Testing Company', `at.${lastName}@gmail.com`
        );

        memberRequests.countNumberOfMembers().then((noExistingMembers) => {
            const memberId = noExistingMembers + 1;
            const successMessage = `Member has been added - ID: ${memberId}`

            allureReporter.parentStep(`Add a new member with valid data`);
            addMemberPage.addMember(member);

            allureReporter.parentStep(`Validate success message should be displayed correctly`);
            addMemberPage.validateSuccessAlertText(successMessage);

            allureReporter.parentStep(`Go to 'Home' page`);
            addMemberPage.clickHomeLink();

            allureReporter.parentStep(`Validate new added member should be displayed in table`);
            homePage.validateMemberDataInTable(memberId, member);

            allureReporter.parentStep(`Go to 'Search Member' page`);
            homePage.clickSearchMemberLink();

            allureReporter.parentStep(`Search the new added member by id`);
            searchMemberPage.searchSession.searchMember(memberId);

            allureReporter.parentStep(`Validate new added member should be displayed in table`);
            searchMemberPage.validateMemberDataInTable(memberId, member);

            allureReporter.parentStep(`Go to 'View Member' page`);
            searchMemberPage.clickViewMemberLink();

            allureReporter.parentStep(`Search the new added member by id`);
            viewMemberPage.searchSession.searchMember(memberId);

            allureReporter.parentStep(`Validate new added member data should be displayed correctly`);
            viewMemberPage.validateMemberDetails(member);

        })

    })
})