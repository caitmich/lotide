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

//middle function:
const middle = function(param){
  let newArr = [];
  let half = 0;
    if((param.length === 1) || (param.length === 2)){
      console.log(newArr = []);
    }
    if(param.length % 2 === 0){
      //divide the array in half
      half = param.length/2;
      newArr.push(param[half -1]);
      newArr.push(param[half]);
    } 
    if(param.length % 2 !== 0){
      //divide in half and round up
      half = Math.floor(param.length/2);
      newArr.push(param[half]);
    }
  return newArr;
};

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3]));
console.log(middle([1]));

assertArraysEqual((middle([1, 2, 3, 4])), ([2, 3]));