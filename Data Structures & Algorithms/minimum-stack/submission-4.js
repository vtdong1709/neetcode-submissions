class MinStack {
    constructor() {
        this.nums = []; 
        this.currentMin = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.nums.push(val);
        if(this.currentMin.length === 0) {
            this.currentMin.push(val);
        } else {
            let min = this.currentMin[this.currentMin.length - 1];
            if(val < min) this.currentMin.push(val);
            else this.currentMin.push(min);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.nums.pop();
        if(this.currentMin.length > 0) {
            this.currentMin.pop();
        }
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.nums[this.nums.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.currentMin[this.currentMin.length - 1];
    }
}
