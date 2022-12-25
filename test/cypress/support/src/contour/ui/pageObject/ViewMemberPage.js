/// <reference types="Cypress" />


import { allureReporter, webElement } from '../../../../../e2e/TestController';
import BasePage from './BasePage';
import Member from '../../objects/Member';
import SearchSession from './sessions/SearchSession';

/**
 * Page Object class of AddMemberPage
 */
class ViewMemberPage extends BasePage {

    path = '/view-member';

    searchSession = new SearchSession();

    nothingToDisplayLabel = '#__next h1'
    firstNameLabel = '#first_name';
    lastNameLabel = '#last_name';
    titleLabel = '#title';
    companyLabel = '#company';
    phoneNumberLabel = '#phone';
    websiteUrlLabel = '#website';
    emailLabel = '#email';


    validateFirstNameLabelText(firstName) {
        webElement.validateTextContains(this.firstNameLabel, firstName, 'First name');
    }

    validateLastNameLabelText(lastName) {
        webElement.validateTextContains(this.lastNameLabel, lastName, 'Last name');
    }

    validateTitleLabelText(title) {
        webElement.validateTextContains(this.titleLabel, title, 'Title');
    }

    validateCompanyLabelText(company) {
        webElement.validateTextContains(this.companyLabel, company, 'Company');
    }

    validatePhoneNumberLabelText(phoneNumber) {
        webElement.validateTextContains(this.phoneNumberLabel, phoneNumber, 'Phone number');
    }

    validateWebsiteUrlLabelText(websiteUrl) {
        webElement.validateTextContains(this.websiteUrlLabel, websiteUrl, 'Website URL');
    }

    validateEmailLabelText(email) {
        webElement.validateTextContains(this.emailLabel, email, 'Email address')
    }

    /**
     * 
     * @param {Member} member 
     */
    validateMemberDetails(member) {
        allureReporter.step('Validate member details data in the corresponding fields');
        this.validateFirstNameLabelText(member.firstName);
        this.validateLastNameLabelText(member.lastName);
        this.validateTitleLabelText(member.title);
        this.validateCompanyLabelText(member.company);
        this.validatePhoneNumberLabelText(member.phoneNumber);
        this.validateWebsiteUrlLabelText(member.websiteUrl);
        this.validateEmailLabelText(member.email);
    }

    validateNothingToDisplay() {
        const text = 'Nothing to display...';
        webElement.validateTextContains(this.nothingToDisplayLabel, text, 'Nothing to display text');
    }
}

export default ViewMemberPage;