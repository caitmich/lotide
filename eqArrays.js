const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/*
const eqArrays = function(arr1, arr2){
  if((arr1[0] === arr2[0]) && (arr1[1] === arr2[1]) && (arr1[2] === arr2[2])){
    return true;
  }
}
*/

const eqArrays = function(num1, num2){
    if(num1 === num2){
      return true;
    }
  };
  

console.log(eqArrays([1, 2, 3], [1, 2, 3]));

console.log(eqArrays([1, 2, 3], [1, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);