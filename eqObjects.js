
// eqArrays:
const eqArrays = function(arr1, arr2){
let test1 = Array.isArray(arr1);
let test2 = Array.isArray(arr2);
if(test1 === true && test2 === true){
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
    if(arr1.length !== arr2.length){
      return false;
    }
    return true;
  }
} else {
  if(arr1 === arr2){
    return true;
  } else if(arr1 !== arr2){
    return false;
  }
  
}
};

//new function:
const eqObjects = function(obj1, obj2){

  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
    for(const key of obj1Keys){
      if ((Array.isArray(obj1[key])) && (Array.isArray(obj2[key]))) {
        return (eqArrays(obj1[key], obj2[key]));
      }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;

};

const ab = { 
  a: "1", 
  b: "2" 
};
const ba = { 
  b: "2", 
  a: "1" 
};

const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


console.log(eqObjects(cd, cd2));
console.log(eqObjects(ab, ba));
console.log(eqObjects(cd, dc));


module.exports = eqObjects;