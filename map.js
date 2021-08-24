const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    let firstLetter = callback(item);  
  results.push(firstLetter);
  }
  return results;
}

const func = function (word){
  return word[0];
}
const results1 = map(words, func);


console.log(results1);

module.exports = map;
module.exports = words;
module.exports = func;

// const eqArrays = function(arr1, arr2){
//   if(arr1.length !== arr2.length){
//     return false;
//   }
//   for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       return false;
//     }
//     return true;
//   }
// }

// const assertArraysEqual = function(eqArrays) {
//   if (eqArrays === true) {
//     console.log('✅✅✅ Assertion Passed!');
//   }
//   if (eqArrays === false) {
//     console.log('🆘🆘🆘 Assertion Failed');
//   }
// };

