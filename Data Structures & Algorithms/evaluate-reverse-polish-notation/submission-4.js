class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ['+', '-', '*', '/'];

        for (let i = 0; i < tokens.length; i++) {
            if(!operators.includes(tokens[i])) {
                stack.push(tokens[i]);
            } else {
                let b = parseInt(stack.pop());
                let a = parseInt(stack.pop());
                switch (tokens[i]) {
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(a - b);
                        break;
                    case '*':
                        stack.push(a * b);
                        break;
                    case '/':
                        stack.push(a / b);
                        break;
                    default:
                        break;

                }
            }
        }

        return stack[0] | 0;
    }
}
