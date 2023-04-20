function repeatString (inputString, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }
    let repeatedString = "";
    for (i=1; i<=repeats; i++) {
        repeatedString += inputString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
