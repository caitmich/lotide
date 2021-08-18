//eqArrays code:
const eqArrays = function(num1, num2){
  if(num1 === num2){
    return true;
  } else if(num1 !== num2){
    return false;
  }
};


//New function based on assertEqual func:
const assertArraysEqual = function(bool) {
  if (bool === true) {
    console.log('✅✅✅ Assertion Passed!');
  }
  if (bool === false) {
    console.log('🆘🆘🆘 Assertion Failed');
  }
};

assertArraysEqual(eqArrays(3, 3));
