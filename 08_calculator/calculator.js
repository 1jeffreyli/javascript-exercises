const add = function(a, b) {
  const addition = a + b;
  return addition;
};

const subtract = function(a, b) {
  const result = a - b;
  return result;
};

const sum = sum => sum.reduce((a, b,) => a + b, 0);

const multiply = multiply => multiply.reduce((a, b) => a * b, 1);

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } 
  for (let i = num - 1; i >= 1; i--){
    num *= i;
  }
  return num;
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
