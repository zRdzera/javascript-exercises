const add = function(...obj) {
  return obj.reduce((acc, currentValue) => acc + currentValue, 0);
};

      /* OTHER RESOLUTION */
// const add = function(...obj) {
//   const result = obj.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   }, 0);

//   return result;
// };

const subtract = function(...obj) {
	return obj.reduce((acc, currentValue) => acc - currentValue);
};

const sum = function([...obj]) {
	const result = obj.reduce((acc, currentValue) => acc + currentValue, 0)
  return parseInt(result);
};

const multiply = function([...obj]) {
  return obj.reduce((acc, currentValue) => acc * currentValue);
};

const power = function(num, power) {
  let array = new Array();
  for(let i = 0; i < power; i++){
    array[i] = num;
  }
  return array.reduce((acc, currentValue) => acc *= currentValue);
};

const factorial = function(num) {
  let result;
 
  if(num === 0){
    result = 1;
  }
  else {
    result = num;

    for(let i = num-1; i > 0; i--){
      result *= i;
    }
  }
  return result;
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
