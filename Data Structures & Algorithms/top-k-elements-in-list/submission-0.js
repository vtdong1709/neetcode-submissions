class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const result = [];

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const arr = [...map].sort((a, b) => b[1] - a[1]).slice(0, k);

        for (let value of arr) {
            result.push(value[0]);
        }

        return result;
    }
}
