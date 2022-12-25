/// <reference types="Cypress" />

import { configs } from "../../../../e2e/TestController";

/**
 * This class is wrapped up some method of cypress relating to other sides (ex: cy.log, cy.get)
 */
class CypressUtils {

    url = configs.ui.url;


    /**
     * Wrapped up `cy.get(@aliasName)` method. '@' character for alias name will be added automatically.
     * @param {string} aliasName alias name without '@' character
     * @returns 
     */
    getAlias(aliasName) {
        return cy.get(`@${aliasName}`);
    }

    /**
     * Wrapped up `cy.log()` method
     * @param {string} message content to be logged
     * @returns 
     */
    log(message) {
        return cy.log(message);
    }

    /**
     * Wrapped up `cy.fixture()` method
     * @param {string} filePath 
     * @returns 
     */
    fixture(filePath) {
        return cy.fixture(filePath);
    }
}

export default CypressUtils;