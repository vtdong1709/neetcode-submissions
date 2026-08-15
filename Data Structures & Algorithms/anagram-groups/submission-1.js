class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const stringSort = (str) => {
            return str.split('').sort().join('');
        }

        for (let str of strs) {
            const sort = stringSort(str);
            if(!map.has(sort)) {
                map.set(sort, [str]);
            } else {
                map.get(sort).push(str);
            }
        }

        return Array.from(map.values());
    }

    
}
