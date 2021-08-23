const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  let compareArrays = eqArrays(arr1, arr2);
  if (compareArrays === true) {
    console.log(`✅✅✅ Assertion Passed! ${arr1} is equal to ${arr2}`);
  }
  if (compareArrays === false) {
    console.log(`🆘🆘🆘 Assertion Failed! ${arr1} is not equal to ${arr2}`);
  }
};


module.exports = assertArraysEqual;
