
import AllureReporter from '../support/src/core/AllureReporter';
import DateTimeUtils from '../support/src/core/utils/DateTimeUtils';
import MemberRequest from '../support/src/contour/api/requests/MemberRequest';
import WebElement from '../support/src/core/ui/WebElement';
import HomePage from '../support/src/contour/ui/pageObject/HomePage';
import StringUtils from '../support/src/core/utils/StringUtils';
import AddMemberResponse from '../support/src/contour/api/response/AddMemberResponse';
import CypressUtils from '../support/src/core/utils/CypressUtils';
import GetMembersResponse from '../support/src/contour/api/response/GetMembersResponse';
import GetMembersByIdResponse from '../support/src/contour/api/response/GetMembersByIdResponse';
import AddMemberPage from '../support/src/contour/ui/pageObject/AddMemberPage';
import TableElement from '../support/src/core/ui/TableElement';
import SearchMemberPage from '../support/src/contour/ui/pageObject/SearchMemberPage';
import ViewMemberPage from '../support/src/contour/ui/pageObject/ViewMemberPage';


/**
 * This class is used to define class instances and some setUp common method before running tests
 */

// Retrieve Configs information
const testEnv = Cypress.env('testEnv');

export const configs = {
    api: Cypress.env(testEnv).api,
    ui: Cypress.env(testEnv).ui
};

// Allure Reporter class instance
export const allureReporter = new AllureReporter();

// Utils class instances
export const dateTimeUtils = new DateTimeUtils();
export const stringUtils = new StringUtils();
export const cyUtils = new CypressUtils();

// API Request class instances
export const memberRequests = new MemberRequest();

// API Response class instances
export const addMemberResponse = new AddMemberResponse();
export const getMembersResponse = new GetMembersResponse();
export const getMemberByIdResponse = new GetMembersByIdResponse();

// Pages class instances
export const homePage = new HomePage();
export const addMemberPage = new AddMemberPage();
export const searchMemberPage = new SearchMemberPage();
export const viewMemberPage = new ViewMemberPage();

// Core class instances
export const webElement = new WebElement();
export const tableElement = new TableElement();


// Setup method
export function setupUITest() {
    homePage.open();
};
