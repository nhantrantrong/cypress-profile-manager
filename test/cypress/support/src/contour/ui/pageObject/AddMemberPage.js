/// <reference types="Cypress" />


import { allureReporter, webElement } from '../../../../../e2e/TestController';
import BasePage from './BasePage';
import Member from '../../objects/Member';

/**
 * Page Object class of AddMemberPage
 */
class AddMemberPage extends BasePage {

    path = '/add-member';

    firstNameTextBox = '#first_name';
    lastNameTextBox = '#last_name';
    titleTextBox = '#title';
    companyTextBox = '#company';
    phoneNumberTextBox = '#phone';
    websiteUrlTextBox = '#website';
    emailTextBox = '#email';
    agreeCheckbox = '#remember';
    submitButton = '#__next button[type="submit"]';
    successAlertText = '#toast-success div[class~="text-sm"]';


    REQUIRED_FIELDS = {
        "First name": this.firstNameTextBox,
        "Last name": this.lastNameTextBox,
        "Title": this.titleTextBox,
        "Company": this.companyTextBox,
        "Agree Term And Condition": this.agreeCheckbox
    }

    validateRequiredFields() {
        const reqFieldNames = Object.keys(this.REQUIRED_FIELDS);
        reqFieldNames.forEach(fieldName => {
            allureReporter.step(`Validate '${fieldName}' is required`)
            webElement.validateShouldHaveAttribute(this.REQUIRED_FIELDS[fieldName], 'required', fieldName);
        })
    }

    clickSubmit() {
        webElement.clickByText(this.submitButton, 'Submit', 'Submit');
    }

    typeFirstName(firstName) {
        webElement.type(this.firstNameTextBox, firstName, 'First Name');
    }

    typeLastName(lastName) {
        webElement.type(this.lastNameTextBox, lastName, 'Last Name');
    }

    typeTitle(title) {
        webElement.type(this.titleTextBox, title, 'Title');
    }

    typeCompany(company) {
        webElement.type(this.companyTextBox, company, 'Company');
    }

    typeEmail(email) {
        webElement.type(this.emailTextBox, email, 'Email Address');
    }

    typePhoneNumber(phoneNumber) {
        webElement.type(this.phoneNumberTextBox, phoneNumber, "Phone Number");
    }

    typeWebSiteUrl(websiteUrl) {
        webElement.type(this.websiteUrlTextBox, websiteUrl, "Website Url");
    }

    checkAgreeTermAndCondition() {
        webElement.check(this.agreeCheckbox, 'Agree Term and Condition')
    }

    /**
     * 
     * @param {Member} member 
     */
    enterMemberData(member) {
        this.typeFirstName(member.firstName);
        this.typeLastName(member.lastName);
        this.typeTitle(member.title);
        this.typeCompany(member.company);

        if (member.phoneNumber) {
            this.typePhoneNumber(member.phoneNumber);
        }

        if (member.websiteUrl) {
            this.typeWebSiteUrl(member.websiteUrl);
        }
        
        this.typeEmail(member.email);
        this.checkAgreeTermAndCondition();
    }

    /**
     * 
     * @param {Member} member 
     */
    addMember(member) {
        allureReporter.step(`Enter data into 'Add Member' form`);
        this.enterMemberData(member);

        allureReporter.step(`Click 'Submit' button`)
        this.clickSubmit();
    }

    validateSuccessAlertText(text) {
        webElement.validateTextContains(this.successAlertText, text, 'Success Alert Message')
    }
}

export default AddMemberPage;