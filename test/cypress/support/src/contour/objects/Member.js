
/**
 * Object to store test data and type into the input element
 */
class Member {

    firstName;
    lastName;
    title;
    company;
    phoneNumber;
    websiteUrl;
    email;

    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} title 
     * @param {string} company 
     * @param {string} phoneNumber 
     * @param {string} websiteUrl 
     * @param {string} email 
     */
    constructor(firstName, lastName, title, company, email, phoneNumber = "", websiteUrl = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.company = company;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.websiteUrl = websiteUrl;
    }

}

export default Member;