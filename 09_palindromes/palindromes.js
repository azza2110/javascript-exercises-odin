const palindromes = function (input) {
  let processedString = input.toLowerCase().replace(/[^a-z]/g, "");
  let reversedString = processedString.split("").reverse().join("");
  return processedString == reversedString;
};
palindromes("Hello this is a test.")


// Do not edit below this line
module.exports = palindromes;
