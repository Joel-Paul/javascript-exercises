const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
	return array.reduce((prod, num) => prod * num, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
	let prod = 1;
  for (; num > 0; num--) {
    prod *= num;
  }
  return prod;
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
