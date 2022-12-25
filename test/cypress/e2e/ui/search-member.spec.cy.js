import {
    setupUITest,
    homePage,
    allureReporter,
    searchMemberPage,
} from '../TestController';
import Member from '../../support/src/contour/objects/Member';

describe('Validate Search Member test Scenario', () => {

    const memberId = 1;
    const member = new Member(
        'Lenox', 'Lutfi', 'QA Engineer', 'Contour', `lenox.lutfi@contour.network`,
        '123-456-7890', 'https://contour.network'
    );

    beforeEach(() => {
        setupUITest();

        allureReporter.parentStep(`Click on 'Search Member' Navigation Link`);
        homePage.clickSearchMemberLink();
    })

    it('SM-001 - Validate user can search an existing member by Id', () => {
        allureReporter.parentStep(`Search member by Id`);
        searchMemberPage.searchSession.searchMember(memberId);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    it('SM-002 - Validate user can search an existing member by First Name', () => {
        allureReporter.parentStep(`Search member by First Name`);
        searchMemberPage.searchSession.searchMember(member.firstName);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    it('SM-003 - Validate user can search an existing member by Last Name', () => {
        allureReporter.parentStep(`Search member by Last Name`);
        searchMemberPage.searchSession.searchMember(member.lastName);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })


    // Enhancement: [Ehancement-UI-API] Not able to search member by full name
    it('SM-004 - Validate user can search an existing member by Full Name', () => {
        allureReporter.parentStep(`Search member by Full Name`);
        searchMemberPage.searchSession.searchMember(`${member.firstName} ${member.lastName}`);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    it('SM-005 - Validate user can search an existing member by Title', () => {
        allureReporter.parentStep(`Search member by Title`);
        searchMemberPage.searchSession.searchMember(member.title);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    it('SM-006 - Validate user can search an existing member by Company', () => {
        allureReporter.parentStep(`Search member by Company`);
        searchMemberPage.searchSession.searchMember(member.company);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    it('SM-007 - Validate user can search an existing member by Email', () => {
        allureReporter.parentStep(`Search member by Email`);
        searchMemberPage.searchSession.searchMember(member.email);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    // Question: [Question] Search Member - Is it able to search member by phone number?
    it('SM-008 - Validate user can search an existing member by Phone Number', () => {
        allureReporter.parentStep(`Search member by Phone Number`);
        searchMemberPage.searchSession.searchMember(member.phoneNumber);

        allureReporter.parentStep(`Validate matched member data should be displayed in table`);
        searchMemberPage.validateMemberDataInTable(memberId, member);
    })

    it('SM-009 - Validate search result table should be empty when searching non-existing id', () => {
        memberRequests.countNumberOfMembers().then((noExistingMembers) => {
            const memberId = noExistingMembers + 999;
            allureReporter.parentStep(`Search member by non-existing id`);
            searchMemberPage.searchSession.searchMember(memberId);

            allureReporter.parentStep(`Validate matched member data should be displayed in table`);
            searchMemberPage.validateSearchResultEmpty();
        })
    })
})