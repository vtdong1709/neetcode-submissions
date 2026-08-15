class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            if (!map.has(num)) map.set(num, 1);
            else map.set(num, map.get(num) + 1);
        }

        const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

        let result = [];
        for (let i = 0; i < k && i < sorted.length; i++) {
            result.push(sorted[i][0]);
        }

        return result;
    }
}
