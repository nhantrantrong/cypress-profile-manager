/// <reference types="Cypress" />

import { webElement, allureReporter } from '../../../../../../e2e/TestController';

/**
 * Page Object class of Search Sessions that contains only Elements belong to search (search box, search button, etc.)
 */
class SearchSession {

    searchTextBox = '#default-search';
    searchButton = '#__next button[type="submit"]';
    searchResultTable = '#__next table';


    typeSearchValue(searchValue) {
        webElement.type(this.searchTextBox, searchValue, 'Search input');
    }

    clickSearchButton() {
        webElement.clickByText(this.searchButton, 'Search', 'Search button');
    }

    searchMember(searchValue) {
        allureReporter.step(`Search member with value: '${searchValue}'`);
        this.typeSearchValue(searchValue);
        this.clickSearchButton();
    }
}

export default SearchSession;