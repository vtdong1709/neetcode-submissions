class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const map = new Map();

        for(let char of s) {
            map.set(char, (map.get(char) || 0) + 1 );
        }

        for(let char of t){
            if(!map.has(char)) return false;
            if(map.has(char)) {
                map.set(char, map.get(char) - 1);
            }

            if(map.get(char) === 0) map.delete(char);
        }

        return map.size === 0;

    }
}
