import APIRequest from '../../../core/api/ApiRequest';


/**
 * This class defines common method of send Member Requests
 */
class MemberRequest extends APIRequest {

    path = `/members`;

    /**
     * Send GET - /members
     * @returns 
     */
    getMembers() {
        return this.sendGet(this.path);
    }

    /**
     * Send GET - /members/<memberId>
     * @param {*} memberId 
     * @returns 
     */
    getMemberById(memberId) {
        const url = `${this.path}/${memberId}`;
        return this.sendGet(url);
    }

    /**
     * Send POST - /members
     * @param {*} body 
     */
    addMember(body) {
        return this.sendPost(this.path, body);
    }

    
    countNumberOfMembers() {
        return this.getMembers().then(response => {
            const memberLists = response.body
            return memberLists.length
        })
    }

}

export default MemberRequest;
