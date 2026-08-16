class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode_str = "";
        for (let str of strs) {
            encode_str += `${str.length}#${str}`;
        }

        return encode_str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let start = 0
        for(let i = 0; i < str.length; i++) {
            if(str[i] === '#') {
                let length = parseInt(str.slice(start, i), 10);
                let string = str.slice(i + 1, i + 1 + length);
                result.push(string);

                start = i + 1 + length;
                i = start - 1;
            }
        }

        return result;
    }
}
