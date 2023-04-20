const findTheOldest = function(inputArray) {
    currentYear = (new Date()).getFullYear();
    let sortedByAge = inputArray.sort((a, b) => {
        let aAge = ((a.yearOfDeath == undefined) ? currentYear : a.yearOfDeath) - a.yearOfBirth;
        let bAge = ((b.yearOfDeath == undefined) ? currentYear : b.yearOfDeath) - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    })
    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
