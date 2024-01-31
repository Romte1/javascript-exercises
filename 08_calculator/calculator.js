const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let total = 0;
  a.forEach((e) =>total+=e);
  return total;

};

const multiply = function(a) {
  let total = 1;
  a.forEach((e) =>total*=e);
  return total;

};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(a) {
  let factorial = 1;
	for (i = a; i > 0; i--) {
    factorial *=i;
  }
  return factorial;
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
