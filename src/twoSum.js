const twoSum = (nums, target) => {
    let map = new Map(); // map = []
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i]; // get value from index
        let num2 = target - num1; // num2 = 9 - 2
        if (map.has(num2)) { // if map has num2 return true
            return [map.get(num2), i]; //
        }
        // return false
        map.set(num1, i) // map.set({key=>value})
        // map = [{2=>0}, {7=>1}, {11=>2}]
    }
}

export const executeTwoSum = () => {
    const array = [2, 7, 11, 15];
    const target = [9, 13, 17, 18, 22, 26];
    for (let i = 0; i < target.length; i++) {
        const result = twoSum(array, target[i]);
        console.log(`result two sum ${target[i]} = ${result}`);
        // return result;
    }
}
