class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = piles[0];

        for(let bana of piles) {
           if(bana > max) max = bana;
        }

        let left = 1;
        let right = max;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            let hoursPer = 0
            for(let bana of piles) {

                hoursPer += Math.ceil(bana / mid);
            }

            if(hoursPer > h) left = mid + 1;
            else right = mid - 1;
        }

        return left;
    }
}
