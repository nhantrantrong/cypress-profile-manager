/// <reference types="Cypress" />

import WebPage from '../../../core/ui/WebPage';
import { allureReporter, webElement } from '../../../../../e2e/TestController';

/**
 * Page Object class of HomePage
 */
class BasePage extends WebPage {

    homeNav = 'a[href="/"]';
    addMemberNav = 'a[href="/add-member"]';
    searchMemberNav = 'a[href="/search-member"]';
    viewMemberNav = 'a[href="/view-member"]';

    clickHomeLink() {
        webElement.click(this.homeNav, 'Home');
    }

    clickAddMemberLink() {
        webElement.click(this.addMemberNav, 'Add Member');
    }

    clickSearchMemberLink() {
        webElement.click(this.searchMemberNav, 'Search Member');
    }

    clickViewMemberLink() {
        webElement.click(this.viewMemberNav, 'View Member');
    }
}

export default BasePage;