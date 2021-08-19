

//eqArrays:
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


//assertArraysEqual:
const assertArraysEqual = function(arr1, arr2) {
  if ((eqArrays(arr1, arr2)) === true) {
    console.log('✅✅✅ Assertion Passed!');
  }
  if ((eqArrays(arr1, arr2)) === false) {
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


const words = ["hello", "world", "lighthouse"];

console.log(assertArraysEqual(without(words, 'world'), ['hello', 'lighthouse']));