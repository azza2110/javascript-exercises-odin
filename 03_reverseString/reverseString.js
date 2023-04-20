const reverseString = function(inputString) {
    let reversedString = "";
    while (inputString.length > 0) {
        const nextCharacter = inputString.slice(-1);
        reversedString += nextCharacter;
        inputString = inputString.slice(0,inputString.length-1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
