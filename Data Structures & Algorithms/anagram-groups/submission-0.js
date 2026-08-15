class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const result = [];
        const sortString = (str) => {
            return str.split("").sort().join("");
        };

        for(let str of strs) {
            let sorted = sortString(str);
            if(!map.has(sorted)) {
                map.set(sorted, [str]);
            }else {
                map.get(sorted).push(str);
            }
        }

        for(let value of map.values()) {
            result.push(value);
        }

        return result;
    }
}
