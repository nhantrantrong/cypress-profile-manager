import {
    setupUITest,
    homePage,
    allureReporter,
    viewMemberPage,
    memberRequests
} from '../TestController';
import Member from '../../support/src/contour/objects/Member';

describe('Validate Search Member test Scenario', () => {

    const memberId = 2;
    const member = new Member(
        'Jane', 'Doe', 'FE Developer', 'Contour', `jane.doe@contour.network`,
        '123-456-7890', 'https://contour.network'
    );

    beforeEach(() => {
        setupUITest();

        allureReporter.parentStep(`Click on 'View Member' Navigation Link`);
        homePage.clickViewMemberLink();
    })

    it('VM-001 - Validate user can view Member Details by existing Id', () => {
        allureReporter.parentStep(`Search member by Id`);
        viewMemberPage.searchSession.searchMember(memberId);

        allureReporter.parentStep(`Validate member data should be displayed correctly`);
        viewMemberPage.validateMemberDetails(member);
    })

    it('VM-002 - Validate user can not view Member Details by FirstName', () => {
        allureReporter.parentStep(`Search member by FirstName`);
        viewMemberPage.searchSession.searchMember(member.firstName);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-003 - Validate user can not view Member Details by LastName', () => {
        allureReporter.parentStep(`Search member by LastName`);
        viewMemberPage.searchSession.searchMember(member.lastName);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-004 - Validate user can not view Member Details by Title', () => {
        allureReporter.parentStep(`Search member by Title`);
        viewMemberPage.searchSession.searchMember(member.title);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-005 - Validate user can not view Member Details by Email', () => {
        allureReporter.parentStep(`Search member by Email`);
        viewMemberPage.searchSession.searchMember(member.email);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-006 - Validate user can not view Member Details by Company', () => {
        allureReporter.parentStep(`Search member by Company`);
        viewMemberPage.searchSession.searchMember(member.company);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-007 - Validate user can not view Member Details by Phone Number', () => {
        allureReporter.parentStep(`Search member by Phone Number`);
        viewMemberPage.searchSession.searchMember(member.phoneNumber);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-008 - Validate user can not view Member Details by Website Url', () => {
        allureReporter.parentStep(`Search member by Website Url`);
        viewMemberPage.searchSession.searchMember(member.websiteUrl);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })

    it('VM-009 - Validate user can not view Member Details by non-existing id', () => {
        memberRequests.countNumberOfMembers().then((noExistingMembers) => {
            const memberId = noExistingMembers + 999;
            allureReporter.parentStep(`Search member by Website Url`);
            viewMemberPage.searchSession.searchMember(memberId);

            allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
            viewMemberPage.validateNothingToDisplay();
        })
    })

    it('VM-010 - Validate user can not view Member Details by special characters', () => {
        const specialChars = `$#%'--`;
        allureReporter.parentStep(`Search member by special characters`);
        viewMemberPage.searchSession.searchMember(specialChars);

        allureReporter.parentStep(`Validate 'Nothing to display...' text should be displayed`);
        viewMemberPage.validateNothingToDisplay();
    })
})