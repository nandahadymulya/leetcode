const romanToInt = (s) => {
    const setValueS = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = setValueS[s[i]];
        const next = setValueS[s[i + 1]];
        if (current < next) {
            result += next - current;
            i++
        }
        else {
            result += current;
        }
    }
    return result;
}

export const executeRomanToInt = (s) => {
    const symbols = ["III", "LVIII", "MCMXCIV"];
    for (let i = 0; i < symbols.length; i++) {
        console.log(symbols[i]);
        const result = romanToInt(symbols[i]);
        console.log(`result is roman to int ${symbols[i]} = ${result}`);
        // return result;
    }
    return null;
}
