/// <reference types="Cypress" />

import { configs, allureReporter } from '../../../../e2e/TestController';

/**
 * This class is wrapped up some method of cypress to be invoked when interact with webpage
 */
class WebPage {

    url = configs.ui.url;
    path = '/';

    /**
     * Navigate to webpage url
     * @returns 
     */
    open() {
        const openUrl = this.url + this.path;
        allureReporter.startStep(`Open url: '${openUrl}'`);
        cy.visit(openUrl);
        allureReporter.endStep();
    }

    /**
     * Navigate back
     * @returns 
     */
    goBack() {
        allureReporter.startStep(`Navigate back`);
        cy.go('back');
        allureReporter.endStep();
    }

    /**
     * Navigate forward
     * @returns 
     */
    goForward() {
        allureReporter.startStep(`Navigate Forward`);
        cy.go('forward');
        allureReporter.endStep();
    }

    /**
     * Reload page
     * @param {*} usingCache 
     * @returns 
     */
    reload(usingCache = false) {
        allureReporter.startStep(`Reload page`);
        cy.reload(!usingCache);
        allureReporter.endStep();
    }

    /**
     * Validate if the page URL is matched to the expectation
     * @param {string} expUrl expected url
     * @returns 
     */
    validateUrl() {
        const expUrl = this.url + this.path;
        allureReporter.startStep(`Validate page URL should be '${expUrl}'`);
        cy.url().should('eq', expUrl)
        allureReporter.endStep();
    }

}

export default WebPage;