
/**
 * This class is used to define String handling methods
 */
class StringUtils {

    /**
     * Generate a random string with corresponding length
     * @param {number} length The expected length of random string
     * @returns 
     */
    randomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

export default StringUtils;