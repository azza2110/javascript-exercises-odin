const removeFromArray = function(fullArray, ...valuesToRemove) {
    for (const valueToRemove of valuesToRemove) {
        let i = 0;
        while (i <= fullArray.length - 1) {
            if (fullArray[i] === valueToRemove) {
                fullArray.splice(i,1);
            } else {
                i++;
            }
        }
    }
    return fullArray
};

// Do not edit below this line
module.exports = removeFromArray;
