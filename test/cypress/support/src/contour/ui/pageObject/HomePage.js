/// <reference types="Cypress" />


import { allureReporter, tableElement, cyUtils } from '../../../../../e2e/TestController';
import BasePage from './BasePage';
import Member from '../../objects/Member';

/**
 * Page Object class of HomePage
 */
class HomePage extends BasePage {

    memberTable = '#__next table';

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
        allureReporter.step(`Validate data of member with id '${memberId}' in 'Members' table`)
        tableElement.getRowIndexByColumnName(this.memberTable, this.COLUMN_HEADERS.ID, memberId.toString()).as('memberIndex');
        cyUtils.getAlias('memberIndex')
            .then(memberIndex => {
                const fullName = `${member.firstName} ${member.lastName}`
                tableElement.validateTableCellValueByColumnName(this.memberTable, memberIndex, this.COLUMN_HEADERS.MEMBER_NAME, fullName);
                tableElement.validateTableCellValueByColumnName(this.memberTable, memberIndex, this.COLUMN_HEADERS.TITLE, member.title);
                tableElement.validateTableCellValueByColumnName(this.memberTable, memberIndex, this.COLUMN_HEADERS.COMPANY, member.company);
                tableElement.validateTableCellValueByColumnName(this.memberTable, memberIndex, this.COLUMN_HEADERS.EMAIL_ADDRESS, member.email);
            })
    }
}

export default HomePage;