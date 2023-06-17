const isPalindrome = (x) => {
    const splited = x.toString().split('');
    const reversed = x.toString().split('').reverse();
    for (let i = 0; i < splited.length; i++) {
        if (splited[i] !== reversed[i]) {
            return false;
        }
    }
    return true;
}

export const executeIsPalindrome = () => {
    const nums = [121, -121, 10];
    for (let i = 0; i < nums.length; i++) {
        const result = isPalindrome(nums[i]);
        console.log(`result is palindrome ${nums[i]} = ${result}`);
        // return result;
    }
    return null;
}
