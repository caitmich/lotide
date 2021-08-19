const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
    return true;
  }
}


// const eqArrays = function(num1, num2){
//     if(num1 === num2){
//       return true;
//     }
//   };
  

console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);