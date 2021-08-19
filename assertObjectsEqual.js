//eqObjects function:
const eqObjects = function(obj1, obj2){
  let verif = 0;
  for(const key in obj1){
    for(const key2 in obj2){
      if((key === key2) && (obj1.key === obj2.key)){
        verif = true;
      } else {
        verif = false;
      }
    }
  }
return verif;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
    }
    if (actual !== expected) {
      console.log(`🆘🆘🆘 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };


  const ab = { a: "1", b: "2" };
  const cd = { c: "1", d: ["2", 3] };
  const ba = { b: "2", a: "1" }; 

  //assertObjectsEqual((eqObjects(ba, ab)), true);
  assertObjectsEqual(ab, ba);

  //console.log(`Example label: ${inspect(actual)}`);