const eqArrays = require('./eqArrays');


const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log('✅✅✅ Assertion Passed!');
  }
  if (eqArrays === false) {
    console.log('🆘🆘🆘 Assertion Failed');
  }
};


module.exports = assertArraysEqual;
