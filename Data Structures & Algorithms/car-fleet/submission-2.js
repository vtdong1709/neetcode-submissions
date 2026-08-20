class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const map = [];
        for (let i = 0; i < position.length; i++) {
            map.push({ position: position[i], speed: speed[i] });
        }

        map.sort((a, b) => b.position - a.position);

        for (let i = 0; i < map.length; i ++) {
            let time = (target - map[i].position) / map[i].speed;
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
