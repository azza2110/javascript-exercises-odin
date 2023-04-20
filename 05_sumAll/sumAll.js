const sumAll = function(startNumber, endNumber) {
    if (typeof startNumber !== "number" || typeof endNumber !== "number") {
        return "ERROR";
    }
    if (startNumber < 0 || endNumber < 0) {
        return "ERROR";
    }
    if (startNumber > endNumber) {
        let tempNumber = endNumber;
        endNumber = startNumber;
        startNumber = tempNumber;
    };
    let sumTally = 0;
    for (i=startNumber; i<=endNumber; i++) {
        sumTally += i;
    }
    return sumTally;
}

// Do not edit below this line
module.exports = sumAll;
