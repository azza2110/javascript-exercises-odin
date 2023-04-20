const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(myArray) {
	return myArray.reduce((total, item) => total = total + item, 0)
};

const multiply = function(myArray) {
  return myArray.reduce((total, item) => total = total * item, 1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let total = 1;
  for (i=a; i>=1; i--) {
    total = total*i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
