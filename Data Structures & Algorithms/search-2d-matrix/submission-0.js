class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left1D = 0;
        let right1D = matrix.length - 1;

        while (left1D <= right1D) {
            let mid1D = Math.floor((left1D + right1D) / 2);
            let left2D = 0;
            let right2D = matrix[mid1D].length - 1;
            if (target < matrix[mid1D][0]) {
                right1D = mid1D - 1;
                continue;
            }

            if (target > matrix[mid1D][matrix[mid1D].length - 1]) {
                left1D = mid1D + 1;
                continue;
            }

            while (left2D <= right2D) {
                let mid2D = Math.floor((left2D + right2D) / 2);
                if(target === matrix[mid1D][mid2D]) return true
                else if(target < matrix[mid1D][mid2D]) right2D = mid2D - 1;
                else left2D = mid2D + 1;
            }

            return false;
        }

        return false;
    }
}
