class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const answer = [];

        for (let i = 0; i < temperatures.length; i++) {
            if(stack.length === 0 ||
            temperatures[i] <= temperatures[stack[stack.length - 1]]) {
                stack.push(i);
                answer[i] = 0;
            } else {
                while(stack.length > 0 && 
                temperatures[i] > temperatures[stack[stack.length - 1]]) {
                    answer[stack[stack.length - 1]] = i - stack[stack.length - 1];
                    stack.pop();
                }

                stack.push(i);
                answer[i] = 0;
            }
        }

        return answer;
    }
}
