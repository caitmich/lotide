//eqArrays:
const eqArrays = function(num1, num2){
  if(num1 === num2){
    return true;
  } else if(num1 !== num2){
    return false;
  }
};

//assertArraysEqual:
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log('✅✅✅ Assertion Passed!');
  }
  if (eqArrays(actual, expected) === false) {
    console.log('🆘🆘🆘 Assertion Failed');
  }
};


function without(source, itemsToRemove){
  let output = [];
  for(i = 0; i < source.length; i++){
    if(source[i] !== itemsToRemove){
      output.push(source[i]);
    }
  } 
  console.log(output);
};

//without([3, 2, 1, 6, 5], 2);

const words = ["hello", "world", "lighthouse"];
without(words, "lighthouse"); 

// Make sure the original array was not altered by the without function, using the assertArraysEqual func:


assertArraysEqual(words, ["hello", "world", "lighthouse"]);