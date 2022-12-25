/// <reference types="Cypress" />


import { allureReporter, tableElement, cyUtils } from '../../../../../e2e/TestController';
import BasePage from './BasePage';
import Member from '../../objects/Member';
import SearchSession from './sessions/SearchSession';

/**
 * Page Object class of SaerchMemberPage
 */
class SearchMemberPage extends BasePage {

    path = '/search-member';

    searchSession = new SearchSession();

    searchResultTable = '#__next table';

    COLUMN_HEADERS = {
        ID: 'ID',
        MEMBER_NAME: 'Member name',
        TITLE: 'Title',
        COMPANY: 'Company',
        EMAIL_ADDRESS: 'Email address'
    }

    /**
     * 
     * @param {number} memberId 
     * @param {Member} member 
     */
    validateMemberDataInTable(memberId, member) {
        allureReporter.step(`Validate data of member with id '${memberId}' in 'Search Result' table`)
        tableElement.getRowIndexByColumnName(this.searchResultTable, this.COLUMN_HEADERS.ID, memberId.toString()).as('memberIndex');
        cyUtils.getAlias('memberIndex')
            .then(memberIndex => {
                const fullName = `${member.firstName} ${member.lastName}`
                tableElement.validateTableCellValueByColumnName(this.searchResultTable, memberIndex, this.COLUMN_HEADERS.MEMBER_NAME, fullName);
                tableElement.validateTableCellValueByColumnName(this.searchResultTable, memberIndex, this.COLUMN_HEADERS.TITLE, member.title);
                tableElement.validateTableCellValueByColumnName(this.searchResultTable, memberIndex, this.COLUMN_HEADERS.COMPANY, member.company);
                tableElement.validateTableCellValueByColumnName(this.searchResultTable, memberIndex, this.COLUMN_HEADERS.EMAIL_ADDRESS, member.email);
            })
    }

    validateSearchResultEmpty(){
        allureReporter.step(`Validate there is not any returned record in 'Search Result' table`)
        tableElement.validateTableIsEmpty(this.searchResultTable);
    }
}

export default SearchMemberPage;