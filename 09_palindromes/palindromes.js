const palindromes = function (str) {
    // had to look up the solution after trying just split, reverse, and join
    // the solution first sets the string input to lower case, then replaces any non-letter
    // with empty space, thus removing punctuation
    let arr = str.toLowerCase().replace(/[^a-z]/g, "");
    // only after cleaning the string input can it be split into an array, reversed, and then
    // joined together again and assigned back to the variable arr
    return (
        arr
        .split("")
        .reverse()
        .join("") == arr
    );
};

// Do not edit below this line
module.exports = palindromes;
