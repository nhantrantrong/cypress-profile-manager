import { allureReporter } from '../../../../e2e/TestController';
/// <reference types="Cypress" />

/**
 * This class is wrapped up some cypress methods to be invoked when interacting with web elements
 */
class WebElement {

    // =========================================================================
    // Interaction Methods
    // =========================================================================

    /**
     * Wrapped up `cy.get()` method
     * @param {string} selector css locator
     * @returns 
     */
    get(selector) {
        return cy.get(selector);
    }

    /**
     * Wrapped up `cy.get().type()` method
     * @param {string} selector css locator
     * @param {string} value value to type into element
     * @param {string} elementName name of element to write into allure report
     */
    type(selector, value, elementName = '') {
        allureReporter.startStep(`Type value into '${elementName}' element: '${value}'`);
        this.get(selector)
            .type(value);
        allureReporter.endStep();
    }

    /**
     * Wrapped up `cy.get().click({force: <optional true/false value>})` method
     * @param {string} selector css locator
     * @param {string} elementName name of element to write into allure report
     * @param {boolean} isForce true/false - default is 'false'
     * @returns 
     */
    click(selector, elementName = '', isForce = false) {
        allureReporter.startStep(`Click on '${elementName}' element`);
        this.get(selector)
            .click({ force: isForce });
        allureReporter.endStep();
    }

    /**
     * Wrapped up `cy.get().contains(<text value>).click({force: <optional true/false value>})` method
     * @param {string} selector css locator
     * @param {string} text expected contained text to yeild element
     * @param {string} elementName name of element to write into allure report
     * @param {boolean} isForce true/false - default is 'false'
     * @returns 
     */
    clickByText(selector, text, elementName = '', isForce = false) {
        allureReporter.startStep(`Click on '${elementName}' element which contains text '${text}'`);
        this.get(selector)
            .contains(text)
            .click(({ force: isForce }));
        allureReporter.endStep();
    }

    /**
     * Wrapped up `cy.get().check({force: <optional true/false value>})` method
     * @param {string} selector css locator
     * @param {string} elementName name of element to write into allure report
     * @param {boolean} isForce true/false - default is 'false'
     * @returns 
     */
    check(selector, elementName = '', isForce = false) {
        allureReporter.startStep(`Check on '${elementName}' element`);
        this.get(selector)
            .check({ force: isForce });
        allureReporter.endStep();
    }

    // =========================================================================
    // Validation Methods
    // =========================================================================

    /**
     * Wrapped up `cy.get().should('contain.text', <expectedValue>)` method
     * @param {string} selector css locator
     * @param {string} value expected value for validation
     * @param {string} elementName name of element to write into allure report
     * @returns 
     */
    validateTextContains(selector, value, elementName) {
        allureReporter.startStep(`Validate element '${elementName}' should contains text: '${value}'`);
        this.get(selector)
            .should('contain.text', value);
        allureReporter.endStep();
    }

    /**
     * Wrapped up `cy.get().should('have.attr', <expectedValue>)` method
     * @param {string} selector css locator
     * @param {string} attrName expected attribute for validation
     * @param {string} elementName name of element to write into allure report
     * @returns 
     */
    validateShouldHaveAttribute(selector, attrName, elementName = '') {
        allureReporter.startStep(`Validate '${elementName}' element should have attribute '${attrName}'`)
        this.get(selector)
            .should('have.attr', attrName)
        allureReporter.endStep()
    }
}

export default WebElement;